
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

const formSearch = document.querySelector("#form-search");
if(formSearch){
    let url = new URL(window.location.href);
    formSearch.addEventListener("submit",(e)=>{
        e.preventDefault();
        console.log(e.target.elements.keyword.value);
        const keyword = e.target.elements.keyword.value
        if(keyword){
            url.searchParams.set("keyword",keyword);
        }else{
            url.searchParams.delete("keyword");
        }
        window.location.href = url.href;
    })
} 
// pagination
const pagination = document.querySelectorAll("[button-pagination]");
console.log(pagination);
if(pagination){
    let url = new URL(window.location.href);
    pagination.forEach(button=>{
        button.addEventListener("click",()=>{
            const page = button.getAttribute("button-pagination");
            url.searchParams.set("page",page);
            window.location.href = url.href;
        })
    })
}
//done
//checkbox
const checkBox = document.querySelector("[checkbox-multi]");
if(checkBox){
    const inputCheck = checkBox.querySelector("input[name='checkall']");
    const inputId = checkBox.querySelectorAll("input[name='id']");
    inputCheck.addEventListener("click",()=>{
        if(inputCheck.checked){
             inputId.forEach(inputCheck =>{
                inputCheck.checked = true;
             })
        }else{
            inputId.forEach(inputCheck=>{
                inputCheck.checked = false;
             })
        }
    });
    inputId.forEach(input=>{
         
        input.addEventListener("click",()=>{
        const  count = checkBox.querySelectorAll("input[name='id']:checked").length;
          if(count==inputId.length){
            inputCheck.checked = true;
        }else{
            inputCheck.checked = false;
        }
        });
       
        
    });

};
const formChangeMulti = document.querySelector("[form-change-multi]");
if(formChangeMulti){
    formChangeMulti.addEventListener("submit",(e)=>{
        e.preventDefault();
        const checkBox = document.querySelector("[checkbox-multi]");
        const inputChecked = checkBox.querySelectorAll(
            "input[name='id']:checked"
        );
        if(inputChecked.length>0){
            let id = [];
            const inputFiled = formChangeMulti.querySelector("input[name='ids']");
            inputChecked.forEach(item=>{
                const id1 = item.value;
                id.push(id1);
            })
            inputFiled.value = id.join(",");
            formChangeMulti.submit();
        }else{
            alert("Vui long chon it nhat mot ban ghi")
        }
    })
}
//done