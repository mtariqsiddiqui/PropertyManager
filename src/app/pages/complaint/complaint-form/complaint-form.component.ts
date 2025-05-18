import {Component, inject} from "@angular/core"
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { CommonModule } from "@angular/common"
import {LucideAngularModule, LucideArrowLeft} from 'lucide-angular';
import {RouterLink} from '@angular/router';

@Component({
  selector: "app-complaint-form",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, LucideAngularModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule, MatIconModule,
  ],
  templateUrl: "complaint-form.component.html",
  styleUrls: ["complaint-form.component.scss"],
})
export class ComplaintFormComponent {
  readonly lucidearrowleft = LucideArrowLeft;
  readonly lucidearrowleft1 = LucideArrowLeft;
  private formBuilder = inject(FormBuilder);
  complaintForm: FormGroup;
  selectedFiles: File[] = []
  priorities = [
    {name: "Low", value: "low"},
    {name: "Medium", value: "medium"},
    {name: "High", value: "high"}
  ]
  buildings: string[] =  [...Array(24)].map((_, i) => `Building ${i + 1}`);
  apartments: string[] = [...Array(48)].map((_, i) => `Apartment ${i + 1}`);

  constructor() {
    this.complaintForm = this.formBuilder.group({
      subject: ["", Validators.required],
      description: ["", Validators.required],
      property: ["", Validators.required],
      apartment: ["", Validators.required],
      location: ["", Validators.required],
      priority: ["Medium", Validators.required],
      reporterName: ["", Validators.required],
      reporterPhone: ["", [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]],
      reporterEmail: ["", [Validators.required, Validators.email]],
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement
    if (input.files) {
      for (let i = 0; i < input.files.length; i++) {
        this.selectedFiles.push(input.files[i])
      }
    }
  }

  removeFile(index: number): void {
    this.selectedFiles.splice(index, 1)
  }

  submitTicket(): void {
    if (this.complaintForm.valid) {
      // Here you would typically call a service to submit the ticket
      const formData = new FormData()

      // Add form values to formData
      Object.keys(this.complaintForm.value).forEach((key) => {
        formData.append(key, this.complaintForm.value[key])
      })

      // Add files to formData
      this.selectedFiles.forEach((file, index) => {
        formData.append(`file${index}`, file)
      })

      console.log("Submitting ticket:", this.complaintForm.value)
      console.log("With files:", this.selectedFiles)

      // Reset form after submission
      this.complaintForm.reset({
        priority: "Medium",
      })
      this.selectedFiles = []
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.complaintForm.controls).forEach((key) => {
        this.complaintForm.get(key)?.markAsTouched()
      })
    }
  }
}
