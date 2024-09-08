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

/** Paginated */
export interface Paginated {
  pageSize?: number;
  totalRows?: number;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  page?: number;
}

/** Attachment */
export interface Attachment {
  mimetype?: string;
  size?: number;
  title?: string;
  url?: string;
  icon?: string;
}

/** Groupby */
export interface Groupby {
  /** count */
  count?: number;
  /** the value of the given column */
  column_name?: string;
}

/** Accounts Response */
export interface AccountsResponse {
  AccountId?: number;
  AccountName?: string;
  CreatedDate?: string;
  Transactions?: number;
  Users?: UsersRequest;
}

/** Accounts Request */
export interface AccountsRequest {
  AccountName?: string;
  CreatedDate?: string;
}

/** Accounts Id Request */
export interface AccountsIdRequest {
  AccountId?: number;
}

/** Budgets Response */
export interface BudgetsResponse {
  /** @format float */
  Amount?: number;
  BudgetId?: number;
  BudgetPeriod?: string;
  StartDate?: string;
  EndDate?: string;
  Categories?: CategoriesRequest;
  Users?: UsersRequest;
}

/** Budgets Request */
export interface BudgetsRequest {
  /** @format float */
  Amount?: number;
  BudgetPeriod?: string;
  StartDate?: string;
  EndDate?: string;
}

/** Budgets Id Request */
export interface BudgetsIdRequest {
  BudgetId?: number;
}

/** Categories Response */
export interface CategoriesResponse {
  CategoryId?: number;
  CategoryName?: string;
  CategoryType?: string;
  Transactions?: number;
  Categories?: CategoriesRequest;
  Budgets?: number;
  Users?: UsersRequest;
}

/** Categories Request */
export interface CategoriesRequest {
  CategoryName?: string;
  CategoryType?: string;
}

/** Categories Id Request */
export interface CategoriesIdRequest {
  CategoryId?: number;
}

/** Debts Response */
export interface DebtsResponse {
  /** @format float */
  Amount?: number;
  /** @format float */
  Balance?: number;
  Notes?: string;
  DebtId?: number;
  LenderOrBorrower?: string;
  DebtType?: string;
  DebtDate?: string;
  Users?: UsersRequest;
}

/** Debts Request */
export interface DebtsRequest {
  /** @format float */
  Amount?: number;
  /** @format float */
  Balance?: number;
  Notes?: string;
  LenderOrBorrower?: string;
  DebtType?: string;
  DebtDate?: string;
}

/** Debts Id Request */
export interface DebtsIdRequest {
  DebtId?: number;
}

/** Transactions Response */
export interface TransactionsResponse {
  /** @format float */
  Amount?: number;
  Notes?: string;
  TransactionId?: number;
  TransactionType?: string;
  TransactionDate?: string;
  Accounts?: AccountsRequest;
  Categories?: CategoriesRequest;
}

/** Transactions Request */
export interface TransactionsRequest {
  /** @format float */
  Amount?: number;
  Notes?: string;
  TransactionType?: string;
  TransactionDate?: string;
}

/** Transactions Id Request */
export interface TransactionsIdRequest {
  TransactionId?: number;
}

/** AccountBalances Response */
export interface AccountBalancesResponse {
  AccountId?: number;
  AccountName?: string;
  /** @format float */
  Balance?: number;
}

/** AccountBalances Request */
export interface AccountBalancesRequest {
  AccountId?: number;
  AccountName?: string;
  /** @format float */
  Balance?: number;
}

/** AccountBalances Id Request */
export type AccountBalancesIdRequest = object;

/** Users Response */
export interface UsersResponse {
  Username?: string;
  Email?: string;
  UserId?: number;
  PasswordHash?: string;
  CreatedDate?: string;
  LastLoginDate?: string;
  MultiFactorEnabled?: boolean;
  Accounts?: number;
  Budgets?: number;
  Categories?: number;
  Debts?: number;
}

/** Users Request */
export interface UsersRequest {
  Username?: string;
  Email?: string;
  PasswordHash?: string;
  CreatedDate?: string;
  LastLoginDate?: string;
  MultiFactorEnabled?: boolean;
}

/** Users Id Request */
export interface UsersIdRequest {
  UserId?: number;
}

/**
 * Allows you to fetch records that are currently visible within a specific view.
 *
 * Views:
 * * vww19un32khecp1p - Default view
 */
export enum AccountsDbTableRowListParamsViewIdEnum {
  Vww19Un32Khecp1P = "vww19un32khecp1p",
}

/**
 * Allows you to fetch records that are currently visible within a specific view.
 *
 * Views:
 * * vww19un32khecp1p - Default view
 */
export enum AccountsCountParamsViewIdEnum {
  Vww19Un32Khecp1P = "vww19un32khecp1p",
}

/**
 * **Links Field Identifier** corresponding to the relation field `Links` established between tables.
 *
 * Link Columns:
 * * cuhfurr47re3nwh - Transactions
 * * cb6lv6kghix9r5j - Users
 */
export enum AccountsNestedListParamsLinkFieldIdEnum {
  Cuhfurr47Re3Nwh = "cuhfurr47re3nwh",
  Cb6Lv6Kghix9R5J = "cb6lv6kghix9r5j",
}

export enum AccountsNestedListParamsEnum {
  Cuhfurr47Re3Nwh = "cuhfurr47re3nwh",
  Cb6Lv6Kghix9R5J = "cb6lv6kghix9r5j",
}

/**
 * Allows you to fetch records that are currently visible within a specific view.
 *
 * Views:
 * * vway9kxplqivnvir - Default view
 */
export enum BudgetsDbTableRowListParamsViewIdEnum {
  Vway9Kxplqivnvir = "vway9kxplqivnvir",
}

/**
 * Allows you to fetch records that are currently visible within a specific view.
 *
 * Views:
 * * vway9kxplqivnvir - Default view
 */
export enum BudgetsCountParamsViewIdEnum {
  Vway9Kxplqivnvir = "vway9kxplqivnvir",
}

/**
 * **Links Field Identifier** corresponding to the relation field `Links` established between tables.
 *
 * Link Columns:
 * * chsmgss10zgczgc - Categories
 * * cz2qknulr44jg4o - Users
 */
export enum BudgetsNestedListParamsLinkFieldIdEnum {
  Chsmgss10Zgczgc = "chsmgss10zgczgc",
  Cz2Qknulr44Jg4O = "cz2qknulr44jg4o",
}

export enum BudgetsNestedListParamsEnum {
  Chsmgss10Zgczgc = "chsmgss10zgczgc",
  Cz2Qknulr44Jg4O = "cz2qknulr44jg4o",
}

/**
 * Allows you to fetch records that are currently visible within a specific view.
 *
 * Views:
 * * vwqyzpx6bj9qw982 - Default view
 */
export enum CategoriesDbTableRowListParamsViewIdEnum {
  Vwqyzpx6Bj9Qw982 = "vwqyzpx6bj9qw982",
}

/**
 * Allows you to fetch records that are currently visible within a specific view.
 *
 * Views:
 * * vwqyzpx6bj9qw982 - Default view
 */
export enum CategoriesCountParamsViewIdEnum {
  Vwqyzpx6Bj9Qw982 = "vwqyzpx6bj9qw982",
}

/**
 * **Links Field Identifier** corresponding to the relation field `Links` established between tables.
 *
 * Link Columns:
 * * cw3aplm25glomjd - Transactions
 * * c4gqq5uzyd1fmju - Categories
 * * cfav4udgettp9nw - Categories
 * * cj42tx1whznj7kb - Budgets
 * * cr304psfki4goet - Users
 * * c5k5vtnlpkfezig - Transactions
 */
export enum CategoriesNestedListParamsLinkFieldIdEnum {
  Cw3Aplm25Glomjd = "cw3aplm25glomjd",
  C4Gqq5Uzyd1Fmju = "c4gqq5uzyd1fmju",
  Cfav4Udgettp9Nw = "cfav4udgettp9nw",
  Cj42Tx1Whznj7Kb = "cj42tx1whznj7kb",
  Cr304Psfki4Goet = "cr304psfki4goet",
  C5K5Vtnlpkfezig = "c5k5vtnlpkfezig",
}

export enum CategoriesNestedListParamsEnum {
  Cw3Aplm25Glomjd = "cw3aplm25glomjd",
  C4Gqq5Uzyd1Fmju = "c4gqq5uzyd1fmju",
  Cfav4Udgettp9Nw = "cfav4udgettp9nw",
  Cj42Tx1Whznj7Kb = "cj42tx1whznj7kb",
  Cr304Psfki4Goet = "cr304psfki4goet",
  C5K5Vtnlpkfezig = "c5k5vtnlpkfezig",
}

/**
 * Allows you to fetch records that are currently visible within a specific view.
 *
 * Views:
 * * vwytsja61nuhtki3 - Default view
 */
export enum DebtsDbTableRowListParamsViewIdEnum {
  Vwytsja61Nuhtki3 = "vwytsja61nuhtki3",
}

/**
 * Allows you to fetch records that are currently visible within a specific view.
 *
 * Views:
 * * vwytsja61nuhtki3 - Default view
 */
export enum DebtsCountParamsViewIdEnum {
  Vwytsja61Nuhtki3 = "vwytsja61nuhtki3",
}

/**
 * **Links Field Identifier** corresponding to the relation field `Links` established between tables.
 *
 * Link Columns:
 * * cpwzzc4sfe9aid3 - Users
 */
export enum DebtsNestedListParamsLinkFieldIdEnum {
  Cpwzzc4Sfe9Aid3 = "cpwzzc4sfe9aid3",
}

export enum DebtsNestedListParamsEnum {
  Cpwzzc4Sfe9Aid3 = "cpwzzc4sfe9aid3",
}

/**
 * Allows you to fetch records that are currently visible within a specific view.
 *
 * Views:
 * * vwfnsf4hxgqicpk3 - Default view
 */
export enum TransactionsDbTableRowListParamsViewIdEnum {
  Vwfnsf4Hxgqicpk3 = "vwfnsf4hxgqicpk3",
}

/**
 * Allows you to fetch records that are currently visible within a specific view.
 *
 * Views:
 * * vwfnsf4hxgqicpk3 - Default view
 */
export enum TransactionsCountParamsViewIdEnum {
  Vwfnsf4Hxgqicpk3 = "vwfnsf4hxgqicpk3",
}

/**
 * **Links Field Identifier** corresponding to the relation field `Links` established between tables.
 *
 * Link Columns:
 * * ccfz0n80u7lsg1f - Accounts
 * * ctjbax3dzk44clh - Categories
 * * cgyn6ng71g9rvoa - Categories
 */
export enum TransactionsNestedListParamsLinkFieldIdEnum {
  Ccfz0N80U7Lsg1F = "ccfz0n80u7lsg1f",
  Ctjbax3Dzk44Clh = "ctjbax3dzk44clh",
  Cgyn6Ng71G9Rvoa = "cgyn6ng71g9rvoa",
}

export enum TransactionsNestedListParamsEnum {
  Ccfz0N80U7Lsg1F = "ccfz0n80u7lsg1f",
  Ctjbax3Dzk44Clh = "ctjbax3dzk44clh",
  Cgyn6Ng71G9Rvoa = "cgyn6ng71g9rvoa",
}

/**
 * Allows you to fetch records that are currently visible within a specific view.
 *
 * Views:
 * * vw7cn9e0z2isrbx1 - Default view
 */
export enum AccountbalancesDbTableRowListParamsViewIdEnum {
  Vw7Cn9E0Z2Isrbx1 = "vw7cn9e0z2isrbx1",
}

/**
 * Allows you to fetch records that are currently visible within a specific view.
 *
 * Views:
 * * vw7cn9e0z2isrbx1 - Default view
 */
export enum AccountbalancesCountParamsViewIdEnum {
  Vw7Cn9E0Z2Isrbx1 = "vw7cn9e0z2isrbx1",
}

/**
 * Allows you to fetch records that are currently visible within a specific view.
 *
 * Views:
 * * vwefgjj8o930hopb - Default view
 */
export enum UsersDbTableRowListParamsViewIdEnum {
  Vwefgjj8O930Hopb = "vwefgjj8o930hopb",
}

/**
 * Allows you to fetch records that are currently visible within a specific view.
 *
 * Views:
 * * vwefgjj8o930hopb - Default view
 */
export enum UsersCountParamsViewIdEnum {
  Vwefgjj8O930Hopb = "vwefgjj8o930hopb",
}

/**
 * **Links Field Identifier** corresponding to the relation field `Links` established between tables.
 *
 * Link Columns:
 * * c026m1ppiz3g05d - Accounts
 * * c5hj4dd02rwdstp - Budgets
 * * cfmceywc6em4ud2 - Categories
 * * cx7azqgf82z4qja - Debts
 */
export enum UsersNestedListParamsLinkFieldIdEnum {
  C026M1Ppiz3G05D = "c026m1ppiz3g05d",
  C5Hj4Dd02Rwdstp = "c5hj4dd02rwdstp",
  Cfmceywc6Em4Ud2 = "cfmceywc6em4ud2",
  Cx7Azqgf82Z4Qja = "cx7azqgf82z4qja",
}

export enum UsersNestedListParamsEnum {
  C026M1Ppiz3G05D = "c026m1ppiz3g05d",
  C5Hj4Dd02Rwdstp = "c5hj4dd02rwdstp",
  Cfmceywc6Em4Ud2 = "cfmceywc6em4ud2",
  Cx7Azqgf82Z4Qja = "cx7azqgf82z4qja",
}
