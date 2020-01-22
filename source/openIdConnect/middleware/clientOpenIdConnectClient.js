"use strict";
const { Issuer } = require('openid-client');

const oidcPort = 8084;
const issuer = Issuer.discover(`http://localhost:${oidcPort}`);
const oidcClient = new issuer.Client(
{
  client_id: 'privateClientApplication',
  client_secret: 'secret',
  id_token_signed_response_alg: 'RS256',
  token_endpoint_auth_method: 'client_secret_basic' });


let authURL = oidcClient.authorizationUrl({
  redirect_uri: 'https://lvh.me/cb',
  scope: 'openid' });



async (context, next) => {
  if (context.path == '/oidcClient') {
    console.log(authURL);
    let introspection = await oidcClient.
    introspect('token').
    then(function (response) {
      return response;
    });
    context.body = introspection;
  }
  await next();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9vcGVuSWRDb25uZWN0L21pZGRsZXdhcmUvY2xpZW50T3BlbklkQ29ubmVjdENsaWVudC5qcyJdLCJuYW1lcyI6WyJJc3N1ZXIiLCJyZXF1aXJlIiwib2lkY1BvcnQiLCJpc3N1ZXIiLCJkaXNjb3ZlciIsIm9pZGNDbGllbnQiLCJDbGllbnQiLCJjbGllbnRfaWQiLCJjbGllbnRfc2VjcmV0IiwiaWRfdG9rZW5fc2lnbmVkX3Jlc3BvbnNlX2FsZyIsInRva2VuX2VuZHBvaW50X2F1dGhfbWV0aG9kIiwiYXV0aFVSTCIsImF1dGhvcml6YXRpb25VcmwiLCJyZWRpcmVjdF91cmkiLCJzY29wZSIsImNvbnRleHQiLCJuZXh0IiwicGF0aCIsImNvbnNvbGUiLCJsb2ciLCJpbnRyb3NwZWN0aW9uIiwiaW50cm9zcGVjdCIsInRoZW4iLCJyZXNwb25zZSIsImJvZHkiXSwibWFwcGluZ3MiOiI7QUFDQSxNQUFNLEVBQUVBLE1BQUYsS0FBYUMsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLElBQWpCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHSCxNQUFNLENBQUNJLFFBQVAsQ0FBaUIsb0JBQW1CRixRQUFTLEVBQTdDLENBQWY7QUFDQSxNQUFNRyxVQUFVLEdBQUcsSUFBSUYsTUFBTSxDQUFDRyxNQUFYO0FBQ2pCO0FBQ0VDLEVBQUFBLFNBQVMsRUFBRSwwQkFEYjtBQUVFQyxFQUFBQSxhQUFhLEVBQUUsUUFGakI7QUFHRUMsRUFBQUEsNEJBQTRCLEVBQUUsT0FIaEM7QUFJRUMsRUFBQUEsMEJBQTBCLEVBQUUscUJBSjlCLEVBRGlCLENBQW5COzs7QUFRQSxJQUFJQyxPQUFPLEdBQUdOLFVBQVUsQ0FBQ08sZ0JBQVgsQ0FBNEI7QUFDeENDLEVBQUFBLFlBQVksRUFBRSxtQkFEMEI7QUFFeENDLEVBQUFBLEtBQUssRUFBRSxRQUZpQyxFQUE1QixDQUFkOzs7O0FBTUEsT0FBT0MsT0FBUCxFQUFnQkMsSUFBaEIsS0FBeUI7QUFDdkIsTUFBSUQsT0FBTyxDQUFDRSxJQUFSLElBQWdCLGFBQXBCLEVBQW1DO0FBQ2pDQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVIsT0FBWjtBQUNBLFFBQUlTLGFBQWEsR0FBRyxNQUFNZixVQUFVO0FBQ2pDZ0IsSUFBQUEsVUFEdUIsQ0FDWixPQURZO0FBRXZCQyxJQUFBQSxJQUZ1QixDQUVsQixVQUFTQyxRQUFULEVBQW1CO0FBQ3ZCLGFBQU9BLFFBQVA7QUFDRCxLQUp1QixDQUExQjtBQUtBUixJQUFBQSxPQUFPLENBQUNTLElBQVIsR0FBZUosYUFBZjtBQUNEO0FBQ0QsUUFBTUosSUFBSSxFQUFWO0FBQ0QsQ0FYRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIEF1dGhvcml6YXRpb24gY2xpZW50IGV4YW1wbGVcbmNvbnN0IHsgSXNzdWVyIH0gPSByZXF1aXJlKCdvcGVuaWQtY2xpZW50JylcblxuY29uc3Qgb2lkY1BvcnQgPSA4MDg0XG5jb25zdCBpc3N1ZXIgPSBJc3N1ZXIuZGlzY292ZXIoYGh0dHA6Ly9sb2NhbGhvc3Q6JHtvaWRjUG9ydH1gKSAvLyBUT0RPOiBGaXggISB0aGlzIGlzIGEgcHJvbWlzZSB0aGF0IHNob3VsZCBiZSBhd2FpdGVkLlxuY29uc3Qgb2lkY0NsaWVudCA9IG5ldyBpc3N1ZXIuQ2xpZW50KFxuICB7XG4gICAgY2xpZW50X2lkOiAncHJpdmF0ZUNsaWVudEFwcGxpY2F0aW9uJyxcbiAgICBjbGllbnRfc2VjcmV0OiAnc2VjcmV0JyxcbiAgICBpZF90b2tlbl9zaWduZWRfcmVzcG9uc2VfYWxnOiAnUlMyNTYnLCAvLyBkZWZhdWx0cyB0byBSUzI1NlxuICAgIHRva2VuX2VuZHBvaW50X2F1dGhfbWV0aG9kOiAnY2xpZW50X3NlY3JldF9iYXNpYycsIC8vIGRlZmF1bHRzIHRvIGNsaWVudF9zZWNyZXRfYmFzaWNcbiAgfSAvKlsga2V5c3RvcmUgXSovLFxuKSAvLyBrZXlzdG9yZSBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCBmb3IgaW5zdGFudGlhdGluZyBhIGNsaWVudCB3aXRoIGNvbmZpZ3VyZWQgYXN5bW1ldHJpY2FsIElEIFRva2VuIG9yIFVzZXJJbmZvIHJlc3BvbnNlIGVuY3J5cHRpb25cbmxldCBhdXRoVVJMID0gb2lkY0NsaWVudC5hdXRob3JpemF0aW9uVXJsKHtcbiAgcmVkaXJlY3RfdXJpOiAnaHR0cHM6Ly9sdmgubWUvY2InLFxuICBzY29wZTogJ29wZW5pZCcsXG59KVxuXG5cbmFzeW5jIChjb250ZXh0LCBuZXh0KSA9PiB7XG4gIGlmIChjb250ZXh0LnBhdGggPT0gJy9vaWRjQ2xpZW50Jykge1xuICAgIGNvbnNvbGUubG9nKGF1dGhVUkwpXG4gICAgbGV0IGludHJvc3BlY3Rpb24gPSBhd2FpdCBvaWRjQ2xpZW50XG4gICAgICAuaW50cm9zcGVjdCgndG9rZW4nKSAvLyA9PiBQcm9taXNlXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgIH0pXG4gICAgY29udGV4dC5ib2R5ID0gaW50cm9zcGVjdGlvblxuICB9XG4gIGF3YWl0IG5leHQoKVxufVxuIl19