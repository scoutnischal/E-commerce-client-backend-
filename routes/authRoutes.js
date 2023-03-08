//for user or customer side only
const express = require('express');
const router = express.Router();
const signupControl = require('../controllers/ClientAuthenticationController/clientSignup');
const loginControl = require('../controllers/ClientAuthenticationController/clientLogin');
const testControlller = require('../controllers/test');
const cartControl = require('../controllers/CartController/cartControl');
const updateControl = require('../controllers/ClientAuthenticationController/clientUpdate');
const forgetPasswordControl = require('../controllers/ClientAuthenticationController/forgetPassword');
const orderByUser = require('../controllers/OrderController/Userorder');
const orderCancel = require('../controllers/OrderController/orderCancel');
const paymentByUser = require('../controllers/PaymentController/Userpayment');
const {isClient, requireSignIn} = require('../middlewares/authmiddleware');
const cartCancel = require('../controllers/CartController/cartCancel');



router.post('/signup',signupControl);
router.post('/login',loginControl);
router.post('/update/:id',requireSignIn,isClient,updateControl);
router.post('/forgetPassword/:id',requireSignIn,isClient,forgetPasswordControl);
// router.get('/test',authmw.requireSignIn,authmw.isUser,testControlller);


//:id=>client_id
//->client with token check
router.post('/cart/:id/:slug',requireSignIn,isClient,cartControl);
router.post('/cartCancel/:cart_id',requireSignIn,isClient,cartCancel);
router.post('/order/:id/:slug',requireSignIn,orderByUser);
router.post('/orderCancel/:order_id',requireSignIn,orderCancel);
router.post('/payment/:id/:order_id',requireSignIn,paymentByUser);

// router.post('/cart/:id/:slug',cartControl);
// router.post('/order/:user_id/:slug',orderByUser);
// router.post('/orderCancel/:order_id',orderCancel);
// router.post('/payment/:user_id/:order_id',paymentByUser);


module.exports = router;
