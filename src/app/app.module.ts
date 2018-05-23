import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Material } from './material.module';
import { AppComponent } from './app.component';
// import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from  '@angular/flex-layout';
import { MyProfieComponent } from './my-profie/my-profie.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ChangePasscodeComponent } from './change-passcode/change-passcode.component';
import { DocumentsComponent } from './documents/documents.component';
import { PayTuitionComponent } from './pay-tuition/pay-tuition.component';
import { OtherPaymentsComponent } from './other-payments/other-payments.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { SemesterResultComponent } from './semester-result/semester-result.component';
import { CourseRegistrationComponent } from './course-registration/course-registration.component';
import { RegistrationHistoryComponent } from './registration-history/registration-history.component';
import { ViewTimetableComponent } from './view-timetable/view-timetable.component';
import { CompanyDetailsService } from './company-details.service';
import { ProfileService } from './profile.service';
const appRoutes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'my-profile',component:MyProfileComponent},
  {path:'change-passcode',component:ChangePasscodeComponent},
  {path:'documents',component:DocumentsComponent},
  {path:'pay-tuition',component:PayTuitionComponent},
  {path:'other-payments',component:OtherPaymentsComponent},
  {path:'payment-history',component:PaymentHistoryComponent},
  {path:'semester-result',component:SemesterResultComponent},
  {path:'course-registration',component:CourseRegistrationComponent},
  {path:'registration-history',component:RegistrationHistoryComponent},
  {path:'view-timetable',component:ViewTimetableComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    // ToolbarComponent,
    SidenavComponent,
    DashboardComponent,
    MyProfieComponent,
    MyProfileComponent,
    ChangePasscodeComponent,
    DocumentsComponent,
    PayTuitionComponent,
    OtherPaymentsComponent,
    PaymentHistoryComponent,
    SemesterResultComponent,
    CourseRegistrationComponent,
    RegistrationHistoryComponent,
    ViewTimetableComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    BrowserModule,
    BrowserAnimationsModule,
    Material,
    FlexLayoutModule
  ],
  providers: [CompanyDetailsService,ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
