import mongoose from "mongoose";

export interface ProductsDocument extends mongoose.Document {
    productTitle: string
    category: string
    price: string
    description: string
    createdAt: Date
    updatedAt: Date
}

const productsSchema = new mongoose.Schema({
    productTitle: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

const ProductsModel = mongoose.model<ProductsDocument>('Products', productsSchema)

export default ProductsModel