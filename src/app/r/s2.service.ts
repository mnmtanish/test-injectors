import { Injectable, Injector } from '@angular/core';
import { A2Service } from '../a/a2.service';
import { S1Service } from '../s1.service';

@Injectable()
export class S2Service {
  public static count = 0;
  public id = S2Service.count++;

  constructor(
    public a2: A2Service,
    public s1: S1Service,
    public di: Injector,
  ) {
    console.log('S2Service.a1:', a2.id);
    console.log('S2Service.s1:', s1.id);
    console.log('S2Service.di.a1:', di.get<A2Service>(A2Service).id);
    console.log('S2Service.di.s1:', di.get<S1Service>(S1Service).id);
  }
}
