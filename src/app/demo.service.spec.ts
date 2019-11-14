import { TestBed } from '@angular/core/testing';
import { DemoService } from './demo.service';
import { MasterService } from './master.service';

describe('DemoService', () => {

  let demoService: DemoService;
  let masterServiceSpy: jasmine.SpyObj<MasterService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('MasterService', ['getDemo']);

    TestBed.configureTestingModule({
      providers: [
        DemoService,
        {
          provide: MasterService,
          useValue: spy
        }
      ]
    });
    demoService = TestBed.get(DemoService);
    masterServiceSpy = TestBed.get(MasterService);
  });

  it('#getDemo should return stubbed value from a spy', () => {
    const stubValue = 'stub value';
    masterServiceSpy.getDemo.and.returnValue(stubValue);

    expect(demoService.getDemo())
      .toBe(stubValue, 'service returned stub value');

    expect(masterServiceSpy.getDemo.calls.count())
      .toBe(1, 'spy method was called once');

    expect(masterServiceSpy.getDemo.calls.mostRecent().returnValue)
      .toBe(stubValue);
  });

  // it('#getDemo should return demo', () => {
  //   expect(demoService.getDemo()).toBe('demo');
  // });

});
