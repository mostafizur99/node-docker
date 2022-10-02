import ProductsModel, { ProductsDocument } from "../models/products.model";

// create product service
export async function createProduct(inputData: any) {
    try {
        const product = await ProductsModel.create(inputData)
        return product
    } catch (e) {
        throw e
    }
}