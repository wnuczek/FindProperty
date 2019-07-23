import { NgModule, Component, OnInit, Input } from '@angular/core';
import { objectSearched } from '../objectSearched';
import { objectOffered } from '../objectOffered';
import { objectService } from '../object.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AddSearchFormValidationService, } from '../add-search-form-validation.service';
import { user } from '../user'
import { UsersService } from '../users.service'

@Component({
  selector: 'app-add-search-form',
  templateUrl: './add-search-form.component.html',
  styleUrls: ['./add-search-form.component.sass']
})


export class AddSearchFormComponent implements OnInit {

  objectsOffered: objectOffered[] = [];
  matchedObjectsOffered: objectOffered[] = [];
  addObjectSearchedForm: FormGroup;
  submitTried=false;
  filtered=false;
  userExists;

  constructor(
  	private objectService: objectService, 
  	private route: ActivatedRoute, 
  	private location: Location, 
  	private formBuilder: FormBuilder,
  	private usersService: UsersService) { }

  ngOnInit() {
  	this.addObjectSearchedForm = this.formBuilder.group({
	  	transactionType: ['', Validators.required], 
	  	email: ['', Validators.compose([Validators.required, AddSearchFormValidationService.emailValidator])],
	  	companyType: ['', Validators.required],
	  	objectType: ['', Validators.required],
	  	objectLocation: ['', Validators.required], 
	  	objectAreaMin: ['', Validators.required],  
	  	objectAreaMax: ['', Validators.required],
	  	objectPriceMin: ['', Validators.required],
	  	objectPriceMax: ['', Validators.required]}
	);
  	this.getObjectsOffered();
  }

  checkMaxInput(inputGroup) {
  	//console.log(this.addObjectSearchedForm.controls['objectAreaMax']);	
  	if(inputGroup=='area'){
  		var maxAreaForm = this.addObjectSearchedForm.controls['objectAreaMax']
  		var minAreaForm = this.addObjectSearchedForm.controls['objectAreaMin']
  		console.log('max: ' + maxAreaForm.value + ' min: ' + minAreaForm.value);

  		if(minAreaForm.value !== '' && minAreaForm.value !== null){
  			maxAreaForm.setValidators(Validators.compose([AddSearchFormValidationService
  	  			.isMaxBiggerValidator('areaMax',this.addObjectSearchedForm.controls['objectAreaMin'].value)]));
  		} else if (maxAreaForm.value !== '' && maxAreaForm.value !== null){ 
  			minAreaForm.setValidators(Validators.compose([AddSearchFormValidationService
  	  			.isMaxBiggerValidator('areaMin',this.addObjectSearchedForm.controls['objectAreaMax'].value)]));
  		} else {
  			maxAreaForm.setValidators(Validators.compose([AddSearchFormValidationService
  	  			.isMaxBiggerValidator('area',0)]));
  		}

  		//	.setValidators(Validators.compose([AddSearchFormValidationService
  	  	//	.isMaxBiggerValidator('area',this.addObjectSearchedForm.controls['objectAreaMin'].value)]));  		
  	} else if (inputGroup=='price'){
  		var maxPriceForm = this.addObjectSearchedForm.controls['objectPriceMax']
  		var minPriceForm = this.addObjectSearchedForm.controls['objectPriceMin']
  		console.log('max: ' + maxPriceForm.value + ' min: ' + minPriceForm.value);

  		if(minPriceForm.value !== '' && minPriceForm.value !== null){
  			maxPriceForm.setValidators(Validators.compose([AddSearchFormValidationService
  	  			.isMaxBiggerValidator('priceMax',this.addObjectSearchedForm.controls['objectPriceMin'].value)]));
  		} else if (maxPriceForm.value !== '' && maxPriceForm.value !== null){ 
  			minPriceForm.setValidators(Validators.compose([AddSearchFormValidationService
  	  			.isMaxBiggerValidator('priceMin',this.addObjectSearchedForm.controls['objectPriceMax'].value)]));
  		} else {
  			maxPriceForm.setValidators(Validators.compose([AddSearchFormValidationService
  	  			.isMaxBiggerValidator('price',0)]));
  		}
  	}

  }

  validateAllFormFields(formGroup: FormGroup) {         //{1}
  	Object.keys(formGroup.controls).forEach(field => {  //{2}
	  const control = formGroup.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
	      control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        //{5}
        this.validateAllFormFields(control);            //{6}
	    }
  });
}

  getObjectsOffered(): void {
    this.objectService.getObjectsOffered()
      .subscribe(objectOffered => {this.objectsOffered = objectOffered['data']});
  }

  updateObjectsList(objectsOffered) {
  	//console.log("Objects: " + JSON.stringify(objectsOffered));
  	var filters = this.addObjectSearchedForm.value;
	console.log("Filters: " + JSON.stringify(filters));

	function objectMatch(filters) {
	  return function(element){
		//console.log(element);
		//console.log(filters);
		var matched = true;
		for (var key in element) {
			switch (key) {
			  case 'transactionType':
			    if (filters.transactionType !== '' && filters.transactionType !== null ){
			      if (filters.transactionType == 'sprzedaz'){
			    	if(element[key] !== 'sprzedaz') { 
			    		matched = false;
				    	//console.log('transactionType not matched');			    	
			    	}
			      }	else if (filters.transactionType == 'wynajem'){
			    	if(element[key] !== 'wynajem') { 
			    		matched = false;
				    	//console.log('transactionType not matched');			    	
			    	}
			      }
			    }			   
			    break;
			  case 'objectLocation':
			    if (filters.objectLocation !== '' && filters.objectLocation !== null){
			    	if(element[key] !== filters.objectLocation) { 
			    		matched = false;
				    	//console.log('objectLocation not matched');			    	
			    	}
			    }
			    break;
			  case 'objectArea':
			  	//console.log('checking objectArea');
			  	//console.log('min: ' + filters.objectAreaMin);
			  	//console.log('max: ' + filters.objectAreaMax);
			    if (filters.objectAreaMin !== '' && filters.objectAreaMax !== '' && filters.objectAreaMin !== null && filters.objectAreaMax !== null){
			    	if(element[key] < filters.objectAreaMin || element[key] > filters.objectAreaMax) { 
			    		matched = false;
				    	//console.log('objectArea not matched');			    	
			    	}
			    } else if (filters.objectAreaMin !== '' && filters.objectAreaMin !== null && (filters.objectAreaMax == '' || filters.objectAreaMax == null)){
			    	if(element[key] < filters.objectAreaMin) { 
			    		matched = false;
				    	//console.log('objectArea not matched');			    	
			    	}
			    } else if ((filters.objectAreaMin == '' || filters.objectAreaMin == null) && filters.objectAreaMax !== '' && filters.objectAreaMax !== null){
			    	if(element[key] > filters.objectAreaMax) { 
			    		matched = false;
				    	//console.log('objectArea not matched');			    	
			    	}
			    }
			    break;
			  case 'objectPrice':
			  	//console.log('checking objectPrice');

			  	//all inputs not empty
			    if (filters.objectPriceMin !== '' && filters.objectPriceMax !== '' && filters.objectPriceMin !== null && filters.objectPriceMax !== null){
			    	if(element[key] < filters.objectPriceMin || element[key] > filters.objectPriceMax) { 
			    		matched = false;
				    	//console.log('objectPrice not matched');			    	
			    	}
			    //
			    } else if (filters.objectPriceMin !== '' && filters.objectPriceMin !== null && (filters.objectPriceMax == '' || filters.objectPriceMax == null)){
			    	if(element[key] < filters.objectPriceMin) { 
			    		matched = false;
				    	//console.log('objectPrice not matched');			    	
			    	}			    
			    } else if ((filters.objectPriceMin == '' || filters.objectPriceMin == null) && filters.objectPriceMax !== '' && filters.objectPriceMax !== null){
			    	if(element[key] > filters.objectPriceMax) { 
			    		matched = false;
				    	//console.log('objectPrice not matched');			    	
			    	}
			    }
			    break;		
			  default: 
			  	//matched = true;
			  	break;    
			};
			//console.log(key + ": " + element[key]);
		};
		if (matched) {
			return element;	
		}
	  };	
  	};
	var matchedObjectsOffered = objectsOffered.filter(objectMatch(filters));
	//console.log("Filtered objects: " + JSON.stringify(matchedObjectsOffered));
	return matchedObjectsOffered;
  };

  goBack(): void {
    this.location.back();
  }


  addObjectSearched(): void {
    this.objectService.addObjectSearched(this.addObjectSearchedForm.value as objectSearched).subscribe();
    console.log(this.addObjectSearchedForm.value);
  }


  async checkUserExists(email) {
  	this.userExists = await this.usersService.checkUserExists(email);
  	if (this.userExists == true){
        return true;
    }
    return false;
  }


  onSubmit() {
	if (this.addObjectSearchedForm.valid) {

		console.log(this.addObjectSearchedForm.controls['email'].value);
		this.userExists = this.checkUserExists(this.addObjectSearchedForm.controls['email'].value);
		console.log(this.userExists);
		if (this.userExists==false){
			//add user and generate one time link for password creation
			console.log('add user');
		} 
		console.log('form submitted');
		//this.addObjectSearched();
	  	//this.addObjectSearchedForm.reset();

	} else {
		this.validateAllFormFields(this.addObjectSearchedForm); //{7}
	}
  }	

}

