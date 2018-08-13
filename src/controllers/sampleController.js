import BaseController from './baseController'

import Sample from '../models/sample'

export default class SampleController extends BaseController {
    constructor() {
        super(Sample);
    }
}