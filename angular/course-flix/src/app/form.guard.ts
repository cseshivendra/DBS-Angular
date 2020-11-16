import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { ChildOneComponent } from './child-one/child-one.component';

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanDeactivate<ChildOneComponent> {
  
  canDeactivate(component: ChildOneComponent, 
                currentRoute: ActivatedRouteSnapshot, 
                currentState: RouterStateSnapshot, 
                nextState?: RouterStateSnapshot):  boolean{

          return confirm("Are you sure, you want to exit from the page. You can loose your curent changes ");        

  }
}