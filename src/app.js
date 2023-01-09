const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/init.model");
const Users = require("./models/users.models");
const Todos = require("./models/todos.models");

const app = express();

app.use(express.json());

const PORT = 8000;

initModels();

db.authenticate()
    .then(() => console.log("Autenticación exitosa"))
    .catch((error) => console.log(error));


db.sync({force: false})
    .then(() => console.log("Base sincronizada"))
    .catch((error) => console.log(error));


app.get("/", (req, res) => {
    res.status(200).json({ message: "Bienvenido al server" });
});

// definir las rutas de nuestros endpoints

// Users

// GET  a /users

app.get('/users', async (req, res) => {
    try {
        const result = await Users.findAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
})

// Obtener un usuario sabiendo su id

app.get('/users/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Users.findByPk(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

// Obtener un usuario por su username

app.get('/users/userName/:userName', async (req, res) => {
    try{
        const {userName} = req.params;
        const result = await Users.findOne({ where: {userName} });
        res.status(200).json(result);
    } catch (error) {
        console.log(error)
    }
});

// POST

app.post('/users', async (req, res) => {
    try {
        const user = req.body;
        const result = await Users.create(user);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);
    }
});

// PUT

app.put('/users/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const field = req.body;
        const result = await Users.update(field, { where: {id}, });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

// DELETE

app.delete('/users/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Users.destroy({ where: {id}, });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
});


// Todos

// GET 
app.get('/todos', async (req, res) => {
    try {
        const result = await Todos.findAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

// GET id

app.get('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Todos.findByPk(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

// POST

app.post('/todos', async (req, res) => {
    try {
        const todo = req.body;
        const result = await Todos.create(todo);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error);
    }
});


// PUT

app.put('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const field = req.body;
        const result = await Todos.update(field, {where: {id},});
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

// DELETE

app.delete('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Todos.destroy({ where: {id}, });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});