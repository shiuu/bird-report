import { Component, Input } from '@angular/core'

@Component({
  selector: 'report-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{report.location}}</h2>
      <div>Date: {{report.date}}</div>
    </div>
  `,
  styles: [`
    .well div { color: #bbb; }
  `]
})
export class ReportThumbnailComponent {
  @Input() report:any

}