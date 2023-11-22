
        $(document).ready(function(){
            let expression=0;
            let s ="";
            $("#clear").click(function(){
                expression=0;
                s ="";
                updateDisplay();
            });
            
            function updateDisplay(){
                $("#exp").html(s);
                $("#display").html(expression);
            }
            function handleNumberClick(number){
                if (expression === 0){
                    expression = number;
                } 
                else if (endsWithOperator()) {
        // If the expression ends with an operator and the clicked number is '0', handle leading zeros
        if (number === '0' ) {
            if(expression.endsWith('0')){
                console.log(expression);
                expression = expression;
            }
            else{
                expression+=number;
            }
        } else if (number !== '0') {
            expression += number;
        }
        console.log(expression);
        
    }  else{
                    expression +=number;
                }
                updateDisplay();
            }
            function endsWithOperator() {
    var operators = ['+', '-', '*', '/'];
    return operators.some(operator => expression.endsWith(operator));
}

        $("#seven").click(function () {
            handleNumberClick("7");
        });

        $("#eight").click(function () {
            handleNumberClick("8");
        });

        $("#nine").click(function () {
            handleNumberClick("9");
        });

        $("#four").click(function () {
            handleNumberClick("4");
        });

        $("#five").click(function () {
            handleNumberClick("5");
        });

        $("#six").click(function () {
            handleNumberClick("6");
        });

        $("#one").click(function () {
            handleNumberClick("1");
        });

        $("#two").click(function () {
            handleNumberClick("2");
        });

        $("#three").click(function () {
            handleNumberClick("3");
        });

        $("#zero").click(function () {
    // Assuming expression is a string, check if it doesn't end with '0'
    if (typeof expression === 'string' && !expression.endsWith('0')) {
        handleNumberClick("0");
    }
    // If expression is not a string or it ends with '0', you might want to handle it differently or do nothing.
});

        $("#add").click(function () {
           
            // Assuming expression is a string, check if it doesn't end with '0'
            if (typeof expression === 'string' && /[0-9]$/.test(expression)) {
        expression +="+";
    }
    else if (typeof expression === 'string' && expression.endsWith('-')) {
       expression = expression.replace(/[\+\*\/-]+$/, '') + "+";
    }
    else if (typeof expression === 'string' && expression.endsWith('*')) {
        expression = expression.replace(/[\+\*\/-]+$/, '') + "+";
    }
    else if (typeof expression === 'string' && expression.endsWith('/')) {
        expression = expression.replace(/[\+\*\/-]+$/, '') + "+";
    }
    else if (typeof expression === 'string' && expression.endsWith('+')) {
        expression = expression.replace(/[\+\*\/-]+$/, '') + "+";
    }
    // If expression is not a string or it ends with '0', you might want to handle it differently or do nothing.
            updateDisplay();
        });
        $("#subtract").click(function () {
            expression += "-";
            updateDisplay();
        });
        $("#divide").click(function () {
            if (typeof expression === 'string' && /[0-9]$/.test(expression)) {
        expression +="/";
    }
            else if (typeof expression === 'string' && expression.endsWith('*')) {
                expression = expression.replace(/[\+\*\/-]+$/, '') + "/";
    }
    else if (typeof expression === 'string' && expression.endsWith('-')) {
        expression = expression.replace(/[\+\*\/-]+$/, '') + "/";
    }
    else if (typeof expression === 'string' && expression.endsWith('+')) {
        expression = expression.replace(/[\+\*\/-]+$/, '') + "/";
    }
            updateDisplay();
        });
        $("#multiply").click(function () {
            if (typeof expression === 'string' && /[0-9]$/.test(expression)) {
        expression +="*";
    }
           else if (typeof expression === 'string' && expression.endsWith('-')) {
            expression = expression.replace(/[\+\*\/-]+$/, '') + "*";
    }
    else if (typeof expression === 'string' && expression.endsWith('/')) {
        expression = expression.replace(/[\+\*\/-]+$/, '') + "*";
    }
    else if (typeof expression === 'string' && expression.endsWith('+')) {
        expression = expression.slice(0, -1) + "*";
    }
            updateDisplay();
        });
        $("#decimal").click(function () {
    // Check if the current expression is empty or ends with an operator
    // If so, prepend a '0' before the decimal point
    if (expression === '' || endsWithOperator()) {
        expression += '0';
    }

    // Check if the current number already contains a decimal point
    // If not, append a decimal point to the expression
    if (!endsWithDecimal()) {
        expression += ".";
        updateDisplay();
    }
});

function endsWithDecimal() {
    const lastNumber = expression.split(/[\+\-\*\/]/).pop();
    return lastNumber.includes('.');
}

        // Event handler for the equals button
        $("#equals").click(function () {
            try {
               
                s = expression + " = ";
                // Evaluate the expression and update the display
                expression = eval(expression).toString();
                updateDisplay();
            } catch (error) {
                // Handle error (e.g., if the expression is invalid)
                expression = "Error";
                updateDisplay();
            }
        });
        });
 