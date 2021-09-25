import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LivePageComponent } from './pages/live-page/live-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/live', pathMatch: 'full' },
  { path: 'live', component: LivePageComponent }
];

const routerConfig: ExtraOptions = {
  useHash: true,
  paramsInheritanceStrategy: "always"
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
