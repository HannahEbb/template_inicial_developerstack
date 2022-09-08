import * as answerRepository from '../repositories/answerRepository';


export async function newAnswer(answeredBy: number, questionId: number, answer: string) {
    const userId = answeredBy;
    const answerData = {userId, questionId, answer}
    await answerRepository.insert(answerData);
   
  }
