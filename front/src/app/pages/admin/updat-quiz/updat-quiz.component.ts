import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/Services/categories.service';
import { QuizServiceService } from 'src/app/Services/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updat-quiz',
  templateUrl: './updat-quiz.component.html',
  styleUrls: ['./updat-quiz.component.css']
})
export class UpdatQuizComponent implements OnInit{
 
  constructor(private route:ActivatedRoute,private _quiz:QuizServiceService,private cat:CategoriesService,private router:Router){}

  add(b:any){
    this.quiz.active = b;
}

  qId=0;
  quiz: any;
  categories=[
    {
      cid:'',
      title:'',
      description:''
    }]


    //update quize
    public updatedata()
    {

      this._quiz.updateQuiz(this.quiz).subscribe((data)=>{
        Swal.fire('success','update success','success').then((e)=>{
          this.router.navigate(['admin/view-quize']);
        })
      },
      (error)=>{
        Swal.fire('error','error in update','error');
      }
      );
    }


    
  ngOnInit(): void {

      this.qId = this.route.snapshot.params['qid'] ;
     
     this._quiz.getQuiz(this.qId).subscribe((data:any)=>
     {
      this.quiz=data;
     
     },
     (error)=>{
      alert('not fetched')
     }
     );

     this.cat.categories().subscribe((data:any)=>
     {
      this.categories=data;
    
     },
     (error)=>{
      alert('not fetched categories')
     });


    }


}
