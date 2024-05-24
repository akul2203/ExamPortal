import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {


  categories=[
    {
      cid:'',
      title:'',
      description:''
    },

  ]

 constructor(private category:CategoriesService,private span:MatSnackBar){}


  ngOnInit(): void {
  this.category.categories().subscribe((data:any)=>{  
    this.categories=data;
    console.log(this.categories);
  },
  (error)=>{
    console.log(error);
    this.span.open("error at view category","ok")

  }
  )
  }
}
