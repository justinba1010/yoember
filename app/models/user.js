import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr(),
  password: DS.attr(),
  hashedPassword: DS.attr(),
  isAdmin: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  avatar: DS.attr(),

});
