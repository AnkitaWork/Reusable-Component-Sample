//External imports
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable()
export class CommanHeaderInterceptorService implements HttpInterceptor {
  private totalRequests = 0;
  private completedRequests = 0;

  constructor(
    private toasterService: ToastrService,
    private spinnerService: NgxSpinnerService
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.totalRequests++;
    this.spinnerService?.show();
    return next.handle(req).pipe(
      finalize(() => {
        this.completedRequests++;
        if (this.completedRequests === this.totalRequests) {
          this.spinnerService?.hide();
          this.completedRequests = 0;
          this.totalRequests = 0;
        }
      }),
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          try {
            let customErrMsg = 'Something is wrong please try again !';
            if (error.status === 0) {
              customErrMsg = 'Please check your VPN or internet connection !';
            } else if (error.status === 400) {
              customErrMsg = 'Bad request !';
            } else if (error.status === 404) {
              customErrMsg = 'The requested resource not found !';
            } else if (error.status === 401) {
              customErrMsg = 'Unauthorized user';
            } else if (error.status === 500) {
              customErrMsg = 'Internal server error !';
            } else if (error.status === 403) {
              if (error?.error?.Message) {
                localStorage.setItem('userFailed', JSON.stringify(true));
                customErrMsg = error?.error?.Message;
              } else {
                customErrMsg = 'Forbidden error !';
              }
            } else if (error.status === 503) {
              customErrMsg = 'The requested service is not available !';
            }
            this.spinnerService?.hide();
            this.toasterService.error(customErrMsg);
          } catch (e) {
            this.spinnerService?.hide();
            this.toasterService.error('Something is wrong please try again !');
          }
        }
        return of(error);
      }));
  }
}
