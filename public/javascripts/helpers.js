/**
 * Created by Doug on 2/20/16.
 */
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
    compareArrays: function(master, compare)
    {
        for (i=0; i<master.length; i++) {
            console.log(master[i] +"-"+ compare[i]);
        }

    }
};

// Private variables and functions which will not be accessible outside this file
var privateFunction = function ()
{
};