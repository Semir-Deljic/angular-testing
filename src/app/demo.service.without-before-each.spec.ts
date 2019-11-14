import { DemoService } from './demo.service';

const setup = () => {
  const stubValue = 'stub value';
  const masterServiceSpy = jasmine.createSpyObj('MasterService', ['getDemo']);
  masterServiceSpy.getDemo.and.returnValue(stubValue);

  const demoService = new DemoService(masterServiceSpy);

  return { demoService, masterServiceSpy, stubValue };
};

describe('DemoService', () => {

  it('', () => {
    const { demoService, masterServiceSpy, stubValue } = setup();

    expect(demoService.getDemo())
      .toBe(stubValue);

    expect(masterServiceSpy.getDemo.calls.count())
      .toBe(1);

    expect(masterServiceSpy.getDemo.calls.mostRecent().returnValue)
      .toBe(stubValue);
  });

});
