package com.api.simplify.taskmanager.dtos;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class PriorityDtoTest {
	
	PriorityDto dto = new PriorityDto();
	
	@Test
	void priorityDtoTest() {
		String color = "#0000FF";
		String name = "Alta";

		dto.setColor(color);
		dto.setName(name);

		assertEquals(color, dto.getColor());
		assertEquals(name, dto.getName());
	}

}
