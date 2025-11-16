import * as i0 from '@angular/core';
import { EventEmitter, Output, Input, Component, Injectable } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subject } from 'rxjs';

class TutorialChipComponent {
    action;
    elementId;
    next = new EventEmitter();
    message;
    isLastStep = false;
    done = new EventEmitter();
    position = { top: '0px', left: '0px' };
    ngOnChanges(changes) {
        if (changes['elementId']) {
            this.updatePosition();
        }
    }
    performAction() {
        if (this.action === 'click') {
            const el = document.getElementById(this.elementId);
            if (el) {
                el.click(); // Simulate the click
            }
        }
    }
    updatePosition() {
        const el = document.getElementById(this.elementId);
        if (el) {
            const rect = el.getBoundingClientRect();
            this.position = {
                top: `${rect.top + window.scrollY - 50}px`, // Slightly above
                left: `${rect.left + window.scrollX}px`
            };
        }
    }
    onNextClick() {
        this.performAction();
        // Delay to allow DOM changes (e.g., modal opens)
        setTimeout(() => {
            this.updatePosition(); // Recalculate chip position
            this.next.emit(); // Notify parent to move to next step
        }, 100); // Adjust delay as needed
    }
    onDoneClick() {
        this.done.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: i0, type: TutorialChipComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.10", type: TutorialChipComponent, isStandalone: true, selector: "app-tutorial-chip", inputs: { action: "action", elementId: "elementId", message: "message", isLastStep: "isLastStep" }, outputs: { next: "next", done: "done" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"chip\" [ngStyle]=\"{ top: position.top, left: position.left }\">\n    <span>{{ message }}</span>\n</div>\n<div class=\"modal-overlay\" >\n    <div class=\"modal-content\" >\n       <button class=\"custom-chip primary\" *ngIf=\"!isLastStep\" (click)=\"onNextClick()\">Next</button>&nbsp;\n        &nbsp;\n        <button class=\"custom-chip secondary\" (click)=\"onDoneClick()\">{{ isLastStep ? 'Done' : 'skip' }}</button>\n    </div>\n</div>", styles: [".modal-overlay{position:fixed;width:40%;box-shadow:none;display:flex;align-items:center;justify-content:center;bottom:0;z-index:1000;padding:20px 30%}.modal-content{display:flex;align-items:center;justify-content:center;width:100%;background:#00000024;padding:1rem;border-radius:20px;box-shadow:none}.tutorial-highlight{outline:3px solid #42a5f5;box-shadow:0 0 12px #42a5f5b3;border-radius:6px;animation:pulseGlow 1.5s infinite;transition:box-shadow .3s ease,outline .3s ease}@keyframes pulseGlow{0%{box-shadow:0 0 12px #42a5f5b3}50%{box-shadow:0 0 20px #42a5f5}to{box-shadow:0 0 12px #42a5f5b3}}.primary{background:#fff!important}.custom-chip{background:#00796b45;color:#000;padding:10px 16px;border-radius:20px;box-shadow:0 4px 12px #0003;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.chip{position:absolute;background:#00796b45!important;color:#000;padding:10px 16px;border-radius:20px;z-index:1000;box-shadow:0 4px 12px #0003;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);display:flex;align-items:center;gap:12px;transition:top .3s ease,left .3s ease,opacity .3s ease,transform .3s ease;opacity:0;transform:translateY(-10px);animation:fadeSlideIn .4s forwards}@keyframes fadeSlideIn{to{opacity:1;transform:translateY(0)}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: i0, type: TutorialChipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-tutorial-chip', standalone: true, imports: [CommonModule], template: "<div class=\"chip\" [ngStyle]=\"{ top: position.top, left: position.left }\">\n    <span>{{ message }}</span>\n</div>\n<div class=\"modal-overlay\" >\n    <div class=\"modal-content\" >\n       <button class=\"custom-chip primary\" *ngIf=\"!isLastStep\" (click)=\"onNextClick()\">Next</button>&nbsp;\n        &nbsp;\n        <button class=\"custom-chip secondary\" (click)=\"onDoneClick()\">{{ isLastStep ? 'Done' : 'skip' }}</button>\n    </div>\n</div>", styles: [".modal-overlay{position:fixed;width:40%;box-shadow:none;display:flex;align-items:center;justify-content:center;bottom:0;z-index:1000;padding:20px 30%}.modal-content{display:flex;align-items:center;justify-content:center;width:100%;background:#00000024;padding:1rem;border-radius:20px;box-shadow:none}.tutorial-highlight{outline:3px solid #42a5f5;box-shadow:0 0 12px #42a5f5b3;border-radius:6px;animation:pulseGlow 1.5s infinite;transition:box-shadow .3s ease,outline .3s ease}@keyframes pulseGlow{0%{box-shadow:0 0 12px #42a5f5b3}50%{box-shadow:0 0 20px #42a5f5}to{box-shadow:0 0 12px #42a5f5b3}}.primary{background:#fff!important}.custom-chip{background:#00796b45;color:#000;padding:10px 16px;border-radius:20px;box-shadow:0 4px 12px #0003;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.chip{position:absolute;background:#00796b45!important;color:#000;padding:10px 16px;border-radius:20px;z-index:1000;box-shadow:0 4px 12px #0003;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);display:flex;align-items:center;gap:12px;transition:top .3s ease,left .3s ease,opacity .3s ease,transform .3s ease;opacity:0;transform:translateY(-10px);animation:fadeSlideIn .4s forwards}@keyframes fadeSlideIn{to{opacity:1;transform:translateY(0)}}\n"] }]
        }], propDecorators: { action: [{
                type: Input
            }], elementId: [{
                type: Input
            }], next: [{
                type: Output
            }], message: [{
                type: Input
            }], isLastStep: [{
                type: Input
            }], done: [{
                type: Output
            }] } });

class TutorialService {
    steps = [];
    currentStepIndexSubject = new BehaviorSubject(0);
    currentStepIndex$ = this.currentStepIndexSubject.asObservable();
    tutorialTrigger = new Subject();
    tutorialTrigger$ = this.tutorialTrigger.asObservable();
    triggerTutorial(topic) {
        this.tutorialTrigger.next(topic);
    }
    setCurrentStepIndex(step) {
        this.currentStepIndexSubject.next(step);
    }
    loadTutorial(item) {
        debugger;
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
    hasNextStep() {
        return this.currentStepIndexSubject.value < this.steps.length - 1;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.10", ngImport: i0, type: TutorialService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.3.10", ngImport: i0, type: TutorialService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.10", ngImport: i0, type: TutorialService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TutorialChipComponent, TutorialService };
//# sourceMappingURL=ng-tutorials.mjs.map
