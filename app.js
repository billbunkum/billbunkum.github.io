angular.module('root', [])
    .controller('RootCtrl', RootController);

// currently NOT DRY

function RootController() {
    const ctrl = this;

// controller scalars
    ctrl.details = false;
    ctrl.barkinapp = false;
    ctrl.dotheangle = false;
    ctrl.grocerylist = false;
    ctrl.datebyhate = false;

// controller functions
    function getDetailsBarkinApp() {
    ctrl.details = true;
    ctrl.barkinapp = true;
    ctrl.dotheangle = false;
    ctrl.grocerylist = false;
    ctrl.datebyhate = false;
    }

    function getDetailsDoTheAngle() {
    ctrl.details = true;
    ctrl.barkinapp = false;
    ctrl.dotheangle = true;
    ctrl.grocerylist = false;
    ctrl.datebyhate = false;
    }

    function getDetailsGroceryList() {
    ctrl.details = true;
    ctrl.barkinapp = false;
    ctrl.dotheangle = false;
    ctrl.grocerylist = true;
    ctrl.datebyhate = false;
    }

    function getDetailsDateByHate() {
    ctrl.details = true;
    ctrl.barkinapp = false;
    ctrl.dotheangle = false;
    ctrl.grocerylist = false;
    ctrl.datebyhate = true;
    }

// defined controller functions
    ctrl.getDetailsBarkinApp = getDetailsBarkinApp;
    ctrl.getDetailsDoTheAngle = getDetailsDoTheAngle;
    ctrl.getDetailsGroceryList = getDetailsGroceryList;
    ctrl.getDetailsDateByHate = getDetailsDateByHate;
}
