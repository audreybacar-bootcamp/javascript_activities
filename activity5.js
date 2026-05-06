color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"];

for(var i = 0; i < color.length;i++){
let vOrder ="";
let vIplus1 =i+1;
    if(vIplus1<=3){
        switch(vIplus1){
        case 1:
            vOrder = vIplus1 + o[1]
            break;
        case 2:
            vOrder = vIplus1 + o[2]
            break;
        case 3:
            vOrder = vIplus1 + o[3]
            break;
      }
    }
    else {
    vOrder = vIplus1 + o[0]
      }
    console.log(vOrder+" choice is " + color[i])
}