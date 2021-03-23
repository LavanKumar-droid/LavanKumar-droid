const COMMANDS = {
  id:
    'uid=0(root) gid=0(root) groups=0(root)',
  help:
    'Commands: <span class="code">about</span>, <span class="code">edu</span>, <span class="code">skills</span>, <span class="code">exper</span>, <span class="code">contact</span>',
  about:
    "Hey! 👋<br>I'm Lavan Kumar. I'm a Penetration Tester and Bug Bounty Hunter, I live for challenging adventures with the intent of making myself productive,skilled person and also to face challenges in this era of modern advanced cybersecurity world.",
  skills:
    '<span class="code">Languages:</span> Python, JavaScript, HTML, CSS<br><span class="code">Technical:</span> Web Application Pentesting, Network Penetration Testing, Kali Linux, Vulnerability Assessment, Reverse Engineering, Content Writer<br><span class="code">Tools:</span> Kali,Metasploit Framework, Nmap, Burpsuite,Maltego, Nikto, Wireshark, Vega, Maltego, Shodan, Ollydbg, OWASP ZAP',
  edu:
    "Princeton College of Engg & Tech - Power Electronics, 2014-2016<br> DVR Engineering College - Electrical and Electronics Engineering, 2010-2014<br> Alphores Junior College - 2008-2010",
exper:
    "I worked in TechHack Technologies as an Web Application Penetration Tester Intern.",
  // resume:
  //   "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
  contact:
    "You can contact me on any of following links:<br><a href='https://www.linkedin.com/in/lavan-kumar-71001a74/' class='success link'>LinkedIn</a> ,<a href='https://www.instagram.com/lavan_kumar777//' class='success link'>Instagram</a>, <a href='https://twitter.com/cyberdefender5' class='success link'>Twitter</a>"
  };
let userInput, terminalOutput;

let prevInputs = [];
let lenUp = -1;

const app = () => {
    userInput = document.getElementById("userInput");
    terminalOutput = document.getElementById("terminalOutput");
    document.getElementById("dummyKeyboard").focus();
    console.log("Application loaded");
};

const execute = function executeCommand(input) {
    let output;
    input = input.toLowerCase();
    if (input.length === 0) {
        return;
    }
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
        output += `<div class="terminal-line">no such command: ${input}</div>`;
        console.log("Oops! no such command");
    } else {
        output += COMMANDS[input];
    }

    terminalOutput.innerHTML = `${
        terminalOutput.innerHTML
        }<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    userInput.innerHTML = input;
    prevInputs.push(input);
    lenUp = prevInputs.length - 1;
    document.getElementById('dummyKeyboard').value = ''
};

const key = function keyEvent(e) {

    const input = document.getElementById('dummyKeyboard').value;
    if (e.key === "Enter") {
        execute(input);
        userInput.innerHTML = "";
    }


};

const backspace = function backSpaceKeyEvent(e) {

    if (e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
        return;
    }

    if (e.key === 'ArrowUp' && lenUp !== -1) {
        document.getElementById('dummyKeyboard').value = prevInputs[lenUp];
        lenUp--;
        if (lenUp < 0)
            lenUp = prevInputs.length - 1;

        return;
    } else if (e.key === 'ArrowDown' && lenUp !== -1) {

        lenUp++;
        if(lenUp===prevInputs.length)
            lenUp=0;

        document.getElementById('dummyKeyboard').value = prevInputs[lenUp];

        return;

    }
    userInput.innerHTML = userInput.innerHTML.slice(
        0,
        userInput.innerHTML.length - 1
    );
};


document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
//Code By RV Tech
