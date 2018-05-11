import { Component } from '@angular/core';

@Component({
  selector: 'report-app',
  template: `
    <nav-bar></nav-bar>
    <report-list></report-list>
  `
})
export class ReportAppComponent {
  title = 'app';
}
