import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { Clipboard } from '@ionic-native/clipboard/ngx';

import { environment } from 'src/environments/environment';
import { IonicModule } from '@ionic/angular';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { EmergenciaComponent } from './components/emergencia/emergencia.component';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmergenciaLoginComponent } from './components/emergencia-login/emergencia-login.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { GithubComponent } from './components/github/github.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistrarUsuarioComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
    SpinnerComponent,
    AyudaComponent,
    EmergenciaComponent,
    EmergenciaLoginComponent,
    UbicacionComponent,
    GithubComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), IonicModule.forRoot(),
    FormsModule,
    HttpClientModule,
    PdfViewerModule

  ],
  providers: [CallNumber, Geolocation, Clipboard],
  bootstrap: [AppComponent]
})
export class AppModule { }
