import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';

import { PipeDiferenciaPipe } from '../pipes/pipe-diferencia/pipe-diferencia';

import { MapaPage } from '../pages/mapa/mapa';
import { EstadisticasPage } from '../pages/estadisticas/estadisticas'
import { PerfilPage } from '../pages/perfil/perfil';
import { RegistroPage } from '../pages/registro/registro';
import { PopoverPage } from '../pages/popover/popover';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseProvider } from '../providers/firebase/firebase';

@NgModule({
  declarations: [
    MyApp,
    PipeDiferenciaPipe,
    MapaPage,
    EstadisticasPage,
    PerfilPage,
    RegistroPage,
    PopoverPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBLNUZ79p5RUKzuKDAI_QUU2CjZb9H7jGw'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapaPage,
    EstadisticasPage,
    PerfilPage,
    RegistroPage,
    PopoverPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
  ]
})
export class AppModule {}
