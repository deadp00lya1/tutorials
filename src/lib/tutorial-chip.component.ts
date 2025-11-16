import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tutorial-chip',
    templateUrl: './tutorial-chip.component.html',
    standalone: true,
    imports: [CommonModule],
    styleUrls: ['./tutorial-chip.component.css']
})
export class TutorialChipComponent {


    @Input() action?: string;
    @Input() elementId!: string;
    @Output() next = new EventEmitter<void>();

    @Input() message!: string;
    @Input() description!: string;
    @Input() isLastStep: boolean = false;
    @Output() done = new EventEmitter<void>();

    position = { top: '0px', left: '0px' };

    ngOnChanges(changes: SimpleChanges): void {
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
            this.next.emit();      // Notify parent to move to next step
        }, 100); // Adjust delay as needed
    }

    onDoneClick() {
        this.done.emit();
    }

}
