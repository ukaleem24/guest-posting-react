import React, { useState } from 'react';
import {
  Row,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
} from 'reactstrap';
import classes from 'assets/css/cutom_css/buyer/publisher/SortingFilterSearchResult.module.css';

const SearchResult = () => {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [perPAgeValue, setPerPageValue] = useState(10);
  const [mainFilterValue, setMainFilterValue] = useState(
    'Best price and Completion rate'
  );

  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

  const perPageHandler = (value) => {
    setPerPageValue(value);
  };

  const mainFilterHandler = (value) => {
    setMainFilterValue(value);
  };

//   useEffect(() => {
//     OnSavePostPerPage(perPAgeValue);
//   }, [perPAgeValue]);

  return (
    <Row className={classes.container}>
      <Col sm={3}>
        <h2 className={classes.heading}>Search Results</h2>
      </Col>

      <Col sm={9}>
        <Row className={classes.adjusting}>
          <div className={classes.colAdjustment}>
            <div>
              <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
                <DropdownToggle className={classes.dropdown} caret>
                  {' '}
                  Show: {perPAgeValue}
                  {' Per Page'}
                </DropdownToggle>
                <DropdownMenu className={classes.dropdownmenu}>
                  <DropdownItem onClick={() => perPageHandler(10)}>
                    10 Per Page
                  </DropdownItem>
                  <DropdownItem onClick={() => perPageHandler(20)}>
                    20 Per Page
                  </DropdownItem>
                  <DropdownItem onClick={() => perPageHandler(30)}>
                    30 Per Page
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            {/* <Button onClick={perPageHandler}>click</Button> */}

            {/* <FormGroup row>
                <Label className={classes.label} for="show">Show:</Label>
                <Col>
                  <Input
                    className={classes.dropDown}
                    id="ServiceType"
                    name="select"
                    type="select"
                  >
                    
                    <option>30 Per Page</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  
                  </Input>
                </Col>
              </FormGroup> */}
          </div>

          <div>
            <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
              <DropdownToggle className={classes.dropdown} caret>
                {' '}
                Show: {mainFilterValue}
              </DropdownToggle>
              <DropdownMenu className={classes.dropdownmenu}>
                <DropdownItem
                  onClick={() =>
                    mainFilterHandler('Best price and Completion rate')
                  }
                >
                  Best price and Completion rate
                </DropdownItem>
                <DropdownItem
                  onClick={() => mainFilterHandler('From the lowest price')}
                >
                  From the lowest price
                </DropdownItem>
                <DropdownItem
                  onClick={() => mainFilterHandler('From the greatest price')}
                >
                  From the greatest price
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Row>
      </Col>
    </Row>
  );
};

export default SearchResult;
