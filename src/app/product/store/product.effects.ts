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
}
