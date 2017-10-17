import { Injectable, Injector } from '@angular/core';
import { S1Service } from '../s1.service';
import { A1Service } from './a1.service';

@Injectable()
export class A2Service {
  public static count = 0;
  public id = A2Service.count++;

  constructor(
    public a1: A1Service,
    public s1: S1Service,
    public di: Injector,
  ) {
    console.log('S1Module.a1:', a1.id);
    console.log('S1Module.s1:', s1.id);
    console.log('S1Module.di.a1:', di.get<A1Service>(A1Service).id);
    console.log('S1Module.di.s1:', di.get<S1Service>(S1Service).id);
  }
}
