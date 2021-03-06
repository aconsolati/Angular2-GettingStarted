import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

/* Material Design UX Modules */
import {MdCardModule} from '@angular2-material/card/card';
import {MdButtonModule} from '@angular2-material/button/button';

// import {MdButtonToggleModule} from '@angular2-material/button-toggle/button-toggle';
// import {MdCheckboxModule} from '@angular2-material/checkbox/checkbox';
// import {MdRadioModule} from '@angular2-material/radio/radio';
// import {MdSlideToggleModule} from '@angular2-material/slide-toggle/slide-toggle';
// import {MdSliderModule} from '@angular2-material/slider/slider';
// import {MdSidenavModule} from '@angular2-material/sidenav/sidenav';
// import {MdListModule} from '@angular2-material/list/list';
// import {MdGridListModule} from '@angular2-material/grid-list/grid-list';
// import {MdIconModule} from '@angular2-material/icon/icon';
// import {MdProgressCircleModule} from '@angular2-material/progress-circle/progress-circle';
// import {MdProgressBarModule} from '@angular2-material/progress-bar/progress-bar';
// import {MdInputModule} from '@angular2-material/input/input';
// import {MdTabsModule} from '@angular2-material/tabs/tabs';
// import {MdToolbarModule} from '@angular2-material/toolbar/toolbar';
// import {MdTooltipModule} from '@angular2-material/tooltip/tooltip';
// import {MdRippleModule} from '@angular2-material/core/ripple/ripple';
// import {PortalModule} from '@angular2-material/core/portal/portal-directives';
// import {OverlayModule} from '@angular2-material/core/overlay/overlay-directives';
// import {MdMenuModule} from '@angular2-material/menu/menu';
// import {RtlModule} from '@angular2-material/core/rtl/dir';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';

/* Feature Modules */
import { ProductModule } from './products/product.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ProductModule,
    /* Material Design UX Modules */
    MdCardModule,
    MdButtonModule,
    // MdButtonToggleModule,  
    // MdCheckboxModule,
    // MdGridListModule,
    // MdIconModule,
    // MdInputModule,
    // MdListModule,
    // MdMenuModule,
    // MdProgressBarModule,
    // MdProgressCircleModule,
    // MdRadioModule,
    // MdRippleModule,
    // MdSidenavModule,
    // MdSliderModule,
    // MdSlideToggleModule,
    // MdTabsModule,
    // MdToolbarModule,
    // MdTooltipModule,
    // OverlayModule,
    // PortalModule,
    // RtlModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
