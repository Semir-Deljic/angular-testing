// Straight Jasmine testing without Angular's testing support

import { ValueService } from './value.service';

describe('ValueService', () => {

  let service: ValueService;
  beforeEach(() => service = new ValueService());

  it('#getData should return real data', () => {
    expect(service.getData()).toBe('real data');
  });

  it('#getObservableValue should return value from observable', (done: DoneFn) => {
    service.getObservableValue().subscribe(value => {
      expect(value).toBe('observable value');
      done();
    });
  });

  it('#getPromiseValue should return value from a promise', (done: DoneFn) => {
    service.getPromiseValue().then(value => {
      expect(value).toBe('promise value');
      done();
    });
  });

});
