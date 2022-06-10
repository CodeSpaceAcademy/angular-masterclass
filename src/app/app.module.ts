import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarViewComponent} from './components/car-view/car-view.component';
import {RepairComponent} from './components/repair/repair.component';
import {RentComponent} from './components/rent/rent.component';
import {ModifyTextPipe} from './pipe/modify-text.pipe';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CarViewSplitComponent} from "./components/car-view-split/car-view-split.component";
import {HttpClientModule} from "@angular/common/http";

function appInitializer() {
  return () => null;
}

@NgModule({
  declarations: [
    AppComponent,
    CarViewComponent,
    RepairComponent,
    RentComponent,
    ModifyTextPipe,
    CarViewSplitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
