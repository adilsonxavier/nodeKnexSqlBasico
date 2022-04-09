let knex = require("knex")({
    client:"mssql",
    connection:{
        server:"localhost",
        user:"sa",
        password:"sqlserver",
        database:"VitrineProdutos"
    }
});

knex.select("*").from("categorias")
.where("categoriaid",3)
.then(cats=>{
    console.log(cats);
    cats.forEach(cat => {
        console.log(cat);
    });
})
.catch(erro=>console.log(erro))
.finally(()=>{
    knex.destroy();}
);