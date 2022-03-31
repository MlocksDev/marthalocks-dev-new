import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaniesSectionComponent } from './campanies-section.component';

describe('CampaniesSectionComponent', () => {
  let component: CampaniesSectionComponent;
  let fixture: ComponentFixture<CampaniesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaniesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaniesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
