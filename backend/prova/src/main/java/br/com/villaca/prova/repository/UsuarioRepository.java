package br.com.villaca.prova.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.villaca.prova.model.Usuario;
import java.util.Optional;


public interface UsuarioRepository extends CrudRepository<Usuario, Long>{

    Optional<Usuario> findByLoginAndSenha(String login, String senha);
}
