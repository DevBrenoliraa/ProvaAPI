const urlAPI = 'https://jsonplaceholder.typicode.com/posts/1'; 

async function put() {
    try {
        const resposta = await fetch(urlAPI, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Método PUT',
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

put();