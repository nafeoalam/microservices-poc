import { AzureAdGuard } from './azure-ad.guard';

describe('AzureAdGuard', () => {
  it('should be defined', () => {
    expect(new AzureAdGuard()).toBeDefined();
  });
});
