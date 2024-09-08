/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  AccountbalancesCountParamsViewIdEnum,
  AccountbalancesDbTableRowListParamsViewIdEnum,
  AccountBalancesResponse,
  AccountsCountParamsViewIdEnum,
  AccountsDbTableRowListParamsViewIdEnum,
  AccountsIdRequest,
  AccountsNestedListParamsEnum,
  AccountsRequest,
  AccountsResponse,
  BudgetsCountParamsViewIdEnum,
  BudgetsDbTableRowListParamsViewIdEnum,
  BudgetsIdRequest,
  BudgetsNestedListParamsEnum,
  BudgetsRequest,
  BudgetsResponse,
  CategoriesCountParamsViewIdEnum,
  CategoriesDbTableRowListParamsViewIdEnum,
  CategoriesIdRequest,
  CategoriesNestedListParamsEnum,
  CategoriesRequest,
  CategoriesResponse,
  DebtsCountParamsViewIdEnum,
  DebtsDbTableRowListParamsViewIdEnum,
  DebtsIdRequest,
  DebtsNestedListParamsEnum,
  DebtsRequest,
  DebtsResponse,
  Paginated,
  TransactionsCountParamsViewIdEnum,
  TransactionsDbTableRowListParamsViewIdEnum,
  TransactionsIdRequest,
  TransactionsNestedListParamsEnum,
  TransactionsRequest,
  TransactionsResponse,
  UsersCountParamsViewIdEnum,
  UsersDbTableRowListParamsViewIdEnum,
  UsersIdRequest,
  UsersNestedListParamsEnum,
  UsersRequest,
  UsersResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
 * @description List of all rows from Accounts table and response data fields can be filtered based on query params.
 *
 * @tags Accounts
 * @name AccountsDbTableRowList
 * @summary Accounts list
 * @request GET:/api/v2/tables/miugo4hlloysiy1/records
 * @secure
 * @response `200` `{
    list?: (AccountsResponse)[],
    PageInfo?: Paginated,

}` OK
 */
  accountsDbTableRowList = (
    query?: {
      /**
       * Allows you to fetch records that are currently visible within a specific view.
       *
       * Views:
       * * vww19un32khecp1p - Default view
       */
      viewId?: AccountsDbTableRowListParamsViewIdEnum;
      /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
      fields?: string;
      /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
      sort?: string;
      /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
      where?: string;
      /**
       * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
       * @min 1
       * @example 25
       */
      limit?: number;
      /**
       * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
       * @min 0
       * @max 1
       * @example 0
       */
      shuffle?: number;
      /**
       * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
       * @min 0
       * @example 0
       */
      offset?: number;
      /** Array of field names or comma separated filed names to include in the in nested column `Users` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Users][fields]=field1,field2` */
      "nested[Users][fields]"?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      {
        list?: AccountsResponse[];
        PageInfo?: Paginated;
      },
      any
    >({
      path: `/api/v2/tables/miugo4hlloysiy1/records`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
 *
 * @tags Accounts
 * @name AccountsCreate
 * @summary Accounts create
 * @request POST:/api/v2/tables/miugo4hlloysiy1/records
 * @secure
 * @response `200` `AccountsResponse` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  accountsCreate = (
    data: AccountsRequest | AccountsRequest[],
    params: RequestParams = {}
  ) =>
    this.request<
      AccountsResponse,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/miugo4hlloysiy1/records`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
 *
 * @tags Accounts
 * @name AccountsUpdate
 * @summary Accounts update
 * @request PATCH:/api/v2/tables/miugo4hlloysiy1/records
 * @secure
 * @response `200` `any` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  accountsUpdate = (
    data: AccountsRequest | AccountsRequest[],
    params: RequestParams = {}
  ) =>
    this.request<
      any,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/miugo4hlloysiy1/records`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete a row by using the **primary key** column value.
   *
   * @tags Accounts
   * @name AccountsDelete
   * @summary Accounts delete
   * @request DELETE:/api/v2/tables/miugo4hlloysiy1/records
   * @secure
   * @response `200` `void` OK
   */
  accountsDelete = (
    data: AccountsIdRequest | AccountsIdRequest[],
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/v2/tables/miugo4hlloysiy1/records`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Read a row data by using the **primary key** column value.
   *
   * @tags Accounts
   * @name AccountsRead
   * @summary Accounts read
   * @request GET:/api/v2/tables/miugo4hlloysiy1/records/{recordId}
   * @secure
   * @response `201` `AccountsResponse` Created
   */
  accountsRead = (
    recordId: string,
    query?: {
      /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
      fields?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AccountsResponse, any>({
      path: `/api/v2/tables/miugo4hlloysiy1/records/${recordId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Get rows count of a table by applying optional filters.
 *
 * @tags Accounts
 * @name AccountsCount
 * @summary Accounts count
 * @request GET:/api/v2/tables/miugo4hlloysiy1/records/count
 * @secure
 * @response `200` `{
    count?: number,

}` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  accountsCount = (
    query?: {
      /**
       * Allows you to fetch records that are currently visible within a specific view.
       *
       * Views:
       * * vww19un32khecp1p - Default view
       */
      viewId?: AccountsCountParamsViewIdEnum;
      /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
      where?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      {
        count?: number;
      },
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/miugo4hlloysiy1/records/count`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description This API endpoint allows you to retrieve list of linked records for a specific `Link field` and `Record ID`. The response is an array of objects containing Primary Key and its corresponding display value.
 *
 * @tags Accounts
 * @name AccountsNestedList
 * @summary Link Records list
 * @request GET:/api/v2/tables/miugo4hlloysiy1/links/{linkFieldId}/records/{recordId}
 * @secure
 * @response `200` `{
  \** List of data objects *\
    list: (object)[],
  \** Paginated Info *\
    pageInfo: Paginated,

}` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  accountsNestedList = (
    linkFieldId: AccountsNestedListParamsEnum,
    recordId: string,
    query?: {
      /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
      fields?: string;
      /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
      sort?: string;
      /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
      where?: string;
      /**
       * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
       * @min 1
       * @example 25
       */
      limit?: number;
      /**
       * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
       * @min 0
       * @example 0
       */
      offset?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      {
        /** List of data objects */
        list: object[];
        /** Paginated Info */
        pageInfo: Paginated;
      },
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/miugo4hlloysiy1/links/${linkFieldId}/records/${recordId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description This API endpoint allows you to link records to a specific `Link field` and `Record ID`. The request payload is an array of record-ids from the adjacent table for linking purposes. Note that any existing links, if present, will be unaffected during this operation.
 *
 * @tags Accounts
 * @name AccountsNestedLink
 * @summary Link Records
 * @request POST:/api/v2/tables/miugo4hlloysiy1/links/{linkFieldId}/records/{recordId}
 * @secure
 * @response `200` `any` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  accountsNestedLink = (
    linkFieldId: AccountsNestedListParamsEnum,
    recordId: string,
    data: object | object[],
    params: RequestParams = {}
  ) =>
    this.request<
      any,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/miugo4hlloysiy1/links/${linkFieldId}/records/${recordId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description This API endpoint allows you to unlink records from a specific `Link field` and `Record ID`. The request payload is an array of record-ids from the adjacent table for unlinking purposes. Note that, - duplicated record-ids will be ignored. - non-existent record-ids will be ignored.
 *
 * @tags Accounts
 * @name AccountsNestedUnlink
 * @summary Unlink Records
 * @request DELETE:/api/v2/tables/miugo4hlloysiy1/links/{linkFieldId}/records/{recordId}
 * @secure
 * @response `200` `any` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  accountsNestedUnlink = (
    linkFieldId: AccountsNestedListParamsEnum,
    recordId: string,
    data: object[],
    params: RequestParams = {}
  ) =>
    this.request<
      any,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/miugo4hlloysiy1/links/${linkFieldId}/records/${recordId}`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description List of all rows from Budgets table and response data fields can be filtered based on query params.
 *
 * @tags Budgets
 * @name BudgetsDbTableRowList
 * @summary Budgets list
 * @request GET:/api/v2/tables/mu8j9kxmnjndm93/records
 * @secure
 * @response `200` `{
    list?: (BudgetsResponse)[],
    PageInfo?: Paginated,

}` OK
 */
  budgetsDbTableRowList = (
    query?: {
      /**
       * Allows you to fetch records that are currently visible within a specific view.
       *
       * Views:
       * * vway9kxplqivnvir - Default view
       */
      viewId?: BudgetsDbTableRowListParamsViewIdEnum;
      /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
      fields?: string;
      /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
      sort?: string;
      /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
      where?: string;
      /**
       * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
       * @min 1
       * @example 25
       */
      limit?: number;
      /**
       * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
       * @min 0
       * @max 1
       * @example 0
       */
      shuffle?: number;
      /**
       * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
       * @min 0
       * @example 0
       */
      offset?: number;
      /** Array of field names or comma separated filed names to include in the in nested column `Categories` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Categories][fields]=field1,field2` */
      "nested[Categories][fields]"?: string;
      /** Array of field names or comma separated filed names to include in the in nested column `Users` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Users][fields]=field1,field2` */
      "nested[Users][fields]"?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      {
        list?: BudgetsResponse[];
        PageInfo?: Paginated;
      },
      any
    >({
      path: `/api/v2/tables/mu8j9kxmnjndm93/records`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
 *
 * @tags Budgets
 * @name BudgetsCreate
 * @summary Budgets create
 * @request POST:/api/v2/tables/mu8j9kxmnjndm93/records
 * @secure
 * @response `200` `BudgetsResponse` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  budgetsCreate = (
    data: BudgetsRequest | BudgetsRequest[],
    params: RequestParams = {}
  ) =>
    this.request<
      BudgetsResponse,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/mu8j9kxmnjndm93/records`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
 *
 * @tags Budgets
 * @name BudgetsUpdate
 * @summary Budgets update
 * @request PATCH:/api/v2/tables/mu8j9kxmnjndm93/records
 * @secure
 * @response `200` `any` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  budgetsUpdate = (
    data: BudgetsRequest | BudgetsRequest[],
    params: RequestParams = {}
  ) =>
    this.request<
      any,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/mu8j9kxmnjndm93/records`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete a row by using the **primary key** column value.
   *
   * @tags Budgets
   * @name BudgetsDelete
   * @summary Budgets delete
   * @request DELETE:/api/v2/tables/mu8j9kxmnjndm93/records
   * @secure
   * @response `200` `void` OK
   */
  budgetsDelete = (
    data: BudgetsIdRequest | BudgetsIdRequest[],
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/v2/tables/mu8j9kxmnjndm93/records`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Read a row data by using the **primary key** column value.
   *
   * @tags Budgets
   * @name BudgetsRead
   * @summary Budgets read
   * @request GET:/api/v2/tables/mu8j9kxmnjndm93/records/{recordId}
   * @secure
   * @response `201` `BudgetsResponse` Created
   */
  budgetsRead = (
    recordId: string,
    query?: {
      /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
      fields?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<BudgetsResponse, any>({
      path: `/api/v2/tables/mu8j9kxmnjndm93/records/${recordId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Get rows count of a table by applying optional filters.
 *
 * @tags Budgets
 * @name BudgetsCount
 * @summary Budgets count
 * @request GET:/api/v2/tables/mu8j9kxmnjndm93/records/count
 * @secure
 * @response `200` `{
    count?: number,

}` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  budgetsCount = (
    query?: {
      /**
       * Allows you to fetch records that are currently visible within a specific view.
       *
       * Views:
       * * vway9kxplqivnvir - Default view
       */
      viewId?: BudgetsCountParamsViewIdEnum;
      /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
      where?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      {
        count?: number;
      },
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/mu8j9kxmnjndm93/records/count`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description This API endpoint allows you to retrieve list of linked records for a specific `Link field` and `Record ID`. The response is an array of objects containing Primary Key and its corresponding display value.
 *
 * @tags Budgets
 * @name BudgetsNestedList
 * @summary Link Records list
 * @request GET:/api/v2/tables/mu8j9kxmnjndm93/links/{linkFieldId}/records/{recordId}
 * @secure
 * @response `200` `{
  \** List of data objects *\
    list: (object)[],
  \** Paginated Info *\
    pageInfo: Paginated,

}` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  budgetsNestedList = (
    linkFieldId: BudgetsNestedListParamsEnum,
    recordId: string,
    query?: {
      /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
      fields?: string;
      /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
      sort?: string;
      /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
      where?: string;
      /**
       * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
       * @min 1
       * @example 25
       */
      limit?: number;
      /**
       * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
       * @min 0
       * @example 0
       */
      offset?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      {
        /** List of data objects */
        list: object[];
        /** Paginated Info */
        pageInfo: Paginated;
      },
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/mu8j9kxmnjndm93/links/${linkFieldId}/records/${recordId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description This API endpoint allows you to link records to a specific `Link field` and `Record ID`. The request payload is an array of record-ids from the adjacent table for linking purposes. Note that any existing links, if present, will be unaffected during this operation.
 *
 * @tags Budgets
 * @name BudgetsNestedLink
 * @summary Link Records
 * @request POST:/api/v2/tables/mu8j9kxmnjndm93/links/{linkFieldId}/records/{recordId}
 * @secure
 * @response `200` `any` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  budgetsNestedLink = (
    linkFieldId: BudgetsNestedListParamsEnum,
    recordId: string,
    data: object | object[],
    params: RequestParams = {}
  ) =>
    this.request<
      any,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/mu8j9kxmnjndm93/links/${linkFieldId}/records/${recordId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description This API endpoint allows you to unlink records from a specific `Link field` and `Record ID`. The request payload is an array of record-ids from the adjacent table for unlinking purposes. Note that, - duplicated record-ids will be ignored. - non-existent record-ids will be ignored.
 *
 * @tags Budgets
 * @name BudgetsNestedUnlink
 * @summary Unlink Records
 * @request DELETE:/api/v2/tables/mu8j9kxmnjndm93/links/{linkFieldId}/records/{recordId}
 * @secure
 * @response `200` `any` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  budgetsNestedUnlink = (
    linkFieldId: BudgetsNestedListParamsEnum,
    recordId: string,
    data: object[],
    params: RequestParams = {}
  ) =>
    this.request<
      any,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/mu8j9kxmnjndm93/links/${linkFieldId}/records/${recordId}`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description List of all rows from Categories table and response data fields can be filtered based on query params.
 *
 * @tags Categories
 * @name CategoriesDbTableRowList
 * @summary Categories list
 * @request GET:/api/v2/tables/ms4nmdy7sg6dqv5/records
 * @secure
 * @response `200` `{
    list?: (CategoriesResponse)[],
    PageInfo?: Paginated,

}` OK
 */
  categoriesDbTableRowList = (
    query?: {
      /**
       * Allows you to fetch records that are currently visible within a specific view.
       *
       * Views:
       * * vwqyzpx6bj9qw982 - Default view
       */
      viewId?: CategoriesDbTableRowListParamsViewIdEnum;
      /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
      fields?: string;
      /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
      sort?: string;
      /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
      where?: string;
      /**
       * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
       * @min 1
       * @example 25
       */
      limit?: number;
      /**
       * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
       * @min 0
       * @max 1
       * @example 0
       */
      shuffle?: number;
      /**
       * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
       * @min 0
       * @example 0
       */
      offset?: number;
      /** Array of field names or comma separated filed names to include in the in nested column `Categories` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Categories][fields]=field1,field2` */
      "nested[Categories][fields]"?: string;
      /** Array of field names or comma separated filed names to include in the in nested column `Users` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Users][fields]=field1,field2` */
      "nested[Users][fields]"?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      {
        list?: CategoriesResponse[];
        PageInfo?: Paginated;
      },
      any
    >({
      path: `/api/v2/tables/ms4nmdy7sg6dqv5/records`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
 *
 * @tags Categories
 * @name CategoriesCreate
 * @summary Categories create
 * @request POST:/api/v2/tables/ms4nmdy7sg6dqv5/records
 * @secure
 * @response `200` `CategoriesResponse` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  categoriesCreate = (
    data: CategoriesRequest | CategoriesRequest[],
    params: RequestParams = {}
  ) =>
    this.request<
      CategoriesResponse,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/ms4nmdy7sg6dqv5/records`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
 *
 * @tags Categories
 * @name CategoriesUpdate
 * @summary Categories update
 * @request PATCH:/api/v2/tables/ms4nmdy7sg6dqv5/records
 * @secure
 * @response `200` `any` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  categoriesUpdate = (
    data: CategoriesRequest | CategoriesRequest[],
    params: RequestParams = {}
  ) =>
    this.request<
      any,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/ms4nmdy7sg6dqv5/records`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete a row by using the **primary key** column value.
   *
   * @tags Categories
   * @name CategoriesDelete
   * @summary Categories delete
   * @request DELETE:/api/v2/tables/ms4nmdy7sg6dqv5/records
   * @secure
   * @response `200` `void` OK
   */
  categoriesDelete = (
    data: CategoriesIdRequest | CategoriesIdRequest[],
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/v2/tables/ms4nmdy7sg6dqv5/records`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Read a row data by using the **primary key** column value.
   *
   * @tags Categories
   * @name CategoriesRead
   * @summary Categories read
   * @request GET:/api/v2/tables/ms4nmdy7sg6dqv5/records/{recordId}
   * @secure
   * @response `201` `CategoriesResponse` Created
   */
  categoriesRead = (
    recordId: string,
    query?: {
      /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
      fields?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<CategoriesResponse, any>({
      path: `/api/v2/tables/ms4nmdy7sg6dqv5/records/${recordId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Get rows count of a table by applying optional filters.
 *
 * @tags Categories
 * @name CategoriesCount
 * @summary Categories count
 * @request GET:/api/v2/tables/ms4nmdy7sg6dqv5/records/count
 * @secure
 * @response `200` `{
    count?: number,

}` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  categoriesCount = (
    query?: {
      /**
       * Allows you to fetch records that are currently visible within a specific view.
       *
       * Views:
       * * vwqyzpx6bj9qw982 - Default view
       */
      viewId?: CategoriesCountParamsViewIdEnum;
      /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
      where?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      {
        count?: number;
      },
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/ms4nmdy7sg6dqv5/records/count`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description This API endpoint allows you to retrieve list of linked records for a specific `Link field` and `Record ID`. The response is an array of objects containing Primary Key and its corresponding display value.
 *
 * @tags Categories
 * @name CategoriesNestedList
 * @summary Link Records list
 * @request GET:/api/v2/tables/ms4nmdy7sg6dqv5/links/{linkFieldId}/records/{recordId}
 * @secure
 * @response `200` `{
  \** List of data objects *\
    list: (object)[],
  \** Paginated Info *\
    pageInfo: Paginated,

}` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  categoriesNestedList = (
    linkFieldId: CategoriesNestedListParamsEnum,
    recordId: string,
    query?: {
      /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
      fields?: string;
      /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
      sort?: string;
      /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
      where?: string;
      /**
       * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
       * @min 1
       * @example 25
       */
      limit?: number;
      /**
       * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
       * @min 0
       * @example 0
       */
      offset?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      {
        /** List of data objects */
        list: object[];
        /** Paginated Info */
        pageInfo: Paginated;
      },
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/ms4nmdy7sg6dqv5/links/${linkFieldId}/records/${recordId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description This API endpoint allows you to link records to a specific `Link field` and `Record ID`. The request payload is an array of record-ids from the adjacent table for linking purposes. Note that any existing links, if present, will be unaffected during this operation.
 *
 * @tags Categories
 * @name CategoriesNestedLink
 * @summary Link Records
 * @request POST:/api/v2/tables/ms4nmdy7sg6dqv5/links/{linkFieldId}/records/{recordId}
 * @secure
 * @response `200` `any` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  categoriesNestedLink = (
    linkFieldId: CategoriesNestedListParamsEnum,
    recordId: string,
    data: object | object[],
    params: RequestParams = {}
  ) =>
    this.request<
      any,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/ms4nmdy7sg6dqv5/links/${linkFieldId}/records/${recordId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description This API endpoint allows you to unlink records from a specific `Link field` and `Record ID`. The request payload is an array of record-ids from the adjacent table for unlinking purposes. Note that, - duplicated record-ids will be ignored. - non-existent record-ids will be ignored.
 *
 * @tags Categories
 * @name CategoriesNestedUnlink
 * @summary Unlink Records
 * @request DELETE:/api/v2/tables/ms4nmdy7sg6dqv5/links/{linkFieldId}/records/{recordId}
 * @secure
 * @response `200` `any` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  categoriesNestedUnlink = (
    linkFieldId: CategoriesNestedListParamsEnum,
    recordId: string,
    data: object[],
    params: RequestParams = {}
  ) =>
    this.request<
      any,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/ms4nmdy7sg6dqv5/links/${linkFieldId}/records/${recordId}`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description List of all rows from Debts table and response data fields can be filtered based on query params.
 *
 * @tags Debts
 * @name DebtsDbTableRowList
 * @summary Debts list
 * @request GET:/api/v2/tables/mjxico9qnz0lhxv/records
 * @secure
 * @response `200` `{
    list?: (DebtsResponse)[],
    PageInfo?: Paginated,

}` OK
 */
  debtsDbTableRowList = (
    query?: {
      /**
       * Allows you to fetch records that are currently visible within a specific view.
       *
       * Views:
       * * vwytsja61nuhtki3 - Default view
       */
      viewId?: DebtsDbTableRowListParamsViewIdEnum;
      /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
      fields?: string;
      /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
      sort?: string;
      /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
      where?: string;
      /**
       * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
       * @min 1
       * @example 25
       */
      limit?: number;
      /**
       * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
       * @min 0
       * @max 1
       * @example 0
       */
      shuffle?: number;
      /**
       * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
       * @min 0
       * @example 0
       */
      offset?: number;
      /** Array of field names or comma separated filed names to include in the in nested column `Users` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Users][fields]=field1,field2` */
      "nested[Users][fields]"?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      {
        list?: DebtsResponse[];
        PageInfo?: Paginated;
      },
      any
    >({
      path: `/api/v2/tables/mjxico9qnz0lhxv/records`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
 *
 * @tags Debts
 * @name DebtsCreate
 * @summary Debts create
 * @request POST:/api/v2/tables/mjxico9qnz0lhxv/records
 * @secure
 * @response `200` `DebtsResponse` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  debtsCreate = (
    data: DebtsRequest | DebtsRequest[],
    params: RequestParams = {}
  ) =>
    this.request<
      DebtsResponse,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/mjxico9qnz0lhxv/records`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
 *
 * @tags Debts
 * @name DebtsUpdate
 * @summary Debts update
 * @request PATCH:/api/v2/tables/mjxico9qnz0lhxv/records
 * @secure
 * @response `200` `any` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  debtsUpdate = (
    data: DebtsRequest | DebtsRequest[],
    params: RequestParams = {}
  ) =>
    this.request<
      any,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/mjxico9qnz0lhxv/records`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete a row by using the **primary key** column value.
   *
   * @tags Debts
   * @name DebtsDelete
   * @summary Debts delete
   * @request DELETE:/api/v2/tables/mjxico9qnz0lhxv/records
   * @secure
   * @response `200` `void` OK
   */
  debtsDelete = (
    data: DebtsIdRequest | DebtsIdRequest[],
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/v2/tables/mjxico9qnz0lhxv/records`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Read a row data by using the **primary key** column value.
   *
   * @tags Debts
   * @name DebtsRead
   * @summary Debts read
   * @request GET:/api/v2/tables/mjxico9qnz0lhxv/records/{recordId}
   * @secure
   * @response `201` `DebtsResponse` Created
   */
  debtsRead = (
    recordId: string,
    query?: {
      /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
      fields?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<DebtsResponse, any>({
      path: `/api/v2/tables/mjxico9qnz0lhxv/records/${recordId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Get rows count of a table by applying optional filters.
 *
 * @tags Debts
 * @name DebtsCount
 * @summary Debts count
 * @request GET:/api/v2/tables/mjxico9qnz0lhxv/records/count
 * @secure
 * @response `200` `{
    count?: number,

}` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  debtsCount = (
    query?: {
      /**
       * Allows you to fetch records that are currently visible within a specific view.
       *
       * Views:
       * * vwytsja61nuhtki3 - Default view
       */
      viewId?: DebtsCountParamsViewIdEnum;
      /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
      where?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      {
        count?: number;
      },
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/mjxico9qnz0lhxv/records/count`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description This API endpoint allows you to retrieve list of linked records for a specific `Link field` and `Record ID`. The response is an array of objects containing Primary Key and its corresponding display value.
 *
 * @tags Debts
 * @name DebtsNestedList
 * @summary Link Records list
 * @request GET:/api/v2/tables/mjxico9qnz0lhxv/links/{linkFieldId}/records/{recordId}
 * @secure
 * @response `200` `{
  \** List of data objects *\
    list: (object)[],
  \** Paginated Info *\
    pageInfo: Paginated,

}` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  debtsNestedList = (
    linkFieldId: DebtsNestedListParamsEnum,
    recordId: string,
    query?: {
      /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
      fields?: string;
      /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
      sort?: string;
      /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
      where?: string;
      /**
       * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
       * @min 1
       * @example 25
       */
      limit?: number;
      /**
       * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
       * @min 0
       * @example 0
       */
      offset?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      {
        /** List of data objects */
        list: object[];
        /** Paginated Info */
        pageInfo: Paginated;
      },
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/mjxico9qnz0lhxv/links/${linkFieldId}/records/${recordId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description This API endpoint allows you to link records to a specific `Link field` and `Record ID`. The request payload is an array of record-ids from the adjacent table for linking purposes. Note that any existing links, if present, will be unaffected during this operation.
 *
 * @tags Debts
 * @name DebtsNestedLink
 * @summary Link Records
 * @request POST:/api/v2/tables/mjxico9qnz0lhxv/links/{linkFieldId}/records/{recordId}
 * @secure
 * @response `200` `any` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  debtsNestedLink = (
    linkFieldId: DebtsNestedListParamsEnum,
    recordId: string,
    data: object | object[],
    params: RequestParams = {}
  ) =>
    this.request<
      any,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/mjxico9qnz0lhxv/links/${linkFieldId}/records/${recordId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description This API endpoint allows you to unlink records from a specific `Link field` and `Record ID`. The request payload is an array of record-ids from the adjacent table for unlinking purposes. Note that, - duplicated record-ids will be ignored. - non-existent record-ids will be ignored.
 *
 * @tags Debts
 * @name DebtsNestedUnlink
 * @summary Unlink Records
 * @request DELETE:/api/v2/tables/mjxico9qnz0lhxv/links/{linkFieldId}/records/{recordId}
 * @secure
 * @response `200` `any` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  debtsNestedUnlink = (
    linkFieldId: DebtsNestedListParamsEnum,
    recordId: string,
    data: object[],
    params: RequestParams = {}
  ) =>
    this.request<
      any,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/mjxico9qnz0lhxv/links/${linkFieldId}/records/${recordId}`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description List of all rows from Transactions table and response data fields can be filtered based on query params.
 *
 * @tags Transactions
 * @name TransactionsDbTableRowList
 * @summary Transactions list
 * @request GET:/api/v2/tables/mtv84l6c6o26vgf/records
 * @secure
 * @response `200` `{
    list?: (TransactionsResponse)[],
    PageInfo?: Paginated,

}` OK
 */
  transactionsDbTableRowList = (
    query?: {
      /**
       * Allows you to fetch records that are currently visible within a specific view.
       *
       * Views:
       * * vwfnsf4hxgqicpk3 - Default view
       */
      viewId?: TransactionsDbTableRowListParamsViewIdEnum;
      /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
      fields?: string;
      /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
      sort?: string;
      /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
      where?: string;
      /**
       * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
       * @min 1
       * @example 25
       */
      limit?: number;
      /**
       * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
       * @min 0
       * @max 1
       * @example 0
       */
      shuffle?: number;
      /**
       * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
       * @min 0
       * @example 0
       */
      offset?: number;
      /** Array of field names or comma separated filed names to include in the in nested column `Accounts` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Accounts][fields]=field1,field2` */
      "nested[Accounts][fields]"?: string;
      /** Array of field names or comma separated filed names to include in the in nested column `Categories` result. In array syntax pass it like `fields[]=field1&fields[]=field2.`. Example : `nested[Categories][fields]=field1,field2` */
      "nested[Categories][fields]"?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      {
        list?: TransactionsResponse[];
        PageInfo?: Paginated;
      },
      any
    >({
      path: `/api/v2/tables/mtv84l6c6o26vgf/records`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
 *
 * @tags Transactions
 * @name TransactionsCreate
 * @summary Transactions create
 * @request POST:/api/v2/tables/mtv84l6c6o26vgf/records
 * @secure
 * @response `200` `TransactionsResponse` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  transactionsCreate = (
    data: TransactionsRequest | TransactionsRequest[],
    params: RequestParams = {}
  ) =>
    this.request<
      TransactionsResponse,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/mtv84l6c6o26vgf/records`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
 *
 * @tags Transactions
 * @name TransactionsUpdate
 * @summary Transactions update
 * @request PATCH:/api/v2/tables/mtv84l6c6o26vgf/records
 * @secure
 * @response `200` `any` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  transactionsUpdate = (
    data: TransactionsRequest | TransactionsRequest[],
    params: RequestParams = {}
  ) =>
    this.request<
      any,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/mtv84l6c6o26vgf/records`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete a row by using the **primary key** column value.
   *
   * @tags Transactions
   * @name TransactionsDelete
   * @summary Transactions delete
   * @request DELETE:/api/v2/tables/mtv84l6c6o26vgf/records
   * @secure
   * @response `200` `void` OK
   */
  transactionsDelete = (
    data: TransactionsIdRequest | TransactionsIdRequest[],
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/v2/tables/mtv84l6c6o26vgf/records`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Read a row data by using the **primary key** column value.
   *
   * @tags Transactions
   * @name TransactionsRead
   * @summary Transactions read
   * @request GET:/api/v2/tables/mtv84l6c6o26vgf/records/{recordId}
   * @secure
   * @response `201` `TransactionsResponse` Created
   */
  transactionsRead = (
    recordId: string,
    query?: {
      /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
      fields?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<TransactionsResponse, any>({
      path: `/api/v2/tables/mtv84l6c6o26vgf/records/${recordId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Get rows count of a table by applying optional filters.
 *
 * @tags Transactions
 * @name TransactionsCount
 * @summary Transactions count
 * @request GET:/api/v2/tables/mtv84l6c6o26vgf/records/count
 * @secure
 * @response `200` `{
    count?: number,

}` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  transactionsCount = (
    query?: {
      /**
       * Allows you to fetch records that are currently visible within a specific view.
       *
       * Views:
       * * vwfnsf4hxgqicpk3 - Default view
       */
      viewId?: TransactionsCountParamsViewIdEnum;
      /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
      where?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      {
        count?: number;
      },
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/mtv84l6c6o26vgf/records/count`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description This API endpoint allows you to retrieve list of linked records for a specific `Link field` and `Record ID`. The response is an array of objects containing Primary Key and its corresponding display value.
 *
 * @tags Transactions
 * @name TransactionsNestedList
 * @summary Link Records list
 * @request GET:/api/v2/tables/mtv84l6c6o26vgf/links/{linkFieldId}/records/{recordId}
 * @secure
 * @response `200` `{
  \** List of data objects *\
    list: (object)[],
  \** Paginated Info *\
    pageInfo: Paginated,

}` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  transactionsNestedList = (
    linkFieldId: TransactionsNestedListParamsEnum,
    recordId: string,
    query?: {
      /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
      fields?: string;
      /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
      sort?: string;
      /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
      where?: string;
      /**
       * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
       * @min 1
       * @example 25
       */
      limit?: number;
      /**
       * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
       * @min 0
       * @example 0
       */
      offset?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      {
        /** List of data objects */
        list: object[];
        /** Paginated Info */
        pageInfo: Paginated;
      },
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/mtv84l6c6o26vgf/links/${linkFieldId}/records/${recordId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description This API endpoint allows you to link records to a specific `Link field` and `Record ID`. The request payload is an array of record-ids from the adjacent table for linking purposes. Note that any existing links, if present, will be unaffected during this operation.
 *
 * @tags Transactions
 * @name TransactionsNestedLink
 * @summary Link Records
 * @request POST:/api/v2/tables/mtv84l6c6o26vgf/links/{linkFieldId}/records/{recordId}
 * @secure
 * @response `200` `any` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  transactionsNestedLink = (
    linkFieldId: TransactionsNestedListParamsEnum,
    recordId: string,
    data: object | object[],
    params: RequestParams = {}
  ) =>
    this.request<
      any,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/mtv84l6c6o26vgf/links/${linkFieldId}/records/${recordId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description This API endpoint allows you to unlink records from a specific `Link field` and `Record ID`. The request payload is an array of record-ids from the adjacent table for unlinking purposes. Note that, - duplicated record-ids will be ignored. - non-existent record-ids will be ignored.
 *
 * @tags Transactions
 * @name TransactionsNestedUnlink
 * @summary Unlink Records
 * @request DELETE:/api/v2/tables/mtv84l6c6o26vgf/links/{linkFieldId}/records/{recordId}
 * @secure
 * @response `200` `any` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  transactionsNestedUnlink = (
    linkFieldId: TransactionsNestedListParamsEnum,
    recordId: string,
    data: object[],
    params: RequestParams = {}
  ) =>
    this.request<
      any,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/mtv84l6c6o26vgf/links/${linkFieldId}/records/${recordId}`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description List of all rows from AccountBalances view and response data fields can be filtered based on query params.
 *
 * @tags AccountBalances
 * @name AccountbalancesDbTableRowList
 * @summary AccountBalances list
 * @request GET:/api/v2/tables/m2768vsp576x4sr/records
 * @secure
 * @response `200` `{
    list?: (AccountBalancesResponse)[],
    PageInfo?: Paginated,

}` OK
 */
  accountbalancesDbTableRowList = (
    query?: {
      /**
       * Allows you to fetch records that are currently visible within a specific view.
       *
       * Views:
       * * vw7cn9e0z2isrbx1 - Default view
       */
      viewId?: AccountbalancesDbTableRowListParamsViewIdEnum;
      /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
      fields?: string;
      /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
      sort?: string;
      /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
      where?: string;
      /**
       * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
       * @min 1
       * @example 25
       */
      limit?: number;
      /**
       * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
       * @min 0
       * @max 1
       * @example 0
       */
      shuffle?: number;
      /**
       * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
       * @min 0
       * @example 0
       */
      offset?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      {
        list?: AccountBalancesResponse[];
        PageInfo?: Paginated;
      },
      any
    >({
      path: `/api/v2/tables/m2768vsp576x4sr/records`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Read a row data by using the **primary key** column value.
   *
   * @tags AccountBalances
   * @name AccountbalancesRead
   * @summary AccountBalances read
   * @request GET:/api/v2/tables/m2768vsp576x4sr/records/{recordId}
   * @secure
   * @response `201` `AccountBalancesResponse` Created
   */
  accountbalancesRead = (
    recordId: string,
    query?: {
      /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
      fields?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<AccountBalancesResponse, any>({
      path: `/api/v2/tables/m2768vsp576x4sr/records/${recordId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Get rows count of a table by applying optional filters.
 *
 * @tags AccountBalances
 * @name AccountbalancesCount
 * @summary AccountBalances count
 * @request GET:/api/v2/tables/m2768vsp576x4sr/records/count
 * @secure
 * @response `200` `{
    count?: number,

}` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  accountbalancesCount = (
    query?: {
      /**
       * Allows you to fetch records that are currently visible within a specific view.
       *
       * Views:
       * * vw7cn9e0z2isrbx1 - Default view
       */
      viewId?: AccountbalancesCountParamsViewIdEnum;
      /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
      where?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      {
        count?: number;
      },
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/m2768vsp576x4sr/records/count`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description List of all rows from Users table and response data fields can be filtered based on query params.
 *
 * @tags Users
 * @name UsersDbTableRowList
 * @summary Users list
 * @request GET:/api/v2/tables/m533c9u4tlmxqen/records
 * @secure
 * @response `200` `{
    list?: (UsersResponse)[],
    PageInfo?: Paginated,

}` OK
 */
  usersDbTableRowList = (
    query?: {
      /**
       * Allows you to fetch records that are currently visible within a specific view.
       *
       * Views:
       * * vwefgjj8o930hopb - Default view
       */
      viewId?: UsersDbTableRowListParamsViewIdEnum;
      /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
      fields?: string;
      /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
      sort?: string;
      /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
      where?: string;
      /**
       * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
       * @min 1
       * @example 25
       */
      limit?: number;
      /**
       * The `shuffle` parameter used for pagination, the response will be shuffled if it is set to 1.
       * @min 0
       * @max 1
       * @example 0
       */
      shuffle?: number;
      /**
       * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
       * @min 0
       * @example 0
       */
      offset?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      {
        list?: UsersResponse[];
        PageInfo?: Paginated;
      },
      any
    >({
      path: `/api/v2/tables/m533c9u4tlmxqen/records`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Insert a new row in table by providing a key value pair object where key refers to the column alias. All the required fields should be included with payload excluding `autoincrement` and column with default value.
 *
 * @tags Users
 * @name UsersCreate
 * @summary Users create
 * @request POST:/api/v2/tables/m533c9u4tlmxqen/records
 * @secure
 * @response `200` `UsersResponse` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  usersCreate = (
    data: UsersRequest | UsersRequest[],
    params: RequestParams = {}
  ) =>
    this.request<
      UsersResponse,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/m533c9u4tlmxqen/records`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description Partial update row in table by providing a key value pair object where key refers to the column alias. You need to only include columns which you want to update.
 *
 * @tags Users
 * @name UsersUpdate
 * @summary Users update
 * @request PATCH:/api/v2/tables/m533c9u4tlmxqen/records
 * @secure
 * @response `200` `any` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  usersUpdate = (
    data: UsersRequest | UsersRequest[],
    params: RequestParams = {}
  ) =>
    this.request<
      any,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/m533c9u4tlmxqen/records`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Delete a row by using the **primary key** column value.
   *
   * @tags Users
   * @name UsersDelete
   * @summary Users delete
   * @request DELETE:/api/v2/tables/m533c9u4tlmxqen/records
   * @secure
   * @response `200` `void` OK
   */
  usersDelete = (
    data: UsersIdRequest | UsersIdRequest[],
    params: RequestParams = {}
  ) =>
    this.request<void, any>({
      path: `/api/v2/tables/m533c9u4tlmxqen/records`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Read a row data by using the **primary key** column value.
   *
   * @tags Users
   * @name UsersRead
   * @summary Users read
   * @request GET:/api/v2/tables/m533c9u4tlmxqen/records/{recordId}
   * @secure
   * @response `201` `UsersResponse` Created
   */
  usersRead = (
    recordId: string,
    query?: {
      /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
      fields?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<UsersResponse, any>({
      path: `/api/v2/tables/m533c9u4tlmxqen/records/${recordId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Get rows count of a table by applying optional filters.
 *
 * @tags Users
 * @name UsersCount
 * @summary Users count
 * @request GET:/api/v2/tables/m533c9u4tlmxqen/records/count
 * @secure
 * @response `200` `{
    count?: number,

}` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  usersCount = (
    query?: {
      /**
       * Allows you to fetch records that are currently visible within a specific view.
       *
       * Views:
       * * vwefgjj8o930hopb - Default view
       */
      viewId?: UsersCountParamsViewIdEnum;
      /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
      where?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      {
        count?: number;
      },
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/m533c9u4tlmxqen/records/count`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description This API endpoint allows you to retrieve list of linked records for a specific `Link field` and `Record ID`. The response is an array of objects containing Primary Key and its corresponding display value.
 *
 * @tags Users
 * @name UsersNestedList
 * @summary Link Records list
 * @request GET:/api/v2/tables/m533c9u4tlmxqen/links/{linkFieldId}/records/{recordId}
 * @secure
 * @response `200` `{
  \** List of data objects *\
    list: (object)[],
  \** Paginated Info *\
    pageInfo: Paginated,

}` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  usersNestedList = (
    linkFieldId: UsersNestedListParamsEnum,
    recordId: string,
    query?: {
      /** Array of field names or comma separated filed names to include in the response objects. In array syntax pass it like `fields[]=field1&fields[]=field2` or alternately `fields=field1,field2`. */
      fields?: string;
      /** Comma separated field names to sort rows, rows will sort in ascending order based on provided columns. To sort in descending order provide `-` prefix along with column name, like `-field`. Example : `sort=field1,-field2` */
      sort?: string;
      /** This can be used for filtering rows, which accepts complicated where conditions. For more info visit [here](https://docs.nocodb.com/developer-resources/rest-apis#comparison-operators). Example : `where=(field1,eq,value)` */
      where?: string;
      /**
       * The `limit` parameter used for pagination, the response collection size depends on limit value with default value `25` and maximum value `1000`, which can be overridden by environment variables `DB_QUERY_LIMIT_DEFAULT` and `DB_QUERY_LIMIT_MAX` respectively.
       * @min 1
       * @example 25
       */
      limit?: number;
      /**
       * The `offset` parameter used for pagination, the value helps to select collection from a certain index.
       * @min 0
       * @example 0
       */
      offset?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<
      {
        /** List of data objects */
        list: object[];
        /** Paginated Info */
        pageInfo: Paginated;
      },
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/m533c9u4tlmxqen/links/${linkFieldId}/records/${recordId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description This API endpoint allows you to link records to a specific `Link field` and `Record ID`. The request payload is an array of record-ids from the adjacent table for linking purposes. Note that any existing links, if present, will be unaffected during this operation.
 *
 * @tags Users
 * @name UsersNestedLink
 * @summary Link Records
 * @request POST:/api/v2/tables/m533c9u4tlmxqen/links/{linkFieldId}/records/{recordId}
 * @secure
 * @response `200` `any` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  usersNestedLink = (
    linkFieldId: UsersNestedListParamsEnum,
    recordId: string,
    data: object | object[],
    params: RequestParams = {}
  ) =>
    this.request<
      any,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/m533c9u4tlmxqen/links/${linkFieldId}/records/${recordId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description This API endpoint allows you to unlink records from a specific `Link field` and `Record ID`. The request payload is an array of record-ids from the adjacent table for unlinking purposes. Note that, - duplicated record-ids will be ignored. - non-existent record-ids will be ignored.
 *
 * @tags Users
 * @name UsersNestedUnlink
 * @summary Unlink Records
 * @request DELETE:/api/v2/tables/m533c9u4tlmxqen/links/{linkFieldId}/records/{recordId}
 * @secure
 * @response `200` `any` OK
 * @response `400` `{
  \** @example "BadRequest [Error]: <ERROR MESSAGE>" *\
    msg: string,

}`
 */
  usersNestedUnlink = (
    linkFieldId: UsersNestedListParamsEnum,
    recordId: string,
    data: object[],
    params: RequestParams = {}
  ) =>
    this.request<
      any,
      {
        /** @example "BadRequest [Error]: <ERROR MESSAGE>" */
        msg: string;
      }
    >({
      path: `/api/v2/tables/m533c9u4tlmxqen/links/${linkFieldId}/records/${recordId}`,
      method: "DELETE",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
