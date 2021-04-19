import * as data from "./api.json"
function api(){
    for(let x in data){
        console.log(data[x][0].name)
    }
}
api()













