import { Request, Response } from "express";
import { createProduct } from "../service/products.service";

export async function createProductsHandler(req: Request, res: Response) {
    try {
        console.log(' req.body.productTitle,', req.body.productTitle,)
        const inputData = {
            productTitle: req.body.productTitle,
            category: req.body.category,
            price: req.body.price,
            description: req.body.description,
        };
        await createProduct(inputData)
        return res.status(201).send({
            message: "New Products Created Successfully",
        });
    } catch (e: any) {
        res.status(400).json({
            message: "Invalid request",
            error: e.message,
        });
    }
}