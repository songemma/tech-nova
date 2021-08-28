
from flask_restful import Resource, reqparse

class ApiHandler(Resource):
  def get(self):
    return {
      "result_status": "SUCCESS",
      "message": "Hello API Handler!"
      }

  def post(self):
    print(self)
    parser = reqparse.RequestParser()
    parser.add_argument("type", type=str)
    parser.add_argument("message", type=str)

    args = parser.parse_args()

    print(args)
    # note, the post req from frontend needs to match the strings here (e.g. 'type and 'message')

    request_type = args["type"]
    request_json = args["message"]
    # ret_status, ret_msg = ReturnData(request_type, request_json)
    # currently just returning the req straight
    ret_status = request_type
    ret_msg = request_json

    if ret_msg:
      message = f"Your Message Requested: {ret_msg}"
    else:
      message = "No message"
    
    final_ret = {"message_status": "SUCCESS", "message": message}

    return final_ret