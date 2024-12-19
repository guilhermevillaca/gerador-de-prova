package br.com.villaca.prova.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.villaca.prova.model.Pais;

@RestController
@RequestMapping(value="pais")
public class PaisController extends GenericController<Pais, Long>{

}
