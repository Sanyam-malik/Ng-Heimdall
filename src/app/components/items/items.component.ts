import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent  implements OnInit {
  
  items: any = {};

  constructor(private dataService: DataService){

  }

  ngOnInit(): void {
    this.dataService.sendGETRequest('/applications').subscribe((response) => {
      const applications: any[] = response['applications'];
      this.items = applications.reduce((result, obj) => {
        const keyValue = obj['group_id'];
        if (!result[keyValue]) {
          result[keyValue] = [];
        }
        result[keyValue].push(obj);
        return result;
      }, {});
      console.log(this.items);
      //this.config_items = response['config_items'];
    }, (error) => {
      
    });
  }

}
