var request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all',true);

request.send();

request.onload = function(){
  var data= JSON.parse(request.response);

  // display flags of all countries from data which belongs to Asia
  
  let result= data.filter((element)=>{
      return element.region=="Asia";
  })
  console.log(result);
  }
  
  
