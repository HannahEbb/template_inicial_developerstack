import { Answer } from "../types/answerTypes";
import { prisma } from '../config/database';

export async function insert(answerData: Answer) {
    const {
     userId,
     questionId,
     answer
    } = answerData;
  
    await prisma.answers.create({
        data: {
            userId,
            questionId,
            answer
        }
    })
  
  }