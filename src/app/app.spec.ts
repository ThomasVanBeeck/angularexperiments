import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { createComponent } from '@angular/core';

describe('App', () => {
  let component: App
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
    const fixture = TestBed.createComponent(App)
    component = fixture.componentInstance
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(component['title']());
  });

    describe('My first test', () => {
    it('Should test if true is true', () => {
      const testBool: boolean = true
      expect(testBool).toBe(true)
      expect(testBool).not.toBe(false)
    })
  })

  describe('Test incrementNumbers function', () => {
    it('Should increment both signals correctly by 1',() => {
      const firstnr: number = component.firstnumber()
      const secondnr: number = component.secondnumber()
      component.incrementNumbers()
      expect(component.firstnumber()).toBe(firstnr+1)
      expect(component.secondnumber()).toBe(secondnr+1)
      expect(component.firstnumber()).not.toBe(firstnr)
      expect(component.secondnumber()).not.toBe(secondnr)
    })
  })
});
