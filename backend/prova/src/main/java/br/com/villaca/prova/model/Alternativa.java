package br.com.villaca.prova.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import br.com.villaca.prova.model.tipos.Formato;
import br.com.villaca.prova.util.FormField;
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
@Table(name = "alternativa")
@Data
@NoArgsConstructor
public class Alternativa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
  
    @Column(name = "descricao")
    private String descricao;

    @JoinColumn(name="questao_id", referencedColumnName = "id")
    @ManyToOne
    @FormField(type = "select")
    @JsonBackReference
    private Questao questao;

}
