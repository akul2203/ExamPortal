package com.exam.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.entity.app.Category;

public interface ICategoryRepository extends JpaRepository<Category, Long> {

}
