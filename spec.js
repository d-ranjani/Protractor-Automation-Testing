
//spec.js
browser.ignoreSynchronization = true;

//Open Google.Com page
describe('To open google browser and search the text "Thought For The Day"', function() {
  it('To click the link Thought For The Day', function() {
    browser.driver.get('http://google.com/');

   
//Maximize the Window   
    browser.driver.manage().window().maximize();

//Enter search text "Thought For The Day"
    element(by.id('lst-ib')).sendKeys("Thought for the Day");
    browser.sleep(1000);
    element(by.name('btnG')).click();

  
//click the LinkText "Thought For The Day"				
    element(by.linkText('Thought For The Day')).click();
    

//Read the Title of the Page
    var titlePromise = browser.getTitle();
    titlePromise.then(function(text){
      console.log("Title of the Page", text);
	
//Tear down
    browser.close();
    
});
});
});



