package com.api.simplify.taskmanager.models;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.UUID;

import org.junit.jupiter.api.Test;

public class PriorityModelTest {

	private PriorityModel priority = new PriorityModel();

	@Test
	void testPriorityModel() {
		UUID id = UUID.randomUUID();
		String color = "#0000FF";
		String name = "Alta";

		priority.setId(id);
		priority.setColor(color);
		priority.setName(name);

		assertEquals(id, priority.getId());
		assertEquals(color, priority.getColor());
		assertEquals(name, priority.getName());
	}

}
