import { MasterService } from './master.service';
import { ValueService } from './value.service';

describe('MasterService', () => {
  let masterService: MasterService;

  it('#getData should return real data from the real service', () => {
    masterService = new MasterService(new ValueService());
    expect(masterService.getData()).toBe('real data');
  });

  it('#getData should return faked value from a fake object', () => {
    const fake = { getData: () => 'real value' };
    masterService = new MasterService(fake as ValueService);
    expect(masterService.getData()).toBe('real value');
  });

  it('#getData should return stubbed value from a spy', () => {
    const valueServiceSpy =
      jasmine.createSpyObj('ValueService', ['getData']);

    const stubValue = 'stub value';
    valueServiceSpy.getData.and.returnValue(stubValue);

    masterService = new MasterService(valueServiceSpy);

    expect(masterService.getData())
      .toBe(stubValue, 'service returned stub value');

    expect(valueServiceSpy.getData.calls.count())
      .toBe(1, 'spy method was called once');

    expect(valueServiceSpy.getData.calls.mostRecent().returnValue)
      .toBe(stubValue);

  });

});
