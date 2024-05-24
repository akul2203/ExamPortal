import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrls from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  constructor(private http:HttpClient) { }

  //load all categories
  public quizzes(){
    return this.http.get(`${baseUrls}/quiz/`);
  }

   
  //add quize using obj.
  public addQuize(Quiz:any) {
    
    return this.http.post(`${baseUrls}/quiz/`,Quiz);
  }

  ///delete quize using id of quize
  public deletequizee(qid:any)
  {
    console.log(qid+' hello2');
    return this.http.delete(`${baseUrls}/quiz/${qid}`);
  }

  ///bget single quiz

  public getQuiz(qid:any){
    return this.http.get(`${baseUrls}/quiz/${qid}`);
  }

  //update Quize

  public updateQuiz(quiz:any)
  {
    return this.http.put(`${baseUrls}/quiz/`,quiz);
  }

  //get quizzes  of category

  public  getquizofcategory(cId:any)
  {
      return this.http.get(`${baseUrls}/quiz/category/${cId}`);
  }

  //get active quiz
  public  getactivequizzes()
  {
      return this.http.get(`${baseUrls}/quiz/active`);
  }

   //get active quizzes  of category
   public  getactivequizofcategory(cId:any)
   {
       return this.http.get(`${baseUrls}/quiz/category/active/${cId}`);
   }
}
