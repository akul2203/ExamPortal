import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizServiceService } from 'src/app/Services/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit{

  qid:any;
  quiz:any;
  constructor(private route:ActivatedRoute,private qservice:QuizServiceService,private router:Router){}

  ngOnInit(): void {
    this.qid=this.route.snapshot.params['qid'];
    this.qservice.getQuiz(this.qid).subscribe(
      (data:any)=>{

        this.quiz=data;
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    )
    //console.log(this.qid)
  }

  startquiz(){
    Swal.fire({
      title: 'Do you want to start the quiz?',
    
      showCancelButton: true,
      confirmButtonText: 'Start',
      cancelButtonText:'Don`t Start',
      icon:'info'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.router.navigate(['/start/'+this.qid])
        Swal.getPopup()
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}
