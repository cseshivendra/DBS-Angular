import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { pipe, throwError } from 'rxjs';
import { catchError,  retry } from 'rxjs/operators';

export class HttpClientInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler ){
        console.log('The filter is getting invoked !!!!');
        return next.handle(request)
         .pipe(
          retry(4),
          catchError((error) =>{
            if(error.error instanceof ProgressEvent){
              window.alert(`Looks like you are unable to connect to Internet. Please check your Internet connection..`);  
            }else {
              window.alert(`Dont worry. Our monkeys are looking into the issues and will fix it soon.`);
            }
            return throwError(`${error.message}`)
          })
        );
    }
}