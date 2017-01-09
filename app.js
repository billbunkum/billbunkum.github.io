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

    function showDetails() {
        ctrl.details = true;
        ctrl.barkinapp = false;
        ctrl.dotheangle = false;
        ctrl.grocerylist = false;
        ctrl.datebyhate = false;
    }

// controller functions
    function getDetailsBarkinApp() {
        showDetails();
        ctrl.barkinapp = true;
    }

    function getDetailsDoTheAngle() {
        showDetails();
        ctrl.dotheangle = true;
    }

    function getDetailsGroceryList() {
        showDetails();
        ctrl.grocerylist = true;
    }

    function getDetailsDateByHate() {
        showDetails();
        ctrl.datebyhate = true;
    }

// defined controller functions
    ctrl.showDetails = showDetails;
    ctrl.getDetailsBarkinApp = getDetailsBarkinApp;
    ctrl.getDetailsDoTheAngle = getDetailsDoTheAngle;
    ctrl.getDetailsGroceryList = getDetailsGroceryList;
    ctrl.getDetailsDateByHate = getDetailsDateByHate;
}
