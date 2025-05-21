import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { Project, BlockConfig } from '../../models/project.model';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-onboarding',
  templateUrl: './project-onboarding.component.html',
  styleUrl: './project-onboarding.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatStepperModule,
  ]
})
export class ProjectOnboardingComponent implements OnInit {
  projectForm!: FormGroup;
  blockConfigForm!: FormGroup;
  blocksForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize project form
    this.projectForm = this.fb.group({
      project_name: ['', [Validators.required]]
    });

    // Initialize block configuration form
    this.blockConfigForm = this.fb.group({
      numberOfBlocks: [1, [Validators.required, Validators.min(1), Validators.max(100)]],
      prefixType: ['Building', Validators.required],
      suffixType: ['Number', Validators.required]
    });

    // Initialize blocks form with empty form array
    this.blocksForm = this.fb.group({
      blocks: this.fb.array([])
    });

    // Listen for changes in block configuration
    this.blockConfigForm.valueChanges.subscribe((config: BlockConfig) => {
      this.generateBlockInputs(config);
    });

    // Initialize with default values
    this.generateBlockInputs(this.blockConfigForm.value);
  }

  get blocksArray(): FormArray {
    return this.blocksForm.get('blocks') as FormArray;
  }

  generateBlockInputs(config: BlockConfig): void {
    // Clear existing blocks
    while (this.blocksArray.length) {
      this.blocksArray.removeAt(0);
    }

    // Generate new block inputs based on configuration
    for (let i = 0; i < config.numberOfBlocks; i++) {
      const blockName = this.generateBlockName(i, config);
      this.blocksArray.push(
        this.fb.group({
          block_name: [blockName, Validators.required]
        })
      );
    }
  }

  generateBlockName(index: number, config: BlockConfig): string {
    const prefix = config.prefixType;
    let suffix: string;

    if (config.suffixType === 'Letter') {
      // Convert index to letter (0 -> A, 1 -> B, etc.)
      suffix = String.fromCharCode(65 + index);
    } else {
      // Use number (0 -> 1, 1 -> 2, etc.)
      suffix = (index + 1).toString();
    }

    return `${prefix} ${suffix}`;
  }

  onSubmit(): void {
    if (this.projectForm.valid && this.blocksForm.valid) {
      const project: Project = this.projectForm.value;
      const blocks = this.blocksArray.value;

      console.log('Project:', project);
      console.log('Blocks:', blocks);

      // Here you would typically send this data to your backend
    }
  }
}
