import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as productActions from "./product.actions";
import { map, switchMap } from "rxjs/operators"
import { ProductService } from "src/app/services/product.service";

@Injectable()
export class ProductEffects {

    constructor(private actions$: Actions, private productService: ProductService) { }

    getProducts = createEffect(() =>
        this.actions$.pipe(
            ofType(productActions.GET_PRODUCTS),
            switchMap(action => {
                return this.productService.getProducts().pipe(
                    map(response => {
                        return new productActions.LoadProducts(response);
                    })
                );
            })
        )
    );

    addProduct = createEffect(() =>
        this.actions$.pipe(
            ofType(productActions.ADD_PRODUCT),
            switchMap((action: productActions.AddProduct) => {
                return this.productService.addProduct(action.payload).pipe(
                    map(response => {
                        return new productActions.AddProductSuccess(response);
                    })
                );
            })
        )
    );

    deleteProduct = createEffect(() =>
        this.actions$.pipe(
            ofType(productActions.DELETE_PRODUCT),
            switchMap((action: productActions.DeleteProduct) => {
                return this.productService.deleteProduct(action.payload).pipe(
                    map(() => {
                        return new productActions.DeleteProductSuccess(action.payload);
                    })
                );
            })
        )
    );

    updateProduct = createEffect(() =>
        this.actions$.pipe(
            ofType(productActions.UPDATE_PRODUCT),
            switchMap((action: productActions.UpdateProduct) => {
                return this.productService.updateProduct(action.payload).pipe(
                    map(response => {
                        return new productActions.UpdateProductSuccess(response);
                    })
                );
            })
        )
    );
}
