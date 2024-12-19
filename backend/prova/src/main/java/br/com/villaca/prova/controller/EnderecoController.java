package br.com.villaca.prova.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.villaca.prova.model.Endereco;

@RestController
@RequestMapping(value="endereco")
public class EnderecoController extends GenericController<Endereco, Long>{

}
