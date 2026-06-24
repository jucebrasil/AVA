// Importa bibliotecas
const express = require("express");
const sql = require("mssql");
const cors = require("cors");

// Cria o servidor
const app = express();

// Permite receber JSON do front
app.use(express.json());

// Libera acesso entre front e backend (evita erro de CORS)
app.use(cors());

/*
CONFIGURAÇÃO DO SQL SERVER
👉 Ajuste conforme seu ambiente
*/
const config = {
    user: "Ztyr2CrBAhr3VdUDIG+r8g==",
    password: "x8Ru+QiMGhM=",
    server: "Jucelbia-hp\\SQLDEVELOPER", // ou "localhost\\SQLEXPRESS"
    database: "PatrimonioTesteMP",
    options: {
        trustServerCertificate: true
    }
};

/*
FUNÇÃO: Converte senha para Base64
👉 Isso é necessário porque seu banco armazena assim
*/
function toBase64(texto) {
    return Buffer.from(texto, 'utf-8').toString('base64');
}

/*
ROTA: /login
👉 Recebe usuário e senha do front
👉 Valida no banco
*/
app.post("/login", async (req, res) => {

    // Pega dados enviados pelo front
    const { usuario, senha } = req.body;

    try {
        // Conecta no banco
        const pool = await sql.connect(config);

        // Converte senha digitada para Base64
        const senhaBase64 = toBase64(senha);

        // Consulta no banco
        const result = await pool.request()
            .input("usuario", sql.VarChar, usuario)
            .input("senha", sql.VarChar, senhaBase64)
            .query(`
                SELECT Usuario, Nome, Setor
                FROM dbo.Usuários
                WHERE Usuario = @usuario
                AND Senha = @senha
            `);

        // Se encontrou usuário
        if (result.recordset.length > 0) {

            res.json({
                success: true,
                user: result.recordset[0]
            });

        } else {
            // Usuário ou senha inválido
            res.json({ success: false });
        }

    } catch (erro) {
        console.error("Erro:", erro);
        res.status(500).json({ success: false });
    }
});

/*
INICIA SERVIDOR
*/
app.listen(3000, () => {
    console.log("\\file://pmn-files/TEMP/Jucelbia/AVA/index.html");
});