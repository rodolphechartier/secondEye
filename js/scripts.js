function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
};


function validateFormCreate() {
  // e.preventDefault();
  var id_group = document.forms["create"]["id_group"].value;
  var name_group = document.forms["create"]["name_group"].value;
  var info_group = document.forms["create"]["info_group"].value;
  console.log(document.forms["create"]['info_group'].value)
  if (name_group === "" || id_group === "") {
    alert("Id group and name group must be filled out");
    return false;
  }
  var params = {
            // Request parameters
            "name" : name_group,
            "userData": info_group
        };

  $.ajax({
    crossDomain: true,
    url: "https://westeurope.api.cognitive.microsoft.com/face/v1.0/persongroups/1?" + $.param(params),
    beforeSend: function(xhrObj){
      // Request headers
      xhrObj.setRequestHeader("Content-Type","application/json");
      xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","a81e3ac9d45b4406a68e4d3cd4898c6b");
    },
    type: "PUT",
    // Request body
    body: params
  })
  .done(function(data) {
    console.log(data);
    alert("success");
    // return true;
  })
  .fail(function(error) {
    console.log("fail");
    alert(JSON.stringify(error));
    // return false;
  });
}

function validateFormGet(){
  var id_group = document.forms["get"]["id_group"].value;
  if (id_group == ""){
    alert("Id group must be filled out");
    return false;
  }
  $.ajax({
    crossDomain: true,
    url: "https://westeurope.api.cognitive.microsoft.com/face/v1.0/persongroups/{personGroupId}?",
    beforeSend: function(xhrObj){
      // Request headers
      xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","a81e3ac9d45b4406a68e4d3cd4898c6b");
    },
    type: "GET",
    // Request body
    data: "{body}",
  })
  .done(function(data) {
    console.log(data);
    alert("success");
    return true;
  })
  .fail(function() {
    console.log("fail");
    alert("error");
    return false;
  });

}
