import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectClassMapComponent } from './subject-class-map.component';

describe('SubjectClassMapComponent', () => {
  let component: SubjectClassMapComponent;
  let fixture: ComponentFixture<SubjectClassMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectClassMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubjectClassMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
