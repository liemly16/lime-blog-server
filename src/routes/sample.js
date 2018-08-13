
import {
    sampleController
} from '../controllers'

import CrudRouter from './crud'

class Sample extends CrudRouter {
    constructor() {
        super(sampleController);
    }
}

let sample = new Sample();

export default sample.router;
