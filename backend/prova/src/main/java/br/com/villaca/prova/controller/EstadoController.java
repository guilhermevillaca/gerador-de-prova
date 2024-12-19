package br.com.villaca.prova.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.villaca.prova.model.Estado;

@RestController
@RequestMapping(value="estado")
public class EstadoController extends GenericController<Estado, Long>{

}
