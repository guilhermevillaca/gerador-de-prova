package br.com.villaca.prova.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.villaca.prova.model.Telefone;

@RestController
@RequestMapping(value="telefone")
public class TelefoneController extends GenericController<Telefone, Long>{

}
