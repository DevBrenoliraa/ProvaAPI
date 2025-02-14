const urlAPI = 'https://jsonplaceholder.typicode.com/posts/1';

async function delet() {
    try {
        const resposta = await fetch(urlAPI, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        const data = await resposta.json();

        console.log(data.id);


    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
}

delet();