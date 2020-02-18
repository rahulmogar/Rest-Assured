describe('Handling Alerts', function(){


    it('Handling Alerts',function(){


        browser.ignoreSynchronization=true;
        browser.get("https://mail.rediff.com/cgi-bin/login.cgi");


      
        
        element(by.xpath("html/body/div[1]/div[2]/div[2]/div[1]/div/form/div/div[6]/div[1]/input")).click();

       var alert = browser.switchTo().alert();
       alert.getText().then(function(text){

        console.log(text);
       })

       browser.sleep(3000);

       alert.accept();
       browser.sleep(3000);
       //alert.sendKeys("sdfsdf");

        element(by.xpath("//*[@id='login1']")).sendKeys("trainer@way2automation.com");

    })



})