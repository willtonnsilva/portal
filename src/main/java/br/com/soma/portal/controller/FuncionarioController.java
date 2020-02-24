package br.com.soma.portal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FuncionarioController {

    @GetMapping(value="/funcionario")
    public String index(){
        return "funcionarios";
    }
}
