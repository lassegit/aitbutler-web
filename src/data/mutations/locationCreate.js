import {
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import LocationType from '../types/LocationType';
import { Payment } from '../models';

const locationCreate = {
  type: LocationType,
  args: {},
  async resolve({ request }, args) {
    return;
  },
};

export default locationCreate;
