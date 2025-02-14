const urlAPI = 'https://jsonplaceholder.typicode.com/posts'
const IDpost = 1

async function updatePost() {
    try {
        const resposta = await fetch(`${urlAPI}/${IDpost}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: IDpost,
                title: 'Post Atualizado',
                body: 'Este é o conteúdo atualizado do post.',
                userId: 1
            })
        });

        const data = await resposta.json();
        console.log('Post atualizado:', data);

    } catch (error) {
        console.log(`ERROR: ${error}`);
    }
}

updatePost();