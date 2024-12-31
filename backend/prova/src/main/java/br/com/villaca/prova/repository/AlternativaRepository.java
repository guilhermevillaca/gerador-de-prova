package br.com.villaca.prova.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.villaca.prova.model.Alternativa;
import br.com.villaca.prova.model.Questao;

import java.util.List;


public interface AlternativaRepository extends CrudRepository<Alternativa, Long>{
    List<Alternativa> findByQuestao(Questao questao);
}
