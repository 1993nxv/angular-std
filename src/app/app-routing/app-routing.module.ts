import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from '../component/first/first.component';
import { ListRenderComponent } from '../component/list-render/list-render.component';


const routes: Routes = [
  {path: '', component: FirstComponent},
  {path: 'list', component: ListRenderComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}