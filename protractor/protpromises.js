describe('Testing angular application',function(){

    it('understanding promises',function(){

        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
       
        element(by.css('.btn.btn-primary.btn-lg')).click();
        element(by.xpath(''));
       
       // console.log("after clicking");
       browser.getTitle().then(function(title){


        console.log(title);
        if(title==="Protractor practice website - Banking Apps"){

            console.log("Title matches");
    
           }else{
    
            console.log("Title does not match");
    
           }

       });

       /*var title = browser.getTitle();


       if(title==="Protractor practice website - Banking App"){

        console.log("Title matches");

       }else{

        console.log("Title does not match");

       }

        browser.sleep(2000);

       */

    });




});