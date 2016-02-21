var express = require('express');
//var passport = require('passport');
//var Account = require('../schemas/account');
//var entrySchema = require('../schemas/entry');
//var logUserSchema = require("../schemas/logUser");
//var cards = require('../public/javascripts/cards.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var one = [1,2,3,4,5,6];
  var two = [1,2,4,4,5,7];
  CompareArrays(one, two);
  res.render('index', { title: 'Eat Shot' });
});


function CompareArrays(one, two) {


  for(i=0;i<one.length;i++){
      if(one[i] != two[i]) {
        console.log("not equal. one=" + one[i] + " and two=" + two[i]);
      }
  }


}






/* GET home page. */
router.get('/answer', function(req, res, next) {
  res.render('enteranswers', { title: 'Enter Answers' });
});

/* GET home page. */
router.get('/wow', function(req, res, next) {
  //res.render('index', { mylist: GenerateList(), title: 'you suck' });
  res.write(GenerateList());
  res.end();
});

var deck;

function GenerateList(){
  deck     = new Stack();
  deck.makeDeck(1);
  deck.shuffle(1);

  var myString = stringDisplay();
  //var myString = display();
  return myString;
}

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
    var cardlist = GenerateList();
    console.log(cardlist.toString());

    res.render('picture', {
      title: "Doug cool title",
      dude: cardlist,
      body: "<img id='shitimage' src='/images/4_of_spades.png' style='border:2px solid black'></img>"
    });

    //  res.render('entryinput', {
    //    title: 'All Doug entrys',
    //    user: req.user

  });

function display() {

  var s;

  s = ""
  for (i = 0; i < deck.cardCount(); i++) {
    s += deck.cards[i] + "-" + i.toString() + "\n";
  }
  //document.forms[0].elements[0].value = s;

  return s;

}
function stringDisplay() {

  var s;

  s = "'"
  for (i = 0; i < deck.cardCount(); i++) {
    s += deck.cards[i] + ",";
  }
  //document.forms[0].elements[0].value = s;

  s = s + "'"
  return s;

}
function htmlDisplay() {

  var s;
  var tableStart = "<table><th>dude</th><td>";

  s = ""
  for (i = 0; i < deck.cardCount(); i++) {
    s += deck.cards[i] + "-" + i.toString() + "</td><td>";
  }
  //document.forms[0].elements[0].value = s;

  s = s + "</td></table>"
  return s;

}

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

/**
 * Created by Doug on 2/19/16.
 */


/******************************************************************************
 * Playing Card Objects                                                        *
 *                                                                             *
 * Do not remove this notice.                                                  *
 *                                                                             *
 * Copyright 2001 by Mike Hall                                                 *
 * Please see http://www.brainjar.com for terms of use.                        *
 ******************************************************************************/

//=============================================================================
// Card Object
//
// Note: Requires cards.css for display.
//=============================================================================

//-----------------------------------------------------------------------------
// Card constructor function.
//-----------------------------------------------------------------------------

function Card(rank, suit) {

  this.rank = rank;
  this.suit = suit;

  this.toString   = cardToString;
}

//-----------------------------------------------------------------------------
// cardToString(): Returns the name of a card (including rank and suit) as a
// text string.
//-----------------------------------------------------------------------------

function cardToString() {

  var rank, suit;

  switch (this.rank) {
    case "A" :
      rank = "ace_of_";
      break;
    case "2" :
      rank = "2_of_";
      break;
    case "3" :
      rank = "3_of_";
      break;
    case "4" :
      rank = "4_of_";
      break;
    case "5" :
      rank = "5_of_";
      break;
    case "6" :
      rank = "6_of_";
      break;
    case "7" :
      rank = "7_of_";
      break;
    case "8" :
      rank = "8_of_";
      break;
    case "9" :
      rank = "9_of_";
      break;
    case "10" :
      rank = "10_of_";
      break;
    case "J" :
      rank = "jack_of_"
      break;
    case "Q" :
      rank = "queen_of_"
      break;
    case "K" :
      rank = "king_of_"
      break;
    default :
      rank = null;
      break;
  }

  switch (this.suit) {
    case "C" :
      suit = "clubs.png";
      break;
    case "D" :
      suit = "diamonds.png"
      break;
    case "H" :
      suit = "hearts.png"
      break;
    case "S" :
      suit = "spades.png"
      break;
    default :
      suit = null;
      break;
  }

  if (rank == null || suit == null)
    return "";

  //return rank + " of " + suit;
  return rank + suit;
}

//=============================================================================
// Stack Object
//=============================================================================

//-----------------------------------------------------------------------------
// Stack constructor function.
//-----------------------------------------------------------------------------

function Stack() {

  // Create an empty array of cards.

  this.cards = new Array();

  this.makeDeck  = stackMakeDeck;
  this.shuffle   = stackShuffle;
  //this.deal      = stackDeal;
  //this.draw      = stackDraw;
  this.addCard   = stackAddCard;
  this.combine   = stackCombine;
  this.cardCount = stackCardCount;
}

//-----------------------------------------------------------------------------
// stackMakeDeck(n): Initializes a stack using 'n' packs of cards.
//-----------------------------------------------------------------------------

function stackMakeDeck(n) {

  var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K");
  var suits = new Array("C", "D", "H", "S");
  var i, j, k;
  var m;

  m = ranks.length * suits.length;

  // Set array of cards.

  this.cards = new Array(n * m);

  // Fill the array with 'n' packs of cards.

  for (i = 0; i < n; i++)
    for (j = 0; j < suits.length; j++)
      for (k = 0; k < ranks.length; k++)
        this.cards[i * m + j * ranks.length + k] = new Card(ranks[k], suits[j]);
}

//-----------------------------------------------------------------------------
// stackShuffle(n): Shuffles a stack of cards 'n' times.
//-----------------------------------------------------------------------------

function stackShuffle(n) {
  //alert("n=" + n.toString())
  var i, j, k;

  var temp;
  // Shuffle the stack 'n' times.

  for (i = 0; i < n; i++)
    for (j = 0; j < this.cards.length; j++) {
      k = Math.floor(Math.random() * this.cards.length);
      temp = this.cards[j];
      this.cards[j] = this.cards[k];
      this.cards[k] = temp;
    }
  //alert("temp=" + temp.toString())
}

//-----------------------------------------------------------------------------
// stackAdd(card): Adds the given card to the stack.
//-----------------------------------------------------------------------------

function stackAddCard(card) {

  this.cards.push(card);
}

//-----------------------------------------------------------------------------
// stackCombine(stack): Adds the cards in the given stack to the current one.
// The given stack is emptied.
//-----------------------------------------------------------------------------

function stackCombine(stack) {

  this.cards = this.cards.concat(stack.cards);
  stack.cards = new Array();
}

//-----------------------------------------------------------------------------
// stackCardCount(): Returns the number of cards currently in the stack.
//-----------------------------------------------------------------------------

function stackCardCount() {

  return this.cards.length;
}


//return router;
module.exports = router;
//}
