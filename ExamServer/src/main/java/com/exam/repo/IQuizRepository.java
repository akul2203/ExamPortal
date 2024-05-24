package com.exam.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.app.Category;
import com.exam.entity.app.Quiz;

public interface IQuizRepository extends JpaRepository<Quiz, Long> {
  public List<Quiz> findBycategory(Category category);
  public List<Quiz> findByActive(Boolean active);
  public List<Quiz> findByCategoryAndActive(Category c,Boolean active);
}

