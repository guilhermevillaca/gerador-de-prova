package br.com.villaca.prova.model;


import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import br.com.villaca.prova.model.tipos.Turno;
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

@Entity
@Data
@NoArgsConstructor
@Table(name = "prova")
public class Prova {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "data")
    private LocalDate data;

    @JoinColumn(name = "professor_id", referencedColumnName = "id")
    @ManyToOne
    private Professor professor;

    @JoinColumn(name = "disciplina_id", referencedColumnName = "id")
    @ManyToOne
    private Disciplina disciplina;

    @Enumerated(EnumType.STRING)
    @Column(name = "turno")
    private Turno turno;

    @Column(name = "periodoLetivo")
    private String periodoLetivo;

    @Column(length = 1000, name = "obervacoes")
    private String observacoes;

}
