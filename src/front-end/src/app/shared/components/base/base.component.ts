import { OnDestroy } from '@angular/core';
import { Unsubscribable } from 'rxjs';

export abstract class BaseComponent implements OnDestroy {
    private $subscriptions: Unsubscribable[] = [];

    ngOnDestroy(): void {
        if (this.$subscriptions) {
            this.$subscriptions.forEach(sub => sub.unsubscribe());
        }
    }

    /**
     * Register disposable subscription that should be disposed on component destroy to avoid memory leaks.
     * @param subscription Subscription to unsubscribe on component destroy.
     */
    protected addDisposable(subscription: Unsubscribable): BaseComponent {
        this.$subscriptions.push(subscription);
        return this;
    }
}
