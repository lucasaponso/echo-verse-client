To execute task1 run the following commands:

1. copy the .env file to task1/

2. To enter the env:
python -m env env

3. activate the env:
source venv/bin/activate.fish

4. install dependencies:
pip install -r requirements.txt

5. to create the login table with 10 entries:
python3 init_login_tab.py

6. to create the music table with data from the .json file, do this:
python3 init_music_tab.py
