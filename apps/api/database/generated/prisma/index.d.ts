
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UserDetail
 * 
 */
export type UserDetail = $Result.DefaultSelection<Prisma.$UserDetailPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model ChatMessages
 * 
 */
export type ChatMessages = $Result.DefaultSelection<Prisma.$ChatMessagesPayload>
/**
 * Model MessageRole
 * 
 */
export type MessageRole = $Result.DefaultSelection<Prisma.$MessageRolePayload>
/**
 * Model HotelInfo
 * 
 */
export type HotelInfo = $Result.DefaultSelection<Prisma.$HotelInfoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserDetails
 * const userDetails = await prisma.userDetail.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserDetails
   * const userDetails = await prisma.userDetail.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userDetail`: Exposes CRUD operations for the **UserDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDetails
    * const userDetails = await prisma.userDetail.findMany()
    * ```
    */
  get userDetail(): Prisma.UserDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessages`: Exposes CRUD operations for the **ChatMessages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessages.findMany()
    * ```
    */
  get chatMessages(): Prisma.ChatMessagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageRole`: Exposes CRUD operations for the **MessageRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageRoles
    * const messageRoles = await prisma.messageRole.findMany()
    * ```
    */
  get messageRole(): Prisma.MessageRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hotelInfo`: Exposes CRUD operations for the **HotelInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HotelInfos
    * const hotelInfos = await prisma.hotelInfo.findMany()
    * ```
    */
  get hotelInfo(): Prisma.HotelInfoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UserDetail: 'UserDetail',
    User: 'User',
    Chat: 'Chat',
    ChatMessages: 'ChatMessages',
    MessageRole: 'MessageRole',
    HotelInfo: 'HotelInfo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "userDetail" | "user" | "chat" | "chatMessages" | "messageRole" | "hotelInfo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserDetail: {
        payload: Prisma.$UserDetailPayload<ExtArgs>
        fields: Prisma.UserDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailPayload>
          }
          findFirst: {
            args: Prisma.UserDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailPayload>
          }
          findMany: {
            args: Prisma.UserDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailPayload>[]
          }
          create: {
            args: Prisma.UserDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailPayload>
          }
          createMany: {
            args: Prisma.UserDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailPayload>[]
          }
          delete: {
            args: Prisma.UserDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailPayload>
          }
          update: {
            args: Prisma.UserDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailPayload>
          }
          deleteMany: {
            args: Prisma.UserDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailPayload>[]
          }
          upsert: {
            args: Prisma.UserDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailPayload>
          }
          aggregate: {
            args: Prisma.UserDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDetail>
          }
          groupBy: {
            args: Prisma.UserDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDetailCountArgs<ExtArgs>
            result: $Utils.Optional<UserDetailCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      ChatMessages: {
        payload: Prisma.$ChatMessagesPayload<ExtArgs>
        fields: Prisma.ChatMessagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          findFirst: {
            args: Prisma.ChatMessagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          findMany: {
            args: Prisma.ChatMessagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>[]
          }
          create: {
            args: Prisma.ChatMessagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          createMany: {
            args: Prisma.ChatMessagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>[]
          }
          delete: {
            args: Prisma.ChatMessagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          update: {
            args: Prisma.ChatMessagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          deleteMany: {
            args: Prisma.ChatMessagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>[]
          }
          upsert: {
            args: Prisma.ChatMessagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagesPayload>
          }
          aggregate: {
            args: Prisma.ChatMessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessages>
          }
          groupBy: {
            args: Prisma.ChatMessagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessagesCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessagesCountAggregateOutputType> | number
          }
        }
      }
      MessageRole: {
        payload: Prisma.$MessageRolePayload<ExtArgs>
        fields: Prisma.MessageRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageRolePayload>
          }
          findFirst: {
            args: Prisma.MessageRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageRolePayload>
          }
          findMany: {
            args: Prisma.MessageRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageRolePayload>[]
          }
          create: {
            args: Prisma.MessageRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageRolePayload>
          }
          createMany: {
            args: Prisma.MessageRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageRolePayload>[]
          }
          delete: {
            args: Prisma.MessageRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageRolePayload>
          }
          update: {
            args: Prisma.MessageRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageRolePayload>
          }
          deleteMany: {
            args: Prisma.MessageRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageRolePayload>[]
          }
          upsert: {
            args: Prisma.MessageRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageRolePayload>
          }
          aggregate: {
            args: Prisma.MessageRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageRole>
          }
          groupBy: {
            args: Prisma.MessageRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageRoleCountArgs<ExtArgs>
            result: $Utils.Optional<MessageRoleCountAggregateOutputType> | number
          }
        }
      }
      HotelInfo: {
        payload: Prisma.$HotelInfoPayload<ExtArgs>
        fields: Prisma.HotelInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelInfoPayload>
          }
          findFirst: {
            args: Prisma.HotelInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelInfoPayload>
          }
          findMany: {
            args: Prisma.HotelInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelInfoPayload>[]
          }
          create: {
            args: Prisma.HotelInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelInfoPayload>
          }
          createMany: {
            args: Prisma.HotelInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HotelInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelInfoPayload>[]
          }
          delete: {
            args: Prisma.HotelInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelInfoPayload>
          }
          update: {
            args: Prisma.HotelInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelInfoPayload>
          }
          deleteMany: {
            args: Prisma.HotelInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HotelInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelInfoPayload>[]
          }
          upsert: {
            args: Prisma.HotelInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelInfoPayload>
          }
          aggregate: {
            args: Prisma.HotelInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotelInfo>
          }
          groupBy: {
            args: Prisma.HotelInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotelInfoCountArgs<ExtArgs>
            result: $Utils.Optional<HotelInfoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    userDetail?: UserDetailOmit
    user?: UserOmit
    chat?: ChatOmit
    chatMessages?: ChatMessagesOmit
    messageRole?: MessageRoleOmit
    hotelInfo?: HotelInfoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    haveChat: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    haveChat?: boolean | UserCountOutputTypeCountHaveChatArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHaveChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    chatMessages: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatMessages?: boolean | ChatCountOutputTypeCountChatMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessagesWhereInput
  }


  /**
   * Count Type MessageRoleCountOutputType
   */

  export type MessageRoleCountOutputType = {
    chatMessage: number
  }

  export type MessageRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatMessage?: boolean | MessageRoleCountOutputTypeCountChatMessageArgs
  }

  // Custom InputTypes
  /**
   * MessageRoleCountOutputType without action
   */
  export type MessageRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRoleCountOutputType
     */
    select?: MessageRoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageRoleCountOutputType without action
   */
  export type MessageRoleCountOutputTypeCountChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessagesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserDetail
   */

  export type AggregateUserDetail = {
    _count: UserDetailCountAggregateOutputType | null
    _min: UserDetailMinAggregateOutputType | null
    _max: UserDetailMaxAggregateOutputType | null
  }

  export type UserDetailMinAggregateOutputType = {
    id: string | null
    userName: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserDetailMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserDetailCountAggregateOutputType = {
    id: number
    userName: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserDetailMinAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserDetailMaxAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserDetailCountAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDetail to aggregate.
     */
    where?: UserDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailOrderByWithRelationInput | UserDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDetails
    **/
    _count?: true | UserDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDetailMaxAggregateInputType
  }

  export type GetUserDetailAggregateType<T extends UserDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDetail[P]>
      : GetScalarType<T[P], AggregateUserDetail[P]>
  }




  export type UserDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDetailWhereInput
    orderBy?: UserDetailOrderByWithAggregationInput | UserDetailOrderByWithAggregationInput[]
    by: UserDetailScalarFieldEnum[] | UserDetailScalarFieldEnum
    having?: UserDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDetailCountAggregateInputType | true
    _min?: UserDetailMinAggregateInputType
    _max?: UserDetailMaxAggregateInputType
  }

  export type UserDetailGroupByOutputType = {
    id: string
    userName: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserDetailCountAggregateOutputType | null
    _min: UserDetailMinAggregateOutputType | null
    _max: UserDetailMaxAggregateOutputType | null
  }

  type GetUserDetailGroupByPayload<T extends UserDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDetailGroupByOutputType[P]>
            : GetScalarType<T[P], UserDetailGroupByOutputType[P]>
        }
      >
    >


  export type UserDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rootUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDetail"]>

  export type UserDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rootUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDetail"]>

  export type UserDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rootUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDetail"]>

  export type UserDetailSelectScalar = {
    id?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["userDetail"]>
  export type UserDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rootUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rootUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rootUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDetail"
    objects: {
      rootUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userName: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userDetail"]>
    composites: {}
  }

  type UserDetailGetPayload<S extends boolean | null | undefined | UserDetailDefaultArgs> = $Result.GetResult<Prisma.$UserDetailPayload, S>

  type UserDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDetailCountAggregateInputType | true
    }

  export interface UserDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDetail'], meta: { name: 'UserDetail' } }
    /**
     * Find zero or one UserDetail that matches the filter.
     * @param {UserDetailFindUniqueArgs} args - Arguments to find a UserDetail
     * @example
     * // Get one UserDetail
     * const userDetail = await prisma.userDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDetailFindUniqueArgs>(args: SelectSubset<T, UserDetailFindUniqueArgs<ExtArgs>>): Prisma__UserDetailClient<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDetailFindUniqueOrThrowArgs} args - Arguments to find a UserDetail
     * @example
     * // Get one UserDetail
     * const userDetail = await prisma.userDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDetailClient<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailFindFirstArgs} args - Arguments to find a UserDetail
     * @example
     * // Get one UserDetail
     * const userDetail = await prisma.userDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDetailFindFirstArgs>(args?: SelectSubset<T, UserDetailFindFirstArgs<ExtArgs>>): Prisma__UserDetailClient<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailFindFirstOrThrowArgs} args - Arguments to find a UserDetail
     * @example
     * // Get one UserDetail
     * const userDetail = await prisma.userDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDetailClient<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDetails
     * const userDetails = await prisma.userDetail.findMany()
     * 
     * // Get first 10 UserDetails
     * const userDetails = await prisma.userDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userDetailWithIdOnly = await prisma.userDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserDetailFindManyArgs>(args?: SelectSubset<T, UserDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserDetail.
     * @param {UserDetailCreateArgs} args - Arguments to create a UserDetail.
     * @example
     * // Create one UserDetail
     * const UserDetail = await prisma.userDetail.create({
     *   data: {
     *     // ... data to create a UserDetail
     *   }
     * })
     * 
     */
    create<T extends UserDetailCreateArgs>(args: SelectSubset<T, UserDetailCreateArgs<ExtArgs>>): Prisma__UserDetailClient<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserDetails.
     * @param {UserDetailCreateManyArgs} args - Arguments to create many UserDetails.
     * @example
     * // Create many UserDetails
     * const userDetail = await prisma.userDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDetailCreateManyArgs>(args?: SelectSubset<T, UserDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDetails and returns the data saved in the database.
     * @param {UserDetailCreateManyAndReturnArgs} args - Arguments to create many UserDetails.
     * @example
     * // Create many UserDetails
     * const userDetail = await prisma.userDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDetails and only return the `id`
     * const userDetailWithIdOnly = await prisma.userDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserDetail.
     * @param {UserDetailDeleteArgs} args - Arguments to delete one UserDetail.
     * @example
     * // Delete one UserDetail
     * const UserDetail = await prisma.userDetail.delete({
     *   where: {
     *     // ... filter to delete one UserDetail
     *   }
     * })
     * 
     */
    delete<T extends UserDetailDeleteArgs>(args: SelectSubset<T, UserDetailDeleteArgs<ExtArgs>>): Prisma__UserDetailClient<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserDetail.
     * @param {UserDetailUpdateArgs} args - Arguments to update one UserDetail.
     * @example
     * // Update one UserDetail
     * const userDetail = await prisma.userDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDetailUpdateArgs>(args: SelectSubset<T, UserDetailUpdateArgs<ExtArgs>>): Prisma__UserDetailClient<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserDetails.
     * @param {UserDetailDeleteManyArgs} args - Arguments to filter UserDetails to delete.
     * @example
     * // Delete a few UserDetails
     * const { count } = await prisma.userDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDetailDeleteManyArgs>(args?: SelectSubset<T, UserDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDetails
     * const userDetail = await prisma.userDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDetailUpdateManyArgs>(args: SelectSubset<T, UserDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDetails and returns the data updated in the database.
     * @param {UserDetailUpdateManyAndReturnArgs} args - Arguments to update many UserDetails.
     * @example
     * // Update many UserDetails
     * const userDetail = await prisma.userDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserDetails and only return the `id`
     * const userDetailWithIdOnly = await prisma.userDetail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserDetail.
     * @param {UserDetailUpsertArgs} args - Arguments to update or create a UserDetail.
     * @example
     * // Update or create a UserDetail
     * const userDetail = await prisma.userDetail.upsert({
     *   create: {
     *     // ... data to create a UserDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDetail we want to update
     *   }
     * })
     */
    upsert<T extends UserDetailUpsertArgs>(args: SelectSubset<T, UserDetailUpsertArgs<ExtArgs>>): Prisma__UserDetailClient<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailCountArgs} args - Arguments to filter UserDetails to count.
     * @example
     * // Count the number of UserDetails
     * const count = await prisma.userDetail.count({
     *   where: {
     *     // ... the filter for the UserDetails we want to count
     *   }
     * })
    **/
    count<T extends UserDetailCountArgs>(
      args?: Subset<T, UserDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserDetailAggregateArgs>(args: Subset<T, UserDetailAggregateArgs>): Prisma.PrismaPromise<GetUserDetailAggregateType<T>>

    /**
     * Group by UserDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDetailGroupByArgs['orderBy'] }
        : { orderBy?: UserDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDetail model
   */
  readonly fields: UserDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rootUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserDetail model
   */
  interface UserDetailFieldRefs {
    readonly id: FieldRef<"UserDetail", 'String'>
    readonly userName: FieldRef<"UserDetail", 'String'>
    readonly email: FieldRef<"UserDetail", 'String'>
    readonly password: FieldRef<"UserDetail", 'String'>
    readonly createdAt: FieldRef<"UserDetail", 'DateTime'>
    readonly updatedAt: FieldRef<"UserDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserDetail findUnique
   */
  export type UserDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailInclude<ExtArgs> | null
    /**
     * Filter, which UserDetail to fetch.
     */
    where: UserDetailWhereUniqueInput
  }

  /**
   * UserDetail findUniqueOrThrow
   */
  export type UserDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailInclude<ExtArgs> | null
    /**
     * Filter, which UserDetail to fetch.
     */
    where: UserDetailWhereUniqueInput
  }

  /**
   * UserDetail findFirst
   */
  export type UserDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailInclude<ExtArgs> | null
    /**
     * Filter, which UserDetail to fetch.
     */
    where?: UserDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailOrderByWithRelationInput | UserDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDetails.
     */
    cursor?: UserDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDetails.
     */
    distinct?: UserDetailScalarFieldEnum | UserDetailScalarFieldEnum[]
  }

  /**
   * UserDetail findFirstOrThrow
   */
  export type UserDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailInclude<ExtArgs> | null
    /**
     * Filter, which UserDetail to fetch.
     */
    where?: UserDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailOrderByWithRelationInput | UserDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDetails.
     */
    cursor?: UserDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDetails.
     */
    distinct?: UserDetailScalarFieldEnum | UserDetailScalarFieldEnum[]
  }

  /**
   * UserDetail findMany
   */
  export type UserDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where?: UserDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailOrderByWithRelationInput | UserDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDetails.
     */
    cursor?: UserDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    distinct?: UserDetailScalarFieldEnum | UserDetailScalarFieldEnum[]
  }

  /**
   * UserDetail create
   */
  export type UserDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDetail.
     */
    data: XOR<UserDetailCreateInput, UserDetailUncheckedCreateInput>
  }

  /**
   * UserDetail createMany
   */
  export type UserDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDetails.
     */
    data: UserDetailCreateManyInput | UserDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDetail createManyAndReturn
   */
  export type UserDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * The data used to create many UserDetails.
     */
    data: UserDetailCreateManyInput | UserDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDetail update
   */
  export type UserDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDetail.
     */
    data: XOR<UserDetailUpdateInput, UserDetailUncheckedUpdateInput>
    /**
     * Choose, which UserDetail to update.
     */
    where: UserDetailWhereUniqueInput
  }

  /**
   * UserDetail updateMany
   */
  export type UserDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDetails.
     */
    data: XOR<UserDetailUpdateManyMutationInput, UserDetailUncheckedUpdateManyInput>
    /**
     * Filter which UserDetails to update
     */
    where?: UserDetailWhereInput
    /**
     * Limit how many UserDetails to update.
     */
    limit?: number
  }

  /**
   * UserDetail updateManyAndReturn
   */
  export type UserDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * The data used to update UserDetails.
     */
    data: XOR<UserDetailUpdateManyMutationInput, UserDetailUncheckedUpdateManyInput>
    /**
     * Filter which UserDetails to update
     */
    where?: UserDetailWhereInput
    /**
     * Limit how many UserDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDetail upsert
   */
  export type UserDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDetail to update in case it exists.
     */
    where: UserDetailWhereUniqueInput
    /**
     * In case the UserDetail found by the `where` argument doesn't exist, create a new UserDetail with this data.
     */
    create: XOR<UserDetailCreateInput, UserDetailUncheckedCreateInput>
    /**
     * In case the UserDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDetailUpdateInput, UserDetailUncheckedUpdateInput>
  }

  /**
   * UserDetail delete
   */
  export type UserDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailInclude<ExtArgs> | null
    /**
     * Filter which UserDetail to delete.
     */
    where: UserDetailWhereUniqueInput
  }

  /**
   * UserDetail deleteMany
   */
  export type UserDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDetails to delete
     */
    where?: UserDetailWhereInput
    /**
     * Limit how many UserDetails to delete.
     */
    limit?: number
  }

  /**
   * UserDetail without action
   */
  export type UserDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    isTemporary: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    isTemporary: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    isTemporary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    isTemporary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    isTemporary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    isTemporary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    isTemporary: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isTemporary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    haveChat?: boolean | User$haveChatArgs<ExtArgs>
    userDetail?: boolean | User$userDetailArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isTemporary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isTemporary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    isTemporary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isTemporary" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    haveChat?: boolean | User$haveChatArgs<ExtArgs>
    userDetail?: boolean | User$userDetailArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      haveChat: Prisma.$ChatPayload<ExtArgs>[]
      userDetail: Prisma.$UserDetailPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      isTemporary: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    haveChat<T extends User$haveChatArgs<ExtArgs> = {}>(args?: Subset<T, User$haveChatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userDetail<T extends User$userDetailArgs<ExtArgs> = {}>(args?: Subset<T, User$userDetailArgs<ExtArgs>>): Prisma__UserDetailClient<$Result.GetResult<Prisma.$UserDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly isTemporary: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.haveChat
   */
  export type User$haveChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.userDetail
   */
  export type User$userDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetail
     */
    select?: UserDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetail
     */
    omit?: UserDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailInclude<ExtArgs> | null
    where?: UserDetailWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    chatMessages?: boolean | Chat$chatMessagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    chatMessages?: boolean | Chat$chatMessagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      chatMessages: Prisma.$ChatMessagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chatMessages<T extends Chat$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly userId: FieldRef<"Chat", 'String'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
    readonly updatedAt: FieldRef<"Chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.chatMessages
   */
  export type Chat$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    where?: ChatMessagesWhereInput
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    cursor?: ChatMessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessages
   */

  export type AggregateChatMessages = {
    _count: ChatMessagesCountAggregateOutputType | null
    _avg: ChatMessagesAvgAggregateOutputType | null
    _sum: ChatMessagesSumAggregateOutputType | null
    _min: ChatMessagesMinAggregateOutputType | null
    _max: ChatMessagesMaxAggregateOutputType | null
  }

  export type ChatMessagesAvgAggregateOutputType = {
    id: number | null
    messageRoleId: number | null
  }

  export type ChatMessagesSumAggregateOutputType = {
    id: number | null
    messageRoleId: number | null
  }

  export type ChatMessagesMinAggregateOutputType = {
    id: number | null
    chatId: string | null
    messageRoleId: number | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMessagesMaxAggregateOutputType = {
    id: number | null
    chatId: string | null
    messageRoleId: number | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMessagesCountAggregateOutputType = {
    id: number
    chatId: number
    messageRoleId: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatMessagesAvgAggregateInputType = {
    id?: true
    messageRoleId?: true
  }

  export type ChatMessagesSumAggregateInputType = {
    id?: true
    messageRoleId?: true
  }

  export type ChatMessagesMinAggregateInputType = {
    id?: true
    chatId?: true
    messageRoleId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMessagesMaxAggregateInputType = {
    id?: true
    chatId?: true
    messageRoleId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMessagesCountAggregateInputType = {
    id?: true
    chatId?: true
    messageRoleId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatMessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to aggregate.
     */
    where?: ChatMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatMessagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatMessagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessagesMaxAggregateInputType
  }

  export type GetChatMessagesAggregateType<T extends ChatMessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessages[P]>
      : GetScalarType<T[P], AggregateChatMessages[P]>
  }




  export type ChatMessagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessagesWhereInput
    orderBy?: ChatMessagesOrderByWithAggregationInput | ChatMessagesOrderByWithAggregationInput[]
    by: ChatMessagesScalarFieldEnum[] | ChatMessagesScalarFieldEnum
    having?: ChatMessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessagesCountAggregateInputType | true
    _avg?: ChatMessagesAvgAggregateInputType
    _sum?: ChatMessagesSumAggregateInputType
    _min?: ChatMessagesMinAggregateInputType
    _max?: ChatMessagesMaxAggregateInputType
  }

  export type ChatMessagesGroupByOutputType = {
    id: number
    chatId: string
    messageRoleId: number
    message: string
    createdAt: Date
    updatedAt: Date
    _count: ChatMessagesCountAggregateOutputType | null
    _avg: ChatMessagesAvgAggregateOutputType | null
    _sum: ChatMessagesSumAggregateOutputType | null
    _min: ChatMessagesMinAggregateOutputType | null
    _max: ChatMessagesMaxAggregateOutputType | null
  }

  type GetChatMessagesGroupByPayload<T extends ChatMessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessagesGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessagesGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    messageRoleId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    relatedChat?: boolean | ChatDefaultArgs<ExtArgs>
    msgRole?: boolean | MessageRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessages"]>

  export type ChatMessagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    messageRoleId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    relatedChat?: boolean | ChatDefaultArgs<ExtArgs>
    msgRole?: boolean | MessageRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessages"]>

  export type ChatMessagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    messageRoleId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    relatedChat?: boolean | ChatDefaultArgs<ExtArgs>
    msgRole?: boolean | MessageRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessages"]>

  export type ChatMessagesSelectScalar = {
    id?: boolean
    chatId?: boolean
    messageRoleId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatMessagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatId" | "messageRoleId" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["chatMessages"]>
  export type ChatMessagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedChat?: boolean | ChatDefaultArgs<ExtArgs>
    msgRole?: boolean | MessageRoleDefaultArgs<ExtArgs>
  }
  export type ChatMessagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedChat?: boolean | ChatDefaultArgs<ExtArgs>
    msgRole?: boolean | MessageRoleDefaultArgs<ExtArgs>
  }
  export type ChatMessagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relatedChat?: boolean | ChatDefaultArgs<ExtArgs>
    msgRole?: boolean | MessageRoleDefaultArgs<ExtArgs>
  }

  export type $ChatMessagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessages"
    objects: {
      relatedChat: Prisma.$ChatPayload<ExtArgs>
      msgRole: Prisma.$MessageRolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chatId: string
      messageRoleId: number
      message: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatMessages"]>
    composites: {}
  }

  type ChatMessagesGetPayload<S extends boolean | null | undefined | ChatMessagesDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagesPayload, S>

  type ChatMessagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessagesCountAggregateInputType | true
    }

  export interface ChatMessagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessages'], meta: { name: 'ChatMessages' } }
    /**
     * Find zero or one ChatMessages that matches the filter.
     * @param {ChatMessagesFindUniqueArgs} args - Arguments to find a ChatMessages
     * @example
     * // Get one ChatMessages
     * const chatMessages = await prisma.chatMessages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessagesFindUniqueArgs>(args: SelectSubset<T, ChatMessagesFindUniqueArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessagesFindUniqueOrThrowArgs} args - Arguments to find a ChatMessages
     * @example
     * // Get one ChatMessages
     * const chatMessages = await prisma.chatMessages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessagesFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesFindFirstArgs} args - Arguments to find a ChatMessages
     * @example
     * // Get one ChatMessages
     * const chatMessages = await prisma.chatMessages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessagesFindFirstArgs>(args?: SelectSubset<T, ChatMessagesFindFirstArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesFindFirstOrThrowArgs} args - Arguments to find a ChatMessages
     * @example
     * // Get one ChatMessages
     * const chatMessages = await prisma.chatMessages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessagesFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessages.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessagesWithIdOnly = await prisma.chatMessages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessagesFindManyArgs>(args?: SelectSubset<T, ChatMessagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessages.
     * @param {ChatMessagesCreateArgs} args - Arguments to create a ChatMessages.
     * @example
     * // Create one ChatMessages
     * const ChatMessages = await prisma.chatMessages.create({
     *   data: {
     *     // ... data to create a ChatMessages
     *   }
     * })
     * 
     */
    create<T extends ChatMessagesCreateArgs>(args: SelectSubset<T, ChatMessagesCreateArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessagesCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessages = await prisma.chatMessages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessagesCreateManyArgs>(args?: SelectSubset<T, ChatMessagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessagesCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessages = await prisma.chatMessages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessagesWithIdOnly = await prisma.chatMessages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessagesCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessages.
     * @param {ChatMessagesDeleteArgs} args - Arguments to delete one ChatMessages.
     * @example
     * // Delete one ChatMessages
     * const ChatMessages = await prisma.chatMessages.delete({
     *   where: {
     *     // ... filter to delete one ChatMessages
     *   }
     * })
     * 
     */
    delete<T extends ChatMessagesDeleteArgs>(args: SelectSubset<T, ChatMessagesDeleteArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessages.
     * @param {ChatMessagesUpdateArgs} args - Arguments to update one ChatMessages.
     * @example
     * // Update one ChatMessages
     * const chatMessages = await prisma.chatMessages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessagesUpdateArgs>(args: SelectSubset<T, ChatMessagesUpdateArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessagesDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessagesDeleteManyArgs>(args?: SelectSubset<T, ChatMessagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessages = await prisma.chatMessages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessagesUpdateManyArgs>(args: SelectSubset<T, ChatMessagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessagesUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessages = await prisma.chatMessages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessagesWithIdOnly = await prisma.chatMessages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatMessagesUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessages.
     * @param {ChatMessagesUpsertArgs} args - Arguments to update or create a ChatMessages.
     * @example
     * // Update or create a ChatMessages
     * const chatMessages = await prisma.chatMessages.upsert({
     *   create: {
     *     // ... data to create a ChatMessages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessages we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessagesUpsertArgs>(args: SelectSubset<T, ChatMessagesUpsertArgs<ExtArgs>>): Prisma__ChatMessagesClient<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessages.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessagesCountArgs>(
      args?: Subset<T, ChatMessagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatMessagesAggregateArgs>(args: Subset<T, ChatMessagesAggregateArgs>): Prisma.PrismaPromise<GetChatMessagesAggregateType<T>>

    /**
     * Group by ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatMessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessagesGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessages model
   */
  readonly fields: ChatMessagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    relatedChat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    msgRole<T extends MessageRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageRoleDefaultArgs<ExtArgs>>): Prisma__MessageRoleClient<$Result.GetResult<Prisma.$MessageRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessages model
   */
  interface ChatMessagesFieldRefs {
    readonly id: FieldRef<"ChatMessages", 'Int'>
    readonly chatId: FieldRef<"ChatMessages", 'String'>
    readonly messageRoleId: FieldRef<"ChatMessages", 'Int'>
    readonly message: FieldRef<"ChatMessages", 'String'>
    readonly createdAt: FieldRef<"ChatMessages", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatMessages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessages findUnique
   */
  export type ChatMessagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where: ChatMessagesWhereUniqueInput
  }

  /**
   * ChatMessages findUniqueOrThrow
   */
  export type ChatMessagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where: ChatMessagesWhereUniqueInput
  }

  /**
   * ChatMessages findFirst
   */
  export type ChatMessagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * ChatMessages findFirstOrThrow
   */
  export type ChatMessagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * ChatMessages findMany
   */
  export type ChatMessagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * ChatMessages create
   */
  export type ChatMessagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessages.
     */
    data: XOR<ChatMessagesCreateInput, ChatMessagesUncheckedCreateInput>
  }

  /**
   * ChatMessages createMany
   */
  export type ChatMessagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessagesCreateManyInput | ChatMessagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessages createManyAndReturn
   */
  export type ChatMessagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessagesCreateManyInput | ChatMessagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessages update
   */
  export type ChatMessagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessages.
     */
    data: XOR<ChatMessagesUpdateInput, ChatMessagesUncheckedUpdateInput>
    /**
     * Choose, which ChatMessages to update.
     */
    where: ChatMessagesWhereUniqueInput
  }

  /**
   * ChatMessages updateMany
   */
  export type ChatMessagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessagesUpdateManyMutationInput, ChatMessagesUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessagesWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessages updateManyAndReturn
   */
  export type ChatMessagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessagesUpdateManyMutationInput, ChatMessagesUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessagesWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessages upsert
   */
  export type ChatMessagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessages to update in case it exists.
     */
    where: ChatMessagesWhereUniqueInput
    /**
     * In case the ChatMessages found by the `where` argument doesn't exist, create a new ChatMessages with this data.
     */
    create: XOR<ChatMessagesCreateInput, ChatMessagesUncheckedCreateInput>
    /**
     * In case the ChatMessages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessagesUpdateInput, ChatMessagesUncheckedUpdateInput>
  }

  /**
   * ChatMessages delete
   */
  export type ChatMessagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    /**
     * Filter which ChatMessages to delete.
     */
    where: ChatMessagesWhereUniqueInput
  }

  /**
   * ChatMessages deleteMany
   */
  export type ChatMessagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessagesWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessages without action
   */
  export type ChatMessagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
  }


  /**
   * Model MessageRole
   */

  export type AggregateMessageRole = {
    _count: MessageRoleCountAggregateOutputType | null
    _avg: MessageRoleAvgAggregateOutputType | null
    _sum: MessageRoleSumAggregateOutputType | null
    _min: MessageRoleMinAggregateOutputType | null
    _max: MessageRoleMaxAggregateOutputType | null
  }

  export type MessageRoleAvgAggregateOutputType = {
    id: number | null
  }

  export type MessageRoleSumAggregateOutputType = {
    id: number | null
  }

  export type MessageRoleMinAggregateOutputType = {
    id: number | null
    role: string | null
  }

  export type MessageRoleMaxAggregateOutputType = {
    id: number | null
    role: string | null
  }

  export type MessageRoleCountAggregateOutputType = {
    id: number
    role: number
    _all: number
  }


  export type MessageRoleAvgAggregateInputType = {
    id?: true
  }

  export type MessageRoleSumAggregateInputType = {
    id?: true
  }

  export type MessageRoleMinAggregateInputType = {
    id?: true
    role?: true
  }

  export type MessageRoleMaxAggregateInputType = {
    id?: true
    role?: true
  }

  export type MessageRoleCountAggregateInputType = {
    id?: true
    role?: true
    _all?: true
  }

  export type MessageRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageRole to aggregate.
     */
    where?: MessageRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageRoles to fetch.
     */
    orderBy?: MessageRoleOrderByWithRelationInput | MessageRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageRoles
    **/
    _count?: true | MessageRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageRoleMaxAggregateInputType
  }

  export type GetMessageRoleAggregateType<T extends MessageRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageRole[P]>
      : GetScalarType<T[P], AggregateMessageRole[P]>
  }




  export type MessageRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageRoleWhereInput
    orderBy?: MessageRoleOrderByWithAggregationInput | MessageRoleOrderByWithAggregationInput[]
    by: MessageRoleScalarFieldEnum[] | MessageRoleScalarFieldEnum
    having?: MessageRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageRoleCountAggregateInputType | true
    _avg?: MessageRoleAvgAggregateInputType
    _sum?: MessageRoleSumAggregateInputType
    _min?: MessageRoleMinAggregateInputType
    _max?: MessageRoleMaxAggregateInputType
  }

  export type MessageRoleGroupByOutputType = {
    id: number
    role: string
    _count: MessageRoleCountAggregateOutputType | null
    _avg: MessageRoleAvgAggregateOutputType | null
    _sum: MessageRoleSumAggregateOutputType | null
    _min: MessageRoleMinAggregateOutputType | null
    _max: MessageRoleMaxAggregateOutputType | null
  }

  type GetMessageRoleGroupByPayload<T extends MessageRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageRoleGroupByOutputType[P]>
            : GetScalarType<T[P], MessageRoleGroupByOutputType[P]>
        }
      >
    >


  export type MessageRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    chatMessage?: boolean | MessageRole$chatMessageArgs<ExtArgs>
    _count?: boolean | MessageRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageRole"]>

  export type MessageRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
  }, ExtArgs["result"]["messageRole"]>

  export type MessageRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
  }, ExtArgs["result"]["messageRole"]>

  export type MessageRoleSelectScalar = {
    id?: boolean
    role?: boolean
  }

  export type MessageRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role", ExtArgs["result"]["messageRole"]>
  export type MessageRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatMessage?: boolean | MessageRole$chatMessageArgs<ExtArgs>
    _count?: boolean | MessageRoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MessageRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MessageRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageRole"
    objects: {
      chatMessage: Prisma.$ChatMessagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role: string
    }, ExtArgs["result"]["messageRole"]>
    composites: {}
  }

  type MessageRoleGetPayload<S extends boolean | null | undefined | MessageRoleDefaultArgs> = $Result.GetResult<Prisma.$MessageRolePayload, S>

  type MessageRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageRoleCountAggregateInputType | true
    }

  export interface MessageRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageRole'], meta: { name: 'MessageRole' } }
    /**
     * Find zero or one MessageRole that matches the filter.
     * @param {MessageRoleFindUniqueArgs} args - Arguments to find a MessageRole
     * @example
     * // Get one MessageRole
     * const messageRole = await prisma.messageRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageRoleFindUniqueArgs>(args: SelectSubset<T, MessageRoleFindUniqueArgs<ExtArgs>>): Prisma__MessageRoleClient<$Result.GetResult<Prisma.$MessageRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageRoleFindUniqueOrThrowArgs} args - Arguments to find a MessageRole
     * @example
     * // Get one MessageRole
     * const messageRole = await prisma.messageRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageRoleClient<$Result.GetResult<Prisma.$MessageRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageRoleFindFirstArgs} args - Arguments to find a MessageRole
     * @example
     * // Get one MessageRole
     * const messageRole = await prisma.messageRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageRoleFindFirstArgs>(args?: SelectSubset<T, MessageRoleFindFirstArgs<ExtArgs>>): Prisma__MessageRoleClient<$Result.GetResult<Prisma.$MessageRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageRoleFindFirstOrThrowArgs} args - Arguments to find a MessageRole
     * @example
     * // Get one MessageRole
     * const messageRole = await prisma.messageRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageRoleClient<$Result.GetResult<Prisma.$MessageRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageRoles
     * const messageRoles = await prisma.messageRole.findMany()
     * 
     * // Get first 10 MessageRoles
     * const messageRoles = await prisma.messageRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageRoleWithIdOnly = await prisma.messageRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageRoleFindManyArgs>(args?: SelectSubset<T, MessageRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageRole.
     * @param {MessageRoleCreateArgs} args - Arguments to create a MessageRole.
     * @example
     * // Create one MessageRole
     * const MessageRole = await prisma.messageRole.create({
     *   data: {
     *     // ... data to create a MessageRole
     *   }
     * })
     * 
     */
    create<T extends MessageRoleCreateArgs>(args: SelectSubset<T, MessageRoleCreateArgs<ExtArgs>>): Prisma__MessageRoleClient<$Result.GetResult<Prisma.$MessageRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageRoles.
     * @param {MessageRoleCreateManyArgs} args - Arguments to create many MessageRoles.
     * @example
     * // Create many MessageRoles
     * const messageRole = await prisma.messageRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageRoleCreateManyArgs>(args?: SelectSubset<T, MessageRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageRoles and returns the data saved in the database.
     * @param {MessageRoleCreateManyAndReturnArgs} args - Arguments to create many MessageRoles.
     * @example
     * // Create many MessageRoles
     * const messageRole = await prisma.messageRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageRoles and only return the `id`
     * const messageRoleWithIdOnly = await prisma.messageRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageRole.
     * @param {MessageRoleDeleteArgs} args - Arguments to delete one MessageRole.
     * @example
     * // Delete one MessageRole
     * const MessageRole = await prisma.messageRole.delete({
     *   where: {
     *     // ... filter to delete one MessageRole
     *   }
     * })
     * 
     */
    delete<T extends MessageRoleDeleteArgs>(args: SelectSubset<T, MessageRoleDeleteArgs<ExtArgs>>): Prisma__MessageRoleClient<$Result.GetResult<Prisma.$MessageRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageRole.
     * @param {MessageRoleUpdateArgs} args - Arguments to update one MessageRole.
     * @example
     * // Update one MessageRole
     * const messageRole = await prisma.messageRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageRoleUpdateArgs>(args: SelectSubset<T, MessageRoleUpdateArgs<ExtArgs>>): Prisma__MessageRoleClient<$Result.GetResult<Prisma.$MessageRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageRoles.
     * @param {MessageRoleDeleteManyArgs} args - Arguments to filter MessageRoles to delete.
     * @example
     * // Delete a few MessageRoles
     * const { count } = await prisma.messageRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageRoleDeleteManyArgs>(args?: SelectSubset<T, MessageRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageRoles
     * const messageRole = await prisma.messageRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageRoleUpdateManyArgs>(args: SelectSubset<T, MessageRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageRoles and returns the data updated in the database.
     * @param {MessageRoleUpdateManyAndReturnArgs} args - Arguments to update many MessageRoles.
     * @example
     * // Update many MessageRoles
     * const messageRole = await prisma.messageRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageRoles and only return the `id`
     * const messageRoleWithIdOnly = await prisma.messageRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageRole.
     * @param {MessageRoleUpsertArgs} args - Arguments to update or create a MessageRole.
     * @example
     * // Update or create a MessageRole
     * const messageRole = await prisma.messageRole.upsert({
     *   create: {
     *     // ... data to create a MessageRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageRole we want to update
     *   }
     * })
     */
    upsert<T extends MessageRoleUpsertArgs>(args: SelectSubset<T, MessageRoleUpsertArgs<ExtArgs>>): Prisma__MessageRoleClient<$Result.GetResult<Prisma.$MessageRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageRoleCountArgs} args - Arguments to filter MessageRoles to count.
     * @example
     * // Count the number of MessageRoles
     * const count = await prisma.messageRole.count({
     *   where: {
     *     // ... the filter for the MessageRoles we want to count
     *   }
     * })
    **/
    count<T extends MessageRoleCountArgs>(
      args?: Subset<T, MessageRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageRoleAggregateArgs>(args: Subset<T, MessageRoleAggregateArgs>): Prisma.PrismaPromise<GetMessageRoleAggregateType<T>>

    /**
     * Group by MessageRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageRoleGroupByArgs['orderBy'] }
        : { orderBy?: MessageRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageRole model
   */
  readonly fields: MessageRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatMessage<T extends MessageRole$chatMessageArgs<ExtArgs> = {}>(args?: Subset<T, MessageRole$chatMessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MessageRole model
   */
  interface MessageRoleFieldRefs {
    readonly id: FieldRef<"MessageRole", 'Int'>
    readonly role: FieldRef<"MessageRole", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MessageRole findUnique
   */
  export type MessageRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRole
     */
    select?: MessageRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRole
     */
    omit?: MessageRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageRoleInclude<ExtArgs> | null
    /**
     * Filter, which MessageRole to fetch.
     */
    where: MessageRoleWhereUniqueInput
  }

  /**
   * MessageRole findUniqueOrThrow
   */
  export type MessageRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRole
     */
    select?: MessageRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRole
     */
    omit?: MessageRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageRoleInclude<ExtArgs> | null
    /**
     * Filter, which MessageRole to fetch.
     */
    where: MessageRoleWhereUniqueInput
  }

  /**
   * MessageRole findFirst
   */
  export type MessageRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRole
     */
    select?: MessageRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRole
     */
    omit?: MessageRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageRoleInclude<ExtArgs> | null
    /**
     * Filter, which MessageRole to fetch.
     */
    where?: MessageRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageRoles to fetch.
     */
    orderBy?: MessageRoleOrderByWithRelationInput | MessageRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageRoles.
     */
    cursor?: MessageRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageRoles.
     */
    distinct?: MessageRoleScalarFieldEnum | MessageRoleScalarFieldEnum[]
  }

  /**
   * MessageRole findFirstOrThrow
   */
  export type MessageRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRole
     */
    select?: MessageRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRole
     */
    omit?: MessageRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageRoleInclude<ExtArgs> | null
    /**
     * Filter, which MessageRole to fetch.
     */
    where?: MessageRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageRoles to fetch.
     */
    orderBy?: MessageRoleOrderByWithRelationInput | MessageRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageRoles.
     */
    cursor?: MessageRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageRoles.
     */
    distinct?: MessageRoleScalarFieldEnum | MessageRoleScalarFieldEnum[]
  }

  /**
   * MessageRole findMany
   */
  export type MessageRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRole
     */
    select?: MessageRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRole
     */
    omit?: MessageRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageRoleInclude<ExtArgs> | null
    /**
     * Filter, which MessageRoles to fetch.
     */
    where?: MessageRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageRoles to fetch.
     */
    orderBy?: MessageRoleOrderByWithRelationInput | MessageRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageRoles.
     */
    cursor?: MessageRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageRoles.
     */
    skip?: number
    distinct?: MessageRoleScalarFieldEnum | MessageRoleScalarFieldEnum[]
  }

  /**
   * MessageRole create
   */
  export type MessageRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRole
     */
    select?: MessageRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRole
     */
    omit?: MessageRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageRole.
     */
    data: XOR<MessageRoleCreateInput, MessageRoleUncheckedCreateInput>
  }

  /**
   * MessageRole createMany
   */
  export type MessageRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageRoles.
     */
    data: MessageRoleCreateManyInput | MessageRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageRole createManyAndReturn
   */
  export type MessageRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRole
     */
    select?: MessageRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRole
     */
    omit?: MessageRoleOmit<ExtArgs> | null
    /**
     * The data used to create many MessageRoles.
     */
    data: MessageRoleCreateManyInput | MessageRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageRole update
   */
  export type MessageRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRole
     */
    select?: MessageRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRole
     */
    omit?: MessageRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageRole.
     */
    data: XOR<MessageRoleUpdateInput, MessageRoleUncheckedUpdateInput>
    /**
     * Choose, which MessageRole to update.
     */
    where: MessageRoleWhereUniqueInput
  }

  /**
   * MessageRole updateMany
   */
  export type MessageRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageRoles.
     */
    data: XOR<MessageRoleUpdateManyMutationInput, MessageRoleUncheckedUpdateManyInput>
    /**
     * Filter which MessageRoles to update
     */
    where?: MessageRoleWhereInput
    /**
     * Limit how many MessageRoles to update.
     */
    limit?: number
  }

  /**
   * MessageRole updateManyAndReturn
   */
  export type MessageRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRole
     */
    select?: MessageRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRole
     */
    omit?: MessageRoleOmit<ExtArgs> | null
    /**
     * The data used to update MessageRoles.
     */
    data: XOR<MessageRoleUpdateManyMutationInput, MessageRoleUncheckedUpdateManyInput>
    /**
     * Filter which MessageRoles to update
     */
    where?: MessageRoleWhereInput
    /**
     * Limit how many MessageRoles to update.
     */
    limit?: number
  }

  /**
   * MessageRole upsert
   */
  export type MessageRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRole
     */
    select?: MessageRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRole
     */
    omit?: MessageRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageRole to update in case it exists.
     */
    where: MessageRoleWhereUniqueInput
    /**
     * In case the MessageRole found by the `where` argument doesn't exist, create a new MessageRole with this data.
     */
    create: XOR<MessageRoleCreateInput, MessageRoleUncheckedCreateInput>
    /**
     * In case the MessageRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageRoleUpdateInput, MessageRoleUncheckedUpdateInput>
  }

  /**
   * MessageRole delete
   */
  export type MessageRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRole
     */
    select?: MessageRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRole
     */
    omit?: MessageRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageRoleInclude<ExtArgs> | null
    /**
     * Filter which MessageRole to delete.
     */
    where: MessageRoleWhereUniqueInput
  }

  /**
   * MessageRole deleteMany
   */
  export type MessageRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageRoles to delete
     */
    where?: MessageRoleWhereInput
    /**
     * Limit how many MessageRoles to delete.
     */
    limit?: number
  }

  /**
   * MessageRole.chatMessage
   */
  export type MessageRole$chatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessages
     */
    select?: ChatMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessages
     */
    omit?: ChatMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessagesInclude<ExtArgs> | null
    where?: ChatMessagesWhereInput
    orderBy?: ChatMessagesOrderByWithRelationInput | ChatMessagesOrderByWithRelationInput[]
    cursor?: ChatMessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessagesScalarFieldEnum | ChatMessagesScalarFieldEnum[]
  }

  /**
   * MessageRole without action
   */
  export type MessageRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageRole
     */
    select?: MessageRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageRole
     */
    omit?: MessageRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageRoleInclude<ExtArgs> | null
  }


  /**
   * Model HotelInfo
   */

  export type AggregateHotelInfo = {
    _count: HotelInfoCountAggregateOutputType | null
    _avg: HotelInfoAvgAggregateOutputType | null
    _sum: HotelInfoSumAggregateOutputType | null
    _min: HotelInfoMinAggregateOutputType | null
    _max: HotelInfoMaxAggregateOutputType | null
  }

  export type HotelInfoAvgAggregateOutputType = {
    id: number | null
    price: number | null
    rating: number | null
    reviews: number | null
    star: number | null
  }

  export type HotelInfoSumAggregateOutputType = {
    id: number | null
    price: number | null
    rating: number | null
    reviews: number | null
    star: number | null
  }

  export type HotelInfoMinAggregateOutputType = {
    id: number | null
    hotelName: string | null
    location: string | null
    price: number | null
    link: string | null
    description: string | null
    rating: number | null
    reviews: number | null
    star: number | null
  }

  export type HotelInfoMaxAggregateOutputType = {
    id: number | null
    hotelName: string | null
    location: string | null
    price: number | null
    link: string | null
    description: string | null
    rating: number | null
    reviews: number | null
    star: number | null
  }

  export type HotelInfoCountAggregateOutputType = {
    id: number
    hotelName: number
    location: number
    price: number
    link: number
    description: number
    rating: number
    reviews: number
    star: number
    _all: number
  }


  export type HotelInfoAvgAggregateInputType = {
    id?: true
    price?: true
    rating?: true
    reviews?: true
    star?: true
  }

  export type HotelInfoSumAggregateInputType = {
    id?: true
    price?: true
    rating?: true
    reviews?: true
    star?: true
  }

  export type HotelInfoMinAggregateInputType = {
    id?: true
    hotelName?: true
    location?: true
    price?: true
    link?: true
    description?: true
    rating?: true
    reviews?: true
    star?: true
  }

  export type HotelInfoMaxAggregateInputType = {
    id?: true
    hotelName?: true
    location?: true
    price?: true
    link?: true
    description?: true
    rating?: true
    reviews?: true
    star?: true
  }

  export type HotelInfoCountAggregateInputType = {
    id?: true
    hotelName?: true
    location?: true
    price?: true
    link?: true
    description?: true
    rating?: true
    reviews?: true
    star?: true
    _all?: true
  }

  export type HotelInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HotelInfo to aggregate.
     */
    where?: HotelInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelInfos to fetch.
     */
    orderBy?: HotelInfoOrderByWithRelationInput | HotelInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HotelInfos
    **/
    _count?: true | HotelInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HotelInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HotelInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelInfoMaxAggregateInputType
  }

  export type GetHotelInfoAggregateType<T extends HotelInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateHotelInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotelInfo[P]>
      : GetScalarType<T[P], AggregateHotelInfo[P]>
  }




  export type HotelInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelInfoWhereInput
    orderBy?: HotelInfoOrderByWithAggregationInput | HotelInfoOrderByWithAggregationInput[]
    by: HotelInfoScalarFieldEnum[] | HotelInfoScalarFieldEnum
    having?: HotelInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelInfoCountAggregateInputType | true
    _avg?: HotelInfoAvgAggregateInputType
    _sum?: HotelInfoSumAggregateInputType
    _min?: HotelInfoMinAggregateInputType
    _max?: HotelInfoMaxAggregateInputType
  }

  export type HotelInfoGroupByOutputType = {
    id: number
    hotelName: string
    location: string
    price: number
    link: string
    description: string
    rating: number
    reviews: number
    star: number
    _count: HotelInfoCountAggregateOutputType | null
    _avg: HotelInfoAvgAggregateOutputType | null
    _sum: HotelInfoSumAggregateOutputType | null
    _min: HotelInfoMinAggregateOutputType | null
    _max: HotelInfoMaxAggregateOutputType | null
  }

  type GetHotelInfoGroupByPayload<T extends HotelInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelInfoGroupByOutputType[P]>
            : GetScalarType<T[P], HotelInfoGroupByOutputType[P]>
        }
      >
    >


  export type HotelInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelName?: boolean
    location?: boolean
    price?: boolean
    link?: boolean
    description?: boolean
    rating?: boolean
    reviews?: boolean
    star?: boolean
  }, ExtArgs["result"]["hotelInfo"]>

  export type HotelInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelName?: boolean
    location?: boolean
    price?: boolean
    link?: boolean
    description?: boolean
    rating?: boolean
    reviews?: boolean
    star?: boolean
  }, ExtArgs["result"]["hotelInfo"]>

  export type HotelInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hotelName?: boolean
    location?: boolean
    price?: boolean
    link?: boolean
    description?: boolean
    rating?: boolean
    reviews?: boolean
    star?: boolean
  }, ExtArgs["result"]["hotelInfo"]>

  export type HotelInfoSelectScalar = {
    id?: boolean
    hotelName?: boolean
    location?: boolean
    price?: boolean
    link?: boolean
    description?: boolean
    rating?: boolean
    reviews?: boolean
    star?: boolean
  }

  export type HotelInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hotelName" | "location" | "price" | "link" | "description" | "rating" | "reviews" | "star", ExtArgs["result"]["hotelInfo"]>

  export type $HotelInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HotelInfo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hotelName: string
      location: string
      price: number
      link: string
      description: string
      rating: number
      reviews: number
      star: number
    }, ExtArgs["result"]["hotelInfo"]>
    composites: {}
  }

  type HotelInfoGetPayload<S extends boolean | null | undefined | HotelInfoDefaultArgs> = $Result.GetResult<Prisma.$HotelInfoPayload, S>

  type HotelInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotelInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelInfoCountAggregateInputType | true
    }

  export interface HotelInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HotelInfo'], meta: { name: 'HotelInfo' } }
    /**
     * Find zero or one HotelInfo that matches the filter.
     * @param {HotelInfoFindUniqueArgs} args - Arguments to find a HotelInfo
     * @example
     * // Get one HotelInfo
     * const hotelInfo = await prisma.hotelInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelInfoFindUniqueArgs>(args: SelectSubset<T, HotelInfoFindUniqueArgs<ExtArgs>>): Prisma__HotelInfoClient<$Result.GetResult<Prisma.$HotelInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HotelInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotelInfoFindUniqueOrThrowArgs} args - Arguments to find a HotelInfo
     * @example
     * // Get one HotelInfo
     * const hotelInfo = await prisma.hotelInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelInfoClient<$Result.GetResult<Prisma.$HotelInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HotelInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelInfoFindFirstArgs} args - Arguments to find a HotelInfo
     * @example
     * // Get one HotelInfo
     * const hotelInfo = await prisma.hotelInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelInfoFindFirstArgs>(args?: SelectSubset<T, HotelInfoFindFirstArgs<ExtArgs>>): Prisma__HotelInfoClient<$Result.GetResult<Prisma.$HotelInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HotelInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelInfoFindFirstOrThrowArgs} args - Arguments to find a HotelInfo
     * @example
     * // Get one HotelInfo
     * const hotelInfo = await prisma.hotelInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelInfoClient<$Result.GetResult<Prisma.$HotelInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HotelInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HotelInfos
     * const hotelInfos = await prisma.hotelInfo.findMany()
     * 
     * // Get first 10 HotelInfos
     * const hotelInfos = await prisma.hotelInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelInfoWithIdOnly = await prisma.hotelInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotelInfoFindManyArgs>(args?: SelectSubset<T, HotelInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HotelInfo.
     * @param {HotelInfoCreateArgs} args - Arguments to create a HotelInfo.
     * @example
     * // Create one HotelInfo
     * const HotelInfo = await prisma.hotelInfo.create({
     *   data: {
     *     // ... data to create a HotelInfo
     *   }
     * })
     * 
     */
    create<T extends HotelInfoCreateArgs>(args: SelectSubset<T, HotelInfoCreateArgs<ExtArgs>>): Prisma__HotelInfoClient<$Result.GetResult<Prisma.$HotelInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HotelInfos.
     * @param {HotelInfoCreateManyArgs} args - Arguments to create many HotelInfos.
     * @example
     * // Create many HotelInfos
     * const hotelInfo = await prisma.hotelInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelInfoCreateManyArgs>(args?: SelectSubset<T, HotelInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HotelInfos and returns the data saved in the database.
     * @param {HotelInfoCreateManyAndReturnArgs} args - Arguments to create many HotelInfos.
     * @example
     * // Create many HotelInfos
     * const hotelInfo = await prisma.hotelInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HotelInfos and only return the `id`
     * const hotelInfoWithIdOnly = await prisma.hotelInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HotelInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, HotelInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HotelInfo.
     * @param {HotelInfoDeleteArgs} args - Arguments to delete one HotelInfo.
     * @example
     * // Delete one HotelInfo
     * const HotelInfo = await prisma.hotelInfo.delete({
     *   where: {
     *     // ... filter to delete one HotelInfo
     *   }
     * })
     * 
     */
    delete<T extends HotelInfoDeleteArgs>(args: SelectSubset<T, HotelInfoDeleteArgs<ExtArgs>>): Prisma__HotelInfoClient<$Result.GetResult<Prisma.$HotelInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HotelInfo.
     * @param {HotelInfoUpdateArgs} args - Arguments to update one HotelInfo.
     * @example
     * // Update one HotelInfo
     * const hotelInfo = await prisma.hotelInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelInfoUpdateArgs>(args: SelectSubset<T, HotelInfoUpdateArgs<ExtArgs>>): Prisma__HotelInfoClient<$Result.GetResult<Prisma.$HotelInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HotelInfos.
     * @param {HotelInfoDeleteManyArgs} args - Arguments to filter HotelInfos to delete.
     * @example
     * // Delete a few HotelInfos
     * const { count } = await prisma.hotelInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelInfoDeleteManyArgs>(args?: SelectSubset<T, HotelInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HotelInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HotelInfos
     * const hotelInfo = await prisma.hotelInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelInfoUpdateManyArgs>(args: SelectSubset<T, HotelInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HotelInfos and returns the data updated in the database.
     * @param {HotelInfoUpdateManyAndReturnArgs} args - Arguments to update many HotelInfos.
     * @example
     * // Update many HotelInfos
     * const hotelInfo = await prisma.hotelInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HotelInfos and only return the `id`
     * const hotelInfoWithIdOnly = await prisma.hotelInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HotelInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, HotelInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HotelInfo.
     * @param {HotelInfoUpsertArgs} args - Arguments to update or create a HotelInfo.
     * @example
     * // Update or create a HotelInfo
     * const hotelInfo = await prisma.hotelInfo.upsert({
     *   create: {
     *     // ... data to create a HotelInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HotelInfo we want to update
     *   }
     * })
     */
    upsert<T extends HotelInfoUpsertArgs>(args: SelectSubset<T, HotelInfoUpsertArgs<ExtArgs>>): Prisma__HotelInfoClient<$Result.GetResult<Prisma.$HotelInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HotelInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelInfoCountArgs} args - Arguments to filter HotelInfos to count.
     * @example
     * // Count the number of HotelInfos
     * const count = await prisma.hotelInfo.count({
     *   where: {
     *     // ... the filter for the HotelInfos we want to count
     *   }
     * })
    **/
    count<T extends HotelInfoCountArgs>(
      args?: Subset<T, HotelInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HotelInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HotelInfoAggregateArgs>(args: Subset<T, HotelInfoAggregateArgs>): Prisma.PrismaPromise<GetHotelInfoAggregateType<T>>

    /**
     * Group by HotelInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HotelInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelInfoGroupByArgs['orderBy'] }
        : { orderBy?: HotelInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HotelInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HotelInfo model
   */
  readonly fields: HotelInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HotelInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HotelInfo model
   */
  interface HotelInfoFieldRefs {
    readonly id: FieldRef<"HotelInfo", 'Int'>
    readonly hotelName: FieldRef<"HotelInfo", 'String'>
    readonly location: FieldRef<"HotelInfo", 'String'>
    readonly price: FieldRef<"HotelInfo", 'Int'>
    readonly link: FieldRef<"HotelInfo", 'String'>
    readonly description: FieldRef<"HotelInfo", 'String'>
    readonly rating: FieldRef<"HotelInfo", 'Float'>
    readonly reviews: FieldRef<"HotelInfo", 'Int'>
    readonly star: FieldRef<"HotelInfo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * HotelInfo findUnique
   */
  export type HotelInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelInfo
     */
    select?: HotelInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelInfo
     */
    omit?: HotelInfoOmit<ExtArgs> | null
    /**
     * Filter, which HotelInfo to fetch.
     */
    where: HotelInfoWhereUniqueInput
  }

  /**
   * HotelInfo findUniqueOrThrow
   */
  export type HotelInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelInfo
     */
    select?: HotelInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelInfo
     */
    omit?: HotelInfoOmit<ExtArgs> | null
    /**
     * Filter, which HotelInfo to fetch.
     */
    where: HotelInfoWhereUniqueInput
  }

  /**
   * HotelInfo findFirst
   */
  export type HotelInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelInfo
     */
    select?: HotelInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelInfo
     */
    omit?: HotelInfoOmit<ExtArgs> | null
    /**
     * Filter, which HotelInfo to fetch.
     */
    where?: HotelInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelInfos to fetch.
     */
    orderBy?: HotelInfoOrderByWithRelationInput | HotelInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HotelInfos.
     */
    cursor?: HotelInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelInfos.
     */
    distinct?: HotelInfoScalarFieldEnum | HotelInfoScalarFieldEnum[]
  }

  /**
   * HotelInfo findFirstOrThrow
   */
  export type HotelInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelInfo
     */
    select?: HotelInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelInfo
     */
    omit?: HotelInfoOmit<ExtArgs> | null
    /**
     * Filter, which HotelInfo to fetch.
     */
    where?: HotelInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelInfos to fetch.
     */
    orderBy?: HotelInfoOrderByWithRelationInput | HotelInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HotelInfos.
     */
    cursor?: HotelInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelInfos.
     */
    distinct?: HotelInfoScalarFieldEnum | HotelInfoScalarFieldEnum[]
  }

  /**
   * HotelInfo findMany
   */
  export type HotelInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelInfo
     */
    select?: HotelInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelInfo
     */
    omit?: HotelInfoOmit<ExtArgs> | null
    /**
     * Filter, which HotelInfos to fetch.
     */
    where?: HotelInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelInfos to fetch.
     */
    orderBy?: HotelInfoOrderByWithRelationInput | HotelInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HotelInfos.
     */
    cursor?: HotelInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelInfos.
     */
    skip?: number
    distinct?: HotelInfoScalarFieldEnum | HotelInfoScalarFieldEnum[]
  }

  /**
   * HotelInfo create
   */
  export type HotelInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelInfo
     */
    select?: HotelInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelInfo
     */
    omit?: HotelInfoOmit<ExtArgs> | null
    /**
     * The data needed to create a HotelInfo.
     */
    data: XOR<HotelInfoCreateInput, HotelInfoUncheckedCreateInput>
  }

  /**
   * HotelInfo createMany
   */
  export type HotelInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HotelInfos.
     */
    data: HotelInfoCreateManyInput | HotelInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HotelInfo createManyAndReturn
   */
  export type HotelInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelInfo
     */
    select?: HotelInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HotelInfo
     */
    omit?: HotelInfoOmit<ExtArgs> | null
    /**
     * The data used to create many HotelInfos.
     */
    data: HotelInfoCreateManyInput | HotelInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HotelInfo update
   */
  export type HotelInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelInfo
     */
    select?: HotelInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelInfo
     */
    omit?: HotelInfoOmit<ExtArgs> | null
    /**
     * The data needed to update a HotelInfo.
     */
    data: XOR<HotelInfoUpdateInput, HotelInfoUncheckedUpdateInput>
    /**
     * Choose, which HotelInfo to update.
     */
    where: HotelInfoWhereUniqueInput
  }

  /**
   * HotelInfo updateMany
   */
  export type HotelInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HotelInfos.
     */
    data: XOR<HotelInfoUpdateManyMutationInput, HotelInfoUncheckedUpdateManyInput>
    /**
     * Filter which HotelInfos to update
     */
    where?: HotelInfoWhereInput
    /**
     * Limit how many HotelInfos to update.
     */
    limit?: number
  }

  /**
   * HotelInfo updateManyAndReturn
   */
  export type HotelInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelInfo
     */
    select?: HotelInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HotelInfo
     */
    omit?: HotelInfoOmit<ExtArgs> | null
    /**
     * The data used to update HotelInfos.
     */
    data: XOR<HotelInfoUpdateManyMutationInput, HotelInfoUncheckedUpdateManyInput>
    /**
     * Filter which HotelInfos to update
     */
    where?: HotelInfoWhereInput
    /**
     * Limit how many HotelInfos to update.
     */
    limit?: number
  }

  /**
   * HotelInfo upsert
   */
  export type HotelInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelInfo
     */
    select?: HotelInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelInfo
     */
    omit?: HotelInfoOmit<ExtArgs> | null
    /**
     * The filter to search for the HotelInfo to update in case it exists.
     */
    where: HotelInfoWhereUniqueInput
    /**
     * In case the HotelInfo found by the `where` argument doesn't exist, create a new HotelInfo with this data.
     */
    create: XOR<HotelInfoCreateInput, HotelInfoUncheckedCreateInput>
    /**
     * In case the HotelInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelInfoUpdateInput, HotelInfoUncheckedUpdateInput>
  }

  /**
   * HotelInfo delete
   */
  export type HotelInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelInfo
     */
    select?: HotelInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelInfo
     */
    omit?: HotelInfoOmit<ExtArgs> | null
    /**
     * Filter which HotelInfo to delete.
     */
    where: HotelInfoWhereUniqueInput
  }

  /**
   * HotelInfo deleteMany
   */
  export type HotelInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HotelInfos to delete
     */
    where?: HotelInfoWhereInput
    /**
     * Limit how many HotelInfos to delete.
     */
    limit?: number
  }

  /**
   * HotelInfo without action
   */
  export type HotelInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelInfo
     */
    select?: HotelInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HotelInfo
     */
    omit?: HotelInfoOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserDetailScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserDetailScalarFieldEnum = (typeof UserDetailScalarFieldEnum)[keyof typeof UserDetailScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    isTemporary: 'isTemporary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const ChatMessagesScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    messageRoleId: 'messageRoleId',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatMessagesScalarFieldEnum = (typeof ChatMessagesScalarFieldEnum)[keyof typeof ChatMessagesScalarFieldEnum]


  export const MessageRoleScalarFieldEnum: {
    id: 'id',
    role: 'role'
  };

  export type MessageRoleScalarFieldEnum = (typeof MessageRoleScalarFieldEnum)[keyof typeof MessageRoleScalarFieldEnum]


  export const HotelInfoScalarFieldEnum: {
    id: 'id',
    hotelName: 'hotelName',
    location: 'location',
    price: 'price',
    link: 'link',
    description: 'description',
    rating: 'rating',
    reviews: 'reviews',
    star: 'star'
  };

  export type HotelInfoScalarFieldEnum = (typeof HotelInfoScalarFieldEnum)[keyof typeof HotelInfoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserDetailWhereInput = {
    AND?: UserDetailWhereInput | UserDetailWhereInput[]
    OR?: UserDetailWhereInput[]
    NOT?: UserDetailWhereInput | UserDetailWhereInput[]
    id?: StringFilter<"UserDetail"> | string
    userName?: StringFilter<"UserDetail"> | string
    email?: StringFilter<"UserDetail"> | string
    password?: StringFilter<"UserDetail"> | string
    createdAt?: DateTimeFilter<"UserDetail"> | Date | string
    updatedAt?: DateTimeFilter<"UserDetail"> | Date | string
    rootUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserDetailOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rootUser?: UserOrderByWithRelationInput
  }

  export type UserDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userName?: string
    email?: string
    AND?: UserDetailWhereInput | UserDetailWhereInput[]
    OR?: UserDetailWhereInput[]
    NOT?: UserDetailWhereInput | UserDetailWhereInput[]
    password?: StringFilter<"UserDetail"> | string
    createdAt?: DateTimeFilter<"UserDetail"> | Date | string
    updatedAt?: DateTimeFilter<"UserDetail"> | Date | string
    rootUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id" | "userName" | "email">

  export type UserDetailOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserDetailCountOrderByAggregateInput
    _max?: UserDetailMaxOrderByAggregateInput
    _min?: UserDetailMinOrderByAggregateInput
  }

  export type UserDetailScalarWhereWithAggregatesInput = {
    AND?: UserDetailScalarWhereWithAggregatesInput | UserDetailScalarWhereWithAggregatesInput[]
    OR?: UserDetailScalarWhereWithAggregatesInput[]
    NOT?: UserDetailScalarWhereWithAggregatesInput | UserDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserDetail"> | string
    userName?: StringWithAggregatesFilter<"UserDetail"> | string
    email?: StringWithAggregatesFilter<"UserDetail"> | string
    password?: StringWithAggregatesFilter<"UserDetail"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserDetail"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserDetail"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    isTemporary?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    haveChat?: ChatListRelationFilter
    userDetail?: XOR<UserDetailNullableScalarRelationFilter, UserDetailWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    isTemporary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    haveChat?: ChatOrderByRelationAggregateInput
    userDetail?: UserDetailOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    isTemporary?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    haveChat?: ChatListRelationFilter
    userDetail?: XOR<UserDetailNullableScalarRelationFilter, UserDetailWhereInput> | null
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    isTemporary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    isTemporary?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    userId?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatMessages?: ChatMessagesListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    chatMessages?: ChatMessagesOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    userId?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatMessages?: ChatMessagesListRelationFilter
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    userId?: StringWithAggregatesFilter<"Chat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
  }

  export type ChatMessagesWhereInput = {
    AND?: ChatMessagesWhereInput | ChatMessagesWhereInput[]
    OR?: ChatMessagesWhereInput[]
    NOT?: ChatMessagesWhereInput | ChatMessagesWhereInput[]
    id?: IntFilter<"ChatMessages"> | number
    chatId?: StringFilter<"ChatMessages"> | string
    messageRoleId?: IntFilter<"ChatMessages"> | number
    message?: StringFilter<"ChatMessages"> | string
    createdAt?: DateTimeFilter<"ChatMessages"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessages"> | Date | string
    relatedChat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    msgRole?: XOR<MessageRoleScalarRelationFilter, MessageRoleWhereInput>
  }

  export type ChatMessagesOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    messageRoleId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    relatedChat?: ChatOrderByWithRelationInput
    msgRole?: MessageRoleOrderByWithRelationInput
  }

  export type ChatMessagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatMessagesWhereInput | ChatMessagesWhereInput[]
    OR?: ChatMessagesWhereInput[]
    NOT?: ChatMessagesWhereInput | ChatMessagesWhereInput[]
    chatId?: StringFilter<"ChatMessages"> | string
    messageRoleId?: IntFilter<"ChatMessages"> | number
    message?: StringFilter<"ChatMessages"> | string
    createdAt?: DateTimeFilter<"ChatMessages"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessages"> | Date | string
    relatedChat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
    msgRole?: XOR<MessageRoleScalarRelationFilter, MessageRoleWhereInput>
  }, "id">

  export type ChatMessagesOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    messageRoleId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatMessagesCountOrderByAggregateInput
    _avg?: ChatMessagesAvgOrderByAggregateInput
    _max?: ChatMessagesMaxOrderByAggregateInput
    _min?: ChatMessagesMinOrderByAggregateInput
    _sum?: ChatMessagesSumOrderByAggregateInput
  }

  export type ChatMessagesScalarWhereWithAggregatesInput = {
    AND?: ChatMessagesScalarWhereWithAggregatesInput | ChatMessagesScalarWhereWithAggregatesInput[]
    OR?: ChatMessagesScalarWhereWithAggregatesInput[]
    NOT?: ChatMessagesScalarWhereWithAggregatesInput | ChatMessagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatMessages"> | number
    chatId?: StringWithAggregatesFilter<"ChatMessages"> | string
    messageRoleId?: IntWithAggregatesFilter<"ChatMessages"> | number
    message?: StringWithAggregatesFilter<"ChatMessages"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessages"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatMessages"> | Date | string
  }

  export type MessageRoleWhereInput = {
    AND?: MessageRoleWhereInput | MessageRoleWhereInput[]
    OR?: MessageRoleWhereInput[]
    NOT?: MessageRoleWhereInput | MessageRoleWhereInput[]
    id?: IntFilter<"MessageRole"> | number
    role?: StringFilter<"MessageRole"> | string
    chatMessage?: ChatMessagesListRelationFilter
  }

  export type MessageRoleOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    chatMessage?: ChatMessagesOrderByRelationAggregateInput
  }

  export type MessageRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageRoleWhereInput | MessageRoleWhereInput[]
    OR?: MessageRoleWhereInput[]
    NOT?: MessageRoleWhereInput | MessageRoleWhereInput[]
    role?: StringFilter<"MessageRole"> | string
    chatMessage?: ChatMessagesListRelationFilter
  }, "id">

  export type MessageRoleOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    _count?: MessageRoleCountOrderByAggregateInput
    _avg?: MessageRoleAvgOrderByAggregateInput
    _max?: MessageRoleMaxOrderByAggregateInput
    _min?: MessageRoleMinOrderByAggregateInput
    _sum?: MessageRoleSumOrderByAggregateInput
  }

  export type MessageRoleScalarWhereWithAggregatesInput = {
    AND?: MessageRoleScalarWhereWithAggregatesInput | MessageRoleScalarWhereWithAggregatesInput[]
    OR?: MessageRoleScalarWhereWithAggregatesInput[]
    NOT?: MessageRoleScalarWhereWithAggregatesInput | MessageRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MessageRole"> | number
    role?: StringWithAggregatesFilter<"MessageRole"> | string
  }

  export type HotelInfoWhereInput = {
    AND?: HotelInfoWhereInput | HotelInfoWhereInput[]
    OR?: HotelInfoWhereInput[]
    NOT?: HotelInfoWhereInput | HotelInfoWhereInput[]
    id?: IntFilter<"HotelInfo"> | number
    hotelName?: StringFilter<"HotelInfo"> | string
    location?: StringFilter<"HotelInfo"> | string
    price?: IntFilter<"HotelInfo"> | number
    link?: StringFilter<"HotelInfo"> | string
    description?: StringFilter<"HotelInfo"> | string
    rating?: FloatFilter<"HotelInfo"> | number
    reviews?: IntFilter<"HotelInfo"> | number
    star?: IntFilter<"HotelInfo"> | number
  }

  export type HotelInfoOrderByWithRelationInput = {
    id?: SortOrder
    hotelName?: SortOrder
    location?: SortOrder
    price?: SortOrder
    link?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    star?: SortOrder
  }

  export type HotelInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HotelInfoWhereInput | HotelInfoWhereInput[]
    OR?: HotelInfoWhereInput[]
    NOT?: HotelInfoWhereInput | HotelInfoWhereInput[]
    hotelName?: StringFilter<"HotelInfo"> | string
    location?: StringFilter<"HotelInfo"> | string
    price?: IntFilter<"HotelInfo"> | number
    link?: StringFilter<"HotelInfo"> | string
    description?: StringFilter<"HotelInfo"> | string
    rating?: FloatFilter<"HotelInfo"> | number
    reviews?: IntFilter<"HotelInfo"> | number
    star?: IntFilter<"HotelInfo"> | number
  }, "id">

  export type HotelInfoOrderByWithAggregationInput = {
    id?: SortOrder
    hotelName?: SortOrder
    location?: SortOrder
    price?: SortOrder
    link?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    star?: SortOrder
    _count?: HotelInfoCountOrderByAggregateInput
    _avg?: HotelInfoAvgOrderByAggregateInput
    _max?: HotelInfoMaxOrderByAggregateInput
    _min?: HotelInfoMinOrderByAggregateInput
    _sum?: HotelInfoSumOrderByAggregateInput
  }

  export type HotelInfoScalarWhereWithAggregatesInput = {
    AND?: HotelInfoScalarWhereWithAggregatesInput | HotelInfoScalarWhereWithAggregatesInput[]
    OR?: HotelInfoScalarWhereWithAggregatesInput[]
    NOT?: HotelInfoScalarWhereWithAggregatesInput | HotelInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HotelInfo"> | number
    hotelName?: StringWithAggregatesFilter<"HotelInfo"> | string
    location?: StringWithAggregatesFilter<"HotelInfo"> | string
    price?: IntWithAggregatesFilter<"HotelInfo"> | number
    link?: StringWithAggregatesFilter<"HotelInfo"> | string
    description?: StringWithAggregatesFilter<"HotelInfo"> | string
    rating?: FloatWithAggregatesFilter<"HotelInfo"> | number
    reviews?: IntWithAggregatesFilter<"HotelInfo"> | number
    star?: IntWithAggregatesFilter<"HotelInfo"> | number
  }

  export type UserDetailCreateInput = {
    userName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rootUser: UserCreateNestedOneWithoutUserDetailInput
  }

  export type UserDetailUncheckedCreateInput = {
    id: string
    userName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserDetailUpdateInput = {
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rootUser?: UserUpdateOneRequiredWithoutUserDetailNestedInput
  }

  export type UserDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDetailCreateManyInput = {
    id: string
    userName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserDetailUpdateManyMutationInput = {
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    isTemporary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    haveChat?: ChatCreateNestedManyWithoutCreatedByInput
    userDetail?: UserDetailCreateNestedOneWithoutRootUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    isTemporary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    haveChat?: ChatUncheckedCreateNestedManyWithoutCreatedByInput
    userDetail?: UserDetailUncheckedCreateNestedOneWithoutRootUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isTemporary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    haveChat?: ChatUpdateManyWithoutCreatedByNestedInput
    userDetail?: UserDetailUpdateOneWithoutRootUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isTemporary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    haveChat?: ChatUncheckedUpdateManyWithoutCreatedByNestedInput
    userDetail?: UserDetailUncheckedUpdateOneWithoutRootUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    isTemporary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isTemporary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isTemporary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutHaveChatInput
    chatMessages?: ChatMessagesCreateNestedManyWithoutRelatedChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutRelatedChatInput
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutHaveChatNestedInput
    chatMessages?: ChatMessagesUpdateManyWithoutRelatedChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMessages?: ChatMessagesUncheckedUpdateManyWithoutRelatedChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesCreateInput = {
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    relatedChat: ChatCreateNestedOneWithoutChatMessagesInput
    msgRole: MessageRoleCreateNestedOneWithoutChatMessageInput
  }

  export type ChatMessagesUncheckedCreateInput = {
    id?: number
    chatId: string
    messageRoleId: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessagesUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedChat?: ChatUpdateOneRequiredWithoutChatMessagesNestedInput
    msgRole?: MessageRoleUpdateOneRequiredWithoutChatMessageNestedInput
  }

  export type ChatMessagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
    messageRoleId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesCreateManyInput = {
    id?: number
    chatId: string
    messageRoleId: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessagesUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
    messageRoleId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageRoleCreateInput = {
    role: string
    chatMessage?: ChatMessagesCreateNestedManyWithoutMsgRoleInput
  }

  export type MessageRoleUncheckedCreateInput = {
    id?: number
    role: string
    chatMessage?: ChatMessagesUncheckedCreateNestedManyWithoutMsgRoleInput
  }

  export type MessageRoleUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    chatMessage?: ChatMessagesUpdateManyWithoutMsgRoleNestedInput
  }

  export type MessageRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    chatMessage?: ChatMessagesUncheckedUpdateManyWithoutMsgRoleNestedInput
  }

  export type MessageRoleCreateManyInput = {
    id?: number
    role: string
  }

  export type MessageRoleUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type MessageRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type HotelInfoCreateInput = {
    hotelName: string
    location: string
    price: number
    link: string
    description: string
    rating: number
    reviews: number
    star: number
  }

  export type HotelInfoUncheckedCreateInput = {
    id?: number
    hotelName: string
    location: string
    price: number
    link: string
    description: string
    rating: number
    reviews: number
    star: number
  }

  export type HotelInfoUpdateInput = {
    hotelName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    star?: IntFieldUpdateOperationsInput | number
  }

  export type HotelInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hotelName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    star?: IntFieldUpdateOperationsInput | number
  }

  export type HotelInfoCreateManyInput = {
    id?: number
    hotelName: string
    location: string
    price: number
    link: string
    description: string
    rating: number
    reviews: number
    star: number
  }

  export type HotelInfoUpdateManyMutationInput = {
    hotelName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    star?: IntFieldUpdateOperationsInput | number
  }

  export type HotelInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hotelName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    star?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserDetailCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserDetailMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type UserDetailNullableScalarRelationFilter = {
    is?: UserDetailWhereInput | null
    isNot?: UserDetailWhereInput | null
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    isTemporary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    isTemporary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    isTemporary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ChatMessagesListRelationFilter = {
    every?: ChatMessagesWhereInput
    some?: ChatMessagesWhereInput
    none?: ChatMessagesWhereInput
  }

  export type ChatMessagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type MessageRoleScalarRelationFilter = {
    is?: MessageRoleWhereInput
    isNot?: MessageRoleWhereInput
  }

  export type ChatMessagesCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    messageRoleId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessagesAvgOrderByAggregateInput = {
    id?: SortOrder
    messageRoleId?: SortOrder
  }

  export type ChatMessagesMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    messageRoleId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessagesMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    messageRoleId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessagesSumOrderByAggregateInput = {
    id?: SortOrder
    messageRoleId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type MessageRoleCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type MessageRoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MessageRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type MessageRoleMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type MessageRoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type HotelInfoCountOrderByAggregateInput = {
    id?: SortOrder
    hotelName?: SortOrder
    location?: SortOrder
    price?: SortOrder
    link?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    star?: SortOrder
  }

  export type HotelInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    star?: SortOrder
  }

  export type HotelInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    hotelName?: SortOrder
    location?: SortOrder
    price?: SortOrder
    link?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    star?: SortOrder
  }

  export type HotelInfoMinOrderByAggregateInput = {
    id?: SortOrder
    hotelName?: SortOrder
    location?: SortOrder
    price?: SortOrder
    link?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    star?: SortOrder
  }

  export type HotelInfoSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    reviews?: SortOrder
    star?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutUserDetailInput = {
    create?: XOR<UserCreateWithoutUserDetailInput, UserUncheckedCreateWithoutUserDetailInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserDetailInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutUserDetailNestedInput = {
    create?: XOR<UserCreateWithoutUserDetailInput, UserUncheckedCreateWithoutUserDetailInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserDetailInput
    upsert?: UserUpsertWithoutUserDetailInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserDetailInput, UserUpdateWithoutUserDetailInput>, UserUncheckedUpdateWithoutUserDetailInput>
  }

  export type ChatCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ChatCreateWithoutCreatedByInput, ChatUncheckedCreateWithoutCreatedByInput> | ChatCreateWithoutCreatedByInput[] | ChatUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutCreatedByInput | ChatCreateOrConnectWithoutCreatedByInput[]
    createMany?: ChatCreateManyCreatedByInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type UserDetailCreateNestedOneWithoutRootUserInput = {
    create?: XOR<UserDetailCreateWithoutRootUserInput, UserDetailUncheckedCreateWithoutRootUserInput>
    connectOrCreate?: UserDetailCreateOrConnectWithoutRootUserInput
    connect?: UserDetailWhereUniqueInput
  }

  export type ChatUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ChatCreateWithoutCreatedByInput, ChatUncheckedCreateWithoutCreatedByInput> | ChatCreateWithoutCreatedByInput[] | ChatUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutCreatedByInput | ChatCreateOrConnectWithoutCreatedByInput[]
    createMany?: ChatCreateManyCreatedByInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type UserDetailUncheckedCreateNestedOneWithoutRootUserInput = {
    create?: XOR<UserDetailCreateWithoutRootUserInput, UserDetailUncheckedCreateWithoutRootUserInput>
    connectOrCreate?: UserDetailCreateOrConnectWithoutRootUserInput
    connect?: UserDetailWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ChatUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ChatCreateWithoutCreatedByInput, ChatUncheckedCreateWithoutCreatedByInput> | ChatCreateWithoutCreatedByInput[] | ChatUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutCreatedByInput | ChatCreateOrConnectWithoutCreatedByInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutCreatedByInput | ChatUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ChatCreateManyCreatedByInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutCreatedByInput | ChatUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutCreatedByInput | ChatUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type UserDetailUpdateOneWithoutRootUserNestedInput = {
    create?: XOR<UserDetailCreateWithoutRootUserInput, UserDetailUncheckedCreateWithoutRootUserInput>
    connectOrCreate?: UserDetailCreateOrConnectWithoutRootUserInput
    upsert?: UserDetailUpsertWithoutRootUserInput
    disconnect?: UserDetailWhereInput | boolean
    delete?: UserDetailWhereInput | boolean
    connect?: UserDetailWhereUniqueInput
    update?: XOR<XOR<UserDetailUpdateToOneWithWhereWithoutRootUserInput, UserDetailUpdateWithoutRootUserInput>, UserDetailUncheckedUpdateWithoutRootUserInput>
  }

  export type ChatUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ChatCreateWithoutCreatedByInput, ChatUncheckedCreateWithoutCreatedByInput> | ChatCreateWithoutCreatedByInput[] | ChatUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutCreatedByInput | ChatCreateOrConnectWithoutCreatedByInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutCreatedByInput | ChatUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ChatCreateManyCreatedByInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutCreatedByInput | ChatUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutCreatedByInput | ChatUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type UserDetailUncheckedUpdateOneWithoutRootUserNestedInput = {
    create?: XOR<UserDetailCreateWithoutRootUserInput, UserDetailUncheckedCreateWithoutRootUserInput>
    connectOrCreate?: UserDetailCreateOrConnectWithoutRootUserInput
    upsert?: UserDetailUpsertWithoutRootUserInput
    disconnect?: UserDetailWhereInput | boolean
    delete?: UserDetailWhereInput | boolean
    connect?: UserDetailWhereUniqueInput
    update?: XOR<XOR<UserDetailUpdateToOneWithWhereWithoutRootUserInput, UserDetailUpdateWithoutRootUserInput>, UserDetailUncheckedUpdateWithoutRootUserInput>
  }

  export type UserCreateNestedOneWithoutHaveChatInput = {
    create?: XOR<UserCreateWithoutHaveChatInput, UserUncheckedCreateWithoutHaveChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutHaveChatInput
    connect?: UserWhereUniqueInput
  }

  export type ChatMessagesCreateNestedManyWithoutRelatedChatInput = {
    create?: XOR<ChatMessagesCreateWithoutRelatedChatInput, ChatMessagesUncheckedCreateWithoutRelatedChatInput> | ChatMessagesCreateWithoutRelatedChatInput[] | ChatMessagesUncheckedCreateWithoutRelatedChatInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutRelatedChatInput | ChatMessagesCreateOrConnectWithoutRelatedChatInput[]
    createMany?: ChatMessagesCreateManyRelatedChatInputEnvelope
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
  }

  export type ChatMessagesUncheckedCreateNestedManyWithoutRelatedChatInput = {
    create?: XOR<ChatMessagesCreateWithoutRelatedChatInput, ChatMessagesUncheckedCreateWithoutRelatedChatInput> | ChatMessagesCreateWithoutRelatedChatInput[] | ChatMessagesUncheckedCreateWithoutRelatedChatInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutRelatedChatInput | ChatMessagesCreateOrConnectWithoutRelatedChatInput[]
    createMany?: ChatMessagesCreateManyRelatedChatInputEnvelope
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutHaveChatNestedInput = {
    create?: XOR<UserCreateWithoutHaveChatInput, UserUncheckedCreateWithoutHaveChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutHaveChatInput
    upsert?: UserUpsertWithoutHaveChatInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHaveChatInput, UserUpdateWithoutHaveChatInput>, UserUncheckedUpdateWithoutHaveChatInput>
  }

  export type ChatMessagesUpdateManyWithoutRelatedChatNestedInput = {
    create?: XOR<ChatMessagesCreateWithoutRelatedChatInput, ChatMessagesUncheckedCreateWithoutRelatedChatInput> | ChatMessagesCreateWithoutRelatedChatInput[] | ChatMessagesUncheckedCreateWithoutRelatedChatInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutRelatedChatInput | ChatMessagesCreateOrConnectWithoutRelatedChatInput[]
    upsert?: ChatMessagesUpsertWithWhereUniqueWithoutRelatedChatInput | ChatMessagesUpsertWithWhereUniqueWithoutRelatedChatInput[]
    createMany?: ChatMessagesCreateManyRelatedChatInputEnvelope
    set?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    disconnect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    delete?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    update?: ChatMessagesUpdateWithWhereUniqueWithoutRelatedChatInput | ChatMessagesUpdateWithWhereUniqueWithoutRelatedChatInput[]
    updateMany?: ChatMessagesUpdateManyWithWhereWithoutRelatedChatInput | ChatMessagesUpdateManyWithWhereWithoutRelatedChatInput[]
    deleteMany?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
  }

  export type ChatMessagesUncheckedUpdateManyWithoutRelatedChatNestedInput = {
    create?: XOR<ChatMessagesCreateWithoutRelatedChatInput, ChatMessagesUncheckedCreateWithoutRelatedChatInput> | ChatMessagesCreateWithoutRelatedChatInput[] | ChatMessagesUncheckedCreateWithoutRelatedChatInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutRelatedChatInput | ChatMessagesCreateOrConnectWithoutRelatedChatInput[]
    upsert?: ChatMessagesUpsertWithWhereUniqueWithoutRelatedChatInput | ChatMessagesUpsertWithWhereUniqueWithoutRelatedChatInput[]
    createMany?: ChatMessagesCreateManyRelatedChatInputEnvelope
    set?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    disconnect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    delete?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    update?: ChatMessagesUpdateWithWhereUniqueWithoutRelatedChatInput | ChatMessagesUpdateWithWhereUniqueWithoutRelatedChatInput[]
    updateMany?: ChatMessagesUpdateManyWithWhereWithoutRelatedChatInput | ChatMessagesUpdateManyWithWhereWithoutRelatedChatInput[]
    deleteMany?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
  }

  export type ChatCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<ChatCreateWithoutChatMessagesInput, ChatUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutChatMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type MessageRoleCreateNestedOneWithoutChatMessageInput = {
    create?: XOR<MessageRoleCreateWithoutChatMessageInput, MessageRoleUncheckedCreateWithoutChatMessageInput>
    connectOrCreate?: MessageRoleCreateOrConnectWithoutChatMessageInput
    connect?: MessageRoleWhereUniqueInput
  }

  export type ChatUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutChatMessagesInput, ChatUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutChatMessagesInput
    upsert?: ChatUpsertWithoutChatMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutChatMessagesInput, ChatUpdateWithoutChatMessagesInput>, ChatUncheckedUpdateWithoutChatMessagesInput>
  }

  export type MessageRoleUpdateOneRequiredWithoutChatMessageNestedInput = {
    create?: XOR<MessageRoleCreateWithoutChatMessageInput, MessageRoleUncheckedCreateWithoutChatMessageInput>
    connectOrCreate?: MessageRoleCreateOrConnectWithoutChatMessageInput
    upsert?: MessageRoleUpsertWithoutChatMessageInput
    connect?: MessageRoleWhereUniqueInput
    update?: XOR<XOR<MessageRoleUpdateToOneWithWhereWithoutChatMessageInput, MessageRoleUpdateWithoutChatMessageInput>, MessageRoleUncheckedUpdateWithoutChatMessageInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChatMessagesCreateNestedManyWithoutMsgRoleInput = {
    create?: XOR<ChatMessagesCreateWithoutMsgRoleInput, ChatMessagesUncheckedCreateWithoutMsgRoleInput> | ChatMessagesCreateWithoutMsgRoleInput[] | ChatMessagesUncheckedCreateWithoutMsgRoleInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutMsgRoleInput | ChatMessagesCreateOrConnectWithoutMsgRoleInput[]
    createMany?: ChatMessagesCreateManyMsgRoleInputEnvelope
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
  }

  export type ChatMessagesUncheckedCreateNestedManyWithoutMsgRoleInput = {
    create?: XOR<ChatMessagesCreateWithoutMsgRoleInput, ChatMessagesUncheckedCreateWithoutMsgRoleInput> | ChatMessagesCreateWithoutMsgRoleInput[] | ChatMessagesUncheckedCreateWithoutMsgRoleInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutMsgRoleInput | ChatMessagesCreateOrConnectWithoutMsgRoleInput[]
    createMany?: ChatMessagesCreateManyMsgRoleInputEnvelope
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
  }

  export type ChatMessagesUpdateManyWithoutMsgRoleNestedInput = {
    create?: XOR<ChatMessagesCreateWithoutMsgRoleInput, ChatMessagesUncheckedCreateWithoutMsgRoleInput> | ChatMessagesCreateWithoutMsgRoleInput[] | ChatMessagesUncheckedCreateWithoutMsgRoleInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutMsgRoleInput | ChatMessagesCreateOrConnectWithoutMsgRoleInput[]
    upsert?: ChatMessagesUpsertWithWhereUniqueWithoutMsgRoleInput | ChatMessagesUpsertWithWhereUniqueWithoutMsgRoleInput[]
    createMany?: ChatMessagesCreateManyMsgRoleInputEnvelope
    set?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    disconnect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    delete?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    update?: ChatMessagesUpdateWithWhereUniqueWithoutMsgRoleInput | ChatMessagesUpdateWithWhereUniqueWithoutMsgRoleInput[]
    updateMany?: ChatMessagesUpdateManyWithWhereWithoutMsgRoleInput | ChatMessagesUpdateManyWithWhereWithoutMsgRoleInput[]
    deleteMany?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
  }

  export type ChatMessagesUncheckedUpdateManyWithoutMsgRoleNestedInput = {
    create?: XOR<ChatMessagesCreateWithoutMsgRoleInput, ChatMessagesUncheckedCreateWithoutMsgRoleInput> | ChatMessagesCreateWithoutMsgRoleInput[] | ChatMessagesUncheckedCreateWithoutMsgRoleInput[]
    connectOrCreate?: ChatMessagesCreateOrConnectWithoutMsgRoleInput | ChatMessagesCreateOrConnectWithoutMsgRoleInput[]
    upsert?: ChatMessagesUpsertWithWhereUniqueWithoutMsgRoleInput | ChatMessagesUpsertWithWhereUniqueWithoutMsgRoleInput[]
    createMany?: ChatMessagesCreateManyMsgRoleInputEnvelope
    set?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    disconnect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    delete?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    connect?: ChatMessagesWhereUniqueInput | ChatMessagesWhereUniqueInput[]
    update?: ChatMessagesUpdateWithWhereUniqueWithoutMsgRoleInput | ChatMessagesUpdateWithWhereUniqueWithoutMsgRoleInput[]
    updateMany?: ChatMessagesUpdateManyWithWhereWithoutMsgRoleInput | ChatMessagesUpdateManyWithWhereWithoutMsgRoleInput[]
    deleteMany?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserCreateWithoutUserDetailInput = {
    id?: string
    isTemporary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    haveChat?: ChatCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutUserDetailInput = {
    id?: string
    isTemporary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    haveChat?: ChatUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutUserDetailInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserDetailInput, UserUncheckedCreateWithoutUserDetailInput>
  }

  export type UserUpsertWithoutUserDetailInput = {
    update: XOR<UserUpdateWithoutUserDetailInput, UserUncheckedUpdateWithoutUserDetailInput>
    create: XOR<UserCreateWithoutUserDetailInput, UserUncheckedCreateWithoutUserDetailInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserDetailInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserDetailInput, UserUncheckedUpdateWithoutUserDetailInput>
  }

  export type UserUpdateWithoutUserDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    isTemporary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    haveChat?: ChatUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUserDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    isTemporary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    haveChat?: ChatUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ChatCreateWithoutCreatedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chatMessages?: ChatMessagesCreateNestedManyWithoutRelatedChatInput
  }

  export type ChatUncheckedCreateWithoutCreatedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chatMessages?: ChatMessagesUncheckedCreateNestedManyWithoutRelatedChatInput
  }

  export type ChatCreateOrConnectWithoutCreatedByInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutCreatedByInput, ChatUncheckedCreateWithoutCreatedByInput>
  }

  export type ChatCreateManyCreatedByInputEnvelope = {
    data: ChatCreateManyCreatedByInput | ChatCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type UserDetailCreateWithoutRootUserInput = {
    userName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserDetailUncheckedCreateWithoutRootUserInput = {
    userName: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserDetailCreateOrConnectWithoutRootUserInput = {
    where: UserDetailWhereUniqueInput
    create: XOR<UserDetailCreateWithoutRootUserInput, UserDetailUncheckedCreateWithoutRootUserInput>
  }

  export type ChatUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutCreatedByInput, ChatUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ChatCreateWithoutCreatedByInput, ChatUncheckedCreateWithoutCreatedByInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutCreatedByInput, ChatUncheckedUpdateWithoutCreatedByInput>
  }

  export type ChatUpdateManyWithWhereWithoutCreatedByInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: StringFilter<"Chat"> | string
    userId?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
  }

  export type UserDetailUpsertWithoutRootUserInput = {
    update: XOR<UserDetailUpdateWithoutRootUserInput, UserDetailUncheckedUpdateWithoutRootUserInput>
    create: XOR<UserDetailCreateWithoutRootUserInput, UserDetailUncheckedCreateWithoutRootUserInput>
    where?: UserDetailWhereInput
  }

  export type UserDetailUpdateToOneWithWhereWithoutRootUserInput = {
    where?: UserDetailWhereInput
    data: XOR<UserDetailUpdateWithoutRootUserInput, UserDetailUncheckedUpdateWithoutRootUserInput>
  }

  export type UserDetailUpdateWithoutRootUserInput = {
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDetailUncheckedUpdateWithoutRootUserInput = {
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutHaveChatInput = {
    id?: string
    isTemporary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userDetail?: UserDetailCreateNestedOneWithoutRootUserInput
  }

  export type UserUncheckedCreateWithoutHaveChatInput = {
    id?: string
    isTemporary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userDetail?: UserDetailUncheckedCreateNestedOneWithoutRootUserInput
  }

  export type UserCreateOrConnectWithoutHaveChatInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHaveChatInput, UserUncheckedCreateWithoutHaveChatInput>
  }

  export type ChatMessagesCreateWithoutRelatedChatInput = {
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    msgRole: MessageRoleCreateNestedOneWithoutChatMessageInput
  }

  export type ChatMessagesUncheckedCreateWithoutRelatedChatInput = {
    id?: number
    messageRoleId: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessagesCreateOrConnectWithoutRelatedChatInput = {
    where: ChatMessagesWhereUniqueInput
    create: XOR<ChatMessagesCreateWithoutRelatedChatInput, ChatMessagesUncheckedCreateWithoutRelatedChatInput>
  }

  export type ChatMessagesCreateManyRelatedChatInputEnvelope = {
    data: ChatMessagesCreateManyRelatedChatInput | ChatMessagesCreateManyRelatedChatInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutHaveChatInput = {
    update: XOR<UserUpdateWithoutHaveChatInput, UserUncheckedUpdateWithoutHaveChatInput>
    create: XOR<UserCreateWithoutHaveChatInput, UserUncheckedCreateWithoutHaveChatInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHaveChatInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHaveChatInput, UserUncheckedUpdateWithoutHaveChatInput>
  }

  export type UserUpdateWithoutHaveChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    isTemporary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userDetail?: UserDetailUpdateOneWithoutRootUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHaveChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    isTemporary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userDetail?: UserDetailUncheckedUpdateOneWithoutRootUserNestedInput
  }

  export type ChatMessagesUpsertWithWhereUniqueWithoutRelatedChatInput = {
    where: ChatMessagesWhereUniqueInput
    update: XOR<ChatMessagesUpdateWithoutRelatedChatInput, ChatMessagesUncheckedUpdateWithoutRelatedChatInput>
    create: XOR<ChatMessagesCreateWithoutRelatedChatInput, ChatMessagesUncheckedCreateWithoutRelatedChatInput>
  }

  export type ChatMessagesUpdateWithWhereUniqueWithoutRelatedChatInput = {
    where: ChatMessagesWhereUniqueInput
    data: XOR<ChatMessagesUpdateWithoutRelatedChatInput, ChatMessagesUncheckedUpdateWithoutRelatedChatInput>
  }

  export type ChatMessagesUpdateManyWithWhereWithoutRelatedChatInput = {
    where: ChatMessagesScalarWhereInput
    data: XOR<ChatMessagesUpdateManyMutationInput, ChatMessagesUncheckedUpdateManyWithoutRelatedChatInput>
  }

  export type ChatMessagesScalarWhereInput = {
    AND?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
    OR?: ChatMessagesScalarWhereInput[]
    NOT?: ChatMessagesScalarWhereInput | ChatMessagesScalarWhereInput[]
    id?: IntFilter<"ChatMessages"> | number
    chatId?: StringFilter<"ChatMessages"> | string
    messageRoleId?: IntFilter<"ChatMessages"> | number
    message?: StringFilter<"ChatMessages"> | string
    createdAt?: DateTimeFilter<"ChatMessages"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessages"> | Date | string
  }

  export type ChatCreateWithoutChatMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutHaveChatInput
  }

  export type ChatUncheckedCreateWithoutChatMessagesInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatCreateOrConnectWithoutChatMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutChatMessagesInput, ChatUncheckedCreateWithoutChatMessagesInput>
  }

  export type MessageRoleCreateWithoutChatMessageInput = {
    role: string
  }

  export type MessageRoleUncheckedCreateWithoutChatMessageInput = {
    id?: number
    role: string
  }

  export type MessageRoleCreateOrConnectWithoutChatMessageInput = {
    where: MessageRoleWhereUniqueInput
    create: XOR<MessageRoleCreateWithoutChatMessageInput, MessageRoleUncheckedCreateWithoutChatMessageInput>
  }

  export type ChatUpsertWithoutChatMessagesInput = {
    update: XOR<ChatUpdateWithoutChatMessagesInput, ChatUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<ChatCreateWithoutChatMessagesInput, ChatUncheckedCreateWithoutChatMessagesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutChatMessagesInput, ChatUncheckedUpdateWithoutChatMessagesInput>
  }

  export type ChatUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutHaveChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutChatMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageRoleUpsertWithoutChatMessageInput = {
    update: XOR<MessageRoleUpdateWithoutChatMessageInput, MessageRoleUncheckedUpdateWithoutChatMessageInput>
    create: XOR<MessageRoleCreateWithoutChatMessageInput, MessageRoleUncheckedCreateWithoutChatMessageInput>
    where?: MessageRoleWhereInput
  }

  export type MessageRoleUpdateToOneWithWhereWithoutChatMessageInput = {
    where?: MessageRoleWhereInput
    data: XOR<MessageRoleUpdateWithoutChatMessageInput, MessageRoleUncheckedUpdateWithoutChatMessageInput>
  }

  export type MessageRoleUpdateWithoutChatMessageInput = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type MessageRoleUncheckedUpdateWithoutChatMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessagesCreateWithoutMsgRoleInput = {
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    relatedChat: ChatCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessagesUncheckedCreateWithoutMsgRoleInput = {
    id?: number
    chatId: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessagesCreateOrConnectWithoutMsgRoleInput = {
    where: ChatMessagesWhereUniqueInput
    create: XOR<ChatMessagesCreateWithoutMsgRoleInput, ChatMessagesUncheckedCreateWithoutMsgRoleInput>
  }

  export type ChatMessagesCreateManyMsgRoleInputEnvelope = {
    data: ChatMessagesCreateManyMsgRoleInput | ChatMessagesCreateManyMsgRoleInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessagesUpsertWithWhereUniqueWithoutMsgRoleInput = {
    where: ChatMessagesWhereUniqueInput
    update: XOR<ChatMessagesUpdateWithoutMsgRoleInput, ChatMessagesUncheckedUpdateWithoutMsgRoleInput>
    create: XOR<ChatMessagesCreateWithoutMsgRoleInput, ChatMessagesUncheckedCreateWithoutMsgRoleInput>
  }

  export type ChatMessagesUpdateWithWhereUniqueWithoutMsgRoleInput = {
    where: ChatMessagesWhereUniqueInput
    data: XOR<ChatMessagesUpdateWithoutMsgRoleInput, ChatMessagesUncheckedUpdateWithoutMsgRoleInput>
  }

  export type ChatMessagesUpdateManyWithWhereWithoutMsgRoleInput = {
    where: ChatMessagesScalarWhereInput
    data: XOR<ChatMessagesUpdateManyMutationInput, ChatMessagesUncheckedUpdateManyWithoutMsgRoleInput>
  }

  export type ChatCreateManyCreatedByInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMessages?: ChatMessagesUpdateManyWithoutRelatedChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatMessages?: ChatMessagesUncheckedUpdateManyWithoutRelatedChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesCreateManyRelatedChatInput = {
    id?: number
    messageRoleId: number
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessagesUpdateWithoutRelatedChatInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    msgRole?: MessageRoleUpdateOneRequiredWithoutChatMessageNestedInput
  }

  export type ChatMessagesUncheckedUpdateWithoutRelatedChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    messageRoleId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesUncheckedUpdateManyWithoutRelatedChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    messageRoleId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesCreateManyMsgRoleInput = {
    id?: number
    chatId: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessagesUpdateWithoutMsgRoleInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedChat?: ChatUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessagesUncheckedUpdateWithoutMsgRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessagesUncheckedUpdateManyWithoutMsgRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}