package br.com.villaca.prova.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import br.com.villaca.prova.model.tipos.Turno;

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
    private Professor professor;

    @JoinColumn(name = "disciplina_id", referencedColumnName = "id")
    private Disciplina disciplina;

    @Enumerated(EnumType.STRING)
    @Column(name = "turno")
    private Turno turno;

    @Column(name = "periodoLetivo")
    private String periodoLetivo;

    @Column(length = 1000, name = "obervacoes")
    private String observacoes;

}
