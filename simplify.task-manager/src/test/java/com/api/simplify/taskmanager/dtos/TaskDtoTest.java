package com.api.simplify.taskmanager.dtos;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

import com.api.simplify.taskmanager.models.PriorityModel;

public class TaskDtoTest {
	
	private TaskDto dto = new TaskDto();
	
	@Test
	void testTaskDto() {
		String name = "Tarefa teste";
		String description = "Descrição teste";
		Boolean accomplished = false;
		PriorityModel priority = new PriorityModel();

		dto.setAccomplished(accomplished);
		dto.setName(name);
		dto.setPriority(priority);
		dto.setDescription(description);

		assertEquals(name, dto.getName());
		assertEquals(description, dto.getDescription());
		assertEquals(accomplished, dto.getAccomplished());
		assertEquals(priority, dto.getPriority());
	}

}
