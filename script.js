var confirmNumberEl;
var confirmsymbolsEl;
var confirmUppercase;
var confirmLowercase;


symbolsEl = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

numberEl = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Upc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

var toUpper = function (x) {
    return x.toUpperCase();
};

Upc2 = Upc.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});


function generatePassword() {
    // Asks for user input
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 100"));
    // First if statement for user validation 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        
        enter = parseInt(prompt("Minimum 8 characters , Maximum 128"));

    } else {
        confirmNumberEl = confirm("Will this contain Numbers?");
        confirmsymbolsEl = confirm("Will this contain symbols?");
        confirmUppercase = confirm("Will this contain uppercase letters?");
        confirmLowercase = confirm("Will this contain lowercase letters?");
    };

    if (!confirmsymbolsEl && !confirmNumberEl && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
    else if (confirmsymbolsEl && confirmNumberEl && confirmUppercase && confirmLowercase) {

        choices = symbolsEl.concat(numberEl, Upc, Upc2);
    }
    else if (confirmsymbolsEl && confirmNumberEl && confirmUppercase) {
        choices = symbolsEl.concat(numberEl, Upc2);
    }
    else if (confirmsymbolsEl && confirmNumberEl && confirmLowercase) {
        choices = symbolsEl.concat(numberEl, Upc);
    }
    else if (confirmsymbolsEl && confirmLowercase && confirmUppercase) {
        choices = symbolsEl.concat(Upc, Upc2);
    }
    else if (confirmNumberEl && confirmLowercase && confirmUppercase) {
        choices = numberEl.concat(Upc, Upc2);
    }
    else if (confirmsymbolsEl && confirmNumberEl) {
        choices = symbolsEl.concat(numberEl);

    } else if (confirmsymbolsEl && confirmLowercase) {
        choices = symbolsEl.concat(Upc);

    } else if (confirmsymbolsEl && confirmUppercase) {
        choices = symbolsEl.concat(Upc2);
    }
    else if (confirmLowercase && confirmNumberEl) {
        choices = Upc.concat(numberEl);

    } else if (confirmLowercase && confirmUppercase) {
        choices = Upc.concat(Upc2);

    } else if (confirmNumberEl && confirmUppercase) {
        choices = numberEl.concat(Upc2);
    }
    else if (confirmsymbolsEl) {
        choices = symbolsEl;
    }
    else if (confirmNumberEl) {
        choices = numberEl;
    }
    else if (confirmLowercase) {
        choices = Upc;
    }
    else if (confirmUppercase) {
        choices = space.concat(Upc2);
    };

    var password = [];

    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}
