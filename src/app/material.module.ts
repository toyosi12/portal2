import { NgModule } from '@angular/core';
import { 
        MatToolbarModule, 
        MatButtonModule,
        MatCheckboxModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatCardModule,
        MatExpansionModule,
        MatInputModule,
        MatSelectModule,
        MatListModule,
        MatTableModule,
        MatTabsModule,
        MatStepperModule
        
    } from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatCheckboxModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatCardModule,
        MatExpansionModule,
        MatInputModule,
        MatSelectModule,
        MatListModule,
        MatTableModule,
        MatTabsModule,
        MatStepperModule
    
    ],
    exports:[
        MatToolbarModule,
        MatButtonModule,
        MatCheckboxModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatCardModule,
        MatExpansionModule,
        MatInputModule,
        MatSelectModule,
        MatListModule,
        MatTableModule,
        MatTabsModule,
        MatStepperModule
    ]
})
export class Material{}