// import BreadCrumb from 'components/breadcrumb/BreadCrumb'
import { Colxx } from 'components/common/CustomBootstrap';
import React, { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Collapse,
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

const AddWebsiteForm = () => {
  const [dropdownOpenCategorey, setDropdownOpenCategorey] = useState(false);
  const [dropdownOpenLanguage, setDropdownOpenLanguage] = useState(false);
  const [articleExamplePressedNumber, setArticleExamplePressedNumber] =
    useState(0);

  const [contentPlacement, setContentPlacement] = useState(false);

  const toggleCategorey = () =>
    setDropdownOpenCategorey((prevState) => !prevState);
  const toggleLanguage = () =>
    setDropdownOpenLanguage((prevState) => !prevState);

  const articleExampleHandler = () => {
    setArticleExamplePressedNumber((previousNumber) => previousNumber + 1);
  };

  const contentPlacementHandler = () => {
    setContentPlacement((previousState) => !previousState);
  };

  return (
    <>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <h1 className={classes.search_label}>
            <b>Add your website info</b>
          </h1>
        </Colxx>
      </Row>
      

      <Row className={classes['complition-bar-container']}>
        <Col xs={6} className={classes['first-colums-fill']} />
      </Row>
      <Card className={classes.card}>
        <CardBody className={classes['card-body']}>
          <Row>
            <Col lg={6}>
              <h6 className={classes.label}>URL</h6>
              <FormGroup>
                <Input
                  id="exampleText"
                  name="url"
                  type="text"
                  className={classes['text-box-container']}
                  placeholder="URL"
                />
              </FormGroup>
            </Col>
            <Col lg={6}>
              <h6 className={classes.label}>Categories (up to 3) *</h6>
              <Dropdown isOpen={dropdownOpenCategorey} toggle={toggleCategorey}>
                <DropdownToggle data-toggle="dropdown" tag="span">
                  <Col className={classes['category-container']}>
                    <div>
                      <p className={classes['drop-down-title']}>
                        Choose Category
                      </p>
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
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <h6 className={classes.label}>Language *</h6>
              <Dropdown isOpen={dropdownOpenLanguage} toggle={toggleLanguage}>
                <DropdownToggle data-toggle="dropdown" tag="span">
                  <Col className={classes['category-container']}>
                    <div>
                      <p className={classes['drop-down-title']}>
                        Choose Language
                      </p>
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
            </Col>
            <Col lg={6}>
              <h6 className={classes.label}>Links *</h6>
              <div className={classes['checkbox-container']}>
                <FormGroup check>
                  <Input
                    id="checkbox2"
                    type="checkbox"
                    className={classes['check-box']}
                  />{' '}
                  <Label check className={classes['check-box-label']}>
                    Dofollow
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    id="checkbox2"
                    type="checkbox"
                    className={classes['check-box']}
                  />{' '}
                  <Label check className={classes['check-box-label']}>
                    Nofollow
                  </Label>
                </FormGroup>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <div>
                <h6 className={classes.label}>
                  Content has to be marked as sponsored *
                </h6>
                <p className={classes['label-description']}>
                  Disclosure is used to label sponsered content,
                  e.g.:&quot;Promoted by&quot;, &quot;Sponsered by&quot;,
                  &quot;Presented by&quot;, etc.
                </p>
                <div className={classes['radio-button-container']}>
                  <FormGroup check>
                    <Input
                      name="radio2"
                      type="radio"
                      className={classes['radio-button']}
                    />{' '}
                    <Label check className={classes['radio-button-label']}>
                      Yes
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      name="radio2"
                      type="radio"
                      className={classes['radio-button']}
                    />{' '}
                    <Label check className={classes['radio-button-label']}>
                      NO
                    </Label>
                  </FormGroup>
                </div>
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
              <div className="mb-5">
                <h6 className={classes.label}>
                  Links to your best article to show buyers example of your work
                </h6>

                <div>
                  <FormGroup className={classes['best-article-container']}>
                    <Input
                      id="exampleText"
                      name="text"
                      type="text"
                      className={classes['best-article-input']}
                      placeholder="htts(s)://"
                    />
                    {articleExamplePressedNumber > 0 && (
                      <Input
                        id="exampleText"
                        name="text"
                        type="text"
                        className={classes['best-article-input']}
                        placeholder="htts(s)://"
                      />
                    )}
                  </FormGroup>
                  {articleExamplePressedNumber === 0 && (
                    <Button
                      onClick={articleExampleHandler}
                      className={classes['best-article-button']}
                    >
                      +
                    </Button>
                  )}
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <h6 className={classes.label}>Service Type</h6>

              <div>
                <Row>
                  <Col xs={9}>
                    <FormGroup check>
                      <Input
                        id="checkbox2"
                        type="checkbox"
                        className={classes['check-box']}
                        onChange={contentPlacementHandler}
                      />{' '}
                      <Label className={classes['check-box-label']} check>
                        Content placement
                      </Label>
                      <p className={classes.description}>
                        By Choosing this service type you agree to place
                        buyer`&apos;`s content on your website permanently.
                      </p>
                    </FormGroup>
                  </Col>
                  <Col xs={3} className={classes['amount-text-box-container']}>
                    <Input
                      id="exampleText"
                      name="url"
                      type="text"
                      className={classes['amount-text-box']}
                      placeholder="0.00"
                    />
                    <span className={classes['dollor-sign']}>$</span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Collapse
                      isOpen={contentPlacement}
                      className={classes['collapse-container']}
                    >
                      <p className={classes['collapse-label']}>
                        How many links can be placed in one article?
                      </p>
                      <Dropdown
                        isOpen={dropdownOpenLanguage}
                        toggle={toggleLanguage}
                      >
                        <DropdownToggle data-toggle="dropdown" tag="span">
                          <Col className={classes['category-container']}>
                            <div>
                              <p className={classes['drop-down-title']}>
                                Choose Language
                              </p>
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
                    </Collapse>
                  </Col>
                </Row>
              </div>
              <div>
                <FormGroup check>
                  <Input
                    id="checkbox2"
                    type="checkbox"
                    className={classes['check-box']}
                  />{' '}
                  <Label check className={classes['check-box-label']}>
                    Content creation and placement
                  </Label>
                  <p className={classes.description}>
                    By Choosing this service type you agree to write an article
                    according to buyer`&apos;`s requirement and place it on your
                    website permanently.
                  </p>
                </FormGroup>
              </div>
              <div className={classes['article-price-container']}>
                <Row>
                  <Col xs={9}>
                    <FormGroup check>
                      <Input id="checkbox2" type="checkbox" />{' '}
                      <Label check>
                        Mini-post upto 300 words, 1 hyperlink allowed
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col xs={3} className={classes['amount-text-box-container']}>
                    <Input
                      id="exampleText"
                      name="url"
                      type="text"
                      className={classes['amount-text-box']}
                      placeholder="0.00"
                    />
                    <span className={classes['dollor-sign']}>$</span>
                  </Col>
                </Row>

                <Row>
                  <Col xs={9}>
                    <FormGroup check>
                      <Input id="checkbox2" type="checkbox" />{' '}
                      <Label check>
                        Article 300-1000 words, 2 hyperlink allowed
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col xs={3} className={classes['amount-text-box-container']}>
                    <Input
                      id="exampleText"
                      name="url"
                      type="text"
                      className={classes['amount-text-box']}
                      placeholder="0.00"
                    />
                    <span className={classes['dollor-sign']}>$</span>
                  </Col>
                </Row>

                <Row>
                  <Col xs={9}>
                    <FormGroup check>
                      <Input id="checkbox2" type="checkbox" />{' '}
                      <Label check>
                        Long article more than 300 words, 3 hyperlink allowed
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col xs={3} className={classes['amount-text-box-container']}>
                    <Input
                      id="exampleText"
                      name="url"
                      type="text"
                      className={classes['amount-text-box']}
                      placeholder="0.00"
                    />
                    <span className={classes['dollor-sign']}>$</span>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Button className={classes['update-btn']}>Update</Button>
        </CardBody>
      </Card>
    </>
  );
};

export default AddWebsiteForm;
