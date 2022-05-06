import { Component, OnInit } from '@angular/core';
import { CrudsService } from 'src/app/servicios/crud.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  public ListClientes:any;
  public filterCliente:string = "";
  constructor(private Httpdata: CrudsService) { }

  ngOnInit(): void {
    this.ListarProductos();
  }

  async ListarProductos(){
    let Clientes = await this.Httpdata.ListarCliente();
     this.ListClientes = Clientes;
    console.log(this.ListClientes);
  } 
  async FiltrarID(){
    let id = parseInt(this.filterCliente);
    let Cliente = await this.Httpdata.FiltrarIDCliente(id);
    this.ListClientes = [Cliente];
   console.log(this.ListClientes);
  }

}
