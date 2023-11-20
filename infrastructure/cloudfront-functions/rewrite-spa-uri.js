function handler(event) {
  var request = event.request;
  var uri = request.uri;
  
  // Don't modify URIs that end with a `/`
  if (uri.endsWith('/')) {
      return request;
  } 
  // Check whether the URI is missing a file extension.
  if (!uri.includes('.')) {
      request.uri += '.html';
  }

  return request;
}