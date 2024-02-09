import { Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { AmoCRMService } from '../amocrm/amocrm.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly amoCRMService: AmoCRMService) {}

  @Post()
  createContact(): Observable<AxiosResponse<string>> {
    return this.amoCRMService.createContact();
  }
}
