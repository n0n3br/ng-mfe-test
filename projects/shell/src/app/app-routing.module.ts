import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'users',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'users',
        exposedModule: './Module',
      }).then((m) => m.MainModule),
  },
  {
    path: 'posts',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'posts',
        exposedModule: './Module',
      }).then((m) => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
