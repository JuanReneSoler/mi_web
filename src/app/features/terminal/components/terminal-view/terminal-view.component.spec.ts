import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalViewComponent } from './terminal-view.component';

describe('Terminal', () => {
  let component: TerminalViewComponent;
  let fixture: ComponentFixture<TerminalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminalViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TerminalViewComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
