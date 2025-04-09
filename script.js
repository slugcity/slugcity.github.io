const date = new Date();
var mode = "terminal";
var bg = "on";
let guestNum = Math.floor(Math.random() * 1000);
let directory = "~";
let userPrefix = "usr" + guestNum + "@ohd:" + directory + "$ ";
document.getElementById('input-prefix').innerHTML = userPrefix;


document.getElementById("text-input")
    .addEventListener("keydown", function(event) {
    
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button").click();
    }
});

function updateDirectory(dir) {
  directory = dir;
  userPrefix = "usr" + guestNum + "@ohd:" + directory + "$ ";
}

function enterText() {
  //get text value
  var x = document.getElementById("text-input").value;
  // Create element:
  printRedLine(userPrefix + x);
  getResponse(x);
  //clear textbox
  document.getElementById('text-input').value = "";
  document.getElementById( 'text-input' ).scrollIntoView();
}

function getResponse(x) {
  //document.getElementById("backtext").style.animationName = "fadeout";
  if ((x.trim() == 'y' || x.trim() == 'yeah' || x.trim() == 'yes' || x.trim() == 'duh' || x.trim() == 'yea') && mode != "terminal") {

    if (mode == "exit") {
      mode = "terminal";
      printLine("Exiting...");
      window.top.close();
      window.close()
      self.close();
      printLine("Failed to exit. You are stuck here forever I guess.");
    } else if (mode == "reload") {
      mode = "terminal";
      printLine("Reloading...");
      location.reload();
    }
  }
  else if ((x.trim() == 'n' || x.trim() == 'nah' || x.trim() == 'no' || x.trim() == 'nuh uh' || x.trim() == 'nope')&& mode != "terminal") {

    mode = "terminal";
  }
  else if (x.trim() == 'help' || x.trim() == 'man' || x.trim() == 'commands') {

    mode = "terminal";
    printLine("&nbsp;");
    printRevLine("[HELP] - COMMANDS");
    printLine("about .................. About me!");
    printLine("list ................... List everything");
    printLine("games .................. List games");
    printLine("help ................... Display possible commands");
    printLine("clear .................. Clear screen");
    printLine("reload ................. Reload the page");
    printLine("There are many more commands, but you'll have to find those yourself :)");
    printLine("&nbsp;");
  }
  else if (x.trim() == 'about') {
    mode = "terminal";
    printLine("&nbsp;");
    printRevLine("[ABOUT]");
    printLine("OLLIE is 100% DIY Forever! I make games, art, music- any digital media you can think of!");
    printLine("Got a question or just wanna say hi? HML here:");
    printLink("[✎] hello@olliesharddrive.com", "mailto:hello@olliesharddrive.com");
    printLine("Also, consider supporting me on Ko-fi!");
    printLink("[⮕] Ko-fi", "https://ko-fi.com/W7W0197OHU");
    
    printLine("&nbsp;");
  }
  else if (x.trim() == 'gm') {

    mode = "terminal";
    printLine("Good Morning!");
  }
  else if (x.trim() == 'list' || x.trim() == 'all') {

    mode = "terminal";
    printLine("&nbsp;");
    printLine("This is a list of every project I've worked on.");
    printRevLine("[NAME]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TYPE]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[COMPLETION DATE]");
    printLine("Iterum ................. ALBUM ...... 04.09.25");
    printLine("lostmedia1 ............. ALBUM ...... 03.09.25");
    printLine("DOTO ................... GAME ....... __.__.__ (I)");
    printLine("Untitled Text Editor* .. APP ........ 02.18.25 (U)");
    printLine("SynthCircuit ........... APP ........ 02.09.25");
    printLine("GATO LOCO .............. GAME ....... __.__.__ (I)");
    printLine("GATO LOCO (JAM)......... GAME ....... 02.02.25");
    printLine("Just Some Dice ......... APP ........ 12.09.24");
    printLine("Wordgame* .............. GAME ....... 12.06.24 (U)");
    printLine("MULTICART .............. APP ........ __.__.__ (I)");
    printLine("TOMO RANA .............. GAME ....... __.__.__ (I)");
    printLine("DOWNIT ................. GAME ....... 10.07.24");
    printLine("GRPHG .................. ALBUM ...... 03.22.24");
    printLine("NAHWC .................. GAME ....... 02.09.24");
    printLine("HIT! ................... GAME ....... 11.26.23 (U)");
    printLine("d.land ost ............. ALBUM ...... 10.19.23");
    printLine("SUPER PAPI WORLD ....... ALBUM ...... 10.09.23");
    printLine("Sampler* ............... APP ........ 07.13.23");
    printLine("PAPI DEMO* ............. GAME ....... 06.22.23 (U)");
    printLine("Online Topdown Test* ... GAME ....... 06.16.23 (I)");
    printLine("LIGHTLESS, WEIGHTLESS .. ALBUM ...... 05.04.23");
    printLine("Teeny Dungeon .......... GAME ....... 04.07.23");
    printLine("ONE MORE BLOCK ......... ALBUM ...... 08.12.22");
    printLine("VOLUME GAMMA ........... ALBUM ...... 04.27.22");
    printLine("Picocraft .............. GAME ....... 11.17.21");
    printLine("Sexkick ................ GAME ....... 09.11.21");
    printLine("1000 mi Drive .......... GAME ....... 07.06.20");
    printLine("Dynasaur ............... GAME ....... 06.27.20");
    printLine("Redrock ................ GAME ....... 11.14.18");
    printLine("(U) Unreleased / (I) Incomplete / *Name TBD");

    printLine("&nbsp;");
  }
  else if (x.trim() == 'games' || x.trim() == 'game') {
    mode = "terminal";
    printLine("&nbsp;");
    printLine("Use &quot;game [-id]&quot; to view more info about each game!");
    printLine("(ex: &quot;game -2&quot; lists game 2's info)");
     
    printRevLine("[ID]&nbsp;&nbsp;&nbsp;[GAME]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[DATE]");
    printLine("8 .... GATO LOCO ....... 02.02.25");
    printLine("7 .... DOWNIT .......... 10.07.24");
    printLine("6 .... NAHWC ........... 02.09.24");
    printLine("5 .... Teeny Dungeon ... 04.07.23");
    printLine("4 .... Picocraft ....... 11.17.21");
    printLine("3 .... Sexkick ......... 09.11.21");
    printLine("2 .... 1000 mi Drive ... 07.06.20");
    printLine("1 .... Redrock ......... 11.14.18");
    printLine("&nbsp;");
  }
  else if (x.trim() == 'games -all' || x.trim() == 'games all' || x.trim() == 'game -all' || x.trim() == 'game all') {

    mode = "terminal";
    printLine("&nbsp;");
    printGame("gato");
    printGame("downit");
    printGame("nahwc");
    printGame("teeny");
    printGame("picocraft");
    printGame("sexkick");
    printGame("1000");
    printGame("redrock");
    printLine("&nbsp;");
  }
  else if (x.trim() == 'games -1' || x.trim() == 'games 1' || x.trim() == 'game -1' || x.trim() == 'game 1' || x.trim() == 'redrock') {

    mode = "terminal";
    printLine("&nbsp;");
    printGame("redrock");
    printLine("&nbsp;");
  }
  else if (x.trim() == 'games -2' || x.trim() == 'games 2' || x.trim() == 'game -2' || x.trim() == 'game 2' || x.trim() == '1000 mi drive') {

    mode = "terminal";
    printLine("&nbsp;");
    printGame("1000");
    printLine("&nbsp;");
  }
  else if (x.trim() == 'games -3' || x.trim() == 'games 3' || x.trim() == 'game -3' || x.trim() == 'game 3' || x.trim() == 'sexkick') {
    mode = "terminal";
    printLine("&nbsp;");
    printGame("sexkick");
    printLine("&nbsp;");
  }
  else if (x.trim() == 'games -4' || x.trim() == 'games 4' || x.trim() == 'game -4' || x.trim() == 'game 4' || x.trim() == 'picocraft') {
    mode = "terminal";
    printLine("&nbsp;");
    printGame("picocraft");
    printLine("&nbsp;");
  }
  else if (x.trim() == 'games -5' || x.trim() == 'games 5' || x.trim() == 'game -5' || x.trim() == 'game 5' || x.trim() == 'teeny dungeon') {
    mode = "terminal";
    printLine("&nbsp;");
    printGame("teeny");
    printLine("&nbsp;");
  }
  else if (x.trim() == 'games -6' || x.trim() == 'games 6' || x.trim() == 'game -6' || x.trim() == 'game 6' || x.trim() == 'nahwc') {
    mode = "terminal";
    printLine("&nbsp;");
    printGame("nahwc");
    printLine("&nbsp;");
  }
  else if (x.trim() == 'games -7' || x.trim() == 'games 7' || x.trim() == 'game -7' || x.trim() == 'game 7' || x.trim() == 'downit') {
    mode = "terminal";
    printLine("&nbsp;");
    printGame("downit");
    printLine("&nbsp;");
  }
  else if (x.trim() == 'games -8' || x.trim() == 'games 8' || x.trim() == 'game -8' || x.trim() == 'game 8' || x.trim() == 'gato loco') {
    mode = "terminal";
    printLine("&nbsp;");
    printGame("gato");
    printLine("&nbsp;");
  }
  
  else if (x.trim() == 'clear' || x.trim() == 'cls') {

    mode = "terminal";
    document.getElementById("terminal-output").innerHTML = "";
    printLine("&nbsp;");
  }
  else if (x.trim() == 'date') {

    mode = "terminal";
    printLine(date.toDateString());
  }
  else if (x.trim() == 'bg') {
    mode = "terminal";
    if (bg == "on") {
      printLine("Background off");
      bg = "off";
      document.getElementById("backtext").style.visibility = "hidden";
    } else {
      printLine("Background on");
      bg = "on";
      document.getElementById("backtext").style.visibility = "visible";
    }
  }
  else if (x.trim() == 'hello' || x.trim() == 'hi') {

    mode = "terminal";
    printLine("Hello there!");
  }
  else if (x.trim() == 'phil' || x.trim() == 'Phil') {

    mode = "terminal";
    printLine("Andrew 👎");
  }
  else if (x.trim() == 'ollie' || x.trim() == 'Ollie' || x.trim() == 'OLLIE') {

    mode = "terminal";
    printLine("That's my name, don't wear it out!");
  }
  else if (x.trim() == 'ollies hard drive' || x.trim() == 'olliesharddrive' || x.trim() == 'olliesharddrive.com' || x.trim() == "ollie's hard drive") {

    mode = "terminal";
    printLine("That's where you are right now!");
  }
  else if (x.trim() == 'meow') {

    mode = "terminal";
    printLine(":3");
  }
  else if (x.trim() == 'easteregg' || x.trim() == 'secret' || x.trim() == 'mocha') {

    mode = "terminal";
    printLine("You found a secret!");
  }
  else if (x.trim() == 'exit' || x.trim() == 'logout') {

    mode = "exit";
    printLine("Would you like to exit? (y/n)");
  }
  else if (x.trim() == 'reload' || x.trim() == 'refresh') {

    mode = "reload";
    printLine("Would you like to reload the page? (y/n)");
  }
  else if (x.trim() == '') {

    mode = "terminal";
  }
  else {

    mode = "terminal";
    printLine("command not found: " + x);
    
  }
}

function printLine(line) {
  const para = document.createElement("p");
  para.innerHTML = line;
  // Append to another element:
  document.getElementById("terminal-output").appendChild(para);
}

function printRevLine(line) {
const para = document.createElement("p");
para.innerHTML = line;
para.id = "reverse";
// Append to another element:
document.getElementById("terminal-output").appendChild(para);
}

function printRedLine(line) {
  const para = document.createElement("p");
  para.innerHTML = line;
  para.id = "red";
  // Append to another element:
  document.getElementById("terminal-output").appendChild(para);
  }

function printLink(line, link) {
  const para = document.createElement("a");
  var linkText = document.createTextNode(line);
  para.appendChild(linkText);
  para.title = line;
  para.target = "_blank";
  para.href = link;

  // Append to another element:
  document.getElementById("terminal-output").appendChild(para);

  var br = document.createElement("br");
  document.getElementById("terminal-output").appendChild(br);
}

function getFirstWord(str) {
        let spaceIndex = str.indexOf(' ');
        return spaceIndex === -1 ? str : str.substring(0, spaceIndex);
 }


//LOGIN PAGE
printRevLine("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
printRevLine("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;o&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
printRevLine("&nbsp;__&nbsp;&nbsp;|&nbsp;|&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;,&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__,&nbsp;&nbsp;&nbsp;,_&nbsp;&nbsp;&nbsp;&nbsp;__|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__|&nbsp;&nbsp;&nbsp;,_&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;");
printRevLine("/&nbsp;&nbsp;&bsol;_|/&nbsp;&nbsp;|/&nbsp;&nbsp;|&nbsp;&nbsp;|/&nbsp;&nbsp;/&nbsp;&bsol;_&nbsp;&nbsp;|/&nbsp;&bsol;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;|&nbsp;&nbsp;/&nbsp;&nbsp;|&nbsp;&nbsp;/&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;|&nbsp;&nbsp;/&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;|&nbsp;&nbsp;|_|/&nbsp;&nbsp;");
printRevLine("&bsol;__/&nbsp;|__/|__/|_/|__/&nbsp;&bsol;/&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;|_/&bsol;_/|_/&nbsp;&nbsp;&nbsp;|_/&bsol;_/|_/&nbsp;&nbsp;&bsol;_/|_/&nbsp;&nbsp;&nbsp;|_/|_/&nbsp;&bsol;/&nbsp;&nbsp;|__/");



let a = [
  "awesomesauce",
  "way cool",
  "stellar",
  "incredible",
  "gas-powered",
  "killin it",
  "makn stuff",
  "keepn it cool",
  "gettin jiggy",
  "lookn sexy",
  "makn it look good",
  "wowing the crowd",
  "takn it easy",
  "going hard",

  "making games",
  "cracking jokes",
  "making art",
  "making music",
  "making noise",

  "dodging the draft",
  "avoiding taxes",
  "commiting crimes",
  "jaywalking",

  "being a liability",
  "ignoring tpyos",
  "stealing code",
  "stealing samples",
  "pirating adobe",

  "killing creepers",
  "one-tricking venture",
  "maining ice climbers",
  "maining isabelle",
  ];
  let b = [
  "the 90s",
  "the 80s",
  "the 70s",
  "the 60s",
  "the 50s",
  "the 2000s",
  "birth",
  "1970",
  "1971",
  "1972",
  "1973",
  "1974",
  "1975",
  "1976",
  "1977",
  "1978",
  "1979",
  "1980",
  "1981",
  "1982",
  "1983",
  "1984",
  "1985",
  "1986",
  "1987",
  "1988",
  "1989",
  "1990",
  "1991",
  "1992",
  "1993",
  "1994",
  "1995",
  "1996",
  "1997",
  "1998",
  "1999",
  "199X",
  "Y2K",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "20XX",
  ];
  let i = Math.floor(Math.random() * a.length);
  let r = a[i];
  let j = Math.floor(Math.random() * b.length);
  let s = b[j];
  console.log(r);
  console.log(s);

printRevLine(r + " since " + s + "! // Website ver 0.3 // (c) olliesharddrive");
printLine("&nbsp;");
printLine("Logged in as usr" + guestNum + " on " + date.toDateString());
printLine("Welcome, &quot;usr" + guestNum + "&quot;!");
printLine("For help using this site, please type &quothelp&quot");
//printLine("To toggle the background on/off, type &quotbg&quot");
printLine("&nbsp;");

function printGame(g) {
  if (g == "redrock") {
    printRevLine("[REDROCK] 11.14.18");
    printLine("By Will, Ian, and Grey");
    printLine("We made / submitted Redrock to the metroidvania month 2 game jam as a school project. We didn't do too hot but this was our first experience making a game. We learned the labor that goes into making a game from start to finish and had a ton of fun doing it!");
    printLink("[⬇] redrock_win.zip", "games/redrock/redrock_win.zip");
    printLink("[⬇] redrock_mac.zip", "games/redrock/redrock_mac.zip");
    printLink("[⬇] redrock_linux.zip", "games/redrock/redrock_linux.zip");
  }
  else if (g == "1000") {
    printRevLine("[1000 MI DRIVE] 07.06.20");
    printLine("Desert Bus remade in PICO8");
    printLine("This &quot;game&quot; is mostly a joke. It's based on the Desert Bus game from Penn & Teller's Smoke and Mirrors where you have to drive a bus down a straight highway for 8 hours real time. It's not fun so don't play it. If you can beat it, send me a screenshot.");
    printLink("[⬇] 1000midrive_win.zip", "games/1000midrive/1000midrive_win.zip");
    printLink("[⬇] 1000midrive_mac.zip", "games/1000midrive/1000midrive_mac.zip");
    printLink("[⬇] 1000midrive_linux.zip", "games/1000midrive/1000midrive_linux.zip");
  }
  else if (g == "sexkick") {
    printRevLine("[SEXKICK] 09.11.21");
    printLine("Not the worst fighting game ever made!");
    printLine("I made this as I was starting to get familiar with PICO8. The characters are inspired by the ones from the Jelpi demo included with the software.");
    printLine("Sexkick is a pretty cute, simple game. It's also really fun with friends!");
    printLink("[⬇] sexkick_win.zip", "games/sexkick/sexkick_win.zip");
    printLink("[⬇] sexkick_mac.zip", "games/sexkick/sexkick_mac.zip");
    printLink("[⬇] sexkick_linux.zip", "games/sexkick/sexkick_linux.zip");
  }
  else if (g == "picocraft") {
    printRevLine("[PICOCRAFT] 11.17.21");
    printLine("2D Minecraft clone made in PICO8");
    printLine("I made this purely to see if I could. After making my last game Sexkick, I was significantly more confident in my ability to make games with PICO8!");
    printLine("I made this is before I learned about drawing to different screens so it's horribly unoptimized. It's a cute toy to mess around with though :)");
    printLink("[⬇] picocraft_win.zip", "games/picocraft/picocraft_win.zip");
    printLink("[⬇] picocraft_mac.zip", "games/picocraft/picocraft_mac.zip");
    printLink("[⬇] picocraft_linux.zip", "games/picocraft/picocraft_linux.zip");
  }
  else if (g == "teeny") {
    printRevLine("[TEENY DUNGEON] 04.07.23");
    printLine("Tiny roguelike made in LÖVE");
    printLine("I made this in about a week just to see if I could! I was inspired by the art style of Bitsy and The Tower, which are both very similar. There's something about minimalism in pixel art that scratches an itch in my brain.");
    printLink("[⮕] teeny dungeon iOS", "https://apps.apple.com/us/app/teeny-dungeon/id6447354230");
  }
  else if (g == "nahwc") {
    printRevLine("[NOT ALL HEROES WEAR CAPES] 02.09.24");
    printLine("UGA Hacks 9 best solo project winner!");
    printLine("I submitted this to the UGA Hacks 9 hackathon. The theme was &quotbe the hero of your own story&quot. NAHWC is a fighting game about modern day heroes!");
    printLink("[⬇] nahwc.love", "https://olliesharddrive.com/games/nahwc/nahwc.love");
  }
  else if (g == "downit") {
    printRevLine("[DOWNIT] 10.07.24");
    printLine("Teeny Dungeon's spiritual successor");
    printLine("I wanted to make a more polished version of Teeny Dungeon because I thought it needed a couple changes. The list of changes I wanted to add grew way faster than I thought, so I decided to give the game a complete rewrite! I designed everything from the ground up, spending months to create a complete, cohesive project. The app got pretty big on release, ranking within the top 10 of Apple's paid apps leaderboard. It even got a Facebook post on the official App Store's Facebook page!");
    printLine("It was really cool to have such positive feedback on a project I put lots of time into!");
    printLink("[⮕] DOWNIT iOS", "https://apps.apple.com/us/app/downit/id6736586174");
  }
  else if (g == "gato") {
    printRevLine("[GATO LOCO] 02.02.25");
    printLine("Explosions everywhere!");
    printLine("I submitted this game to the BIGMODE 2025 game jam. The theme was &quotpower&quot so I made a little arcade action-platformer where the player has to collect energy bolts!");
    printLine("I learned a ton about platformer game collision/smooth movement!");
    printLink("[⮕] GATO LOCO itch.io", "https://olliesharddrive.itch.io/gato-loco");
  }


}
