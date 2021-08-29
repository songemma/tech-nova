
import os
import csv
import json
import boto3
from pathlib import Path
from contextlib import closing
from flask_restful import Resource, reqparse

ACCESS_KEY = ""
SECRET_KEY = ""

cur_dir_path = Path(__file__).resolve().parent

with open(f"{cur_dir_path}/voice_map.json") as f:
  voice_map = json.load(f)

class ApiHandler(Resource):
  def get(self):
    return {
      "result_status": "SUCCESS",
      "message": "Hello API Handler!"
      }

class CreateUser(Resource):
  def post(self):
    parser = reqparse.RequestParser()
    
    parser.add_argument("firstName", type=str)
    parser.add_argument("lastName", type=str)
    parser.add_argument("language", type=str)
    parser.add_argument("pronouns", type=str)
    parser.add_argument("bio", type=str)

    args = parser.parse_args()

    print(args)
    # note, the post req from frontend needs to match the strings here (e.g. 'type and 'message')

    firstName = args["firstName"]
    lastName = args["lastName"]
    language = args["language"]
    pronouns = args["pronouns"]
    bio = args["bio"]

    fullName = firstName + lastName
    voiceId = voice_map[language]

    mp3FileName = f"{fullName}_{language}.mp3"
    mp3Path = f"{cur_dir_path.parent}/front-end/public/{mp3FileName}"
    print(mp3Path)
    if os.path.isfile(mp3Path):
      print("already exists")
      pass
    else:
      print("making mp3")
      client = boto3.client(
        "polly",
        aws_access_key_id=ACCESS_KEY,
        aws_secret_access_key=SECRET_KEY
      )
      response = client.synthesize_speech(
          Engine='standard',
          OutputFormat='mp3',
          Text=fullName,
          TextType='text',
          VoiceId=voiceId
      )

      with closing(response["AudioStream"]) as stream:
          # Open a file for writing the output as a binary stream
          with open(mp3Path, "wb") as file:
              file.write(stream.read())
    
      with open(f"{cur_dir_path}/database.csv", "a", newline="") as f:
          writer = csv.writer(f, delimiter=',')
          writer.writerow([firstName, lastName, mp3FileName, pronouns, bio])
    
    return {"msg": "Success!"}

class GetUsers(Resource):
  def get(self):
    users = []
    with open(f"{cur_dir_path}/database.csv", newline='') as f:
        reader = csv.reader(f, delimiter=',')
        for row in reader:
          users.append({
              "firstName": row[0],
              "lastName": row[1],
              "mp3FileName": row[2],
              "pronouns": row[3],
              "bio": row[4]
          })
    return users