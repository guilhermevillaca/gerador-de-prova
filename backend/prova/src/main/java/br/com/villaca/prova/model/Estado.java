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
@Table(name="estado")
@Data
@NoArgsConstructor
public class Estado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="nome")
    private String nome;

    @Column(name="uf")
    private String uf; // Ex: "PR" para Paraná

    @ManyToOne
    @JoinColumn(name = "pais_id", nullable = false, referencedColumnName = "id")
    private Pais pais;

    public Estado(String nome, String uf, Pais pais){
        this.nome = nome;
        this.uf = uf;
        this.pais = pais;
    }

}
