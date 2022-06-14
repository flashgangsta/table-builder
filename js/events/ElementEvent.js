export class ElementEvent extends Event {

    static get ON_ELEMENT_APPENDED() {return "ON_ELEMENT_APPENDED"};
    static get ON_ELEMENT_REMOVED() {return "ON_ELEMENT_REMOVED"};

    constructor(type, options={}) {
        options.bubbles = true;
        if(type === ElementEvent.ON_ELEMENT_REMOVED) {
            options.once = true;
        }
        super(type, options);
    }

    //TODO: make hasOwnEventListener
    //TODO: make listenening parent if element no added for fiering ADDED
    //TODO: make dispose
}