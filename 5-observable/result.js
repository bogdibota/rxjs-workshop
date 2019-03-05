import { generateUUID } from '../api';

class Obs {
    constructor() {
        this._subscribers = {};
    }

    subscribe(subscriber) {
        let uuid = generateUUID();
        this._subscribers = {
            ...this._subscribers,
            [uuid]: subscriber,
        };
        return uuid;
    }

    unsubscribe(uuid) {
        delete this._subscribers[uuid];
    }

    next(value) {
        Object.values(this._subscribers).forEach(it => it(value));
    }

    map(project) {
        const newObs = new Obs();
        this.subscribe((...args) => newObs.next(project(...args)));
        return newObs;
    }
}

const obs = new Obs();
const subscription = obs.subscribe(console.log);
obs.map(q => q + 23).subscribe(console.log);
obs.next(42);
obs.unsubscribe(subscription);
obs.next(4444);

// setInterval(() => {
//     obs.next("42 interval");
// }, 1000);
