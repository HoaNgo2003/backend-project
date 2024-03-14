
const buttonStatus = document.querySelectorAll("[button-status]");
if(buttonStatus.length>0){
    let url = new URL(window.location.href);
    buttonStatus.forEach(item=>{
         
        item.addEventListener("click",()=>{
            const status = item.getAttribute("button-status");
            if(status){
                url.searchParams.set("status", status);
               
            }
            else{
                url.searchParams.delete("status");
            }
            console.log(item);
          window.location.href = url.href;
        })
    })
}
 