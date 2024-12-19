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
        
        Estado estado1 = new Estado("Acre", "AC", pais1);
        estadoRepository.save(estado1);
        Estado estado2 = new Estado("Alagoas", "AL", pais1);
        estadoRepository.save(estado2);
        Estado estado3 = new Estado("Amazonas", "AM", pais1);
        estadoRepository.save(estado3);
        Estado estado4 = new Estado("Amapá", "AP", pais1);
        estadoRepository.save(estado4);
        Estado estado5 = new Estado("Bahia", "BA", pais1);
        estadoRepository.save(estado5);
        Estado estado6 = new Estado("Ceará", "CE", pais1);
        estadoRepository.save(estado6);
        Estado estado7 = new Estado("Distrito Federal", "DF", pais1);
        estadoRepository.save(estado7);
        Estado estado8 = new Estado("Espírito Santo", "ES", pais1);
        estadoRepository.save(estado8);
        Estado estado9 = new Estado("Goiás", "GO", pais1);
        estadoRepository.save(estado9);
        Estado estado10 = new Estado("Maranhão", "MA", pais1);
        estadoRepository.save(estado10);
        Estado estado11 = new Estado("Minas Gerais", "MG", pais1);
        estadoRepository.save(estado11);
        Estado estado12 = new Estado("Mato Grosso do Sul", "MS", pais1);
        estadoRepository.save(estado12);
        Estado estado13 = new Estado("Mato Grosso", "MT", pais1);
        estadoRepository.save(estado13);
        Estado estado14 = new Estado("Pará", "PA", pais1);
        estadoRepository.save(estado14);
        Estado estado15 = new Estado("Paraíba", "PB", pais1);
        estadoRepository.save(estado15);
        Estado estado16 = new Estado("Pernambuco", "PE", pais1);
        estadoRepository.save(estado16);
        Estado estado17 = new Estado("Piauí", "PI", pais1);
        estadoRepository.save(estado17);
        Estado estado18 = new Estado("Paraná", "PR", pais1);
        estadoRepository.save(estado18);
        Estado estado19 = new Estado("Rio de Janeiro", "RJ", pais1);
        estadoRepository.save(estado19);
        Estado estado20 = new Estado("Rio Grande do Norte", "RN", pais1);        
        estadoRepository.save(estado20);
        Estado estado21 = new Estado("Rondônia", "RO", pais1);
        estadoRepository.save(estado21);
        Estado estado22 = new Estado("Roraima", "RR", pais1);
        estadoRepository.save(estado22);
        Estado estado23 = new Estado("Rio Grande do Sul", "RS", pais1);
        estadoRepository.save(estado23);        
        Estado estado24 = new Estado("Santa Catarina", "SC", pais1);
        estadoRepository.save(estado24);
        Estado estado25 = new Estado("Sergipe", "SE", pais1);
        estadoRepository.save(estado25);
        Estado estado26 = new Estado("São Paulo", "SP", pais1);
        estadoRepository.save(estado26);
        Estado estado27 = new Estado("Tocantins", "TO", pais1);
        estadoRepository.save(estado27);
        Estado estado28 = new Estado("Exterior", "EX", pais1);
        estadoRepository.save(estado28);

        Cidade cidade1 = new Cidade("Cascavel", estado18);
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


        System.out.println("Dados inseridos com sucesso!");

    }

}
