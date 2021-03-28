let time=process.argv[2];
let input = time.split(":");

let hr=parseInt(input[0]);
let min=parseInt(input[1]);
let sec=parseInt(input[2].charAt(0).concat(input[2].charAt(1)));

let format=input[2].charAt(2).concat(input[2].charAt(3));

if(format=="PM"){
    sec=sec+45;
    min=min+45;
    if(sec>60){
        sec=sec%60;
        min=min+sec/60;
    }
    if(min>60){
        min=min%60;
        hr=hr+min/60;
    }
    if(hr==12){
        hr=hr;
    }else{
        hr=hr+12;
    }
}else{
    sec=sec+45;
    min=min+45;
    if(sec>60){
        sec=sec%60;
        min=min+sec/60;
    }
    if(min>60){
        min=min%60;
        hr=hr+min/60;
    }
    if(hr==12){
        hr=00;
    }else{
        hr=hr;
    }
}
console.log(hr+":"+min+":"+sec);
