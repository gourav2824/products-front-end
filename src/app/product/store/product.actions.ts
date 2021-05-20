import { Action } from "@ngrx/store";
import { Product } from "src/app/model/product.model";

export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export class LoadProducts implements Action {
    readonly type = LOAD_PRODUCTS;

    constructor(public payload: Product[]) { }
}

export class GetProducts implements Action {
    readonly type = GET_PRODUCTS;
}

export class AddProduct implements Action {
    readonly type = ADD_PRODUCT;

    constructor(public payload: Product) { }
}

export class AddProductSuccess implements Action {
    readonly type = ADD_PRODUCT_SUCCESS;

    constructor(public payload: Product) { }
}

export class DeleteProduct implements Action {
    readonly type = DELETE_PRODUCT;

    constructor(public payload: number) { }
}

export class UpdateProduct implements Action {
    readonly type = UPDATE_PRODUCT;

    constructor(public payload: Product) { }
}

export type productActionsType =
    | LoadProducts
    | GetProducts
    | AddProduct | AddProductSuccess
    | DeleteProduct
    | UpdateProduct;
