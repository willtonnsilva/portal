package br.com.soma.portal.models;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;

@Entity
@Table(name = "FUNCIONARIO")
@Getter @Setter
@AllArgsConstructor @NoArgsConstructor
@EqualsAndHashCode @ToString
public class Funcionario implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "MATRICULA", length = 50, nullable = false)
    private String matricula;

    @Column(name = "NOME", length = 255, nullable = false)
    private String nome;

    @Column(name = "FUNCAO", length = 255, nullable = false)
    private String funcao;
}
