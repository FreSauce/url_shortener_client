import {
    Container,
    Form,
    Button,
    FormControl,
    Row,
    Col,
    InputGroup,
} from "react-bootstrap";

import { addURL } from "../apiCalls";

const Hello = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        // checkURL().then(flag => {
        //     if(flag === 0){
        //         addURL(e.target[0].value, e.target[1].value);
        //     }
        //     else {
        //         alert("URL already exists");
        //     }
        // })
        addURL(e.target[0].value, e.target[1].value);
        console.log(e.target[0].value);
        console.log(e.target[1].value);
    };
    return (
        <Container >
            <h1 className="text-center fw-bold">URL Shortener</h1>
            <Form onSubmit={submitHandler}>
                <Row>
                    <Col>
                        <FormControl type="text" placeholder="Enter URL" />
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                            https://shorturlf.netlify.app/
                            </InputGroup.Text>
                            <FormControl
                                type="text"
                                placeholder="Short Link"
                            />
                        </InputGroup>
                    </Col>
                    <Col xs="auto" className="d-grid gap-4 ">
                        <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default Hello;
