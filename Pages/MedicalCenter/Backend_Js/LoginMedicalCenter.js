function checkLoginMC() {
    let medicalCenterName = $(`#medicalCenterName`).val();
    let Code = $(`#Code`).val();

    console.log(medicalCenterName);
    console.log(Code);

    $.ajax({
        method: "GET",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/medicalcenter/getMCByCode/" + medicalCenterName + "/" + Code,
        async: true,

        success: function(data){
           alert("Ok");
            // Navigate to Dashboard/index.html
            EmptyText();
            window.location.href = "centerDash.html";
        },
        error: function(){
            alert("Error");
        }
    });
}
function EmptyText(){
    // Set empty values for LoginUserName and LoginPassword
    $('#medicalCenterName').val('');
    $('#Code').val('');
}
