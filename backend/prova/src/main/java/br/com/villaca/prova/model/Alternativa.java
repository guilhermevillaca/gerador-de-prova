package br.com.villaca.prova.model;

import br.com.villaca.prova.model.tipos.Formato;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "alternativa")
@Data
@NoArgsConstructor
public class Alternativa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name="formato")
    private Formato formato;//formato da questao, pode ser numerico, alfatebo ou V ou F

    @Column(name = "descricao")
    private String descricao;

    @JoinColumn(name="questao_id", referencedColumnName = "id")
    @ManyToOne
    private Questao questao;


}
