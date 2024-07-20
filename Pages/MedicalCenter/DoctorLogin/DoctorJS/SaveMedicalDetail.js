function addToTable() {
    let DoctorName = localStorage.getItem('DoctorName');
    let diseases = $('#TextInputDisease').val();
    let TextInputMedicine = $('#TextInputMedicine').val();
    let doses = $('#doses').val();
    let note = $('#note').val();

    let name = localStorage.getItem('firstName');

    console.log("Diseases: " + diseases);
    console.log("Medicine: " + TextInputMedicine);
    console.log("Doses: " + doses);
    console.log("Note: " + note);
    console.log("Doctor Name: " + DoctorName);
    console.log("Username: " + name);
    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/Detail/saveDetail",
        async:true,
        data:JSON.stringify({
            "disease": diseases,
            "doctorName": DoctorName,
            "dose":doses,
            "medicineName":TextInputMedicine,
            "note": note,
            "patientName":name

        }),
        success:function (data){

          /*  alert("saved")*/

        },
        error:function (){
            alert("Error")
        }
    })
}


function SaveDetail(){

    alert("saved")
}


