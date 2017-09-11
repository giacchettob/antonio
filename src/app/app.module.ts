import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { NewService } from './new-service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './organisms/header/header.component';
import { LogoComponent } from './atoms/logo/logo.component';
import { PerfilButtonComponent } from './atoms/perfil-button/perfil-button.component';
import { LogoutButtonComponent } from './atoms/logout-button/logout-button.component';
import { SideBarComponent } from './organisms/side-bar/side-bar.component';
import { TextComponent } from './atoms/text/text.component';
import { TitleComponent } from './atoms/title/title.component';
import { SideBoxComponent } from './molecules/side-box/side-box.component';
import { ListComponent } from './organisms/list/list.component';
import { CompanyComponent } from './molecules/company/company.component';
import { ItemsComponent } from './atoms/items/items.component';
import { HomeComponent } from './templates/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    PerfilButtonComponent,
    LogoutButtonComponent,
    SideBarComponent,
    TextComponent,
    TitleComponent,
    SideBoxComponent,
    ListComponent,
    CompanyComponent,
    ItemsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [NewService],
  bootstrap: [AppComponent]
})
export class AppModule { }