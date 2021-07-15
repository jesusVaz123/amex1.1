import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAmexComponent } from './page/home-amex/home-amex.component';
import { RechazosBanorteComponent } from './page/fuentepapel/rechazos-banorte/rechazos-banorte.component';
import { LoginComponent } from './page/login/login.component';
////////////////Banorte////////////////////////////////

import { RechazosComponent } from './page/rechazos/rechazos.component';
import { CapturamanualComponent } from './page/capturamanual/capturamanual.component';
import { DetallerechazosModalComponent } from './page/detallerechazos-modal/detallerechazos-modal.component';
import { ModalNoabonoComponent } from './page/modal-noabono/modal-noabono.component';
import { ModalSiabonoIntercambioComponent } from './page/modal-siabono-intercambio/modal-siabono-intercambio.component';
import { ModalSoloinyectarComponent } from './page/modal-soloinyectar/modal-soloinyectar.component';

const routes: Routes = [
 
  { path: 'home-amex', component: HomeAmexComponent },
 
  { path: 'rechazos-banorte', component: RechazosBanorteComponent },
  { path: 'rechazos-nacional', component: RechazosComponent },
  { path: 'detallerechazo/:id', component: DetallerechazosModalComponent},
  { path: 'noabono/:id', component: ModalNoabonoComponent},
  { path: 'siabonointercambio/:id', component: ModalSiabonoIntercambioComponent},
  { path: 'soloinyectar/:id', component: ModalSoloinyectarComponent},
  
  
  { path: 'captura-manual', component: CapturamanualComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
