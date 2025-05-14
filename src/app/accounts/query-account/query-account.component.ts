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
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-query-account',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, FormsModule, CommonModule],
  templateUrl: './query-account.component.html',
  standalone: true,
  styleUrl: './query-account.component.scss'
})
export class QueryAccountComponent implements OnInit {
  partnerService = inject(PartnerService);
  billers: Observable<IBiller[]>;
  queryAccountInput: IQueryAccountInput | undefined;

  constructor() {
    this.billers = new Observable<IBiller[]>();
  }

  ngOnInit(): void {
    this.billers = this.partnerService.getBillers()
    throw new Error('Method not implemented.');
  }

}

export class IQueryAccountInput {
  partnerKey: string;
  accountKey: string;

  constructor() {
    this.partnerKey = '';
    this.accountKey = '';
  }
}
