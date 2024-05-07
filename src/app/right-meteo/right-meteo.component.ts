import { Component } from '@angular/core';
import{faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import{faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import{faFaceSmile} from '@fortawesome/free-solid-svg-icons';
import{faFaceFrown} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-right-meteo',
  templateUrl: './right-meteo.component.html',
  styleUrls: ['./right-meteo.component.css']
})
export class RightMeteoComponent {

  // fa icon smile
  faThumbsUp:any = faThumbsUp ;
  faThumbsDown:any = faThumbsDown;
  faFaceSmile : any = faFaceSmile ;
  faFaceFrown : any = faFaceFrown ;

  

  //variables to control menu 
today:boolean=false;
week:boolean=true;
// tempurateur 
celsius:boolean=true;
fahrenheit:boolean=false;
//fonction today /week
onTodayClick(){
   this.today=true;
   this.week=false;

}
onWeekClick(){
this.week=true;
this.today=false;
}
//fonction  to tempurateur

onCelsiusClick(){
this.celsius=true;
this.fahrenheit=false;
}
onFahrenheitClick(){
this.fahrenheit=true;
this.celsius=false;
}
}
