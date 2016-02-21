// 'module.exports' is a node.JS specific feature, it does not work with regular JavaScript
module.exports =
{
    // This is the function which will be called in the main file, which is server.js
    // The parameters 'name' and 'surname' will be provided inside the function
    // when the function is called in the main file.
    // Example: concatenameNames('John,'Doe');
    concatenateNames: function (name, surname)
    {
        var wholeName = name + " " + surname;

        return wholeName;
    },

    sampleFunctionTwo: function ()
    {

    },

    createAnswerArray: function(req)
    {
        var answers = new Array;
        answers.push(req.body.a1);
        answers.push(req.body.a2);
        answers.push(req.body.a3);
        answers.push(req.body.a4);
        answers.push(req.body.a5);
        answers.push(req.body.a6);
        answers.push(req.body.a7);
        answers.push(req.body.a8);
        answers.push(req.body.a9);
        answers.push(req.body.a10);
        answers.push(req.body.a11);
        answers.push(req.body.a12);
        answers.push(req.body.a13);
        answers.push(req.body.a14);
        answers.push(req.body.a15);
        answers.push(req.body.a16);
        answers.push(req.body.a17);
        answers.push(req.body.a18);
        answers.push(req.body.a19);
        answers.push(req.body.a20);
        answers.push(req.body.a21);
        answers.push(req.body.a22);
        answers.push(req.body.a23);
        answers.push(req.body.a24);
        answers.push(req.body.a25);
        answers.push(req.body.a26);
        answers.push(req.body.a27);
        answers.push(req.body.a28);
        answers.push(req.body.a29);
        answers.push(req.body.a30);
        answers.push(req.body.a31);
        answers.push(req.body.a32);
        answers.push(req.body.a33);
        answers.push(req.body.a34);
        answers.push(req.body.a35);
        answers.push(req.body.a36);
        answers.push(req.body.a37);
        answers.push(req.body.a38);
        answers.push(req.body.a39);
        answers.push(req.body.a40);
        answers.push(req.body.a41);
        answers.push(req.body.a42);
        answers.push(req.body.a43);
        answers.push(req.body.a44);
        answers.push(req.body.a45);
        answers.push(req.body.a46);
        answers.push(req.body.a47);
        answers.push(req.body.a48);
        answers.push(req.body.a49);
        answers.push(req.body.a50);
        answers.push(req.body.a51);
        answers.push(req.body.a52);

        exports.answersArray = answers;

        return answers;
    }
};

// Private variables and functions which will not be accessible outside this file
var privateFunction = function ()
{
};

//var name = "foobar";
//// export it
//exports.shitname = name;