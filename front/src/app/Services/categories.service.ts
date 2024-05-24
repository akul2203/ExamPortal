import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrls from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }
//load all categories
  public categories(){
    return this.http.get(`${baseUrls}/category/`);
  }

  //add category
  /**
   * addcategory
   */
  public addcategory(catagory:any) {
    console.log("error at category add category/category.service.ts");
    return this.http.post(`${baseUrls}/category/`,catagory);
  }
}
