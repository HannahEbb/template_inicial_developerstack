import * as questionRepository from '../repositories/questionRepository';


export async function newQuestion(askedBy: number, question: string) {
    const userId = askedBy;
    const questionData = {userId, question}
    await questionRepository.insert(questionData);
   
  }

  export async function getQuestions() {
    const questions = await questionRepository.get();
    return questions;
  }

  export async function getQuestionsById(id: number) {
  
    const question = await questionRepository.getById(id);
    return question;
  }