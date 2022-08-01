import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
  } from '@angular/common/http';
  import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
       
  export class AddHeaderInterceptor implements HttpInterceptor {
    constructor() {
      if (!environment.apiKey) throw new Error('apiKey is not defined')
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const clonedRequest = req.clone({ headers: req.headers.append('X-Api-Key', environment.apiKey) });
      return next.handle(clonedRequest);
    }
  }