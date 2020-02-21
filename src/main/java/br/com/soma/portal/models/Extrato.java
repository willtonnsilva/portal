package br.com.soma.portal.models;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@EqualsAndHashCode @ToString
public class Extrato implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Temporal(value = TemporalType.DATE)
    @Column(name = "DATA_OPERACAO", nullable = false)
    private Date dataOperacao;

    @Column(name = "TIPO_OPERACAO", nullable = false)
    private String tipoOperacao;

    @Column(name = "VALOR_OPERACAO", nullable = false, precision = 4, scale = 2)
    private BigDecimal valorOperacao;
}
