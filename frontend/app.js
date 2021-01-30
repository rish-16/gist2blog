document.addEventListener("DOMContentLoaded", () => {
    console.log("App loaded");
    
    const urlTextbox = document.getElementById("gist-url-textbox")
    const submitBtn = document.getElementById("submit")
    
    function getPostID(url) {
        url = url.split("/")
        id = url[url.length - 1]
        return id
    }
    
    submitBtn.addEventListener("click", () => {
        var content = urlTextbox.value
        content = getPostID(content)
        console.log(content)
        
        const Http = new XMLHttpRequest();
        const url = 'https://DiGist-Backend.rish_16.repl.co/retrieve/' + content;

        Http.open("GET", url);
        Http.send();

        Http.onreadystatechange = (e) => {
            console.log(e)
            console.log(Http.responseText)
        }                
    })
})