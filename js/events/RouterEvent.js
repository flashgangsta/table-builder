export class RouterEvent extends Event {

    static get ON_ROUTE_CHANGED() {return "ON_ROUTE_CHANGED"};

    constructor(type, options={}) {
        super(type, options);
    }
}