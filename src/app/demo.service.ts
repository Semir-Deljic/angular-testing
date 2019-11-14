import { Injectable } from '@angular/core';
import { MasterService } from './master.service';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private masterService: MasterService) { }

  getDemo() {
    return this.masterService.getDemo();
  }
}
