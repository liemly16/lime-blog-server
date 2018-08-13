import express from 'express';

import sample from './sample'
import user from './user'
import post from './post'
import category from './category';

let router = express.Router();

router.use('/sample', sample);
router.use('/user', user);
router.use('/post', post);
router.use('/category', category);

export default router;
