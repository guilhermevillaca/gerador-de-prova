package br.com.villaca.prova.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.villaca.prova.model.BancoQuestoes;

@RestController
@RequestMapping(value="banco-questoes")
public class BancoQuestoesController extends GenericController<BancoQuestoes, Long>{

}
