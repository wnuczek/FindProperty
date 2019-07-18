import { Component, OnInit, Input } from '@angular/core';
import { objectSearched } from '../objectSearched';
import { objectOffered } from '../objectOffered';
import { objectService } from '../object.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-search-form',
  templateUrl: './add-search-form.component.html',
  styleUrls: ['./add-search-form.component.sass']
})
export class AddSearchFormComponent implements OnInit {

  objectsOffered: objectOffered[] = [];
  addObjectSearchedForm = this.formBuilder.group({
  	transactionType: '', 
  	companyType: ['', Validators.required], 
  	objectType: '', 
  	objectLocation: '', 
  	objectAreaMin: ['', Validators.required], 
  	objectAreaMax: ['', Validators.required], 
  	objectPriceMin: '', 
  	objectPriceMax: ''}
  );
  filtered=false;

  constructor(
  	private objectService: objectService, 
  	private route: ActivatedRoute, 
  	private location: Location, 
  	private formBuilder: FormBuilder) { }

  ngOnInit() {
  	this.getObjectsOffered();
  }

  getObjectsOffered(): void {
    this.objectService.getObjectsOffered()
      .subscribe(objectOffered => {this.objectsOffered = objectOffered['data'], console.log(objectOffered['data'])});
  }

  updateObjectsList(objectsOffered) {
  	console.log("Objects: " + JSON.stringify(objectsOffered));
  	var filters = this.addObjectSearchedForm.value;
	console.log("Filters: " + JSON.stringify(filters));

	function objectMatch(filters) {
	  return function(element){
		console.log(element);
		console.log(filters);
		var matched = true;
		for (var key in element) {
			switch (key) {
			  case 'transactionType':
			    if (filters.transactionType.sprzedaz !== '' || filters.transactionType.wynajem !== ''){
			      if (filters.transactionType.sprzedaz == true && filters.transactionType.wynajem == false){
			    	if(element[key] !== 'sprzedaz') { 
			    		matched = false;
				    	console.log('transactionType not matched');			    	
			    	}
			      }	else if (filters.transactionType.sprzedaz == false && filters.transactionType.wynajem == true){
			    	if(element[key] !== 'wynajem') { 
			    		matched = false;
				    	console.log('transactionType not matched');			    	
			    	}
			      }	else if (filters.transactionType.sprzedaz == true && filters.transactionType.wynajem == true){
			    		matched = true;
				    	console.log('all transactionTypes matched');	
			      }
			    }			   
			    break;
			  case 'objectLocation':
			    if (filters.objectLocation !== ''){
			    	if(element[key] !== filters.objectLocation) { 
			    		matched = false;
				    	console.log('objectLocation not matched');			    	
			    	}
			    }
			    break;
			  case 'objectArea':
			  	console.log('checking objectArea');
			  	console.log('min: ' + filters.objectAreaMin);
			  	console.log('max: ' + filters.objectAreaMax);
			    if (filters.objectAreaMin !== '' && filters.objectAreaMax !== ''){
			    	if(element[key] < filters.objectAreaMin || element[key] > filters.objectAreaMax) { 
			    		matched = false;
				    	console.log('objectArea not matched');			    	
			    	}
			    } else if (filters.objectAreaMin !== '' && filters.objectAreaMax == ''){
			    	if(element[key] < filters.objectAreaMin) { 
			    		matched = false;
				    	console.log('objectArea not matched');			    	
			    	}
			    } else if (filters.objectAreaMin == '' && filters.objectAreaMax !== ''){
			    	if(element[key] > filters.objectAreaMax) { 
			    		matched = false;
				    	console.log('objectArea not matched');			    	
			    	}
			    }
			    break;
			  case 'objectPrice':
			  	console.log('checking objectPrice');
			    if (filters.objectPriceMin !== '' && filters.objectPriceMax !== ''){
			    	if(element[key] < filters.objectPriceMin || element[key] > filters.objectPriceMax) { 
			    		matched = false;
				    	console.log('objectPrice not matched');			    	
			    	}
			    } else if (filters.objectPriceMin !== '' && filters.objectPriceMax == ''){
			    	if(element[key] < filters.objectPriceMin) { 
			    		matched = false;
				    	console.log('objectPrice not matched');			    	
			    	}			    
			    } else if (filters.objectPriceMin == '' && filters.objectPriceMax !== ''){
			    	if(element[key] > filters.objectPriceMax) { 
			    		matched = false;
				    	console.log('objectPrice not matched');			    	
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
	console.log("Filtered objects: " + JSON.stringify(matchedObjectsOffered));
	return matchedObjectsOffered;
  };

  goBack(): void {
    this.location.back();
  }


  addObjectSearched(): void {
    //this.objectService.addObjectSearched(this.addObjectSearchedForm.value as objectSearched).subscribe();
    console.log(this.addObjectSearchedForm.value);
  }

  onSubmit() {
  	this.addObjectSearched();
  	//this.addObjectSearchedForm.reset();

  }

}
