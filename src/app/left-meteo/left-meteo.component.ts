import { Component } from '@angular/core';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { faLocation} from '@fortawesome/free-solid-svg-icons';
import { faCloud} from '@fortawesome/free-solid-svg-icons';
import { faCloudRain} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-left-meteo',
  templateUrl: './left-meteo.component.html',
  styleUrls: ['./left-meteo.component.css']
})
export class LeftMeteoComponent {
  //variables for icons

  // variables left nav bar
  faMagnifyingGlass:any = faMagnifyingGlass;
  faLocation:any = faLocation

  //variable temperature 
  faCloud:any = faCloud;
  faCloudRain:any=faCloudRain;

}
