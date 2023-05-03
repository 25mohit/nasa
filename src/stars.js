
const starsNumber = 100;
let starsContainer = []

for (var  i=0; i <= starsNumber; i++){
    starsContainer =  [...starsContainer, '*', '.','*.' ] ;
}

export const stars = starsContainer