import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/apiService";

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit {

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    console.log(this.apiService.sayDummyText());
  }

}
