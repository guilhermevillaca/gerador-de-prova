package br.com.villaca.prova.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.villaca.prova.model.Prova;

@RestController
@RequestMapping(value="prova")
public class ProvaController extends GenericController<Prova, Long>{

}
