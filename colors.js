function daynightcolor(color){
  var daynight = document.querySelector('#art');
  self.color=color;
  daynight.style.color=self.color;
}


function listColor(color) {
  self.color=color;
  var i=0;
  var arrayint = document.querySelectorAll('a.목록들');
  while(i<arrayint.length){
    arrayint[i].style.color = self.color;
    i=i+1;
  }
}

function night_dayButton(self){

    var daynight = document.querySelector('#art');

  if(self.value === '야간모드'){
     daynight.style.backgroundImage='linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.85),rgba(0, 0, 0, 0.80) ,rgba(0, 0, 0, 0.93) ,rgba(0, 0, 0, 0.93) )';
     daynightcolor('white');
     self.value = '주간모드';
     listColor('powderblue');

  } else {
  daynight.style.backgroundImage='linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.02),rgba(0, 0, 0, 0.05),rgba(0, 0, 0, 0.10) ,rgba(0, 0, 0, 0.93) ,rgba(0, 0, 0, 0.93) )';
      daynightcolor('black');
        self.value = '야간모드';
          listColor('yellow');


  }
}
