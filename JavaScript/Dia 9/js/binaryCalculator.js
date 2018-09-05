   const btns = document.getElementById('btns');
    const res = document.getElementById('res');
    let temp1, temp2, operator;
    
    btns.addEventListener('click', (e) => {
        
        let target = e.target.innerText;        
        if (target == 'C') {
            return res.innerText = '';
        } else if(target == '=') {
            let index = res.innerText.indexOf(operator);
            temp2 = res.innerText.slice(index + 1);
            switch (operator) {
                case '+':
                total = parseInt( temp1, 2 ) + parseInt( temp2, 2 );
                break;
                case '-':
                total = parseInt( temp1, 2 ) - parseInt( temp2, 2 );
                break;
                case '*':
                total = parseInt( temp1, 2 ) * parseInt( temp2, 2 );
                break;
                case '/':
                total = parseInt( temp1, 2 ) / parseInt( temp2, 2 );
                break;
            }
            res.innerText = total.toString(2);
        } else {
            if(target == '+' || target == '-' || target == '*' || target == '/') {
                temp1 = res.innerText;
                operator = target;
                res.innerText += target;
            } else {
                res.innerText += target;
            }
        } 
    });