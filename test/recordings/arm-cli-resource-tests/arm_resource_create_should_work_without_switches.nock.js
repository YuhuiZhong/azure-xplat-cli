// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '3ca49042-782a-4cc9-89b5-ee1b487fe115',
    name: 'AzSdkCore1',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1449d5b7-8a83-47db-ae4c-9b03e888bad0',
    registeredProviders: ['website'],
    registeredResourceNamespaces: ['microsoft.insights', 'successbricks.cleardb', 'microsoft.web'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'South Central US';
  process.env['AZURE_ARM_TEST_SQL_RESOURCE_LOCATION'] = 'undefined';
  process.env['AZURE_ARM_TEST_WEBSITES_RESOURCE_LOCATION'] = 'undefined';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '297621eaf8847107bad10d2758797257',
  date: 'Thu, 12 Mar 2015 17:56:31 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xTestResource7213?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource7213' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31987',
  'x-ms-request-id': '4508c0d0-bd50-4d5b-aefd-90f975c57b8b',
  'x-ms-correlation-request-id': '4508c0d0-bd50-4d5b-aefd-90f975c57b8b',
  'x-ms-routing-request-id': 'WESTUS:20150312T175631Z:4508c0d0-bd50-4d5b-aefd-90f975c57b8b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 17:56:31 GMT',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'b9a2a01bb36e7997bf78ef2a6d48e5d0',
  date: 'Thu, 12 Mar 2015 17:56:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xTestResource7213?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xTestResource7213\",\"name\":\"xTestResource7213\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '205',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1187',
  'x-ms-request-id': '7e68c903-75cc-4036-895c-6c6b18341d91',
  'x-ms-correlation-request-id': '7e68c903-75cc-4036-895c-6c6b18341d91',
  'x-ms-routing-request-id': 'WESTUS:20150312T175632Z:7e68c903-75cc-4036-895c-6c6b18341d91',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 17:56:31 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'd405cc388a4a71fd90ae4bf4d8401282',
  date: 'Thu, 12 Mar 2015 17:56:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xTestResource7213/providers/Microsoft.Web//sites/xTestGrpRes184?api-version=2014-04-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a106f9c9-27c5-4606-92b4-e417503498e6',
  'x-ms-correlation-request-id': 'a106f9c9-27c5-4606-92b4-e417503498e6',
  'x-ms-routing-request-id': 'WESTUS:20150312T175633Z:a106f9c9-27c5-4606-92b4-e417503498e6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 17:56:33 GMT',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '46c0f84bcea17910ac6a251f8a565b09',
  date: 'Thu, 12 Mar 2015 17:56:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xTestResource7213/providers/Microsoft.Web//sites/xTestGrpRes184?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xTestResource7213/providers/Microsoft.Web/sites/xTestGrpRes184\",\"name\":\"xTestGrpRes184\",\"type\":\"Microsoft.Web/sites\",\"kind\":null,\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes184\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres184.azurewebsites.net\"],\"webSpace\":\"xTestResource7213-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-003.api.azurewebsites.windows.net:454/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/webspaces/xTestResource7213-SouthCentralUSwebspace/sites/xTestGrpRes184\",\"repositorySiteName\":\"xTestGrpRes184\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres184.azurewebsites.net\",\"xtestgrpres184.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres184.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres184.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"webHostingPlan\":\"Default1\",\"lastModifiedTimeUtc\":\"2015-03-12T17:56:38.913\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes184\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"kind\":null,\"cloningInfo\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1848',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '48e1cca4-2f3f-4481-9389-a284d096844e',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1185',
  'x-ms-correlation-request-id': '1e04a4b1-89a2-4365-9d7d-c19eb329f22c',
  'x-ms-routing-request-id': 'WESTUS:20150312T175641Z:1e04a4b1-89a2-4365-9d7d-c19eb329f22c',
  date: 'Thu, 12 Mar 2015 17:56:40 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'd1e3e383f03c7dd9ba10ab6a4c21d7ac',
  date: 'Thu, 12 Mar 2015 17:56:41 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xTestResource7213?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xTestResource7213\",\"name\":\"xTestResource7213\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31980',
  'x-ms-request-id': '11ae6502-e883-4f01-81e7-8aa2ffe5afb9',
  'x-ms-correlation-request-id': '11ae6502-e883-4f01-81e7-8aa2ffe5afb9',
  'x-ms-routing-request-id': 'WESTUS:20150312T175641Z:11ae6502-e883-4f01-81e7-8aa2ffe5afb9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 17:56:41 GMT',
  'content-length': '205' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '37d960273cff75d0ae93ba9721857983',
  date: 'Thu, 12 Mar 2015 17:56:41 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xTestResource7213/resources?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xTestResource7213/providers/Microsoft.Web/sites/xTestGrpRes184\",\"name\":\"xTestGrpRes184\",\"type\":\"Microsoft.Web/sites\",\"location\":\"southcentralus\",\"tags\":{}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31989',
  'x-ms-request-id': 'c51b897c-829f-4ba3-90a8-fd63df92b440',
  'x-ms-correlation-request-id': 'c51b897c-829f-4ba3-90a8-fd63df92b440',
  'x-ms-routing-request-id': 'WESTUS:20150312T175642Z:c51b897c-829f-4ba3-90a8-fd63df92b440',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 17:56:42 GMT',
  'content-length': '241' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xTestResource7213/providers/Microsoft.Authorization/permissions?api-version=2014-07-01-preview')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '45',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:1068634e-be18-48cd-8bb1-cec5c42c5d39',
  'x-ms-ratelimit-remaining-subscription-reads': '31986',
  'x-ms-correlation-request-id': '2293805d-9394-4108-b4aa-25d29bac6d38',
  'x-ms-routing-request-id': 'WESTUS:20150312T175642Z:2293805d-9394-4108-b4aa-25d29bac6d38',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 17:56:42 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '796be226e3fa7fe49395ffb576b5eaee',
  date: 'Thu, 12 Mar 2015 17:56:42 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xTestResource7213?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNzIxMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1186',
  'x-ms-request-id': '2ab5f983-287d-434f-a1c6-a10312c8734d',
  'x-ms-correlation-request-id': '2ab5f983-287d-434f-a1c6-a10312c8734d',
  'x-ms-routing-request-id': 'WESTUS:20150312T175643Z:2ab5f983-287d-434f-a1c6-a10312c8734d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 17:56:43 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '97399e186a0171fda9c98a0d5cb1f9b7',
  date: 'Thu, 12 Mar 2015 17:56:58 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNzIxMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFNzIxMy1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '31988',
  'x-ms-request-id': 'a9d97e6e-84e3-4d80-a0dd-1b3ae90260d2',
  'x-ms-correlation-request-id': 'a9d97e6e-84e3-4d80-a0dd-1b3ae90260d2',
  'x-ms-routing-request-id': 'WESTUS:20150312T175659Z:a9d97e6e-84e3-4d80-a0dd-1b3ae90260d2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 17:56:59 GMT',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xTestResource7213','xTestGrpRes184'];};