import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent  implements OnInit {
  
  items: any[];

  constructor(private dataService: DataService){

  }

  ngOnInit(): void {
    this.dataService.sendGETRequest('/applications').subscribe((response) => {
      this.items = response['applications'];
    }, (error) => {
      
    });
  }

}
