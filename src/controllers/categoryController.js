import BaseController from './baseController'

import { Category } from '../models'

export default class CategoryController extends BaseController {
    constructor() {
        super(Category);
    }
}