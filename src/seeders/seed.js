const db = require('../utils/database');
const Users = require('../models/users.models');
const Todos = require('../models/todos.models');
const initModels = require('../models/init.model');

initModels();

const users = [
    {
        userName: 'Karol', 
        email: 'karol@gmail.com', 
        password: '1234'
    },
    {
        userName: 'Dayana', 
        email: 'dayana@gmail.com', 
        password: '3244'
    },
    {
        userName: 'Norfi', 
        email: 'norfi@gmail.com', 
        password: '7854'
    },
];

const todos = [
    {
        title: 'Tarea 1', 
        description: 'jdsffrng grgred', 
        userId: 1,
    },
    {
        title: 'Tarea 2', 
        description: 'jng grgred', 
        userId: 1,
    },
    {
        title: 'Tarea imposible', 
        userId: 2,
    },
    {
        title: 'Dormir', 
        description: 'porque node no me deja', 
        userId: 3,
    },
];

// const categories = [];

// const todosCategories = [];

// create
//findOne, findAll, findByPk

db.sync({force: true})
    .then(() => {
        console.log("Iniciando con el sembrado malicioso");
        users.forEach((user) => Users.create(user));

    setTimeout(() => {
        todos.forEach((todo) => Todos.create(todo));
    }, 100);
    })
    .catch((error) => console.log(error));
