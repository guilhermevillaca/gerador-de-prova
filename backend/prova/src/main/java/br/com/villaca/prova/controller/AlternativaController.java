package br.com.villaca.prova.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.villaca.prova.model.Alternativa;

@RestController
@RequestMapping(value="categoria")
public class AlternativaController extends GenericController<Alternativa, Long>{

}
