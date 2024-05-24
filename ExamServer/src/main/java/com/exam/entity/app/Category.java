package com.exam.entity.app;

import java.util.LinkedHashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="category")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Category {
  
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long cId;
	
	private String title;
	
	private String description;
	@OneToMany(mappedBy = "category",cascade = CascadeType.ALL)
	private Set<Quiz> quizes = new LinkedHashSet<>();
	
	public Category(String title,String description) {
		this.title=title;
		this.description=description;
				
	}
	
	
}
