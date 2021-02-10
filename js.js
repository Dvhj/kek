let blocks = document.querySelectorAll('.block');
let area = document.querySelector('.area');
let k_but = document.querySelector('.k');
let e_but = document.querySelector('.e');

let base = ['a', 'a', 'a', 'a', 'a','a', 'a', 'a', 'a', 'a','a', 'a', 'a', 'a', 'a','a', 'a', 'a', 'a', 'a','a', 'a', 'a', 'a', 'a'];
let number;
let index;

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
              let sum = base[0]+base[1]+base[2];
              let sum2 = base[1]+base[2]+base[3];
              let sum3 = base[2]+base[3]+base[4];
              let sum4 = base[5]+base[6]+base[7];
              let sum5 = base[6]+base[7]+base[8];
              let sum6 = base[7]+base[8]+base[9];
              let sum7= base[10]+base[11]+base[12];
              let sum8 = base[11]+base[12]+base[13];
              let sum9 = base[12]+base[13]+base[14];
              let sum10 = base[15]+base[16]+base[17];
              let sum11 = base[16]+base[17]+base[18];
              let sum12 = base[17]+base[18]+base[19];
              let sum13 = base[20]+base[21]+base[22];
              let sum14 = base[21]+base[22]+base[23];
              let sum15 = base[22]+base[23]+base[24];

              let sumv = base[0]+base[5]+base[10];
              let sumv2 = base[5]+base[10]+base[15];
              let sumv3 = base[10]+base[15]+base[20];
              let sumv4 = base[1]+base[6]+base[11];
              let sumv5 = base[6]+base[11]+base[16];
              let sumv6 = base[11]+base[16]+base[21];
              let sumv7 = base[2]+base[7]+base[12];
              let sumv8 = base[7]+base[12]+base[17];
              let sumv9 = base[12]+base[17]+base[22];
              let sumv10 = base[3]+base[8]+base[13];
              let sumv11 = base[8]+base[13]+base[18];
              let sumv12 = base[13]+base[18]+base[23];
              let sumv13 = base[4]+base[9]+base[14];
              let sumv14 = base[9]+base[14]+base[19];
              let sumv15 = base[14]+base[19]+base[24];

              let sumd = base[2]+base[8]+base[14];
              let sumd1 = base[1]+base[7]+base[13];
              let sumd2 = base[7]+base[13]+base[19];
              let sumd3 = base[0]+base[6]+base[12];
              let sumd4 = base[6]+base[12]+base[18];
              let sumd5 = base[12]+base[18]+base[24];
              let sumd6 = base[5]+base[11]+base[17];
              let sumd7 = base[11]+base[17]+base[23];
              let sumd8 = base[10]+base[16]+base[22];

              let sumd9 = base[2]+base[6]+base[10];
              let sumd10 = base[3]+base[7]+base[11];
              let sumd11 = base[7]+base[11]+base[15];
              let sumd12 = base[4]+base[8]+base[12];
              let sumd13 = base[8]+base[12]+base[16];
              let sumd14 = base[12]+base[16]+base[20];
              let sumd15 = base[9]+base[13]+base[17];
              let sumd16 = base[13]+base[17]+base[21];
              let sumd17 = base[14]+base[18]+base[22];

              if (sum == "101" || sum2 == "101" || sum3 == "101" || sum4 == "101" || 
                sum5== "101" || sum6 == "101" || sum7 == "101" || sum8 == "101" || sum9 == "101" ||
                sum10 == "101" || sum11 == "101" || sum12 == "101" ||sum13 == "101" || sum14 == "101" || sum15 == "101" ||
                sumv == "101" || sumv2 == "101" || sumv3 == "101" || sumv4 == "101" || 
                sumv5== "101" || sumv6 == "101" || sumv7 == "101" || sumv8 == "101" || sumv9 == "101" ||
                sumv10 == "101" || sumv11 == "101" || sumv12 == "101" ||sumv13 == "101" || sumv14 == "101" || sumv15 == "101" || 
                sumd == "101" || sumd1== "101" || sumd2 == "101" || sumd3 == "101" || sumd4 == "101" || 
                sumd5== "101" || sumd6 == "101" || sumd7 == "101" || sumd8 == "101" ||
                sumd9 == "101" || sumd10 == "101" || sumd11== "101" || sumd12 == "101" || 
                sumd13== "101" || sumd14 == "101" || sumd15== "101" || sumd16 == "101" || sumd17 == "101"
                ){
                item.style.backgroundColor="yellow";
                area.innerHTML= "победа КЕК                           игра обновится через 5 сек";
                setTimeout(end, 5000);
                }
                 else if (sum == "010" || sum2 == "010"   || sum3 == "010"  || sum4 == "010"   || 
                sum5== "010"  || sum6 == "010"  || sum7 == "010" || sum8 == "010"  || sum9 == "010"  ||
                sum10 == "010"  || sum11 == "010"  || sum12 == "010"  ||sum13 == "010"  || sum14 == "010" || sum15 == "010"||
                sumv == "010" || sumv2 == "010"   || sumv3 == "010"  || sumv4 == "010"   || 
                sum5== "010"  || sum6 == "010"  || sum7 == "010" || sum8 == "010"  || sum9 == "010"  ||
                sumv10 == "010"  || sumv11 == "010"  || sumv12 == "010"  ||sumv13 == "010"  || sumv14 == "010" || sumv15 == "010"||
                sumd == "010" || sumd1 == "010"  || sumd2 == "010" || sumd3 == "010"  || sumd4 == "010"   || 
                sumd5== "010"  || sumd6 == "010"  || sumd7 == "010" || sumd8 == "010"  ||
                sumd9 == "010" || sumd10 == "010"   || sumd11 == "010"  || sumd12 == "010"   || 
                sumd13== "010"  || sumd14 == "010"  || sumd15 == "010" || sumd16 == "010"  || sumd17 == "010"   
                 ){
               area.innerHTML= "победа ЕКЕ                            игра обновится через 5 сек";
                setTimeout(end, 5000);
              };
        });

  });
