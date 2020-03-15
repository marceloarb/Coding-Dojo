const insert=(arr)=>{
    for (let i=0; i<arr.length; i++){
        let temp = arr[i+1];
        while(temp<arr[i]){
            let x = temp;
            temp=arr[i];
            arr[i]=x;
            i--;
        }
    }
    return arr;

}

console.log(insert([5,9,7,10,8]));

