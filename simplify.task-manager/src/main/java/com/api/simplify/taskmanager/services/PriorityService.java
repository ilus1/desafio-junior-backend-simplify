package com.api.simplify.taskmanager.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	
	@Transactional
	public PriorityModel save(PriorityModel priority) {
		return priorityRepository.save(priority);
	}
}
