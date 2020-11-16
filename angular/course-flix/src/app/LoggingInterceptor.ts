import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

export class LoggingInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler ){
        console.log('The Logging filter is getting invoked !!!!');
        console.log(`The URL is : ${request.url}`);
        return next.handle(request);
    }
}