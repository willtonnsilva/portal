package br.com.soma.portal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ExtratoController {

    @GetMapping(value="/")
    public String index(){
        return "extrato";
    }
}
