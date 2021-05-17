import router from '../../../router.js';

let tokenTimer;

export default {
  async login(context, payload) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAfHt0uXAwqHrumJOtdJN34ELLNETg68P0`;
    await AuthentionRequest(context, payload, url);
    const redirectURL =
      '/' + (router.currentRoute.value.query.redirect || 'coaches');
    router.replace(redirectURL);
  },

  async signup(context, payload) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAfHt0uXAwqHrumJOtdJN34ELLNETg68P0`;
    await AuthentionRequest(context, payload, url);
    const redirectURL =
      '/' + (router.currentRoute.value.query.redirect || 'coaches');
    router.replace(redirectURL);
  },

  tryAutoLogin(context) {
    const localAuthInfo = {
      token: localStorage.getItem('token'),
      userId: localStorage.getItem('userId'),
      tokenExpitationDate: localStorage.getItem('tokenExpitationDate')
    };
    const tokenExpiresIn = +localAuthInfo.tokenExpitationDate - new Date().getTime();
    if (tokenExpiresIn < 2000) { // If there is only two seconds remaining
      return;
    }
    tokenTimer = setTimeout( () => {
      context.dispatch('logout')
    }, tokenExpiresIn)
    if (localAuthInfo.token && localAuthInfo.userId) {
      context.commit('setUser', localAuthInfo);
    }
  },

  logout(context) {
    clearTimeout(tokenTimer);
    context.commit('setUser', {
      token: null,
      userId: null
    });
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpirationDate');
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

  const tokenExpiresIn = +responseData.expiresIn * 1000;
  // const tokenExpiresIn = 10000;
  const tokenExpitationDate = new Date().getTime() + tokenExpiresIn;

  tokenTimer = setTimeout(() => {
    context.dispatch('logout');
  }, tokenExpiresIn);

  localStorage.setItem('token', responseData.idToken);
  localStorage.setItem('userId', responseData.localId);
  localStorage.setItem('tokenExpitationDate', tokenExpitationDate);

  context.commit('setUser', {
    token: responseData.idToken,
    userId: responseData.localId
  });
}
