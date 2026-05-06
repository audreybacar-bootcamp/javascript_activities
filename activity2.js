var height = 5;

while (height>0){
    let star = ""
    let j = 1
    while (j<= (height)){
        star += "* ";
        j++
}
console.log(star);
height = height - 1;
}