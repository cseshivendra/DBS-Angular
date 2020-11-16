import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

export class AuthInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler ){
        
        if (localStorage.getItem('userToken') === null) {
            console.log(`Invalid User >>>>>>>> `);
            return;
        }else {
            return next.handle(request);
        }
    }
}