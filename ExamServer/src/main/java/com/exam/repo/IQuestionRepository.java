package com.exam.repo;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.app.Question;
import com.exam.entity.app.Quiz;

public interface IQuestionRepository extends JpaRepository<Question, Long> {

	Set<Question> findByQuiz(Quiz quiz);

}
