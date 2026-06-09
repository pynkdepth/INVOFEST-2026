import express from 'express';

import { 
    getAllUser, 
    createUser,
    getUserById,
    updateUser,
    deleteUser
} from '../Controllers/UserController.js';

const router = express.Router();

router.get('/', getAllUser);
router.post('/', createUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


export default router;