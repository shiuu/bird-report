import { Component, AfterViewInit, ViewChildren, QueryList } from '@angular/core'
import { Router } from '@angular/router'
import { ReportService } from './shared/report.service';

@Component({
  templateUrl: './create-report.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder {color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateReportComponent implements AfterViewInit{
  newReport;
  isDirty:boolean = true;
  @ViewChildren('dateInput') dateInputVia: QueryList<any>;

  constructor(private router: Router, private reportService: ReportService) {
  }

  ngAfterViewInit() {
    this.dateInputVia.first.nativeElement.focus();
  }

  saveReport(formValues) {
    this.reportService.saveReport(formValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(['/reports']);
    });
  }

  cancel() {
    this.router.navigate(['/reports'])
  }
}