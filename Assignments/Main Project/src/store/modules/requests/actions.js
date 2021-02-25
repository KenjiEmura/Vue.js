export default {
  async contactCoach(context, payload) {
    const newRequest = {
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message
    };

    const response = await fetch(
      `https://vue-http-demo-60014-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest)
      }
    );

    const responseData = await response.json();
    
    console.log(responseData)

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send the request.');
      throw error;
    }

    newRequest.id = responseData.name;

    context.commit('addRequest', newRequest);
  }
};
