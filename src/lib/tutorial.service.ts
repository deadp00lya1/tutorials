import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class TutorialService {
    private steps: any[] = [];

    private currentStepIndexSubject = new BehaviorSubject<number>(0);
    currentStepIndex$ = this.currentStepIndexSubject.asObservable();
    private tutorialTrigger = new Subject<string>();
    tutorialTrigger$ = this.tutorialTrigger.asObservable();

    triggerTutorial(topic: string) {
        this.tutorialTrigger.next(topic);
    }
    setCurrentStepIndex(step: number) {
        this.currentStepIndexSubject.next(step);
    }


    loadTutorial(item:any[]): void {
      debugger
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