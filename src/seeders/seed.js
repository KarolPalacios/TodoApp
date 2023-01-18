const db = require('../utils/database');
const Users = require('../models/users.models');
const Todos = require('../models/todos.models');
const Categories = require('../models/categories.models');
const TodosCategories = require('../models/todosCategories.models');
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
        title: 'Estudiar node', 
        description: 'jdsffrng grgred', 
        userId: 1,
    },
    {
        title: 'Pasear al perro', 
        description: 'jng grgred', 
        userId: 1,
    },
    {
        title: 'lavar platos', 
        userId: 2,
    },
    {
        title: 'ir chequeo mensual', 
        description: 'porque node no me deja', 
        userId: 3,
    },
];

const categories = [
    {name: 'personal'},
    {name: 'educacion'},
    {name: 'salud'},
    {name: 'trabajo'},
    {name: 'hogar'},
    {name: 'cocina'},
    {name: 'deporte'},
    {name: 'ocio'},
    {name: 'financiero'},
    {name: 'entretenimiento'},
];

const todosCategories = [
    {categoryId: 1, todoId: 1},
    {categoryId: 2, todoId: 1},
    {categoryId: 4, todoId: 1},
    {categoryId: 1, todoId: 2},
    {categoryId: 7, todoId: 2},
    {categoryId: 10, todoId: 2},
    {categoryId: 3, todoId: 2},
    {categoryId: 5, todoId: 3},
    {categoryId: 6, todoId: 3},
    {categoryId: 1, todoId: 4},
    {categoryId: 3, todoId: 4},
];

// create
//findOne, findAll, findByPk

db.sync({force: true})
    .then(() => {
        console.log("Iniciando con el sembrado malicioso");
        users.forEach((user) => Users.create(user));

    setTimeout(() => {
        todos.forEach((todo) => Todos.create(todo));
    }, 100);

    setTimeout(() => {
        categories.forEach((category) => Categories.create(category));
    }, 250);

    setTimeout(() => {
        todosCategories.forEach((tc) => TodosCategories.create(tc));
    }, 400);
    })
    .catch((error) => console.log(error));
