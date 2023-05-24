package com.api.simplify.taskmanager.models;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.UUID;

import org.junit.jupiter.api.Test;

public class TaskModelTest {

	private TaskModel task;

	@Test
	void testTaskModel() {
		UUID id = UUID.randomUUID();
		String name = "Tarefa teste";
		String description = "Descrição teste";
		Boolean accomplished = false;
		PriorityModel priority = new PriorityModel();

		task = new TaskModel();
		task.setId(id);
		task.setAccomplished(accomplished);
		task.setName(name);
		task.setPriority(priority);
		task.setDescription(description);

		assertEquals(id, task.getId());
		assertEquals(name, task.getName());
		assertEquals(description, task.getDescription());
		assertEquals(accomplished, task.getAccomplished());
		assertEquals(priority, task.getPriority());
	}

}
