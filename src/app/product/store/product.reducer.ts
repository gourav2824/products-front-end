import { Product } from "src/app/model/product.model";
import * as productActions from "./product.actions";

export interface State {
    products: Product[];
}

export interface AppState {
    products: State;
}

const initialState: State = {
    products: []
};

export function productReducer(state: State = initialState, action: productActions.productActionsType) {
    switch (action.type) {

        case productActions.LOAD_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };

        case productActions.ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            };

        case productActions.DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((product: Product) => {
                    return product.id !== action.payload;
                })
            };

        case productActions.UPDATE_PRODUCT:
            const updatedProducts = state.products.map(product => {
                if (product.id === action.payload.id) {
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
