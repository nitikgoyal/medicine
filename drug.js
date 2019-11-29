var xhr=new XMLHttpRequest();
var box=document.getElementById('display-box');
//console.log(box);
var searchTerm=document.getElementById('searchTerm');
//xhr.open("GET","https://api.fda.gov/drug/event.json?limit=1");
//xhr.onload=function(){
//  var obj=JSON.parse(xhr.responseText);
//  var btn=document.getElementById('searchButton');
//  btn.addEventListener('click',function(e){
//      box.innerHTML="";
//      console.log(obj.results[0].patient.drug);
////    for(var i=0;i<obj.results[0].patient.drug.length;i++){
//       for(var i=0;i<obj.results[0].patient.drug.length;i++)
//       {
//        if(obj.results[0].patient.drug[i].	
//           medicinalproduct==searchTerm.value)
//            {
//                console.log(i);
//                var h3=document.createElement('h3');
//                h3.innerHTML=obj.results[0].patient.drug[i].drugcharacterization;
//                box.append(h3);
//            }
//    }  
//  });      
//}
//xhr.send();
var btn=document.getElementById('searchButton');
btn.addEventListener('click',()=>{
    console.log(searchTerm.value);
   var res =  data.drugs.filter(item=>{
        return item.id.toLowerCase() === searchTerm.value.toLowerCase()
    });
    box.innerHTML = "";
    res[0].name.forEach(item=>{
        var li = document.createElement("li");
        li.innerHTML = item;
        box.appendChild(li);
    })
})
var data;
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 ) {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
readTextFile("./file.json", function(text){
    data = JSON.parse(text);
    console.log(data);
});