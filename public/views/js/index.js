"use strict";

function clearFormFields(){
  $(document).getElementsByName("email").value = "";
  $(document).getElementsByName("name").value = "";
}

$(document).ready(function(){
  $(".square").click(function(){
    $(location).attr("href", $(this).find("a").attr("href"));
  });

  var socket = io();
  var visitorData = {
    referringSite: document.referrer,
    page: location.pathname,
    userClient: navigator.userAgent,
    browserType: navigator.vendor,
    sessionStart: new Date()
  };

  socket.emit("visitor-data", visitorData);

});

if('serviceWorker' in navigator){
  navigator.serviceWorker
    .register("./service-worker.js")
    .then(() => {
      console.log(
        "[%s] Service Worker Registered.",
        new Date().toLocaleString()
      );
    })
    .catch((err) => {
      if(err)
        console.log(err);
    });
}
