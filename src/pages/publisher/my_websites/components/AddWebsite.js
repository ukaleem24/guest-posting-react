// import BreadCrumb from 'components/breadcrumb/BreadCrumb'
import { Colxx } from 'components/common/CustomBootstrap';
import React, { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import classes from 'assets/css/cutom_css/publisher/my_platform/add-website.module.css';

const AddWebsite = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <h1>Add your website info</h1>
        </Colxx>
      </Row>
      <Card className={classes.card}>
        <CardBody className={classes['card-body']}>
          <Row>
            <Col>
              <h6 className={classes.label}>Title suggestion</h6>
              <FormGroup>
                <Input
                  id="exampleText"
                  name="url"
                  type="text"
                  className={classes['text-box-container']}
                  placeholder="Provide a title suggestion here if you have one"
                />
              </FormGroup>
            </Col>
            <Col>
              <h6 className={classes.label}>Categories (up to 3) *</h6>
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
            </Col>
          </Row>
          <Row>
            <Col>
              <h6 className={classes.label}>Language *</h6>
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
            </Col>
            <Col>
              <h6 className={classes.label}>Links *</h6>
              <FormGroup check>
                  <Input id="checkbox2" type="checkbox" />{' '}
                  <Label check>Dofollow</Label>
                </FormGroup>
                <FormGroup check>
                  <Input id="checkbox2" type="checkbox" />{' '}
                  <Label check>Nofollow</Label>
                </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <h6 className={classes.label}>
                  Content has to be marked as sponsored *
                </h6>
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
              <div>
                <h6 className={classes.label}>Special Requirments</h6>
                <FormGroup>
                  <Input
                    id="exampleText"
                    name="text"
                    type="textarea"
                    className={classes['text-box-container']}
                    placeholder="Provide a title suggestion here if you have one"
                  />
                </FormGroup>
              </div>
              <div>
                <h6 className={classes.label}>
                  Links to your best article to show buyers example of your work
                </h6>
                <FormGroup>
                  <Input
                    id="exampleText"
                    name="text"
                    type="text"
                    className={classes['text-box-container']}
                    placeholder="htts(s)://"
                  />
                </FormGroup>
              </div>
            </Col>
            <Col>
              <div>
                <FormGroup check>
                  <Input id="checkbox2" type="checkbox" />{' '}
                  <Label check>Content placement</Label>
                  <p>By Choosing this service type you agree to place buyer`&apos;`s content on your website permanently.</p>
                </FormGroup>
              </div>
              <div>
                <FormGroup check>
                  <Input id="checkbox2" type="checkbox" />{' '}
                  <Label check>Content creation and placement</Label>
                  <p>By Choosing this service type you agree to write an article according to buyer`&apos;`s requirement and place it on your website permanently.</p>
                </FormGroup>
              </div>
              <div>
                <FormGroup check>
                  <Input id="checkbox2" type="checkbox" />{' '}
                  <Label check>Mini-post upto 300 words, 1 hyperlink allowed</Label>
                </FormGroup>
                <FormGroup check>
                  <Input id="checkbox2" type="checkbox" />{' '}
                  <Label check>Article 300-1000 words, 2 hyperlink allowed</Label>
                </FormGroup>
                <FormGroup check>
                  <Input id="checkbox2" type="checkbox" />{' '}
                  <Label check>Long article more than 300 words, 3 hyperlink allowed</Label>
                </FormGroup>
              </div>
            </Col>
          </Row>
          <Button>Update</Button>
        </CardBody>
      </Card>
    </>
  );
};

export default AddWebsite;
