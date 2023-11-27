//Chamada dos Módulos
const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require ('cors');

//Criação do servidor
const srv = express();

//Habilita comunicação entre browser e servidor
srv.use(cors());

//Definição da Porta do Servidor
srv.listen (3030);

//Criação do Banco de Dados
const db = new sqlite3.Database('./tempo.db', sqlite3.OPEN_READWRITE, erro);

//Declaração de Função para Verificar Falha de Conexão com Banco de Dados
function erro (falha) {
    if (falha) return console.error(falha.message);

    console.log ("Conexão bem Sucedida!");
};


//Criação da Tabela Registros
db.run (`CREATE TABLE IF NOT EXISTS registros (cidade, temperatura, estado,  data_local, velocidade_do_vento, umidade, pais)`);



//Função para Adicionar Dados ao Banco 
function adicionarAoBanco (valor1, valor2, valor3, valor4, valor5, valor6, valor7){
    const sql = `INSERT INTO registros (cidade, temperatura, estado, data_local, velocidade_do_vento, umidade, pais) VALUES (?,?,?,?,?,?,?)`;

    db.run (sql, [valor1, valor2, valor3, valor4, valor5, valor6, valor7], (falha) => {
        if (falha) return console.error(falha.message);

        console.log ("Novos dados adicionados com Sucesso!");
    });

};

//Função Para Ver Valores do Banco de Dados 
function verBanco () {
    const sql = `SELECT * FROM registros`;

    db.all(sql, [], (err, dados) => {
        if (err) return console.error(err.message);

        dados.forEach((fileira) => {
            console.log (fileira);
        });

    });
};


//------------
// ESTADOS DO SERVIDOR 
//------------

//Enviar arquivos JSON pelo servidor

srv.get("/", (req, res) => {
    res.send(`
    <body>
        <section>
            <h4>
                Olá 👋
                <br>
                <br>
                

                Para Fazer uma solicitação para API digite os seguintes parâmetros na URL:
            <h3>

            <h2>https://projeto-tempo.onrender.com/cidade/"Nome da Cidade"/json </h2>
            <h4>Os nomes que estão entre aspas você deve inserir</h4>
            <br>
            <div class="atencao">
                <h3>MAS ATENÇÃO!</h3>
            </div>
            <h3> O nome da cidade deve conter acentos e letras maiúsculas</h3>
            <br>
            <h3>
                Obrigado por usar esta API. Mais dados sobre ela, dúvida ou sugestões:  
                <a href='https://github.com/AlexandreBitelo'><button>GitHub</button></a>
                <br>
                Retornar ao repositório da API: <a href='https://github.com/AlexandreBitelo/Projeto-Tempo'><button>Projeto-Tempo</button></a>
            </h3>




        </section>

        <style>
            body {
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                color: #dfdfdf;
                font-size: 14px;
                margin: 0;
                padding: 0;
                background-color: #1C1C1C;
            }

            .atencao {
                color: red;
            }
        </style>
    </body>


    `)
})


srv.get ("/cidade/:nome/json", (req, res) => {
    cidade = req.params.nome
    const sql = `SELECT cidade, temperatura, estado,  data_local, velocidade_do_vento, umidade, pais FROM registros WHERE cidade = '${cidade}'`

    db.all(sql, [], (err, dados) => {
        if (err) return console.error(err.message);

        dados.forEach((fileira) => {
            res.json(fileira)
            
            
        });

       
    });
    

});

//Habilita comunicação entre browser e servidor
srv.get ("/somethingelse"), (req, res) =>{
  res.header ('Access-Control-Allow-Origin', '*')
  res.header ('Access-Control-Allow-Credentials', true)
  res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  res.header ('Access-Control-Allow-Headers', 'Content-Type')
};
 





