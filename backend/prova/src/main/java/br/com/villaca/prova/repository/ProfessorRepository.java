package br.com.villaca.prova.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.villaca.prova.model.Professor;

public interface ProfessorRepository extends CrudRepository<Professor, Long>{

}
