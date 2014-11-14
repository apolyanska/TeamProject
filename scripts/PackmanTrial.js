/**
 * Created by Ani-lenovo on 13.11.2014 ÃÂ³..
 */
window.onload = function () {
    var theCanvas = document.getElementById("the-canvas");
    var canvasCtx = theCanvas.getContext("2d");

    theCanvas.style.left = "400px";
    theCanvas.style.top = "150px";
    theCanvas.style.position = "absolute";


    canvasCtx.lineWidth = "2";
    canvasCtx.fillStyle = "#777";
    canvasCtx.strokeStyle = "black";



    canvasCtx.fillRect(0, 0, 500, 300);

    canvasCtx.beginPath(0,0);
    canvasCtx.moveTo(50, 50);
    canvasCtx.lineTo(250, 150);
    canvasCtx.stroke();

    canvasCtx.arc(300, 250, 12, 170*Math.PI / 180, 200*Math.PI / 180, true);
    canvasCtx.lineTo(300,250);
    canvasCtx.closePath();
    canvasCtx.fillStyle = "yellow";
    canvasCtx.fill();
    canvasCtx.strokeStyle = "black";
    canvasCtx.stroke();

    canvasCtx.beginPath(360, 290);

    canvasCtx.arc(300, 245, 2, 0, 2*Math.PI);
    canvasCtx.fillStyle = "black";
    canvasCtx.fill(); //*




};