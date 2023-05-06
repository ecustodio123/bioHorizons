import { DetalleVendedorComponent } from './../../modals/detalle-vendedor/detalle-vendedor.component';
import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isCollapsed = true;
  selectedView = 'home';
  modalRef: MdbModalRef<DetalleVendedorComponent> | null = null;

  showView(view: string) {
    this.selectedView = view;
  }

  constructor(private modalService: MdbModalService) {}

  ngOnInit(): void {}

  detalleModal() {
    console.log('test');
    this.modalRef = this.modalService.open(DetalleVendedorComponent, {
      modalClass: 'modal-dialog-centered',
    });
  }
}
