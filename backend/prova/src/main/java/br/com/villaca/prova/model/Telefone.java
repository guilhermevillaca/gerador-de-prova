package br.com.villaca.prova.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="telefone")
@Data
@NoArgsConstructor
public class Telefone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "ddd")
    private String ddd;

    @Column(name = "numero")
    private String numero;

    @Column(name = "principal")
    private boolean principal;

    @ManyToOne
    @JoinColumn(name = "pessoa_id", referencedColumnName = "id")
    private Pessoa pessoa;

    public Telefone(String ddd, String numero, boolean principal, Pessoa pessoa){
        this.ddd = ddd;
        this.numero = numero;
        this.principal = principal;
        this.pessoa = pessoa;
    }

}
