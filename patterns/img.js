import React from 'react'
import styled from  'styled-components'

const Img = styled.img`
    position: relative;
    max-width:${props => props.width || "100%"};
    max-height:${props => props.height || "100%"};
    padding:${props => props.padding || "0"};
    margin:${props => props.margin || "0"};
    border:none;
    @media(max-width:576px){
        position:relative;
        width:auto;
        max-height:100%;
    }
`

export default function img(props) {
    return (
        <Img
        width={props.width}
        height={props.height}
        margin={props.margin}
        padding={props.padding}
        border={props.border}
        src={props.src}
        alt={props.alt}>
      
        </Img>
    )
}
