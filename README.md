This is a pure Javascript tool (browser agnostic) and doesn't need to install any Browser-Extensions.

You can use this tool to hook into XMLHttpRequest (xhr, ajax) requests and you can tamper/modify/replay requests.

Installation
=
Can be used in console or as a browser-snippet.
 
1) Just copy the code and add that code as a browser-bookmark (snippet), name it whatever you want (i.e. `My Tamper`)

![example](https://i.imgur.com/FSuCiFs.png)

2) Right-click > Edit > add the `javascript:` prefix in front of the code.

Usage
=
* Open any target website where you want to tamper the ajax-request (like "button-click", form-submission or etc...)
* Click the browser-bookmark to activate the code and you will see the primitive window.

![example](https://i.imgur.com/145np9J.png)

* Make any AJAX request on the target website and you will see the request tampered and filled. Then you can modify & replay it.
---
RequestTools.js
* copy Chrome or Edge deve tools CURL requests as data
ReqeuestTools page will parse data and reset data
![image](https://user-images.githubusercontent.com/80472987/192755781-9f7cebd3-320a-46c6-bcc7-11dfd440c914.png)

