import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/apiService";

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.component.html',
  styleUrls: ['./car-view.component.scss']
})
export class CarViewComponent implements OnInit {
  user: { name: string } = {name: "pepe"}

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    const list$ = this.apiService.getList().subscribe(data => {
      console.log(data);
      list$.unsubscribe();
    })
  }

  sayHello() {
    console.log('Hola ' + this.user.name)
  }
}
