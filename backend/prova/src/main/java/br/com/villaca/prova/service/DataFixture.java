package br.com.villaca.prova.service;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import br.com.villaca.prova.model.Cidade;
import br.com.villaca.prova.model.Endereco;
import br.com.villaca.prova.model.Estado;
import br.com.villaca.prova.model.Pais;
import br.com.villaca.prova.model.Pessoa;
import br.com.villaca.prova.model.Professor;
import br.com.villaca.prova.model.Telefone;
import br.com.villaca.prova.model.Usuario;
import br.com.villaca.prova.model.tipos.Grau;
import br.com.villaca.prova.repository.CidadeRepository;
import br.com.villaca.prova.repository.EnderecoRepository;
import br.com.villaca.prova.repository.EstadoRepository;
import br.com.villaca.prova.repository.PaisRepository;
import br.com.villaca.prova.repository.PessoaRepository;
import br.com.villaca.prova.repository.ProfessorRepository;
import br.com.villaca.prova.repository.TelefoneRepository;
import br.com.villaca.prova.repository.UsuarioRepository;

@Component
public class DataFixture implements CommandLineRunner{

    //criar pais, cidade, estado
    //criar pessoa telefone endereco
    //criar usuario

    @Autowired
    PaisRepository paisRepository;

    @Autowired
    CidadeRepository cidadeRepository;

    @Autowired
    EstadoRepository estadoRepository;

    @Autowired
    PessoaRepository pessoaRepository;

    @Autowired
    TelefoneRepository telefoneRepository;

    @Autowired
    EnderecoRepository enderecoRepository;

    @Autowired
    ProfessorRepository professorRepository;

    @Autowired
    UsuarioRepository usuarioRepository;

    @Override
    public void run(String... args) throws Exception {
        
        Pais pais1 = new Pais("Brasil", "BR");
        paisRepository.save(pais1);

        Estado estado1 = new Estado("Paraná", "PR", pais1);
        estadoRepository.save(estado1);

        Cidade cidade1 = new Cidade("Cascavel", estado1);
        cidadeRepository.save(cidade1);

        Pessoa pessoa1 = new Pessoa("Guilherme Villaca","050.950.599-67", 
        LocalDate.of(1986,9,25), "guidvillaca@gmail.com");
        pessoaRepository.save(pessoa1);

        Telefone telefone1 = new Telefone("45", "988280855", false, pessoa1);
        telefoneRepository.save(telefone1);
        Telefone telefone2 = new Telefone("45", "999839838", true, pessoa1);
        telefoneRepository.save(telefone2);

        Endereco endereco1 = new Endereco("85804594", "Rua 123", "Parque Verde", "103", "", cidade1);
        enderecoRepository.save(endereco1);

        Professor professor1 = new Professor(Grau.MESTRADO, pessoa1);
        professorRepository.save(professor1);

        Usuario usuario1 = new Usuario("guilherme.villaca", StringToSHA256.toSHA256("123"), true, pessoa1);
        usuarioRepository.save(usuario1);

    }

}
