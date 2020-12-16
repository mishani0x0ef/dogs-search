import { AbstractControl } from '@angular/forms';

export function imageLinkValidator(control: AbstractControl): { [key: string]: boolean } | null  {
    const regExp = /\.(jpeg|jpg|gif|png)$/;
    if (regExp.test(control.value)) {
        console.log('image validator: true', control.value);
        return null;
    }
    console.log('image validator: false');
    return {imageLinkValidator: true};
}
