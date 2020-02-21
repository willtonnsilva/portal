package br.com.soma.portal.api.endpoints;

import br.com.soma.portal.models.Extrato;
import br.com.soma.portal.repository.ExtratoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/v1/api")
public class ExtratoEndpoint {

    @Autowired
    private ExtratoRepository repository;

    @GetMapping("/extratos")
    public List<Extrato> extratos(){
        return repository.findAll();
    }

}
