import React from 'react'

const UserContext = React.createContext('Temesghen Tekeste');

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer}
export {UserContext}