import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent {


  constructor(private category:CategoriesService,private snack:MatSnackBar){}

  public catagory={

    title:'',
    description:''
  }

  formsubmit(){
    if(this.catagory.title.trim()=='' ||this.catagory.title.trim()==null)
    {
     
      this.snack.open(" **category name  is required !!","☹️",{
        duration:3000
      });
      return ;
  
    }
 else
    //add here(
    this.category.addcategory(this.catagory).subscribe((data:any)=>{
      this.snack.open(" **Success !!","<>",{
        duration:3000
      });
      (error: any)=>{
        this.snack.open(" **Success !!","<>",{
          duration:3000
        });
      }
    })
  }

}
