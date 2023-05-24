package com.api.simplify.taskmanager.dtos;

import java.util.UUID;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class PriorityDto {
	private UUID id;

	@NotBlank
	private String name;

	@NotBlank
	private String color;
}
