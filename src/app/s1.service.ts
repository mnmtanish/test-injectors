import { Injectable, Injector } from '@angular/core';
import { A1Service } from './a/a1.service';

@Injectable()
export class S1Service {
  public static count = 0;
  public id = S1Service.count++;

  constructor(
    public a1: A1Service,
    public di: Injector,
  ) {
    console.log('S1Module.a1:', a1.id);
    console.log('S1Module.di.a1:', di.get<A1Service>(A1Service).id);
  }
}
