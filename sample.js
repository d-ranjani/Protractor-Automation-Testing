(function() {
    'use strict';
    describe('Test Cases in Google Page', function () {
        browser.ignoreSynchronization = true;
        var VariableFile = require('./variables.js');
        var url = "http://google.com/";
        var variableFile;

        beforeEach(function () {

            variableFile = new VariableFile();
            browser.get(url);
        });
        afterEach(function () {
            browser.close();
        });

        function printTheTitleOfThePage() {
            var titlePromise = browser.getTitle();
            titlePromise.then(function (text) {
                console.log("Title of the Page", text);
            });
        }


        function checkingTitleOfThePage(title) {
            expect(browser.getTitle()).toEqual(title);
        }

        describe('To open google browser and search the text "Thought For The Day"', function () {
            it('To click the link Thought For The Day', function () {

                var driver=browser.driver;
                driver.manage().timeouts().implicitlyWait(10000).then(function(){
                    expect(element(by.id('lst-ib')).isPresent()).toBeTruthy();
                });
                variableFile.searchTextBox.sendKeys('Thought for the Day');
                expect(variableFile.searchIcon.isDisplayed());
                variableFile.searchIcon.click();
                variableFile.clickLink.click();
                printTheTitleOfThePage();
                checkingTitleOfThePage('Thought For The Day');
            });

        });
    });
}());
