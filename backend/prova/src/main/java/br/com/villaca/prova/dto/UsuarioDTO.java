package br.com.villaca.prova.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioDTO {
    
    private Long id;
    private String login;
    private boolean ativo;
    private String token;
}
