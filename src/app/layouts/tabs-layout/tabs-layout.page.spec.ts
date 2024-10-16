import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsLayoutPage } from './tabs-layout.page';
import { getTranslocoProvider } from '__tests__/translocoProvider';

describe('TabsLayoutPage', () => {
  let component: TabsLayoutPage;
  let fixture: ComponentFixture<TabsLayoutPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [getTranslocoProvider()],
    });
    fixture = TestBed.createComponent(TabsLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
