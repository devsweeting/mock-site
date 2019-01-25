import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { ShopComponent } from './shop/shop.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
