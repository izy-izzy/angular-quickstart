import { Directive, Input, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({ 
    selector: '[sureSave]' 
})

export class SureSaveDirective{ 
    @Input('sureSave') onConfirmed: Function = () => {};
    @Input() confirmMessage: string = 'Are you sure you want to do this?';
    @Output() runOnConfirmed: EventEmitter<any> = new EventEmitter();

    @HostListener('click', ['$event'])
    confirmFirst() {
        const confirmed = window.confirm(this.confirmMessage);

        if(confirmed) {
            this.runOnConfirmed.emit();
        }
    }
}
