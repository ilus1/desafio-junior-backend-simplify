package com.api.simplify.taskmanager.controllers;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.api.simplify.taskmanager.dtos.PriorityDto;
import com.api.simplify.taskmanager.models.PriorityModel;
import com.api.simplify.taskmanager.services.PriorityService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/priority")
public class PriorityController {

	private PriorityService priorityService;

	@Autowired
	public PriorityController(PriorityService priorityService) {
			this.priorityService = priorityService;
	}

	@GetMapping
	public ResponseEntity<List<PriorityDto>> getPriorityList() {
		return ResponseEntity.status(HttpStatus.OK).body(priorityService.getPriorities());
	}

	@PostMapping
	public ResponseEntity<PriorityDto> savePriority(@RequestBody @Valid PriorityDto priorityDto) {
		PriorityModel priority = new PriorityModel();
		BeanUtils.copyProperties(priorityDto, priority);
		return ResponseEntity.status(HttpStatus.CREATED).body(priorityService.save(priority));
	}

	@PutMapping("/{id}")
	public ResponseEntity<Object> editPriority(@PathVariable(value = "id") UUID id,
			@RequestBody @Valid PriorityDto editedPriorityDto) {
		Optional<PriorityModel> editedPriorityOptional = priorityService.findById(id);
		if (!editedPriorityOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Prioridade não encontrada.");
		}
		PriorityModel priority = new PriorityModel();
		BeanUtils.copyProperties(editedPriorityOptional.get(), priority);
		return ResponseEntity.status(HttpStatus.OK).body(priorityService.edit(priority));
	}
	
	@DeleteMapping
	public ResponseEntity<String> deletePriority(@RequestBody PriorityDto priority) {
		return ResponseEntity.status(HttpStatus.OK).body(priorityService.deletePriority(priority.getId()));
	}
}
