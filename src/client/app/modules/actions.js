export const signIn = (user) => {
  return {
    type: 'USER_SIGNIN',
    user: user,
    loggedIn: true
  }
}

export const addProperty = (property) => {
  return {
    type: 'ADD_PROPERTY',
    property
  }
}

export const populateProperties = (properties) => {
  return {
    type: 'POPULATE_PROPERTIES',
    properties
  }
}