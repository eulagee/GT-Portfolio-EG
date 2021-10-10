const button = document.getElementById("submit");
button.onclick = (e) => {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var body = document.getElementById("body").value;
    var link = "mailto:" + email + "&subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    window.location.href = link;

}