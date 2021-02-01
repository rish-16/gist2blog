document.addEventListener("DOMContentLoaded", () => {
    console.log("App loaded");
    
    const urlTextbox = document.getElementById("gist-url-textbox")
    const submitBtn = document.getElementById("submit")
    const textEditor = document.getElementById("md-area")
    
    const ghAPIURL = "https://api.github.com/gists/"
    
    function getPostID(url) {
        url = url.split("/")
        id = url[url.length - 1]
        return id
    }
    
    submitBtn.addEventListener("click", () => {
        var gistID = urlTextbox.value
        gistID = getPostID(gistID)
        var gistURL = ghAPIURL + gistID;
        
        // https://gist.github.com/rish-16/959865cac059c9a46881cdc95a24bfc0
        
        var req = new XMLHttpRequest();
        req.responseType = 'json';
        req.open('GET', gistURL, true);
        
        req.onload  = function() {
            var jsonResponse = req.response;
            var gistContent = jsonResponse["files"]
            var filename = Object.keys(gistContent)[0]
            
            var markdownContent = jsonResponse["files"][filename]["content"]
            
            var converter = new showdown.Converter()
            html = converter.makeHtml(markdownContent)
            textEditor.style.fontFamily = "Avenir Next"
            textEditor.innerHTML = html
        };
        req.send(null);        
    })
})