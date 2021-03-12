import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class ModalWindowAndFormService {
    isLoading = true;
    isFormSHow = false;
    modalStream$: Subject<object> = new Subject();

    constructor() {

    }

    setLoadingState(newState: boolean): void {
        this.isLoading = newState;
    }

    updateState(): void {
        this.modalStream$.next({
            isLoading: this.isLoading,
            isFormShown: this.isFormSHow
        });
    }

    showForm = (): void => {
        this.isFormSHow = true;
        this.isLoading = false;
        this.modalStream$.next(
            {
                isLoading: this.isLoading,
                isFormShown: this.isFormSHow
            }
        );
    };

    hideModalWindow = (): void => {
        this.isFormSHow = false;
        this.isLoading = false;
        this.modalStream$.next(
            {
                isLoading: this.isLoading,
                isFormShown: this.isFormSHow
            }
        );
    };
}
