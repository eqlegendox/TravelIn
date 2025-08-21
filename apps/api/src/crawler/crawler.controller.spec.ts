import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerController } from './crawler.controller';
import { CrawlerService } from './crawler.service';

describe('CrawlerController', () => {
  let controller: CrawlerController;
  let crawlerService: CrawlerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrawlerController],
      providers: [CrawlerService]
    }).compile();

    controller = module.get<CrawlerController>(CrawlerController);
    crawlerService = module.get<CrawlerService>(CrawlerService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
