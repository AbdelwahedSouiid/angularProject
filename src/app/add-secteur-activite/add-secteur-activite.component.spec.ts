import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSecteurActiviteComponent } from './add-secteur-activite.component';

describe('AddSecteurActiviteComponent', () => {
  let component: AddSecteurActiviteComponent;
  let fixture: ComponentFixture<AddSecteurActiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSecteurActiviteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSecteurActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
