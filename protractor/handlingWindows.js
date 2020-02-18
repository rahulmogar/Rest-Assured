describe('Handling Windows', function(){


    it('Handling multiple windows on HDFC Bank',function(){


        browser.ignoreSynchronization=true;
        browser.get("http://hdfcbank.com");


        element(by.xpath("//*[@id='loginsubmit']")).click();
/*
        browser.getAllWindowHandles().then(function(handles){

            browser.switchTo().window(handles[1]).then(function(){

                browser.getTitle().then(function(text){

                    console.log("Second window title = "+text);
                })


            });

            browser.switchTo().window(handles[0]).then(function(){

                browser.getTitle().then(function(text){

                    console.log("First window title = "+text);
                })

            })


        })

        */
      let windowHandles = browser.getAllWindowHandles();
      let firstWindow, secondWindow, thirdWindow;


      windowHandles.then(function(handles){

        firstWindow=handles[0];
        secondWindow=handles[1];
        console.log("First window is: "+firstWindow);
        console.log("Second window is: "+secondWindow);

        browser.switchTo().window(secondWindow).then(function(){

            element(by.xpath("html/body/div[4]/div[3]/div/div/div[1]/div/a")).click();
            element(by.xpath("html/body/div[1]/div[2]/div[2]/p[3]/a")).click();

        });


      });


      windowHandles = browser.getAllWindowHandles();


      windowHandles.then(function(handles){

        thirdWindow=handles[2];
  

        console.log("Third window is: "+thirdWindow);
      

        browser.switchTo().window(thirdWindow).then(function(){

            browser.getTitle().then(function(text){

                console.log("Third window title = "+text);
            })
            browser.close();
         

        });

        browser.switchTo().window(secondWindow).then(function(){

            browser.getTitle().then(function(text){

                console.log("Second window title = "+text);
            })
            browser.close();

        })


        browser.switchTo().window(firstWindow).then(function(){

            browser.getTitle().then(function(text){

                console.log("First window title = "+text);
            })
            browser.close();

        })


      });




    })



})