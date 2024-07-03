function saveCitizan() {
    let FirstName = $(`#FirstName`).val();
    let LastName = $(`#LastName`).val();
    let NIC = $(`#Nic`).val();
    let ContactNumber = $(`#ContactNumber`).val();
    let Address = $(`#Address`).val();
    let EmailAddress = $(`#EmailAddress`).val();
    let Password = $(`#Password`).val();

    console.log(FirstName)
    console.log(LastName)
    console.log(NIC)
    console.log(ContactNumber)
    console.log(Address)
    console.log(EmailAddress)
    console.log(Password)

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/citizan/saveCitizan",
        async:true,
        data:JSON.stringify({
            "id": "",
            "nic": NIC,
            "firstName": FirstName,
            "lastName":LastName,
            "contactNumber":ContactNumber,
            "address": Address,
            "emailAddress":EmailAddress,
            "password": Password

        }),
        success:function (data){

            alert("saved")

        },
        error:function (){
            alert("Error")
        }
    })
}

