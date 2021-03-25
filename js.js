let blocks = document.querySelectorAll('.block');
let area = document.querySelector('.area');
let duo  = document.querySelector('.duo');
let bot = document.querySelector('.bot');
let help = document.querySelector('.help');
let newGame = document.querySelector('.new');
let boxHelp = document.querySelector('.boxHelp');
let butHelp = document.querySelector('.butHelp');
let box = document.querySelector('.box');
let alone = document.querySelector('.forever_alone');
let megusta = document.querySelector('.megusta');
let poker = document.querySelector('.poker');
let timerBox = document.querySelector('.timerBox');
let x = 0;
let base = ['a', 'a', 'a', 'a', 'a','a', 'a', 'a', 'a', 'a','a', 'a', 'a', 'a', 'a','a', 'a', 'a', 'a', 'a','a', 'a', 'a', 'a', 'a'];
let number = 1;
let index;
let data = [];
let g = 0;
let fact = true;
let check = '';
let checkWinBot = '';
let numb = '';
let kak = '';
let audio = '';
let uf1  = '';
let uf2  = '';
let uf3  = '';
let uf4  = '';
let z = 0;
let x1 = 0;
let timer1 = '';

let record = document.querySelector('.record');
let clean = document.querySelector('.clean');
let a = localStorage.getItem('all');
let b = localStorage.getItem('winPeople');
let c = localStorage.getItem('winBot');
let d = localStorage.getItem('draw');


// НАПИСАТЬ КОД ДЛЯ ПОДВСЕТКИ ВЫИГРЫШНОЙ КОМБИНАЦИИ


function dataF () {
  data[0] = base[0]+base[1]+base[2];
  data[1] = base[1]+base[2]+base[3];
  data[2] = base[2]+base[3]+base[4];
  data[3] = base[5]+base[6]+base[7];
  data[4] = base[6]+base[7]+base[8];
  data[5] = base[7]+base[8]+base[9];
  data[6]= base[10]+base[11]+base[12];
  data[7] = base[11]+base[12]+base[13];
  data[8] = base[12]+base[13]+base[14];
  data[9] = base[15]+base[16]+base[17];
  data[10] = base[16]+base[17]+base[18];
  data[11] = base[17]+base[18]+base[19];
  data[12] = base[20]+base[21]+base[22];
  data[13] = base[21]+base[22]+base[23];
  data[14] = base[22]+base[23]+base[24];
  data[15] = base[0]+base[5]+base[10];
  data[20] = base[5]+base[10]+base[15];
  data[25] = base[10]+base[15]+base[20];
  data[16]= base[1]+base[6]+base[11];
  data[21] = base[6]+base[11]+base[16];
  data[26] = base[11]+base[16]+base[21];
  data[17] = base[2]+base[7]+base[12];
  data[22] = base[7]+base[12]+base[17];
  data[27] = base[12]+base[17]+base[22];
  data[18] = base[3]+base[8]+base[13];
  data[23] = base[8]+base[13]+base[18];
  data[28] = base[13]+base[18]+base[23];
  data[19] = base[4]+base[9]+base[14];
  data[24] = base[9]+base[14]+base[19];
  data[29] = base[14]+base[19]+base[24];
  data[32] = base[2]+base[8]+base[14];
  data[31] = base[1]+base[7]+base[13];
  data[37] = base[7]+base[13]+base[19];
  data[30] = base[0]+base[6]+base[12];
  data[36] = base[6]+base[12]+base[18];
  data[42] = base[12]+base[18]+base[24];
  data[35] = base[5]+base[11]+base[17];
  data[41] = base[11]+base[17]+base[23];
  data[40] = base[10]+base[16]+base[22];
  data[45] = base[2]+base[6]+base[10];
  data[33] = base[3]+base[7]+base[11];
  data[46] = base[7]+base[11]+base[15];
  data[34] = base[4]+base[8]+base[12];
  data[38] = base[8]+base[12]+base[16];
  data[47] = base[12]+base[16]+base[20];
  data[39] = base[9]+base[13]+base[17];
  data[43] = base[13]+base[17]+base[21];
  data[44] = base[14]+base[18]+base[22];
}

function click() {
  audio = new Audio(); // Создаём новый элемент Audio
  audio.src = '10e1076dfd6c701.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}

function error() {
  audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'd93143ec6aa8356.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}

help.addEventListener('click', function(){
  click();
  boxHelp.style.display='flex'
  boxHelp.style.zIndex = '5'
  newGame.style.display='none'
  box.style.display='none'
  megusta.style.zIndex = '0'
  poker.style.zIndex = '1'
  alone.style.zIndex = '2'
});

butHelp.addEventListener('click', function(){
  click();
  boxHelp.style.display='none'
  newGame.style.display='flex'
  box.style.display='flex'
});

newGame.addEventListener('click', function(){
    click();
    location.reload()
});

duo.addEventListener('click', function(){
  click();
  area.innerHTML = "Выберите поле и сделайте ход <br> <br> (Ход буквы К)"
  newGame.style.display = 'block';
  duo.style.display = 'none';
  bot.style.display = 'none';
  megusta.style.display = 'block';
  poker.style.display = 'block';
  duoGame();
  timerBox.style.display = 'block';
  timer1 = setInterval(timerF, 1000);
});

bot.addEventListener('click', function(){
  click();
  area.innerHTML = "Выберите поле и сделайте ход ";
  newGame.style.display = 'block';
  duo.style.display = 'none';
  bot.style.display = 'none';
  alone.style.display = 'block';
  botGame();
  timerBox.style.display = 'block';
  timer1 = setInterval(timerF, 1000);
});


let random = function (min, max) {
      min = Math.ceil(0)
      max = Math.floor(24);
      return Math.floor(Math.random() * (max - min + 1)) + min;
};

function winE () {
  blocks[checkWinBot].style.backgroundColor="#87CEFA";
  blocks[checkWinBot].innerHTML = 'E';
  base[checkWinBot] = '0';
}

function defEFirst (){
  if (numb == '0' || numb == '1' || numb == '2' ){
    checkWinBot = numb;
    winE ();}
  if (numb == '3' || numb == '4' || numb == '5' ){
    checkWinBot = numb+2;
    winE ();}
  if (numb == '6' || numb == '7' || numb == '8' ){
    checkWinBot = numb+4;
    winE ();}  
  if (numb == '9' || numb == '10' || numb == '11' ){
    checkWinBot = numb+6;
    winE ();}
  if (numb == '12' || numb == '13' || numb == '14' ){
    checkWinBot = numb +8;
    winE ();}
  if ( numb == '15' || numb == '16' || numb == '17' ||
      numb == '18' || numb == '19' || numb == '20'  ||
      numb == '21' || numb == '22' || numb == '23'  ||
      numb == '24' || numb == '25' || numb == '26'  ||
      numb == '27' || numb == '28' || numb == '29' ) {
      checkWinBot = numb -15;
      winE ();}
  if (numb == '30' || numb == '31' || numb == '32' ||
      numb == '33' || numb == '34' || numb == '35' ||
      numb == '36' || numb == '37' || numb == '38'  ||
      numb == '39' || numb == '40' || numb == '41'  ||
      numb == '42' || numb == '43' || numb == '44' ) {
      checkWinBot = numb -30;
      winE ();}
    if (numb == 45){
      checkWinBot = numb -43;
      winE ();
    }
    if (numb == 46){
      checkWinBot = numb -39;
      winE ();
    }
    if (numb == 47){
      checkWinBot = numb -35;
      winE ();
    }
}

function defETwo(){
  if (numb == '0' || numb == '1' || numb == '2' ){
    checkWinBot = numb+2;
    winE ();}
  if (numb == '3' || numb == '4' || numb == '5' ){
    checkWinBot = numb+4;
    winE ();}
  if (numb == '6' || numb == '7' || numb == '8' ){
    checkWinBot = numb+6;
    winE ();}  
  if (numb == '9' || numb == '10' || numb == '11' ){
    checkWinBot = numb+8;
    winE ();}
  if (numb == '12' || numb == '13' || numb == '14' ){
    checkWinBot = numb +10;
    winE ();}
  if ( numb == '15' || numb == '16' || numb == '17' ||
      numb == '18' || numb == '19' || numb == '20' ||
      numb == '21' || numb == '22' || numb == '23'  ||
      numb == '24' || numb == '25' || numb == '26'  ||
      numb == '27' || numb == '28' || numb == '29' ) {
      checkWinBot = numb -5;
      winE ();}
  if (numb == '30' || numb == '31' || numb == '32' ||
       numb == '35' || numb == '36' || numb == '37' ||  numb == '40' 
      || numb == '41'  || numb == '42' ) {
      checkWinBot = numb -18;
      winE ();}
  if (numb == '33' || numb == '34' || numb == '38' ||
       numb == '39' || numb == '43' || numb == '44' ) {
      checkWinBot = numb -22;
      winE ();} 
    if (numb == 45){
      checkWinBot = numb -35;
      winE ();
    }
    if (numb == 46){
      checkWinBot = numb -31;
      winE ();
    }
    if (numb == 47){
      checkWinBot = numb -27;
      winE ();
    }
}

function kAk (){
    dataF();   
    if (data.includes('1a1') ) { 
        numb = data.indexOf('1a1');
      if (numb == '0' || numb == '1' || numb == '2' ){
        kak = numb+1;}
      if (numb == '3' || numb == '4' || numb == '5' ){
        kak = numb+3;}
      if (numb == '6' || numb == '7' || numb == '8' ){
        kak = numb+5;}  
      if (numb == '9' || numb == '10' || numb == '11' ){
        kak = numb+7;}
      if (numb == '12' || numb == '13' || numb == '14' ){
        kak = numb +9;}
      if ( numb == '15' || numb == '16' || numb == '17' ||
          numb == '18' || numb == '19' || numb == '20'  ||
          numb == '21' || numb == '22' || numb == '23'  ||
          numb == '24' || numb == '25' || numb == '26'  ||
          numb == '27' || numb == '28' || numb == '29' ) {
          kak = numb -10;}
      if (numb == '30' || numb == '31' || numb == '32' ||
           numb == '35' || numb == '36' || numb == '37' ||  numb == '40' 
          || numb == '41'  || numb == '42' ) {
          kak = numb -24;}
      if (numb == '33' || numb == '34' || numb == '38' ||
           numb == '39' || numb == '43' || numb == '44' ) {
          kak = numb -26;} 
        if (numb == 45){
          kak = numb -39;
        }
        if (numb == 46){
          kak = numb -35;
        }
        if (numb == 47){
          kak = numb -31;
    }
  }
}


function main() {
      if (fact == true) {
        clearInterval(uf4);
        console.log(base);
        uf3 = setInterval(three, 300 , 'Ход компьютера', '');
        // area.innerHTML = "Ход компьютера... ";
        setTimeout( point, (random()+5)*100);
        let a = document.createElement('div');
        a.style.width = '100%';
        a.style.height = '100%';
        a.style.opacity = '0';
        a.style.position = 'absolute';
        document.querySelector('.box').appendChild(a);
        function point(){
          kAk();
          console.log(kak);
          let x = random();
          console.log(x);
         if (data.includes('01a')){
            numb = data.indexOf('01a');
            console.log(numb);
            defETwo();
              dataF();
            if (data.includes('010') &&  data.includes('101')) {
                  blocks[checkWinBot].style.backgroundColor="#FFFF00";
                  area.innerHTML= "Ничья";
		  draw();
		  info();
                  die()
            } else if (data.includes('010')){
                  blocks[checkWinBot].style.backgroundColor="#FFFF00";
                  area.innerHTML= "Победа Компьютера";
		   winBot();
		  info();
                  die()
                }
          }  else if (data.includes('10a') && data.includes('01a')){
            numb = data.indexOf('01a');
            console.log(numb);
             defETwo(); 
              dataF();
            if (data.includes('010') &&  data.includes('101')) {
                blocks[checkWinBot].style.backgroundColor="#FFFF00";
                area.innerHTML= "Ничья";
		draw();   
		info();
                die()
            } else if (data.includes('010')){
                blocks[checkWinBot].style.backgroundColor="#FFFF00";
                area.innerHTML= "Победа Компьютера";
		winBot();
		info();
                die()}          
          } else if (data.includes('a01')){
             clearInterval(uf3);
            numb = data.indexOf('a01')
            console.log(numb);
            defEFirst();
            uf4 = setInterval(three, 300 , 'Ваш ход', '' );
            // area.innerHTML= "Ваш ход..."
          } else if (data.includes('a10')){
            numb = data.indexOf('a10');
            console.log(numb);
             defEFirst();
              dataF();
            if (data.includes('010') &&  data.includes('101')) {
                  blocks[checkWinBot].style.backgroundColor="#FFFF00";
                  area.innerHTML= "Ничья";
		   draw();
		   info();
                  die()
            } else if (data.includes('010')){
                  blocks[checkWinBot].style.backgroundColor="#FFFF00";
                  area.innerHTML= "Победа Компьютера";
                  winBot();
		   info();
                  die() }
          } else if (data.includes('10a')){
             clearInterval(uf3);
            numb = data.indexOf('10a')
            console.log(numb);
            defETwo();
            uf4 = setInterval(three, 300 , 'Ваш ход', '' );
            // area.innerHTML= "Ваш ход..."
          } else if (data.includes('a01') && data.includes('a10')){
            numb = data.indexOf('a10');
            console.log(numb);   
             defEFirst();
              dataF();
            if (data.includes('010') &&  data.includes('101')) {
              blocks[checkWinBot].style.backgroundColor="#FFFF00";
              area.innerHTML= "Ничья";
		draw();
		info();
              die()
            } else if (data.includes('010')){
                blocks[checkWinBot].style.backgroundColor="#FFFF00";
                area.innerHTML= "Победа Компьютера";
                winBot();
		 info();
                die()}
          } else if (base[x] == '1' || base[x] == '0' || x == kak){
              point();
          } else {
            clearInterval(uf3);
            blocks[x].style.backgroundColor="#87CEFA";
            blocks[x].innerHTML = 'E';
            base[x] = '0';
            uf4 = setInterval(three, 300 , 'Ваш ход', '' );
            // area.innerHTML = "Ваш ход... "
            dataF();
              console.log(data);
              if (data.includes('010') &&  data.includes('101')) {
                    blocks[x].style.backgroundColor="#FFFF00";
                    area.innerHTML= "Ничья";
                    draw();
		    info();
                    die()
               } else if (data.includes('010')){
                    blocks[x].style.backgroundColor="#FFFF00";
                    area.innerHTML= "Победа Компьютера";
                    winBot();
		    info();  
                    die()
               } else if ( data.includes('101')){
                    blocks[x].style.backgroundColor="#FFFF00";
                    area.innerHTML= "Победа КЕКаря";
                    winPeople();
		    info();
                    die()
          }; 
       };
       a.remove();
    };
  };
}



function botGame() {
    blocks.forEach (function (item){
      item.addEventListener('click', function () {
		          click();
            if (base[item.id - 1] == '0' || base[item.id - 1] == '1'){
		          error();
              area.innerHTML= 'Выберите свободное поле'
              area.style.color = 'red';
            }
             else { area.style.color = 'black';
                  base[item.id-1] = '1';
              if (number == 1){
                item.innerHTML = 'K';
                item.style.backgroundColor = "#FA8072"
              }
                dataF();
              if (data.includes('010') &&  data.includes('101')) {
                    fact = false;
                    item.style.backgroundColor="#FFFF00";
                    area.innerHTML= "Ничья";
                    draw();
		    info();
                    die()
               } else if (data.includes('010')){
                    fact = false;
                    item.style.backgroundColor="#FFFF00";
                    area.innerHTML= "Победа Компьютера";
		      winBot();
		    info();    
                    die()
               } else if ( data.includes('101')){
                    fact = false;
                    item.style.backgroundColor="#FFFF00";
                    area.innerHTML= "Победа КЕКаря";
                    winPeople();
		    info();
                    die()
                  }; 
                main();
            };
    }); 
  });
};

function duoGame() {
    blocks.forEach(function(item){
          item.addEventListener('click', function () {
		            click();
                x++;  
                if (x % 2 == 1){
                  clearInterval(uf1);
                  if (base[item.id - 1] == '0' || base[item.id - 1] == '1'){
			                   error();
                        area.innerHTML= 'Выберите свободное поле'
                        area.style.color = 'red';
                        x = 0;
                      } else {
                        area.style.color = 'black'
                        base[item.id-1] = '1';
                        item.innerHTML = 'K';
                        item.style.backgroundColor="#FA8072";
			                  // area.innerHTML= "Ход второго игрока... <br> (Ход буквы Е)";
                        uf2 = setInterval(three, 300, 'Ход второго игрока', '<br> <br> (Ход буквы Е)');
                        dataF(); 
                         if (data.includes('010') &&  data.includes('101')) {
                              item.style.backgroundColor="#FFFF00";
                              area.innerHTML= "Ничья <br> Игра завершена.";
                              die()
                         } else if (data.includes('010')){
                              item.style.backgroundColor="#FFFF00";
                              area.innerHTML= "Победа ЕКЕ! Поздравляем! Игра завершена. ";
                              die()
                         } else if ( data.includes('101')){
                              item.style.backgroundColor="#FFFF00";
                              area.innerHTML= "Победа КЕК! Поздравляем! Игра завершена.";
                              die()
                              }
                        }
                      } else if( x % 2 == 0){
                        clearInterval(uf2);
                        if (base[item.id - 1] == '0' || base[item.id - 1] == '1'){
			               error();
                        area.innerHTML= 'Выберите свободное поле'
                        area.style.color = 'red';
                        x = 1;
                      } else {
                        area.style.color = 'black'
                        base[item.id-1] = '0';
                        item.innerHTML = 'E';
                        item.style.backgroundColor="#87CEFA"
                        // area.innerHTML= "Ход первого игрока... <br> (Ход буквы К)"
                        uf1 = setInterval(three, 300 , 'Ход первого игрока' , '<br> <br> (Ход буквы К)');
                        dataF(); 
                         if (data.includes('010') &&  data.includes('101')) {
                              item.style.backgroundColor="#FFFF00";
                              area.innerHTML= "Ничья <br> Игра завершена.";
                              die()
                         } else if (data.includes('010')){
                              item.style.backgroundColor="#FFFF00";
                              area.innerHTML= "Победа ЕКЕ! Поздравляем! Игра завершена. ";
                              die()
                         } else if ( data.includes('101')){
                              item.style.backgroundColor="#FFFF00";
                              area.innerHTML= "Победа КЕК! Поздравляем! Игра завершена.";
                              die()
                            }; 
                        }
                      }
                full();

          });
      });
  }

function die(){
  clearInterval(uf1);
  clearInterval(uf2);
  clearInterval(uf3);
  clearInterval(uf4);
  clearInterval(timer1);
  let a = document.createElement('div');
  a.style.width = '100%';
  a.style.height = '100%';
  a.style.opacity = '0';
  a.style.position = 'absolute';
  document.querySelector('.box').appendChild(a);
}

function full(){
  let t = base.includes('a');
  if ( t == false) {
    area.innerHTML= "Ничья <br>  Игра завершена.";
     die()
  }
}

let u = 0;
function three(one, two){
  u++
  if (u ==1 ){
  area.innerHTML = one + ".&nbsp;&nbsp;" + two}
  else if ( u ==2 ){
  area.innerHTML = one + "..&nbsp;" + two}
  else if (u == 3) {
  area.innerHTML = one + "..." + two}
  else if (u ==4) {
  u = 0 }
}


function timerF(){
  timerBox.innerHTML = '1';

  if (x1 == 60 && z>= 9 ){
    x1 = 0;
    z++
    timerBox.innerHTML = 'Время игры: ' + z +":" +  '0'+ x1++;
  } else if (x1 == 60 && z<10){
    x1 = 0;
    z++
    timerBox.innerHTML = 'Время игры: ' + '0' + z +":" +  '0'+ x1++;
  } else if (x1 >= 10 && z >=10 ){
    timerBox.innerHTML = 'Время игры: ' +  z +":" + x1++;
  } else if (x1 >= 10){
    timerBox.innerHTML = 'Время игры: ' + '0'+ z +":" + x1++;
  } else if (z >= 10 ){
    timerBox.innerHTML = 'Время игры: '+ z +":" +  '0'+ x1++;
  } else {
    timerBox.innerHTML = 'Время игры: ' + '0'+ z +":" +  '0'+ x1++;
  }
}



document.querySelector('.statInfo').innerHTML = 'Всего игр: '+ a + ' <br> <br> Ваши победы: ' + b + '<br><br> Победы Компьютера: ' + c + '<br> <br> Ничьи: ' +d+ '<br><br>';
if (a == NaN || b == NaN || c == NaN || d == NaN) {
  document.querySelector('.statInfo').innerHTML = 'Всего игр: __ <br> <br> Ваши победы: __<br><br> Победы Компьютера: __<br> <br> Ничьи: __<br><br>';
}

if (localStorage.getItem('check') == 1){
  white ('.record ');
  black ('.clean');
} else {
  white ('.clean');
  black ('.record ');
}

record.addEventListener('click', function() {
  if (localStorage.getItem('check') == 1){
    record  = document.querySelector('.t')
    white ('.record ');
    black ('.clean');
  } else {
    click();
    white ('.record ');
    black ('.clean');
    localStorage.setItem('check', 1);
    if (localStorage.getItem('check') == 1) {
      localStorage.setItem('all', 0);
      localStorage.setItem('winPeople', 0);
      localStorage.setItem('winBot', 0);
      localStorage.setItem('draw', 0);
      let a = localStorage.getItem('all');
      let b = localStorage.getItem('winPeople');
      let c = localStorage.getItem('winBot');
      let d = localStorage.getItem('draw');
      document.querySelector('.statInfo').innerHTML = 'Всего игр: '+ a + ' <br> <br> Ваши победы: ' + b + '<br><br> Победы Компьютера: ' + c + '<br> <br> Ничьи: ' +d+ '<br><br>';
    }
  }
})

clean.addEventListener('click', function() {
  click();
  white('.clean');
  console.log(record )
  localStorage.check = 0;
  localStorage.removeItem('all');
  localStorage.removeItem('winPeople');
  localStorage.removeItem('winBot');
  localStorage.removeItem('draw');
  black('.record');
  document.querySelector('.statInfo').innerHTML = 'Всего игр: __ <br> <br> Ваши победы: __<br><br> Победы Компьютера: __<br> <br> Ничьи: __<br><br>';
})

 function info() {
  if (localStorage.getItem('check') == 1){
    record  = document.querySelector('.t')
    white ('.record ');
    localStorage.all++;
  let a = localStorage.getItem('all');
    let b = localStorage.getItem('winPeople');
    let c = localStorage.getItem('winBot');
    let d = localStorage.getItem('draw');
  document.querySelector('.statInfo').innerHTML = 'Всего игр: '+ a + ' <br> <br> Ваши победы: ' + b + '<br><br> Победы Компьютера: ' + c + '<br> <br> Ничьи: ' +d+ '<br><br>';
  } 
  // else if (localStorage.getItem('check') == 0){
  //   f1 = document.querySelector('.t')
  // }
}
function draw() {
  localStorage.draw++;
  // let d = localStorage.getItem('draw');
  // document.querySelector('.statInfo').innerHTML = 'Всего игр: '+ a + ' <br> <br> Ваши победы: ' + b + '<br><br> Победы Компьютера: ' + c + '<br> <br> Ничьи: ' +d+ '<br><br>';
}
function winPeople() {
  localStorage.winPeople++;
  // let b = localStorage.getItem('winPeople');
  // document.querySelector('.statInfo').innerHTML = 'Всего игр: '+ a + ' <br> <br> Ваши победы: ' + b + '<br><br> Победы Компьютера: ' + c + '<br> <br> Ничьи: ' +d+ '<br><br>';
}
function winBot() {
  localStorage.winBot++;
  // let c = localStorage.getItem('winBot');
  // document.querySelector('.statInfo').innerHTML = 'Всего игр: '+ a + ' <br> <br> Ваши победы: ' + b + '<br><br> Победы Компьютера: ' + c + '<br> <br> Ничьи: ' +d+ '<br><br>';
}

function black(abc) {
  document.querySelector(abc).style.boxShadow = '0 5px 10px gray ';
  document.querySelector(abc).style.color = 'black';
  document.querySelector(abc).style.cursor = 'pointer';
}
function white(abc) {
  document.querySelector( abc).style.boxShadow = '0 0 0 ';
  document.querySelector(abc).style.color = '#A9A9A9';
  document.querySelector(abc).style.cursor = 'default';
}
