import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FernkampfrechnerComponent } from './fernkampfrechner.component';

describe('FernkampfrechnerComponent', () => {
  let component: FernkampfrechnerComponent;
  let fixture: ComponentFixture<FernkampfrechnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FernkampfrechnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FernkampfrechnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
