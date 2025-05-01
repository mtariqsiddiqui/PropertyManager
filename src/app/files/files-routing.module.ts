import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilesModule} from './files.module';
import {QueryFilesComponent} from './query-files/query-files.component';
import {UploadFilesComponent} from './upload-files/upload-files.component';

const routes: Routes = [
  {
    path: '',
    component: FilesModule,
    children: [
      { path: '', redirectTo: 'query-files', pathMatch: 'full' },
      { path: 'query-files', component: QueryFilesComponent },
      { path: 'upload-files', component: UploadFilesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
