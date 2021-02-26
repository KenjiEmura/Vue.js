import router from '../../../router.js';

export default {
  async login(context, payload) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAfHt0uXAwqHrumJOtdJN34ELLNETg68P0`;
    await AuthentionRequest(context, payload, url);
    const redirectURL = '/' + (router.currentRoute.value.query.redirect || 'coaches');
    router.replace(redirectURL);
  },

  async signup(context, payload) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAfHt0uXAwqHrumJOtdJN34ELLNETg68P0`;
    await AuthentionRequest(context, payload, url);
    const redirectURL = '/' + (router.currentRoute.value.query.redirect || 'coaches');
    router.replace(redirectURL);
  },

  logout(context) {
    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpitation: null
    });
    router.replace('/coaches');
  }
};

async function AuthentionRequest(context, payload, url) {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      email: payload.email,
      password: payload.password,
      returnSecureToken: true
    })
  });

  const responseData = await response.json();

  if (!response.ok) {
    console.log(responseData);
    const error = new Error(
      `Failed to authenticate, the server responded with the next message: \n` +
        responseData.error.message || 'Failed to authenticate'
    );
    throw error;
  }

  // console.log(responseData);

  context.commit('setUser', {
    token: responseData.idToken,
    userId: responseData.localId,
    tokenExpiration: responseData.expiresIn
  });
}
