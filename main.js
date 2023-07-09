//https://teachablemachine.withgoogle.com/models/9qb2W4HC8/
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
})
var camera = document.getElementById("camera");
Webcam.attach(camera)
function captureimage(){
    Webcam.snap(function(data_uri){
          document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}
console.log('ml5 version', ml5.version);
var classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/KnjUM5YrU/model.json', modelloaded)

function modelloaded(){
    console.log('Model has been loaded! :)')
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("result_object_name").innerHTML="object name: "+ results[0].label;
        document.getElementById("result_object_accuracy").innerHTML="accuracy: "+ (results[0].confidence*100).toFixed(3)+'%' 
    }
}