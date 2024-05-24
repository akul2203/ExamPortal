import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrls from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  //get question 
  public getQuestionsOfQuizfortest(qid: any)
  {
    return this.http.get(`${baseUrls}/questions/quiz/all/${qid}`);
  }
  //get que for final test for user
  public getQuestionsOfQuiz(qid: any)
  {
    return this.http.get(`${baseUrls}/questions/quiz/all/${qid}`);
  }

  //add que

  public addquestion(question:any){
    return this.http.post(`${baseUrls}/questions/`,question);
  }


  //delete que
  public deletequestion(qid:any){
    return this.http.delete(`${baseUrls}/questions/${qid}`);
  }
}
