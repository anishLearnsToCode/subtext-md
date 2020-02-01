import { Injectable } from "@angular/core";
import * as io from 'socket.io-client';
import {Observable} from 'rxjs/Observable';
const showdown = require('showdown');
const converter = new showdown.Converter();


@Injectable()
export class ChatService{

    private socket = io('http://localhost:3000');

    joinRoom(data)
    {
        this.socket.emit('join',data);
        if (data.user && data.room) {
            this.sendMessage({
                user: data.user,
                room: data.room,
                message: 'joined the chatroom ' + data.room
            });
        }
    }

    newUserJoined()
    {
        let observable = new Observable<{user:String, message:String}>(observer=>{
            this.socket.on('new user joined', (data) => {
                observer.next(data);
            });

            return () => { this.socket.disconnect(); }
        });

        return observable;
    }

    leaveRoom(data){
        this.socket.emit('leave',data);
        if (data.user && data.room) {
            this.sendMessage({
                user: data.user,
                room: data.room,
                message: 'left the chatroom ' + data.room
            });
        }
    }

    userLeftRoom(){
        let observable = new Observable<{user:String, message:String}>(observer=>{
            this.socket.on('left room', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }

    sendMessage(data) {
        // data.message = converter.makeHtml(data.message);
        // data.message = parse(data.message, { generator: generator }).htmlDocument();
        console.log('send message', data);
        this.socket.emit('message', data);
    }

    newMessageReceived(){
        let observable = new Observable<{user:String, message:String}>(observer=>{
            this.socket.on('new message', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }
}
