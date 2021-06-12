let submitEnableFlag = false;
let map;
let lattitude = 34.289051;
let longitude = -118.713417;
$(document).ready(function() {
    document.getElementById("submitButton").disabled = true;
    document.getElementById("submitButton").style.background = 'grey';

    $("#fname[type=text]").blur(function() {
        this.value = this.value.trim();;
        if (this.value == "" || this.value.length < 3 || !isNaN(this.value) || !validateText(this.value)) {
            document.getElementById("fnameError").innerText = "Please enter valid first name";
            document.getElementById("fnameError").style.color = "red";
        } else {
            document.getElementById("fnameError").innerText = "";

        }
        checkDisable();
    });
    $("#lname[type=text]").blur(function() {
        this.value = this.value.trim();;
        if (this.value == "" || this.value.length < 3 || !isNaN(this.value) || !validateText(this.value)) {
            document.getElementById("lnameError").innerText = "Please enter valid last name";
            document.getElementById("lnameError").style.color = "red";
        } else {
            document.getElementById("lnameError").innerText = "";

        }
        checkDisable();
    });
    $("#state[type=text]").blur(function() {
        this.value = this.value.trim();;
        if (this.value == "" || this.value.length < 3 || !isNaN(this.value) || !validateText(this.value)) {
            document.getElementById("stateError").innerText = "Please enter valid state name";
            document.getElementById("stateError").style.color = "red";
        } else {
            document.getElementById("stateError").innerText = "";

        }
        checkDisable();
    });
    $("#phone[type=text]").blur(function() {
        this.value = this.value.trim();
        if (this.value == "" || this.value.length < 10 || !isNaN(this.value) || !validateNumber(this.value)) {
            document.getElementById("phoneError").innerText = "Please enter valid phone number";
            document.getElementById("phoneError").style.color = "red";
        } else {
            document.getElementById("phoneError").innerText = "";

        }
        checkDisable();
    });
    $("#email[type=email]").blur(function() {
        this.value = this.value.trim();
        validateTheEmail(this.value);
        checkDisable();
    });

    $("#clearButton").click(function() {
        document.getElementById("fnameError").innerText = "";
        document.getElementById("lnameError").innerText = "";
        document.getElementById("stateError").innerText = "";
        document.getElementById("phoneError").innerText = "";
        document.getElementById("emailError").innerText = "";
        document.getElementById("submitButton").disabled = true;
        document.getElementById("submitButton").style.background = 'grey';
    });

    $("#submitButton").click(function() {
        const CONTACT_API_URL = 'https://9wsb37fxok.execute-api.us-east-1.amazonaws.com/vsptech/vsptech_email';
        const CONTACT_API_REQUEST_HEADERS = {
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work
            "Accept": "*/*",
            "Content-Type": "application/json"
                //"x-api-key": "y66xzEU4jL6QhPCmv6cxo66gRu9frAfO1fcJGQBt"
        };

        // Object for examples
        const data_in = {
            first_name: document.getElementById("fname").value,
            last_name: document.getElementById("lname").value,
            country: document.getElementById("country").value,
            state: document.getElementById("state").value,
            phone_number: document.getElementById("phone").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value
        };
        // Making a POST request using an axios instance from a connected library
        axios.post(CONTACT_API_URL, data_in, { headers: CONTACT_API_REQUEST_HEADERS })
            // Handle a successful response from the server
            .then(response => {
                // Getting a data object from response that contains the necessary data from the server
                const data = response.data;
                if (data == "Sucess") {
                    document.getElementById("submitError").innerText = "Thanks for writing to us. Our Team will reach you out..";
                    $("#clearButton").click();
                }

            })
            // Catch and print errors if any
            .catch(error => console.error('On create student error', error));

    });
    // $("#address").mouseover(function() {
    //     lattitude = 34.289051;
    //     longitude = -118.713417;
    //     initMap();
    // });
});


function validateTheEmail(mail) {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(mail)) {
        document.getElementById("emailError").innerText = "";
        document.getElementById("emailError").style.color = '';
        return (true)

    }

    document.getElementById("emailError").innerText = "Email address is invalid";
    document.getElementById("emailError").style.color = 'red';
    return (false)
}

function validateText(text) {
    if (/^[a-zA-Z ]*$/.test(text)) {
        return (true)

    }
    return (false)
}

function validateNumber(text) {

    if (/^(\+?\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(text)) {
        return (true)

    }
    return (false);
}

function checkDisable() {
    if (document.getElementById("fnameError").innerText == "" && document.getElementById("lnameError").innerText == "" && document.getElementById("stateError").innerText == "" && document.getElementById("phoneError").innerText == "" && document.getElementById("emailError").innerText == "" && document.getElementById("fname").value != "" && document.getElementById("lname").value != "" && document.getElementById("state").value != "" && document.getElementById("phone").value != "" && document.getElementById("email").value != "") {
        document.getElementById("submitButton").disabled = false;
        document.getElementById("submitButton").style.background = 'var(--clr-primary-5)';

    } else {
        document.getElementById("submitButton").disabled = true;
        document.getElementById("submitButton").style.background = 'grey';

    }
}




function initMap() {
    const myLatLng = { lat: lattitude, lng: longitude };
    map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        zoom: 15,
    });
    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "VSP TECH main branch",

    });
    // const image =
    //     "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    // const beachMarker = new google.maps.Marker({
    //     position: myLatLng,
    //     map,
    //     icon: image,
    //     title: "VSP TECH main branch",
    // });
}