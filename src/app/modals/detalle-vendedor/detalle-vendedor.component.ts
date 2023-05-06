import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-detalle-vendedor',
  templateUrl: './detalle-vendedor.component.html',
  styleUrls: ['./detalle-vendedor.component.scss'],
})
export class DetalleVendedorComponent implements OnInit {
  constructor(public modalRef: MdbModalRef<DetalleVendedorComponent>) {}

  ngOnInit(): void {}
}
