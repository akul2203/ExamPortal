package com.exam.controler;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.exam.entity.app.Question;
import com.exam.entity.app.Quiz;
import com.exam.service.IQuestionService;
import com.exam.service.IQuizService;


@RestController
@RequestMapping("/questions")
@CrossOrigin("*")
public class QuestionController {

	@Autowired
	private IQuestionService questionService;
	@Autowired
	private IQuizService quizService;
	

	
	
	//add question
	@PostMapping("/")
	public ResponseEntity<Question> addQuestion(@RequestBody Question question){
	
		return ResponseEntity.ok(this.questionService.addQuestion(question));
		
	}
	
	//update question
	@PutMapping("/")
	public ResponseEntity<Question> updateQuestion(@RequestBody Question question){
		
		return ResponseEntity.ok(this.questionService.updateQuestion(question));
		
	}
	
	// get all questions of any quiz
	@GetMapping("/quiz/{quizId}")
	public ResponseEntity<?> getQuestionOfQuiz(@PathVariable("quizId") Long quizId){
//		Quiz quiz = new Quiz();
//		quiz.setQId(quizId);
//		Set<Question> questionsOfQuiz = this.questionService.getQuestionsOfQuiz(quiz);
//		return ResponseEntity.ok(questionsOfQuiz);
		
		Quiz quiz = this.quizService.getQuiz(quizId);
		Set<Question> questions = quiz.getQuestions();
		List<Question> list = new ArrayList(questions);
		
		if (list.size() > Integer.parseInt(quiz.getNumberOfQuestions())) 	
			list.subList(0, Integer.parseInt(quiz.getNumberOfQuestions() + 1));
	
		list.forEach(q->q.setAnswer(""));
		Collections.shuffle(list);
		return ResponseEntity.ok(list);
	}
	
	
	@GetMapping("/quiz/all/{quizId}")
	public ResponseEntity<?> getQuestionOfQuizAdmin(@PathVariable("quizId") Long quizId){

		Quiz quiz = new Quiz();
		quiz.setQId(quizId);
		Set<Question> questionsOfQuiz = this.questionService.getQuestionsOfQuiz(quiz);
	
		return ResponseEntity.ok(questionsOfQuiz);
	}

	
	
	
	//get single questions
	@GetMapping("/{quesId}")
	public Question getQuestion(@PathVariable("quesId") Long quesId) {
		
		return this.questionService.getQuestion(quesId);
		
	}
	
	
	
	
	//delete single Question
	@DeleteMapping("/{quesId}")
	public ResponseEntity<?> deleteQuestion(@PathVariable("quesId") Long quesId) {
		
		this.questionService.deleteQuestion(quesId);
		return ResponseEntity.ok("Question Deleted questionID: "+quesId);
	}
	
	
	
	
	
}
