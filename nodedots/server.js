require('http').createServer(function (request, response) {
  response.writeHead(200, {"Content-type":"text/plain"});
  output = "Hi dude.\n";
  for (k in request.headers) {
    output += k + '=' + request.headers[k] + '\n';
  }
  response.end(output);
}).listen(8080);
