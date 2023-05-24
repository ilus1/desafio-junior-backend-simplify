package com.api.simplify.taskmanager.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class PriorityDto {

	@NotBlank
	private String name;

	@NotBlank
	private String color;
}
