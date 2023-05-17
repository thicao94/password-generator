const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s"
,"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateButton = document.getElementById("generate-btn")
let passwdEl1 = document.getElementById("passwd-el1")
let passwdEl2 = document.getElementById("passwd-el2")

function generate_passwd() {
    let passwd = ""
    for ( let i = 0; i < 15; i++) {
        random_index = Math.floor(Math.random()*characters.length)
        passwd += characters[random_index]
    }
    return passwd
}

generateButton.addEventListener("click", function() {
    passwdEl1.textContent =  generate_passwd()
    passwdEl2.textContent =  generate_passwd()
})