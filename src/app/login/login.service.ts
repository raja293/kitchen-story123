import{Injectable} from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class LoginService{
    logged:boolean=false;
    loggedin(){
        this.logged=true;
    }
    loggedoff(){
        this.logged=false;
    }
    getloginfo(){
        return this.logged;
    }
}