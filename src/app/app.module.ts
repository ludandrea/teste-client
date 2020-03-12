import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrosComponent } from './registros/registros.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SenacService } from './senac.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrosComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [SenacService],
  bootstrap: [AppComponent]
})
export class AppModule { }
