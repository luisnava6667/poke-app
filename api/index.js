const server = require('./src/app.js')
const db = require('./src/db.js')

// Utilizamos la función setupDatabase para obtener los modelos y la conexión
const { conn } = db

// Sincronizamos los modelos con la base de datos
conn.sync({ force: false }).then(() => {
  // Iniciamos el servidor una vez que la sincronización haya terminado
  server.listen(3001, () => {
    console.log('======= listening at 3001 =======')
  })
})
