package br.com.villaca.prova.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.villaca.prova.dto.UsuarioDTO;
import br.com.villaca.prova.model.Usuario;
import br.com.villaca.prova.repository.UsuarioRepository;
import br.com.villaca.prova.util.JwtUtil;

@Service
public class AuthService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Optional<UsuarioDTO> login(String login, String senha) {
        Optional<Usuario> usuario = usuarioRepository.findByLoginAndSenha(login, StringToSHA256.toSHA256(senha)); 
        
        if (usuario.isPresent()) {
            String token = JwtUtil.generateToken(login);
            UsuarioDTO usuarioDTO = new UsuarioDTO(usuario.get().getId(), usuario.get().getLogin(), usuario.get().getAtivo(), token);
            return Optional.of(usuarioDTO); 
        }
        return Optional.empty();
    }
}
