document.addEventListener('DOMContentLoaded', ()=>{

    function fetchContent(){
        fetch('https://jsonplaceholder.typicode.com/users') // 804 Error
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(res.status);
                }
            })
            .then(res => {
                console.log(res);
                renderData(res)
            })
            .catch(err => console.log(`Error with message: ${err}`));
    }
    function renderData(res){

        for(const data of res) {

            const render = document.querySelector('#users');

            const dataLi = document.createElement('li');
            const blockQuote = document.createElement('blockquote');
            const p = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
            const p4 = document.createElement('p');
            

            dataLi.dataset.id = data.id

            p.innerHTML = `Name: ${data.name}`;
            p2.innerHTML = `Email: ${data.email}`
            p3.innerHTML = `phone: ${data.phone}`
            p4.innerHTML = `Website: ${data.website}`;

            blockQuote.append(p, p2, p3, p4);
            dataLi.append(blockQuote);
            render.append(dataLi);
        }
    }

    fetchContent();
}) 