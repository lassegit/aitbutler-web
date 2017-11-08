import {
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
  GraphQLFloat as FloatType,
} from 'graphql';
import LocationType from '../types/LocationType';
import { Location } from '../models';

const locationCreate = {
  type: LocationType,
  args: {
    lat: { type: FloatType },
    lng: { type: FloatType },
    alt: { type: FloatType },
    visitedAt: { type: StringType },
  },
  async resolve({ request }, args) {
    const { lat, lng, alt, visitedAt } = args;
    const latlng = { type: 'Point', coordinates: [lat, lng]};

    const location = await Location.create({
      lat: lat,
      lng: lng,
      latlng: latlng,
      alt: alt,
      visitedAt: visitedAt,
      userId: 1,
    });

    return;
  },
};

export default locationCreate;
