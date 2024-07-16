import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';





class IFeature{
  name!: string;
  isBasicAvaliable !: boolean;
  isStandardAvaliable !: boolean;
  isPremiumAvaliable !: boolean;
  monthlyPrice!: number;
  annualPrice !: number;
}

@Component({
  selector: 'app-features-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCheckboxModule, MatIconModule],
  templateUrl: './features-list.component.html',
  styleUrl: './features-list.component.scss'
})
export class FeaturesListComponent {
  isMonthly: boolean =  false;
  displayedColumns: string[] = ['name', 'price', 'basic', 'standard' ,'premium' , 'custom'];

  featuresList: IFeature[] = []
  customFeatures: IFeature[] = [];
  
  constructor() {

    this.featuresList= [
      {name: "Feature1", isBasicAvaliable: true, isStandardAvaliable: true, isPremiumAvaliable: true, monthlyPrice:10, annualPrice: 100},
      {name: "Feature2", isBasicAvaliable: false, isStandardAvaliable: false, isPremiumAvaliable: true, monthlyPrice:5, annualPrice: 50},
      {name: "Feature3", isBasicAvaliable: true, isStandardAvaliable: true, isPremiumAvaliable: true, monthlyPrice:2, annualPrice: 20},
      {name: "Feature4", isBasicAvaliable: true, isStandardAvaliable: true, isPremiumAvaliable: true, monthlyPrice:5, annualPrice: 50},
      {name: "Feature5", isBasicAvaliable: false, isStandardAvaliable: true, isPremiumAvaliable: true, monthlyPrice:5, annualPrice: 50},
      {name: "Feature6", isBasicAvaliable: false, isStandardAvaliable: true, isPremiumAvaliable: true, monthlyPrice:15, annualPrice: 150},
      {name: "Feature7", isBasicAvaliable: true, isStandardAvaliable: true, isPremiumAvaliable: true, monthlyPrice:5, annualPrice: 50},
      {name: "Feature8", isBasicAvaliable: false, isStandardAvaliable: true, isPremiumAvaliable: true, monthlyPrice:12, annualPrice: 120},
      {name: "Feature9", isBasicAvaliable: false, isStandardAvaliable: false, isPremiumAvaliable: true, monthlyPrice:20, annualPrice: 20},
      {name: "Feature10", isBasicAvaliable: false, isStandardAvaliable: false, isPremiumAvaliable: true, monthlyPrice:7, annualPrice: 70},
    ]
  }
  
  addFeature(feature: IFeature){
  
    const index = this.customFeatures.findIndex(item => item.name === feature.name);
    if (index !== -1) {
      this.customFeatures.splice(index, 1);
    } else {
      this.customFeatures.push(feature);
    }
  }
  
    getCustomTotal(): number {
      let total = 0;
      this.customFeatures.forEach(feature => {
        if(this.isMonthly){
          total += feature.monthlyPrice;
        }else{
          total += feature.annualPrice;
        }
      });
      return total;
    }

    getTypeTotal(type: number): number {
      let total = 0;
      switch(type){
        case 1:

          this.featuresList
        .filter(feature => feature.isBasicAvaliable)
        .map((f: IFeature)=>{ total = this.isMonthly?total + f.monthlyPrice :total + f.annualPrice});

          break;

        case 2:

          this.featuresList
        .filter(feature => feature.isStandardAvaliable)
        .map((f: IFeature)=>{ total = this.isMonthly?total + f.monthlyPrice :total + f.annualPrice});
        
          break;

        case 3:
          this.featuresList
        .filter(feature => feature.isPremiumAvaliable)
        .map((f: IFeature)=>{ total = this.isMonthly?total + f.monthlyPrice :total + f.annualPrice});

          break;    
      }

      return total;
      
    }

}
