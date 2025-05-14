import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AccountService} from '../../../services/account.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-account-form',
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './account-form.component.html',
  standalone: true,
  styleUrl: './account-form.component.scss'
})
export class AccountFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private accountService: AccountService) {
    debugger;
    this.form = this.fb.group({
      name: [null, Validators.required],
      balance: [null, [Validators.required, Validators.min(0), Validators.max(150)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const {name, balance} = this.form.value;
      this.accountService.addAccount(name, balance);
      this.form.reset({name: '', balance: 0});
    }
  }
}
