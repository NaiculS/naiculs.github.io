function sendEmail() {
    //console.log("WE STATIN BOYSSSSSSS");
    let body = document.getElementById('validationTooltip01').value + " would like to say: " + document.getElementById('validationTooltip04').value + "\n<br> You can contact them at: " + document.getElementById('validationTooltip02').value;
    //console.log(body);
	Email.send({
    SecureToken : "e05575e5-5223-423c-98e5-420ab6dac9fd",
    To : 'naicul@me.com',
    From : "naiculscontactform@gmail.com",
    Subject : document.getElementById('validationTooltip03').value,
    Body : String(body),
    }).then(
        message => alert("mail sent successfully"),
    );
}