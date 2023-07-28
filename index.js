const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
    close.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }


  let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;


function validateform() {
    if (username.value == "") {
        document.getElementById("usererror").innerHTML = "User Name is empty"
        flag = 0;
    } else if (username.value.length < 6) {
        document.getElementById("usererror").innerHTML = "User Name require min 6 charecter"
        flag = 0;
    } else {
        document.getElementById("usererror").innerHTML = ""
        flag = 1;
    }

    if (password.value == "") {
        document.getElementById("passerror").innerHTML = "Password is empty"
        flag = 0;
    } else {
        document.getElementById("passerror").innerHTML = "";
        flag = 1;
    }
    
    if (flag){
        return true;
    } else {
        return false;
    }

}