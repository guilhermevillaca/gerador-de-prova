package br.com.villaca.prova.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.villaca.prova.dto.UsuarioDTO;
import br.com.villaca.prova.model.Usuario;
import br.com.villaca.prova.service.AuthService;
import br.com.villaca.prova.util.JwtUtil;

@RestController
@RequestMapping(value="usuario")
public class UsuarioController extends GenericController<Usuario, Long>{

    @Autowired
    private AuthService authService;

    @RequestMapping(value = "entrar/{login}/{senha}", method = RequestMethod.GET)
    public ResponseEntity<?> buscarPorLoginESenha(@PathVariable(value="login") String login, @PathVariable(value="senha")String senha) {
        Optional<UsuarioDTO> usuarioDTO = authService.login(login, senha);
        if(usuarioDTO.isPresent()){
            return ResponseEntity.ok(usuarioDTO);
        }else{
            return ResponseEntity.ok("usuario_invalido");
        }
        
    }

    @GetMapping("/validar")
    public ResponseEntity<?> validateToken(@RequestHeader("Authorization") String token) {
        token = token.replace("Bearer ", "");
        boolean isValid = JwtUtil.validateToken(token);
        if (isValid) {
            String username = JwtUtil.getUsernameFromToken(token);
            return ResponseEntity.ok("Token válido. Usuário: " + username);
        }
        return ResponseEntity.status(401).body("Token inválido");
    }

}
