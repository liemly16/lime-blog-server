
import {
    userController
} from '../controllers'

import CrudRouter from './crud'

class User extends CrudRouter {
    constructor() {
        super(userController);
    }
}

let user = new User();

export default user.router;
