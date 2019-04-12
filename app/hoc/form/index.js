// import React , { useState } from 'react';

// const withFieldState  = (a) => (props) => {
//     const [fieldState,setFieldState] = useState({ ...initialState });
//     const updatefieldState = (key,value) =>{
//         setFieldState({
//             [key]:value
//         })
//     }

//     const resetToDefault  = () => {
//         setFieldState({
//             ...initialState
//         })
//     }

//     return {
//         fieldState,
//         onChangeField,
//         resetToDefault,
//         ...props
//     }
// }


// const withErrState = (a) => (props) => {
//     const [errState,setErrState] = useState({ ...initialState });
//     const updateErrState = (key,value) =>{
//         setErrState({
//             [key]:value
//         })
//     }

//     const resetToDefault  = () => {
//         setErrState({
//             ...initialState
//         })
//     }

//     return {
//         errState,
//         updateErrState,
//         resetToDefault,
//         ...props
//     }
// }

// withFieldState(withErrState())