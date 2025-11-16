import * as i0 from '@angular/core';
import { EventEmitter, SimpleChanges } from '@angular/core';
import * as rxjs from 'rxjs';

declare class TutorialChipComponent {
    action?: string;
    elementId: string;
    next: EventEmitter<void>;
    message: string;
    isLastStep: boolean;
    done: EventEmitter<void>;
    position: {
        top: string;
        left: string;
    };
    ngOnChanges(changes: SimpleChanges): void;
    performAction(): void;
    updatePosition(): void;
    onNextClick(): void;
    onDoneClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TutorialChipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TutorialChipComponent, "app-tutorial-chip", never, { "action": { "alias": "action"; "required": false; }; "elementId": { "alias": "elementId"; "required": false; }; "message": { "alias": "message"; "required": false; }; "isLastStep": { "alias": "isLastStep"; "required": false; }; }, { "next": "next"; "done": "done"; }, never, never, true, never>;
}

declare class TutorialService {
    private steps;
    private currentStepIndexSubject;
    currentStepIndex$: rxjs.Observable<number>;
    private tutorialTrigger;
    tutorialTrigger$: rxjs.Observable<string>;
    triggerTutorial(topic: string): void;
    setCurrentStepIndex(step: number): void;
    loadTutorial(item: any[]): void;
    getCurrentStep(): any;
    nextStep(): void;
    hasNextStep(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TutorialService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TutorialService>;
}

export { TutorialChipComponent, TutorialService };
