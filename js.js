let blocks = document.querySelectorAll('.block');
let area = document.querySelector('.area');
let k_but = document.querySelector('.k');
let e_but = document.querySelector('.e');
let duo  = document.querySelector('.duo');
let bot = document.querySelector('.bot');
let help = document.querySelector('.help');
let buttons =  document.querySelector('.buttons');
let newGame = document.querySelector('.new');
let boxHelp = document.querySelector('.boxHelp');
let butHelp = document.querySelector('.butHelp');
let box = document.querySelector('.box');

let base = ['a', 'a', 'a', 'a', 'a','a', 'a', 'a', 'a', 'a','a', 'a', 'a', 'a', 'a','a', 'a', 'a', 'a', 'a','a', 'a', 'a', 'a', 'a'];
let number = 1;
let index;
let data = [];
let g = 0;
let fact = true;
let check = '';
let checkWinBot = '';
let numb = '';

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

help.addEventListener('click', function(){
  boxHelp.style.display='flex'
  newGame.style.display='none'
  box.style.display='none'

});

butHelp.addEventListener('click', function(){
  boxHelp.style.display='none'
  newGame.style.display='flex'
  box.style.display='flex'
});

newGame.addEventListener('click', function(){
    location.reload()
});

duo.addEventListener('click', function(){
  buttons.style.display = 'flex';
  area.innerHTML = "Выберите букву и сделайте ход "
  duo.style.display = 'none';
  bot.style.display = 'none';
});

bot.addEventListener('click', function(){
  area.innerHTML = "Выберите поле и сделайте ход "
  buttons.style.display = 'none';
  duo.style.display = 'none';
  bot.style.display = 'none';
  botGame();
});

k_but.addEventListener('click', function(){
    number = '1';
    index = "K";
    area.innerHTML= "Выбрана K";
    duoGame();
});

e_but.addEventListener('click', function(){
    number = '0';
    index = "E";
    area.innerHTML= "Выбрана E";
    duoGame();
});  

let random = function rand(min, max) {
      min = Math.ceil(0)
      max = Math.floor(24);
      return Math.floor(Math.random() * (max - min + 1)) + min;
};
function end () {
  location.reload()
}
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

function main() {
      if (fact == true) {
        console.log(base);
        area.innerHTML = "Ход компьютера... ";
        setTimeout( point, 500);
        function point() {
          let x = random();
          console.log(x);
          if (data.includes('a01') && data.includes('a10')){
            numb = data.indexOf('a10');
            console.log(numb);   
             defEFirst();
              dataF();
              if (data.includes('010') &&  data.includes('101')) {
                    blocks[checkWinBot].style.backgroundColor="#FFFF00";
                    area.innerHTML= "Ничья";
              } else if (data.includes('010')){
                    blocks[checkWinBot].style.backgroundColor="#FFFF00";
                    area.innerHTML= "Победа Компьютера";}
          } else if (data.includes('10a') && data.includes('01a')){
            numb = data.indexOf('01a');
            console.log(numb);
             defETwo(); 
              dataF();
              if (data.includes('010') &&  data.includes('101')) {
                    blocks[checkWinBot].style.backgroundColor="#FFFF00";
                    area.innerHTML= "Ничья";
              } else if (data.includes('010')){
                    blocks[checkWinBot].style.backgroundColor="#FFFF00";
                    area.innerHTML= "Победа Компьютера";}          
          } else if (data.includes('a01')){
            numb = data.indexOf('a01')
            console.log(numb);
            defEFirst();
            area.innerHTML= "Ваш ход..."
          } else if (data.includes('a10')){
            numb = data.indexOf('a10');
            console.log(numb);
             defEFirst();
              dataF();
              if (data.includes('010') &&  data.includes('101')) {
                    blocks[checkWinBot].style.backgroundColor="#FFFF00";
                    area.innerHTML= "Ничья";
              } else if (data.includes('010')){
                    blocks[checkWinBot].style.backgroundColor="#FFFF00";
                    area.innerHTML= "Победа Компьютера";}
            } else if (data.includes('10a')){
            numb = data.indexOf('10a')
            console.log(numb);
            defETwo();
            area.innerHTML= "Ваш ход..."
            } else if (data.includes('01a')){
            numb = data.indexOf('01a');
            console.log(numb);
            defETwo();
              dataF();
              if (data.includes('010') &&  data.includes('101')) {
                    blocks[checkWinBot].style.backgroundColor="#FFFF00";
                    area.innerHTML= "Ничья";
              } else if (data.includes('010')){
                    blocks[checkWinBot].style.backgroundColor="#FFFF00";
                    area.innerHTML= "Победа Компьютера";}
            } else if (base[x] == '1' || base[x] == '0'){
            point();
            } else {
              blocks[x].style.backgroundColor="#87CEFA";
              blocks[x].innerHTML = 'E';
              base[x] = '0';
              area.innerHTML = "Ваш ход... "
              dataF();
                console.log(data);
                if (data.includes('010') &&  data.includes('101')) {
                      blocks[x].style.backgroundColor="#FFFF00";
                      area.innerHTML= "Ничья";
                 } else if (data.includes('010')){
                      blocks[x].style.backgroundColor="#FFFF00";
                      area.innerHTML= "Победа Компьютера";
                 } else if ( data.includes('101')){
                      blocks[x].style.backgroundColor="#FFFF00";
                      area.innerHTML= "Победа КЕКаря";
          }; 
       };
    };
  };
}



function botGame() {
    blocks.forEach (function (item){
      item.addEventListener('click', function () {
            if (base[item.id - 1] == '0' || base[item.id - 1] == '1'){
              area.innerHTML= 'Выберите свободное поле'
              area.style.color = 'red';
            }
             else { base[item.id-1] = '1';
              if (number == 1){
                item.innerHTML = 'K';
                item.style.backgroundColor = "#FA8072"
              }
                dataF();
              if (data.includes('010') &&  data.includes('101')) {
                    fact = false;
                    item.style.backgroundColor="#FFFF00";
                    area.innerHTML= "Ничья";
               } else if (data.includes('010')){
                    fact = false;
                    item.style.backgroundColor="#FFFF00";
                    area.innerHTML= "Победа Компьютера";
               } else if ( data.includes('101')){
                    fact = false;
                    item.style.backgroundColor="#FFFF00";
                    area.innerHTML= "Победа КЕКаря";
                  }; 
                main();
            };
    }); 
  });
};

function duoGame() {
    blocks.forEach(function(item){
          item.addEventListener('click', function () {
                  base[item.id-1] = number;
                  if (number == 1){
                    item.innerHTML = index;
                    item.style.backgroundColor="#FA8072"
                    area.innerHTML= "Ход второго игрока...";
                  }
                    else if (number == 0)
                      {item.innerHTML = index;
                      item.style.backgroundColor="#87CEFA"
                      area.innerHTML= "Ход первого игрока...";};
                    dataF();    
                   if (data.includes('010') &&  data.includes('101')) {
                        item.style.backgroundColor="#FFFF00";
                        area.innerHTML= "Ничья";
                   } else if (data.includes('010')){
                        item.style.backgroundColor="#FFFF00";
                        area.innerHTML= "Победа ЕКЕ ";
                   } else if ( data.includes('101')){
                        item.style.backgroundColor="#FFFF00";
                        area.innerHTML= "Победа КЕК";
               }; 
          });
      });
  }
