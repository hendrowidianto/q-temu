import React from 'react'
import styled from 'styled-components'

const Div = styled.footer `
    width:100%;
    float:left;
    min-height:50px;
    background-color:green
`
const Paragraph = styled.p `
    margin-top:40px;
`
const Color = styled.h5 `
    color:red;
    font-weight:bold;
    margin-bottom:40px
`
const Footer = () => (
    <Div>
        <Paragraph>Copyright Hacktiv8 2018</Paragraph>
        <Color>Footer with styled UI</Color>
    </Div>
);

export default Footer