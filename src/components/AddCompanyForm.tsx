import { Button, ButtonGroup, Col, Container, Form as BSForm, Row } from 'react-bootstrap';
import { Field, Formik, FormikHelpers, Form } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import  { Company as OnAirCompany, } from 'onair-api'


export interface AddCompanyFormProps {
  company: OnAirCompany | undefined;
  handleSubmit: (values: IAddCompanyForm, actions: FormikHelpers<IAddCompanyForm>) => void;
}

export interface IAddCompanyForm {
  companyId: string;
  apiKey: string;
  vaId?: string | undefined;
  vaApiKey?: string | undefined;
}

const schema = Yup.object({
  companyId: Yup.string()
    .required('Required'),
  apiKey: Yup.string()
    .required('Required'),
  vaId: Yup.string(),
  vaApiKey: Yup.string(),
})

const initialFormValues: IAddCompanyForm = {
  companyId: 'c3d8e51d-f2e9-4918-a286-c3f2cd5ab141',
  apiKey: 'd17ea885-aad5-429b-9297-fe2e6deca5d9',
  vaId: '089affa0-16ae-45b6-af48-9e0908f6f6f4',
  vaApiKey: '',
}

function AddCompanyForm(props: AddCompanyFormProps) {
  const {
    handleSubmit,
  } = props;

  return (
    
    <Formik
    initialValues={initialFormValues}
    onSubmit={handleSubmit}
    validationSchema={schema}
    validateOnChange={true}
  >
  {({ errors, touched, ...formikProps }) => (
    <Form>
      <Row>
        <Col md={6}>
          <BSForm.Group>
            <BSForm.FloatingLabel label='Company ID'>
              <Field
                name='companyId'
                type='text'
                className={classNames('form-control form-control-lg')}
                required={true}
              />
            </BSForm.FloatingLabel>
          </BSForm.Group>
        </Col>
        <Col md={6}>
          <BSForm.Group>
            <BSForm.FloatingLabel label='Company API Key'>
              <Field
                name='apiKey'
                type='text'
                className={classNames('form-control form-control-lg')}
                required={true}
              />
            </BSForm.FloatingLabel>
          </BSForm.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <BSForm.Group>
            <BSForm.FloatingLabel label='VA ID'>
              <Field
                name='vaId'
                type='text'
                className={classNames('form-control form-control-lg')}
              />
            </BSForm.FloatingLabel>
          </BSForm.Group>
        </Col>
        <Col md={6}>
          <BSForm.Group>
            <BSForm.FloatingLabel label='VA API Key'>
              <Field
                name='vaApiKey'
                type='text'
                className={classNames('form-control form-control-lg')}
              />
            </BSForm.FloatingLabel>
          </BSForm.Group>
        </Col>              
      </Row>
      <Row>
        <Col>
          <hr/>
        </Col>
      </Row>
      <Row>
        <Col>
          <ButtonGroup>
            <Button
              variant='success'
              type='submit'
              size='lg'
            >
              Fetch Company Details
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Form>
  )}
  </Formik>
  )
}

export default AddCompanyForm