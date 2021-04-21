import { Component , SimpleChanges} from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { LoginComponent } from 'src/app/login/login.component';
import { faShippingFast  } from '@fortawesome/free-solid-svg-icons';
import { from } from 'rxjs';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'TekAngProject';
  tagline:string='Shop easily';
  faShippingFast=faShippingFast;
  faShoppingCart=faShoppingCart;
  logg:boolean=false;
  constructor(private loggg:LoginService){
    this.logg=this.loggg.getloginfo();
  }
  
  
}
