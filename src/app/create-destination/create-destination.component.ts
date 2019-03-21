import { Component, OnInit } from '@angular/core';
import Destination  from '../destination';

@Component({
  selector: 'app-create-destination',
  templateUrl: './create-destination.component.html',
  styleUrls: ['./create-destination.component.css']
})
export class CreateDestinationComponent implements OnInit {

  private destinationModel: Destination;

  constructor() { }

  ngOnInit() {
   this.destinationModel = new Destination(
     "Hyderabad",
     "India",
     "IST",
     930,
   );
  }

  onClick(){
    console.log(this.destinationModel.name);
  }

  onChange(){
    console.log(this.destinationModel);
  }

}
