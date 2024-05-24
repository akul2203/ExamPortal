import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit{
 
  qid:any;
  ques:any;
  issubmit=false;
  marksGot=0;
  correctAnswer=0;
  attempted=0;
  timer:any;
 
  constructor(private locationst:LocationStrategy,
  private route:ActivatedRoute,
  private qservice:QuestionService
  ){}



  ngOnInit(): void {
    this.preventbackbutton();
  this.qid=this.route.snapshot.params['qid'];
   this.loadquestions();
  }




  preventbackbutton()
  {
    history.pushState(null,location.href);
    this.locationst.onPopState(()=>{
      history.pushState(null,location.href);
    });
  }



  //load queestions

  loadquestions()
  {
    this.qservice.getQuestionsOfQuizfortest(this.qid).subscribe(
      (data)=>{
     
        this.ques=data;

        //required dynamiic changes
        this.timer=this.ques.length*2*60;

        this.ques.forEach((q:any) => {
          q['givenanswer'] = '';
          
        });
        console.log(data);
        this.starttimer();

      },
      (error)=>{
        Swal.fire('error','error at fetch que from database','error')
        console.log(error);
      }
    );
  }

  submitquiz()
  {
    this.issubmit=true;
    Swal.fire({
      title: 'Do you want to Submit the quiz?',
    
      showCancelButton: true,
      confirmButtonText: 'Submit',
      icon:'info'
    }).then((e)=>{
      if(e.isConfirmed)
      {
        //calculations
      this.evalquiz();
        console.log("correct answer"+this.correctAnswer);
        console.log("marks got"+this.marksGot)  
        console.log("attempted"+this.attempted) 
      }
    })
  }


  starttimer(){
    let t=window.setInterval(()=>
    {

      if(this.timer<=0)
      {
        this.evalquiz();
        clearInterval(t);
      }
      else{
        this.timer--;
      }
    },1000);
  }

  getformatedtime()
  {
    let mm=Math.floor(this.timer/60)
    let ss= this.timer-mm*60;
    return `${mm} min : ${ss} sec.`;
  }

  evalquiz()
  {
    this.ques.forEach(
      (q:any)=>{
        if(q.givenanswer==q.answer)
        {
          this.correctAnswer++;
          let marksSingle=this.ques[0].quiz.maxMarks/this.ques.length;
          this.marksGot +=marksSingle;
        }
        if(q.givenanswer.trim()!='')
        {
          this.attempted++;
        }

      }
    )
  }
}
