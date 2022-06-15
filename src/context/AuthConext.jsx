import React, { useState } from 'react'
import { useReducer } from 'react';
import { createContext } from 'react'
 

export const AuthContext = createContext();

const reducer =(isAuth,action)=>{

 switch(action.type){
  case "HANDLELOGIN": {
   return {
    
     isAuth: true,
     
   };
 }
 case "HANDLELOGOUT": {
  return {
     
    isAuth: false,
    
  };
}
 default: {
  return isAuth;
}
 }

}

export const AuthProvider = ({children})=>{

const [isAuth , dispatch] = useReducer(reducer,false)



 return(
  <AuthContext.Provider value = {[isAuth,dispatch]}>{children}</AuthContext.Provider>
 )
}



