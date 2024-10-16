import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-tabs-layout',
  templateUrl: './tabs-layout.page.html',
  styleUrls: ['./tabs-layout.page.scss'],
})
export class TabsLayoutPage implements OnInit {
  //------------------------------------------------------------------------------
  // Properties
  //------------------------------------------------------------------------------
  pages = signal([
    {
      title: this.translocoService.translate('HOME.TITLE'),
      url: '/tabs-layout/home',
    },
    {
      title: 'About',
      url: '/tabs-layout/about',
    },
  ]);

  selectedPath = signal('');

  //------------------------------------------------------------------------------
  // Constructor
  //------------------------------------------------------------------------------
  constructor(
    private router: Router,
    private translocoService: TranslocoService
  ) {
    this.router.events.subscribe({
      next: (ev) => {
        console.log(ev.toString());
        if (ev && ev.type === 1 && ev.url) {
          this.selectedPath.set(ev.url);
        }
      },
    });
  }

  ngOnInit() {}
}
