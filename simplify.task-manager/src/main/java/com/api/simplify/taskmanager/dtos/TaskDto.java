package com.api.simplify.taskmanager.dtos;

import com.api.simplify.taskmanager.models.PriorityModel;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TaskDto {
	
	@NotBlank
	private String name;
	private String description;
	
	@NotBlank
	private Boolean accomplished;
	
	private PriorityModel priority;

}
