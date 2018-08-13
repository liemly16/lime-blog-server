export default class BaseController {
    constructor(Model) {
        this.model = Model;
    }

    async getList() {
        return await this.model.find({});
    }

    async getItem(_id){
        return await this.model.findOne({_id});
    }

    async create(params){
        return await this.model.create(params);
    }

}