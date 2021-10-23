  let navbar = document.querySelector(".navbar");
  let searchBox = document.querySelector(".search-box .bx-search");
  // let searchBoxCancel = document.querySelector(".search-box .bx-x");
  
  searchBox.addEventListener("click", ()=>{
	navbar.classList.toggle("showInput");
	if(navbar.classList.contains("showInput")){
	  searchBox.classList.replace("bx-search" ,"bx-x");
	}else {
	  searchBox.classList.replace("bx-x" ,"bx-search");
	}
  });
  
  // sidebar open close js code
  let navLinks = document.querySelector(".nav-links");
  let menuOpenBtn = document.querySelector(".navbar .bx-menu");
  let menuCloseBtn = document.querySelector(".nav-links .bx-x");
  menuOpenBtn.onclick = function() {
  navLinks.style.left = "0";
  }
  menuCloseBtn.onclick = function() {
  navLinks.style.left = "-100%";
  }
  
  
  // sidebar submenu open close js code
  let htmlcssArrow = document.querySelector(".htmlcss-arrow");
  htmlcssArrow.onclick = function() {
   navLinks.classList.toggle("show1");
  }
  let moreArrow = document.querySelector(".more-arrow");
  moreArrow.onclick = function() {
   navLinks.classList.toggle("show2");
  }
  let jsArrow = document.querySelector(".js-arrow");
  jsArrow.onclick = function() {
   navLinks.classList.toggle("show3");
  }



window.onload = function(){
 
  printTime();
  };
  
  function printTime() {
      var d = new Date();
      var hours = d.getHours();
      var mins = d.getMinutes();
      var secs = d.getSeconds();
      var day = d.getDay();
      var date = d.getDate();
      var month = d.getMonth();
      var year = d.getFullYear();
      
          switch (day){
          
              case 0:
                  day = "Sunday";
                  break;
              case 1:
                  day = "Monday";
                  break;
              case 2:
                  day = "Tuesday";
                  break;
              case 3:
                  day = "Wednesday";
                  break;
              case 4:
                  day = "Thursday";
                  break;
              case 5:
                  day = "Friday";
                  break;
              case 6:
                  day = "Saturday";
                  break;
             }
      
      
          if(hours<10){
              hours = "0" + hours;
          }
          if(mins<10){
              
              mins = "0" + mins;
          }
          if(secs<10){
  
              secs = "0" + secs;
          }
     
     month = month + 1; document.getElementById("test").innerHTML = hours+":"+mins+":"+secs;
  document.getElementById("ttt").innerHTML = day + ", " + date + "." + month + "." + year;
  }
  setInterval(printTime, 1000);




 // const options = {
 //   bottom: '80px', // default: '32px'
 //   right: '20px', // default: '32px'
 //   left: 'unset', // default: 'unset'
 //   time: '0.3s', // default: '0.3s'
 //  / mixColor: '#fff', // default: '#fff'
 ///   backgroundColor: '#fff',  // default: '#fff'
  //  buttonColorDark: '#100f2c',  // default: '#100f2c'
  //  buttonColorLight: '#fff', // default: '#fff'
 // / / saveInCookies: false, // default: true,
 //  / label: '🦉', // default: ''
   // autoMatchOsTheme: true // default: true
  //}
  
 // const darkmode = new Darkmode(options);
  //darkmode.showWidget();

  