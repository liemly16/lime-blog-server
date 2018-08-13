import express from 'express';

import sample from './sample'
import user from './user'

let router = express.Router();

router.use('/sample', sample);
router.use('/user', user);

export default router;
