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

const TotalOffers = () => {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [serviceType, setServiceType] = useState('Show all');
  const [mainFilterValue, setMainFilterValue] = useState(
    'Best price and Completion rate'
  );

  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

  const perPageHandler = (value) => {
    setServiceType(value);
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
        <h2 className={classes.heading}>Offers (345)</h2>
      </Col>

      <Col sm={9}>
        <Row className={classes.adjusting}>
          <div className={classes.colAdjustment}>
            <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
              <DropdownToggle className={classes.dropdown} caret>
                {' '}
                Service type: {serviceType}

              </DropdownToggle>
              <DropdownMenu className={classes.dropdownmenu}>
                <DropdownItem
                  onClick={() => perPageHandler('Content placement')}
                >
                  Content placement
                </DropdownItem>
                <DropdownItem
                  onClick={() =>
                    perPageHandler('Content creation and placement')
                  }
                >
                  Content creation and placement
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          <div>
            <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
              <DropdownToggle className={classes.dropdown} caret>
                {' '}
                Price Type: {mainFilterValue}
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

export default TotalOffers;
