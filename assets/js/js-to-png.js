var this_js_script = $('script[src*=js-to-png]');

var text = this_js_script.attr('data-text');
if (typeof text === "undefined" ) {
   var text = 'No title defined';
}
//alert(text); // to view the variable value

function wrapText(ctx,text,x,y,maxWidth,lineHeight){
 var words = text.split(' ');
       var line = '';

       for(var n = 0; n < words.length; n++) {
         var testLine = line + words[n] + ' ';
         var metrics = ctx.measureText(testLine);
         var testWidth = metrics.width;
         if (testWidth > maxWidth && n > 0) {
           ctx.fillText(line, x, y);
           line = words[n] + ' ';
           y += lineHeight;
         }
         else {
           line = testLine;
         }
       }
       ctx.fillText(line, x, y);
     }


var width = 1200;
var height = 627;
var fontSize = 90;
var rectColor = '#5052b5';
var textColor = '#fff';
var lineHeight = 1.15;
//var text = "All the world is a stage, and all the people merely players";

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
ctx.fillStyle = rectColor; // Set colour of rectangle
ctx.fillRect(0, 0, width, height); // Create filled rectangle


var maxWidth = width*0.75;
var lineHeight = fontSize*lineHeight;
var x = 30;//(canvas.width) / 2;
var y = (canvas.height)/3;//75;

ctx.fillStyle = textColor;
ctx.textAlign = "left";
ctx.font = fontSize+"px Arial";

wrapText(ctx,text,x,y,maxWidth,lineHeight);


var dataURL = canvas.toDataURL('image/png');
console.log(dataURL);


$(document).ready(function(){

        $("#postImage").html('<img src="'+dataURL+'" />');

});
