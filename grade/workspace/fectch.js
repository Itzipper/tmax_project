const getPosts = () => {
    let fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts")
    let displayfetch = ""

    fetchPosts.then((respond) => {
        respond.json().then((jsonData) => {
            console.log(jsonData)
            for (let i = 0; i < jsonData.length; i++) {
                let post = jsonData[i];

                displayfetch = displayfetch + `  ${post.title} <br> <strong>Post body:</strong> ${post.body} <br> <hr>`;
            }
            document.getElementById("allPosts").innerHTML = displayfetch
            
        })
    })
}