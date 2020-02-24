package br.com.soma.portal.services;

import br.com.soma.portal.models.Extrato;
import br.com.soma.portal.repository.ExtratoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class ExtratoService {

    @Autowired
    private ExtratoRepository repository;

    public List<Extrato> getExtratos(){
        return repository.findAll();
    }

    public BigDecimal getSaldo(){
        List<Extrato> extratos = repository.findAll();
        return extratos.stream()
                       .map(Extrato::getValorOperacao)
                       .reduce(BigDecimal::add)
                       .orElse(BigDecimal.ZERO);
    }
}
