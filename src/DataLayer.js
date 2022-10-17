import React,{createContext,useContext,useReducer} from "react";

export const DatatLayerContext= createContext();
//children is what is wrapped inside datalayer here it is app.js
export const DataLayer=({initialState,reducer,children})=>(
    <DatatLayerContext.Provider value={useReducer(reducer,initialState)}>
{children}
    </DatatLayerContext.Provider>
);

export const useDataLayerValue=()=>useContext(DatatLayerContext);