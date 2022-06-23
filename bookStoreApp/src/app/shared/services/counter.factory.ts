import { CounterService } from "./counter.service";
import { Counter2Service } from "./counter2.service";
import { TestService } from "./test.service";

const fact = (testService: TestService) =>
    testService.status ? new CounterService() : new Counter2Service();

export const counterFactory = {
    provide: CounterService, useFactory: fact,
    deps: [TestService]
};