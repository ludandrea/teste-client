import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RegistrosComponent } from './registros/registros.component';

const routes: Routes = [
    { path: '', component: CadastroComponent, pathMatch: 'full' },
    { path: 'registros', component: RegistrosComponent },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }