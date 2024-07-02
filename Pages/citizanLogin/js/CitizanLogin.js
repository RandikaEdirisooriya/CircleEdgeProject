function checkLogin(){
    let LoginUserName = $(`#LoginUserName`).val();
    let LoginPassword = $(`#LoginPassword`).val();

    console.log(LoginUserName);
    console.log(LoginPassword);

    $.ajax({
        method: "GET",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/citizan/getCitizanByPassword/" + LoginUserName + "/" + LoginPassword,
        async: true,

        success: function(data){
          /*  alert("Ok");*/
            // Navigate to Dashboard/index.html
            EmptyText();
            window.location.href = "Dashboard/index.html";
        },
        error: function(){
            alert("Error");
        }
    });
}
function EmptyText(){
    // Set empty values for LoginUserName and LoginPassword
    $('#LoginUserName').val('');
    $('#LoginPassword').val('');
}
