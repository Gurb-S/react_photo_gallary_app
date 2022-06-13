import React from 'react'

export function Photo(props) {
    return (
        <li>
            <img src={props.url} alt="cats" />
        </li>
    )
}