self.addEventListener('fetch', function(event) {
  console.log("fetch event:", event.request.url);
});
