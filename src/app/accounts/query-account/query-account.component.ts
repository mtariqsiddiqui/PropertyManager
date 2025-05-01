import {Component, } from '@angular/core';

import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
// import {MatOption} from '@angular/material/select';

@Component({
  selector: 'app-query-account',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, FormsModule,],

  templateUrl: './query-account.component.html',
  styleUrl: './query-account.component.scss'
})
export class QueryAccountComponent {
  selectedValue: string | undefined;


  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

}

interface Food {
  value: string;
  viewValue: string;
}
