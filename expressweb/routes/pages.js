const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid')



router.get('/',(req,res)=>{
    res.render('index');
    //res.redirect(`/${uuidv4()}`);
})



//authentication

router.get('/login',(req,res)=>{
    res.render('login');
    //res.redirect(`/${uuidv4()}`);
})
router.get('/register',(req,res)=>{
    res.render('register');
    //res.redirect(`/${uuidv4()}`);
})
router.get('/forgot',(req,res)=>{
    res.render('forgot');
    //res.redirect(`/${uuidv4()}`);
})
router.get('/reset',(req,res)=>{
    res.render('reset');
    //res.redirect(`/${uuidv4()}`);
})


//homepage
router.get('/joinameeting',(req,res)=>{
    res.render('joinameeting');
    //res.redirect(`/${uuidv4()}`);
})
router.get('/joinameetinglink',(req,res)=>{
    res.render('joinameetinglink');
    //res.redirect(`/${uuidv4()}`);
})
router.get('/about',(req,res)=>{
    res.render('about');
})
router.get('/contact',(req,res)=>{
    res.render('contact');
})


//dashboardfiles
router.get('/profile',(req,res)=>{
    res.render('profile');
})
router.get('/meetings',(req,res)=>{
    res.render('meetings');
})
router.get('/recording',(req,res)=>{
    res.render('recording');
})
router.get('/chats',(req,res)=>{
    res.render('chats');
})
router.get('/support',(req,res)=>{
    res.render('support');
})
router.get('/settings',(req,res)=>{
    res.render('settings');
})
router.get('/editprofile',(req,res)=>{
    res.render('editprofile');
})
router.get('/previousmeetings',(req,res)=>{
    res.render('previousmeetings');
})
router.get('/personalroom',(req,res)=>{
    res.render('personalroom');
})
router.get('/managemeetings',(req,res)=>{
    res.render('managemeetings');
})
router.get('/joinameetingdash',(req,res)=>{
    res.render('joinameetingdash',);
})





router.get('/room', (req, res) => {
    res.redirect(`/${uuidv4()}`);
})


router.get('/:room', (req, res) => {
	res.render('room', { roomId: req.params.room })
})


module.exports = router;


