import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class TutorialService {
    private steps: any[] = [];

    private currentStepIndexSubject = new BehaviorSubject<number>(0);


    setCurrentStepIndex(step: number) {
        this.currentStepIndexSubject.next(step);
    }


    loadTutorial(item: any): void {
        this.setCurrentStepIndex(0);
        this.steps = item;

    }


    getCurrentStep() {
        return this.steps[this.currentStepIndexSubject.value];
    }

    nextStep() {
        if (this.currentStepIndexSubject.value < this.steps.length - 1) {
            this.setCurrentStepIndex(this.currentStepIndexSubject.value + 1);
        }
    }

    hasNextStep(): boolean {
        return this.currentStepIndexSubject.value < this.steps.length - 1;
    }

}