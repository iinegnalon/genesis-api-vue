import { Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { AmoCRMService } from '../amocrm/amocrm.service';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly amoCRMService: AmoCRMService) {}

  @Post()
  createCompany(): Observable<AxiosResponse<string>> {
    return this.amoCRMService.createCompany();
  }
}
