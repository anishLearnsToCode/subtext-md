import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import {KatexModule} from "ng-katex";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        KatexModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}