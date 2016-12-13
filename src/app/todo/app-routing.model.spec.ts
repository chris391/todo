// /**
//  * Created by St_Muerte on 12/13/16.
//  */
// import {InternshipsRoutingModule, routes} from "./app-routing.module";
// import {SpyLocation} from "@angular/common/testing";
// import {Router} from "@angular/router";
// import {inject, TestBed, tick, async, fakeAsync} from "@angular/core/testing";
// import {RouterTestingModule} from "@angular/router/testing";
// import {AppModule} from "../app.module";
// import {AppComponent} from "../app.component";
// import {find} from "rxjs/operator/find";
//
// describe('Router tests', () => {
//   //setup
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         //RouterTestingModule.withRoutes(routing),
//         RouterTestingModule.withRoutes(routes),
//         AppModule
//       ]
//     });
//   });
//
//   //specs
//   it('can navigate to home (async)', async(() => {
//     let fixture = TestBed.createComponent(AppComponent);
//     TestBed.get(Router)
//       .navigate(['/todo'])
//       .then(() => {
//         expect(location.pathname.match('/todo')).toBe(true);
//       }).catch(e => console.log(e));
//   }));
//
//   it('can navigate to home (fakeAsync/tick)', fakeAsync(() => {
//     let fixture = TestBed.createComponent(AppComponent);
//     TestBed.get(Router).navigate(['/home']);
//     fixture.detectChanges();
//     //execute all pending asynchronous calls
//     tick();
//     expect(location.pathname.match('/home')).toBe(true);
//   }));
//
//   it('can navigate to home (done)', done => {
//     let fixture = TestBed.createComponent(AppComponent);
//     TestBed.get(Router)
//       .navigate(['/home'])
//       .then(() => {
//         //expect(location.pathname.endsWith('/home')).toBe(true);
//         expect(location.pathname.match('/home')).toBe(true);
//         done();
//       }).catch(e => console.log(e));
//   });
// });
