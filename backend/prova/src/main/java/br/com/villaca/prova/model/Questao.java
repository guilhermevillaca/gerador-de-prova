package br.com.villaca.prova.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import br.com.villaca.prova.model.tipos.TipoQuestao;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="questao")
@Data
@NoArgsConstructor
public class Questao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "tipo")
    private TipoQuestao tipo;

    @Column(length = 1000, name = "enunciado")    
    private String enunciado;

    @Column(name = "numeroDeLinhas")    
    private Integer numeroDeLinhas; // Apenas para questões abertas   

    @ManyToOne
    @JoinColumn(name = "prova_id", referencedColumnName = "id")
    private Prova prova;

    @OneToMany(mappedBy = "questao", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY) //FetchType.EAGER
    @JsonManagedReference
    private List<Alternativa> alternativas;

    @ManyToOne
    @JoinColumn(name = "banco_questoes_id", referencedColumnName = "id", nullable = false)
    @JsonBackReference
    private BancoQuestoes bancoQuestoes;
    
}