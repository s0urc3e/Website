$(()=>{
  particlesJS('particles-js', {
      "fps_limit": 1,
      "particles": {
        "number": {
          "value": 160,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 4,
            "size_min": 0.3,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 600
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 250,
            "size": 0,
            "duration": 2,
            "opacity": 0,
            "speed": 3
          },
          "repulse": {
            "distance": 400,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });

    // On Search
    $('.search-inputs').focus(function(){
      $('.title-section').addClass('activate-search');
    });
    
    // On Search
    $('.search-inputs').blur(function(){
      $('.title-section').removeClass('activate-search');
    });
    
});

// HTML NAME
var script_name = window.location.pathname.substring(window.location.pathname.lastIndexOf('/')+1);

/*-- ---------==========   FIREBASE INITIALIZE   ==========--------- */
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkfVVEBhQ29K7ephl5u5z_xJ1AH6eK6JY",
  authDomain: "darkthunder99.firebaseapp.com",
  projectId: "darkthunder99",
  storageBucket: "darkthunder99.appspot.com",
  messagingSenderId: "746771223924",
  appId: "1:746771223924:web:fcfce5c98931c781b9c821",
  measurementId: "G-GMHJBXQJ0W"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Initialize Firebase FireStore
var db = firebase.firestore();
firebase.firestore().enablePersistence()
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
        //   alert(err.code);
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
        //   alert(err.code);
      }
  });
// Subsequent queries will use persistence, if it was enabled successfully



function search_project(e)
{
  if (e.keyCode == 13)
  {
    alert('We\'re still working with the search function😊');
  }
}

function search_article(e)
{
  if (e.keyCode == 13)
  {
    alert('We\'re still working with the search function😊');
  }
}

function toggle_sidenav()
{
  $('.sidenav').toggleClass('active');
  $('.sidenav-activate').toggleClass('active');
  $('.indicator').toggleClass('hide');
}

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = month + ' ' + date + ' ' + year;
  return time;
}

function convertToSlug(Text)
{
    return Text
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-')
        ;
}
