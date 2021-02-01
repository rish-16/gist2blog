document.addEventListener("DOMContentLoaded", () => {
    console.log("App loaded");
    
    const urlTextbox = document.getElementById("gist-url-textbox")
    const submitBtn = document.getElementById("submit")
    
    const ghAPIURL = "https://api.github.com/gists/"
    
    function getPostID(url) {
        url = url.split("/")
        id = url[url.length - 1]
        return id
    }
    
    submitBtn.addEventListener("click", () => {
        var content = urlTextbox.value
        content = getPostID(content)
        var gistURL = ghAPIURL + content;
        
        const Http = new XMLHttpRequest();

        Http.open("GET", gistURL);
        Http.send();

        Http.onreadystatechange = (e) => {
            console.log(e)
            console.log(Http.responseText)
        }                
    })
})