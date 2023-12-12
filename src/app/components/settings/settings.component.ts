import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit{
  
  config_groups = []
  config_items = {};

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.sendGETRequest('/settings').subscribe((response) => {
      this.config_groups = response['config_groups'];
      const config_items: any[] = response['config_items'];
      this.config_items = config_items.reduce((result, obj) => {
        const keyValue = obj['group_id'];
        if (!result[keyValue]) {
          result[keyValue] = [];
        }
        result[keyValue].push(obj);
        return result;
      }, {});
      console.log(this.config_items);
      //this.config_items = response['config_items'];
    }, (error) => {
      
    });
  }
  
}
