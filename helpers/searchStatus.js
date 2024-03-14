module.exports = (req)=>{
    let object = {
        keyword:"",
        regex:""
    }
    if(req.keyword){
      object.keyword = req.keyword;
      const regex = new RegExp(object.keyword, "i");
      object.regex = regex;
    }
    return object;
}