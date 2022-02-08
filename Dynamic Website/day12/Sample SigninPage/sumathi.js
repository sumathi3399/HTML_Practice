function signIn(){
    let userName = document.getElementById("inputText").value;
    let signInText = document.getElementById("signInText");
    let verifyText = "Hi " + userName + " verifying your account";
    signInText.textContent = verifyText;
    console.log(userName);
    console.log(signInText);
}