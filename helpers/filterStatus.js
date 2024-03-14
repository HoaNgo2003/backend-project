module.exports = (req)=>{
    let filterStatus = [
        {
          name: "tat ca",
          status: "",
          class: ""
        },
        {
          name:"hoat dong",
          status:"active",
          class:""
        },
        {
          name:"dung hoat dong",
          status: "unactive",
          class:""
        }
      ];
      if(req.status){
        const index = filterStatus.findIndex(item=>item.status== req.status);
        filterStatus[index].class="active";
      }else{
        const index = filterStatus.findIndex(item=>item.status== "");
        filterStatus[index].class="active";
      }
    return filterStatus;
}
