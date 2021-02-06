import { ObjectId } from "bson";
import { Response } from "express";

export interface AnswerData {
  code: number;
  text: any;
}

export interface ApiResponse extends Response {
  populate: (data: any) => Response;
  answer: (status: number, data: any) => Response;
  answerFrom: (data: AnswerData) => Response;
  locals: {
    context: ObjectId;
  };
}
