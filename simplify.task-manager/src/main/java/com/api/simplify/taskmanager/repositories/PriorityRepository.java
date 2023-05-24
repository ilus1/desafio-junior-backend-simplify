package com.api.simplify.taskmanager.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.simplify.taskmanager.models.PriorityModel;

@Repository
public interface PriorityRepository extends JpaRepository<PriorityModel, UUID> {

}
