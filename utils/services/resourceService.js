import { resource } from './config';

const resourceService = {
  getCities: async () => {
    const res = await resource.get(`/en-GB/cities.json`);

    try {
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
};

export { resourceService };
