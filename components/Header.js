import { Navbar } from 'react-bootstrap'

export default function Header(props) {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Text>
                What is Python?
                </Navbar.Text>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}