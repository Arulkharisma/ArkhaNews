import React from "react"
import { Link, Head } from "@inertiajs/react"

export default function Hompage(props){
    console.log(props)
    return(
        <div className="flex justify-center h-screen">
            <Head title={props.title} />
            <h1>hallo react</h1>
        </div>
    )
}