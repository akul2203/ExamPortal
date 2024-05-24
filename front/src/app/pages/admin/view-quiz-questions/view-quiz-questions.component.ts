import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private queservice: QuestionService) { }

  qId: any;
  qTitle: any;

  Questions:any;

  ngOnInit(): void {
    this.qId = this.route.snapshot.params['id'];
    this.qTitle = this.route.snapshot.params['title'];
    this.queservice.getQuestionsOfQuiz(this.qId).subscribe((data) => {
      console.log(data);
      this.Questions=data;
    },
      (error) => {
        Swal.fire('not get data')
      })
    console.log(this.qId, this.qTitle)
  }

  deletequestion(queid: any) {
    console.log(queid + ' hello');
    this.queservice.deletequestion(queid).subscribe(
      (data) => {
        console.log(data); // Log the response
        Swal.fire('Successfully', 'Quiz deleted', 'success');
      },
      (error) => {
        window.location.reload();
        console.error(error); // Log the error

        Swal.fire('Successfully', 'Quiz deleted', 'success');
        // Swal.fire('Failed', 'Failed to delete', 'error');            ///required to check about why data not get back as positive result and redirect on error direct
      }
    );
  }

}
