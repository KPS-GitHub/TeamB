import React from 'react'
import { Row } from 'simple-flexbox'
import styled from 'styled-components'

let Title = styled.h1`
    font-size: 5vh;
    margin-left: 2vw;
`

let ProfPic = styled.img`
    height: 25vh;
`
let Summary = styled.p`
    font-size: 2vh;
`


let ProfileMain = props => {
    return (
        <div>
            <Row vertical='center'>
                <ProfPic 
                    src={props.profPicUrl}
                >
                </ProfPic>
                <Title>
                    {props.name}
                </Title>
            </Row>
            <Row vertical='center'>
                <Summary>
                    {props.summary}
                </Summary>
            </Row>
        </div>
    )
}

export default ProfileMain