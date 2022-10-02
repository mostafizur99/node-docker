import { Express, Request, Response } from "express";
import { createProductsHandler } from "../controller/products.controller";

const productsRoute = (app: Express) => {
    app.get('/', (req: Request, res: Response) => {
        res.status(200).send('OK')
    })

    //create a product
    app.post("/api/v1/products", createProductsHandler)

}

export default productsRoute