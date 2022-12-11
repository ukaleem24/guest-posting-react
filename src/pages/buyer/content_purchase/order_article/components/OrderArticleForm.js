import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
// import { Row } from 'reactstrap'
import classes from 'assets/css/cutom_css/buyer/content_purchase/order-article-form.module.css';
import {
  Row,
  Col,
  Card,
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Input,
  
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import { useState } from 'react';
// import { Form } from 'react-router-dom';

const OrderArticleForm = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const isSmallerThan40 = useMediaQuery({
    query: '(max-width: 40rem)',
  });

  return (
    <>
      <Card className={classes['card-Container']}>
        <CardBody>
          <div>
            <h6 className={classes.label}>Word Count *</h6>
            {isSmallerThan40 && (
              <p className={classes['word-count-text-container2']}>
                Set your desired length for the article. Keep in mind that it
                will directly impact the final price.
              </p>
            )}
            <Row>
              <Col sm={6}>
                <div className={classes['word-count-container']}>
                  <Col sm={3} className={classes['word-count-item-container']}>
                    <h6 className={classes['word-count-item']}>500 words</h6>
                  </Col>
                  <Col sm={3} className={classes['word-count-item-container']}>
                    <h6 className={classes['word-count-item']}>1000 words</h6>
                  </Col>
                  <Col sm={3} className={classes['word-count-item-container']}>
                    <h6 className={classes['word-count-item']}>1500 words</h6>
                  </Col>
                  <Col sm={3} className={classes['word-count-item-container']}>
                    <h6 className={classes['word-count-item']}>2000 words</h6>
                  </Col>
                </div>
              </Col>
              <Col className={classes['word-count-text-container']} sm={6}>
                {!isSmallerThan40 && (
                  <p className={classes['word-count-text']}>
                    Set your desired length for the article. Keep in mind that
                    it will directly impact the final price.
                  </p>
                )}
              </Col>
            </Row>
          </div>
          {/* ///////word Count Ends/////////////////// */}
          {/* ///////Category starts/////////////////// */}
          <div>
            <h6 className={classes.label}>Category *</h6>
            {isSmallerThan40 && (
              <p className={classes['word-count-text-container2']}>
                Which business filed do you need an article for? We’ll assign a
                copywriter with the most experience in it to write your article.
              </p>
            )}
            <Row>
              <Col sm={8}>
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
              <Col sm={4}>
                {!isSmallerThan40 && (
                  <p className={classes['category-text']}>
                    Which business filed do you need an article for? We’ll
                    assign a copywriter with the most experience in it to write
                    your article.
                  </p>
                )}
              </Col>
            </Row>
          </div>
          {/* ///////Category Ends/////////////////// */}
          {/* ///////Title Suggestion starts/////////////////// */}

          <div>
            <h6 className={classes.label}>Title suggestion</h6>
            {isSmallerThan40 && (
              <p className={classes['word-count-text-container2']}>
                Suggest a headline or let copywriters craft one for you
                following the best practices of strong and catchy titles.
              </p>
            )}
            <Row>
              <Col sm={8}>
                <div>
                  <FormGroup>
                    <Input
                      id="exampleText"
                      name="text"
                      type="textarea"
                      className={classes['title-container']}
                      placeholder="Provide a title suggestion here if you have one"
                    />
                  </FormGroup>
                </div>
              </Col>
              <Col sm={4}>
                {!isSmallerThan40 && (
                  <p className={classes['category-text']}>
                    Suggest a headline or let copywriters craft one for you
                    following the best practices of strong and catchy titles.
                  </p>
                )}
              </Col>
            </Row>
          </div>
          {/* ///////Title Suggestion Ends/////////////////// */}
          {/* ///////Keywords starts/////////////////// */}
          <div>
            <h6 className={classes.label}>Keywords *</h6>
            {isSmallerThan40 && (
              <p className={classes['word-count-text-container2']}>
                State the keywords you want to be included in an article so that
                you can rank higher for them.
              </p>
            )}
            <Row>
              <Col sm={8}>
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
              <Col sm={4}>
                {!isSmallerThan40 && (
                  <p className={classes['category-text']}>
                    State the keywords you want to be included in an article so
                    that you can rank higher for them.
                  </p>
                )}
              </Col>
            </Row>
          </div>
          {/* ///////Keywords Ends/////////////////// */}
          {/* ///////Content goal starts/////////////////// */}
          <div>
            <h6 className={classes.label}>Content goal</h6>
            {isSmallerThan40 && (
              <p className={classes['word-count-text-container2']}>
                Set the goal - readers’ education, brand awareness boost, etc. -
                and allow copywriters to achieve it using the power of language.
              </p>
            )}
            <Row>
              <Col sm={8}>
                <div>
                  <FormGroup>
                    <Input
                      id="exampleText"
                      name="text"
                      type="text"
                      className={classes['title-container']}
                    />
                  </FormGroup>
                </div>
              </Col>
              <Col sm={4}>
                {!isSmallerThan40 && (
                  <p className={classes['category-text']}>
                    Set the goal - readers’ education, brand awareness boost,
                    etc. - and allow copywriters to achieve it using the power
                    of language.
                  </p>
                )}
              </Col>
            </Row>
          </div>
          {/* ///////Content goal Ends/////////////////// */}
          {/* ///////Target audience starts/////////////////// */}
          <div>
            <h6 className={classes.label}>Target audience</h6>
            {isSmallerThan40 && (
              <p className={classes['word-count-text-container2']}>
                Indicate the readership you’re trying to reach to help
                copywriters better align the article with the reader’s
                expectations.
              </p>
            )}
            <Row>
              <Col sm={8}>
                <div>
                  <FormGroup>
                    <Input
                      id="exampleText"
                      name="text"
                      type="text"
                      className={classes['title-container']}
                    />
                  </FormGroup>
                </div>
              </Col>
              <Col sm={4}>
                {!isSmallerThan40 && (
                  <p className={classes['category-text']}>
                    Indicate the readership you’re trying to reach to help
                    copywriters better align the article with the reader’s
                    expectations.
                  </p>
                )}
              </Col>
            </Row>
          </div>
          {/* ///////Target audience Ends/////////////////// */}
          {/* ///////Sample content starts/////////////////// */}
          <div>
            <h6 className={classes.label}>Sample content</h6>
            {isSmallerThan40 && (
              <p className={classes['word-count-text-container2']}>
                Provide examples of the articles to ensure that copywriters
                understand what you have in mind as a final piece.
              </p>
            )}
            <Row>
              <Col sm={8}>
                <div>
                  <FormGroup>
                    <Input
                      id="exampleText"
                      name="text"
                      type="text"
                      className={classes['title-container']}
                    />
                  </FormGroup>
                </div>
              </Col>
              <Col sm={4}>
                {!isSmallerThan40 && (
                  <p className={classes['category-text']}>
                    Provide examples of the articles to ensure that copywriters
                    understand what you have in mind as a final piece.
                  </p>
                )}
              </Col>
            </Row>
          </div>
          {/* ///////Sample content Ends/////////////////// */}
          {/* ///////Article Price starts/////////////////// */}
          <div>
            <Row>
              <Col sm={2}>
                <div className={classes['article-price-container']} >
                  <p className={classes['article-price-label']}>Article price:</p>
                  <h1 className={classes['article-price']}>$0</h1>
                </div>
              </Col>
              <Col sm={3}>
                {!isSmallerThan40 && <p className={classes['category-text']}>
                  As soon as you send the order, the money for it will be
                  reserved on your balance. If you don’t have enough money, the
                  order will be saved as a draft.
                </p>}
              </Col>
            </Row>
            {isSmallerThan40 && <p className={classes['mobile-view-text']}>
                  As soon as you send the order, the money for it will be
                  reserved on your balance. If you don’t have enough money, the
                  order will be saved as a draft.
                </p>}
          </div>
          {/* ///////Article Price Ends/////////////////// */}

          <div >
            <NavLink className={classes['form-btn']}>Order Article</NavLink>
          </div>
          
        </CardBody>
      </Card>
    </>
  );
};

export default OrderArticleForm;
