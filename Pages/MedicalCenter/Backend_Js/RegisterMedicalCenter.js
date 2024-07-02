function nextButton() {
    let MedicalCenterName = $('#CenterName').val();
    let EmailAddress = $('#EmailAddress').val();
    let ContactNumber = $('#number').val();
    let RegisterCode = $('#code').val();

    // Store data in localStorage
    localStorage.setItem('MedicalCenterName', MedicalCenterName);
    localStorage.setItem('EmailAddress', EmailAddress);
    localStorage.setItem('ContactNumber', ContactNumber);
    localStorage.setItem('RegisterCode', RegisterCode);

    // Redirect to the next page
    window.location.href = "register2.html";

}


function saveMedicalCenter(){
    // Log the values to the console
    let MedicalCenterName = localStorage.getItem('MedicalCenterName');
    let EmailAddress = localStorage.getItem('EmailAddress');
    let ContactNumber = localStorage.getItem('ContactNumber');
    let RegisterCode = localStorage.getItem('RegisterCode');
    let Location = $('#location').val();
    let OwnerName = $('#OwnerName').val();
    let facility = $('#facility').val();
    let capacity = $('#capacity').val();

    console.log("Medical Center Name:", MedicalCenterName);
    console.log("Email Address:", EmailAddress);
    console.log("Contact Number:", ContactNumber);
    console.log("RegisterCode:", RegisterCode);
    console.log("Location", Location);
    console.log("OwnerName", OwnerName);
    console.log("facility", facility);
    console.log("capacity", capacity);
    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/medicalcenter/saveEmployee",
        async:true,
        data:JSON.stringify({

        "address":Location,
        "contact":ContactNumber,
        "email":EmailAddress,
        "name":MedicalCenterName,
        "owner":OwnerName,
        "capacity":capacity,
        "code":RegisterCode,
        "facility": facility



        }),
        success:function (data){

            alert("saved")

        },
        error:function (){
            alert("Error")
        }
    })
}

