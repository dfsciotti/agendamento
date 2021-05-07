export class Usuario
{
    public CodUsuario : string;
    public Senha : string;
    public NomeCompleto : string;
    public Telefone : string;
    public Email : string;
    public Funcao : string;
    public Situacao : string;
    public UtilizaComissao : string;
    public PerComissao : number;
}

export class Auth
{
    public usuario : Usuario;
    public token: string;
}