angular.module('root', [])
    .controller('RootCtrl', RootController);

function RootController() {
    const ctrl = this;
    ctrl.datebyhate = false;
    ctrl.dotheangle = false;
}
