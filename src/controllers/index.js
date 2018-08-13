import SampleController from './sampleController'
import UserController from './userController'
import PostController from './postController'

const sampleController = new SampleController();
const userController = new UserController();
const postController = new PostController();

export {
    sampleController,
    userController,
    postController
}