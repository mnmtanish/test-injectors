import { Injectable } from '@angular/core';

@Injectable()
export class A1Service {
  public static count = 0;
  public id = A1Service.count++;
}
