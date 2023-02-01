const getPosts = () => {
    // let fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts")
    let fetchPosts = fetch("./student.json")
    let displayfetch = ""

    fetchPosts.then((respond) => {
        respond.json().then((jsonData) => {
            // console.log(jsonData)
            for (let i = 0; i < jsonData.length; i++) {
                let post = jsonData[i];

                displayfetch = displayfetch + ` ${post.name} <br> post body: ${post.cloth} <br> <hr>`;
            }
            document.getElementById("allPosts").innerHTML = displayfetch
            
        })
    })
}