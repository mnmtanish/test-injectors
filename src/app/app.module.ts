import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AModule } from './a/a.module';
import { A1Service } from './a/a1.service';
import { A2Service } from './a/a2.service';
import { S1Service } from './s1.service';
import { C1Component } from './c1/c1.component';


@NgModule({
  declarations: [
    AppComponent,
    C1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AModule,
  ],
  providers: [S1Service],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    public a1: A1Service,
    public a2: A2Service,
    public s1: S1Service,
    public di: Injector,
  ) {
    console.log('AppModule.a1:', a1.id);
    console.log('AppModule.a2:', a2.id);
    console.log('AppModule.s1:', s1.id);
    console.log('AppModule.di.a1:', di.get<A1Service>(A1Service).id);
    console.log('AppModule.di.a2:', di.get<A1Service>(A2Service).id);
    console.log('AppModule.di.s1:', di.get<S1Service>(S1Service).id);
  }
}
