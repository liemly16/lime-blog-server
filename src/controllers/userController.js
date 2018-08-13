import BaseController from './baseController'

import User from '../models/user'

export default class UserController extends BaseController {
    constructor() {
        super(User);
    }
}