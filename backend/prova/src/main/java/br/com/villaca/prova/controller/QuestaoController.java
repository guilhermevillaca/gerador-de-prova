package br.com.villaca.prova.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.villaca.prova.model.Prova;
import br.com.villaca.prova.model.Questao;
import br.com.villaca.prova.repository.ProvaRepository;
import br.com.villaca.prova.repository.QuestaoRepository;

@RestController
@RequestMapping(value="questao")
public class QuestaoController extends GenericController<Questao, Long>{

    @Autowired
    QuestaoRepository questaoRepository;

    @Autowired
    ProvaRepository provaRepository;

    @RequestMapping(value = "findByProva/{id_prova}", method = RequestMethod.GET)
    public ResponseEntity<List<Questao>> findByProva(@PathVariable(value="id_prova") Long id_prova){
        Optional<Prova> prova = this.provaRepository.findById(id_prova);
        List<Questao> questoes = this.questaoRepository.findByProva(prova.get());
        return ResponseEntity.ok(questoes);
    }

}
