package br.com.villaca.prova.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.villaca.prova.model.Usuario;
import br.com.villaca.prova.repository.UsuarioRepository;
import br.com.villaca.prova.service.StringToSHA256;

@RestController
@RequestMapping(value="usuario")
public class UsuarioController extends GenericController<Usuario, Long>{

    @Autowired
    private UsuarioRepository usuarioRepository;

    @RequestMapping(value = "entrar/{login}/{senha}", method = RequestMethod.GET)
    public Optional<Usuario> buscarPorLoginESenha(@PathVariable(value="login") String login, @PathVariable(value="senha")String senha) {
        return usuarioRepository.findByLoginAndSenha(login, StringToSHA256.toSHA256(senha));
    }

}
