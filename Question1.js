let n= process.argv;
let input=[];

for(let i=2;i<n.length;i++){
    input.push(n[i]);
}

let maxIdx=0;
let max=Number.MIN_VALUE;
let minIdx=0;
let min=Number.MAX_VALUE;
let ans={};

for(let i in input){
    if(ans[input[i]]!=undefined){
        ans[input[i]]++;
    }else{
        ans[input[i]]=1
    }
}
let output=[];

for(let i in ans){
    if(ans[i]>max){
        max=ans[i];
        maxIdx=i;
    }
    if(ans[i]<min){
        min=ans[i];
        minIdx=i;
    }
}
output.push(maxIdx);
output.push(minIdx);
console.log(output);
