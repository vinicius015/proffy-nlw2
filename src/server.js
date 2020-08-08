
 const express = require('express')
 const server = express()

 const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require("./pages")

 const nunjucks = require('nunjucks')
 nunjucks.configure('src/views', {
     express: server,
     noCache: true,
 })

 //Servidor
server
//receber os dados do req.body
.use(express.urlencoded({ extended: true }))
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//Start do servidos
.listen(5000)