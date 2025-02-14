const urlAPI = 'https://jsonplaceholder.typicode.com/posts'

async function createPost() {
    try {
        const resposta = await fetch(urlAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Novo Post',
                body: 'Este é um novo post',
                email: 'testeemail12342@gmail.com'
            })
        });

        const data = await resposta.json();
        console.log('Post criado:', data);

    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
}

createPost();