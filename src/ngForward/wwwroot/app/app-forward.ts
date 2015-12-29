import { bundle, Component } from 'ng-forward';

@Component({
    selector: 'forward',
    inputs: ['text'],
    template:`
    <input ng-model="ctrl.text"/>
    <div outside text="ctrl.text"></div>
    `
})

class ForwardController {

    constructor() {

    }
}

export bundle('app.forward', ForwardController);