package br.com.villaca.prova.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.villaca.prova.model.Disciplina;

@RestController
@RequestMapping(value="disciplina")
public class DisciplinaController extends GenericController<Disciplina, Long>{

}
