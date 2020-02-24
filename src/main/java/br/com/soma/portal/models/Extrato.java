package br.com.soma.portal.models;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;

@Entity
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@EqualsAndHashCode @ToString
public class Extrato implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "SQ_EXTRATO")
    @SequenceGenerator(name = "SQ_EXTRATO", sequenceName = "SQ_EXTRATO")
    private Integer id;

    @Temporal(value = TemporalType.DATE)
    @Column(name = "DATA_OPERACAO", nullable = false)
    private Date dataOperacao;

    @Column(name = "TIPO_OPERACAO", nullable = false)
    private String tipoOperacao;

    @Column(name = "VALOR_OPERACAO", nullable = false)
    private BigDecimal valorOperacao;
}
