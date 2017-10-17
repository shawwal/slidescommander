  if (annyang) {
    var openGoogle = function() {
        window.open(
        'https://www.google.com/', 
        '_blank' // <- This is what makes it open in a new window.
    );
    }

    var pageTo = function(tag) {
      if (isNaN(tag)){
          alert( tag + ' is not a page number.')
      }else {
        Reveal.slide(tag)
      }

    }

    var next = function() {
      Reveal.next();
    }
    var back = function() {
      Reveal.prev(); 
    }


    var go = function(tag) {
      switch (tag) {
      
      case 'up': Reveal.up();
      break;
       
      case 'down':Reveal.down();
      break;

      case 'right':Reveal.right();
      break;

      case 'left':Reveal.left();
      break;
    }

    }

    var blackTheme = function() {
      document.getElementById('theme').setAttribute('href','css/theme/black.css');
    }

    var whiteTheme = function() {
      document.getElementById('theme').setAttribute('href','css/theme/white.css');
    }

    var leagueTheme = function() {
      document.getElementById('theme').setAttribute('href','css/theme/league.css');
    }

    var skyTheme = function() {
      document.getElementById('theme').setAttribute('href','css/theme/sky.css');
    }

    var beigeTheme = function() {
      document.getElementById('theme').setAttribute('href','css/theme/beige.css');
    }

    var simpleTheme = function() {
      document.getElementById('theme').setAttribute('href','css/theme/simple.css');
    }

    var serifTheme = function() {
      document.getElementById('theme').setAttribute('href','css/theme/serif.css');
    }

    var bloodTheme = function() {
      document.getElementById('theme').setAttribute('href','css/theme/blood.css');
    }

    var nightTheme = function() {
      document.getElementById('theme').setAttribute('href','css/theme/night.css');
    }

    var moonTheme = function() {
      document.getElementById('theme').setAttribute('href','css/theme/moon.css');
    }

    var solarizedTheme = function() {
      document.getElementById('theme').setAttribute('href','css/theme/solarized.css');
    }

    
    var goTo = function(tag) {
      //window.location.href = ''+tag;
      window.open(
        'http://'+tag,
        '_blank' // <- This is what makes it open in a new window.
    );
  }
  

    var searchGoogle = function(tag) {
      //window.location.href = ''+tag;
      window.open(
        'https://www.google.com/?gws_rd=cr&ei=mwy3VpDyG4G1uQS45omoBQ&fg=1#safe=off&q='+tag,
        '_blank' // <- This is what makes it open in a new window.
    );

    }

    // define our commands.
    // * The key is the phrase you want your users to say.
    // * The value is the action to do.
    //   You can pass a function, a function name (as a string),
    //   or write your function as part of the commands object.
    var commands = {
    'open google':  openGoogle,
      'search for *search': searchGoogle,
      'go to *search': goTo,
      'go *search': go,  
      'White': whiteTheme,
      'Page *search' : pageTo,
      'Sky' : skyTheme,
      'League': leagueTheme,
      'Black': blackTheme,
      'Moon' : moonTheme,
      'Brown' : beigeTheme,
      'Simple' : simpleTheme,
      'Gray' : serifTheme,
      'Blood' : bloodTheme,
      'Night' : nightTheme,
      'Pink' : solarizedTheme,
      'next': next,
      'back': back,
      'close presentation': close,
    };

    // OPTIONAL: activate debug mode for detailed logging in the console
    annyang.debug();
    // Add voice commands to respond to
    annyang.addCommands(commands);
    
    // OPTIONAL: Set a language for speech recognition (defaults to English)
    // For a full list of language codes, see the documentation:
    // https://github.com/TalAter/annyang/blob/master/docs/README.md#languages
    annyang.setLanguage('en');

    // Start listening.
    //You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  } else {
    $(document).ready(function() {
      $('#unsupported').fadeIn('fast');
    });
  }

  var scrollTo = function(identifier, speed) {
    $('html, body').animate({
        scrollTop: $(identifier).offset().top
    }, speed || 1000);
  }
  