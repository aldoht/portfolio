import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryGroupComponent } from './repository-group.component';

describe('RepositoryGroupComponent', () => {
  let component: RepositoryGroupComponent;
  let fixture: ComponentFixture<RepositoryGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositoryGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositoryGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
