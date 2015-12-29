module App {

    export class AppController {
        
        private text;

        constructor() {


            this.text = 'bla bla bla';
        }
    }

    angular.module('app', ['app.forward', 'app.outside'])
        .controller('appController', AppController);
}