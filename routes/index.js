var express = require('express');
//var passport = require('passport');
//var Account = require('../schemas/account');
//var entrySchema = require('../schemas/entry');
//var logUserSchema = require("../schemas/logUser");

var cards = require('../public/javascripts/cards.js');

var test = require('../public/javascripts/test.js');
var helpers = require('../public/javascripts/helpers.js');

var answerSchema = require("../schemas/answer");

var router = express.Router();


//// Let's assume this is the data which comes from the database or somewhere else
//var databaseName = 'Walter';
//var databaseSurname = 'Heisenberg';
//
//// Use the function from 'helpers.js' in the main file, which is server.js
//var fullname = helpers.concatenateNames(databaseName, databaseSurname);
//
//test.dougTest()

var masterAnswers;



/* GET home page. */
router.get('/', function(req, res, next) {
  //var one = [1,2,3,4,5,6];
  //var two = [1,2,4,4,5,7];
  //CompareArrays(one, two);

  res.render('home', { title: 'Eat Shot' });

});


function CompareArrays(one, two) {

  for(i=0;i<one.length;i++){
      if(one[i] != two[i]) {
        console.log("Found not equal on number" + i.toString() + one[i] + " != " + two[i]);
      }
  }


}


/* GET home page. */
router.get('/enteranswers', function(req, res, next) {
  res.render('enteranswers', { title: 'Enter Answers' });
});

/* GET home page. */
router.get('/wow', function(req, res, next) {
    console.log("masterAnswers = " + masterAnswers.toString());

  res.render('index', { mylist: cards.GenerateList(), title: 'you suck' });
  res.write(cards.GenerateList());
  res.end();
});


/* GET Answer Entry Page */ 
router.get('/answer', function(req, res) { 
    res.render('home', { 
        user: req.user 
    });
 });

    // Add the record data to database, from POST on form submit
  router.post('/enteranswers',function(req, res) { 
    //below outputs full response to browser in json format 
    //console.log(res.json(req.body)); 

      //console.log("1 =" + req.body.a1);
      //console.log("2 =" + req.body.a2);
      //console.log("3 =" + req.body.a3);
      //console.log("4 =" + req.body.a4);

      var testAnswers = helpers.createAnswerArray(req);

      console.log("Answers 1 ="+ answers[0]);


      //answers.push(req.body.a1);
      //answers.push(req.body.a2);
      //answers.push(req.body.a3);
      //answers.push(req.body.a4);
      //
      //var testAnswers = new Array;
      //testAnswers.push("hey");
      //testAnswers.push("shit");
      //testAnswers.push("head");
      //testAnswers.push("four")

      CompareArrays(answers, testAnswers);

      res.end();

    //     var record = new Answer();  
    //     record.timestamp = req.body.timestamp; 
    //     record.user = req.body.user; 
    //     record.minutes = req.body.minutes; 
    //     record.comments = req.body.comments;  
    //     record.save(function(err) { 
    //     if (err) { 
    //        console.log(err); 
    //        res.status(500).json({ 
    //        status: 'failure' 
    //     }); 
    //     } else { 
    //     res.json({status: 'success'}); 
    //     res.redirect('/homeold'); 
    //     } 
    // }); 
 }); 


//var isAuthenticated = function(req, res, next) {
//  // if user is authenticated in the session, call the next() to call the next request handler
//  // Passport adds this method to request object. A middleware is allowed to add properties to
//  // request and response objects
//  if (req.isAuthenticated())
//    return next();
//  // if the user is not authenticated then redirect the user to the login page
//  res.redirect('/');
//}

//function logUser(username, type) {
//  var record = new logUserSchema();
//
//  record.timestamp = Date.now();
//  record.user = username;
//  record.type = type;
//
//  record.save(function(err) {
//    if (err) {
//      console.log(err);
//      res.status(500).json({
//        status: 'failure'
//      });
//    }
//  });
//}


//
//module.exports = function(passport) {
//module.exports = function() {
//
//

  //
  ///* GET login page. */
  //router.get('/', function(req, res) {
  //  // Display the Login page with any flash message, if any
  //  res.render('index', {
  //    message: req.flash('message')
  //  });
  //});
  //
  ///* Handle Login POST */
  //router.post('/login', passport.authenticate('login', {
  //  successRedirect: '/homeold',
  //  failureRedirect: '/',
  //  failureFlash: true
  //}));
  //
  ///* GET Registration Page */
  //router.get('/register', function(req, res) {
  //  res.render('register', {
  //    message: req.flash('message')
  //  });
  //});
  //
  ///* Handle Registration POST */
  //router.post('/register', passport.authenticate('register', {
  //  successRedirect: '/home',
  //  failureRedirect: '/register',
  //  failureFlash: true
  //}));

  /* GET Home Page */
  router.get('/home', function(req, res) {
    res.render('home', {
      user: req.user
    });
  });

  router.get('/picture', function(req,res) {
    var cardlist = cards.GenerateList();
      masterAnswers=cardlist.split(',');


    console.log("CardList=" + cardlist.toString());

    res.render('picture', {
      title: "Doug cool title",
      dude: cardlist,
      body: "<img id='shitimage' src='' style='border:2px solid black'></img>"
    });

    //  res.render('entryinput', {
    //    title: 'All Doug entrys',
    //    user: req.user

  });


  ///* GET Home Page */
  //router.get('/homeold', isAuthenticated, function(req, res) {
  //  res.render('homeold', {
  //    user: req.user
  //  });
  //});

  ///* Handle Logout */
  //router.get('/logout', isAuthenticated, function(req, res) {
  //  console.log("in logout, user=" + req.user.username);
  //
  //  // log the logout
  //  logUser(req.user.username, "out")
  //  req.logout();
  //
  //
  //
  //  res.redirect('home');
  //});

  /* GET Entry List Page
   router.get('/entrylist', isAuthenticated, function(req, res) {
   console.log("in entry list doug");

   entrySchema.find()
   .setOptions({
   sort: 'timestamp'
   })
   .exec(function(err, entrys) {
   if (err) {
   res.status(500).json({
   status: 'failure'
   });
   } else {
   res.render('entrys', {
   title: 'entrys',
   entrys: entrys,
   user: req.user
   });
   }
   });
   });
   */
  /* GET Entry List Page
   router.get('/entrylistsorted', isAuthenticated, function(req, res) {
   console.log("in entry list Sorted doug");

   entrySchema.find({
   user: 'Dragon'
   })
   .setOptions({
   sort: 'timestamp'
   })
   .exec(function(err, entrys) {
   if (err) {
   res.status(500).json({
   status: 'failure'
   });
   } else {
   res.render('entryListSorted', {
   title: 'Entries Sorted',
   entrys: entrys,
   user: req.user
   });
   }
   });
   });
   */
  //// Go to entry input form
  //router.get('/entryinput', isAuthenticated, function(req, res) {
  //  console.log("in entry input doug");
  //  res.render('entryinput', {
  //    title: 'All Doug entrys',
  //    user: req.user
  //  });
  //});
  //
  //// Go to entry edit form
  //router.get('/entryedit/:id', isAuthenticated, function(req, res) {
  //  console.log("in function entry edit");
  //  entrySchema.find({
  //        _id: req.params.id
  //      })
  //      .exec(function(err, entrys) {
  //        if (err) {
  //          res.status(500).json({
  //            status: 'failure'
  //          });
  //        } else {
  //          console.log("not failure getting entry edit");
  //          res.render('entryedit', {
  //            title: 'Edit entry',
  //            entrys: entrys,
  //            user: req.user
  //          });
  //        }
  //      });
  //});
  ///////////////////////////////////////////////////////
  //// Sorted table edited entry
  //router.get('/entrylistSorted/:user', isAuthenticated, function(req, res) {
  //  console.log("In entrylistSorted");
  //  var myUser = req.params.user;
  //  console.log("myUser:" + myUser);
  //  // Return nothing if first time
  //  if (myUser == '') {
  //    console.log("In myUser = nil");
  //    entrySchema.find()
  //        .setOptions({
  //          sort: 'timestamp'
  //        })
  //        .exec(function(err, entrys) {
  //          if (err) {
  //            res.status(500).json({
  //              status: 'failure'
  //            });
  //          } else {
  //            res.render('entrys', {
  //              title: 'Entries Sorted',
  //              entrys: entrys,
  //              user: req.params.user
  //            });
  //          }
  //        })
  //    // For now allow returning all
  //  } else if (myUser == "All") {
  //    console.log("In myUser = All: " + myUser);
  //    entrySchema.find()
  //        .setOptions({
  //          sort: 'timestamp'
  //        })
  //        .exec(function(err, entrys) {
  //          if (err) {
  //            res.status(500).json({
  //              status: 'failure'
  //            });
  //          } else {
  //            res.render('entrys', {
  //              title: 'entrys',
  //              entrys: entrys,
  //              user: "All"
  //            });
  //          }
  //        })
  //  } else {
  //    console.log("In myUser = a value=" + myUser);
  //    entrySchema.find({
  //          user: myUser
  //        })
  //        .setOptions({
  //          sort: 'timestamp'
  //        })
  //        .exec(function(err, entrys) {
  //          if (err) {
  //            res.status(500).json({
  //              status: 'failure'
  //            });
  //          } else {
  //            res.render('entrys',  {
  //              title: 'entrys',
  //              entrys: entrys,
  //              user: myUser
  //            });
  //          }
  //        });
  //  }
  //});



  //// Update edited entry
  //router.post('/entryedit/:id', isAuthenticated, function(req, res) {
  //  //console.log("In updateentry");
  //  entrySchema.findOneAndUpdate({
  //    _id: req.params.id
  //  }, {
  //    timestamp: req.body.timestamp,
  //    user: req.body.user,
  //    minutes: req.body.minutes,
  //    comments: req.body.comments
  //  }, function(err, record) {
  //    if (err) throw err;
  //
  //    console.log("id:" + req.params.id);
  //
  //    res.redirect("/homeold");
  //  });
  //});
  //
  //
  //// Add the record data to database, from POST on form submit
  //router.post('/entryinput', isAuthenticated, function(req, res) {
  //  // below outputs full response to browser in json format
  //  //res.json(req.body);
  //  var record = new entrySchema();
  //
  //  record.timestamp = req.body.timestamp;
  //  record.user = req.body.user;
  //  record.minutes = req.body.minutes;
  //  record.comments = req.body.comments;
  //
  //  record.save(function(err) {
  //    if (err) {
  //      console.log(err);
  //      res.status(500).json({
  //        status: 'failure'
  //      });
  //    } else {
  //      //res.json({status: 'success'});
  //      res.redirect('/homeold');
  //    }
  //  });
  //});
  //
  //router.get('/entrydelete/:id', isAuthenticated, function(req, res) {
  //
  //  console.log("In entry Delete");
  //  entrySchema.find({
  //    _id: req.params.id
  //  }, function(err, docs) {
  //    if (err) return console.log(err);
  //    if (!docs || !Array.isArray(docs) || docs.length === 0)
  //      return console.log('no docs found');
  //
  //    docs.forEach(function(doc) {
  //      doc.remove();
  //      res.redirect("/homeold");
  //    });
  //
  //  });
  //});



//return router;
module.exports = router;
//}
