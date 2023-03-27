fetch('https://jsonplaceholder.typicode.com/users')
.then(result => 
    result.json()
)
.then((data => {
    data.forEach(element => {
        console.log(`${element.name}`)
    });
    // console.log(data);
}))
.catch((error) => {
    console.log(error.message)
})

