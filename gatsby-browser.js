import React from 'react'
import { RecoilRoot } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { RecoilPersist, updateState } = recoilPersist(
    ['theme'], // configurate that atoms will be stored (if empty then all atoms will be stored),
    {
        key: 'recoil-persist', // this key is using to store data in local storage
        storage: localStorage // configurate which stroage will be used to store the data
    }
)

export const wrapPageElement = ({element, props}) => {
    return(
        <RecoilRoot  initializeState={({set}) => updateState({set})}>
            <RecoilPersist />
            
            {element}
        </RecoilRoot>
    )
}