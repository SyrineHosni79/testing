import React from 'react'

export default function SearchedBook(props) {
    return (
        <div>
             <p >title:{props.title}</p>
            <p >author:{props.author}</p>
            <p >summary:{props.summary}</p>
            
        </div>
    )
}