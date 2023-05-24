package com.api.simplify.taskmanager.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.simplify.taskmanager.dtos.PriorityDto;
import com.api.simplify.taskmanager.models.PriorityModel;
import com.api.simplify.taskmanager.repositories.PriorityRepository;

import jakarta.transaction.Transactional;

@Service
public class PriorityService {


    private PriorityRepository priorityRepository;

    @Autowired
    public PriorityService(PriorityRepository priorityRepository) {
        this.priorityRepository = priorityRepository;
    }
    
    public List<PriorityDto> getPriorities() {
    	return priorityRepository.findAll().stream()
    			.map(priority -> this.convertToDto(priority))
    			.collect(Collectors.toList());
    }
    
    private PriorityDto convertToDto(PriorityModel priority) {
    	PriorityDto dto = new PriorityDto();
    	dto.setId(priority.getId());
    	dto.setColor(priority.getColor());
    	dto.setName(priority.getName());
    	
    	return dto;
    }
	
	@Transactional
	public PriorityModel save(PriorityModel priority) {
		return priorityRepository.save(priority);
	}
}
