package br.com.villaca.prova.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.villaca.prova.model.Alternativa;
import br.com.villaca.prova.model.Prova;
import br.com.villaca.prova.model.Questao;
import br.com.villaca.prova.repository.AlternativaRepository;
import br.com.villaca.prova.repository.ProvaRepository;
import br.com.villaca.prova.repository.QuestaoRepository;

@RestController
@RequestMapping(value="alternativa")
public class AlternativaController extends GenericController<Alternativa, Long>{

    @Autowired
    QuestaoRepository questaoRepository;

    @Autowired
    AlternativaRepository alternativaRepository;

    @RequestMapping(value = "findByQuestao/{id_questao}", method = RequestMethod.GET)
    public ResponseEntity<List<Alternativa>> findByQuestao(@PathVariable(value="id_questao") Long id_questao){
        Optional<Questao> questao = this.questaoRepository.findById(id_questao);
        List<Alternativa> alternativas = this.alternativaRepository.findByQuestao(questao.get());
        return ResponseEntity.ok(alternativas);
    }

}
