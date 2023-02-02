import React, { useState } from "react";

function Submit(props){
    // function Submited(e){
    //     // e.preventDefault()
    //     alert(props.displayName)
    //     // alert("hi")
    //     // const hasError = Object
    //     //     .values(error)
    //     //     .some((e) => {
    //     //         return e
    //     //     })
    //     // if(hasError){
    //     //     alert('Can not submit form')
    //     // }else {
    //     //     alert('Submitting form')
    //     // }
    // }
return(
    <>
    {/* <input type="submit" id="button" data-test-id="submit" value="Submit" onClick={Submited}/> */}
    <button type="submit" id="button" >Submit</button>
    </>
)
}
export default Submit;
