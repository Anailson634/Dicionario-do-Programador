function sumir(id) {
    const display_n=document.querySelector(id)
    var config_dspy=display_n.style.display

    if(config_dspy!='block') {
        display_n.style.display="block"
    } else {
        display_n.style.display="none"
    }
    
}