import os
from dotenv import load_dotenv

load_dotenv()

##load aws access tokens
AWS_ACCESS_KEY_ID: str = os.getenv("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY: str = os.getenv("AWS_SECRET_ACCESS_KEY")
AWS_SESSION_TOKEN: str = os.getenv("AWS_SESSION_TOKEN")

# S3 Bucket details
BUCKET_NAME = "your-bucket-namijjjjuhe"  # Replace with your actual S3 bucket name
REGION = "us-east-1"  # Change region if needed
JSON_FILE_PATH = "2025a1.json"  # Path to the JSON file