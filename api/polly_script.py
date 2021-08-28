
import os
import json
import boto3
import subprocess
from contextlib import closing


"""
client = boto3.client("polly")

response = client.describe_voices(
    Engine='standard',
    IncludeAdditionalLanguageCodes=True
)

print(response)
"""


"""
client = boto3.client("polly")
response = client.synthesize_speech(
    Engine='standard',
    OutputFormat='mp3',
    Text='Aditi Rajnish',
    TextType='text',
    VoiceId='Aditi'
)

with closing(response["AudioStream"]) as stream:
    # Open a file for writing the output as a binary stream
    with open("test_speech.mp3", "wb") as file:
        file.write(stream.read())

# play MP3 file on Mac
subprocess.call(["open", "test_speech.mp3"])

# integrate w/ React: https://www.powerupcloud.com/text-to-speech-using-amazon-polly-with-react-js-python/
"""


voice_map = {} # {key: value} -> {LanguageName, Id}
with open("describe_voices.json") as f:
    voices = json.load(f)["Voices"]
    for v in voices:
        language_name = v["LanguageName"]
        voice_id =  v["Id"]
        voice_map[language_name] = voice_id

with open("voice_map.json", "w") as f:
    json.dump(voice_map, f, indent=4) 
    