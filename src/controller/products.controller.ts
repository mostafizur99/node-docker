import { Request, Response } from "express";
import { createProduct, getProducts } from "../service/products.service";

// create a product controller
export async function createProductsHandler(req: Request, res: Response) {
    try {
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

// get all products controller
export async function getProductsHandler(req: Request, res: Response) {
    try {

        const products = await getProducts()
        return res.status(201).send({
            message: "New Products Created Successfully",
            data: products
        });
    } catch (e: any) {
        res.status(400).json({
            message: "Invalid request",
            error: e.message,
        });
    }
}