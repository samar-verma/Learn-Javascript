// Using If else statement
function calculator(num1,num2,operator) {
        if (operator=='+') {
            return num1+num2;
        }
        else if (operator=='-') {
            return num1-num2;
        }
        else if (operator=='*') {
            return num1*num2;
        }
        else if (operator==='/') {
            return num1/num2;
        }
        else {
            return console.log('Invalid operator');
        }
};


// Using switch

function calci(num1,num2,operator) {
    switch (operator) {
            case '+': 
            return num1+num2
            break;

            case '-': 
            return num1-num2;
            break;

            case '*': 
            return num1*num2;
            break;

            case '/': 
            return num1/num2;
            break;
  
            default: 
            return console.log('Invalid operator');
        
    }

};
console.log(calculator(7,4,'+'));
console.log(calci(6,3,'+'));