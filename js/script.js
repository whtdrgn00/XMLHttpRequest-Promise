
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();


    function getData() {
        return new Promise(function(resolve, reject) {
            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            request.addEventListener('readystatechange', function () {
                if (request.readyState === 4 && request.status == 200) {
                    resolve()
                } else {
                    reject()
                }
            });

            request.send();
        })
        
    } //end getData

    getData()
        .then(()=> {
            let data = JSON.parse(request.response);
            inputUsd.value = inputRub.value / data.usd;
        })
        .catch(() => inputUsd.value = "Что-то пошло не так!")
});