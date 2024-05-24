package com.exam.entity.app;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Question {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long quesId;
	
	@Column(length = 2000)
	private String content;
	
	private String image;
	
	private String option1;
	private String option2;
	private String option3;
	private String option4;
	private String answer;
	
//	@Transient
//	private String givenAnswer;
//	
	@ManyToOne(fetch = FetchType.EAGER)
	@JsonIgnoreProperties(value = {"questions"})
   private Quiz quiz;
}
