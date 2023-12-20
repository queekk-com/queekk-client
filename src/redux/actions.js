export const setUserData = (data) => {
  return {
    type: "SET_USER_DATA",
    payload: data
  }
}

export const setOrganizationData = (data) => {
  return {
    type: "SET_ORG_DATA",
    payload: data
  }
}

export const setTokenData = (data) => {
  return {
    type: "SET_TOKEN_DATA",
    payload: data
  }
}

export const setMessageData = (data) => {
  return {
    type: "SET_MESSAGE_DATA",
    payload: data
  }
}

export const updateTokenData = (data) => {
  return {
    type: "UPDATE_TOKEN_DATA",
    payload: data
  }
}

export const updateOrganizationData = (data) => {
  return {
    type: "UPDATE_ORG_DATA",
    payload: data
  }
}

export const updateUserData = (data) => {
  return {
    type: "UPDATE_USER_DATA",
    payload: data
  }
}