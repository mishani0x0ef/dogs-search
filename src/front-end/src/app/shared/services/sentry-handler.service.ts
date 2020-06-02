import * as Sentry from '@sentry/browser';

import { ErrorHandler, Injectable } from '@angular/core';

Sentry.init({
    dsn: 'https://ff1c9b77c26f4cc08c71bffce5bc475f@o353044.ingest.sentry.io/5261216'
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        Sentry.captureException(error.originalError || error);
    }
}
