import { Component, HostBinding, Input } from '@angular/core';
import { RxState } from '@rx-angular/state';
import { Observable } from 'rxjs';

interface ComponentState {
    value: number;
    min: number;
    max: number;
}

interface ViewModel {
    value: number;
    min: number;
    max: number;
}

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss'],
    providers: [RxState],
})
export class CounterComponent {
    @HostBinding('style.display')
    private get display(): string {
        return this.displayed ? 'block' : 'none';
    }

    private displayed = true;

    @Input()
    set value(val: number) {
        this.state.set({ value: val });
    }

    @Input()
    set max(max: number) {
        this.state.set({ max });
    }

    @Input()
    set min(min: number) {
        this.state.set({ min });
    }

    private readonly INIT_VALUES = {
        max: 99,
        min: 0,
        value: 0,
    };

    readonly viewModel$: Observable<ViewModel> = this.state.select();

    constructor(private readonly state: RxState<ComponentState>) {
        this.state.set(this.INIT_VALUES);
    }

    activate() {
        console.log('cocou');
        this.displayed = true;
    }

    onClickOutside() {
        console.log('godbye');
        this.displayed = false;
    }
}
