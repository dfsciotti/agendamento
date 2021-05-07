export class Empresa
{
    public Id : string;
    public RazaoSocial : string;
    public Fantasia : string;
    public Cnpj : string;
    public InscEstadual : string;
    public InscMunicipal : string;
    public Endereco : string;
    public Numero : string;
    public Cidade : string;
    public Cep : string;
    public Bairro : string;
    public Uf : string;
    public Telefone : string;
    public Email : string;
    public Situacao : string;
    public PerDescontoMaxVenda : number;
    public Logo : Blob
    public LocalPadraoEstoque : string;
    public ExibeAvisoDivergEstoque : string;
    public IdOperacaoEntrada : string;
    public IdOperacaoPdv : string;
    public IdOperacaoPdvDevol : string;
    public Chave : string;
    public UsuAlteracao : string;
    public DtaAlteracao : Date;
}