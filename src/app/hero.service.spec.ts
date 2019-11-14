import { TestBed } from '@angular/core/testing';

import { HeroService, Hero } from './hero.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('HeroService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let heroService: HeroService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        HeroService,
        {
          provide: HttpClient,
          useValue: spy
        }
      ]
    });
    heroService = TestBed.get(HeroService);
    httpClientSpy = TestBed.get(HttpClient);
  });

  it('should return expected heroes (http client called once', () => {
    const expectedHeroes: Hero[] = [
      { id: 1, name: 'Semir' },
      { id: 2, name: 'Semir 2' },
    ];

    httpClientSpy.get.and.returnValue(of(expectedHeroes));

    heroService.getHeroes().subscribe(
      heroes => expect(heroes).toEqual(expectedHeroes, 'expected heroes'),
      fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

});
