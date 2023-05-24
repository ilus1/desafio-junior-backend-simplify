package com.api.simplify.taskmanager.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.simplify.taskmanager.models.TaskModel;

@Repository
public interface TaskRepository extends JpaRepository<TaskModel, UUID> {

}
