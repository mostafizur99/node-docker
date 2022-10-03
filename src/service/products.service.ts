import ProductsModel, { ProductsDocument } from "../models/products.model";

// create a product service
export async function createProduct(inputData: any) {
    try {
        const product = await ProductsModel.create(inputData)
        return product
    } catch (e) {
        throw e
    }
}

// get product service
export async function getProducts() {
    try {
        const products = await ProductsModel.find()
        return products
    } catch (e) {
        throw e
    }
}