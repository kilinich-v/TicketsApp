import { travelpayouts } from './config';

const ticketsService = {
  getTickets: async params => {
    const res = await travelpayouts.get(
      '/prices/nearest-places-matrix',
      params
    );

    try {
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
};

export default ticketsService;
