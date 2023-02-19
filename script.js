

  // Your whitelist of allowed IP addresses - ADIM + ALL USERS
  var whitelist = ["87.149.156.70", "192.168.1.101", "192.168.1.102"];

  // Get the user's IP address
  fetch("https://api.ipify.org?format=json")
  .then(response => response.json())
  .then(data => {
    // Check if the user's IP address is in the whitelist
    if (!whitelist.includes(data.ip)) {
      // If the IP address is not in the whitelist, block access
      window.location.replace("https://httpstatusdogs.com/403-forbidden");
    }
  });

  // disable right click
  document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
  });
  
  function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // define the list of predefined users and their corresponding links
    var userLinks = {
      "BlastoiseBattler": "course_list/course_list_BlastoiseBattler.html",
      "BulbasaurBandit": "course_list/course_list_BulbasaurBandit.html",
      "CharizardChamp": "course_list/course_list_CharizardChamp.html",
      "DragoniteDynamo": "course_list/course_list_DragoniteDynamo.html",
      "EeveeExplorer": "course_list/course_list_EeveeExplorer.html",
      "EspeonEnigma": "course_list/course_list_EspeonEnigma.html",
      "GyaradosGladiator": "course_list/course_list_GyaradosGladiator.html",
      "JigglypuffJester": "course_list/course_list_JigglypuffJester.htmll",
      "LaprasLover": "course_list/course_list_LaprasLover.html",
      "LucarioLancer": "course_list/course_list_LucarioLancer.html",
      "MewMagician": "course_list/course_list_MewMagician.html",
      "MewtwoMaster": "course_list/course_list_MewtwoMaster.html",
      "PikachuPilot": "course_list/course_list_PikachuPilot.html",
      "RaichuRanger": "course_list/course_list_RaichuRanger.html",
      "SnivySneaker": "course_list/course_list_SnivySneaker.html",
      "SnorlaxSnoozer": "course_list/course_list_SnorlaxSnoozer.html",
      "SquirtleSurfer": "course_list/course_list_SquirtleSurfer.html",
      "TyphlosionTornado": "course_list/course_list_TyphlosionTornado.html",
      "UmbreonUnderdog": "course_list/course_list_UmbreonUnderdog.html",
      "VaporeonVanguard": "course_list/course_list_VaporeonVanguard.html"
    };
  
    // define the list of predefined users with their authentication details
    var users = [
      { username: "BlastoiseBattler", password: "ShellSmash33", ip: "87.149.156.70" },
      { username: "BulbasaurBandit", password: "VineWhip99", ip: ["87.149.156.70", "65.32.56.00"] },
      { username: "CharizardChamp", password: "FlameThrower88", ip: "84.25.35.33" },
      { username: "DragoniteDynamo", password: "WingAttack88", ip: "87.149.156.70" },
      { username: "EeveeExplorer", password: "Evolution22", ip: "84.25.35.33" },
      { username: "EspeonEnigma", password: "MorningSun66", ip: "87.149.156.70" },
      { username: "GyaradosGladiator", password: "HydroPump77", ip: "84.25.35.33" },
      { username: "JigglypuffJester", password: "SingAlong44", ip: "87.149.156.70" },
      { username: "LaprasLover", password: "SurfsUp11", ip: "84.25.35.33" },
      { username: "LucarioLancer", password: "AuraSphere55", ip: "87.149.156.70" },
      { username: "MewMagician", password: "AuraSphere25", ip: "84.25.35.33" },
      { username: "MewtwoMaster", password: "PsychicPower55", ip: "87.149.156.70" },
      { username: "PikachuPilot", password: "Thunderbolt25", ip: "84.25.35.33" },
      { username: "RaichuRanger", password: "ThunderShock22", ip: "87.149.156.70" },
      { username: "SnivySneaker", password: "LeafTornado11", ip: "84.25.35.33" },
      { username: "SnorlaxSnoozer", password: "DreamEater66", ip: "84.25.35.33" },
      { username: "SquirtleSurfer", password: "WaterGun11", ip: "87.149.156.70" },
      { username: "TyphlosionTornado", password: "FlameWheel77", ip: "84.25.35.33" },
      { username: "UmbreonUnderdog", password: "DarkPulse99", ip: "87.149.156.70" },
      { username: "VaporeonVanguard", password: "AquaRing44", ip: "84.25.35.33" }
    ];
  
    // check if the username and password match any of the predefined users
    var authenticatedUser = users.find(function(user) {
      return user.username === username && user.password === password;
    });
  
    // check if the user's IP address matches their predefined IP address
    if (authenticatedUser && authenticatedUser.ip === sessionStorage.getItem("ip")) {
      // set the authenticated flag in session storage
      sessionStorage.setItem("authenticated", "true");
  
      // redirect the user to their corresponding page
      window.location.href = userLinks[username];
    } else {
      alert("Access denied");
    }
  }
  
  // make a request to get the IP address and store it in session storage
  fetch("https://api.ipify.org/?format=json")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      sessionStorage.setItem("ip", data.ip);
    })
    .catch(function(error) {
      console.error(error);
    });
  
