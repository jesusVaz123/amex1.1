import { Component, OnInit, ViewChild } from '@angular/core';
import { fuentepapelParam } from 'src/app/model/fuentepapelParam.model';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";
import { detallerechazoNac } from 'src/app/model/detallerechazoNac.model';
import { MatTableDataSource } from '@angular/material/table';
import { AquirerService } from 'src/app/service/aquirer.service';
import { ActivatedRoute, Params } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogRef, MatSort, MAT_DIALOG_DATA } from '@angular/material';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-modal-noabono',
  templateUrl: './modal-noabono.component.html',
  styleUrls: ['./modal-noabono.component.css']
})
export class ModalNoabonoComponent implements OnInit {
  public _fuentepapelParam: fuentepapelParam;
  public detalleRechazo: FormGroup;
  public rechazoMO: detallerechazoNac;


  dataFuentePapel = new MatTableDataSource();

  constructor(
    public AquirerService: AquirerService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder  
  ) { }

  archivoftepColumns: string[] = ['Comparar','codregistro', 'vNoCuenta', 'vNumNeg', 'tipotrans'
    , 'importe', 'referencia'];

  applyFilter(filterValue: string) {
    this.dataFuentePapel.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  public ngOnInit(): void {
    this.detalleRechazo = this.formBuilder.group({
      CodigodeRechazo: [''],
      numerodenegocio: [''],
      NombreNegocio: [''],
      NumerodeCuenta: [''],
      TipoProducto: [''],
      NumerodeAutorizacion: [''],
      TipodeTransaccion: [''],
      BancoAdquirente: [''],
      BancoEmisor: [''],
      GIRO: [''],
      NumeroTerminal: [''],
      FechaOrigen: [''],
      HoraOrigen: [''],
      TC: [''],
      TipodeOperacion: [''],
      PEM: [''],
      RedLogica: [''],
      DFTCaptura: [''],
      CodigodeRespuesta: [''],
      Importe: [''],
      Referencia: [''],
      ClavePD: [''],
      BanderaCashBak: [''],
      ImporteCashBak: [''],
      MedioComercio: [''],
      RRN: [''],
      CAVV: [''],
      ID3DS: [''],
      ECI: [''],
      MediodeAcceso: [''],
      CapTerminal: [''],
      Destino: [''],
      CVV2: [''],
      Lote: [''],
      RegLlave: ['']

    });

    //    this._fuentepapelParam = new fuentepapelParam('2424223', '42343234', '432424234');
    this.route.params.subscribe(params => this.AquirerService.getFuentepapel()
      .subscribe(
        data => {
          if (!data) {
            Swal.fire({
              icon: 'info',
              text: 'No hay datos!'
            })
          } else {
            this.dataFuentePapel = new MatTableDataSource(data);
            this.dataFuentePapel.paginator = this.paginator;
            this.dataFuentePapel.sort = this.sort;
          }
        },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Error al obtener fuente papel',
            text: 'Favor de reportarlo al administrador del sistema'
          })

        }));


    this.route.params.subscribe(params => this.AquirerService.getRechazoDetalle(params.id)
      .subscribe(
        data => {

          if (!data) {
            Swal.fire({
              icon: 'info',
              text: 'No hay datos!'
            })
          } else {
            this.detalleRechazo.setValue(data);
          }

        },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Error al obtener el detalle del rechazo',
            text: 'Favor de reportarlo al administrador del sistema'
          })

        }));
  }

}
