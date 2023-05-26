package com.api.simplify.taskmanager.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.api.simplify.taskmanager.dtos.TaskDto;
import com.api.simplify.taskmanager.models.TaskModel;
import com.api.simplify.taskmanager.repositories.TaskRepository;

@Service
public class TaskService {

	@Autowired
	TaskRepository taskRepository;


	private TaskDto convertToDto(TaskModel task) {
		TaskDto dto = new TaskDto();
		dto.setId(task.getId());
		dto.setName(task.getName());
		dto.setDescription(task.getDescription());
		dto.setAccomplished(task.getAccomplished());
		dto.setPriority(task.getPriority());

		return dto;
	}

	public TaskDto save(TaskModel newTask) {
		return convertToDto(taskRepository.save(newTask));
	}

	public List<TaskDto> getTasks() {
		return taskRepository.findAll(Sort.by("name")).stream()
				.map(task -> this.convertToDto(task))
				.collect(Collectors.toList());
	}

	public Optional<TaskModel> findById(UUID id) {
		return taskRepository.findById(id);
	}

	public TaskDto edit(TaskModel task) {
		return this.save(task);
	}

	public String deleteTask(UUID id) {
		try {
			taskRepository.deleteById(id);
			return "Tarefa removida com sucesso.";
		} catch (Exception e) {
			return "Tarefa não foi encontrada.";
		}
	}
}
