var cmdlist = ["help", "clear", "ls", "goto", "echo", ""];
var ps1 = "www-data@localhost: ";
var terminal = document.getElementsByClassName("virtual-terminal")[0];


// Find the virtual terminal object, and wait until the "Enter" key is pressed
terminal.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn1").click();  //onclick runs the exec() function
    }
});

// When a button is pressed, try to "exec" the command (copying what Linux does)
function exec() {
    var input = document.getElementById("textbox").value;
    printstring(input, true);
    isValid(input);

    // This is an aesthetic choice. It clears the field just like a real linux terminal
    document.getElementById("textbox").value = null;
}

function printstring(string, isPrompt) {
    // If a user pressed enter, then print the prompt as well (like a real terminal)
    if (isPrompt === true) {
        string = ps1 + string;
    }

    var tag = document.createElement("p");
    var text = document.createTextNode(string);
    tag.appendChild(text);

    const textboxReference = document.querySelector("#textbox");
    terminal.insertBefore(tag, textboxReference);
}


// Check if the command is valid by searching for it inside a predefined array
function isValid(cmd) {
    if (cmdlist.includes(cmd) === false) {
        error(cmd);
        return;
    }
    switch(cmd) {
        case "help":
            help();
            break;
        case "clear":
            clear();
            break;
        case "ls":
            ls();
            break;
        case "echo":
            echo(cmd);
            break;
        case "" :   //Another aesthetic choice: most linux terminals treat this as a newline with no error
            break;
    }
}

// Print help info to virtual terminal
function help() {
    var helpString = `Webshell, version 0.0.1-release (x86_64-pc-linux)\n \
    These shell commands are defined internally. Type 'help' to see this list.\n\n \
    help \n \
    ls \n \
    clear \n \
    echo \n \
    `;
    printstring(helpString);
}

// Clear all paragraph children from the virtual terminal
function clear() {
    var childArray = terminal.children;
    console.log(childArray);
    for (var i = 0; i < childArray.length; i++) {
        console.log(i, childArray[i].tagName);
        if (childArray[i].tagName == "P") {
            terminal.removeChild(childArray[i]);
        }
    }
}

// Show a sample directory
function ls() {
    var dirString = " . " + " .. " + " folder1 " + " folder2 "
    printstring(dirString);
}

function echo(string) {
    // TODO: implement substring and cut the beginning "echo" part
    printstring(string)
}

// Print this error incase the command does not exist
function error(string) {
    var errorString = "webshell: " + string + ": command not found";
    printstring(errorString);
}
