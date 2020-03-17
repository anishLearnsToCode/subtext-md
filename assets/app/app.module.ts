import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import {KatexModule} from "ng-katex";
import {ChatComponent} from "./chat/chat.component";

@NgModule({
    declarations: [
        AppComponent,
        ChatComponent
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