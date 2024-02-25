function findAddress(address){
    if(typeof address !== "object"){
        return "please provide me a valid object"
    }else{
       const street = obj.street || "--";
        const house = obj.house || "--";
        const socity = obj.socity || "--";

        console.log(street,house,socity);
    }

}

const obj = {
    street: 10,
    house:"15A",
    socity:"Earth parfect"

}
// console.log(findAddress(obj));