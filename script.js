/* Main Script File */
/* Getting Ids - Page Switch */

document.getElementById("titleScreen");
document.getElementById("titleScreenButton");

document.getElementById("termsOfUse");
document.getElementById("termsOfUseBoxButton");

document.getElementById("gameSet");

document.getElementById("addPlayers");

document.getElementById("game");

/* Getting Ids - Deck Browse */
/* title */

document.getElementById("classicCards1");
document.getElementById("generalKnowledge1");
document.getElementById("clowningAround1");
document.getElementById("justChill1");
document.getElementById("newFaces1");
document.getElementById("fuckYall1");
document.getElementById("naughty1");
document.getElementById("athletes1");

/* logo */

document.getElementById("classicCards2");
document.getElementById("generalKnowledge2");
document.getElementById("clowningAround2");
document.getElementById("justChill2");
document.getElementById("newFaces2");
document.getElementById("fuckYall2");
document.getElementById("naughty2");
document.getElementById("athletes2");

/* Page Switch */

var counter = 1;
termsOfUse.classList.add("displayNone");
gameSet.classList.add("displayNone");
addPlayers.classList.add("displayNone");
game.classList.add("displayNone");
document.body.classList.add("bodyThemeMain");

var pageSwitch = function() {
  if (counter == 1) {
    titleScreen.classList.add("displayNone");
    termsOfUse.classList.remove("displayNone");
    document.body.classList.remove("bodyThemeMain");
    document.body.classList.add("bodyThemeSecondary");
    counter += 1;
  } else if (counter == 2) {
    termsOfUse.classList.add("displayNone");
    gameSet.classList.remove("displayNone");
    document.body.classList.remove("bodyThemeSecondary");
    document.body.classList.add("bodyThemeMain");
    counter += 1;
  } else if (counter == 3) {
    gameSet.classList.add("displayNone");
    addPlayers.classList.remove("displayNone");
    counter += 1;
  } else if (counter >= 4) {
    addPlayers.classList.add("displayNone");
    game.classList.remove("displayNone");
    counter += 1;
  };
}

titleScreenButton.addEventListener('click', pageSwitch);
termsOfUseBoxButton.addEventListener('click', pageSwitch);

/* Deck Browse */

var counter2 = 1;
generalKnowledge1.classList.add("displayNone");
clowningAround1.classList.add("displayNone");
justChill1.classList.add("displayNone");
newFaces1.classList.add("displayNone");
fuckYall1.classList.add("displayNone");
naughty1.classList.add("displayNone");
athletes1.classList.add("displayNone");

generalKnowledge2.classList.add("displayNone");
clowningAround2.classList.add("displayNone");
justChill2.classList.add("displayNone");
newFaces2.classList.add("displayNone");
fuckYall2.classList.add("displayNone");
naughty2.classList.add("displayNone");
athletes2.classList.add("displayNone");
