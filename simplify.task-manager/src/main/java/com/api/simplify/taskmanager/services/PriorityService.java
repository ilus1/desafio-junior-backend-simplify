package com.api.simplify.taskmanager.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
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
	
	public Optional<PriorityModel> findById(UUID id) {
		return priorityRepository.findById(id);
	}

	private PriorityDto convertToDto(PriorityModel priority) {
		PriorityDto dto = new PriorityDto();
		dto.setId(priority.getId());
		dto.setColor(priority.getColor());
		dto.setName(priority.getName());

		return dto;
	}

	public List<PriorityDto> getPriorities() {
		return priorityRepository.findAll().stream()
				.map(priority -> this.convertToDto(priority))
				.collect(Collectors.toList());
	}

	public PriorityDto edit(PriorityModel priority) {
		return this.save(priority);
	}

	public String deletePriority(UUID id) {
		try {
			priorityRepository.deleteById(id);
			return "Prioridade removida com sucesso.";
		} catch (Exception e) {
			return "Prioridade não foi encontrada.";
		}
	}

	@Transactional
	public PriorityDto save(PriorityModel priority) {
		return convertToDto(priorityRepository.save(priority));
	}
}
