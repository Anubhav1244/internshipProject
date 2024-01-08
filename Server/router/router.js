const express=require('express');
const router=express.Router();

const {signupcontroller}=require('../controller/signupcontroller');
const {logincontroller}=require('../controller/logincontroller');
const {dashboard}=require('../middleware/auth');
const {auth}=require('../middleware/auth');

router.post('/signup',signupcontroller);
router.post('/login',logincontroller);
router.get('/dashboard',auth,dashboard);

module.exports=router;