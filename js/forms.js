$( document ).ready(function() {
    console.log("Forms connected");

    // pagination of forms
    var locationBtn;
    var driverBtn;
    var cameraBtn;
    var notesBtn;
    var injuriesBtn;
    var confirmationBtn;

    
    if(window.location.pathname=="/Collision-Report/form/"){
        $("#locationForm").show();
        $("#driverForm").hide();
        $("#notesForm").hide();
        $('#cameraForm').hide();
        $("#injuriesForm").hide();
        $("#confirmationForm").hide();
    }
    // changing which form shows

    locationBtn = $("#page-location");
    if (locationBtn){
        locationBtn.click(function(){
             $("#locationForm").show();
             $("#driverForm").hide();
             $("#notesForm").hide();
             $("#injuriesForm").hide();
             $("#confirmationForm").hide();
            $("#cameraForm").hide();
        })
    }
    
    driverBtn=$("#page-driver");
    if (driverBtn) {
        driverBtn.click(function(){
            $("#driverForm").show();
            $('#cameraForm').hide();
            $("#notesForm").hide();
            $("#locationForm").hide();
            $("#injuriesForm").hide();
            $("#confirmationForm").hide();
            console.log("driver")
        })
    }

    cameraBtn=$("#page-camera");
    if (cameraBtn) {
        cameraBtn.click(function(){
            $('#cameraForm').show();
            $("#driverForm").hide();
            $("#notesForm").hide();
            $("#locationForm").hide();
            $("#injuriesForm").hide();
            $("#confirmationForm").hide();
            console.log("camera")
        })
    }

    notesBtn=$("#page-notes");
    if (notesBtn) {
        notesBtn.click(function(){
            $("#notesForm").show();
            $("#driverForm").hide();
            $('#cameraForm').hide();
            $("#locationForm").hide();
            $("#injuriesForm").hide();
            $("#confirmationForm").hide();
            console.log("notes")
        })
    }

    injuriesBtn=$("#page-injuries");
    if (injuriesBtn) {
        injuriesBtn.click(function(){
            $("#injuriesForm").show();
            $("#notesForm").hide();
            $("#driverForm").hide();
            $("#locationForm").hide();
            $('#cameraForm').hide();
            $("#confirmationForm").hide();
            console.log("injuries")
        })
    }

    confirmationBtn=$("#page-confirmation");
    if (confirmationBtn) {
        confirmationBtn.click(function(){
            $("#confirmationForm").show();
            $("#notesForm").hide();
            $("#driverForm").hide();
            $('#cameraForm').hide();
            $("#injuriesForm").hide();
            console.log("confirmation")
        })
    }

    // changing active state
    $("#pagination-forms li a").not("#page-prev, #page-next").click(function(e){
        $("#pagination-forms li").removeClass("active");
        var $parent = $(this).parent();
        $parent.addClass("active");
        e.preventDefault();
    })

    // previous and next buttons
    var liActive=$("#pagination-forms li.active");
    var prevBtn=$("#page-prev");
    var nextBtn=$("#page-next");

    // if (prevBtn) {
    //     prevBtn.click(function(){
    //         $("#pagination-forms li.active").prev("li").find("a").trigger("click");
    //     })
    // }
    //
    // if (nextBtn) {
    //     nextBtn.click(function(){
    //         $("#pagination-forms li.active").next("li").find("a").trigger("click");
    //     })
    // }

    prevBtn.click(function(){
        $("#pagination-forms li.active").prev("li").find("a").trigger("click");
    })

    nextBtn.click(function(){
        $("#pagination-forms li.active").next("li").find("a").trigger("click");
    })

})

// change which form shows after one section is completed
function changeForm(e){
    $("#pagination-forms li.active").next("li").find("a").trigger("click");
    console.log("nextform")
}

//submitting the location of the incident 
var formLocation= document.getElementById("formLocation");
var locationSubmitBtn = document.getElementById("locationSubmit")
    if (locationSubmitBtn){
        locationSubmitBtn.addEventListener("click",  formLocationFunction, false );
    };    
    function formLocationFunction(e){
        e.preventDefault();
        var myRequest = new XMLHttpRequest; 
    
        myRequest.onreadystatechange = function(){
            if(myRequest.readyState === 4){
                // console.log(myRequest.responseText);
                // var process = JSON.parse(myRequest.responseText);
            }
        };
        var address = document.getElementById("address");
        var city = document.getElementById("city");
        
        myRequest.open("POST", "http://localhost/Collision-Report/form/processes/processing-location.php", true); //true means it is asynchronous // Send urls through the url
        myRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded"); 
        myRequest.send("address=" + address.value + 
                        "&city=" + city.value); 
        changeForm();
    };

// submitting other driver form
var formDriver= document.getElementById("formDriver");
var driverSubmitBtn = document.getElementById("driverSubmit")
    if (driverSubmitBtn){
        driverSubmitBtn.addEventListener("click",  formDriverFunction, false );
    };    
    function formDriverFunction(e){
        e.preventDefault();
        var myRequest = new XMLHttpRequest; 
    
        myRequest.onreadystatechange = function(){
            if(myRequest.readyState === 4){
                // console.log(myRequest.responseText);
                // var process = JSON.parse(myRequest.responseText);
            }
        };
        var driverFirstName = document.getElementById("driverFirstName");
        var driverLastName = document.getElementById("driverLastName");
        var driverPhone = document.getElementById("driverPhone");
        
        myRequest.open("POST", "http://localhost/Collision-Report/form/processes/processing-otherDriver.php", true); //true means it is asynchronous // Send urls through the url
        myRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded"); 
        myRequest.send("driverFirstName=" + driverFirstName.value + 
                        "&driverLastName=" + driverLastName.value +
                        "&driverPhone="+ driverPhone.value); 
        changeForm();
    };


// submitting camera form
var cameraSubmitBtn = document.getElementById("cameraSubmit")
// if the button is clicked run the function
if (cameraSubmitBtn){
    cameraSubmitBtn.addEventListener("click",  formCameraFunction, false);
};
function formCameraFunction(e){
    // prevent form from submitting automatically
    e.preventDefault();
    // connecting
    var myRequest = new XMLHttpRequest;
    myRequest.onreadystatechange = function(){
        if(myRequest.readyState === 4){}
    };
    // grab inputs from form
    var image = document.getElementById("image");
    // send values to the database
    myRequest.open("POST", "http://localhost/collision-report/forms/processes/processing-camera.php", true);
    myRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    myRequest.send("image="+image.value);
    // switch user to next section of form
    changeForm();
};

// submitting notes form
var notesSubmitBtn = document.getElementById("notesSubmit")
// if the button is clicked run the function
if (notesSubmitBtn){
    notesSubmitBtn.addEventListener("click",  formNotesFunction, false);
};
function formNotesFunction(e){
    // prevent form from submitting automatically
    e.preventDefault();
    // connecting
    var myRequest = new XMLHttpRequest;
    myRequest.onreadystatechange = function(){
        if(myRequest.readyState === 4){}
    };
    // grab inputs from form
    var notes = document.getElementById("notes");
    var date = document.getElementById("date");
    var time = document.getElementById("time");
    // send values to the database
    myRequest.open("POST", "http://localhost/collision-report/forms/processes/processing-notes.php", true);
    myRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    myRequest.send("notes="+notes.value+
                    "&date="+date.value+
                    "&time="+time.value);
    // switch user to next section of form
    changeForm();
};

// submitting injuries form
var injuriesSubmitBtn = document.getElementById("injuriesSubmit")
// if the button is clicked run the function
if (injuriesSubmitBtn){
    injuriesSubmitBtn.addEventListener("click", formInjuriesFunction, false);
};
function formInjuriesFunction(e){
    // prevent form from submitting automatically
    e.preventDefault();
    // connecting
    var myRequest = new XMLHttpRequest;
    myRequest.onreadystatechange = function(){
        if(myRequest.readyState === 4){}
    };
    // grab inputs from form
    var injuries = document.getElementById("injuries");
    // send values to the database
    myRequest.open("POST", "http://localhost/collision-report/forms/processes/processing-injuries.php", true);
    myRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    myRequest.send("injuries="+injuries.value);
    // switch user to next section of form
    changeForm();
};

// submitting confirmation form
var confirmationSubmitBtn = document.getElementById("confirmationSubmit")
// if the button is clicked run the function
if (confirmationSubmitBtn){
    confirmationSubmitBtn.addEventListener("click",  formConfirmationFunction, false);
};
function formConfirmationFunction(e){
    // prevent form from submitting automatically
    e.preventDefault();
    // connecting
    var myRequest = new XMLHttpRequest;
    myRequest.onreadystatechange = function(){
        if(myRequest.readyState === 4){}
    };
    // grab inputs from form
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    // send values to the database
    myRequest.open("POST", "http://localhost/collision-report/forms/processes/processing-confirmation.php", true);
    myRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    myRequest.send("firstname="+fname.value+
                    "&lastname="+lname.value+
                    "&email="+email.value+
                    "&password="+password.value);
    // switch user to dashboard after completing form
    window.location.href = "http://localhost/collision-report/dashboard/";
}
