import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriesService } from 'src/app/Services/categories.service';
import { QuizServiceService } from 'src/app/Services/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quizes',
  templateUrl: './add-quizes.component.html',
  styleUrls: ['./add-quizes.component.css']
})
export class AddQuizesComponent implements OnInit{

  categories=[
    {
      cid:'',
      title:''
    }
  ];

  quizeData={
     title:'',
     description:'',
     maxMarks:'',
     numberOfQuestions:'',
     active:'',
     category:{
      cid:'',
      title:''
     },
  }; 

   add(b:any){
        this.quizeData.active = b;
   }

  constructor(private cat:CategoriesService,private snack:MatSnackBar,private quizservice:QuizServiceService){}
  ngOnInit(): void {
   this.cat.categories().subscribe(
    (data:any)=>{
      //when category loaded
      this.categories=data;
      console.log(this.categories);
    },
    (error)=>{
      console.log(error);
      this.snack.open(" **Error at fetching data from category list !!","<>",{
        duration:3000
      });
    }
   );

  }

  addQuiz(){
    if(this.quizeData.title.trim()=='' ||this.quizeData.title.trim()==null)
    {
      this.snack.open('Title Required !!','',{
        duration:3000
      });
      return;
    }
    //validation....
   console.log(this.quizeData)

    //call to server:- add quize
     this.quizservice.addQuize(this.quizeData).subscribe((data:any)=>{
      Swal.fire('Success', 'Quize is Added Successfully ', 'success');
      // Swal.fire('Any fool can use a computer');
    
      (error: any)=>{
        this.snack.open(" **Error !!","<>",{
          duration:3000
        });
      }
    })

  }

} 
