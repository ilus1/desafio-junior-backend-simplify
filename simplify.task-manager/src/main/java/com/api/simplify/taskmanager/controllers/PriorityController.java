package com.api.simplify.taskmanager.controllers;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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

	@PostMapping
	public ResponseEntity<PriorityDto> savePriority(@RequestBody @Valid PriorityDto priorityDto) {
		PriorityDto savedDto = new PriorityDto();
		PriorityModel priority = new PriorityModel();
		BeanUtils.copyProperties(priorityDto, priority);
		BeanUtils.copyProperties(priorityService.save(priority), savedDto);		
		return ResponseEntity.status(HttpStatus.CREATED).body(savedDto);
	}
}
