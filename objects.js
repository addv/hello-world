var useSVG = true;
var svgLoadFlag = false;

if (navigator.appName == "Microsoft Internet Explorer") 
    useSVG = false;
    
if (navigator.userAgent.search("Opera")>=0) 
    useSVG = true;

//alert(useSVG);

var svgns = "http://www.w3.org/2000/svg";
var xlinkNS = "http://www.w3.org/1999/xlink";
    
function GetSvgDocument()
{ 
    return(document.embeds[0].getSVGDocument());
}
function GetSvgCanvas()
{ 
    return(document.embeds[0].getSVGDocument().getElementById("Canvas"));
}
    
///
///  Bubble class
///
function Bubble(id, cx, cy, r, stroke, fill)
{
    this.id = id;
    this.cx   = cx;
    this.cy = cy;
    this.r = r;

    this.stroke = stroke;
    this.fill = fill;
            
    this.draw = draw;
    this.move = move;
}

function draw()
{
    if(useSVG)
    {
        //alert("svg");
        
        var svgDocument = GetSvgDocument();
        if(svgDocument == null)
            return;
            
        var elem = svgDocument.createElementNS(svgns, "circle" );
        elem.setAttributeNS(null, "id", this.id);
        elem.setAttributeNS(null, "cx", this.cx);
        elem.setAttributeNS(null, "cy", this.cy);
        elem.setAttributeNS(null, "r", this.r);
        elem.setAttributeNS(null,"stroke",this.stroke);
        elem.setAttributeNS(null,"fill",this.fill);
                    
        var svgCanvas = GetSvgCanvas();
        if(svgCanvas == null)
            return;
            
        svgCanvas.appendChild(elem);
    }
    else
    {
        //alert("vml");
        
        var elem = document.createElement("v:oval");
            with (elem.style)
            { 
                position="absolute"; 
                top=this.cy - this.r; 
                left=this.cx - this.r; 
                width=parseInt(this.r*2); 
                height=parseInt(this.r*2);
            }
            elem.coordorigin = "0,0";
            
            elem.strokecolor=this.stroke;
            elem.FillColor = this.fill;
            
            vmlCanvas.insertBefore(elem,null);
       }
    
}

function move(x, y)
{
        this.cx = x;
        this.cy = y;
} 

///
///  Bubble class finish
///
