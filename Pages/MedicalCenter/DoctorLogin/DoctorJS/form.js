
    function HistoryShow() {
        // Get the modal and iframe elements
        var modal = document.getElementById("historyModal");
        var iframe = document.getElementById("modalIframe");

        // Set the iframe source to the desired HTML file
        iframe.src = "DoctorForms/formHistory.html";

        // Display the modal
        modal.style.display = "block";

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
