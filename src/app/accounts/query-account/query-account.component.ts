import {Component, inject, OnInit, signal, SimpleChanges,} from '@angular/core';

import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
// import {MatOption} from '@angular/material/select';
import {IBiller} from '../../models/partner';
import {PartnerService} from '../../services/partner.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-query-account',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, FormsModule,],
  templateUrl: './query-account.component.html',
  styleUrl: './query-account.component.scss'
})
export class QueryAccountComponent implements OnInit {
  partnerService = inject(PartnerService);
  private _billers!: Observable<Object> = [];

  queryAccountInput: IQueryAccountInput | undefined;

  ngOnInit(): void {
    this._billers = this.partnerService.getBillers()
    throw new Error('Method not implemented.');
  }

  constructor() {
  }



}

interface IQueryAccountInput {
  partnerKey: string;
  accountKey: string;
}
