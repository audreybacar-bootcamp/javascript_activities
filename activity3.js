var height = 5;
    var k = height;     

//if (height % 2 !== 0){ 
    for(let i = height; i>=1; i--){
        if(i % 2 == 0){
        let output ="";
        for (q = 1;q<=height - i;q++)output += " ";
        for (w = 1;w<=2*i-1;w++){
            if(w == 1 || w == 2*i-1){
            output += "*";
            }
            else{
            output += " "
            }
        }
        console.log(output);
    }
}
    for (let i = 1;i<=height;i++){         
        if(i % 2 !== 0){                                  //4  *  * 
            let output = "";                                               //3
            for (j = 1;j<=height - i;j++)output += " ";
            for (k = 1;k<=2*i-1;k++){
                if(k == 1 || k == 2*i-1){
                output += "*";
                }
                else{
                output += " "
            }
        }
        console.log(output);
        }
    }
//}
