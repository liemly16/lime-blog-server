
import {
    categoryController
} from '../controllers'

import CrudRouter from './crud'

class Category extends CrudRouter {
    constructor() {
        super(categoryController);
    }
}

let category = new Category();

export default category.router;
