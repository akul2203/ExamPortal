package com.exam.service.impl;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.entity.app.Category;
import com.exam.entity.app.Quiz;
import com.exam.repo.IQuizRepository;
import com.exam.service.IQuizService;

@Service
public class QuizServiceImpl implements IQuizService {

	@Autowired
	private IQuizRepository quizRepo;
	
	
	@Override
	public Quiz addQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		return this.quizRepo.save(quiz);
	}

	@Override
	public Quiz updateQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		return this.quizRepo.save(quiz);
	}

	@Override
	public Set<Quiz> getQuizes() {
		// TODO Auto-generated method stub
		return new HashSet<>(this.quizRepo.findAll());
	}

	@Override
	public Quiz getQuiz(Long quizId) {
		// TODO Auto-generated method stub
		System.out.println(quizId);
		return this.quizRepo.findById(quizId).get();
	}

	@Override
	public void deleteQuiz(Long quizId) {
		
		this.quizRepo.deleteById(quizId);
	}

	@Override
	public List<Quiz> getQuizesOfCategory(Category c) {
         return this.quizRepo.findBycategory(c);
		
	}

//	get active quizes
	
	@Override
	public List<Quiz> getActiveQuizes() {
		// TODO Auto-generated method stub
		return this.quizRepo.findByActive(true);
	}

	@Override
	public List<Quiz> getQuizByCategoryAndActive(Category c) {
		// TODO Auto-generated method stub
		
		return this.quizRepo.findByCategoryAndActive(c, true);
	}
    

}
