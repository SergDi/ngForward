module outside {

    export class OutsideController {

        constructor() {
        }
    }

    export class OutsideDirective implements ng.IDirective {

        public template: string;
        public controller: any;
        public controllerAs: string;
        public scope: any;
        public bindToController: any;

        public static $inject = [() => { return new OutsideDirective() }];

        constructor() {
            this.template = `<input ng-model="model.text" />`;
            this.controller = OutsideController;
            this.controllerAs = "model",
            this.scope = {},
            this.bindToController = { text: '=' }
        }

    }

    angular.module('app.outside',[])
        .directive('outside', OutsideDirective.$inject)
        
}