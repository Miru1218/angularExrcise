import { Injectable, inject } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ResolveFn
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SubjectService } from './subject.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class SubjectResolver implements Resolve<string> {
//   constructor(private subjectService: SubjectService) { }
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
//      let id: string | any = route.paramMap.get('id');
//      return this.subjectService.getByID(id);
//    }}
 
   export const SubjectResolver: ResolveFn<string> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) => {
    return inject(SubjectService).getByID(route.paramMap.get('id')!);
  };