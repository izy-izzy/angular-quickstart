var http = require('http');
var url = require('url');
var fs = require('fs');
var baseDirectory = "./" ;
var PORT = 80;

var correctFileTypes = ['html','htm','js','jpg','jpeg','png','css','map','svg','gif', 'eot', 'ttf', 'woff', 'woff2', 'json'];
var correctFileTypesHeaders = ["text/html","text/html", "text/javascript","image/jpg","image/jpeg", "image/png", "text/css", "application/octet-stream", 'application/octet-stream', "image/gif", 'application/octet-stream', 'application/octet-stream', 'application/octet-stream', 'application/octet-stream','application/octet-stream'];

console.log("SERVER runs on port:",PORT);

    var loadpage = function(response){
		 fs.readFile('./index.html', function(error, data){
            if (error){
                response.writeHead(404);
                response.write("opps this doesn't exist - 404 A");
                response.end();
            }
            else{
                response.writeHead(200, {"Content-Type": "text/html",  'Cache-Control': 'no-cache'});
                response.write(data, "utf8");
                response.end();
            }
        });
    };

http.createServer(function (request, response) {
   	var requestUrl = url.parse(request.url);
   	var path = requestUrl.pathname;
	console.log('path',path);
  
    var found = (path == '/');

     	switch(found){
	        case true:
	           loadpage(response);
               console.log('loadpage');
	           break;
	        default:
	        	var splicedpath = path.split(".");
	        	var filetype = splicedpath[splicedpath.length -1];
	        	var indexOfFileType = correctFileTypes.indexOf(filetype);
	        	if (indexOfFileType != -1) {
	      		    fs.readFile("./"+path, function(error, data){
		                if (error){
		                    response.writeHead(404);
		                    response.write("opps this doesn't exist - 404 B");
		                    response.end();
                            console.log('DATA 404 - ' + error.message);
		                } else{
		                    response.writeHead(200, {"Content-Type": correctFileTypesHeaders[indexOfFileType],  'Cache-Control': 'no-cache'});
		                    response.write(data, "utf8");
		                    response.end();
                            console.log('DATA SEND');
		                }
	            	});
	            	break;
	        	} else {
	        		loadpage(response);
                    console.log('loadpage 2');
		            break;
		        }
        }
    return true;
   
}).listen(PORT);
