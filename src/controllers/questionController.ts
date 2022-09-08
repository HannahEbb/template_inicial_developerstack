import { Request, Response } from 'express';
import * as questionServices from '../services/questionService';
import * as answersServices from '../services/answerService';

export async function createQuestion(req: Request, res: Response) {
  const { askedBy, question } = req.body;

  await questionServices.newQuestion(askedBy, question);

  res.sendStatus(201); 

}

export async function createAnswer(req: Request, res: Response) {
  const { id } = req.params;
  const { answeredBy, answer } = req.body;

  await answersServices.newAnswer(answeredBy, Number(id), answer);

  res.sendStatus(201); 
}


export async function get(req: Request, res: Response) {
  await questionServices.getQuestions();

  res.sendStatus(200);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;

  await questionServices.getQuestionsById(Number(id));

  res.sendStatus(200);
}
