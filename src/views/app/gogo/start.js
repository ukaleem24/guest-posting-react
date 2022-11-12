import React from 'react';
import { Row, Col } from 'reactstrap';

// import { Row } from 'reactstrap';
// import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import Filter from 'components/search/Filter';
import NavBarSearchResults from 'components/search/NavSearchResult';
import SortingFilterSearchResult from 'components/search/SortingFilterSearchResult';
import SearchResultList from 'components/search/SearchResultList';

// import DatePickerExamples from '../../../containers/forms/DatePickerExamples';

const Start = ({ match }) => (
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const toggle = () => setDropdownOpen(!dropdownOpen);
  <>
    <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="menu.start" match={match} />
        <Separator className="mb-5" />
      </Colxx>
    </Row>
    <Row>
      <Colxx xxs="12" className="mb-4">
        <h1>Search for verified publishers</h1>
      </Colxx>
    </Row>
    <Row>
      <Filter />
    </Row>
    <Row>
      <Col>
        <NavBarSearchResults />
      </Col>
    </Row>
    {/* SearchREsultMini Filter */}
    <Row>
      <Col>
        <SortingFilterSearchResult />
      </Col>
    </Row>
    <Row>
      <Col>
        <SearchResultList />
      </Col>
    </Row>
   
  </>
);
export default Start;
