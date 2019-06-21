import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Show } from './models/show.model';
import { ShowEditComponent } from './show-edit/show-edit.component';
import { ShowListComponent } from './show-list/show-list.component';
import { ShowNewComponent } from './show-new/show-new.component';

const appRoutes: Routes = [
    { path: 'showlist',component: ShowListComponent },
    { path: 'showedit', component: ShowEditComponent},
    { path: 'shownew', component: ShowNewComponent},
    { path: 'showlist/:id', component: ShowDetailComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
