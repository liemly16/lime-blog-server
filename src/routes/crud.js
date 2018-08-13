import BaseRouter from "./base";

export default class CrudRouter extends BaseRouter {
    constructor(Controller) {
        super();
        this.controller = Controller;
        this.customRouting();
        this.defaultRouting();
    }

    defaultRouting() {
        this.router.get('/', this.route(this.getList))
        this.router.get('/:_id', this.route(this.getItem))
        this.router.post('/', this.route(this.create))
        this.router.put('/:_id', this.route(this.update))
        this.router.delete('/:_id', this.route(this.delete))
    }

    customRouting() {

    }

    async getList(req, res) {
        const result = await this.controller.getList();
        res.json({
            result
        });
    }

    async getItem(req, res) {
        const result = await this.controller.getItem(req.params._id);
        res.json({
            result
        });
    }

    async create(req, res) {
        const result = await this.controller.create(req.body);
        res.json({
            result
        });
    }
}

