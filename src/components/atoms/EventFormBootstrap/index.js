import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
import {
  Button,
  Col,
  Container,
  DropdownButton,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { TASK_LIST } from "../../../utils/constants";

const EventFormBootstrap = () => {
  const handleDropDownSelect = (value) => {
    console.log(value);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <Container className="p-3">
      <Row>
        <Col>
          <DropdownButton
            id="dropdown-basic-button"
            title="Dropdown button"
            onSelect={handleDropDownSelect}
          >
            {TASK_LIST.map((task) => (
              <Dropdown.Item eventKey={task.Id} key={task.Id}>
                {task.name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <label>Description</label>
          <InputGroup>
            <FormControl as="textarea" />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <label>Date(mm-dd-yyyy)</label>
          <InputGroup>
            <FormControl onChange={handleChange} />
          </InputGroup>
        </Col>
        <Col>
          <label>Time(hh:mm:ss)</label>
          <InputGroup>
            <FormControl onChange={handleChange} />
          </InputGroup>
        </Col>
        <Col>
          <label>Duration</label>
          <InputGroup>
            <FormControl onChange={handleChange} />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <label>Address</label>
          <InputGroup>
            <FormControl as="textarea" />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <label>City</label>
          <InputGroup>
            <FormControl onChange={handleChange} />
          </InputGroup>
        </Col>
        <Col>
          <label>State</label>
          <InputGroup>
            <FormControl onChange={handleChange} />
          </InputGroup>
        </Col>
        <Col>
          <label>CLLI</label>
          <InputGroup>
            <FormControl onChange={handleChange} />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <label>Contact Name</label>
          <InputGroup>
            <FormControl onChange={handleChange} />
          </InputGroup>
        </Col>
        <Col>
          <label>Contact Phone</label>
          <InputGroup>
            <FormControl onChange={handleChange} />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <label>Address</label>
          <InputGroup>
            <FormControl as="textarea" />
          </InputGroup>
        </Col>
      </Row>
      <Row style={{ paddingTop: 32 }}>
        <Col>
          <Button color="primary">Create event</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default EventFormBootstrap;
