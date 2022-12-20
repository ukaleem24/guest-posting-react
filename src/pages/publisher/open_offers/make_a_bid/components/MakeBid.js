import React, { useState } from 'react';
import {
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
          <h2 className={classes.heading}>Search Results</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h6 className={classes.label}>Search Results</h6>
          <div>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle data-toggle="dropdown" tag="span">
                <Col className={classes['category-container']}>
                  <div>Choose Category</div>
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
        <Col>
        <h6 className={classes.label}>Search Results</h6>
          <div>
            <FormGroup>
              <Input
                id="exampleText"
                name="text"
                type="text"
                className={classes['title-container']}
                placeholder="Separate each keyword with a comma"
              />
            </FormGroup>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MakeBid;
