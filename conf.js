exports.config={
//The address of a running selenium server
  seleniumAddress:'http://localhost:4444/wd/hub',


//This Configuration tells us Protractor where our test files.  
  specs: ['spec.js'],

//Browser
  capabilities:{
   browserName:'chrome'
  }
}
