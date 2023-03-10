const {Router} = require('express');

const {
    getAllUsers,
    getUserById,
    getTodosWihtCategories,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/users.controller')

const router = Router();


router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.get('/users/:id/categories', getTodosWihtCategories);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;