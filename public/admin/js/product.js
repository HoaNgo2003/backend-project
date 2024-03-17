const changStatus = document.querySelectorAll("[button-change-status]");
console.log(changStatus);
if(changStatus.length >0){
    const form = document.querySelector("#form-change-status");
    const path = form.getAttribute("data-path");
    // console.log(path);
    changStatus.forEach(button=>{
        button.addEventListener("click",()=>{
        const statusCur = button.getAttribute("data-status");
        const id = button.getAttribute("data-id");
        let statusChange = statusCur =="active"?"unactive":"active"
        // console.log(statusChange);
        const action = path + `/${statusChange}/${id}?_method=PATCH`;
    form.action = action;
    form.submit();
    })
    })
}
//xoa san pham
const buttonDelete = document.querySelectorAll("[button-delete]");
if(buttonDelete.length>0){
   const formDelete = document.querySelector("#form-delete-item");
   const path = formDelete.getAttribute("data-path"); 
   buttonDelete.forEach(button=>{
    button.addEventListener("click",()=>{
        const isConfirm = confirm("Ban co chac muon xoa khong?");
        if(isConfirm){
            const id = button.getAttribute("data-id");
            const action = `${path}/${id}?_method=DELETE`
            formDelete.action = action;
            formDelete.submit();
        }
    })
   })
}
//18:39 23