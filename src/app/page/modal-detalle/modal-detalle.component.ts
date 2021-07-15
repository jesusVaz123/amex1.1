import { Component, OnInit, ViewChild } from '@angular/core';
import { AquirerService } from 'src/app/service/aquirer.service';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";
import Swal from 'sweetalert2';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-modal-detalle',
  templateUrl: './modal-detalle.component.html',
  styleUrls: ['./modal-detalle.component.css']
})
export class ModalDetalleComponent implements OnInit {
  public detalleRechazo: FormGroup;

  DetalleSintaxis: any;
  constructor(
    private AquirerService: AquirerService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
    ) { }

    rechazosNacCol: string[] = ['myColumn', 'dtFechaProceso', 'codrechazo', 'vNumNeg', 'tipoTrans',
    'vAdq', 'vEmi', 'vImporte', 'referencia', 'rrn'];

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
