const express = require('express');
const app = express();
const router = express.Router();
const homeController = require('../controllers/home_controller');
const mapController = require('../controllers/map_controller');
const createController = require('../controllers/create');
const elevatorController = require('../controllers/elevator_controller');
const officeController = require('../controllers/office_controller');
const restaurantController = require('../controllers/restaurant_controller');
const restroomController = require('../controllers/restroom_controller');
const trailController = require('../controllers/trail_controller');
const libraryController = require('../controllers/library_controller');
const deleteController = require('../controllers/delete_marker');
const thankController = require('../controllers/thanks_controller')
const ticketController = require('../controllers/ticket_controller');



console.log('router loaded');


router.get('/', homeController.home);

router.post('/map',mapController.insert);

router.get('/restroom', restroomController.go);
router.get('/restaurant' ,restaurantController.go);
router.get('/library',libraryController.go);
router.get('/trail',trailController.go);
router.get('/office',officeController.go);
router.get('/elevator',elevatorController.go);
router.get('/thank',thankController.thanku);
router.get('/ticket', ticketController.tick);

router.use('/users', require('./users'));
router.post('/create_marker', createController.create);
router.post('/delete_marker', deleteController.delete);

router.get('/delete',function(req, res){
    return res.render('delete', {
        title: "Delete"
    });
} );

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));

module.exports = router;