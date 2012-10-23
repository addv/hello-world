//useSVG = true;    //you can also change this by hand

    function renderObjects()
    {
        if(useSVG)
        {
            //Wait svg load event
            if ( svgLoadFlag == false )
                { 
                    setTimeout("renderObjects()",100);
                      return;
                }  
        }
        
        //alert(svgLoadFlag);
        var bubble1 = new Bubble("b1", 100, 100, 30, "purple", "green");
        bubble1.draw();
        
        var bubble2 = new Bubble("b2", 30, 20, 20, "red", "yellow");
        bubble2.draw();    
    }
    
    function init()
    {
    // Write svg embed object or vml group into html body
    //    
    //<embed width='500' height='500' name='svgCanvas' src='canvas.svg' wmode='transparent' type='image/svg+xml' />
    //<v:group id='vmlCanvas' style='WIDTH:500px;HEIGHT:500px;' coordsize = '200,200'/>;

        if(useSVG)
        {
            var elem = document.createElement("embed");
            
                elem.id = "svgCanvas";
                elem.width = 500; 
                elem.height = 500; 
                elem.name = "svgCanvas";
                elem.src = "canvas.svg";
                elem.wmode = "transparent";
                elem.type = "image/svg+xml";
                
                document.body.insertBefore(elem,null);
        }
        else
        {
            var elem = document.createElement("v:group");
                
                elem.id = "vmlCanvas";
                elem.style.width = 500 + "px";
                elem.style.height = 500 + "px";
                elem.coordsize = "200,200";
                            
                document.body.insertBefore(elem,null);
           }
           
           //Create graphic object and draw
           renderObjects();
    }
