/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    questName: {
      type: 'string',
      required: true,
      minLength: 4
    },
    username: {
      type: 'string',
      unique: true
    },
    password: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    progress: {
      type: 'string',
      defaultsTo: 0,
      min: 0,
      max: 10
    },
    startDate: {
      type: 'string',
    },
    endDate: {
      type: 'string'
    },
    status: {
      type: 'string',
      in: ['active', 'inactive', 'complete', 'cancelled', 'pending', 'deferred']
    },
    cover: {
      type: 'string',
      defaultsTo: 'http://static.tvtropes.org/pmwiki/pub/images/LOTR_fellows_5788.jpg'
    },
    summary: {
      type: 'string',
      minLength: 10,
      required: true
    }
  }
};

