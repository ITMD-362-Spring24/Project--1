function upDate(previewPic){
  var src=previewPic.getAttribute("src");
  var alt=previewPic.getAttribute("alt");
  document,getElementById('image').innerHTML=alt;
  
  document.getElementById('image').style.backgroundImage="url(" + src + " )";
}

function unDo(){
   document.getElementById('image').style.backgroundImage="none";
   document.getElementById('image').innerHTML="Hover over an image';
}