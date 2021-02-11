let blocks = document.querySelectorAll('.block');
let area = document.querySelector('.area');
let k_but = document.querySelector('.k');
let e_but = document.querySelector('.e');

let base = ['a', 'a', 'a', 'a', 'a','a', 'a', 'a', 'a', 'a','a', 'a', 'a', 'a', 'a','a', 'a', 'a', 'a', 'a','a', 'a', 'a', 'a', 'a'];
let number;
let index;
let data = [];
let g = 0;

let min = 0;
let max = 0;
function getRandomIntInclusive(min, max) {
      min = Math.ceil(0);
      max = Math.floor(4);
      return Math.floor(Math.random() * (max - min + 1)) + min;
};


function end () {
  location.reload()
}


document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyZ' ) {
    number = '1';
    index = "K";
    area.innerHTML= "выбрана Z";
  }
  else if (event.code == 'KeyQ' ) {
    number = '0';
    index = "E";
    area.innerHTML= "выбрана Q";
  }
});

k_but.addEventListener('click', function(){
    number = '1';
    index = "K";
    area.innerHTML= "выбрана Z";
});

e_but.addEventListener('click', function(){
    number = '0';
    index = "E";
    area.innerHTML= "выбрана Q";
});  

blocks.forEach(function(item){
      item.addEventListener('click', function () {
              base[item.id-1] = number;
              if (number == 1){
                item.innerHTML = index;
                item.style.backgroundColor="red"
              }
                else if (number == 0)
                  {item.innerHTML = index;
                    item.style.backgroundColor="blue"};
              console.log(base);
              data[1] = base[0]+base[1]+base[2];
              data[2] = base[1]+base[2]+base[3];
              data[3] = base[2]+base[3]+base[4];
              data[4] = base[5]+base[6]+base[7];
              data[5] = base[6]+base[7]+base[8];
              data[6] = base[7]+base[8]+base[9];
              data[7]= base[10]+base[11]+base[12];
              data[8] = base[11]+base[12]+base[13];
              data[9] = base[12]+base[13]+base[14];
              data[10] = base[15]+base[16]+base[17];
              data[11] = base[16]+base[17]+base[18];
              data[12] = base[17]+base[18]+base[19];
              data[13] = base[20]+base[21]+base[22];
              data[14] = base[21]+base[22]+base[23];
              data[15] = base[22]+base[23]+base[24];

              data[16] = base[0]+base[5]+base[10];
              data[17] = base[5]+base[10]+base[15];
              data[18] = base[10]+base[15]+base[20];
              data[19]= base[1]+base[6]+base[11];
              data[20] = base[6]+base[11]+base[16];
              data[21] = base[11]+base[16]+base[21];
              data[22] = base[2]+base[7]+base[12];
              data[23] = base[7]+base[12]+base[17];
              data[24]= base[12]+base[17]+base[22];
              data[25]= base[3]+base[8]+base[13];
              data[26] = base[8]+base[13]+base[18];
              data[27] = base[13]+base[18]+base[23];
              data[28] = base[4]+base[9]+base[14];
              data[29] = base[9]+base[14]+base[19];
              data[31] = base[14]+base[19]+base[24];

              data[32]= base[2]+base[8]+base[14];
              data[33] = base[1]+base[7]+base[13];
              data[34] = base[7]+base[13]+base[19];
              data[35] = base[0]+base[6]+base[12];
              data[36] = base[6]+base[12]+base[18];
              data[37] = base[12]+base[18]+base[24];
              data[38] = base[5]+base[11]+base[17];
              data[39] = base[11]+base[17]+base[23];
              data[40] = base[10]+base[16]+base[22];

              data[41] = base[2]+base[6]+base[10];
              data[42] = base[3]+base[7]+base[11];
              data[43] = base[7]+base[11]+base[15];
              data[44] = base[4]+base[8]+base[12];
              data[45] = base[8]+base[12]+base[16];
              data[46] = base[12]+base[16]+base[20];
              data[47] = base[9]+base[13]+base[17];
              data[48] = base[13]+base[17]+base[21];
              data[49] = base[14]+base[18]+base[22];
		  console.log(data);

               if (data.includes('010') &&  data.includes('101')) {
                     item.style.backgroundColor="yellow";
                     area.innerHTML= "ничья                         игра обновится через 5 сек";
                     setTimeout(end, 5000);
               } else if (data.includes('010')){
                     area.innerHTML= "победа ЕКЕ                            игра обновится через 5 сек";
                     setTimeout(end, 5000);
               } else if ( data.includes('101')){
                     item.style.backgroundColor="yellow";
                     area.innerHTML= "победа КЕК                           игра обновится через 5 сек";
                     setTimeout(end, 5000);
 		}; 
        });

  });
