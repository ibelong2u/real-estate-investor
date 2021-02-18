window.onscroll = () => {
    if(this.scrollY <= 25) 
        document.querySelector("#navbox").style.backgroundColor = "rgba(0, 0, 0, 0)";   
    else 
        document.querySelector("#navbox").style.backgroundColor = "rgba(0, 0, 0, 1)"; 
  };