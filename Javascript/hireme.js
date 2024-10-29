
// SHOW MOBILE SIDE BAR NAVIGATION
const showMobile = document.querySelector(".showMobile");
const hideMobile = document.querySelector(".hideMobile");
let Mobile = document.querySelector(".nav-icons-mobile");

showMobile.addEventListener("click", () => {
    Mobile.style.display = "flex";
});

hideMobile.addEventListener("click", () => {
    Mobile.style.display = "none";
});


//SENDING FORMS TO EMAILJS 
(function() {
    emailjs.init({
    publicKey: "8Tkof4Y8MUWX0N48Y",
    });
})();
form = document.getElementById("submit");
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const serviceID =  "service_425d4w9";
    const templateID = "template_ljzkehu";
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let fullName = `${firstname} ${lastname}`;
    let number = document.getElementById("number").value;
    let MessageTitle =  document.getElementById("subject").value;
    let Message = document.getElementById("message").value;
    let SenderEmail = document.getElementById("email").value;
    
    var param = {
        from_name: SenderEmail,
        user_name :  fullName,
        contact_number : number,
        message_title : MessageTitle,
        message : Message
    };

    emailjs.send(serviceID, templateID, param)
    .then(()=>{
            alert("Message Sent Succesfully");
        }) .catch(
            (error)=>{
                alert("Couldn't Sent Message " + error);
            }
        )

        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("number").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        document.getElementById("email").value = "";

});





