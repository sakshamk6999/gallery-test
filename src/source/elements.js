const elements = []
var temp = []
for(let i = 0; i < 100; i ++){
    temp.push(i);
    if(i%10 === 9){
        elements.push(temp);
        temp = [];
    }
}

export default elements;