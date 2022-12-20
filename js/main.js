let a=[10,11,12,13,14,15,16,17,18,19,20];
console.log(a);
let evenArray=[]
let oddArray=[]
let b=0,c=0;
for(i=0;i<a.length;i++){
    if(a[i]%2==0){
        evenArray[b]=a[i];
        b++
    }
    else{
        oddArray[c]=a[i];
        c++
    }
}
console.log(evenArray);
console.log(oddArray);