// chatbot.component.ts
import { Component } from '@angular/core';
import { faClose,faRobot,faPaperPlane,faMessage } from '@fortawesome/free-solid-svg-icons';
declare var $: any;

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  faMessage:any=faMessage;
  faClose:any=faClose;
  faRobot:any=faRobot;
  faPaperPlane:any=faPaperPlane;
 


  openChatbot(): void {
    $('body').addClass('show-chatbot');
  }
  closeChatbot(): void {
    console.log('Fermeture du chatbot');
    $('body').removeClass('show-chatbot');
  }
  
}
