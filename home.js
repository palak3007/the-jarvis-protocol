let crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
      crsr.style.left = dets.x+"px"
      crsr.style.top = dets.y+"px"
})


let loader = document.querySelector(".loader")
setInterval(function(){
        loader.style.top = "-100%"
},4800)