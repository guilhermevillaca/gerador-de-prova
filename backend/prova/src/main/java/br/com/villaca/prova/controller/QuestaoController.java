package br.com.villaca.prova.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.villaca.prova.model.Questao;

@RestController
@RequestMapping(value="questao")
public class QuestaoController extends GenericController<Questao, Long>{

}
