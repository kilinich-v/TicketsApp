import { tickets } from './config';

const ticketsService = {
  getTickets: async params => {
    const defaultParams = {
      flexibility: '0',
      currency: 'USD',
      show_to_affiliates: 'true',
      limit: '10',
      distance: '100'
    };

    const res = await tickets.get(`/prices/nearest-places-matrix`, {
      defaultParams,
      params
    });

    try {
      return res;
    } catch (error) {
      console.log(error);
    }
  }
};

export { ticketsService };
