import { Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { AmoCRMService } from '../amocrm/amocrm.service';

@Controller('leads')
export class LeadsController {
  constructor(private readonly amoCRMService: AmoCRMService) {}

  @Post()
  createLead(): Observable<AxiosResponse<string>> {
    return this.amoCRMService.createLead();
  }
}
