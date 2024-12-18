package br.com.villaca.prova.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.villaca.prova.model.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Long>{

}
