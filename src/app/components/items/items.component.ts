import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent  implements OnInit {
  @Input("tag") tag: string;

  items: any = [];
  tags: any = [];

  constructor(private dataService: DataService){
    
  }

  ngOnInit(): void {
    this.getTags();
  }

  getTags(){
    var url = "/tags";
    if(this.tag.length > 0) {
      url = url+"/"+this.tag.toLowerCase();
    }
    this.dataService.sendGETRequest(url).subscribe((response) => {
      const tags: any[] = response['tags'];
      this.tags = tags;
      for(var key of this.tags) {
        this.items = key['items']
      }
    }, (error) => {
      
    });
  }

}
