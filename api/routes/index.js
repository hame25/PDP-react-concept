import Express from 'express';
import product from './product';

let router = Express.Router();

router
.use('/product', product);

export default router;