 
 export const getDay=()=>{
    let weekday=['Sun', 'Mon', 'Tue' ,' Wed' ,'Thu' , 'Fri' ,'Sat']

    let date= new Date();
    let curday=weekday[date.getDay()]
    return curday;

}
 export const getDate=()=>{
    const months = ["January", "February", "March", "April", "May", "June",
         "July", "August", "September", "October", "November", "December"];
         let now =new Date();
         let month= months[now.getMonth()];
         let today= now.getDate();
         return ` ${today},${month}`

}

