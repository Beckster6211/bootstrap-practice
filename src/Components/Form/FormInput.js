import React from "react";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';

function ComFormInput(){
    return(
        <div>
            <p>Form Input</p>
            <p>Form controls add text, buttons or button groups on either side of textual inputs, selects and files</p>
            <p>Place 1 add-on button either side of input (also on both sides of input) Place labels outside input group</p>
            <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>

      <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          https://example.com/users/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>

      <InputGroup>
        <InputGroup.Text>With textarea</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
      <p>Sizing, Add size to InputGroup and contents will automatically resize</p>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Default
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
        <p>Checkbox and radio, use InputGroup.Radio or InputGroup.Checkbox add options to input group</p>
        <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <Form.Control aria-label="Text input with checkbox" />
      </InputGroup>
      <InputGroup>
        <InputGroup.Radio aria-label="Radio button for following text input" />
        <Form.Control aria-label="Text input with radio button" />
      </InputGroup>
      <p>Multiple inputs, While multiple inputs are supported visually, validation styles are only available for input groups with a single input</p>
      <InputGroup className="mb-3">
      <InputGroup.Text>First and last name</InputGroup.Text>
      <Form.Control aria-label="First name" />
      <Form.Control aria-label="Last name" />
    </InputGroup>
    <p>Multiple addons, Multiple add-ons are supported and can be mixed with checkbox and radio input versions</p>
    <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <InputGroup.Text>0.00</InputGroup.Text>
        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
      </InputGroup>
      <InputGroup>
        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
        <InputGroup.Text>$</InputGroup.Text>
        <InputGroup.Text>0.00</InputGroup.Text>
      </InputGroup>
      <p>Button addons</p>
      <InputGroup className="mb-3">
        <Button variant="outline-secondary" id="button-addon1">
          Button
        </Button>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>

      <InputGroup className="mb-3">
        <Button variant="outline-secondary">Button</Button>
        <Button variant="outline-secondary">Button</Button>
        <Form.Control aria-label="Example text with two button addons" />
      </InputGroup>

      <InputGroup>
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username with two button addons"
        />
        <Button variant="outline-secondary">Button</Button>
        <Button variant="outline-secondary">Button</Button>
      </InputGroup>
      <p>Buttons with dropdown</p>
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control aria-label="Text input with dropdown button" />

        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
      </InputGroup>

      <InputGroup>
        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-3"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with 2 dropdown buttons" />
        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-4"
          align="end"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
      <p>Segmented Buttons</p>
      <InputGroup className="mb-3">
        <SplitButton
          variant="outline-secondary"
          title="Action"
          id="segmented-button-dropdown-1"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </SplitButton>
        <Form.Control aria-label="Text input with dropdown button" />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control aria-label="Text input with dropdown button" />
        <SplitButton
          variant="outline-secondary"
          title="Action"
          id="segmented-button-dropdown-2"
          alignRight
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </SplitButton>
      </InputGroup>
        </div>
    )
}

export default ComFormInput