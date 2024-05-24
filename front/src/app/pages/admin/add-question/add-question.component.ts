import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit{
  

  public Editor = ClassicEditor;
  qId:any;
  qTitle:any;

  question={
    quiz:{
      qid:''
     },
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
  }
  constructor(private route:ActivatedRoute,private snack:MatSnackBar,private Qservice:QuestionService,private router:Router){}
  
  ngOnInit(): void {
   
    this.qId = this.route.snapshot.params['id'] ;
    this.qTitle = this.route.snapshot.params['title'] ;
    //console.log(this.qId + this.qTitle);
    this.question.quiz['qid']=this.qId;
  }



  addQuestion(){
    if(this.question.content.trim()=='' ||this.question.content.trim()==null)
    {
      this.snack.open('Title Required !!','',{
        duration:3000
      });
      return;
    }
    //validation....
   console.log(this.question)

    //call to server:- add quize
     this.Qservice.addquestion(this.question).subscribe((data:any)=>{
      Swal.fire('Success', 'Question is Added Successfully ', 'success').then((e)=>{
        this.router.navigate(['admin/view-questions',this.qId,this.qTitle]);
      }),
    
      (error: any)=>{
        this.snack.open(" **Error !!","<>",{
          duration:3000
        });
      }
    })

  }

}
