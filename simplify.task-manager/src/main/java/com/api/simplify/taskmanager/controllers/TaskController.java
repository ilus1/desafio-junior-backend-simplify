package com.api.simplify.taskmanager.controllers;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.api.simplify.taskmanager.dtos.TaskDto;
import com.api.simplify.taskmanager.models.TaskModel;
import com.api.simplify.taskmanager.services.TaskService;

@Controller
@RequestMapping("/task")
public class TaskController {

	private TaskService taskService;

	@Autowired
	public TaskController(TaskService taskService) {
			this.taskService = taskService;
	}

	@PostMapping
	public ResponseEntity<TaskDto> saveTask(@RequestBody TaskDto newTask) {
		TaskModel task = new TaskModel();
		BeanUtils.copyProperties(newTask, task);
		return ResponseEntity.status(HttpStatus.CREATED).body(taskService.save(task));
	}
}
