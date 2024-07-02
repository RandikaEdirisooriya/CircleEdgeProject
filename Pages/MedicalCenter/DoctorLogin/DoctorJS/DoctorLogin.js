function checkLoginDoctor() {
    let userName = $(`#userName`).val();
    let Code = $(`#Code`).val();

    console.log(userName);
    console.log(Code);

    $.ajax({
        method: "GET",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/Doctor/getDoctorByCode/" + userName + "/" + Code,
        async: true,

        success: function(data){
            alert("Ok");
            // Navigate to Dashboard/index.html
            EmptyText();
            window.location.href = "Append/enter_patient_id.html";
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
