import boto3
import requests
import json
from botocore.exceptions import ClientError
from constants import *

# Create an S3 global client
s3 = boto3.client("s3")

# Function to create bucket if it doesn't exist
def create_bucket(bucket_name: str, region: str) -> None:
    try:
        s3.create_bucket(Bucket=bucket_name)  # No LocationConstraint needed for us-east-1
        
        print(f"Bucket '{bucket_name}' created successfully!")
    except ClientError as e:
        if e.response["Error"]["Code"] == "BucketAlreadyOwnedByYou":
            print(f"Bucket '{bucket_name}' already exists.")
        else:
            print(f"Error creating bucket: {e}")
            exit(1)

def load_data(file_path: str) -> str:
    # Step 2: Load JSON data from file
    try:
        with open(file_path, "r") as file:
            data: str = json.load(file)
            return data
    except FileNotFoundError:
        print(f"Error: The file '{file_path}' was not found.")
        exit(1)
    except json.JSONDecodeError:
        print(f"Error: Failed to parse JSON in '{file_path}'.")
        exit(1)


create_bucket(bucket_name=BUCKET_NAME, region=REGION)

data: str = load_data(JSON_FILE_PATH)

for song in data.get("songs", []):
    image_url = song.get("img_url")
    if not image_url:
        print(f"Skipping {song.get('title', 'Unknown')} - No image URL found.")
        continue

    file_name = image_url.split("/")[-1]  # Extract file name from URL

    try:
        # Download image
        response = requests.get(image_url)
        response.raise_for_status()  # Raise error for bad status codes

        # Upload to S3
        s3.put_object(Bucket=BUCKET_NAME, Key=file_name, Body=response.content, ContentType="image/jpeg")
        print(f"Uploaded {file_name} to {BUCKET_NAME}")

    except requests.exceptions.RequestException as e:
        print(f"Failed to download {image_url}: {e}")
    except Exception as e:
        print(f"Failed to upload {file_name} to S3: {e}")
