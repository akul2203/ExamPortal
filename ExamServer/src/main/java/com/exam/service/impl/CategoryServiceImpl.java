package com.exam.service.impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.entity.app.Category;
import com.exam.repo.ICategoryRepository;
import com.exam.service.ICategoryService;

@Service
public class CategoryServiceImpl implements ICategoryService {

	@Autowired
	private ICategoryRepository categoryRepo;
	
	
	@Override
	public Category addCategory(Category category) {
		// TODO Auto-generated method stub
		return this.categoryRepo.save(category);
	}

	@Override
	public Category updateCategory(Category category) {
		// TODO Auto-generated method stub
		return this.categoryRepo.save(category);
	}

	@Override
	public Set<Category> getCategories() {
		// TODO Auto-generated method stub
		return new LinkedHashSet<>(categoryRepo.findAll());
	}

	@Override
	public Category getCategory(Long categoryId) {
		// TODO Auto-generated method stub
		return this.categoryRepo.findById(categoryId).get();
	}

	@Override
	public void deleteCategory(Long categoryId) {
		// TODO Auto-generated method stub
		this.categoryRepo.deleteById(categoryId);

	}

}
