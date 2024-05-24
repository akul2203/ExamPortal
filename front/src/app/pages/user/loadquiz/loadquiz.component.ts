import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizServiceService } from 'src/app/Services/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loadquiz',
  templateUrl: './loadquiz.component.html',
  styleUrls: ['./loadquiz.component.css']
})
export class LoadquizComponent implements OnInit {

  catId: any;
  quizzes: any;
  constructor(private route: ActivatedRoute, private qservice: QuizServiceService) { }


  noQuizzesAvailable(): boolean {
    
    return this.quizzes.length === 0;
  }
  ngOnInit(): void {


    this.route.params.subscribe((params) => {
      this.catId = params['catId'];
      console.log(params['catId'])
      if (this.catId == 0) {
        this.qservice.getactivequizzes().subscribe(
          (data: any) => {
            this.quizzes = data;
            console.log(this.quizzes)

          },
          (error) => {
            Swal.fire('error', 'eror at loadquizzes at load quiz component', 'error');
          }
        )
        console.log("load all quiz")
      }
      else {
        console.log("load specific quizes")
        this.qservice.getactivequizofcategory(this.catId).subscribe(
          (data: any) => {
            this.quizzes = data;
            
            console.log(data);
          },
          (error) => {
            Swal.fire('Error', 'error in loading data', 'error');
            console.log(error)
          }
        )
      }
    })

  }

}
