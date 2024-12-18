package br.com.villaca.prova.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.villaca.prova.model.Pessoa;

public interface PessoaRepository extends CrudRepository<Pessoa, Long>{

}
