package br.com.villaca.prova.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.villaca.prova.model.Pessoa;

@RestController
@RequestMapping(value="pessoa")
public class PessoaController extends GenericController<Pessoa, Long>{

}
