import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AddSearchFormValidationService } from '../add-search-form-validation.service';

@Component({
  selector: 'control-messages',
  templateUrl: './add-search-form-validation.component.html',
  styleUrls: ['./add-search-form-validation.component.sass']
})
export class AddSearchFormValidationComponent{
  
  //errorMessage: string;
  @Input() control: FormControl;
  constructor() { }

	get errorMessage() {
		for (let propertyName in this.control.errors) {
	  		if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
	  			//console.log("error msg for: " + this.control.errors + " is: " + [propertyName]);
	  			//console.log(AddSearchFormValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]));
	     		return AddSearchFormValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
	 		}
		}
        return null;
  	}

}
