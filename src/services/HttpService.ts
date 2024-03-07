export default class HttpService {
  private baseUrl: string;

  constructor() {
      this.baseUrl = '/api/v1/';
  }

  protected buildUrl(endpoint:string):string {
      return `${this.baseUrl}${endpoint}`
  }

  protected async get<T>(endpoint: string): Promise<T> {
      const url = this.buildUrl(endpoint);

      const response = await fetch(url, {
          method: 'GET',
          credentials: 'include',
          headers: {
              'Content-Type': 'application/json',
          },
      })

      if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      return response.json();
  }

  protected async patch<T>(endpoint: string, payload:any): Promise<T> {
      const url = this.buildUrl(endpoint);

      const response = await fetch(url, {
          method: 'PATCH',
          credentials: 'include',
          body: JSON.stringify(payload),
          headers: {
              'Content-Type': 'application/json',
          },
      })

      if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      return response.json();
  }
  

  protected async post<T, NewT>(endpoint: string, payload:NewT): Promise<T> {
      const url = this.buildUrl(endpoint);

      const response = await fetch(url, {
          method: 'POST',
          credentials: 'include',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
      })

      if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      return response.json();
  }
  
  protected async destroy(endpoint:string, id:number): Promise<boolean> {
      const response = await fetch(this.buildUrl(`${endpoint}/${id}`), {
          method: 'DELETE',
          credentials: 'include'
      })
      
      if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      return response.json();
  }
}
