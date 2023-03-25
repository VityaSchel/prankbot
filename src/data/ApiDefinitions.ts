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

export interface AdvertisingCompanyBody {
  status: "active" | "canceled";
}

export interface AdvertisingCompanyResponse {
  id: number;
  status: string;
}

export interface CallResponse {
  callId: number;
  callRecord?: string;
  callRecordName: string;
  phone: string;
  status: "in_queue" | "in_process" | "error" | "done";
}

export interface CategoriesResponse {
  categories: {
    id: number;
    name: string;
  }[];
  count: number;
}

export interface CategoryCallRecordsResponse {
  callRecords: {
    id: number;
    name: string;
    numberOrders: number;
    recordUrl: string;
  }[];
}

export interface CloudpaymentsNotificationResponse {
  code: number;
}

export interface CloudpaymentsPaymentComplete3DsResponse {
  userToken: string;
}

export interface CloudpaymentsPaymentResponse {
  amount: number;
  amountWithoutDiscount: number;
  cloudpaymentsPublicId: string;
  description: string;
  money: string;
  moneyWithoutDiscount: string;
  status: string;
}

export interface CloudpaymentsReceipt {
  Items?: {
    amount?: number;
    label?: string;
    method?: number;
    object?: number;
    price?: number;
    quantity?: number;
    vat?: number;
  }[];
  amounts?: {
    advancePayment?: number;
    credit?: number;
    electronic?: number;
    provision?: number;
  };
  email?: string;
  isBso?: boolean;
  phone?: string;
  taxationSystem?: number;
}

export interface ErrorResponse {
  message: string;
}

export interface LoginBody {
  /** @example "test@test.com" */
  email: string;
  /** @example "password" */
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface MakeCallBody {
  callRecordId: number;
  /** @pattern ^((8|\+7|7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{8,10}$ */
  phone: string;
}

export interface MakeCallResponse {
  id: number;
}

export interface PayCloudpaymentsBody {
  cryptogram: string;
}

export interface PayCloudpaymentsResponse {
  /** @example "POST" */
  redirectMethod: string;
  redirectParams?: {
    key?: string;
    value?: string;
  }[];
  /** @example "https://demo.cloudpayments.ru/acs" */
  redirectUrl: string;
}

export interface PaymentRequired {
  paymentId: string;
}

export interface PaymentSetEmailBody {
  email: string;
}

export interface Principal {
  key: string;
}

export interface SubscriptionUnsubscribeBody {
  firstNumbers: string;
  lastNumbers: string;
}

export interface UserCallsResponse {
  calls: {
    callId: number;
    callRecord?: string;
    callRecordName: string;
    phone: string;
    status: "in_queue" | "in_process" | "error" | "done";
  }[];
  count: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title PrankService
 * @version production
 *
 * Prank service
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  advertisingCompanies = {
    /**
     * No description
     *
     * @tags advertising_company
     * @name AdvertisingCompaniesList
     * @request GET:/advertising_companies
     */
    advertisingCompaniesList: (params: RequestParams = {}) =>
      this.request<AdvertisingCompanyResponse[], ErrorResponse>({
        path: `/advertising_companies`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags advertising_companies
     * @name AdvertisingCompaniesDetail
     * @request GET:/advertising_companies/{id}
     */
    advertisingCompaniesDetail: (id: number, params: RequestParams = {}) =>
      this.request<AdvertisingCompanyResponse, ErrorResponse>({
        path: `/advertising_companies/${id}`,
        method: "GET",
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags auth
     * @name LoginCreate
     * @request POST:/auth/login
     */
    loginCreate: (auth_login: LoginBody, params: RequestParams = {}) =>
      this.request<LoginResponse, ErrorResponse>({
        path: `/auth/login`,
        method: "POST",
        body: auth_login,
        type: ContentType.Json,
        ...params,
      }),
  };
  calls = {
    /**
     * No description
     *
     * @tags make_call
     * @name MakeCreate
     * @request POST:/calls/make
     * @secure
     */
    makeCreate: (body: MakeCallBody, params: RequestParams = {}) =>
      this.request<MakeCallResponse, ErrorResponse | PaymentRequired>({
        path: `/calls/make`,
        method: "POST",
        body: body,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags call
     * @name CallsDetail
     * @request GET:/calls/{id}
     * @secure
     */
    callsDetail: (id: number, params: RequestParams = {}) =>
      this.request<CallResponse, ErrorResponse>({
        path: `/calls/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  categories = {
    /**
     * No description
     *
     * @tags categories
     * @name CategoriesList
     * @request GET:/categories
     * @secure
     */
    categoriesList: (params: RequestParams = {}) =>
      this.request<CategoriesResponse, ErrorResponse>({
        path: `/categories`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags category_call_records
     * @name CallRecordsDetail
     * @request GET:/categories/{id}/call_records
     * @secure
     */
    callRecordsDetail: (id: number, params: RequestParams = {}) =>
      this.request<CategoryCallRecordsResponse, ErrorResponse>({
        path: `/categories/${id}/call_records`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  notifications = {
    /**
     * No description
     *
     * @tags notifications_cloudpayments
     * @name CloudpaymentsFailCreate
     * @request POST:/notifications/cloudpayments/fail
     * @secure
     */
    cloudpaymentsFailCreate: (
      data: {
        Amount: number;
        TransactionId: number;
        DateTime: string;
        Issuer?: string;
        ReasonCode: number;
        InvoiceId: string;
        Data?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CloudpaymentsNotificationResponse, ErrorResponse | void>({
        path: `/notifications/cloudpayments/fail`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notifications_cloudpayments
     * @name CloudpaymentsPayCreate
     * @request POST:/notifications/cloudpayments/pay
     * @secure
     */
    cloudpaymentsPayCreate: (
      data: {
        Amount: number;
        TransactionId: number;
        Issuer?: string;
        DateTime: string;
        InvoiceId: string;
        Email?: string;
        CardFirstSix: string;
        CardLastFour: string;
        TestMode: number;
        Token?: string;
        Data?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CloudpaymentsNotificationResponse, ErrorResponse | void>({
        path: `/notifications/cloudpayments/pay`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notifications_cloudpayments
     * @name CloudpaymentsRefundCreate
     * @request POST:/notifications/cloudpayments/refund
     * @secure
     */
    cloudpaymentsRefundCreate: (
      data: {
        TransactionId: number;
        PaymentTransactionId: number;
        Amount: number;
        DateTime: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CloudpaymentsNotificationResponse, ErrorResponse | void>({
        path: `/notifications/cloudpayments/refund`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),
  };
  payments = {
    /**
     * No description
     *
     * @tags payment_cloudpayments
     * @name CloudpaymentsDetail
     * @request GET:/payments/{id}/cloudpayments
     */
    cloudpaymentsDetail: (id: string, params: RequestParams = {}) =>
      this.request<CloudpaymentsPaymentResponse, ErrorResponse>({
        path: `/payments/${id}/cloudpayments`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags payment_cloudpayments
     * @name CloudpaymentsComplete3DsCreate
     * @request POST:/payments/{id}/cloudpayments/complete3ds
     */
    cloudpaymentsComplete3DsCreate: (
      id: string,
      data: {
        MD: number;
        PaRes: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CloudpaymentsPaymentComplete3DsResponse, ErrorResponse>({
        path: `/payments/${id}/cloudpayments/complete3ds`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags payment_cloudpayments
     * @name CloudpaymentsPayCreate
     * @request POST:/payments/{id}/cloudpayments/pay
     */
    cloudpaymentsPayCreate: (id: string, pay_payment_cloudpayments: PayCloudpaymentsBody, params: RequestParams = {}) =>
      this.request<PayCloudpaymentsResponse, ErrorResponse>({
        path: `/payments/${id}/cloudpayments/pay`,
        method: "POST",
        body: pay_payment_cloudpayments,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags payment
     * @name SetEmailCreate
     * @request POST:/payments/{id}/set-email
     */
    setEmailCreate: (id: string, payment_set_email: PaymentSetEmailBody, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/payments/${id}/set-email`,
        method: "POST",
        body: payment_set_email,
        type: ContentType.Json,
        ...params,
      }),
  };
  subscriptions = {
    /**
     * No description
     *
     * @tags subscription
     * @name UnsubscribeCreate
     * @request POST:/subscriptions/unsubscribe
     */
    unsubscribeCreate: (subscription_unsubscribe: SubscriptionUnsubscribeBody, params: RequestParams = {}) =>
      this.request<void, ErrorResponse>({
        path: `/subscriptions/unsubscribe`,
        method: "POST",
        body: subscription_unsubscribe,
        type: ContentType.Json,
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags user_calls
     * @name CallsList
     * @request GET:/users/calls
     * @secure
     */
    callsList: (
      query?: {
        /** calls filter */
        "filter[status]"?: ("in_queue" | "in_process" | "error" | "done")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<UserCallsResponse, ErrorResponse>({
        path: `/users/calls`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
}
