const{Localfileupload}=require('../controller/File');
const{imageupload}=require('../controller/File');
const{getallfiles}=require('../controller/File');
const{countincrease}=require('../controller/File');
const express=require('express');
const router=express.Router();

// router.post('/localfileupload',Localfileupload);
router.post('/imageupload',imageupload);
router.get('/getAllimage',getallfiles);
router.put('/increasecount',countincrease);
module.exports=router;