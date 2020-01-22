"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.initialize = initialize;
var _koaBodyParser = _interopRequireDefault(require("koa-bodyParser"));
var _koaMount = _interopRequireDefault(require("koa-mount"));
var _oidcInteractionMiddleware = require("../../../utility/middleware/oidcInteraction.middleware.js");

var _memory_adapter = _interopRequireDefault(require("oidc-provider/lib/adapters/memory_adapter.js"));
var _oidcConfiguration = require("./oidcConfiguration.js");
var _clientApplication = require("./clientApplication.js");
var _keystore = _interopRequireDefault(require("./key/keystore.json"));
var _templateRendering = require("./middleware/templateRendering.js");

async function initialize({ targetProjectConfig, entrypointKey }) {
  let OpenIdConnectServer;
  let openIdConnectServer = new OpenIdConnectServer(
  `${PROTOCOL}${HOST}:${port}`,
  _oidcConfiguration.oidcConfiguration);


  let entrypointSetting = { defaultConditionTreeKey: '' };




  await openIdConnectServer.
  initialize({

    clients: _clientApplication.clientArray,
    adapter: _memory_adapter.default,
    keystore: _keystore.default }).

  catch(error => {
    throw error;
  });
  const oidcKoaServer = openIdConnectServer.app;






  serverKoa.proxy = true;













  let middlewareArray = [
  (0, _templateRendering.createTemplateRenderingMiddleware)(),

  (0, _koaMount.default)('/', openIdConnectServer.app),
  (0, _koaBodyParser.default)(),
  async (context, next) => {


    await context.set('Access-Control-Allow-Origin', '*');
    await context.set('connection', 'keep-alive');
    await next();
  },
  (0, _oidcInteractionMiddleware.oidcInteractionEntrypoint)({ openIdConnectServer: openIdConnectServer }),
  (0, _oidcInteractionMiddleware.oidcInteractionLogin)({ openIdConnectServer: openIdConnectServer }),
  (0, _oidcInteractionMiddleware.oidcInteractionConfirm)({ openIdConnectServer: openIdConnectServer })];

}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9vcGVuSWRDb25uZWN0L3NjcmlwdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsaXplIiwidGFyZ2V0UHJvamVjdENvbmZpZyIsImVudHJ5cG9pbnRLZXkiLCJPcGVuSWRDb25uZWN0U2VydmVyIiwib3BlbklkQ29ubmVjdFNlcnZlciIsIlBST1RPQ09MIiwiSE9TVCIsInBvcnQiLCJvaWRjQ29uZmlndXJhdGlvbiIsImVudHJ5cG9pbnRTZXR0aW5nIiwiZGVmYXVsdENvbmRpdGlvblRyZWVLZXkiLCJjbGllbnRzIiwiY2xpZW50QXJyYXkiLCJhZGFwdGVyIiwibWVtb3J5QWRhcHRlciIsImtleXN0b3JlIiwiY2F0Y2giLCJlcnJvciIsIm9pZGNLb2FTZXJ2ZXIiLCJhcHAiLCJzZXJ2ZXJLb2EiLCJwcm94eSIsIm1pZGRsZXdhcmVBcnJheSIsImNvbnRleHQiLCJuZXh0Iiwic2V0Il0sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sZUFBZUEsVUFBZixDQUEwQixFQUFFQyxtQkFBRixFQUF1QkMsYUFBdkIsRUFBMUIsRUFBa0U7QUFDdkUsTUFBSUMsbUJBQUo7QUFDQSxNQUFJQyxtQkFBbUIsR0FBRyxJQUFJRCxtQkFBSjtBQUN2QixLQUFFRSxRQUFTLEdBQUVDLElBQUssSUFBR0MsSUFBSyxFQURIO0FBRXhCQyxzQ0FGd0IsQ0FBMUI7OztBQUtBLE1BQUlDLGlCQUFpQixHQUFHLEVBQUVDLHVCQUF1QixFQUFFLEVBQTNCLEVBQXhCOzs7OztBQUtBLFFBQU1OLG1CQUFtQjtBQUN0QkosRUFBQUEsVUFERyxDQUNROztBQUVWVyxJQUFBQSxPQUFPLEVBQUVDLDhCQUZDO0FBR1ZDLElBQUFBLE9BQU8sRUFBRUMsdUJBSEM7QUFJVkMsSUFBQUEsUUFBUSxFQUFSQSxpQkFKVSxFQURSOztBQU9IQyxFQUFBQSxLQVBHLENBT0dDLEtBQUssSUFBSTtBQUNkLFVBQU1BLEtBQU47QUFDRCxHQVRHLENBQU47QUFVQSxRQUFNQyxhQUFhLEdBQUdkLG1CQUFtQixDQUFDZSxHQUExQzs7Ozs7OztBQU9BQyxFQUFBQSxTQUFTLENBQUNDLEtBQVYsR0FBa0IsSUFBbEI7Ozs7Ozs7Ozs7Ozs7O0FBY0EsTUFBSUMsZUFBZSxHQUFHO0FBQ3BCLDZEQURvQjs7QUFHcEIseUJBQVMsR0FBVCxFQUEwQ2xCLG1CQUFtQixDQUFDZSxHQUE5RCxDQUhvQjtBQUlwQiwrQkFKb0I7QUFLcEIsU0FBT0ksT0FBUCxFQUFnQkMsSUFBaEIsS0FBeUI7OztBQUd2QixVQUFNRCxPQUFPLENBQUNFLEdBQVIsQ0FBWSw2QkFBWixFQUEyQyxHQUEzQyxDQUFOO0FBQ0EsVUFBTUYsT0FBTyxDQUFDRSxHQUFSLENBQVksWUFBWixFQUEwQixZQUExQixDQUFOO0FBQ0EsVUFBTUQsSUFBSSxFQUFWO0FBQ0QsR0FYbUI7QUFZcEIsNERBQTBCLEVBQUVwQixtQkFBbUIsRUFBRUEsbUJBQXZCLEVBQTFCLENBWm9CO0FBYXBCLHVEQUFxQixFQUFFQSxtQkFBbUIsRUFBRUEsbUJBQXZCLEVBQXJCLENBYm9CO0FBY3BCLHlEQUF1QixFQUFFQSxtQkFBbUIsRUFBRUEsbUJBQXZCLEVBQXZCLENBZG9CLENBQXRCOztBQWdCRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaWxlc3lzdGVtIGZyb20gJ2ZzJ1xuaW1wb3J0IGtvYUJvZHlQYXJzZXIgZnJvbSAna29hLWJvZHlQYXJzZXInXG5pbXBvcnQga29hTW91bnQgZnJvbSAna29hLW1vdW50JyAvLyBtb3VudCBrb2EgYXBwIGFzIG1pZGRsZXdhcmUgdG8gYW5vdGhlciBrb2EgYXBwXG5pbXBvcnQgeyBvaWRjSW50ZXJhY3Rpb25FbnRyeXBvaW50LCBvaWRjSW50ZXJhY3Rpb25Mb2dpbiwgb2lkY0ludGVyYWN0aW9uQ29uZmlybSB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdHkvbWlkZGxld2FyZS9vaWRjSW50ZXJhY3Rpb24ubWlkZGxld2FyZS5qcydcbmltcG9ydCBPcGVuSWRDb25uZWN0U2VydmVyIGZyb20gJ29pZGMtcHJvdmlkZXInXG5pbXBvcnQgbWVtb3J5QWRhcHRlciBmcm9tICdvaWRjLXByb3ZpZGVyL2xpYi9hZGFwdGVycy9tZW1vcnlfYWRhcHRlci5qcycgLy8gZm9yIGRldmVsb3BtZW50IG9ubHlcbmltcG9ydCB7IG9pZGNDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9vaWRjQ29uZmlndXJhdGlvbi5qcydcbmltcG9ydCB7IGNsaWVudEFycmF5IH0gZnJvbSAnLi9jbGllbnRBcHBsaWNhdGlvbi5qcydcbmltcG9ydCBrZXlzdG9yZSBmcm9tICcuL2tleS9rZXlzdG9yZS5qc29uJ1xuaW1wb3J0IHsgY3JlYXRlVGVtcGxhdGVSZW5kZXJpbmdNaWRkbGV3YXJlIH0gZnJvbSAnLi9taWRkbGV3YXJlL3RlbXBsYXRlUmVuZGVyaW5nLmpzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZSh7IHRhcmdldFByb2plY3RDb25maWcsIGVudHJ5cG9pbnRLZXkgfSkge1xuICBsZXQgT3BlbklkQ29ubmVjdFNlcnZlciAvLyBvaWRjLXByb3ZpZGVyIGNsYXNzXG4gIGxldCBvcGVuSWRDb25uZWN0U2VydmVyID0gbmV3IE9wZW5JZENvbm5lY3RTZXJ2ZXIoXG4gICAgYCR7UFJPVE9DT0x9JHtIT1NUfToke3BvcnR9YCwgLy8gaXNzdWVyIGFkZHJlc3NcbiAgICBvaWRjQ29uZmlndXJhdGlvbixcbiAgKSAvLyBvaWRjLXByb3ZpZGVyIGluc3RhbmNlXG5cbiAgbGV0IGVudHJ5cG9pbnRTZXR0aW5nID0geyBkZWZhdWx0Q29uZGl0aW9uVHJlZUtleTogJycgfVxuXG4gIC8qKlxuICAgKiBpbml0aWFsaXplIG9BdXRoMiBzZXJ2ZXJcbiAgICovXG4gIGF3YWl0IG9wZW5JZENvbm5lY3RTZXJ2ZXJcbiAgICAuaW5pdGlhbGl6ZSh7XG4gICAgICAvLyBpbml0aWFsaXplIHNlcnZlci5cbiAgICAgIGNsaWVudHM6IGNsaWVudEFycmF5LFxuICAgICAgYWRhcHRlcjogbWVtb3J5QWRhcHRlciwgLy8gZGF0YWJzZSBhZGFwdGVyIFRPRE86IGltcGxlbWVudCBodHRwczovL2dpdGh1Yi5jb20vcGFudmEvbm9kZS1vaWRjLXByb3ZpZGVyL2Jsb2IvbWFzdGVyL2V4YW1wbGUvbXlfYWRhcHRlci5qc1xuICAgICAga2V5c3RvcmUsIC8vIGVuY3J5cHRpb24ga2V5cyAvIGNlcnRpZmljYXRlcy4gVE9ETzogY3JlYXRlIGtleXN0b3JlIGZvciBwcm9kdWN0aW9uXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9KVxuICBjb25zdCBvaWRjS29hU2VydmVyID0gb3BlbklkQ29ubmVjdFNlcnZlci5hcHBcblxuICAvLyBjb29raWUgc2lnbmluZyBrZXlzIC8vIFRPRE86IGFkZCBlbmNyeXB0aW9uIGtleXMgZm9yIGNvb2tpZXMgdG8gcHJldmVudCB0YW1wZXJpbmcgJiBhZGQgaW50ZXJ2YWwgcm90YXRpb24gZm9yIGtleXMuXG4gIC8vIG9pZGNLb2FTZXJ2ZXIua2V5cyA9IFsvKiBBZGQgc2lnbmluZyBrZXlzIGZvciBjb29raWVzICYgY29uZmlndXJlIGludGVydmFsIGZvciBjcmVhdGluZyBuZXcga2V5cyAocm90YXRpb24pICovXSAvLyBhcyBleHBsYWluZWQgaW4ga29zIGRvY3MgJiBpbiBodHRwczovL2dpdGh1Yi5jb20vcGFudmEvbm9kZS1vaWRjLXByb3ZpZGVyL2Jsb2IvbWFzdGVyL2RvY3MvY29uZmlndXJhdGlvbi5tZCNjb29raWVza2V5c1xuXG4gIC8vIFRPRE86IGNoZWNrIGlmIHByb3h5IGNvbmZpZ3VyYXRpb24gYmVsb3cgaXMgbmVjZXNzYXJ5IGZvciB0aGUgcHJvZHVjdGlvbiBzZXR1cC5cbiAgLy8gb3BlbklkQ29ubmVjdFNlcnZlci5wcm94eSA9IHRydWUgLy8gdHJ1c3QgeC1mb3J3YXJkZWQgaGVhZGVycywgd2hpY2ggYXJlIHJlcXVpcmVkIGZvciBvaWRjIHRvIGRldGVjdCB0aGUgb3JpZ2luYWwgaXAuIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wYW52YS9ub2RlLW9pZGMtcHJvdmlkZXIvYmxvYi9tYXN0ZXIvZG9jcy9jb25maWd1cmF0aW9uLm1kI3RydXN0aW5nLXRscy1vZmZsb2FkaW5nLXByb3hpZXNcbiAgc2VydmVyS29hLnByb3h5ID0gdHJ1ZVxuXG4gIC8qKiBzdGF0ZSAmIG5vbmNlIGluIG9wZW5pZCBjb25uZWN0IHNlcnZlciByZXF1ZXN0c1xuICAgKiBJbiBhZGRpdGlvbiB5b3UgbmVlZCB0byBjcmVhdGUgdHdvIHJhbmRvbSBudW1iZXJzIGZvciBzdGF0ZSBhbmQgbm9uY2UuIFN0YXRlIGlzIHVzZWQgdG8gY29ycmVsYXRlIHRoZSBhdXRoZW50aWNhdGlvbiByZXNwb25zZSxcbiAgICogbm9uY2UgaXMgdXNlZCB0byBjb3JyZWxhdGUgdGhlIGlkZW50aXR5IHRva2VuIGNvbWluZyBiYWNrLiBCb3RoIHZhbHVlcyBuZWVkIHRvIGJlIHN0b3JlZCB0ZW1wb3JhcmlseSAoSSB1c2UgYSBjb29raWUgZm9yIHRoYXQpLlxuICAgKiBzdGF0ZSBwYXJhbWV0ZXIgLSByZXR1cm5lZCBmcm9tIHRoZSByZXNwb25zZSBhcyBpdCB3YXMgc2VudCBpbiBhIHBhcmFtZXRlci5cbiAgICogbm9uY2UgY2xhaW0gLSBpcyBpbnRlZ3JhdGVkIGludG8gdGhlIGlkX3Rva2VuIGluIHRoZSByZXNwb25zZSBhcyBhIGNsYWltICh0b2tlbidzIGRhdGEgY29tcG9uZW50KS5cbiAgICogSU1QT1JUQU5UIC0gdGhlIG5vbmNlIGZvciBleGFtcGxlIGluIHRoZSBjb29raWUgaW4gdGhlIGJyb3dzZXIgaXMgc2F2ZWQgYXMgYSBjcnlwdG9ncmFwaGljIGhhc2gsIGFuZCBvbmx5IHRoZSBzZXJ2ZXIgY2FuIGNoZWNrIHdldGhlciB0aGUgcmVjaWV2ZWQgbm9uY2UgaXMgYWJsZSB0byB2ZXJpZnkgYW5kIGNvbXBhcmUgdGhlIG5vbmNlcy5cbiAgICovXG5cbiAgLyoqXG4gICAqIENlYXRlcyBmb2xsb3dpbmcgcm91dGVzOiBodHRwczovL2dpdGh1Yi5jb20vcGFudmEvbm9kZS1vaWRjLXByb3ZpZGVyL2Jsb2IvbWFzdGVyL2xpYi9oZWxwZXJzL2RlZmF1bHRzLmpzI0wyMTBcbiAgICogYWRkIG1pZGRsd2FyZSB0byB0aGUgb2lkYyBrb2Egc2VydmVyIGFycmF5IGZvbGxvd2luZyBpbnN0cnVjdGlvbnMgLSBodHRwczovL2dpdGh1Yi5jb20vcGFudmEvbm9kZS1vaWRjLXByb3ZpZGVyL2Jsb2IvbWFzdGVyL2RvY3MvY29uZmlndXJhdGlvbi5tZCNyZWdpc3RlcmluZy1tb2R1bGUtbWlkZGxld2FyZXMtaGVsbWV0LWlwLWZpbHRlcnMtcmF0ZS1saW1pdGVycy1ldGNcbiAgICovXG4gIGxldCBtaWRkbGV3YXJlQXJyYXkgPSBbXG4gICAgY3JlYXRlVGVtcGxhdGVSZW5kZXJpbmdNaWRkbGV3YXJlKCksXG4gICAgLy8gbW91bnQgb2lkYyBrb2EgYXBwIGFzIG1pZGRsZXdhcmVzXG4gICAga29hTW91bnQoJy8nIC8qIGJhc2UgcGF0aCB0byBtb3VudCB0byAqLywgb3BlbklkQ29ubmVjdFNlcnZlci5hcHApLFxuICAgIGtvYUJvZHlQYXJzZXIoKSxcbiAgICBhc3luYyAoY29udGV4dCwgbmV4dCkgPT4ge1xuICAgICAgLy8gaW5zdGFuY2UubWlkZGxld2FyZUFycmF5LnB1c2gobWlkZGxld2FyZSlcbiAgICAgIC8vIGF3YWl0IGNvbnRleHQucmVxLnNldFRpbWVvdXQoMCk7IC8vIGNoYW5nZXMgZGVmYXVsdCBOb2RlanMgdGltZW91dCAoZGVmYXVsdCAxMjAgc2Vjb25kcykuXG4gICAgICBhd2FpdCBjb250ZXh0LnNldCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKVxuICAgICAgYXdhaXQgY29udGV4dC5zZXQoJ2Nvbm5lY3Rpb24nLCAna2VlcC1hbGl2ZScpXG4gICAgICBhd2FpdCBuZXh0KClcbiAgICB9LFxuICAgIG9pZGNJbnRlcmFjdGlvbkVudHJ5cG9pbnQoeyBvcGVuSWRDb25uZWN0U2VydmVyOiBvcGVuSWRDb25uZWN0U2VydmVyIH0pLFxuICAgIG9pZGNJbnRlcmFjdGlvbkxvZ2luKHsgb3BlbklkQ29ubmVjdFNlcnZlcjogb3BlbklkQ29ubmVjdFNlcnZlciB9KSxcbiAgICBvaWRjSW50ZXJhY3Rpb25Db25maXJtKHsgb3BlbklkQ29ubmVjdFNlcnZlcjogb3BlbklkQ29ubmVjdFNlcnZlciB9KSxcbiAgXVxufVxuIl19