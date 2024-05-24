package com.exam.service;

import java.util.List;
import java.util.Set;

import com.exam.entity.app.Category;
import com.exam.entity.app.Quiz;

public interface IQuizService {
	public Quiz addQuiz(Quiz quiz);

	public Quiz updateQuiz(Quiz quiz);

	public Set<Quiz> getQuizes();

	public Quiz getQuiz(Long quizId);

	public void deleteQuiz(Long quizId);

	public List<Quiz> getQuizesOfCategory(Category c);
	
	public List<Quiz> getActiveQuizes();
	
	public List<Quiz> getQuizByCategoryAndActive(Category c);
}
