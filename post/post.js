const urlAPI = 'https://jsonplaceholder.typicode.com/posts';

async function post() {
    try {
        const resposta = await fetch(urlAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Breno lira',
                body: 'Este é um novo post',
                email: 'brenolirarocha5@gmail.com'
            })
        });
        
        const data = await resposta.json();

        console.log(data);

    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
}

post();