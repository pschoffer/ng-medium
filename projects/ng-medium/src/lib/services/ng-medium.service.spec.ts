import { TestBed } from "@angular/core/testing";
import { NgMediumService } from "./ng-medium.service";
import { HttpClient, HttpParams } from "@angular/common/http";
import { of } from "rxjs";

describe("NgMediumService", () => {
  let service: NgMediumService;
  let httpMock: jasmine.SpyObj<HttpClient>;

  const targetURL = "https://some.cool.feed.com/huh";
  const converterURL = "https://api.rss2json.com/v1/api.json";

  beforeEach(() => {
    httpMock = jasmine.createSpyObj("HttpClient", ["get"]);

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpMock }]
    });
    service = TestBed.get(NgMediumService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should encode request correctly", () => {
    httpMock.get.and.returnValue(of({}));

    service.fetchFeed(targetURL);

    const expectedParams = new HttpParams().set("rss_url", targetURL);
    expect(httpMock.get).toHaveBeenCalled();
    const args = httpMock.get.calls.mostRecent().args;
    expect(args[0]).toEqual(converterURL);
    const passedParam = (args[1].params.get as (id: string) => {})("rss_url");
    expect(passedParam).toEqual(targetURL);
  });
});
