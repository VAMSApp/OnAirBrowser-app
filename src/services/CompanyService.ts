import HttpService from "./HttpService";
import {
  Company as OnAirCompany,
  Aircraft as OnAirAircraft,
  Flight as OnAirFlight,
  People as OnAirEmployee,
} from 'onair-api';

export interface CompanyCredentials {
  companyId: string
  apiKey: string
}

class CompanyService extends HttpService {

  async getCompanyDetails(companyId: string, apiKey: string): Promise<OnAirCompany> {
    const companyCredentials: CompanyCredentials = {
      companyId,
      apiKey,
    };

    const x: OnAirCompany = await this.post<OnAirCompany, CompanyCredentials>('company', companyCredentials);
    return x;
  }

  async getCompanyFleet(companyId: string, apiKey: string): Promise<OnAirAircraft[]> {
    const companyCredentials: CompanyCredentials = {
      companyId,
      apiKey,
    };

    const x: OnAirAircraft[] = await this.post<OnAirAircraft[], CompanyCredentials>('company/fleet', companyCredentials);
    return x;
  }

  async getCompanyFlights(companyId: string, apiKey: string): Promise<OnAirFlight[]> {
    const companyCredentials: CompanyCredentials = {
      companyId,
      apiKey,
    };
    
    const x: OnAirFlight[] = await this.post<OnAirFlight[], CompanyCredentials>('company/flights', companyCredentials);
    return x;
  }

  async getCompanyEmployees(companyId: string, apiKey: string): Promise<OnAirEmployee[]> {
    const companyCredentials: CompanyCredentials = {
      companyId,
      apiKey,
    };
    
    const x: OnAirEmployee[] = await this.post<OnAirEmployee[], CompanyCredentials>('company/employees', companyCredentials);
    return x;
  }
}

export const companyService = new CompanyService();