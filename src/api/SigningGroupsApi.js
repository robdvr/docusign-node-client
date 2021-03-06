/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
	define(['Configuration', 'ApiClient', 'model/ErrorDetails', 'model/SigningGroup', 'model/SigningGroupInformation', 'model/SigningGroupUsers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/ErrorDetails'), require('../model/SigningGroup'), require('../model/SigningGroupInformation'), require('../model/SigningGroupUsers'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.SigningGroupsApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.ErrorDetails, root.Docusign.SigningGroup, root.Docusign.SigningGroupInformation, root.Docusign.SigningGroupUsers);
  }
}(this, function(Configuration, ApiClient, ErrorDetails, SigningGroup, SigningGroupInformation, SigningGroupUsers) {
  'use strict';

  /**
   * SigningGroups service.
   * @module api/SigningGroupsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new SigningGroupsApi. 
   * @alias module:api/SigningGroupsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient() || ApiClient.instance;


    this.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    };

    this.getApiClient = function() {
      return this.apiClient;
    };


    /**
     * Callback function to receive the result of the createList operation.
     * @callback module:api/SigningGroupsApi~createListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SigningGroupInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a signing group. 
     * Creates one or more signing groups. 

Multiple signing groups can be created in one call. Only users with account administrator privileges can create signing groups. 

An account can have a maximum of 50 signing groups. Each signing group can have a maximum of 50 group members.
 
Signing groups can be used by any account user.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {module:model/SigningGroupInformation} opts.signingGroupInformation 
     * @param {module:api/SigningGroupsApi~createListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SigningGroupInformation}
     */
    this.createList = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['signingGroupInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling createList");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SigningGroupInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/signing_groups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteList operation.
     * @callback module:api/SigningGroupsApi~deleteListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SigningGroupInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes one or more signing groups.
     * Deletes one or more signing groups in the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {module:model/SigningGroupInformation} opts.signingGroupInformation 
     * @param {module:api/SigningGroupsApi~deleteListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SigningGroupInformation}
     */
    this.deleteList = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['signingGroupInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteList");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SigningGroupInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/signing_groups', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the deleteUsers operation.
     * @callback module:api/SigningGroupsApi~deleteUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SigningGroupUsers} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes  one or more members from a signing group.
     * Deletes  one or more members from the specified signing group. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} signingGroupId 
     * @param {Object} opts Optional parameters
     * @param {module:model/SigningGroupUsers} opts.signingGroupUsers 
     * @param {module:api/SigningGroupsApi~deleteUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SigningGroupUsers}
     */
    this.deleteUsers = function(accountId, signingGroupId, opts, callback) {
      opts = opts || {};
      var postBody = opts['signingGroupUsers'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteUsers");
      }

      // verify the required parameter 'signingGroupId' is set
      if (signingGroupId == undefined || signingGroupId == null) {
        throw new Error("Missing the required parameter 'signingGroupId' when calling deleteUsers");
      }


      var pathParams = {
        'accountId': accountId,
        'signingGroupId': signingGroupId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SigningGroupUsers;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/signing_groups/{signingGroupId}/users', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the get operation.
     * @callback module:api/SigningGroupsApi~getCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SigningGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets information about a signing group. 
     * Retrieves information, including group member information, for the specified signing group. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} signingGroupId 
     * @param {module:api/SigningGroupsApi~getCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SigningGroup}
     */
    this.get = function(accountId, signingGroupId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling get");
      }

      // verify the required parameter 'signingGroupId' is set
      if (signingGroupId == undefined || signingGroupId == null) {
        throw new Error("Missing the required parameter 'signingGroupId' when calling get");
      }


      var pathParams = {
        'accountId': accountId,
        'signingGroupId': signingGroupId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SigningGroup;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/signing_groups/{signingGroupId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the list operation.
     * @callback module:api/SigningGroupsApi~listCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SigningGroupInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of the Signing Groups in an account.
     * Retrieves a list of all signing groups in the specified account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {String} opts.groupType 
     * @param {String} opts.includeUsers When set to **true**, the response includes the signing group members. 
     * @param {module:api/SigningGroupsApi~listCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SigningGroupInformation}
     */
    this.list = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling list");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'group_type': opts['groupType'],
        'include_users': opts['includeUsers']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SigningGroupInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/signing_groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the listUsers operation.
     * @callback module:api/SigningGroupsApi~listUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SigningGroupUsers} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of members in a Signing Group.
     * Retrieves the list of members in the specified Signing Group.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} signingGroupId 
     * @param {module:api/SigningGroupsApi~listUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SigningGroupUsers}
     */
    this.listUsers = function(accountId, signingGroupId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling listUsers");
      }

      // verify the required parameter 'signingGroupId' is set
      if (signingGroupId == undefined || signingGroupId == null) {
        throw new Error("Missing the required parameter 'signingGroupId' when calling listUsers");
      }


      var pathParams = {
        'accountId': accountId,
        'signingGroupId': signingGroupId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SigningGroupUsers;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/signing_groups/{signingGroupId}/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the update operation.
     * @callback module:api/SigningGroupsApi~updateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SigningGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a signing group. 
     * Updates signing group name and member information. You can also add new members to the signing group. A signing group can have a maximum of 50 members. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} signingGroupId 
     * @param {Object} opts Optional parameters
     * @param {module:model/SigningGroup} opts.signingGroup 
     * @param {module:api/SigningGroupsApi~updateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SigningGroup}
     */
    this.update = function(accountId, signingGroupId, opts, callback) {
      opts = opts || {};
      var postBody = opts['signingGroup'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling update");
      }

      // verify the required parameter 'signingGroupId' is set
      if (signingGroupId == undefined || signingGroupId == null) {
        throw new Error("Missing the required parameter 'signingGroupId' when calling update");
      }


      var pathParams = {
        'accountId': accountId,
        'signingGroupId': signingGroupId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SigningGroup;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/signing_groups/{signingGroupId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateList operation.
     * @callback module:api/SigningGroupsApi~updateListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SigningGroupInformation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates signing group names.
     * Updates the name of one or more existing signing groups. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} opts Optional parameters
     * @param {module:model/SigningGroupInformation} opts.signingGroupInformation 
     * @param {module:api/SigningGroupsApi~updateListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SigningGroupInformation}
     */
    this.updateList = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = opts['signingGroupInformation'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateList");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SigningGroupInformation;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/signing_groups', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * Callback function to receive the result of the updateUsers operation.
     * @callback module:api/SigningGroupsApi~updateUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SigningGroupUsers} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds members to a signing group. 
     * Adds one or more new members to a signing group. A signing group can have a maximum of 50 members. 
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} signingGroupId 
     * @param {Object} opts Optional parameters
     * @param {module:model/SigningGroupUsers} opts.signingGroupUsers 
     * @param {module:api/SigningGroupsApi~updateUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SigningGroupUsers}
     */
    this.updateUsers = function(accountId, signingGroupId, opts, callback) {
      opts = opts || {};
      var postBody = opts['signingGroupUsers'];

      // verify the required parameter 'accountId' is set
      if (accountId == undefined || accountId == null) {
        throw new Error("Missing the required parameter 'accountId' when calling updateUsers");
      }

      // verify the required parameter 'signingGroupId' is set
      if (signingGroupId == undefined || signingGroupId == null) {
        throw new Error("Missing the required parameter 'signingGroupId' when calling updateUsers");
      }


      var pathParams = {
        'accountId': accountId,
        'signingGroupId': signingGroupId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SigningGroupUsers;

      return this.apiClient.callApi(
        '/v2/accounts/{accountId}/signing_groups/{signingGroupId}/users', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));
