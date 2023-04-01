const init = () => {
    const inputForm = document.querySelector("form")
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const input = document.getElementById('searchByID')
        console.log(input.value);

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(resp => resp.json())
        .then((moviesData) => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');

            title.innerText = moviesData.title
            summary.innerText = moviesData.summary
            
        })
    })
}

document.addEventListener('DOMContentLoaded', init);