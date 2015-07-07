
//spec.js
browser.ignoreSynchronization = true;

// To open Google.Com page
describe('To open google browser and search the text "Thought For The Day"', function() {
  it('To click the link Thought for the day', function() {
    browser.driver.get('http://google.com/');

   
//To Maximize the Window   
    browser.driver.manage().window().maximize();

//To enter search text "Thought for the day"
    element(by.id('lst-ib')).sendKeys("Thought for the Day");
    browser.sleep(1000);
    element(by.name('btnG')).click();

  
//To Read the Title of the Page				
    element(by.linkText('Thought For The Day')).click();
    

//To Read the Title of the Page
    var titlePromise = browser.getTitle();
    titlePromise.then(function(text){
      console.log("Title of the Page", text);
	browser.close();
    
});
});
});



