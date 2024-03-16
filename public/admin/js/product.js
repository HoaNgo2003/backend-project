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