import { Router } from "express";

export class BaseRouter<T> { // LA T ES EL CONTROLADOR Y LA U EL MIDDLEWARE
    public router: Router;
    public controller: T
    //public middleware: U
    constructor(TController: {new (): T}){ // Tcontroller tiene un tipado generico
        this.router = Router()
        this.controller = new TController()
        this.routes()
    }


    routes() {

    }
}