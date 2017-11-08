/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import Model from '../sequelize';

const Location = Model.define('Location',
  {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },

    lat: {
      type: DataType.DECIMAL(11, 2),
    },

    lng: {
      type: DataType.DECIMAL(11, 2),
    },

    latlng: {
      // const point = { type: 'Point', coordinates: [39.807222,-76.984722]};
      type: DataType.GEOMETRY('POINT', 4326),
    },

    alt: {
      type: DataType.INTEGER,
    },

    userId: {
      type: DataType.UUID,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    indexes: [{ fields: ['userId', 'createdAt'] }],
  },
);

export default Location;
