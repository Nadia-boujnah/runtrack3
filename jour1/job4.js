function Bissextile (année) {
    if (année % 4 === 0){
        if(année % 100 !== 0 || année % 400 === 0){
            return true; 

        }
    }
return false;
} 
console.log (Bissextile(2020));
console.log (Bissextile(2029));
