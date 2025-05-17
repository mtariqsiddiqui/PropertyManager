import { Component } from "@angular/core"
import { FormBuilder, type FormGroup, Validators, ReactiveFormsModule } from "@angular/forms"
import { CommonModule } from "@angular/common"
import {LucideAngularModule, LucideArrowLeft} from 'lucide-angular';
import {RouterLink} from '@angular/router';

@Component({
  selector: "app-complaint-form",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, LucideAngularModule],
  templateUrl: "complaint-form.component.html",
  styleUrls: ["complaint-form.component.scss"],
})
export class ComplaintFormComponent {
  readonly lucidearrowleft1 = LucideArrowLeft
  complaintForm: FormGroup
  selectedFiles: File[] = []
  priorities = ["Low", "Medium", "High"]

  constructor(private fb: FormBuilder) {
    this.complaintForm = this.fb.group({
      subject: ["", Validators.required],
      description: ["", Validators.required],
      property: ["", Validators.required],
      apartment: ["", Validators.required],
      location: ["", Validators.required],
      priority: ["Medium", Validators.required],
      reporterName: ["", Validators.required],
      reporterPhone: ["", [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]],
      reporterEmail: ["", [Validators.required, Validators.email]],
    })
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

  protected readonly lucidearrowleft = LucideArrowLeft;
}
