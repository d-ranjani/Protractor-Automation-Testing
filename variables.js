
(function () {
    'use strict';

    var AngularPage = function () {
    };

    var item =  $('#rso .srg li:nth-child(2) a');
    AngularPage.prototype = Object.create({}, {
        searchTextBox: {get: function () { return element(by.id('lst-ib')); }},
        searchIcon:{get:function(){return element(by.name('btnG'))}},
        clickLink:{get:function(){return item }}

    });
    module.exports = AngularPage;

}());

