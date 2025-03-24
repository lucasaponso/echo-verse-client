import os
from dotenv import load_dotenv

load_dotenv()

endpoint_url: str = 'http://localhost:8000'
region_name: str = 'us-east-1'

AWS_ACCESS_KEY_ID: str = os.getenv("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY: str = os.getenv("AWS_SECRET_ACCESS_KEY")
AWS_SESSION_TOKEN: str = os.getenv("AWS_SESSION_TOKEN")

os.environ['AWS_ACCESS_KEY_ID'] = AWS_ACCESS_KEY_ID
os.environ['AWS_SECRET_ACCESS_KEY'] = AWS_SECRET_ACCESS_KEY
os.environ['AWS_SESSION_TOKEN'] = AWS_SESSION_TOKEN
