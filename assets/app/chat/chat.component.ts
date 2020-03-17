import {Component} from "@angular/core";
import {ChatService} from "../chat.service";

@Component({
    selector: 'chat-page',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css'],
    providers:[ChatService]
})
export class ChatComponent {

}