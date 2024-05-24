  package com.exam.controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.entity.app.Category;
import com.exam.entity.app.Quiz;
import com.exam.service.IQuizService;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {
    @Autowired
    private IQuizService quizService;
    
    //add quiz
    @PostMapping("/")
    public ResponseEntity<Quiz> addQuiz(@RequestBody Quiz quiz){
    	return ResponseEntity.ok(this.quizService.addQuiz(quiz));
    }
    
    //update quiz
    @PutMapping("/")
    public ResponseEntity<Quiz> updateQuiz(@RequestBody Quiz quiz){
    	return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
    }
    
    //get quizes
    @GetMapping("/")
    public ResponseEntity<?> getQuizes(){
    
    	return ResponseEntity.ok(this.quizService.getQuizes());
    }
    
    //get quiz
    @GetMapping("/{quizId}")
    public Quiz getQuiz(@PathVariable("quizId") Long quizId) {
    	return this.quizService.getQuiz(quizId); 
    }
    
    //delete Quiz
    @DeleteMapping("/{quizId}")
    public ResponseEntity<?> deleteQuiz(@PathVariable("quizId") Long quizId) {
    	this.quizService.deleteQuiz(quizId);
    	return ResponseEntity.ok("User Deleted UserId: "+quizId);
    }
    
    @GetMapping("/category/{cId}")
    public List<Quiz> getQuizByCategory(@PathVariable("cId") Long cId){
    	Category c = new Category();
    	c.setCId(cId);    	
    	return this.quizService.getQuizesOfCategory(c); 
    }
  
    
    //active quizes
    @GetMapping("/active")
    public List<Quiz> getActiveQuiz(){
    	return this.quizService.getActiveQuizes();
    }
    
    @GetMapping("/category/active/{cid}")
    public List<Quiz> getActiveQuizesByCid(@PathVariable("cid") Long cid){
    	Category c = new Category();
    	c.setCId(cid);
    	return this.quizService.getQuizByCategoryAndActive(c);
    }
    
}
