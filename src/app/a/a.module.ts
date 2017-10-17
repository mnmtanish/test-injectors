import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A1Service } from './a1.service';
import { A2Service } from './a2.service';
import { S1Service } from '../s1.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [A1Service, A2Service]
})
export class AModule {
  constructor(
    public a1: A1Service,
    public a2: A2Service,
    public s1: S1Service,
    public di: Injector,
  ) {
    console.log('AModule.a1:', a1.id);
    console.log('AModule.a2:', a2.id);
    console.log('AModule.s1:', s1.id);
    console.log('AModule.di.a1:', di.get<A1Service>(A1Service).id);
    console.log('AModule.di.a2:', di.get<A1Service>(A2Service).id);
    console.log('AModule.di.s1:', di.get<S1Service>(S1Service).id);
  }
}
