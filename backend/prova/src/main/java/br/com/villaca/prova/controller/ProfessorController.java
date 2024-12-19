package br.com.villaca.prova.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.villaca.prova.model.Professor;

@RestController
@RequestMapping(value="professor")
public class ProfessorController extends GenericController<Professor, Long>{

}
