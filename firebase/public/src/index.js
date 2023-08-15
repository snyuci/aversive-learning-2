import './phaser.min.js';
import GameStart from './scenes/GameStart.js';
import GameScene from './scenes/GameScene.js';
import GameOver from './scenes/GameOver.js';
import EndScene from './scenes/EndScene.js';
import AvoidanceStart from './scenes/AvoidanceStart.js';
import AvoidanceScene from './scenes/AvoidanceScene.js';
import NextPhase from './scenes/NextPhase.js';

var game = new GameScene('GameScene');
var avoidance = new AvoidanceScene('AvoidanceScene');
var gameover = new GameOver("GameOver");
var nextphase = new NextPhase("NextPhase");

let config = {
    type: Phaser.AUTO,
    parent: 'consent',
    width: 800,
    height: 600,
    scene: [
        GameStart,
        game,
        gameover,
        nextphase,
        AvoidanceStart,
        avoidance,
        EndScene
    ]
};

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return false;
}

var check_consent = function (elem) {
    if ($('#consent_checkbox1').is(':checked') && $('#consent_checkbox2').is(':checked') &&
        $('#consent_checkbox3').is(':checked') && $('#consent_checkbox4').is(':checked') &&
        $('#consent_checkbox5').is(':checked') && $('#consent_checkbox6').is(':checked') &&
        $('#consent_checkbox7').is(':checked')) {

        document.getElementById('consent').innerHTML = "";
        window.scrollTo(0, 0);

        // Rest of your code

        return true;
    } else {
        alert("Unfortunately you will not be able to participate in this research study if you do not consent to the above. Thank you for your time.");
        return false;
    }
};

document.getElementById('header_title').innerHTML = "Spaceship game";
document.getElementById('consent').innerHTML = "<p><b>Consent</b></p>\n" +
    "<p>\n" +
    "<label class=\"container\">I agree that the research project named above has been explained to me to my\n" +
    "satisfaction and I agree to take part in this study\n" +
    "<input type=\"checkbox\" id=\"consent_checkbox7\">\n" +
    "<span class=\"checkmark\"></span>\n" +
    "</label>\n" +
    "<br><br>\n" +
    "<button type=\"button\" id=\"start\" class=\"submit_button\">Start Experiment</button>\n" +
    "<br><br>";

document.getElementById("start").onclick = check_consent;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    alert("Sorry, this experiment does not work on mobile devices");
    document.getElementById('consent').innerHTML = "";
}
