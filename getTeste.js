/*var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://amazing.site/https://app.mercos.com/api/v1/produtos/29545938",
    "method": "GET",
    "headers": {
      "Access-Control-Allow-Origin":'*',
      "content-type": "application/json",
      "applicationtoken": "b21cee34-64f7-11e4-9af6-02efc5095620",
      "companytoken": "2a4cb6fe-7ab2-11eb-8ce9-0242ac120005",
      "cache-control": "no-cache",
      //"postman-token": "25c1cdbd-bf9e-62eb-0daf-6d89e8848185"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response.status);
    console.log(response);
  });
*/
var request = new XMLHttpRequest();

request.open('GET', 'https://app.mercos.com/api/v1/produtos/29545938');
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('ApplicationToken', 'b21cee34-64f7-11e4-9af6-02efc5095620');
request.setRequestHeader('CompanyToken', '2a4cb6fe-7ab2-11eb-8ce9-0242ac120005');
request.setRequestHeader('Access-Control-Allow-Origin','https://amazing.site/')
request.send();
request.onload = ()=>{
    console.log(request);
    if(request.status===200){
        console.log(request.response);
    }
    else{console.log(request.status)
    }
}



