import { Company as OnAirCompany, } from 'onair-api'

export interface ICompanyDetailProps {
  company: OnAirCompany;
}

function CompanyDetail({ company }: ICompanyDetailProps) {
  return (
    <div>
      <pre>
        {JSON.stringify(company, null, 2)}
      </pre>
    </div>
  )
}

export default CompanyDetail