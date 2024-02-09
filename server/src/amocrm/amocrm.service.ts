import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { catchError, map, Observable } from 'rxjs';
import { AxiosError, AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AmoCRMService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  getAccessToken(): string {
    return this.configService.get<string>('AMOCRM_ACCESS_TOKEN');
  }

  getBaseDomain(): string {
    return this.configService.get<string>('AMOCRM_BASE_DOMAIN');
  }

  createLead(): Observable<AxiosResponse<string>> {
    return this.createEntity('leads');
  }

  createContact(): Observable<AxiosResponse<string>> {
    return this.createEntity('contacts');
  }

  createCompany(): Observable<AxiosResponse<string>> {
    return this.createEntity('companies');
  }

  private createEntity(endpoint: string): Observable<AxiosResponse<string>> {
    const accessToken = this.getAccessToken();
    const baseDomain = this.getBaseDomain();

    if (!accessToken) {
      throw new HttpException(
        'Add AMOCRM_ACCESS_TOKEN to .env',
        HttpStatus.UNAUTHORIZED,
      );
    }

    if (!baseDomain) {
      throw new HttpException(
        'Add AMOCRM_BASE_DOMAIN to .env',
        HttpStatus.BAD_REQUEST,
      );
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };

    return this.httpService
      .post(
        `https://${baseDomain}/api/v4/${endpoint}`,
        { array: [] },
        { headers },
      )
      .pipe(
        map((response) => {
          const responseData = response.data;

          return responseData['_embedded'][endpoint][0]['id'];
        }),
        catchError((error: AxiosError) => {
          if (error.response && error.response.status === 401) {
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
          }
          throw error;
        }),
      );
  }
}
