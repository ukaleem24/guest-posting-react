import React,{useState} from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import classes from 'assets/css/cutom_css/buyer/task/create-task-form.module.css';
import { Button, Card, CardBody, Col, FormGroup, Input, Row } from 'reactstrap';

const CreateTaskForm = () => {
  const isSmallerThan40 = useMediaQuery({
    query: '(max-width: 40rem)',
  });


  const [urlButtonPressedNumber,setUrlButtonPressedNumber]=useState(0);
  
  const [anchorTextButtonPressedNumber,setAnchorTextButtonPressedNumber]=useState(0);

  const urlButtonHandler=()=>{
    setUrlButtonPressedNumber(urlButtonPressedNumber+1);
  }
  const anchorTextButtonHandler=()=>{
    setAnchorTextButtonPressedNumber(anchorTextButtonPressedNumber+1);
  }

  return (
    <>
      <Row>
        <Col>
          <div className={classes.highlightsContainer}>
            <div className={classes.highlightsText}>
              <h4 className={classes['higlighted-text']}>
                Order a high-quality article from us!
              </h4>
            </div>

            <div className={classes.highlightsButton}>
              {/* <Button className={classes.btnn}>Order Article</Button> */}
              <NavLink
                className={classes.btnn}
                to="/marketer/content-purchase/order-article"
              >
                Order Article
              </NavLink>
            </div>
          </div>
        </Col>
      </Row>
      {/* /////////////////////////////////////////////////////////////////////////// */}
      <Card className={classes['card-Container']}>
        <CardBody>
          <div className={classes.container}>
            <h6 className={classes.label}>Content *</h6>
            {isSmallerThan40 && (
              <p className={classes['text-container1']}>
                Add your content (e. g., an article) here. If other is not
                specified by the publisher, you can include up to 3 links (URLs
                and anchors) in your content. Please insert the same URLs and
                anchors in the fields &quot;URL&quot; and &quot;Anchor
                text&quot; below since they will be used to check the performed
                task for compliance with your requirements.
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
                      rows="6"
                      className={classes['content-container']}
                      // placeholder="Provide a title suggestion here if you have one"
                    />
                  </FormGroup>
                </div>
              </Col>
              <Col sm={4}>
                {!isSmallerThan40 && (
                  <p className={classes['text-container2']}>
                    Add your content (e. g., an article) here. If other is not
                    specified by the publisher, you can include up to 3 links
                    (URLs and anchors) in your content. Please insert the same
                    URLs and anchors in the fields &quot;URL&quot; and
                    &quot;Anchor text&quot; below since they will be used to
                    check the performed task for compliance with your
                    requirements.
                  </p>
                )}
              </Col>
            </Row>
          </div>
          {/* /////////////////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////////////////// */}
          <div className={classes.container}>
            <h6 className={classes.label}>URL *</h6>
            {isSmallerThan40 && (
              <p className={classes['text-container1']}>
                Enter the URL that you have included in your content above. It
                will be used to check the performed task for compliance with
                your requirements.
              </p>
            )}
            <Row>
              <Col sm={8}>
                <div>
                  <FormGroup>
                    <Input
                      id="exampleText"
                      name="text"
                      type="url"
                      className={classes['content-container']}
                      placeholder="http(s)://"
                    />
                    {(urlButtonPressedNumber>0) &&<Input
                      id="exampleTex2t"
                      name="text2"
                      type="url"
                      className={classes['content-container']}
                      placeholder="http(s)://"
                    />}
                    {(urlButtonPressedNumber>1) && <Input
                      id="exampleText3"
                      name="text3"
                      type="url"
                      className={classes['content-container']}
                      placeholder="http(s)://"
                    />}
                    {(urlButtonPressedNumber!==2) && <Button onClick={urlButtonHandler}>+ One more</Button>}
                  </FormGroup>
                  
                </div>
              </Col>
              <Col sm={4}>
                {!isSmallerThan40 && (
                  <p className={classes['text-container2']}>
                    Enter the URL that you have included in your content above.
                    It will be used to check the performed task for compliance
                    with your requirements.
                  </p>
                )}
              </Col>
            </Row>
          </div>
          {/* /////////////////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////////////////// */}
          <div className={classes.container}>
            <h6 className={classes.label}>Anchor text</h6>
            {isSmallerThan40 && (
              <p className={classes['text-container1']}>
                Enter the anchor text that you have included in your content
                above. It will be used to check the performed task for
                compliance with your requirements.
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
                      className={classes['content-container']}
                      placeholder="Provide your anchor text here"
                    />
                    {(anchorTextButtonPressedNumber>0)&&<Input
                      id="exampleText"
                      name="text"
                      type="text"
                      className={classes['content-container']}
                      placeholder="Provide your anchor text here"
                    />}
                    {(anchorTextButtonPressedNumber!==1)&&<Button onClick={anchorTextButtonHandler}>+ One more</Button>}
                  </FormGroup>
                </div>
              </Col>
              <Col sm={4}>
                {!isSmallerThan40 && (
                  <p className={classes['text-container2']}>
                    Enter the anchor text that you have included in your content
                    above. It will be used to check the performed task for
                    compliance with your requirements.
                  </p>
                )}
              </Col>
            </Row>
          </div>
          {/* /////////////////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////////////////// */}
          <div className={classes.container}>
            <h6 className={classes.label}>Special requirements</h6>
            {isSmallerThan40 && (
              <p className={classes['text-container1']}>
                If necessary, you can write additional task requirements here,
                e. g., deadline, necessity of disclosure, preferences regarding
                content placement, etc.
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
                      rows="6"
                      className={classes['content-container']}
                      placeholder="Provide your anchor text here"
                    />
                  </FormGroup>
                </div>
              </Col>
              <Col sm={4}>
                {!isSmallerThan40 && (
                  <p className={classes['text-container2']}>
                    If necessary, you can write additional task requirements
                    here, e. g., deadline, necessity of disclosure, preferences
                    regarding content placement, etc.
                  </p>
                )}
              </Col>
            </Row>
          </div>
          {/* /////////////////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////////////////// */}
          
          <div className={classes.container}>
            <Row>
              <Col sm={2}>
                <div className={classes['task-price-container']} >
                  <p className={classes['task-price-label']}>Article price:</p>
                  <h1 className={classes['task-price']}>$0</h1>
                </div>
              </Col>
              <Col sm={3}>
                {!isSmallerThan40 && <p className={classes['text-container2']}>
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
          {/* /////////////////////////////////////////////////////////////////////////// */}
          {/* /////////////////////////////////////////////////////////////////////////// */}
          

          <div className={classes.container} >
            <NavLink className={classes['form-btn']}>Order Article</NavLink>
          </div>
          
        </CardBody>
      </Card>
    </>
  );
};

export default CreateTaskForm;
