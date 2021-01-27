// const React = require('react')
// const RecoilRoot = require('recoil').RecoilRoot

// exports.wrapPageElement = ({element, props}) => {
//  return(
//      <RecoilRoot >
//          {element}
//      </RecoilRoot>
//  )
// }


import React from 'react'
import { RecoilRoot } from "recoil";


export const wrapPageElement = ({element, props}) => {
    return(
        <RecoilRoot>
            {element}
        </RecoilRoot>
    )
}