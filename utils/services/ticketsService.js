import { tickets } from './config';

const ticketsService = {
  getTickets: async params => {
    const res = await tickets.get(`/prices/nearest-places-matrix`, {
      params
    });

    try {
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
};

export { ticketsService };
