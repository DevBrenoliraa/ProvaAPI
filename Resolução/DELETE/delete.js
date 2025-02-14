
const urlAPI = 'https://jsonplaceholder.typicode.com/posts'
const IDpost = 1

async function deletePost () {
    try {
        const response = await fetch(`${urlAPI}/${IDpost}`, {
            method: 'DELETE',
        });
        
        if (response.ok) {
            console.log(`Post ${IDpost} deletado com sucesso.`);
        } else {
            console.error('Erro ao deletar post.');
        }
    } catch (error) {
    console.error(`ERROR: ${error}`);
    }
}

deletePost();