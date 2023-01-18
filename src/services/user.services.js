const Users = require('../models/users.models');
const Todos = require('../models/todos.models');
const TodosCategories = require('../models/todosCategories.models');
const Categories = require('../models/categories.models');

class UserServices {
    static async getAll() {
        try {
            const result = await Users.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getById(id){
        try {
            const result = await Users.findByPk(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getWithCategories(id){
        try {
            const result = await Users.findOne({
                where: {id},
                attributes: ['userName'],
                include: {
                    model: Todos,
                    as: 'task',

                    include: {
                        model: TodosCategories,
                        as: 'category',
                        attributes: ['id'],

                        include: {
                            model: Categories,
                            as: 'category'
                        }
                    }
                },
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async create(user){
        try {
            const result = await Users.create(user);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update(field, id){
        try {
            const result = await Users.update(field, {where: {id}});
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id){
        try {
            const result = await Users.destroy({where: {id}});
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;