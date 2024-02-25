const result = document.getElementById('result');
const ans = document.getElementById('ans');

const assign = (value) => {
    if (result.innerHTML === '0' && value !== '.') { 
        result.innerHTML = ''; 
    }
    result.innerHTML += value;
}

const clearAll = () => {
    result.innerHTML = '0';
    ans.innerHTML = '';
}

const del = () => {
    if (result.innerHTML === '') { 
        ans.innerHTML = ''; 
    }
    let answer = result.innerHTML;
    result.innerHTML = answer.slice(0, -1);
}

const calculateResult = () => {
    const answer = result.innerHTML;
    const calculation = eval(answer);
    ans.innerHTML = calculation;
}
