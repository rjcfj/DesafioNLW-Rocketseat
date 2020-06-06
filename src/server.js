const express = require("express");
const server = express();

// Pega o banco de dados
const db = require("./database/db")

// Configurar pasta publica
server.use(express.static("public"));

// Habilitar o uso do body na nossa aplicação
server.use(express.urlencoded({ extended: true }))

// Utilizando template engine
const nunjucks = require("nunjucks");

nunjucks.configure("src/views", {
  express: server,
  noCache: true
});

// Configurar caminhos da minha aplicação
// Página inicial
// req: Requisição
// res: Resposta 
// req.body: O corpo do nosso formulário
// req.query: Query String da nossa URL

server.get("/", (req, res) => {
  return res.render("index.html");
});

server.get("/create-point", (req, res) => {
  return res.render("create-point.html");
});

server.post("/create-point", (req, res) => {

  const query = `
  INSERT INTO places (image,name,address,address2,state,city,items) VALUES (?,?,?,?,?,?,?);
`
  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items,
  ]

  function afterInserData(err) {
    if (err) {
      console.log(err)
      return res.render("create-point.html", { saved: true, img: "close",  msg: "Erro no cadastro" });
    }
  }
  db.run(query, values, afterInserData)

  return res.render("create-point.html", { saved: true, img: "check", msg: "Cadastro Concluido" });
});

server.get("/search-results", (req, res) => {

  const search = req.query.search 

  if(search == ""){
    return res.render("search-results.html", {total : 0})
  }

  // Pegar os dados do banco de dados
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
    if (err) {
      return console.log(err)
    }

    const total = rows.length

    return res.render("search-results.html", { total: total, places: rows });
  });

});

server.listen(3000);
