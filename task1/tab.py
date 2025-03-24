import boto3
from botocore.exceptions import ClientError
import sys
import json
from typing import TextIO
from constants import *

class Tab:
    # Constructor to initialize the attributes
    def __init__(self, tab_name: str, input_file: TextIO, tab_key_schema: dict[str, str], tab_attribute_def: dict[str, str], pro_throughput: dict[str, str]):
        self.tab_name = tab_name  # attribute for table name
        self.tab_key_schema = tab_key_schema  # attribute for key schema
        self.tab_attribute_def = tab_attribute_def  # attribute for attribute definitions
        self.pro_throughput = pro_throughput  # attribute for provisioned throughput
        self.input_file = input_file  # attribute for provisioned throughput

    # Method to create the table
    def create_table(self) -> None:
        dynamodb = boto3.client('dynamodb', region_name=region_name, endpoint_url=endpoint_url)

        try:
            try:
                dynamodb.describe_table(TableName=self.tab_name)
                print(f"Table '{self.tab_name}' exists, deleting it...")
                dynamodb.delete_table(TableName=self.tab_name)
                print(f"Table '{self.tab_name}' deleted successfully.")
            except dynamodb.exceptions.ResourceNotFoundException:
                print(f"Table '{self.tab_name}' does not exist, no need to delete.")
                sys.exit()

            print("Attempting to create table; please wait...")

            response = dynamodb.create_table(
                TableName=self.tab_name,
                KeySchema=self.tab_key_schema,
                AttributeDefinitions=self.tab_attribute_def,
                ProvisionedThroughput=self.pro_throughput
            )

            # Wait for the table to be created
            table = boto3.resource('dynamodb', region_name=region_name, endpoint_url=endpoint_url).Table(self.tab_name)
            table.meta.client.get_waiter('table_exists').wait(TableName=self.tab_name)

            print(f"Success. Table status: {response['TableDescription']['TableStatus']}")

            self.add_entries(table, self.input_file)

        except ClientError as e:
            print("Unable to create table:")
            print(e.response['Error']['Message'])

        # Method to add entries to the table using data from a JSON structure
    # Method to add entries to the table using data from a JSON file
    # Method to add entries to the table using data from a JSON file
    def add_entries(self, table: boto3, file_path: TextIO) -> None:
        try:
            with open(file_path, 'r') as file:
                json_data = json.load(file)
            
            # Check if file is 'songs.json'
            if file_path == "2025a1.json":
                # Loop through each song in the songs JSON list
                for i, song in enumerate(json_data["songs"]):
                    title: str = song["title"]
                    artist: str = song["artist"]
                    year: str = song["year"]
                    album: str = song["album"]
                    img_url: str = song["img_url"]

                    try:
                        table.put_item(Item={'title': title, 'artist': artist, 'year': year, 'album': album, 'img_url': img_url})
                        print(f"Added entry {i + 1}: {title}")
                    except ClientError as e:
                        print(f"Error adding entry {i + 1}: {e.response['Error']['Message']}")

            # Check if file is 'users.json'
            elif file_path == "users.json":
                # Loop through each user in the users JSON list
                for i, user in enumerate(json_data["users"]):
                    email: str = user["email"]
                    user_name: str = user["user_name"]
                    password: str = user["password"]

                    try:
                        table.put_item(Item={'email': email, 'user_name': user_name, 'password': password})
                        print(f"Added entry {i + 1}: {email}")
                    except ClientError as e:
                        print(f"Error adding entry {i + 1}: {e.response['Error']['Message']}")
                
        except FileNotFoundError:
            print(f"File not found: {file_path}")
        except json.JSONDecodeError:
            print(f"Error decoding JSON from the file: {file_path}")