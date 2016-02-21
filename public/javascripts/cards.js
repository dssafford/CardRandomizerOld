/******************************************************************************
 * Playing Card Objects                                                        *
 *                                                                             *
 * Do not remove this notice.                                                  *
 *                                                                             *
 * Copyright 2001 by Mike Hall                                                 *
 * Please see http://www.brainjar.com for terms of use.                        *
 ******************************************************************************/


var deck;

module.exports =
{
    GenerateList: function(){
        deck  = new this.Stack();
        deck.makeDeck(1);
        deck.shuffle(1);

        var myString = stringDisplay();
        //var myString = display();
        return myString;
    },

//=============================================================================
    // Card Object
    //
    // Note: Requires cards.css for display.
    //=============================================================================

    //-----------------------------------------------------------------------------
    // Card constructor function.
    //-----------------------------------------------------------------------------

    //Card: function(rank, suit)
    //{
    //
    //    this.rank = rank;
    //    this.suit = suit;
    //
    //    this.toString = cardToString;
    //},

    //=============================================================================
    // Stack Object
    //=============================================================================

    //-----------------------------------------------------------------------------
    // Stack constructor function.
    //-----------------------------------------------------------------------------

    Stack: function() {

        // Create an empty array of cards.

        this.cards = [];

        this.makeDeck = stackMakeDeck;
        this.shuffle = stackShuffle;
        //this.deal      = stackDeal;
        //this.draw      = stackDraw;
        this.addCard = stackAddCard;
        this.combine = stackCombine;
        this.cardCount = stackCardCount;
    }

};

////////////// Private functions

var Card = function(rank, suit)
{

    this.rank = rank;
    this.suit = suit;

    this.toString = cardToString;
}
var display = function() {

    var s;

    s = "";
    for (i = 0; i < deck.cardCount(); i++) {
        s += deck.cards[i] + "-" + i.toString() + "\n";
    }
    //document.forms[0].elements[0].value = s;

    return s;

}
var stringDisplay = function() {

    var s;

    s = "'";
    for (i = 0; i < deck.cardCount(); i++) {
        s += deck.cards[i] + ",";
    }
    //document.forms[0].elements[0].value = s;

    s = s + "'";
    return s;

}
var htmlDisplay = function() {

    var s;
    var tableStart = "<table><th>dude</th><td>";

    s = "";
    for (i = 0; i < deck.cardCount(); i++) {
        s += deck.cards[i] + "-" + i.toString() + "</td><td>";
    }
    //document.forms[0].elements[0].value = s;

    s = s + "</td></table>";
    return s;

}

//-----------------------------------------------------------------------------
// cardToString(): Returns the name of a card (including rank and suit) as a
// text string.
//-----------------------------------------------------------------------------

var cardToString = function() {

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
            rank = "jack_of_";
            break;
        case "Q" :
            rank = "queen_of_";
            break;
        case "K" :
            rank = "king_of_";
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
            suit = "diamonds.png";
            break;
        case "H" :
            suit = "hearts.png";
            break;
        case "S" :
            suit = "spades.png";
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


//-----------------------------------------------------------------------------
// stackMakeDeck(n): Initializes a stack using 'n' packs of cards.
//-----------------------------------------------------------------------------

var stackMakeDeck = function(n) {

    var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var suits = ["C", "D", "H", "S"];
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

var stackShuffle = function(n) {
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

var stackAddCard = function(card) {

    this.cards.push(card);
}

//-----------------------------------------------------------------------------
// stackCombine(stack): Adds the cards in the given stack to the current one.
// The given stack is emptied.
//-----------------------------------------------------------------------------

var stackCombine =  function(stack) {

    this.cards = this.cards.concat(stack.cards);
    stack.cards = [];
}

//-----------------------------------------------------------------------------
// stackCardCount(): Returns the number of cards currently in the stack.
//-----------------------------------------------------------------------------

var stackCardCount = function() {

    return this.cards.length;
}