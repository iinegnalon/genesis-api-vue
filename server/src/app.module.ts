import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { LeadsController } from './leads/leads.controller';
import { ContactsController } from './contacts/contacts.controller';
import { CompaniesController } from './companies/companies.controller';
import { AmoCRMService } from './amocrm/amocrm.service';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [LeadsController, ContactsController, CompaniesController],
  providers: [AmoCRMService],
})
export class AppModule {}
