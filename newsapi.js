var image=document.getElementById('image');
var title=document.getElementById('title');
var xml1=new XMLHttpRequest();
xml1.open("GET","https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=ceaa959bbaf844eebe9f5ec9bfd78256");
xml1.send();
xml1.onload=function(){
    console.log(xml1.responseText);
    var obj=JSON.parse(xml1.responseText);
    
    var interval=setInterval(myTimer, 3000);
    var i=0;
    function myTimer()
    {
    image.innerHTML="";    
    var img=document.createElement('img');    
    img.setAttribute("src",obj.articles[i].urlToImage);
    img.setAttribute("id","img");   
    image.append(img);
    title.innerHTML= obj.articles[i].title;   
    i++;
    if(i==20)
        i=0;
    }
}
