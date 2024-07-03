function CheckId(){

    let nic = $(`#NIC`).val();


    console.log(nic);


    $.ajax({
        method: "GET",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/citizan/getCitizanById/" + nic,
        async: true,

        success: function(data){
            alert("Ok");
            console.log("Data received:", data.firstName);
            localStorage.setItem('firstName',data.firstName);

           EmptyText();
            window.location.href = "Doctor-Patient/Doctor-Patient.html";
        },
        error: function(){
            alert("Citizan Not Found");
        }
    });
}
function EmptyText(){
    // Set empty values for LoginUserName and LoginPassword
    $('#NIC').val('');

}