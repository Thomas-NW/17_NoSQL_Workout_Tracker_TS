 //create routers for the app routes
 const router = require('express').Router();
//  const apiRoutes = require('./api');
 const homeRoutes = require('./homeroutes');
 const apiRoutes = require('./api/main.js');
 
 
 router.use('/api', apiRoutes);
 router.use('/', homeRoutes);
 console.log('test')
 
 
 module.exports = router;