<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="description" content="Free and fun for all">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Drinking Game</title>
    <link rel="stylesheet" href="style.css">
    <?php include 'includes/head/styleLinks.php';?>
  </head>
  <body>
    <?php include 'includes/backgroundCustom/backgroundCustom1.php'?>
    <div class="titleScreen" id="titleScreen">
      <div class="titleScreenWrapper">
        <div class="titleScreenLogoWrapper">
          <img class="titleScreenLogo1" src="svgs/beer.svg"><img>
          <img class="titleScreenLogo2" src="svgs/beer.svg"><img>
        </div>
        <div class="titleScreenTitleWrapper">
          <div class="titleScreenTitle1">The <b>Drinking</b></div>
          <div class="titleScreenTitle2">Game</div>
        </div>
      </div>
      <div class="titleScreenButton" id="titleScreenButton">Click Here To Begin</div>
    </div>
    <div class="termsOfUse" id="termsOfUse">
      <div class="termsOfUseBox">
        <div class="termsOfUseBoxTitle">Let's get this outta the way</div>
        <div class="termsOfUseBox1">
          <div class="termsOfUseBox1LogoWrapper"><img class="termsOfUseBox1Logo" src="svgs/18.svg"></img></div>
          <div class="termsOfUseBox1Title">Everyone playing is 18+</div>
        </div>
        <div class="termsOfUseBox2">
          <div class="termsOfUseBox2LogoWrapper"><img class="termsOfUseBox2Logo" src="svgs/beer.svg"></img></div>
          <div class="termsOfUseBox2Title">Everyone playing will drink responsibly</div>
        </div>
        <div class="termsOfUseBox3">
          <div class="termsOfUseBox3LogoWrapper"><img class="termsOfUseBox3Logo" src="svgs/tick.svg"></img></div>
          <div class="termsOfUseBox3Title">Everyone agrees to our <b style="color: var(--main-theme-color);">terms of use</b></div>
        </div>
        <div class="termsOfUseBoxButton" id="termsOfUseBoxButton">Agree</div>
      </div>
    </div>

    <div class="gameSet" id="gameSet">
      <div class="gameSetDisplayWrapper">
        <div class="gameSetDeckPrevious"></div>
        <div class="gameSetDeckDisplay">
          <div class="gameSetDeckTitle">
            <div class="gameSetDeckTitle2" id="classicCards1">Classic Cards</div>
            <div class="gameSetDeckTitle2" id="generalKnowledge1">General Knowledge</div>
            <div class="gameSetDeckTitle2" id="clowningAround1">Clowning Around</div>
            <div class="gameSetDeckTitle2" id="justChill1">Just Chill</div>
            <div class="gameSetDeckTitle2" id="newFaces1">New Faces</div>
            <div class="gameSetDeckTitle2" id="fuckYall1">Fuck Y'all</div>
            <div class="gameSetDeckTitle2" id="naughty1">Naughty</div>
            <div class="gameSetDeckTitle2" id="athletes1">Athletes</div>
          </div>
          <div class="gameSetDeckLogo">
            <img class="gameSetDeckLogo2" id="classicCards2"></img>
            <img class="gameSetDeckLogo2" id="generalKnowledge2"></img>
            <img class="gameSetDeckLogo2" id="clowningAround2"></img>
            <img class="gameSetDeckLogo2" id="justChill2"></img>
            <img class="gameSetDeckLogo2" id="newFaces2"></img>
            <img class="gameSetDeckLogo2" id="fuckYall2"></img>
            <img class="gameSetDeckLogo2" id="naughty2"></img>
            <img class="gameSetDeckLogo2" id="athletes2"></img>
          </div>
        </div>
        <div class="gameSetDeckNext"></div>
      </div>
      <div class="gameSetInstructionsBox">
        <div class="gameSetInstructionsBoxText"></div>
        <div class="gameSetButton"></div>
      </div>
    </div>

    <div class="addPlayers" id="addPlayers">
    </div>

    <div class="game" id="game">
    </div>

    <div class="#"></div>

    <script src="script.js"></script>
    <?php include 'includes/scripts/scriptLinks.php';?>
  </body>
</html>
