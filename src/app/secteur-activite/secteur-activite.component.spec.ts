import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecteurActiviteComponent } from './secteur-activite.component';

describe('SecteurActiviteComponent', () => {
  let component: SecteurActiviteComponent;
  let fixture: ComponentFixture<SecteurActiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecteurActiviteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecteurActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
