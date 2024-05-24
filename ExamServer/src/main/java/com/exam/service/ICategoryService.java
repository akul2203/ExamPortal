package com.exam.service;

import java.util.Set;

import com.exam.entity.app.Category;

public interface ICategoryService {
	public Category addCategory(Category category);

	public Category updateCategory(Category category);

	public Set<Category> getCategories();

	public Category getCategory(Long categoryId);

	public void deleteCategory(Long categoryId);
}
