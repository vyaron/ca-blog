const counter = signal(0);

counter.set(2);
counter.update(count => count + 1);

const counter = signal(0);

// Automatically updates when `counter` changes:
const isEven = computed(() => counter() % 2 === 0);

const counter = signal(0);
effect(() => console.log('The counter is:', counter()));
// The counter is: 0

counter.set(1);
// The counter is: 1




// "Glitch Free" property
const counter = signal(0);
const evenOrOdd = computed(() => counter() % 2 === 0 ? 'even' : 'odd');
effect(() => console.log(counter() + ' is ' + evenOrOdd());

counter.set(1);

// Dynamic Dependency Tracking
const dynamic = computed(() => useA() ? dataA() : dataB());

// Equality Semantics
const counter = signal(0);
const isEven = computed(() => counter() % 2 === 0);
effect(() => console.log(isEven() ? 'even!' : 'odd!'));





import { Component } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    count$ = new BehaviorSubject(0);
    doubleCount$ = this.count$.pipe(map((value) => value * 2));

    constructor() {
        setInterval(() => {
            let currentCount = 0;
            this.count$.pipe(take(1)).subscribe((x) => (currentCount = x));
            this.count$.next(currentCount + 1);
        }, 1000);
    }
}


