let cmdCommand=`
curl 'https://api-test.gengesports.cn/v2/user/info/game' \
  -X 'PATCH' \
  -H 'authority: api-test.gengesports.cn' \
  -H 'accept: application/json, text/plain, */*' \
  -H 'accept-language: zh-CN,zh;q=0.9' \
  -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiI5MzAwZTJmYjNhNTcxMWVkYTQ4MTAyNDJhYzExMDAwOCIsImV4cCI6MTY2NDQ0MzIwOSwianRpIjoiMGJiNGVlYTgtY2NhMi00ZTMwLThhYmYtMGE5OTY4NjAxMjE4IiwiaWF0IjoxNjYzODM4NDA5LCJ1aWQiOiI3NTkiLCJzaWQiOiI3NDg5MjE5MDY1MjQ0ODJlYWZiNzI5NTQ0NjYwYjk1YyJ9.XGIJP3MtaXXRxBVUXFP63lDm33JP29NWepPEvVETh24' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'origin: https://academy-test.gengesports.cn' \
  -H 'pragma: no-cache' \
  -H 'referer: https://academy-test.gengesports.cn/' \
  -H 'sec-ch-ua: "Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Windows"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36' \
  -H 'x-request-id: b55eab7edc8c' \
  --data-raw '[{"game_info_id":1,"game_info_value":null},{"game_info_id":2,"game_info_value":null},{"game_info_id":3,"game_info_value":null},{"game_info_id":4,"game_info_value":null},{"game_info_id":5,"game_info_value":null},{"game_info_id":6,"game_info_value":null}]' \
  --compressed
`
let cmdCommand1=`
curl "https://api-test.gengesports.cn/v2/user/info/game" ^
  -X "PATCH" ^
  -H "authority: api-test.gengesports.cn" ^
  -H "accept: application/json, text/plain, */*" ^
  -H "accept-language: zh-CN,zh;q=0.9" ^
  -H "authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiI5MzAwZTJmYjNhNTcxMWVkYTQ4MTAyNDJhYzExMDAwOCIsImV4cCI6MTY2NDQ0MzIwOSwianRpIjoiMGJiNGVlYTgtY2NhMi00ZTMwLThhYmYtMGE5OTY4NjAxMjE4IiwiaWF0IjoxNjYzODM4NDA5LCJ1aWQiOiI3NTkiLCJzaWQiOiI3NDg5MjE5MDY1MjQ0ODJlYWZiNzI5NTQ0NjYwYjk1YyJ9.XGIJP3MtaXXRxBVUXFP63lDm33JP29NWepPEvVETh24" ^
  -H "cache-control: no-cache" ^
  -H "content-type: application/json" ^
  -H "origin: https://academy-test.gengesports.cn" ^
  -H "pragma: no-cache" ^
  -H "referer: https://academy-test.gengesports.cn/" ^
  -H "sec-ch-ua: ^\^"Google Chrome^\^";v=^\^"105^\^", ^\^"Not)A;Brand^\^";v=^\^"8^\^", ^\^"Chromium^\^";v=^\^"105^\^"" ^
  -H "sec-ch-ua-mobile: ?0" ^
  -H "sec-ch-ua-platform: ^\^"Windows^\^"" ^
  -H "sec-fetch-dest: empty" ^
  -H "sec-fetch-mode: cors" ^
  -H "sec-fetch-site: same-site" ^
  -H "user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36" ^
  -H "x-request-id: b55eab7edc8c" ^
  --data-raw "^[^{^\^"game_info_id^\^":1,^\^"game_info_value^\^":null^},^{^\^"game_info_id^\^":2,^\^"game_info_value^\^":null^},^{^\^"game_info_id^\^":3,^\^"game_info_value^\^":null^},^{^\^"game_info_id^\^":4,^\^"game_info_value^\^":null^},^{^\^"game_info_id^\^":5,^\^"game_info_value^\^":null^},^{^\^"game_info_id^\^":6,^\^"game_info_value^\^":null^}^]" ^
  --compressed
`
var requestTools={
  requestObj:{},
  init:function(){
    this.createDiv();
  },

  handlerBeforSend:function(){
    let values=document.getElementById("_divMain_rawData").value;
    requestTools.handFunc(values);
    document.getElementById("_divMain_url").value=requestTools.requestObj.url;
    document.getElementById("_divMain_method").value=requestTools.requestObj.method;
    document.getElementById("_divMain_headers").value=JSON.stringify(requestTools.requestObj.headers);
    document.getElementById("_divMain_param").value=requestTools.requestObj.body?JSON.stringify(requestTools.requestObj.body):null;
  },
  handlerAfterSend:function(response){

    document.getElementById("_divMain_response").value=JSON.stringify(response);
  },
  collectInforBeforSendFetch:function(){
    requestTools.requestObj.url=document.getElementById("_divMain_url").value;
    requestTools.requestObj.method=document.getElementById("_divMain_method").value;
    requestTools.requestObj.headers=JSON.parse(document.getElementById("_divMain_headers").value);
    requestTools.requestObj.body=requestTools.requestObj.body?JSON.parse(document.getElementById("_divMain_param").value):null;
  },
  sendFetch:function(){
    let response={};
    requestTools.collectInforBeforSendFetch();
    let input=requestTools.requestObj.url;
    let myInit={};
    myInit.headers=new Headers(requestTools.requestObj.headers);
    myInit.method=requestTools.requestObj.method;
    requestTools.requestObj.body?myInit.body=JSON.stringify(requestTools.requestObj.body):null;
    var request=new Request(input,myInit);
    fetch(request).then(res=>{

      response.status=res.status;
      response.headers=res.headers;

      if(true) {
        try {
          return res.json()
        } catch (error) {
          return res.text();
          throw error;
        }
      }
    }).then(res=>{

      response.body=res;
      requestTools.handlerAfterSend(response);/*由于最后执行，所以最后渲染数据；*/
    }).catch(error=>console.log(error));
  },
  createDiv:function(){
    let name="_divMain";
    var divMain=document.createElement("div");
    let divCode=`
    <style>
    ._divMain{width: 90%;height: 100px;border: 20px solid rgb(246, 103, 50);background-color:#1f2635;color:rgb(5, 252, 5);}
    #_divMain{z-index:99999; position:absolute;left:0px; width: 90%; left:5%;opacity: 1;}
    ._divMainBg{background-color: rgb(246, 103, 50);margin:0 auto;}
    #_divMainStn{color:rgb(5, 252, 5);; background-color: #1f2635;width: 20%;display: inline-block;margin: 0 auto;}
    #_divMainParse{color:rgb(5, 252, 5);; background-color: #1f2635;width: 20%;display: inline-block;margin: 0 auto;}
  
  </style>
  <div class="_divMainBg">
    <div>RequestUrl</div>
    <textarea placeholder="Api url" id="_divMain_url" class="_divMain"></textarea>
  </div>
  <div class="_divMainBg">
    <div>RequestMethod</div>
    <textarea placeholder="Api method" id="_divMain_method" class="_divMain"></textarea>
  </div>
  <div class="_divMainBg">
    <div>RequestHeaders</div>
    <textarea placeholder="Headers:{params:values}" id="_divMain_headers" class="_divMain"></textarea>
  </div>
  <div class="_divMainBg">
    <div>RequestData</div>
    <textarea placeholder="{params:values}" id="_divMain_param" class="_divMain"></textarea>
  </div>
  <div class="_divMainBg">
    <div>RequestResponse</div>
    <textarea placeholder="Response:{params:values}" id="_divMain_response" class="_divMain"></textarea>
  </div>
  <div class="_divMainBg">
    <div>RequestRawData</div>
    <textarea placeholder="RequestRawData" id="_divMain_rawData" class="_divMain"></textarea>
  </div>
  <div class="_divMainBg">
    <button id="_divMainParse">Parse</button>
    <button id="_divMainStn">Send</button>
  </div>
    `;
    divMain.setAttribute("id",name);
    document.body.appendChild(divMain);
    divMain.innerHTML=divCode;
    var submitbtn=document.getElementById("_divMainStn");
    /*console.log("test element",submitbtn);*/
    submitbtn.addEventListener("click",this.sendFetch);
    document.getElementById("_divMainParse").addEventListener("click",this.handlerBeforSend);
  },
  handFunc:function(command){
    this.requestObj={};
    /*兼容 bash 和 cmd*/
    command=command.replaceAll("^","").replaceAll("\\","");
    paramArray=null;
    if(command.indexOf("--data-raw")>=0){
        var paramArray=command.split("--data-raw");
        try {
          requestTools.requestObj.body=JSON.parse(paramArray[1].trim().replace("--compressed","").trim().slice(1,-1));
        } catch (error) {
          requestTools.requestObj.body=paramArray[1].trim().replace("--compressed","").trim().slice(1,-1);
          console.log(error);
          throw error;
        };
        requestTools.requestObj.method="POST";
        
    }
    else {
      requestTools.requestObj.method="GET";
      paramArray=command.split("--compressed");
    }
    let headersObj={};
    let headersSplitArray=paramArray[0].split("-H");
    let headersArray=headersSplitArray.filter(o=>{return o.indexOf("curl ")<0}).map(o=>{return o.trim().slice(1,-1)});
    requestTools.requestObj.headers=headersArray.forEach(o=>{headersObj[o.slice(0,o.indexOf(":")).trim()]=o.slice(o.indexOf(":")+1).trim()});
    requestTools.requestObj.headers=headersObj;
    let methodArray=headersSplitArray.filter(o=>{return o.indexOf("-X")>=0&&o.indexOf("curl")>=0});
    methodArray.length>0?requestTools.requestObj.method=methodArray[0].split("-X")[1].trim().slice(1,-1):null;
    let urlString=headersSplitArray[0].trim().split("curl")[1].trim();
    requestTools.requestObj.url=urlString.indexOf("-X")<0?urlString.slice(1,-1):urlString.split("-X")[0].trim().slice(1,-1);
  },
};
requestTools.init();

