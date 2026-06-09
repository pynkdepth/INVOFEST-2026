import express from 'express';

import { 
    getAllPembicara, 
    createPembicara,
    getPembicaraById,
    updatePembicara,
    deletePembicara
} from '../Controllers/Pembicaracontroller.js';

const router = express.Router();


router.get('/', getAllPembicara);
router.post('/', createPembicara);
router.get('/:id', getPembicaraById);
router.put('/:id', updatePembicara);
router.delete('/:id', deletePembicara);


export default router;