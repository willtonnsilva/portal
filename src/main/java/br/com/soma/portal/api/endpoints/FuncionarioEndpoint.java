package br.com.soma.portal.api.endpoints;

import br.com.soma.portal.models.Funcionario;
import br.com.soma.portal.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/v1/api")
public class FuncionarioEndpoint {

    @Autowired
    private FuncionarioRepository repository;

    @GetMapping("/funcionarios")
    public List<Funcionario> funcionarios(){
        return repository.findAll();
    }

}
