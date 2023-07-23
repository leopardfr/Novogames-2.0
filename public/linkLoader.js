var link = "";
var after = false;
for(var x = 0; x < document.URL.length; x++) {
    if(after) {link=link+document.URL[x];}
    if(document.URL[x]=="#") {
        after=true
    }
}
if(link==localStorage.getItem("link")) {
    proxySite(link);
}
else {
    document.body.innerHTML=`This page seemed to be loaded through an outside source, for your security, we haved blocked this page. Link attempted to open: `+ link + `. If you wanted to open this link, please go to the main page and load it through there.`
}

