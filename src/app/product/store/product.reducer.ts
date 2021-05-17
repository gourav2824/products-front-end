import { Product } from "src/app/model/product.model";
import * as productActions from "./product.actions";

export interface State {
    products: Product[];
}

export interface AppState {
    products: State;
}

const initialState: State = {
    products: [
        new Product(1, "Phone", 12000),
        new Product(2, "Earphone", 400),
        new Product(3, "Laptop", 45000)
    ]
};

export function productReducer(state: State = initialState, action: productActions.productActionsType) {
    switch (action.type) {

        case productActions.GET_PRODUCTS:
            return {
                ...state
            };

        case productActions.ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            };

        case productActions.DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => {
                    return product.getId() !== action.payload;
                })
            };

        case productActions.UPDATE_PRODUCT:
            const updatedProducts = state.products.map(product => {
                if (product.getId() === action.payload.getId()) {
                    return action.payload;
                }
                return product;
            });

            return {
                ...state,
                products: updatedProducts
            };

        default:
            return state;
    }
}
