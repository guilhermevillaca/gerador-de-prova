package br.com.villaca.prova.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.com.villaca.prova.model.Prova;
import br.com.villaca.prova.model.Questao;

public interface QuestaoRepository extends CrudRepository<Questao, Long>{

    List<Questao> findByProva(Prova prova);

}
