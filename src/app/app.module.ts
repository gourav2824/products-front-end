import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './product/store/product.reducer';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './product/store/product.effects';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ products: productReducer }),
    EffectsModule.forRoot([ProductEffects])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
