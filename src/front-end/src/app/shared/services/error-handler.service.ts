import { ErrorHandler, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyErrorHandler implements ErrorHandler {
    constructor(private http: HttpClient) {

    }

    handleError(error: any): void {
        this.http.post('/api/logs', { message: error.message }).subscribe(() => { });
    }
}
