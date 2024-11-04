import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSecteurActiviteComponent } from './edit-secteur-activite.component';

describe('EditSecteurActiviteComponent', () => {
  let component: EditSecteurActiviteComponent;
  let fixture: ComponentFixture<EditSecteurActiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSecteurActiviteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSecteurActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
