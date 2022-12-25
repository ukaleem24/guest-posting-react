import React, { useState } from 'react';
import {
  Button,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Input,
  Row,
} from 'reactstrap';
import classes from 'assets/css/cutom_css/publisher/open_offer/makeBid.module.css';

const MakeBid = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      <Row>
        <Col>
          <h2 className={classes.heading}>Make a bid</h2>
        </Col>
      </Row>
      <Row>
        <Col sm={5}>
          <h6 className={classes.label}>Your Website</h6>
          <div>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle data-toggle="dropdown" tag="span">
                <Col className={classes['category-container']}>
                  <div className="mt-2">
                    <p className={classes['input-placeholder']}>Choose Website</p>
                  </div>
                  <div className={classes['drop-down-icon']}>
                    <i className="simple-icon-arrow-down" />
                  </div>
                </Col>
              </DropdownToggle>
              <DropdownMenu className={classes['drop-down-item']}>
                <DropdownItem>Header</DropdownItem>
                <DropdownItem>Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Col>
        <Col sm={5}>
          <h6 className={classes.label}>Offer you price</h6>
          <div>
            <FormGroup>
              <Input
                id="exampleText"
                name="text"
                type="text"
                className={classes['title-container']}
                placeholder="$0.00"
              />
            </FormGroup>
          </div>
        </Col>
        <Col sm={2}>
        <Button>Make a bid</Button>
        </Col>
      </Row>
    </>
  );
};

export default MakeBid;
