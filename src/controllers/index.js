import SampleController from './sampleController'
import UserController from './userController'
import PostController from './postController'
import CategoryController from './categoryController'

const sampleController = new SampleController();
const userController = new UserController();
const postController = new PostController();
const categoryController = new CategoryController();

export {
    sampleController,
    userController,
    postController,
    categoryController
}