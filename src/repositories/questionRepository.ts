import { Question, QuestionId } from "../types/questionTypes";
import { prisma } from '../config/database';

export async function insert(questionData: Question) {
    const {
     userId,
     question
    } = questionData;
  
    await prisma.questions.create({
        data: {
            userId,
            question
        }
    })
  
  }

  export async function get() {
    await prisma.questions.findMany();
  }

  export async function getById(id: number) {
    await prisma.questions.findUnique({
        id: id
    });
  }