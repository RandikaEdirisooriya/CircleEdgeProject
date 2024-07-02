function nextButtonD() {
    let FullName = $('#FullName').val();
    let EmailAddress = $('#EmailAddress').val();
    let DOB = $('#DOB').val();
    let ContactNumber = $('#ContactNumber').val();
    let gender = $('#gender').val();

    // Store data in localStorage
    localStorage.setItem('FullName', FullName);
    localStorage.setItem('EmailAddress', EmailAddress);
    localStorage.setItem('ContactNumber', ContactNumber);
    localStorage.setItem('DOB', DOB);
    localStorage.setItem('gender', gender);

    // Redirect to the next page
 window.location.href = "register2.html";
    console.log(FullName)
    console.log(EmailAddress)
    console.log(DOB)
    console.log(ContactNumber)
    console.log(gender)


}


function sendCode(){
    // Log the values to the console


    let Specialization = $('#Specialization').val();
    let LicenseNumber = $('#LicenseNumber').val();
    let NIC = $('#NIC').val();
    localStorage.setItem('Specialization', Specialization);
    localStorage.setItem('LicenseNumber', LicenseNumber);
    localStorage.setItem('NIC', NIC);
    let verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    console.log('Verification Code:', verificationCode);

    // Store the verification code in localStorage
    localStorage.setItem('verificationCode', verificationCode);

    window.location.href = "sendCode.html";
//send some generated code for that emai address

}

function Register() {
    // Retrieve values from localStorage
    let FullName = localStorage.getItem('FullName');
    let EmailAddress = localStorage.getItem('EmailAddress');
    let ContactNumber = localStorage.getItem('ContactNumber');
    let DOB = localStorage.getItem('DOB');
    let gender = localStorage.getItem('gender');
    let Specialization = localStorage.getItem('Specialization');
    let LicenseNumber = localStorage.getItem('LicenseNumber');
    let NIC = localStorage.getItem('NIC');
    let verificationCode = localStorage.getItem('verificationCode');

    // Print the retrieved values to the console
    console.log('Full Name:', FullName);
    console.log('Email Address:', EmailAddress);
    console.log('Contact Number:', ContactNumber);
    console.log('DOB:', DOB);
    console.log('Gender:', gender);
    console.log('Specialization:', Specialization);
    console.log('License Number:', LicenseNumber);
    console.log('NIC:', NIC);
    console.log('verificationCode:', verificationCode);


    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/Doctor/saveDoctor",
        async:true,
        data:JSON.stringify({
            "nic":NIC,
            "fullName":FullName,
            "dob":DOB,
            "specialization":Specialization,
            "contactNumber":ContactNumber,
            "licenseNumber":LicenseNumber,
            "emailAddress":EmailAddress,
            "verificationCode":verificationCode,
            "gender":gender

        }),
        success:function (data){

            alert("saved")

        },
        error:function (){
            alert("Error")
        }
    })
}
