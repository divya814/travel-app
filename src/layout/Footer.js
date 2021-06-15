import React from 'react'
import {Container} from "reactstrap"

export default function Footer() {
    return (
        <Container style={{background: "linear-gradient(to right, #538FFB, #5737D6)", margin:0 }} fluid tag="footer" className="text-center bg-info text-white text-uppercase p-3 absolute-bottom">
            Developed by Divya Maheshwari
        </Container>
    )
}
