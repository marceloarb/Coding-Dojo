import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorIdComponent } from './author-id.component';

describe('AuthorIdComponent', () => {
  let component: AuthorIdComponent;
  let fixture: ComponentFixture<AuthorIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
