 package com.exam.service;

import java.util.Set;

import com.exam.entity.app.Question;
import com.exam.entity.app.Quiz;

public interface IQuestionService {
	public Question addQuestion(Question question);

	public Question updateQuestion(Question question);

	public Set<Question> getQuestions();

	public Question getQuestion(Long questionId);
	
	public Set<Question> getQuestionsOfQuiz(Quiz quiz);

	public void deleteQuestion(Long questionId);
	
	
	
}
