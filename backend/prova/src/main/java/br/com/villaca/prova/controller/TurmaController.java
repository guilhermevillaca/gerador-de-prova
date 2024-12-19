package br.com.villaca.prova.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.villaca.prova.model.Turma;

@RestController
@RequestMapping(value="turma")
public class TurmaController extends GenericController<Turma, Long>{

}
