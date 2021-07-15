import { Component, OnInit } from '@angular/core';
import { DetallerechazosModalComponent } from 'src/app/page/detallerechazos-modal/detallerechazos-modal.component';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-modal-opciones',
  templateUrl: './modal-opciones.component.html',
  styleUrls: ['./modal-opciones.component.css']
})
export class ModalOpcionesComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router
    
  ) { }

  ngOnInit() {
  }

  openDialog(element): void {
    console.info('elemento rechazo', element);
    //this.router.navigate(['/detallerechazo',element], { relativeTo: this.route ,skipLocationChange : true});
    this.router.navigate(['/detallerechazo',element]);
  /*   const dialogRef = this.dialog.open(DetallerechazosModalComponent, {
      disableClose: true, width: '1800px',data: element
    }); */
  }

  openNoAbono(element): void {
    console.info('elemento rechazo', element);
    //this.router.navigate(['/detallerechazo',element], { relativeTo: this.route ,skipLocationChange : true});
    this.router.navigate(['/noabono',element]);
  /*   const dialogRef = this.dialog.open(DetallerechazosModalComponent, {
      disableClose: true, width: '1800px',data: element
    }); */
  }

  openSiAbonoIntercambio(element): void {
    console.info('elemento rechazo', element);
    //this.router.navigate(['/detallerechazo',element], { relativeTo: this.route ,skipLocationChange : true});
    this.router.navigate(['/siabonointercambio',element]);
  /*   const dialogRef = this.dialog.open(DetallerechazosModalComponent, {
      disableClose: true, width: '1800px',data: element
    }); */
  }

  openSoloInyectar(element): void {
    console.info('elemento rechazo', element);
    //this.router.navigate(['/detallerechazo',element], { relativeTo: this.route ,skipLocationChange : true});
    this.router.navigate(['/soloinyectar',element]);
  /*   const dialogRef = this.dialog.open(DetallerechazosModalComponent, {
      disableClose: true, width: '1800px',data: element
    }); */
  }


}
