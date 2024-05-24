package com.exam.service.impl;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.entity.app.Question;
import com.exam.entity.app.Quiz;
import com.exam.repo.IQuestionRepository;
import com.exam.service.IQuestionService;

@Service
public class QuestionServiceImpl implements IQuestionService {
  
	@Autowired
	private IQuestionRepository questionRepo;
	
	@Override
	public Question addQuestion(Question question) {
		// TODO Auto-generated method stub
		return this.questionRepo.save(question);
	}

	@Override
	public Question updateQuestion(Question question) {
		// TODO Auto-generated method stub
		return this.questionRepo.save(question);
	}

	@Override
	public Set<Question> getQuestions() {
		// TODO Auto-generated method stub
		return new HashSet<>(this.questionRepo.findAll());
	}

	@Override
	public Question getQuestion(Long questionId) {
		// TODO Auto-generated method stub
		return this.questionRepo.findById(questionId).get();
	}

	@Override
	public void deleteQuestion(Long questionId) {
		// TODO Auto-generated method stub
		Question q = new Question();
		q.setQuesId(questionId);
          this.questionRepo.delete(q);
	}

	@Override
	public Set<Question> getQuestionsOfQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		return this.questionRepo.findByQuiz(quiz);
	}

//	
//@Override
//	public Object[] getResults(List<Question> questions)throws NullPointerException {
//		int correctAnswer=0,attempted=0;
//		Double marksSingle=Double.parseDouble(questions.get(0).getQuiz().getMaxMarks())/questions.size(),marksGot=0.0;
//		for(Question q:questions){
//			Question ques= this.questionRepo.findById(q.getQuesId()).get();
//			try {
//			if(ques.getAnswer().equals(q.getGivenAnswer()))
//			{
//				  correctAnswer++;
//				  marksGot+=marksSingle;
//			}
//			if(q.getGivenAnswer()!=null||!q.getGivenAnswer().equals(""))
//				attempted++;
//			}catch(Exception e) {e.printStackTrace();}
//			q.setAnswer(ques.getAnswer());
//		};
//		   
//		Object[] ob  = new Object[2];
//		ob[0]=new Result(marksGot,attempted,correctAnswer);
//		ob[1]=questions;
//		return ob;
//	}


	
}
