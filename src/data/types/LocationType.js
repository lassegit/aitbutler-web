import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLFloat as FloatType,
  GraphQLBoolean as BoolType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const LocationType = new ObjectType({
  name: 'Location',
  fields: {
    id: { type: new NonNull(ID) },
    lat: { type: FloatType },
    lng: { type: FloatType },
    latlng: { type: FloatType },
    alt: { type: FloatType },
    userId: { type: StringType },
  },
});

export default LocationType;
