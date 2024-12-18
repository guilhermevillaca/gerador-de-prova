package br.com.villaca.prova.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "usuario")
@Data
@NoArgsConstructor
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="login")
    private String login;

    @Column(name="senha")
    private String senha;

    @Column(name="ativo")
    private Boolean ativo;

    @JoinColumn(name = "pessoa_id", referencedColumnName = "id")
    private Pessoa pessoa;

    public Usuario(String login, String senha, Boolean ativo, Pessoa pessoa){
        this.login = login;
        this.senha = senha;
        this.ativo = ativo;
        this.pessoa = pessoa;
    }

}
