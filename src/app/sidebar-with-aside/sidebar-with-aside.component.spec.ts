import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarWithAsideComponent } from './sidebar-with-aside.component';

describe('SidebarWithAsideComponent', () => {
  let component: SidebarWithAsideComponent;
  let fixture: ComponentFixture<SidebarWithAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarWithAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarWithAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
