function calculate(input_amount, from_currency_value, obj){
    for(var i = 1; i <= 5; i++){
        var b = document.getElementById(i);
        if(b.className != obj.className){
                convert(b, from_currency_value, obj, input_amount);
        }
    }
}


function convert(b, from_currency_value, obj, input_amount){
    fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency_value}`).then(res => res.json()).then(res => {
                const rate = res.rates[b.className];
                var to_amount = (input_amount * rate).toFixed(3);
                b.value = `${to_amount}`;
  })
}