import React from 'react'

export function Photo(props) {
    console.log(props.url)
    return (
        <li>
            <img src={props.url} alt="cats" />
        </li>
    )
}