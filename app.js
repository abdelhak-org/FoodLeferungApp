const links = document.querySelectorAll(".container .navbar ul li");
links.forEach((link)=>{
    link.addEventListener("click" , (e)=>{
    const linkId = e.target.getAttribute("data-id");
     document.getElementById(linkId).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })


      })
})