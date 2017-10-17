import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RRoutingModule } from './r-routing.module';
import { S2Service } from './s2.service';
import { A1Service } from '../a/a1.service';
import { A2Service } from '../a/a2.service';
import { S1Service } from '../s1.service';
import { AModule } from '../a/a.module';

@NgModule({
  imports: [
    CommonModule,
    RRoutingModule,
    AModule,
  ],
  declarations: [],
  providers: [S2Service]
})
export class RModule {
  constructor(
    public a1: A1Service,
    public a2: A2Service,
    public s1: S1Service,
    public s2: S2Service,
    public di: Injector,
  ) {
    console.log('RModule.a1:', a1.id);
    console.log('RModule.a2:', a2.id);
    console.log('RModule.s1:', s1.id);
    console.log('RModule.s2:', s2.id);
    console.log('RModule.di.a1:', di.get<A1Service>(A1Service).id);
    console.log('RModule.di.a2:', di.get<A1Service>(A2Service).id);
    console.log('RModule.di.s1:', di.get<S1Service>(S1Service).id);
    console.log('RModule.di.s2:', di.get<S2Service>(S2Service).id);
  }
}
