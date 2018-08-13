import express from 'express';

export default class BaseRouter {
    constructor() {
        this.router = express.Router();
    }

    handleError(res, error){
        console.log("ERROR");
        console.log(error);
        if (error && error.code && error.message){
            res.status(error.code).json(error);
        }
        else res.status(500).json({
            type: 'something_went_wrong',
            message: "Đã xảy ra lỗi"
        });
    }

    route(func) {
        return (req, res) => func
            .bind(this)(req, res)
            .catch(error => {
                this.handleError(res, error)
            })
    }

}

