
//spec.js
browser.ignoreSynchronization = true;

// To open Google.Com page
describe('Google Demo', function() {
  it('Should Search', function() {
    browser.driver.get('http://google.com/');

   
//To Maximize the Window   
    browser.driver.manage().window().maximize();


//To enter search text "Thought for the day" 
    element(by.id('lst-ib')).sendKeys("Thought for the Day");
    element(by.name('btnG')).click();
    
    
    });
});


