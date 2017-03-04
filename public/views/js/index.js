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
