document.querySelector('#nav #menu').addEventListener('click',function(){
    document.querySelector("#menu").style.display = "none"
      gsap.to("#toppage",{
            top: 0,
        })
        var flag = 0
    if(flag==0){
      
        gsap.to("#line1",{
            width: 0            
        })
        gsap.to("#line2",{
            width: 0
        })
        gsap.to("#line3",{
            width: 0
        })
        gsap.to("#line4",{
            display:"block"
        },"+=0.1")
        gsap.to("#line5",{
            display:"block"
        },"+=0.1")
        flag=1

    }else{
        gsap.to("#line1",{
            rotate:"0deg",
           
        })
        gsap.to("#line2",{
            rotate:"0deg",
          
        })
        flag=0
        
    }
    
    // gsap.to("#line3",{
    //     display:"none"
    // })

});


document.querySelector("#leftoverlay").addEventListener("mouseenter",function(){
    document.querySelector("#main").style.backgroundColor="#C89F67"
    document.querySelector("#left .box1 img").src="https://stockdutchdesign.com/wp-content/uploads/2021/03/office-stock-foto-space-aesthetics-studio-stock-dutch-design-11-800x1200.jpg"
    document.querySelector("#left .box3 img").src="https://stockdutchdesign.com/wp-content/uploads/2021/03/office-stock-foto-space-aesthetics-studio-stock-dutch-design-02-800x1200.jpg"
    document.querySelector("#right .box1 img").src="https://stockdutchdesign.com/wp-content/uploads/2021/03/office-stock-foto-space-aesthetics-studio-stock-dutch-design-07-800x1200.jpg"
    document.querySelector("#right .box3 img").src="https://stockdutchdesign.com/wp-content/uploads/2021/03/office-stock-foto-peter-baas-stock-dutch-design-19-800x1200.jpg"
  


});


document.querySelector("#rightoverlay").addEventListener("mouseenter",function(){
    document.querySelector("#main").style.backgroundColor="#B5969E"
    document.querySelector("#left .box1 img").src="https://stockdutchdesign.com/wp-content/uploads/2019/03/heritage-is-home-stock-foto-peter-baas-05-800x1200.jpg"
    document.querySelector("#left .box3 img").src="https://stockdutchdesign.com/wp-content/uploads/2021/03/le-coin-des-lions-stock-foto-space-aesthetics-studio-stock-dutch-design-12-800x1200.jpg"
    document.querySelector("#right .box1 img").src="https://stockdutchdesign.com/wp-content/uploads/2019/10/rustic-family-house-in-breda-stock-dutch-design-foto-peter-baas-12-800x533.jpg"
    document.querySelector("#right .box3 img").src="https://stockdutchdesign.com/wp-content/uploads/2022/11/amsterdam-foto-space-aesthetics-studio-stock-dutch-design-interior-02-800x1067.jpg"
     
});


