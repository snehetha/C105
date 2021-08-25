var camera=document.getElementById('camera');
Webcam.attach('#camera');
Webcam.set({
    height:350,

    width:350,
image_format:'jpg',

    jpg_quality:90

});
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';

    });
}
console.log("ml5 version:",ml5.version);
var classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YGWsu9t28/model.json',modelLoaded);
function modelLoaded(){
    console.log("model loaded");

}
function identify(){
    var img=document.getElementById("selfie_image");
    classifier.classify(img,gotresult);
}
function gotresult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
document.getElementById("result_name").innerHTML=results[0].label;
document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}