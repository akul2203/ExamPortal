import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizServiceService } from 'src/app/Services/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizes',
  templateUrl: './view-quizes.component.html',
  styleUrls: ['./view-quizes.component.css']
})
export class ViewQuizesComponent implements OnInit {

  quizzes = [

    {
      qid: '',
      title: '',
      description: '',
      maxMarks: '',
      numberOfQuestions: '',
      active: '',
      category: {
        title: ''

      }
    }
  ]

  constructor(private quizeservice: QuizServiceService, private snack: MatSnackBar) { }


  ngOnInit(): void {
    this.quizeservice.quizzes().subscribe((data: any) => {
      this.quizzes = data;
      console.log(this.quizzes);
    },
      (error)=> {
        console.log(error);
        this.snack.open("error at view quizzes", "ok")

      }
    )
  }

  deletequiz(ids: any) {
    console.log(ids + ' hello');
    this.quizeservice.deletequizee(ids).subscribe(
      (data) => {
        console.log(data); // Log the response
        this.quizzes=this.quizzes.filter((quiz)=>quiz.qid != ids);
        Swal.fire('Successfully', 'Quiz deleted', 'success');
      },
      (error) => {
        window.location.reload();
        console.error(error); // Log the error
        Swal.fire('Failed', 'Failed to delete', 'error');
      }
    );
  }

}
