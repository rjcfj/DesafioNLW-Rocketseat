const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./src/database/database.db")
module.exports = db

db.serialize(() => {
//   db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT,
//       address TEXT,
//       address2 TEXT,
//       state TEXT,
//       city TEXT,
//       items TEXT
//     );
//   `)

//   const query = `
//   INSERT INTO places (
//     image,
//     name,
//     address,
//     address2,
//     state,
//     city,
//     items
//   ) VALUES (?,?,?,?,?,?,?);
// `

//   const values = [
//     "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1224&q=80",
//     "Colectoria",
//     "Guilherme Gemballa, Jardemin América",
//     "Número 260",
//     "Rio do Sul",
//     "Santa Catarina",
//     "Papéis, Papelão"
//   ]

//   function afterInserData(err) {
//     if (err) {
//       return console.log(err)
//     }

//     console.log("Cadastro com sucesso")
//     console.log(this)
//   }

// db.run(query, values, afterInserData)

  // db.run(`DELETE FROM places WHERE id = ?`, [2], function (err) {
  //   if (err) {
  //     return console.log(err)
  //   }
  //   console.log("Registro deleteado com sucesso: ")
  // })

  // db.all(`SELECT * FROM places`, function (err, rows) {
  //   if (err) {
  //     return console.log(err)
  //   }
  //   console.log("Aqui estão seus registros: ")
  //   console.log(rows)
  // });

})