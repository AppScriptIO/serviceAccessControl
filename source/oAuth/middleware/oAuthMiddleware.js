"use strict";




function authenticateMiddleware() {
  return async (request, response) => {
    console.log('authenticate function');

    let options = {
      scope: undefined,
      addAcceptedScopesHeader: true,
      addAuthorizedScopesHeader: true,
      allowBearerTokensInQueryString: false };

    let oAuthRequest = new Request(request);
    let oAuthResponse = new Response(response);
    let tokenData = await self.oAuth2Server.authenticate(oAuthRequest, oAuthResponse, options).catch(error => {
      console.log(error);
    });
    return tokenData;
  };
}








async function authorize(request, response) {
  console.log('authorize function');

  let options = {
    authenticateHandler: {
      handle: data => {


        return { username: 'example' };
      } },

    authorizationCodeLifetime: 300 };


  let oAuthRequest = new Request(request);
  let oAuthResponse = new Response(response);
  let authorizationCode = await self.oAuth2Server.authorize(oAuthRequest, oAuthResponse, options).catch(error => console.log(error));
  return authorizationCode;
}







async function token(request, response) {
  console.log('token function');
  let options = {
    accessTokenLifetime: 3600,
    refreshTokenLifetime: 1209600,
    allowExtendedTokenAttributes: true,
    alwaysIssueNewRefreshToken: false,
    requireClientAuthentication: {

      password: false,
      authorization_code: true,
      client_credentials: true,
      refresh_token: false } };



  let oAuthRequest = new Request(request);
  let oAuthResponse = new Response(response);
  let tokenData = await self.oAuth2Server.token(oAuthRequest, oAuthResponse, options).catch(error => {
    console.log('token function:' + error);
  });
  return tokenData;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9vQXV0aC9taWRkbGV3YXJlL29BdXRoTWlkZGxld2FyZS5qcyJdLCJuYW1lcyI6WyJhdXRoZW50aWNhdGVNaWRkbGV3YXJlIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJzY29wZSIsInVuZGVmaW5lZCIsImFkZEFjY2VwdGVkU2NvcGVzSGVhZGVyIiwiYWRkQXV0aG9yaXplZFNjb3Blc0hlYWRlciIsImFsbG93QmVhcmVyVG9rZW5zSW5RdWVyeVN0cmluZyIsIm9BdXRoUmVxdWVzdCIsIlJlcXVlc3QiLCJvQXV0aFJlc3BvbnNlIiwiUmVzcG9uc2UiLCJ0b2tlbkRhdGEiLCJzZWxmIiwib0F1dGgyU2VydmVyIiwiYXV0aGVudGljYXRlIiwiY2F0Y2giLCJlcnJvciIsImF1dGhvcml6ZSIsImF1dGhlbnRpY2F0ZUhhbmRsZXIiLCJoYW5kbGUiLCJkYXRhIiwidXNlcm5hbWUiLCJhdXRob3JpemF0aW9uQ29kZUxpZmV0aW1lIiwiYXV0aG9yaXphdGlvbkNvZGUiLCJ0b2tlbiIsImFjY2Vzc1Rva2VuTGlmZXRpbWUiLCJyZWZyZXNoVG9rZW5MaWZldGltZSIsImFsbG93RXh0ZW5kZWRUb2tlbkF0dHJpYnV0ZXMiLCJhbHdheXNJc3N1ZU5ld1JlZnJlc2hUb2tlbiIsInJlcXVpcmVDbGllbnRBdXRoZW50aWNhdGlvbiIsInBhc3N3b3JkIiwiYXV0aG9yaXphdGlvbl9jb2RlIiwiY2xpZW50X2NyZWRlbnRpYWxzIiwicmVmcmVzaF90b2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxTQUFTQSxzQkFBVCxHQUFrQztBQUNoQyxTQUFPLE9BQU9DLE9BQVAsRUFBZ0JDLFFBQWhCLEtBQTZCO0FBQ2xDQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjs7QUFFQSxRQUFJQyxPQUFPLEdBQUc7QUFDWkMsTUFBQUEsS0FBSyxFQUFFQyxTQURLO0FBRVpDLE1BQUFBLHVCQUF1QixFQUFFLElBRmI7QUFHWkMsTUFBQUEseUJBQXlCLEVBQUUsSUFIZjtBQUlaQyxNQUFBQSw4QkFBOEIsRUFBRSxLQUpwQixFQUFkOztBQU1BLFFBQUlDLFlBQVksR0FBRyxJQUFJQyxPQUFKLENBQVlYLE9BQVosQ0FBbkI7QUFDQSxRQUFJWSxhQUFhLEdBQUcsSUFBSUMsUUFBSixDQUFhWixRQUFiLENBQXBCO0FBQ0EsUUFBSWEsU0FBUyxHQUFHLE1BQU1DLElBQUksQ0FBQ0MsWUFBTCxDQUFrQkMsWUFBbEIsQ0FBK0JQLFlBQS9CLEVBQTZDRSxhQUE3QyxFQUE0RFIsT0FBNUQsRUFBcUVjLEtBQXJFLENBQTJFQyxLQUFLLElBQUk7QUFDeEdqQixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWdCLEtBQVo7QUFDRCxLQUZxQixDQUF0QjtBQUdBLFdBQU9MLFNBQVA7QUFDRCxHQWZEO0FBZ0JEOzs7Ozs7Ozs7QUFTRCxlQUFlTSxTQUFmLENBQXlCcEIsT0FBekIsRUFBa0NDLFFBQWxDLEVBQTRDO0FBQzFDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjs7QUFFQSxNQUFJQyxPQUFPLEdBQUc7QUFDWmlCLElBQUFBLG1CQUFtQixFQUFFO0FBQ25CQyxNQUFBQSxNQUFNLEVBQUVDLElBQUksSUFBSTs7O0FBR2QsZUFBTyxFQUFFQyxRQUFRLEVBQUUsU0FBWixFQUFQO0FBQ0QsT0FMa0IsRUFEVDs7QUFRWkMsSUFBQUEseUJBQXlCLEVBQUUsR0FSZixFQUFkOzs7QUFXQSxNQUFJZixZQUFZLEdBQUcsSUFBSUMsT0FBSixDQUFZWCxPQUFaLENBQW5CO0FBQ0EsTUFBSVksYUFBYSxHQUFHLElBQUlDLFFBQUosQ0FBYVosUUFBYixDQUFwQjtBQUNBLE1BQUl5QixpQkFBaUIsR0FBRyxNQUFNWCxJQUFJLENBQUNDLFlBQUwsQ0FBa0JJLFNBQWxCLENBQTRCVixZQUE1QixFQUEwQ0UsYUFBMUMsRUFBeURSLE9BQXpELEVBQWtFYyxLQUFsRSxDQUF3RUMsS0FBSyxJQUFJakIsT0FBTyxDQUFDQyxHQUFSLENBQVlnQixLQUFaLENBQWpGLENBQTlCO0FBQ0EsU0FBT08saUJBQVA7QUFDRDs7Ozs7Ozs7QUFRRCxlQUFlQyxLQUFmLENBQXFCM0IsT0FBckIsRUFBOEJDLFFBQTlCLEVBQXdDO0FBQ3RDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBLE1BQUlDLE9BQU8sR0FBRztBQUNad0IsSUFBQUEsbUJBQW1CLEVBQUUsSUFEVDtBQUVaQyxJQUFBQSxvQkFBb0IsRUFBRSxPQUZWO0FBR1pDLElBQUFBLDRCQUE0QixFQUFFLElBSGxCO0FBSVpDLElBQUFBLDBCQUEwQixFQUFFLEtBSmhCO0FBS1pDLElBQUFBLDJCQUEyQixFQUFFOztBQUUzQkMsTUFBQUEsUUFBUSxFQUFFLEtBRmlCO0FBRzNCQyxNQUFBQSxrQkFBa0IsRUFBRSxJQUhPO0FBSTNCQyxNQUFBQSxrQkFBa0IsRUFBRSxJQUpPO0FBSzNCQyxNQUFBQSxhQUFhLEVBQUUsS0FMWSxFQUxqQixFQUFkOzs7O0FBY0EsTUFBSTFCLFlBQVksR0FBRyxJQUFJQyxPQUFKLENBQVlYLE9BQVosQ0FBbkI7QUFDQSxNQUFJWSxhQUFhLEdBQUcsSUFBSUMsUUFBSixDQUFhWixRQUFiLENBQXBCO0FBQ0EsTUFBSWEsU0FBUyxHQUFHLE1BQU1DLElBQUksQ0FBQ0MsWUFBTCxDQUFrQlcsS0FBbEIsQ0FBd0JqQixZQUF4QixFQUFzQ0UsYUFBdEMsRUFBcURSLE9BQXJELEVBQThEYyxLQUE5RCxDQUFvRUMsS0FBSyxJQUFJO0FBQ2pHakIsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQW9CZ0IsS0FBaEM7QUFDRCxHQUZxQixDQUF0QjtBQUdBLFNBQU9MLFNBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQXV0aGVudGljYXRlcyBhIHJlcXVlc3QsIGkuZS4gdmFsaWRhdGVzIGEgdG9rZW4uXG4gKiAoU2VlOiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjc0OSNzZWN0aW9uLTcpXG4gKiBAcmV0dXJuIHtvYmplY3R9IHRva2VuRGF0YSAtIGFjY2VzcyB0b2tlbiBvYmplY3QgcmV0dXJuZWQgZnJvbSBNb2RlbCNnZXRBY2Nlc3NUb2tlbigpLlxuICovXG5mdW5jdGlvbiBhdXRoZW50aWNhdGVNaWRkbGV3YXJlKCkge1xuICByZXR1cm4gYXN5bmMgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2F1dGhlbnRpY2F0ZSBmdW5jdGlvbicpXG5cbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIHNjb3BlOiB1bmRlZmluZWQsIC8vIFRoZSBzY29wZShzKSB0byBhdXRoZW50aWNhdGVcbiAgICAgIGFkZEFjY2VwdGVkU2NvcGVzSGVhZGVyOiB0cnVlLCAvLyBTZXQgdGhlIFgtQWNjZXB0ZWQtT0F1dGgtU2NvcGVzIEhUVFAgaGVhZGVyIG9uIHJlc3BvbnNlIG9iamVjdHMuXG4gICAgICBhZGRBdXRob3JpemVkU2NvcGVzSGVhZGVyOiB0cnVlLCAvLyBTZXQgdGhlIFgtT0F1dGgtU2NvcGVzIEhUVFAgaGVhZGVyIG9uIHJlc3BvbnNlIG9iamVjdHMuXG4gICAgICBhbGxvd0JlYXJlclRva2Vuc0luUXVlcnlTdHJpbmc6IGZhbHNlLCAvLyBBbGxvdyBjbGllbnRzIHRvIHBhc3MgYmVhcmVyIHRva2VucyBpbiB0aGUgcXVlcnkgc3RyaW5nIG9mIGEgcmVxdWVzdFxuICAgIH1cbiAgICBsZXQgb0F1dGhSZXF1ZXN0ID0gbmV3IFJlcXVlc3QocmVxdWVzdClcbiAgICBsZXQgb0F1dGhSZXNwb25zZSA9IG5ldyBSZXNwb25zZShyZXNwb25zZSlcbiAgICBsZXQgdG9rZW5EYXRhID0gYXdhaXQgc2VsZi5vQXV0aDJTZXJ2ZXIuYXV0aGVudGljYXRlKG9BdXRoUmVxdWVzdCwgb0F1dGhSZXNwb25zZSwgb3B0aW9ucykuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfSlcbiAgICByZXR1cm4gdG9rZW5EYXRhXG4gIH1cbn1cblxuLyoqXG4gKiBBdXRob3JpemVzIGEgdG9rZW4gcmVxdWVzdC4gaS5lLiBBdXRob3JpemUgYSBjbGllbnQgdG8gcmVxdWVzdCB0b2tlbnMuXG4gKiBUaGUgYXV0aG9yaXphdGlvbiBlbmRwb2ludCBpcyB1c2VkIHRvIGludGVyYWN0IHdpdGggdGhlIHJlc291cmNlIG93bmVyIGFuZCBvYnRhaW4gYW4gYXV0aG9yaXphdGlvbiBncmFudC5cbiAqIChTZWU6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NzQ5I3NlY3Rpb24tMy4xKVxuICogQHJldHVybiB7b2JqZWN0fSBhdXRob3JpemF0aW9uQ29kZSAtIGF1dGhvcml6YXRpb24gY29kZSBvYmplY3QgcmV0dXJuZWQgZnJvbSBNb2RlbCNzYXZlQXV0aG9yaXphdGlvbkNvZGUoKVxuICogSWYgcmVxdWVzdC5xdWVyeS5hbGxvd2VkIGVxdWFscyB0aGUgc3RyaW5nICdmYWxzZScgdGhlIGFjY2VzcyByZXF1ZXN0IGlzIGRlbmllZCBhbmQgdGhlIHJldHVybmVkIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCBhbiBBY2Nlc3NEZW5pZWRFcnJvci5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXV0aG9yaXplKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGNvbnNvbGUubG9nKCdhdXRob3JpemUgZnVuY3Rpb24nKVxuXG4gIGxldCBvcHRpb25zID0ge1xuICAgIGF1dGhlbnRpY2F0ZUhhbmRsZXI6IHtcbiAgICAgIGhhbmRsZTogZGF0YSA9PiB7XG4gICAgICAgIC8vIFdoYXRldmVyIHlvdSBuZWVkIHRvIGRvIHRvIGF1dGhvcml6ZSAvIHJldHJpZXZlIHlvdXIgdXNlciBmcm9tIHBvc3QgZGF0YSBoZXJlXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSB1c2VyIHRoYXQgY2xpY2tlZCBhdXRob3JpemUgYnV0dG9uIGlzIGxvZ2dlZC1pbi9hdXRoZW50aWNhdGVkLlxuICAgICAgICByZXR1cm4geyB1c2VybmFtZTogJ2V4YW1wbGUnIH1cbiAgICAgIH0sXG4gICAgfSwgLy8ge2Z1bmN0aW9ufSB0aGF0IGdldHMgdGhlIGF1dGhlbnRpY2F0ZWQgdXNlci4gVGhpcyBvcHRpb24gd2lsbCBhbGxvdyB0byByZXR1cm4gdXNlciBvYmplY3QuXG4gICAgYXV0aG9yaXphdGlvbkNvZGVMaWZldGltZTogMzAwLCAvLyBMaWZldGltZSBvZiBnZW5lcmF0ZWQgYXV0aG9yaXphdGlvbiBjb2RlcyBpbiBzZWNvbmRzIChkZWZhdWx0ID0gMzAwIHNlY29uZHMgPSA1IG1pbnV0ZXMpXG4gICAgLy8gYWxsb3dFbXB0eVN0YXRlOiBmYWxzZSwgLy8gQWxsb3cgY2xpZW50cyB0byBzcGVjaWZ5IGFuIGVtcHR5IHN0YXRlXG4gIH1cbiAgbGV0IG9BdXRoUmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHJlcXVlc3QpXG4gIGxldCBvQXV0aFJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKHJlc3BvbnNlKVxuICBsZXQgYXV0aG9yaXphdGlvbkNvZGUgPSBhd2FpdCBzZWxmLm9BdXRoMlNlcnZlci5hdXRob3JpemUob0F1dGhSZXF1ZXN0LCBvQXV0aFJlc3BvbnNlLCBvcHRpb25zKS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIHJldHVybiBhdXRob3JpemF0aW9uQ29kZVxufVxuXG4vKipcbiAqIFJldHJpZXZlcyBhIG5ldyB0b2tlbiBmb3IgYW4gYXV0aG9yaXplZCB0b2tlbiByZXF1ZXN0LiBpLmUuIGdyYW50IHRva2VucyB0byB2YWxpZCByZXF1ZXN0cy5cbiAqIFRoZSB0b2tlbiBlbmRwb2ludCBpcyB1c2VkIGJ5IHRoZSBjbGllbnQgdG8gb2J0YWluIGFuIGFjY2VzcyB0b2tlbiBieSBwcmVzZW50aW5nIGl0cyBhdXRob3JpemF0aW9uIGdyYW50IG9yIHJlZnJlc2ggdG9rZW4uXG4gKiAoU2VlOiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjc0OSNzZWN0aW9uLTMuMilcbiAqIEByZXR1cm5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gdG9rZW4ocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgY29uc29sZS5sb2coJ3Rva2VuIGZ1bmN0aW9uJylcbiAgbGV0IG9wdGlvbnMgPSB7XG4gICAgYWNjZXNzVG9rZW5MaWZldGltZTogMzYwMCwgLy8gZGVmYXVsdCAzLDYwMCBzZWNvbmRzICgxIGhvdXIpXG4gICAgcmVmcmVzaFRva2VuTGlmZXRpbWU6IDEyMDk2MDAsIC8vIGRlZmF1bHQgMSwyMDksNjAwIHNlY29uZHMgKDIgd2Vla3MpXG4gICAgYWxsb3dFeHRlbmRlZFRva2VuQXR0cmlidXRlczogdHJ1ZSwgLy8gQWxsb3cgZXh0ZW5kZWQgYXR0cmlidXRlcyB0byBiZSBzZXQgb24gdGhlIHJldHVybmVkIHRva2VuLiBhbnkgYWRkaXRpb25hbCBwcm9wZXJ0aWVzIHNldCBvbiB0aGUgb2JqZWN0IHJldHVybmVkIGZyb20gTW9kZWwjc2F2ZVRva2VuKCkgYXJlIGNvcGllZCB0byB0aGUgdG9rZW4gcmVzcG9uc2Ugc2VudCB0byB0aGUgY2xpZW50LlxuICAgIGFsd2F5c0lzc3VlTmV3UmVmcmVzaFRva2VuOiBmYWxzZSwgLy8gQWx3YXlzIHJldm9rZSB0aGUgdXNlZCByZWZyZXNoIHRva2VuIGFuZCBpc3N1ZSBhIG5ldyBvbmUgZm9yIHRoZSByZWZyZXNoX3Rva2VuIGdyYW50LlxuICAgIHJlcXVpcmVDbGllbnRBdXRoZW50aWNhdGlvbjoge1xuICAgICAgLy8gQnkgZGVmYXVsdCBhbGwgZ3JhbnQgdHlwZXMgcmVxdWlyZSB0aGUgY2xpZW50IHRvIHNlbmQgaXTigJlzIGNsaWVudF9zZWNyZXQgd2l0aCB0aGUgdG9rZW4gcmVxdWVzdFxuICAgICAgcGFzc3dvcmQ6IGZhbHNlLFxuICAgICAgYXV0aG9yaXphdGlvbl9jb2RlOiB0cnVlLFxuICAgICAgY2xpZW50X2NyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgcmVmcmVzaF90b2tlbjogZmFsc2UsXG4gICAgfSxcbiAgICAvLyBleHRlbmRlZEdyYW50VHlwZXM6IHt9IC8vIGFkZGl0aW9uYWwgc3VwcG9ydGVkIGdyYW50IHR5cGVzLiAoc2VlIGh0dHBzOi8vb2F1dGgyLXNlcnZlci5yZWFkdGhlZG9jcy5pby9lbi9sYXRlc3QvbWlzYy9leHRlbnNpb24tZ3JhbnRzLmh0bWwpXG4gIH1cbiAgbGV0IG9BdXRoUmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHJlcXVlc3QpXG4gIGxldCBvQXV0aFJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKHJlc3BvbnNlKVxuICBsZXQgdG9rZW5EYXRhID0gYXdhaXQgc2VsZi5vQXV0aDJTZXJ2ZXIudG9rZW4ob0F1dGhSZXF1ZXN0LCBvQXV0aFJlc3BvbnNlLCBvcHRpb25zKS5jYXRjaChlcnJvciA9PiB7XG4gICAgY29uc29sZS5sb2coJ3Rva2VuIGZ1bmN0aW9uOicgKyBlcnJvcilcbiAgfSlcbiAgcmV0dXJuIHRva2VuRGF0YVxufVxuIl19