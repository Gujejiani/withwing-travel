import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})


export class UserService {

 user: {

 }  
 clientInfo: {
    fullName: ''
 }
 addressInfo: {
    index: ''
 }
 identity: {
    documentType: ''
 }

addUserInfo (info: any){
    if(info.fullName){
        this.clientInfo = {...info}
    }
    if(info.index){
        this.addressInfo ={...info}
    }
    if(info.identity){
        this.identity ={...info}
    }

    this.user = {...this.user, ...info}
    
    console.log(this.user)
}


saveUser(){
    localStorage.setItem('user', JSON.stringify(this.user))
}

getClientInfo(){
    if(!this?.clientInfo?.fullName){
       return
        
    }
    return this.clientInfo
}
getAddressInfo(){
    if(!this?.addressInfo?.index){
       return
        
    }
    return this.addressInfo
}
getIdentityInfo(){
    if(!this?.identity?.documentType){
       return
        
    }
    return this.identity
}

getUser(){
    return this.user
}

addSavedUser(user: any){
this.user=user
}


}



