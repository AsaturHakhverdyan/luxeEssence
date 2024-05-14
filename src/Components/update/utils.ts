export const isMatchPassword = (firstPass:string, secondPass:string)=>{
    if(firstPass === secondPass && firstPass!==''){
       return true
    }
    else{
       return false
    }
 };

