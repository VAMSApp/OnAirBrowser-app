import { useState } from 'react';
import './App.scss';
import { Header } from './components';
import { Button, ButtonGroup, Col, Container, Form as BSForm, Row } from 'react-bootstrap';
import { Field, Formik, FormikHelpers, Form } from 'formik';
import classNames from 'classnames';
import { Company as OnAirCompany, } from 'onair-api'
import { companyService } from './services/CompanyService';
import AddCompanyForm, { IAddCompanyForm } from './components/AddCompanyForm';
import CompanyDetail from './components/CompanyDetail';

export type AppState = {
  companyId: string;
  apiKey: string;
  vaId: string;
  vaApiKey: string;
  company: OnAirCompany | undefined;
}

const initialAppState: AppState = {
  companyId: '',
  apiKey: '',
  vaId: '',
  vaApiKey: '',
  company: undefined
};

function App() {
  const [state, setState] = useState(initialAppState)
  const {
    company,
  } = state;

  const handleSubmit = async (values: IAddCompanyForm, actions: FormikHelpers<IAddCompanyForm>) => {
    console.log('handleSubmit', values);
    const company: OnAirCompany = await companyService.getCompanyDetails(values.companyId, values.apiKey);
    console.log(company);
    actions.setSubmitting(false);
    setState({
      ...state,
      company
    })
  }

  return (
    <div className="App">
      <Header />
      <Container className='mt-3'>
        <AddCompanyForm
          company={company}
          handleSubmit={handleSubmit}
        />
        <Row>
          <Col>
            {(company)
              ? (<>
              <CompanyDetail company={company} />
              </>)
              : (<>
                <h1>Fill out the company ID and API Key fields</h1>
              </>)
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
