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
    ctrl.kavakings = false;
    ctrl.dreadlore = false;

    function showDetails() {
        ctrl.details = true;
        ctrl.kavakings = false;
        ctrl.dreadlore = false;
        ctrl.barkinapp = false;
        ctrl.dotheangle = false;
        ctrl.grocerylist = false;
        ctrl.datebyhate = false;
    }

    function hideAllDetails() {
        showDetails();
        ctrl.details = false;
    }

// controller functions
    function getDetailsKavakings() {
        showDetails();
        ctrl.kavakings = true;
    }

    function getDetailsDreadLore() {
        showDetails();
        ctrl.dreadLore = true;
    }

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
    ctrl.hideAllDetails = hideAllDetails;
    ctrl.getDetailsKavakings = getDetailsKavakings;
    ctrl.getDetailsDreadLore = getDetailsDreadLore;
    ctrl.getDetailsBarkinApp = getDetailsBarkinApp;
    ctrl.getDetailsDoTheAngle = getDetailsDoTheAngle;
    ctrl.getDetailsGroceryList = getDetailsGroceryList;
    ctrl.getDetailsDateByHate = getDetailsDateByHate;
}
