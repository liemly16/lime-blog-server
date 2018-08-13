import BaseController from './baseController'

import { Post } from '../models'

export default class PostController extends BaseController {
    constructor() {
        super(Post);
    }
}