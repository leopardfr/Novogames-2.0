function isURL(input) {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    const isSingleWord = /^\S+$/.test(input);
  
    if (isSingleWord && !urlRegex.test("https://" + input)) {
      return false;
    }
  
    return isSingleWord || urlRegex.test(input);
  }
function textToGoogleSearchURL(query) {
    const baseUrl = "https://www.google.com/search?q=";
    const encodedQuery = encodeURIComponent(query);
    return baseUrl + encodedQuery;
}
document.getElementById("linkForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var s = document.getElementById("searchBar").value;
    if(isURL(s)) {
        if(!s.startsWith("https://")) {s="https://"+s;}
        loadLink(s);
    }
    else {
        loadLink(textToGoogleSearchURL(s));
    }
});
function loadLink(ltl) {
    localStorage.setItem("link", ltl)
    location.href="browser#"+ltl;
}