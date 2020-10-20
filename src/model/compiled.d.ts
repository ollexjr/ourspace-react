import * as $protobuf from "protobufjs";
/** Properties of a User. */
export interface IUser {

    /** User rId */
    rId?: (number|null);

    /** User username */
    username?: (string|null);

    /** User email */
    email?: (string|null);

    /** User avatar */
    avatar?: (string|null);
}

/** Internal user reference * */
export class User implements IUser {

    /**
     * Constructs a new User.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUser);

    /** User rId. */
    public rId: number;

    /** User username. */
    public username: string;

    /** User email. */
    public email: string;

    /** User avatar. */
    public avatar: string;

    /**
     * Creates a new User instance using the specified properties.
     * @param [properties] Properties to set
     * @returns User instance
     */
    public static create(properties?: IUser): User;

    /**
     * Encodes the specified User message. Does not implicitly {@link User.verify|verify} messages.
     * @param message User message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified User message, length delimited. Does not implicitly {@link User.verify|verify} messages.
     * @param message User message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a User message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): User;

    /**
     * Decodes a User message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): User;

    /**
     * Verifies a User message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a User message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns User
     */
    public static fromObject(object: { [k: string]: any }): User;

    /**
     * Creates a plain object from a User message. Also converts values to other types if specified.
     * @param message User
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: User, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this User to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserRef. */
export interface IUserRef {

    /** UserRef username */
    username?: (string|null);

    /** UserRef avatar */
    avatar?: (string|null);
}

/** Represents a UserRef. */
export class UserRef implements IUserRef {

    /**
     * Constructs a new UserRef.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserRef);

    /** UserRef username. */
    public username: string;

    /** UserRef avatar. */
    public avatar: string;

    /**
     * Creates a new UserRef instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserRef instance
     */
    public static create(properties?: IUserRef): UserRef;

    /**
     * Encodes the specified UserRef message. Does not implicitly {@link UserRef.verify|verify} messages.
     * @param message UserRef message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserRef, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserRef message, length delimited. Does not implicitly {@link UserRef.verify|verify} messages.
     * @param message UserRef message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserRef, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserRef message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserRef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserRef;

    /**
     * Decodes a UserRef message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserRef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserRef;

    /**
     * Verifies a UserRef message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserRef message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserRef
     */
    public static fromObject(object: { [k: string]: any }): UserRef;

    /**
     * Creates a plain object from a UserRef message. Also converts values to other types if specified.
     * @param message UserRef
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserRef, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserRef to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AccountState. */
export interface IAccountState {

    /** AccountState subscriptions */
    subscriptions?: (IBoardSubscription[]|null);

    /** AccountState karma */
    karma?: (number|null);

    /** AccountState upvotes */
    upvotes?: (number|null);

    /** AccountState downvotes */
    downvotes?: (number|null);
}

/** Represents an AccountState. */
export class AccountState implements IAccountState {

    /**
     * Constructs a new AccountState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAccountState);

    /** AccountState subscriptions. */
    public subscriptions: IBoardSubscription[];

    /** AccountState karma. */
    public karma: number;

    /** AccountState upvotes. */
    public upvotes: number;

    /** AccountState downvotes. */
    public downvotes: number;

    /**
     * Creates a new AccountState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AccountState instance
     */
    public static create(properties?: IAccountState): AccountState;

    /**
     * Encodes the specified AccountState message. Does not implicitly {@link AccountState.verify|verify} messages.
     * @param message AccountState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAccountState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AccountState message, length delimited. Does not implicitly {@link AccountState.verify|verify} messages.
     * @param message AccountState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAccountState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AccountState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AccountState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountState;

    /**
     * Decodes an AccountState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AccountState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountState;

    /**
     * Verifies an AccountState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AccountState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AccountState
     */
    public static fromObject(object: { [k: string]: any }): AccountState;

    /**
     * Creates a plain object from an AccountState message. Also converts values to other types if specified.
     * @param message AccountState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AccountState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AccountState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a LoginRequest. */
export interface ILoginRequest {

    /** LoginRequest username */
    username?: (string|null);

    /** LoginRequest password */
    password?: (string|null);
}

/** Represents a LoginRequest. */
export class LoginRequest implements ILoginRequest {

    /**
     * Constructs a new LoginRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginRequest);

    /** LoginRequest username. */
    public username: string;

    /** LoginRequest password. */
    public password: string;

    /**
     * Creates a new LoginRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginRequest instance
     */
    public static create(properties?: ILoginRequest): LoginRequest;

    /**
     * Encodes the specified LoginRequest message. Does not implicitly {@link LoginRequest.verify|verify} messages.
     * @param message LoginRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link LoginRequest.verify|verify} messages.
     * @param message LoginRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginRequest;

    /**
     * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginRequest;

    /**
     * Verifies a LoginRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoginRequest
     */
    public static fromObject(object: { [k: string]: any }): LoginRequest;

    /**
     * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
     * @param message LoginRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TokenPair. */
export interface ITokenPair {

    /** TokenPair accessToken */
    accessToken?: (string|null);

    /** TokenPair refreshToken */
    refreshToken?: (string|null);
}

/** Represents a TokenPair. */
export class TokenPair implements ITokenPair {

    /**
     * Constructs a new TokenPair.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITokenPair);

    /** TokenPair accessToken. */
    public accessToken: string;

    /** TokenPair refreshToken. */
    public refreshToken: string;

    /**
     * Creates a new TokenPair instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TokenPair instance
     */
    public static create(properties?: ITokenPair): TokenPair;

    /**
     * Encodes the specified TokenPair message. Does not implicitly {@link TokenPair.verify|verify} messages.
     * @param message TokenPair message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITokenPair, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TokenPair message, length delimited. Does not implicitly {@link TokenPair.verify|verify} messages.
     * @param message TokenPair message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITokenPair, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TokenPair message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TokenPair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TokenPair;

    /**
     * Decodes a TokenPair message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TokenPair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TokenPair;

    /**
     * Verifies a TokenPair message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TokenPair message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TokenPair
     */
    public static fromObject(object: { [k: string]: any }): TokenPair;

    /**
     * Creates a plain object from a TokenPair message. Also converts values to other types if specified.
     * @param message TokenPair
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TokenPair, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TokenPair to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a JwtTokenPair. */
export interface IJwtTokenPair {

    /** JwtTokenPair accessToken */
    accessToken?: (string|null);

    /** JwtTokenPair refreshToken */
    refreshToken?: (string|null);
}

/** Represents a JwtTokenPair. */
export class JwtTokenPair implements IJwtTokenPair {

    /**
     * Constructs a new JwtTokenPair.
     * @param [properties] Properties to set
     */
    constructor(properties?: IJwtTokenPair);

    /** JwtTokenPair accessToken. */
    public accessToken: string;

    /** JwtTokenPair refreshToken. */
    public refreshToken: string;

    /**
     * Creates a new JwtTokenPair instance using the specified properties.
     * @param [properties] Properties to set
     * @returns JwtTokenPair instance
     */
    public static create(properties?: IJwtTokenPair): JwtTokenPair;

    /**
     * Encodes the specified JwtTokenPair message. Does not implicitly {@link JwtTokenPair.verify|verify} messages.
     * @param message JwtTokenPair message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IJwtTokenPair, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified JwtTokenPair message, length delimited. Does not implicitly {@link JwtTokenPair.verify|verify} messages.
     * @param message JwtTokenPair message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IJwtTokenPair, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a JwtTokenPair message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns JwtTokenPair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): JwtTokenPair;

    /**
     * Decodes a JwtTokenPair message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns JwtTokenPair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): JwtTokenPair;

    /**
     * Verifies a JwtTokenPair message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a JwtTokenPair message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns JwtTokenPair
     */
    public static fromObject(object: { [k: string]: any }): JwtTokenPair;

    /**
     * Creates a plain object from a JwtTokenPair message. Also converts values to other types if specified.
     * @param message JwtTokenPair
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: JwtTokenPair, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this JwtTokenPair to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a LoginResponse. */
export interface ILoginResponse {

    /** LoginResponse userId */
    userId?: (string|null);

    /** LoginResponse tokens */
    tokens?: (IJwtTokenPair|null);

    /** LoginResponse state */
    state?: (IAccountState|null);
}

/** Represents a LoginResponse. */
export class LoginResponse implements ILoginResponse {

    /**
     * Constructs a new LoginResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILoginResponse);

    /** LoginResponse userId. */
    public userId: string;

    /** LoginResponse tokens. */
    public tokens?: (IJwtTokenPair|null);

    /** LoginResponse state. */
    public state?: (IAccountState|null);

    /**
     * Creates a new LoginResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginResponse instance
     */
    public static create(properties?: ILoginResponse): LoginResponse;

    /**
     * Encodes the specified LoginResponse message. Does not implicitly {@link LoginResponse.verify|verify} messages.
     * @param message LoginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link LoginResponse.verify|verify} messages.
     * @param message LoginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LoginResponse;

    /**
     * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LoginResponse;

    /**
     * Verifies a LoginResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoginResponse
     */
    public static fromObject(object: { [k: string]: any }): LoginResponse;

    /**
     * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
     * @param message LoginResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ThreadCreateRequest. */
export interface IThreadCreateRequest {

    /** ThreadCreateRequest boardId */
    boardId?: (string|null);

    /** ThreadCreateRequest title */
    title?: (string|null);

    /** ThreadCreateRequest link */
    link?: (string|null);

    /** ThreadCreateRequest content */
    content?: (string|null);

    /** ThreadCreateRequest createdAtHint */
    createdAtHint?: (number|null);
}

/** Represents a ThreadCreateRequest. */
export class ThreadCreateRequest implements IThreadCreateRequest {

    /**
     * Constructs a new ThreadCreateRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadCreateRequest);

    /** ThreadCreateRequest boardId. */
    public boardId: string;

    /** ThreadCreateRequest title. */
    public title: string;

    /** ThreadCreateRequest link. */
    public link: string;

    /** ThreadCreateRequest content. */
    public content: string;

    /** ThreadCreateRequest createdAtHint. */
    public createdAtHint: number;

    /**
     * Creates a new ThreadCreateRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadCreateRequest instance
     */
    public static create(properties?: IThreadCreateRequest): ThreadCreateRequest;

    /**
     * Encodes the specified ThreadCreateRequest message. Does not implicitly {@link ThreadCreateRequest.verify|verify} messages.
     * @param message ThreadCreateRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadCreateRequest message, length delimited. Does not implicitly {@link ThreadCreateRequest.verify|verify} messages.
     * @param message ThreadCreateRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadCreateRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadCreateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadCreateRequest;

    /**
     * Decodes a ThreadCreateRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadCreateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadCreateRequest;

    /**
     * Verifies a ThreadCreateRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadCreateRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadCreateRequest
     */
    public static fromObject(object: { [k: string]: any }): ThreadCreateRequest;

    /**
     * Creates a plain object from a ThreadCreateRequest message. Also converts values to other types if specified.
     * @param message ThreadCreateRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadCreateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadCreateRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ThreadCreateResponse. */
export interface IThreadCreateResponse {

    /** ThreadCreateResponse threadId */
    threadId?: (string|null);
}

/** Represents a ThreadCreateResponse. */
export class ThreadCreateResponse implements IThreadCreateResponse {

    /**
     * Constructs a new ThreadCreateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadCreateResponse);

    /** ThreadCreateResponse threadId. */
    public threadId: string;

    /**
     * Creates a new ThreadCreateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadCreateResponse instance
     */
    public static create(properties?: IThreadCreateResponse): ThreadCreateResponse;

    /**
     * Encodes the specified ThreadCreateResponse message. Does not implicitly {@link ThreadCreateResponse.verify|verify} messages.
     * @param message ThreadCreateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadCreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadCreateResponse message, length delimited. Does not implicitly {@link ThreadCreateResponse.verify|verify} messages.
     * @param message ThreadCreateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadCreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadCreateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadCreateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadCreateResponse;

    /**
     * Decodes a ThreadCreateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadCreateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadCreateResponse;

    /**
     * Verifies a ThreadCreateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadCreateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadCreateResponse
     */
    public static fromObject(object: { [k: string]: any }): ThreadCreateResponse;

    /**
     * Creates a plain object from a ThreadCreateResponse message. Also converts values to other types if specified.
     * @param message ThreadCreateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadCreateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadCreateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ThreadWithBoardContext. */
export interface IThreadWithBoardContext {

    /** ThreadWithBoardContext thread */
    thread?: (IThread|null);

    /** ThreadWithBoardContext comments */
    comments?: (ICommentSelectResponse|null);

    /** ThreadWithBoardContext commentsGraph */
    commentsGraph?: (ICommentSelectGraphResponse|null);

    /** ThreadWithBoardContext board */
    board?: (IBoard|null);
}

/** Represents a ThreadWithBoardContext. */
export class ThreadWithBoardContext implements IThreadWithBoardContext {

    /**
     * Constructs a new ThreadWithBoardContext.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadWithBoardContext);

    /** ThreadWithBoardContext thread. */
    public thread?: (IThread|null);

    /** ThreadWithBoardContext comments. */
    public comments?: (ICommentSelectResponse|null);

    /** ThreadWithBoardContext commentsGraph. */
    public commentsGraph?: (ICommentSelectGraphResponse|null);

    /** ThreadWithBoardContext board. */
    public board?: (IBoard|null);

    /**
     * Creates a new ThreadWithBoardContext instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadWithBoardContext instance
     */
    public static create(properties?: IThreadWithBoardContext): ThreadWithBoardContext;

    /**
     * Encodes the specified ThreadWithBoardContext message. Does not implicitly {@link ThreadWithBoardContext.verify|verify} messages.
     * @param message ThreadWithBoardContext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadWithBoardContext, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadWithBoardContext message, length delimited. Does not implicitly {@link ThreadWithBoardContext.verify|verify} messages.
     * @param message ThreadWithBoardContext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadWithBoardContext, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadWithBoardContext message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadWithBoardContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadWithBoardContext;

    /**
     * Decodes a ThreadWithBoardContext message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadWithBoardContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadWithBoardContext;

    /**
     * Verifies a ThreadWithBoardContext message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadWithBoardContext message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadWithBoardContext
     */
    public static fromObject(object: { [k: string]: any }): ThreadWithBoardContext;

    /**
     * Creates a plain object from a ThreadWithBoardContext message. Also converts values to other types if specified.
     * @param message ThreadWithBoardContext
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadWithBoardContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadWithBoardContext to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BanInfo. */
export interface IBanInfo {

    /** BanInfo bannedBy */
    bannedBy?: (string|null);

    /** BanInfo banReason */
    banReason?: (string|null);

    /** BanInfo approvedBy */
    approvedBy?: (string|null);

    /** BanInfo createdAt */
    createdAt?: (string|null);

    /** BanInfo reason */
    reason?: (string|null);
}

/** Represents a BanInfo. */
export class BanInfo implements IBanInfo {

    /**
     * Constructs a new BanInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBanInfo);

    /** BanInfo bannedBy. */
    public bannedBy: string;

    /** BanInfo banReason. */
    public banReason: string;

    /** BanInfo approvedBy. */
    public approvedBy: string;

    /** BanInfo createdAt. */
    public createdAt: string;

    /** BanInfo reason. */
    public reason: string;

    /**
     * Creates a new BanInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BanInfo instance
     */
    public static create(properties?: IBanInfo): BanInfo;

    /**
     * Encodes the specified BanInfo message. Does not implicitly {@link BanInfo.verify|verify} messages.
     * @param message BanInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBanInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BanInfo message, length delimited. Does not implicitly {@link BanInfo.verify|verify} messages.
     * @param message BanInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBanInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BanInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BanInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BanInfo;

    /**
     * Decodes a BanInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BanInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BanInfo;

    /**
     * Verifies a BanInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BanInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BanInfo
     */
    public static fromObject(object: { [k: string]: any }): BanInfo;

    /**
     * Creates a plain object from a BanInfo message. Also converts values to other types if specified.
     * @param message BanInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BanInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BanInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReportInfo. */
export interface IReportInfo {

    /** ReportInfo report */
    report?: (string|null);

    /** ReportInfo user */
    user?: (IUserRef|null);

    /** ReportInfo createdAt */
    createdAt?: (number|null);
}

/** Represents a ReportInfo. */
export class ReportInfo implements IReportInfo {

    /**
     * Constructs a new ReportInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReportInfo);

    /** ReportInfo report. */
    public report: string;

    /** ReportInfo user. */
    public user?: (IUserRef|null);

    /** ReportInfo createdAt. */
    public createdAt: number;

    /**
     * Creates a new ReportInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReportInfo instance
     */
    public static create(properties?: IReportInfo): ReportInfo;

    /**
     * Encodes the specified ReportInfo message. Does not implicitly {@link ReportInfo.verify|verify} messages.
     * @param message ReportInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReportInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReportInfo message, length delimited. Does not implicitly {@link ReportInfo.verify|verify} messages.
     * @param message ReportInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReportInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReportInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReportInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReportInfo;

    /**
     * Decodes a ReportInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReportInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReportInfo;

    /**
     * Verifies a ReportInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReportInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReportInfo
     */
    public static fromObject(object: { [k: string]: any }): ReportInfo;

    /**
     * Creates a plain object from a ReportInfo message. Also converts values to other types if specified.
     * @param message ReportInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReportInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReportInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Vote. */
export interface IVote {

    /** Vote type */
    type?: (number|null);

    /** Vote typeCode */
    typeCode?: (string|null);

    /** Vote amount */
    amount?: (number|null);

    /** Vote createdAt */
    createdAt?: (number|null);
}

/** Represents a Vote. */
export class Vote implements IVote {

    /**
     * Constructs a new Vote.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVote);

    /** Vote type. */
    public type: number;

    /** Vote typeCode. */
    public typeCode: string;

    /** Vote amount. */
    public amount: number;

    /** Vote createdAt. */
    public createdAt: number;

    /**
     * Creates a new Vote instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Vote instance
     */
    public static create(properties?: IVote): Vote;

    /**
     * Encodes the specified Vote message. Does not implicitly {@link Vote.verify|verify} messages.
     * @param message Vote message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVote, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Vote message, length delimited. Does not implicitly {@link Vote.verify|verify} messages.
     * @param message Vote message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVote, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Vote message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Vote
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Vote;

    /**
     * Decodes a Vote message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Vote
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Vote;

    /**
     * Verifies a Vote message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Vote message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Vote
     */
    public static fromObject(object: { [k: string]: any }): Vote;

    /**
     * Creates a plain object from a Vote message. Also converts values to other types if specified.
     * @param message Vote
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Vote, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Vote to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CommentActionedContext. */
export interface ICommentActionedContext {

    /** CommentActionedContext isModerator */
    isModerator?: (boolean|null);

    /** CommentActionedContext vote */
    vote?: (string|null);
}

/** Represents a CommentActionedContext. */
export class CommentActionedContext implements ICommentActionedContext {

    /**
     * Constructs a new CommentActionedContext.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommentActionedContext);

    /** CommentActionedContext isModerator. */
    public isModerator: boolean;

    /** CommentActionedContext vote. */
    public vote: string;

    /**
     * Creates a new CommentActionedContext instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommentActionedContext instance
     */
    public static create(properties?: ICommentActionedContext): CommentActionedContext;

    /**
     * Encodes the specified CommentActionedContext message. Does not implicitly {@link CommentActionedContext.verify|verify} messages.
     * @param message CommentActionedContext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommentActionedContext, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommentActionedContext message, length delimited. Does not implicitly {@link CommentActionedContext.verify|verify} messages.
     * @param message CommentActionedContext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommentActionedContext, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommentActionedContext message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommentActionedContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommentActionedContext;

    /**
     * Decodes a CommentActionedContext message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommentActionedContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommentActionedContext;

    /**
     * Verifies a CommentActionedContext message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommentActionedContext message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommentActionedContext
     */
    public static fromObject(object: { [k: string]: any }): CommentActionedContext;

    /**
     * Creates a plain object from a CommentActionedContext message. Also converts values to other types if specified.
     * @param message CommentActionedContext
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommentActionedContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommentActionedContext to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ThreadActionedContext. */
export interface IThreadActionedContext {

    /** ThreadActionedContext isModerator */
    isModerator?: (boolean|null);

    /** ThreadActionedContext vote */
    vote?: (string|null);
}

/** Represents a ThreadActionedContext. */
export class ThreadActionedContext implements IThreadActionedContext {

    /**
     * Constructs a new ThreadActionedContext.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadActionedContext);

    /** ThreadActionedContext isModerator. */
    public isModerator: boolean;

    /** ThreadActionedContext vote. */
    public vote: string;

    /**
     * Creates a new ThreadActionedContext instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadActionedContext instance
     */
    public static create(properties?: IThreadActionedContext): ThreadActionedContext;

    /**
     * Encodes the specified ThreadActionedContext message. Does not implicitly {@link ThreadActionedContext.verify|verify} messages.
     * @param message ThreadActionedContext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadActionedContext, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadActionedContext message, length delimited. Does not implicitly {@link ThreadActionedContext.verify|verify} messages.
     * @param message ThreadActionedContext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadActionedContext, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadActionedContext message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadActionedContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadActionedContext;

    /**
     * Decodes a ThreadActionedContext message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadActionedContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadActionedContext;

    /**
     * Verifies a ThreadActionedContext message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadActionedContext message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadActionedContext
     */
    public static fromObject(object: { [k: string]: any }): ThreadActionedContext;

    /**
     * Creates a plain object from a ThreadActionedContext message. Also converts values to other types if specified.
     * @param message ThreadActionedContext
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadActionedContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadActionedContext to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CommentEditRequest. */
export interface ICommentEditRequest {

    /** CommentEditRequest commentId */
    commentId?: (string|null);

    /** CommentEditRequest content */
    content?: (string|null);

    /** CommentEditRequest comment */
    comment?: (IComment|null);
}

/** Represents a CommentEditRequest. */
export class CommentEditRequest implements ICommentEditRequest {

    /**
     * Constructs a new CommentEditRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommentEditRequest);

    /** CommentEditRequest commentId. */
    public commentId: string;

    /** CommentEditRequest content. */
    public content: string;

    /** CommentEditRequest comment. */
    public comment?: (IComment|null);

    /**
     * Creates a new CommentEditRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommentEditRequest instance
     */
    public static create(properties?: ICommentEditRequest): CommentEditRequest;

    /**
     * Encodes the specified CommentEditRequest message. Does not implicitly {@link CommentEditRequest.verify|verify} messages.
     * @param message CommentEditRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommentEditRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommentEditRequest message, length delimited. Does not implicitly {@link CommentEditRequest.verify|verify} messages.
     * @param message CommentEditRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommentEditRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommentEditRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommentEditRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommentEditRequest;

    /**
     * Decodes a CommentEditRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommentEditRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommentEditRequest;

    /**
     * Verifies a CommentEditRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommentEditRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommentEditRequest
     */
    public static fromObject(object: { [k: string]: any }): CommentEditRequest;

    /**
     * Creates a plain object from a CommentEditRequest message. Also converts values to other types if specified.
     * @param message CommentEditRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommentEditRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommentEditRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CommentCreateResponse. */
export interface ICommentCreateResponse {

    /** CommentCreateResponse commentId */
    commentId?: (number|null);

    /** CommentCreateResponse commentuId */
    commentuId?: (string|null);
}

/** Represents a CommentCreateResponse. */
export class CommentCreateResponse implements ICommentCreateResponse {

    /**
     * Constructs a new CommentCreateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommentCreateResponse);

    /** CommentCreateResponse commentId. */
    public commentId: number;

    /** CommentCreateResponse commentuId. */
    public commentuId: string;

    /**
     * Creates a new CommentCreateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommentCreateResponse instance
     */
    public static create(properties?: ICommentCreateResponse): CommentCreateResponse;

    /**
     * Encodes the specified CommentCreateResponse message. Does not implicitly {@link CommentCreateResponse.verify|verify} messages.
     * @param message CommentCreateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommentCreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommentCreateResponse message, length delimited. Does not implicitly {@link CommentCreateResponse.verify|verify} messages.
     * @param message CommentCreateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommentCreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommentCreateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommentCreateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommentCreateResponse;

    /**
     * Decodes a CommentCreateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommentCreateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommentCreateResponse;

    /**
     * Verifies a CommentCreateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommentCreateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommentCreateResponse
     */
    public static fromObject(object: { [k: string]: any }): CommentCreateResponse;

    /**
     * Creates a plain object from a CommentCreateResponse message. Also converts values to other types if specified.
     * @param message CommentCreateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommentCreateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommentCreateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CommentCreateRequest. */
export interface ICommentCreateRequest {

    /** CommentCreateRequest threadId */
    threadId?: (string|null);

    /** CommentCreateRequest comment */
    comment?: (IComment|null);
}

/** Represents a CommentCreateRequest. */
export class CommentCreateRequest implements ICommentCreateRequest {

    /**
     * Constructs a new CommentCreateRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommentCreateRequest);

    /** CommentCreateRequest threadId. */
    public threadId: string;

    /** CommentCreateRequest comment. */
    public comment?: (IComment|null);

    /**
     * Creates a new CommentCreateRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommentCreateRequest instance
     */
    public static create(properties?: ICommentCreateRequest): CommentCreateRequest;

    /**
     * Encodes the specified CommentCreateRequest message. Does not implicitly {@link CommentCreateRequest.verify|verify} messages.
     * @param message CommentCreateRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommentCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommentCreateRequest message, length delimited. Does not implicitly {@link CommentCreateRequest.verify|verify} messages.
     * @param message CommentCreateRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommentCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommentCreateRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommentCreateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommentCreateRequest;

    /**
     * Decodes a CommentCreateRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommentCreateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommentCreateRequest;

    /**
     * Verifies a CommentCreateRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommentCreateRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommentCreateRequest
     */
    public static fromObject(object: { [k: string]: any }): CommentCreateRequest;

    /**
     * Creates a plain object from a CommentCreateRequest message. Also converts values to other types if specified.
     * @param message CommentCreateRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommentCreateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommentCreateRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CommentNode. */
export interface ICommentNode {

    /** CommentNode comment */
    comment?: (IComment|null);

    /** CommentNode clipped */
    clipped?: (boolean|null);

    /** CommentNode children */
    children?: ({ [k: string]: ICommentNode }|null);
}

/** Represents a CommentNode. */
export class CommentNode implements ICommentNode {

    /**
     * Constructs a new CommentNode.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommentNode);

    /** CommentNode comment. */
    public comment?: (IComment|null);

    /** CommentNode clipped. */
    public clipped: boolean;

    /** CommentNode children. */
    public children: { [k: string]: ICommentNode };

    /**
     * Creates a new CommentNode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommentNode instance
     */
    public static create(properties?: ICommentNode): CommentNode;

    /**
     * Encodes the specified CommentNode message. Does not implicitly {@link CommentNode.verify|verify} messages.
     * @param message CommentNode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommentNode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommentNode message, length delimited. Does not implicitly {@link CommentNode.verify|verify} messages.
     * @param message CommentNode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommentNode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommentNode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommentNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommentNode;

    /**
     * Decodes a CommentNode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommentNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommentNode;

    /**
     * Verifies a CommentNode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommentNode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommentNode
     */
    public static fromObject(object: { [k: string]: any }): CommentNode;

    /**
     * Creates a plain object from a CommentNode message. Also converts values to other types if specified.
     * @param message CommentNode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommentNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommentNode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CommentSelectResponse. */
export interface ICommentSelectResponse {

    /** CommentSelectResponse data */
    data?: (IComment[]|null);

    /** CommentSelectResponse token */
    token?: (string|null);
}

/** Represents a CommentSelectResponse. */
export class CommentSelectResponse implements ICommentSelectResponse {

    /**
     * Constructs a new CommentSelectResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommentSelectResponse);

    /** CommentSelectResponse data. */
    public data: IComment[];

    /** CommentSelectResponse token. */
    public token: string;

    /**
     * Creates a new CommentSelectResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommentSelectResponse instance
     */
    public static create(properties?: ICommentSelectResponse): CommentSelectResponse;

    /**
     * Encodes the specified CommentSelectResponse message. Does not implicitly {@link CommentSelectResponse.verify|verify} messages.
     * @param message CommentSelectResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommentSelectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommentSelectResponse message, length delimited. Does not implicitly {@link CommentSelectResponse.verify|verify} messages.
     * @param message CommentSelectResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommentSelectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommentSelectResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommentSelectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommentSelectResponse;

    /**
     * Decodes a CommentSelectResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommentSelectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommentSelectResponse;

    /**
     * Verifies a CommentSelectResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommentSelectResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommentSelectResponse
     */
    public static fromObject(object: { [k: string]: any }): CommentSelectResponse;

    /**
     * Creates a plain object from a CommentSelectResponse message. Also converts values to other types if specified.
     * @param message CommentSelectResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommentSelectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommentSelectResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CommentSelectGraphResponse. */
export interface ICommentSelectGraphResponse {

    /** CommentSelectGraphResponse data */
    data?: ({ [k: string]: ICommentNode }|null);

    /** CommentSelectGraphResponse token */
    token?: (string|null);
}

/** Represents a CommentSelectGraphResponse. */
export class CommentSelectGraphResponse implements ICommentSelectGraphResponse {

    /**
     * Constructs a new CommentSelectGraphResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommentSelectGraphResponse);

    /** CommentSelectGraphResponse data. */
    public data: { [k: string]: ICommentNode };

    /** CommentSelectGraphResponse token. */
    public token: string;

    /**
     * Creates a new CommentSelectGraphResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommentSelectGraphResponse instance
     */
    public static create(properties?: ICommentSelectGraphResponse): CommentSelectGraphResponse;

    /**
     * Encodes the specified CommentSelectGraphResponse message. Does not implicitly {@link CommentSelectGraphResponse.verify|verify} messages.
     * @param message CommentSelectGraphResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommentSelectGraphResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommentSelectGraphResponse message, length delimited. Does not implicitly {@link CommentSelectGraphResponse.verify|verify} messages.
     * @param message CommentSelectGraphResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommentSelectGraphResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommentSelectGraphResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommentSelectGraphResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommentSelectGraphResponse;

    /**
     * Decodes a CommentSelectGraphResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommentSelectGraphResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommentSelectGraphResponse;

    /**
     * Verifies a CommentSelectGraphResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommentSelectGraphResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommentSelectGraphResponse
     */
    public static fromObject(object: { [k: string]: any }): CommentSelectGraphResponse;

    /**
     * Creates a plain object from a CommentSelectGraphResponse message. Also converts values to other types if specified.
     * @param message CommentSelectGraphResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommentSelectGraphResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommentSelectGraphResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CommentSelectHistoryResponse. */
export interface ICommentSelectHistoryResponse {

    /** CommentSelectHistoryResponse data */
    data?: (IComment[]|null);

    /** CommentSelectHistoryResponse token */
    token?: (string|null);
}

/** Represents a CommentSelectHistoryResponse. */
export class CommentSelectHistoryResponse implements ICommentSelectHistoryResponse {

    /**
     * Constructs a new CommentSelectHistoryResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommentSelectHistoryResponse);

    /** CommentSelectHistoryResponse data. */
    public data: IComment[];

    /** CommentSelectHistoryResponse token. */
    public token: string;

    /**
     * Creates a new CommentSelectHistoryResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommentSelectHistoryResponse instance
     */
    public static create(properties?: ICommentSelectHistoryResponse): CommentSelectHistoryResponse;

    /**
     * Encodes the specified CommentSelectHistoryResponse message. Does not implicitly {@link CommentSelectHistoryResponse.verify|verify} messages.
     * @param message CommentSelectHistoryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommentSelectHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommentSelectHistoryResponse message, length delimited. Does not implicitly {@link CommentSelectHistoryResponse.verify|verify} messages.
     * @param message CommentSelectHistoryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommentSelectHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommentSelectHistoryResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommentSelectHistoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommentSelectHistoryResponse;

    /**
     * Decodes a CommentSelectHistoryResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommentSelectHistoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommentSelectHistoryResponse;

    /**
     * Verifies a CommentSelectHistoryResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommentSelectHistoryResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommentSelectHistoryResponse
     */
    public static fromObject(object: { [k: string]: any }): CommentSelectHistoryResponse;

    /**
     * Creates a plain object from a CommentSelectHistoryResponse message. Also converts values to other types if specified.
     * @param message CommentSelectHistoryResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommentSelectHistoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommentSelectHistoryResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Comment. */
export interface IComment {

    /** Comment uId */
    uId?: (string|null);

    /** Comment parentId */
    parentId?: (string|null);

    /** Comment user */
    user?: (ICommunityUserRef|null);

    /** Comment content */
    content?: (string|null);

    /** Comment createdAt */
    createdAt?: (number|null);

    /** Comment commentEdits */
    commentEdits?: (IComment[]|null);

    /** Comment mod */
    mod?: (IBanInfo[]|null);

    /** Comment votes */
    votes?: ({ [k: string]: number }|null);

    /** Comment me */
    me?: (ICommentActionedContext|null);

    /** Comment unhandledReports */
    unhandledReports?: (number|null);

    /** Comment reports */
    reports?: (number|null);

    /** Comment depth */
    depth?: (number|null);
}

/** Represents a Comment. */
export class Comment implements IComment {

    /**
     * Constructs a new Comment.
     * @param [properties] Properties to set
     */
    constructor(properties?: IComment);

    /** Comment uId. */
    public uId: string;

    /** Comment parentId. */
    public parentId: string;

    /** Comment user. */
    public user?: (ICommunityUserRef|null);

    /** Comment content. */
    public content: string;

    /** Comment createdAt. */
    public createdAt: number;

    /** Comment commentEdits. */
    public commentEdits: IComment[];

    /** Comment mod. */
    public mod: IBanInfo[];

    /** Comment votes. */
    public votes: { [k: string]: number };

    /** Comment me. */
    public me?: (ICommentActionedContext|null);

    /** Comment unhandledReports. */
    public unhandledReports: number;

    /** Comment reports. */
    public reports: number;

    /** Comment depth. */
    public depth: number;

    /**
     * Creates a new Comment instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Comment instance
     */
    public static create(properties?: IComment): Comment;

    /**
     * Encodes the specified Comment message. Does not implicitly {@link Comment.verify|verify} messages.
     * @param message Comment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IComment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Comment message, length delimited. Does not implicitly {@link Comment.verify|verify} messages.
     * @param message Comment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IComment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Comment message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Comment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Comment;

    /**
     * Decodes a Comment message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Comment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Comment;

    /**
     * Verifies a Comment message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Comment message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Comment
     */
    public static fromObject(object: { [k: string]: any }): Comment;

    /**
     * Creates a plain object from a Comment message. Also converts values to other types if specified.
     * @param message Comment
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Comment, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Comment to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CommentSelectFilters. */
export interface ICommentSelectFilters {

    /** CommentSelectFilters rankMethod */
    rankMethod?: (CommentSelectFilters.Method|null);

    /** CommentSelectFilters sortDirection */
    sortDirection?: (CommentSelectFilters.SortDirection|null);

    /** CommentSelectFilters parentId */
    parentId?: (string|null);

    /** CommentSelectFilters token */
    token?: (string|null);
}

/** Represents a CommentSelectFilters. */
export class CommentSelectFilters implements ICommentSelectFilters {

    /**
     * Constructs a new CommentSelectFilters.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommentSelectFilters);

    /** CommentSelectFilters rankMethod. */
    public rankMethod: CommentSelectFilters.Method;

    /** CommentSelectFilters sortDirection. */
    public sortDirection: CommentSelectFilters.SortDirection;

    /** CommentSelectFilters parentId. */
    public parentId: string;

    /** CommentSelectFilters token. */
    public token: string;

    /**
     * Creates a new CommentSelectFilters instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommentSelectFilters instance
     */
    public static create(properties?: ICommentSelectFilters): CommentSelectFilters;

    /**
     * Encodes the specified CommentSelectFilters message. Does not implicitly {@link CommentSelectFilters.verify|verify} messages.
     * @param message CommentSelectFilters message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommentSelectFilters, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommentSelectFilters message, length delimited. Does not implicitly {@link CommentSelectFilters.verify|verify} messages.
     * @param message CommentSelectFilters message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommentSelectFilters, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommentSelectFilters message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommentSelectFilters
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommentSelectFilters;

    /**
     * Decodes a CommentSelectFilters message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommentSelectFilters
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommentSelectFilters;

    /**
     * Verifies a CommentSelectFilters message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommentSelectFilters message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommentSelectFilters
     */
    public static fromObject(object: { [k: string]: any }): CommentSelectFilters;

    /**
     * Creates a plain object from a CommentSelectFilters message. Also converts values to other types if specified.
     * @param message CommentSelectFilters
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommentSelectFilters, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommentSelectFilters to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace CommentSelectFilters {

    /** Method enum. */
    enum Method {
        BEST = 0,
        CONTROVERSIAL = 1,
        DATE = 2
    }

    /** SortDirection enum. */
    enum SortDirection {
        DESC = 0,
        ASC = 1
    }
}

/** Properties of a ReportsSelectResponse. */
export interface IReportsSelectResponse {

    /** ReportsSelectResponse reports */
    reports?: (IReportInfo[]|null);

    /** ReportsSelectResponse token */
    token?: (string|null);
}

/** Represents a ReportsSelectResponse. */
export class ReportsSelectResponse implements IReportsSelectResponse {

    /**
     * Constructs a new ReportsSelectResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReportsSelectResponse);

    /** ReportsSelectResponse reports. */
    public reports: IReportInfo[];

    /** ReportsSelectResponse token. */
    public token: string;

    /**
     * Creates a new ReportsSelectResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReportsSelectResponse instance
     */
    public static create(properties?: IReportsSelectResponse): ReportsSelectResponse;

    /**
     * Encodes the specified ReportsSelectResponse message. Does not implicitly {@link ReportsSelectResponse.verify|verify} messages.
     * @param message ReportsSelectResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReportsSelectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReportsSelectResponse message, length delimited. Does not implicitly {@link ReportsSelectResponse.verify|verify} messages.
     * @param message ReportsSelectResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReportsSelectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReportsSelectResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReportsSelectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReportsSelectResponse;

    /**
     * Decodes a ReportsSelectResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReportsSelectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReportsSelectResponse;

    /**
     * Verifies a ReportsSelectResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReportsSelectResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReportsSelectResponse
     */
    public static fromObject(object: { [k: string]: any }): ReportsSelectResponse;

    /**
     * Creates a plain object from a ReportsSelectResponse message. Also converts values to other types if specified.
     * @param message ReportsSelectResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReportsSelectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReportsSelectResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CommunitySelectRequest. */
export interface ICommunitySelectRequest {

    /** CommunitySelectRequest query */
    query?: (string|null);

    /** CommunitySelectRequest limit */
    limit?: (number|null);
}

/** Represents a CommunitySelectRequest. */
export class CommunitySelectRequest implements ICommunitySelectRequest {

    /**
     * Constructs a new CommunitySelectRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommunitySelectRequest);

    /** CommunitySelectRequest query. */
    public query: string;

    /** CommunitySelectRequest limit. */
    public limit: number;

    /**
     * Creates a new CommunitySelectRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommunitySelectRequest instance
     */
    public static create(properties?: ICommunitySelectRequest): CommunitySelectRequest;

    /**
     * Encodes the specified CommunitySelectRequest message. Does not implicitly {@link CommunitySelectRequest.verify|verify} messages.
     * @param message CommunitySelectRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommunitySelectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommunitySelectRequest message, length delimited. Does not implicitly {@link CommunitySelectRequest.verify|verify} messages.
     * @param message CommunitySelectRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommunitySelectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommunitySelectRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommunitySelectRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommunitySelectRequest;

    /**
     * Decodes a CommunitySelectRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommunitySelectRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommunitySelectRequest;

    /**
     * Verifies a CommunitySelectRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommunitySelectRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommunitySelectRequest
     */
    public static fromObject(object: { [k: string]: any }): CommunitySelectRequest;

    /**
     * Creates a plain object from a CommunitySelectRequest message. Also converts values to other types if specified.
     * @param message CommunitySelectRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommunitySelectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommunitySelectRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CommunitySelectResponse. */
export interface ICommunitySelectResponse {

    /** CommunitySelectResponse data */
    data?: (IBoard[]|null);

    /** CommunitySelectResponse token */
    token?: (string|null);
}

/** Represents a CommunitySelectResponse. */
export class CommunitySelectResponse implements ICommunitySelectResponse {

    /**
     * Constructs a new CommunitySelectResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommunitySelectResponse);

    /** CommunitySelectResponse data. */
    public data: IBoard[];

    /** CommunitySelectResponse token. */
    public token: string;

    /**
     * Creates a new CommunitySelectResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommunitySelectResponse instance
     */
    public static create(properties?: ICommunitySelectResponse): CommunitySelectResponse;

    /**
     * Encodes the specified CommunitySelectResponse message. Does not implicitly {@link CommunitySelectResponse.verify|verify} messages.
     * @param message CommunitySelectResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommunitySelectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommunitySelectResponse message, length delimited. Does not implicitly {@link CommunitySelectResponse.verify|verify} messages.
     * @param message CommunitySelectResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommunitySelectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommunitySelectResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommunitySelectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommunitySelectResponse;

    /**
     * Decodes a CommunitySelectResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommunitySelectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommunitySelectResponse;

    /**
     * Verifies a CommunitySelectResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommunitySelectResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommunitySelectResponse
     */
    public static fromObject(object: { [k: string]: any }): CommunitySelectResponse;

    /**
     * Creates a plain object from a CommunitySelectResponse message. Also converts values to other types if specified.
     * @param message CommunitySelectResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommunitySelectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommunitySelectResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BoardSubscription. */
export interface IBoardSubscription {

    /** BoardSubscription boardId */
    boardId?: (string|null);

    /** BoardSubscription isMod */
    isMod?: (boolean|null);

    /** BoardSubscription isOwner */
    isOwner?: (boolean|null);

    /** BoardSubscription isBanned */
    isBanned?: (string|null);

    /** BoardSubscription members */
    members?: (number|null);

    /** BoardSubscription icon */
    icon?: (string|null);

    /** BoardSubscription createdAt */
    createdAt?: (number|null);
}

/** Represents a BoardSubscription. */
export class BoardSubscription implements IBoardSubscription {

    /**
     * Constructs a new BoardSubscription.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBoardSubscription);

    /** BoardSubscription boardId. */
    public boardId: string;

    /** BoardSubscription isMod. */
    public isMod: boolean;

    /** BoardSubscription isOwner. */
    public isOwner: boolean;

    /** BoardSubscription isBanned. */
    public isBanned: string;

    /** BoardSubscription members. */
    public members: number;

    /** BoardSubscription icon. */
    public icon: string;

    /** BoardSubscription createdAt. */
    public createdAt: number;

    /**
     * Creates a new BoardSubscription instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BoardSubscription instance
     */
    public static create(properties?: IBoardSubscription): BoardSubscription;

    /**
     * Encodes the specified BoardSubscription message. Does not implicitly {@link BoardSubscription.verify|verify} messages.
     * @param message BoardSubscription message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBoardSubscription, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BoardSubscription message, length delimited. Does not implicitly {@link BoardSubscription.verify|verify} messages.
     * @param message BoardSubscription message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBoardSubscription, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BoardSubscription message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BoardSubscription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BoardSubscription;

    /**
     * Decodes a BoardSubscription message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BoardSubscription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BoardSubscription;

    /**
     * Verifies a BoardSubscription message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BoardSubscription message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BoardSubscription
     */
    public static fromObject(object: { [k: string]: any }): BoardSubscription;

    /**
     * Creates a plain object from a BoardSubscription message. Also converts values to other types if specified.
     * @param message BoardSubscription
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BoardSubscription, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BoardSubscription to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Board. */
export interface IBoard {

    /** Board uId */
    uId?: (string|null);

    /** Board title */
    title?: (string|null);

    /** Board description */
    description?: (string|null);

    /** Board icon */
    icon?: (string|null);

    /** Board banner */
    banner?: (string|null);

    /** Board members */
    members?: (number|null);

    /** Board posts */
    posts?: (number|null);

    /** Board moderators */
    moderators?: (number|null);

    /** Board preview */
    preview?: (ICommunityUserRef[]|null);

    /** Board votes */
    votes?: (number|null);

    /** Board rules */
    rules?: (string|null);

    /** Board createdAt */
    createdAt?: (number|null);

    /** Board isModerator */
    isModerator?: (boolean|null);

    /** Board isMember */
    isMember?: (boolean|null);

    /** Board lockType */
    lockType?: (number|null);
}

/** Represents a Board. */
export class Board implements IBoard {

    /**
     * Constructs a new Board.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBoard);

    /** Board uId. */
    public uId: string;

    /** Board title. */
    public title: string;

    /** Board description. */
    public description: string;

    /** Board icon. */
    public icon: string;

    /** Board banner. */
    public banner: string;

    /** Board members. */
    public members: number;

    /** Board posts. */
    public posts: number;

    /** Board moderators. */
    public moderators: number;

    /** Board preview. */
    public preview: ICommunityUserRef[];

    /** Board votes. */
    public votes: number;

    /** Board rules. */
    public rules: string;

    /** Board createdAt. */
    public createdAt: number;

    /** Board isModerator. */
    public isModerator: boolean;

    /** Board isMember. */
    public isMember: boolean;

    /** Board lockType. */
    public lockType: number;

    /**
     * Creates a new Board instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Board instance
     */
    public static create(properties?: IBoard): Board;

    /**
     * Encodes the specified Board message. Does not implicitly {@link Board.verify|verify} messages.
     * @param message Board message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBoard, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Board message, length delimited. Does not implicitly {@link Board.verify|verify} messages.
     * @param message Board message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBoard, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Board message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Board
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Board;

    /**
     * Decodes a Board message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Board
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Board;

    /**
     * Verifies a Board message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Board message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Board
     */
    public static fromObject(object: { [k: string]: any }): Board;

    /**
     * Creates a plain object from a Board message. Also converts values to other types if specified.
     * @param message Board
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Board, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Board to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CommunityUserRef. */
export interface ICommunityUserRef {

    /** CommunityUserRef username */
    username?: (string|null);

    /** CommunityUserRef avatar */
    avatar?: (string|null);

    /** CommunityUserRef isAdmin */
    isAdmin?: (boolean|null);

    /** CommunityUserRef isMod */
    isMod?: (boolean|null);

    /** CommunityUserRef flair */
    flair?: (string|null);

    /** CommunityUserRef awards */
    awards?: ({ [k: string]: number }|null);
}

/** Represents a CommunityUserRef. */
export class CommunityUserRef implements ICommunityUserRef {

    /**
     * Constructs a new CommunityUserRef.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommunityUserRef);

    /** CommunityUserRef username. */
    public username: string;

    /** CommunityUserRef avatar. */
    public avatar: string;

    /** CommunityUserRef isAdmin. */
    public isAdmin: boolean;

    /** CommunityUserRef isMod. */
    public isMod: boolean;

    /** CommunityUserRef flair. */
    public flair: string;

    /** CommunityUserRef awards. */
    public awards: { [k: string]: number };

    /**
     * Creates a new CommunityUserRef instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommunityUserRef instance
     */
    public static create(properties?: ICommunityUserRef): CommunityUserRef;

    /**
     * Encodes the specified CommunityUserRef message. Does not implicitly {@link CommunityUserRef.verify|verify} messages.
     * @param message CommunityUserRef message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommunityUserRef, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommunityUserRef message, length delimited. Does not implicitly {@link CommunityUserRef.verify|verify} messages.
     * @param message CommunityUserRef message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommunityUserRef, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommunityUserRef message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommunityUserRef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommunityUserRef;

    /**
     * Decodes a CommunityUserRef message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommunityUserRef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommunityUserRef;

    /**
     * Verifies a CommunityUserRef message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommunityUserRef message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommunityUserRef
     */
    public static fromObject(object: { [k: string]: any }): CommunityUserRef;

    /**
     * Creates a plain object from a CommunityUserRef message. Also converts values to other types if specified.
     * @param message CommunityUserRef
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommunityUserRef, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommunityUserRef to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Thread. */
export interface IThread {

    /** Thread uId */
    uId?: (string|null);

    /** Thread url */
    url?: (string|null);

    /** Thread type */
    type?: (number|null);

    /** Thread title */
    title?: (string|null);

    /** Thread link */
    link?: (string|null);

    /** Thread linkType */
    linkType?: (string|null);

    /** Thread content */
    content?: (string|null);

    /** Thread thumb */
    thumb?: (string|null);

    /** Thread user */
    user?: (ICommunityUserRef|null);

    /** Thread createdAt */
    createdAt?: (number|null);

    /** Thread boardId */
    boardId?: (string|null);

    /** Thread isKicked */
    isKicked?: (boolean|null);

    /** Thread isLocked */
    isLocked?: (boolean|null);

    /** Thread isArchived */
    isArchived?: (boolean|null);

    /** Thread thumbAspectRatio */
    thumbAspectRatio?: (number|null);

    /** Thread location */
    location?: (string|null);

    /** Thread numComments */
    numComments?: (number|null);

    /** Thread lastCommentAt */
    lastCommentAt?: (number|null);

    /** Thread votes */
    votes?: ({ [k: string]: number }|null);

    /** Thread acceptedVotes */
    acceptedVotes?: (string[]|null);

    /** Thread acceptedCommentVotes */
    acceptedCommentVotes?: (string[]|null);

    /** Thread mod */
    mod?: (IBanInfo[]|null);

    /** Thread unhandledReports */
    unhandledReports?: (number|null);

    /** Thread reports */
    reports?: (number|null);

    /** Thread me */
    me?: (IThreadActionedContext|null);
}

/** Represents a Thread. */
export class Thread implements IThread {

    /**
     * Constructs a new Thread.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThread);

    /** Thread uId. */
    public uId: string;

    /** Thread url. */
    public url: string;

    /** Thread type. */
    public type: number;

    /** Thread title. */
    public title: string;

    /** Thread link. */
    public link: string;

    /** Thread linkType. */
    public linkType: string;

    /** Thread content. */
    public content: string;

    /** Thread thumb. */
    public thumb: string;

    /** Thread user. */
    public user?: (ICommunityUserRef|null);

    /** Thread createdAt. */
    public createdAt: number;

    /** Thread boardId. */
    public boardId: string;

    /** Thread isKicked. */
    public isKicked: boolean;

    /** Thread isLocked. */
    public isLocked: boolean;

    /** Thread isArchived. */
    public isArchived: boolean;

    /** Thread thumbAspectRatio. */
    public thumbAspectRatio: number;

    /** Thread location. */
    public location: string;

    /** Thread numComments. */
    public numComments: number;

    /** Thread lastCommentAt. */
    public lastCommentAt: number;

    /** Thread votes. */
    public votes: { [k: string]: number };

    /** Thread acceptedVotes. */
    public acceptedVotes: string[];

    /** Thread acceptedCommentVotes. */
    public acceptedCommentVotes: string[];

    /** Thread mod. */
    public mod: IBanInfo[];

    /** Thread unhandledReports. */
    public unhandledReports: number;

    /** Thread reports. */
    public reports: number;

    /** Thread me. */
    public me?: (IThreadActionedContext|null);

    /**
     * Creates a new Thread instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Thread instance
     */
    public static create(properties?: IThread): Thread;

    /**
     * Encodes the specified Thread message. Does not implicitly {@link Thread.verify|verify} messages.
     * @param message Thread message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThread, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Thread message, length delimited. Does not implicitly {@link Thread.verify|verify} messages.
     * @param message Thread message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThread, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Thread message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Thread
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Thread;

    /**
     * Decodes a Thread message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Thread
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Thread;

    /**
     * Verifies a Thread message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Thread message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Thread
     */
    public static fromObject(object: { [k: string]: any }): Thread;

    /**
     * Creates a plain object from a Thread message. Also converts values to other types if specified.
     * @param message Thread
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Thread, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Thread to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EntityVoteRequest. */
export interface IEntityVoteRequest {

    /** EntityVoteRequest type */
    type?: (string|null);

    /** EntityVoteRequest entityId */
    entityId?: (string|null);

    /** EntityVoteRequest vote */
    vote?: (IVote|null);
}

/** Represents an EntityVoteRequest. */
export class EntityVoteRequest implements IEntityVoteRequest {

    /**
     * Constructs a new EntityVoteRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEntityVoteRequest);

    /** EntityVoteRequest type. */
    public type: string;

    /** EntityVoteRequest entityId. */
    public entityId: string;

    /** EntityVoteRequest vote. */
    public vote?: (IVote|null);

    /**
     * Creates a new EntityVoteRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EntityVoteRequest instance
     */
    public static create(properties?: IEntityVoteRequest): EntityVoteRequest;

    /**
     * Encodes the specified EntityVoteRequest message. Does not implicitly {@link EntityVoteRequest.verify|verify} messages.
     * @param message EntityVoteRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEntityVoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EntityVoteRequest message, length delimited. Does not implicitly {@link EntityVoteRequest.verify|verify} messages.
     * @param message EntityVoteRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEntityVoteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EntityVoteRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EntityVoteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EntityVoteRequest;

    /**
     * Decodes an EntityVoteRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EntityVoteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EntityVoteRequest;

    /**
     * Verifies an EntityVoteRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EntityVoteRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EntityVoteRequest
     */
    public static fromObject(object: { [k: string]: any }): EntityVoteRequest;

    /**
     * Creates a plain object from an EntityVoteRequest message. Also converts values to other types if specified.
     * @param message EntityVoteRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EntityVoteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EntityVoteRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ThreadSelectFilters. */
export interface IThreadSelectFilters {

    /** ThreadSelectFilters rankMethod */
    rankMethod?: (ThreadSelectFilters.Method|null);

    /** ThreadSelectFilters sortDirection */
    sortDirection?: (ThreadSelectFilters.SortDirection|null);

    /** ThreadSelectFilters limit */
    limit?: (number|null);

    /** ThreadSelectFilters query */
    query?: (string|null);

    /** ThreadSelectFilters page */
    page?: (number|null);

    /** ThreadSelectFilters useBoolean */
    useBoolean?: (boolean|null);

    /** ThreadSelectFilters createdStart */
    createdStart?: (number|null);

    /** ThreadSelectFilters createdEnd */
    createdEnd?: (number|null);
}

/** Represents a ThreadSelectFilters. */
export class ThreadSelectFilters implements IThreadSelectFilters {

    /**
     * Constructs a new ThreadSelectFilters.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadSelectFilters);

    /** ThreadSelectFilters rankMethod. */
    public rankMethod: ThreadSelectFilters.Method;

    /** ThreadSelectFilters sortDirection. */
    public sortDirection: ThreadSelectFilters.SortDirection;

    /** ThreadSelectFilters limit. */
    public limit: number;

    /** ThreadSelectFilters query. */
    public query: string;

    /** ThreadSelectFilters page. */
    public page: number;

    /** ThreadSelectFilters useBoolean. */
    public useBoolean: boolean;

    /** ThreadSelectFilters createdStart. */
    public createdStart: number;

    /** ThreadSelectFilters createdEnd. */
    public createdEnd: number;

    /**
     * Creates a new ThreadSelectFilters instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadSelectFilters instance
     */
    public static create(properties?: IThreadSelectFilters): ThreadSelectFilters;

    /**
     * Encodes the specified ThreadSelectFilters message. Does not implicitly {@link ThreadSelectFilters.verify|verify} messages.
     * @param message ThreadSelectFilters message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadSelectFilters, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadSelectFilters message, length delimited. Does not implicitly {@link ThreadSelectFilters.verify|verify} messages.
     * @param message ThreadSelectFilters message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadSelectFilters, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadSelectFilters message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadSelectFilters
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadSelectFilters;

    /**
     * Decodes a ThreadSelectFilters message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadSelectFilters
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadSelectFilters;

    /**
     * Verifies a ThreadSelectFilters message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadSelectFilters message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadSelectFilters
     */
    public static fromObject(object: { [k: string]: any }): ThreadSelectFilters;

    /**
     * Creates a plain object from a ThreadSelectFilters message. Also converts values to other types if specified.
     * @param message ThreadSelectFilters
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadSelectFilters, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadSelectFilters to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ThreadSelectFilters {

    /** ThreadContentFilter enum. */
    enum ThreadContentFilter {
        TITLE = 0,
        CONTENT = 1,
        FLAIR = 2
    }

    /** SortDirection enum. */
    enum SortDirection {
        DESC = 0,
        ASC = 1
    }

    /** ContentWarning enum. */
    enum ContentWarning {
        NORMAL = 0,
        NSFW = 1,
        NSFL = 2
    }

    /** Method enum. */
    enum Method {
        HOT = 0,
        TOP = 1,
        CONTROVERSIAL = 2
    }
}

/** Properties of a ThreadSelectRequest. */
export interface IThreadSelectRequest {

    /** ThreadSelectRequest filters */
    filters?: (IThreadSelectFilters|null);

    /** ThreadSelectRequest boardId */
    boardId?: (string|null);

    /** ThreadSelectRequest token */
    token?: (string|null);

    /** ThreadSelectRequest withContext */
    withContext?: (boolean|null);
}

/** Represents a ThreadSelectRequest. */
export class ThreadSelectRequest implements IThreadSelectRequest {

    /**
     * Constructs a new ThreadSelectRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadSelectRequest);

    /** ThreadSelectRequest filters. */
    public filters?: (IThreadSelectFilters|null);

    /** ThreadSelectRequest boardId. */
    public boardId: string;

    /** ThreadSelectRequest token. */
    public token: string;

    /** ThreadSelectRequest withContext. */
    public withContext: boolean;

    /**
     * Creates a new ThreadSelectRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadSelectRequest instance
     */
    public static create(properties?: IThreadSelectRequest): ThreadSelectRequest;

    /**
     * Encodes the specified ThreadSelectRequest message. Does not implicitly {@link ThreadSelectRequest.verify|verify} messages.
     * @param message ThreadSelectRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadSelectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadSelectRequest message, length delimited. Does not implicitly {@link ThreadSelectRequest.verify|verify} messages.
     * @param message ThreadSelectRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadSelectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadSelectRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadSelectRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadSelectRequest;

    /**
     * Decodes a ThreadSelectRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadSelectRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadSelectRequest;

    /**
     * Verifies a ThreadSelectRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadSelectRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadSelectRequest
     */
    public static fromObject(object: { [k: string]: any }): ThreadSelectRequest;

    /**
     * Creates a plain object from a ThreadSelectRequest message. Also converts values to other types if specified.
     * @param message ThreadSelectRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadSelectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadSelectRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ThreadsSelectResponse. */
export interface IThreadsSelectResponse {

    /** ThreadsSelectResponse data */
    data?: (IThread[]|null);

    /** ThreadsSelectResponse token */
    token?: (string|null);

    /** ThreadsSelectResponse users */
    users?: ({ [k: string]: ICommunityUserRef }|null);
}

/** Represents a ThreadsSelectResponse. */
export class ThreadsSelectResponse implements IThreadsSelectResponse {

    /**
     * Constructs a new ThreadsSelectResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadsSelectResponse);

    /** ThreadsSelectResponse data. */
    public data: IThread[];

    /** ThreadsSelectResponse token. */
    public token: string;

    /** ThreadsSelectResponse users. */
    public users: { [k: string]: ICommunityUserRef };

    /**
     * Creates a new ThreadsSelectResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadsSelectResponse instance
     */
    public static create(properties?: IThreadsSelectResponse): ThreadsSelectResponse;

    /**
     * Encodes the specified ThreadsSelectResponse message. Does not implicitly {@link ThreadsSelectResponse.verify|verify} messages.
     * @param message ThreadsSelectResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadsSelectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadsSelectResponse message, length delimited. Does not implicitly {@link ThreadsSelectResponse.verify|verify} messages.
     * @param message ThreadsSelectResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadsSelectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadsSelectResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadsSelectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadsSelectResponse;

    /**
     * Decodes a ThreadsSelectResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadsSelectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadsSelectResponse;

    /**
     * Verifies a ThreadsSelectResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadsSelectResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadsSelectResponse
     */
    public static fromObject(object: { [k: string]: any }): ThreadsSelectResponse;

    /**
     * Creates a plain object from a ThreadsSelectResponse message. Also converts values to other types if specified.
     * @param message ThreadsSelectResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadsSelectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadsSelectResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ThreadsSelectResponseWithBoardContext. */
export interface IThreadsSelectResponseWithBoardContext {

    /** ThreadsSelectResponseWithBoardContext threads */
    threads?: (IThreadsSelectResponse|null);

    /** ThreadsSelectResponseWithBoardContext board */
    board?: (IBoard|null);
}

/** Represents a ThreadsSelectResponseWithBoardContext. */
export class ThreadsSelectResponseWithBoardContext implements IThreadsSelectResponseWithBoardContext {

    /**
     * Constructs a new ThreadsSelectResponseWithBoardContext.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadsSelectResponseWithBoardContext);

    /** ThreadsSelectResponseWithBoardContext threads. */
    public threads?: (IThreadsSelectResponse|null);

    /** ThreadsSelectResponseWithBoardContext board. */
    public board?: (IBoard|null);

    /**
     * Creates a new ThreadsSelectResponseWithBoardContext instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadsSelectResponseWithBoardContext instance
     */
    public static create(properties?: IThreadsSelectResponseWithBoardContext): ThreadsSelectResponseWithBoardContext;

    /**
     * Encodes the specified ThreadsSelectResponseWithBoardContext message. Does not implicitly {@link ThreadsSelectResponseWithBoardContext.verify|verify} messages.
     * @param message ThreadsSelectResponseWithBoardContext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadsSelectResponseWithBoardContext, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadsSelectResponseWithBoardContext message, length delimited. Does not implicitly {@link ThreadsSelectResponseWithBoardContext.verify|verify} messages.
     * @param message ThreadsSelectResponseWithBoardContext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadsSelectResponseWithBoardContext, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadsSelectResponseWithBoardContext message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadsSelectResponseWithBoardContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadsSelectResponseWithBoardContext;

    /**
     * Decodes a ThreadsSelectResponseWithBoardContext message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadsSelectResponseWithBoardContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadsSelectResponseWithBoardContext;

    /**
     * Verifies a ThreadsSelectResponseWithBoardContext message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadsSelectResponseWithBoardContext message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadsSelectResponseWithBoardContext
     */
    public static fromObject(object: { [k: string]: any }): ThreadsSelectResponseWithBoardContext;

    /**
     * Creates a plain object from a ThreadsSelectResponseWithBoardContext message. Also converts values to other types if specified.
     * @param message ThreadsSelectResponseWithBoardContext
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadsSelectResponseWithBoardContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadsSelectResponseWithBoardContext to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserCreate. */
export interface IUserCreate {

    /** UserCreate username */
    username?: (string|null);

    /** UserCreate email */
    email?: (string|null);

    /** UserCreate key */
    key?: (string|null);

    /** UserCreate acceptEmail */
    acceptEmail?: (boolean|null);

    /** UserCreate subscribeNewsletter */
    subscribeNewsletter?: (boolean|null);
}

/** Represents a UserCreate. */
export class UserCreate implements IUserCreate {

    /**
     * Constructs a new UserCreate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserCreate);

    /** UserCreate username. */
    public username: string;

    /** UserCreate email. */
    public email: string;

    /** UserCreate key. */
    public key: string;

    /** UserCreate acceptEmail. */
    public acceptEmail: boolean;

    /** UserCreate subscribeNewsletter. */
    public subscribeNewsletter: boolean;

    /**
     * Creates a new UserCreate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserCreate instance
     */
    public static create(properties?: IUserCreate): UserCreate;

    /**
     * Encodes the specified UserCreate message. Does not implicitly {@link UserCreate.verify|verify} messages.
     * @param message UserCreate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserCreate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserCreate message, length delimited. Does not implicitly {@link UserCreate.verify|verify} messages.
     * @param message UserCreate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserCreate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserCreate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserCreate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserCreate;

    /**
     * Decodes a UserCreate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserCreate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserCreate;

    /**
     * Verifies a UserCreate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserCreate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserCreate
     */
    public static fromObject(object: { [k: string]: any }): UserCreate;

    /**
     * Creates a plain object from a UserCreate message. Also converts values to other types if specified.
     * @param message UserCreate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserCreate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserCreate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserSubscribedRequest. */
export interface IUserSubscribedRequest {
}

/** Represents a UserSubscribedRequest. */
export class UserSubscribedRequest implements IUserSubscribedRequest {

    /**
     * Constructs a new UserSubscribedRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserSubscribedRequest);

    /**
     * Creates a new UserSubscribedRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserSubscribedRequest instance
     */
    public static create(properties?: IUserSubscribedRequest): UserSubscribedRequest;

    /**
     * Encodes the specified UserSubscribedRequest message. Does not implicitly {@link UserSubscribedRequest.verify|verify} messages.
     * @param message UserSubscribedRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserSubscribedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserSubscribedRequest message, length delimited. Does not implicitly {@link UserSubscribedRequest.verify|verify} messages.
     * @param message UserSubscribedRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserSubscribedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserSubscribedRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserSubscribedRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserSubscribedRequest;

    /**
     * Decodes a UserSubscribedRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserSubscribedRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserSubscribedRequest;

    /**
     * Verifies a UserSubscribedRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserSubscribedRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserSubscribedRequest
     */
    public static fromObject(object: { [k: string]: any }): UserSubscribedRequest;

    /**
     * Creates a plain object from a UserSubscribedRequest message. Also converts values to other types if specified.
     * @param message UserSubscribedRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserSubscribedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserSubscribedRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BlogSubscription. */
export interface IBlogSubscription {
}

/** Represents a BlogSubscription. */
export class BlogSubscription implements IBlogSubscription {

    /**
     * Constructs a new BlogSubscription.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBlogSubscription);

    /**
     * Creates a new BlogSubscription instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BlogSubscription instance
     */
    public static create(properties?: IBlogSubscription): BlogSubscription;

    /**
     * Encodes the specified BlogSubscription message. Does not implicitly {@link BlogSubscription.verify|verify} messages.
     * @param message BlogSubscription message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBlogSubscription, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BlogSubscription message, length delimited. Does not implicitly {@link BlogSubscription.verify|verify} messages.
     * @param message BlogSubscription message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBlogSubscription, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BlogSubscription message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BlogSubscription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BlogSubscription;

    /**
     * Decodes a BlogSubscription message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BlogSubscription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BlogSubscription;

    /**
     * Verifies a BlogSubscription message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BlogSubscription message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BlogSubscription
     */
    public static fromObject(object: { [k: string]: any }): BlogSubscription;

    /**
     * Creates a plain object from a BlogSubscription message. Also converts values to other types if specified.
     * @param message BlogSubscription
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BlogSubscription, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BlogSubscription to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserMod. */
export interface IUserMod {

    /** UserMod boardId */
    boardId?: (string|null);

    /** UserMod createdAt */
    createdAt?: (number|null);
}

/** Represents a UserMod. */
export class UserMod implements IUserMod {

    /**
     * Constructs a new UserMod.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserMod);

    /** UserMod boardId. */
    public boardId: string;

    /** UserMod createdAt. */
    public createdAt: number;

    /**
     * Creates a new UserMod instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserMod instance
     */
    public static create(properties?: IUserMod): UserMod;

    /**
     * Encodes the specified UserMod message. Does not implicitly {@link UserMod.verify|verify} messages.
     * @param message UserMod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserMod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserMod message, length delimited. Does not implicitly {@link UserMod.verify|verify} messages.
     * @param message UserMod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserMod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserMod message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserMod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserMod;

    /**
     * Decodes a UserMod message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserMod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserMod;

    /**
     * Verifies a UserMod message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserMod message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserMod
     */
    public static fromObject(object: { [k: string]: any }): UserMod;

    /**
     * Creates a plain object from a UserMod message. Also converts values to other types if specified.
     * @param message UserMod
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserMod, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserMod to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BoardMod. */
export interface IBoardMod {

    /** BoardMod userId */
    userId?: (string|null);

    /** BoardMod createdAt */
    createdAt?: (number|null);
}

/** Represents a BoardMod. */
export class BoardMod implements IBoardMod {

    /**
     * Constructs a new BoardMod.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBoardMod);

    /** BoardMod userId. */
    public userId: string;

    /** BoardMod createdAt. */
    public createdAt: number;

    /**
     * Creates a new BoardMod instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BoardMod instance
     */
    public static create(properties?: IBoardMod): BoardMod;

    /**
     * Encodes the specified BoardMod message. Does not implicitly {@link BoardMod.verify|verify} messages.
     * @param message BoardMod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBoardMod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BoardMod message, length delimited. Does not implicitly {@link BoardMod.verify|verify} messages.
     * @param message BoardMod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBoardMod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BoardMod message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BoardMod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BoardMod;

    /**
     * Decodes a BoardMod message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BoardMod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BoardMod;

    /**
     * Verifies a BoardMod message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BoardMod message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BoardMod
     */
    public static fromObject(object: { [k: string]: any }): BoardMod;

    /**
     * Creates a plain object from a BoardMod message. Also converts values to other types if specified.
     * @param message BoardMod
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BoardMod, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BoardMod to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BoardCreate. */
export interface IBoardCreate {

    /** BoardCreate name */
    name?: (string|null);
}

/** Represents a BoardCreate. */
export class BoardCreate implements IBoardCreate {

    /**
     * Constructs a new BoardCreate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBoardCreate);

    /** BoardCreate name. */
    public name: string;

    /**
     * Creates a new BoardCreate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BoardCreate instance
     */
    public static create(properties?: IBoardCreate): BoardCreate;

    /**
     * Encodes the specified BoardCreate message. Does not implicitly {@link BoardCreate.verify|verify} messages.
     * @param message BoardCreate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBoardCreate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BoardCreate message, length delimited. Does not implicitly {@link BoardCreate.verify|verify} messages.
     * @param message BoardCreate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBoardCreate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BoardCreate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BoardCreate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BoardCreate;

    /**
     * Decodes a BoardCreate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BoardCreate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BoardCreate;

    /**
     * Verifies a BoardCreate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BoardCreate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BoardCreate
     */
    public static fromObject(object: { [k: string]: any }): BoardCreate;

    /**
     * Creates a plain object from a BoardCreate message. Also converts values to other types if specified.
     * @param message BoardCreate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BoardCreate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BoardCreate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserModerationAction. */
export interface IUserModerationAction {

    /** UserModerationAction endsAt */
    endsAt?: (number|null);
}

/** Represents a UserModerationAction. */
export class UserModerationAction implements IUserModerationAction {

    /**
     * Constructs a new UserModerationAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserModerationAction);

    /** UserModerationAction endsAt. */
    public endsAt: number;

    /**
     * Creates a new UserModerationAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserModerationAction instance
     */
    public static create(properties?: IUserModerationAction): UserModerationAction;

    /**
     * Encodes the specified UserModerationAction message. Does not implicitly {@link UserModerationAction.verify|verify} messages.
     * @param message UserModerationAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserModerationAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserModerationAction message, length delimited. Does not implicitly {@link UserModerationAction.verify|verify} messages.
     * @param message UserModerationAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserModerationAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserModerationAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserModerationAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserModerationAction;

    /**
     * Decodes a UserModerationAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserModerationAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserModerationAction;

    /**
     * Verifies a UserModerationAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserModerationAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserModerationAction
     */
    public static fromObject(object: { [k: string]: any }): UserModerationAction;

    /**
     * Creates a plain object from a UserModerationAction message. Also converts values to other types if specified.
     * @param message UserModerationAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserModerationAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserModerationAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ModerationAction. */
export interface IModerationAction {

    /** ModerationAction action */
    action?: (string|null);

    /** ModerationAction category */
    category?: (number|null);

    /** ModerationAction reason */
    reason?: (string|null);

    /** ModerationAction user */
    user?: (IUserModerationAction|null);

    /** ModerationAction endsAt */
    endsAt?: (number|null);
}

/** Represents a ModerationAction. */
export class ModerationAction implements IModerationAction {

    /**
     * Constructs a new ModerationAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IModerationAction);

    /** ModerationAction action. */
    public action: string;

    /** ModerationAction category. */
    public category: number;

    /** ModerationAction reason. */
    public reason: string;

    /** ModerationAction user. */
    public user?: (IUserModerationAction|null);

    /** ModerationAction endsAt. */
    public endsAt: number;

    /**
     * Creates a new ModerationAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ModerationAction instance
     */
    public static create(properties?: IModerationAction): ModerationAction;

    /**
     * Encodes the specified ModerationAction message. Does not implicitly {@link ModerationAction.verify|verify} messages.
     * @param message ModerationAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IModerationAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ModerationAction message, length delimited. Does not implicitly {@link ModerationAction.verify|verify} messages.
     * @param message ModerationAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IModerationAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ModerationAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ModerationAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ModerationAction;

    /**
     * Decodes a ModerationAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ModerationAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ModerationAction;

    /**
     * Verifies a ModerationAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ModerationAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ModerationAction
     */
    public static fromObject(object: { [k: string]: any }): ModerationAction;

    /**
     * Creates a plain object from a ModerationAction message. Also converts values to other types if specified.
     * @param message ModerationAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ModerationAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ModerationAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ThreadModerationAction. */
export interface IThreadModerationAction {

    /** ThreadModerationAction action */
    action?: (IModerationAction|null);

    /** ThreadModerationAction threadId */
    threadId?: (string|null);
}

/** Represents a ThreadModerationAction. */
export class ThreadModerationAction implements IThreadModerationAction {

    /**
     * Constructs a new ThreadModerationAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadModerationAction);

    /** ThreadModerationAction action. */
    public action?: (IModerationAction|null);

    /** ThreadModerationAction threadId. */
    public threadId: string;

    /**
     * Creates a new ThreadModerationAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadModerationAction instance
     */
    public static create(properties?: IThreadModerationAction): ThreadModerationAction;

    /**
     * Encodes the specified ThreadModerationAction message. Does not implicitly {@link ThreadModerationAction.verify|verify} messages.
     * @param message ThreadModerationAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadModerationAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadModerationAction message, length delimited. Does not implicitly {@link ThreadModerationAction.verify|verify} messages.
     * @param message ThreadModerationAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadModerationAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadModerationAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadModerationAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadModerationAction;

    /**
     * Decodes a ThreadModerationAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadModerationAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadModerationAction;

    /**
     * Verifies a ThreadModerationAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadModerationAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadModerationAction
     */
    public static fromObject(object: { [k: string]: any }): ThreadModerationAction;

    /**
     * Creates a plain object from a ThreadModerationAction message. Also converts values to other types if specified.
     * @param message ThreadModerationAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadModerationAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadModerationAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CommentModerationAction. */
export interface ICommentModerationAction {

    /** CommentModerationAction action */
    action?: (IModerationAction|null);

    /** CommentModerationAction commentId */
    commentId?: (string|null);
}

/** Represents a CommentModerationAction. */
export class CommentModerationAction implements ICommentModerationAction {

    /**
     * Constructs a new CommentModerationAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommentModerationAction);

    /** CommentModerationAction action. */
    public action?: (IModerationAction|null);

    /** CommentModerationAction commentId. */
    public commentId: string;

    /**
     * Creates a new CommentModerationAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommentModerationAction instance
     */
    public static create(properties?: ICommentModerationAction): CommentModerationAction;

    /**
     * Encodes the specified CommentModerationAction message. Does not implicitly {@link CommentModerationAction.verify|verify} messages.
     * @param message CommentModerationAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommentModerationAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommentModerationAction message, length delimited. Does not implicitly {@link CommentModerationAction.verify|verify} messages.
     * @param message CommentModerationAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommentModerationAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommentModerationAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommentModerationAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommentModerationAction;

    /**
     * Decodes a CommentModerationAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommentModerationAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommentModerationAction;

    /**
     * Verifies a CommentModerationAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommentModerationAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommentModerationAction
     */
    public static fromObject(object: { [k: string]: any }): CommentModerationAction;

    /**
     * Creates a plain object from a CommentModerationAction message. Also converts values to other types if specified.
     * @param message CommentModerationAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommentModerationAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommentModerationAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BoardModerationAction. */
export interface IBoardModerationAction {

    /** BoardModerationAction action */
    action?: (IModerationAction|null);

    /** BoardModerationAction boardId */
    boardId?: (string|null);
}

/** Represents a BoardModerationAction. */
export class BoardModerationAction implements IBoardModerationAction {

    /**
     * Constructs a new BoardModerationAction.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBoardModerationAction);

    /** BoardModerationAction action. */
    public action?: (IModerationAction|null);

    /** BoardModerationAction boardId. */
    public boardId: string;

    /**
     * Creates a new BoardModerationAction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BoardModerationAction instance
     */
    public static create(properties?: IBoardModerationAction): BoardModerationAction;

    /**
     * Encodes the specified BoardModerationAction message. Does not implicitly {@link BoardModerationAction.verify|verify} messages.
     * @param message BoardModerationAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBoardModerationAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BoardModerationAction message, length delimited. Does not implicitly {@link BoardModerationAction.verify|verify} messages.
     * @param message BoardModerationAction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBoardModerationAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BoardModerationAction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BoardModerationAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BoardModerationAction;

    /**
     * Decodes a BoardModerationAction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BoardModerationAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BoardModerationAction;

    /**
     * Verifies a BoardModerationAction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BoardModerationAction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BoardModerationAction
     */
    public static fromObject(object: { [k: string]: any }): BoardModerationAction;

    /**
     * Creates a plain object from a BoardModerationAction message. Also converts values to other types if specified.
     * @param message BoardModerationAction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BoardModerationAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BoardModerationAction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserInBoardContext. */
export interface IUserInBoardContext {

    /** UserInBoardContext user */
    user?: (ICommunityUserRef|null);

    /** UserInBoardContext communityOpinion */
    communityOpinion?: (number|null);

    /** UserInBoardContext theirUpvotes */
    theirUpvotes?: (number|null);

    /** UserInBoardContext theirDownvotes */
    theirDownvotes?: (number|null);
}

/** Represents a UserInBoardContext. */
export class UserInBoardContext implements IUserInBoardContext {

    /**
     * Constructs a new UserInBoardContext.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserInBoardContext);

    /** UserInBoardContext user. */
    public user?: (ICommunityUserRef|null);

    /** UserInBoardContext communityOpinion. */
    public communityOpinion: number;

    /** UserInBoardContext theirUpvotes. */
    public theirUpvotes: number;

    /** UserInBoardContext theirDownvotes. */
    public theirDownvotes: number;

    /**
     * Creates a new UserInBoardContext instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserInBoardContext instance
     */
    public static create(properties?: IUserInBoardContext): UserInBoardContext;

    /**
     * Encodes the specified UserInBoardContext message. Does not implicitly {@link UserInBoardContext.verify|verify} messages.
     * @param message UserInBoardContext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserInBoardContext, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserInBoardContext message, length delimited. Does not implicitly {@link UserInBoardContext.verify|verify} messages.
     * @param message UserInBoardContext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserInBoardContext, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserInBoardContext message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserInBoardContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserInBoardContext;

    /**
     * Decodes a UserInBoardContext message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserInBoardContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserInBoardContext;

    /**
     * Verifies a UserInBoardContext message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserInBoardContext message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserInBoardContext
     */
    public static fromObject(object: { [k: string]: any }): UserInBoardContext;

    /**
     * Creates a plain object from a UserInBoardContext message. Also converts values to other types if specified.
     * @param message UserInBoardContext
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserInBoardContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserInBoardContext to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Image. */
export interface IImage {

    /** Image userId */
    userId?: (string|null);

    /** Image uId */
    uId?: (string|null);

    /** Image format */
    format?: (string|null);

    /** Image height */
    height?: (number|null);

    /** Image width */
    width?: (number|null);

    /** Image size */
    size?: (number|null);

    /** Image length */
    length?: (number|null);

    /** Image createdAt */
    createdAt?: (number|null);
}

/** Represents an Image. */
export class Image implements IImage {

    /**
     * Constructs a new Image.
     * @param [properties] Properties to set
     */
    constructor(properties?: IImage);

    /** Image userId. */
    public userId: string;

    /** Image uId. */
    public uId: string;

    /** Image format. */
    public format: string;

    /** Image height. */
    public height: number;

    /** Image width. */
    public width: number;

    /** Image size. */
    public size: number;

    /** Image length. */
    public length: number;

    /** Image createdAt. */
    public createdAt: number;

    /**
     * Creates a new Image instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Image instance
     */
    public static create(properties?: IImage): Image;

    /**
     * Encodes the specified Image message. Does not implicitly {@link Image.verify|verify} messages.
     * @param message Image message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IImage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Image message, length delimited. Does not implicitly {@link Image.verify|verify} messages.
     * @param message Image message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IImage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Image message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Image
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Image;

    /**
     * Decodes an Image message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Image
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Image;

    /**
     * Verifies an Image message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Image message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Image
     */
    public static fromObject(object: { [k: string]: any }): Image;

    /**
     * Creates a plain object from an Image message. Also converts values to other types if specified.
     * @param message Image
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Image, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Image to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ImageModifyRequest. */
export interface IImageModifyRequest {

    /** ImageModifyRequest item */
    item?: (string|null);

    /** ImageModifyRequest action */
    action?: (string|null);

    /** ImageModifyRequest file */
    file?: (string|null);
}

/** Represents an ImageModifyRequest. */
export class ImageModifyRequest implements IImageModifyRequest {

    /**
     * Constructs a new ImageModifyRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IImageModifyRequest);

    /** ImageModifyRequest item. */
    public item: string;

    /** ImageModifyRequest action. */
    public action: string;

    /** ImageModifyRequest file. */
    public file: string;

    /**
     * Creates a new ImageModifyRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ImageModifyRequest instance
     */
    public static create(properties?: IImageModifyRequest): ImageModifyRequest;

    /**
     * Encodes the specified ImageModifyRequest message. Does not implicitly {@link ImageModifyRequest.verify|verify} messages.
     * @param message ImageModifyRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IImageModifyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ImageModifyRequest message, length delimited. Does not implicitly {@link ImageModifyRequest.verify|verify} messages.
     * @param message ImageModifyRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IImageModifyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ImageModifyRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ImageModifyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ImageModifyRequest;

    /**
     * Decodes an ImageModifyRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ImageModifyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ImageModifyRequest;

    /**
     * Verifies an ImageModifyRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ImageModifyRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ImageModifyRequest
     */
    public static fromObject(object: { [k: string]: any }): ImageModifyRequest;

    /**
     * Creates a plain object from an ImageModifyRequest message. Also converts values to other types if specified.
     * @param message ImageModifyRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ImageModifyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ImageModifyRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DraftJsBlock. */
export interface IDraftJsBlock {

    /** DraftJsBlock key */
    key?: (string|null);

    /** DraftJsBlock text */
    text?: (string|null);

    /** DraftJsBlock type */
    type?: (string|null);

    /** DraftJsBlock depth */
    depth?: (number|null);

    /** DraftJsBlock inlineStyleRanges */
    inlineStyleRanges?: (number[]|null);

    /** DraftJsBlock entityRanges */
    entityRanges?: (string[]|null);
}

/** Represents a DraftJsBlock. */
export class DraftJsBlock implements IDraftJsBlock {

    /**
     * Constructs a new DraftJsBlock.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDraftJsBlock);

    /** DraftJsBlock key. */
    public key: string;

    /** DraftJsBlock text. */
    public text: string;

    /** DraftJsBlock type. */
    public type: string;

    /** DraftJsBlock depth. */
    public depth: number;

    /** DraftJsBlock inlineStyleRanges. */
    public inlineStyleRanges: number[];

    /** DraftJsBlock entityRanges. */
    public entityRanges: string[];

    /**
     * Creates a new DraftJsBlock instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DraftJsBlock instance
     */
    public static create(properties?: IDraftJsBlock): DraftJsBlock;

    /**
     * Encodes the specified DraftJsBlock message. Does not implicitly {@link DraftJsBlock.verify|verify} messages.
     * @param message DraftJsBlock message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDraftJsBlock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DraftJsBlock message, length delimited. Does not implicitly {@link DraftJsBlock.verify|verify} messages.
     * @param message DraftJsBlock message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDraftJsBlock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DraftJsBlock message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DraftJsBlock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DraftJsBlock;

    /**
     * Decodes a DraftJsBlock message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DraftJsBlock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DraftJsBlock;

    /**
     * Verifies a DraftJsBlock message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DraftJsBlock message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DraftJsBlock
     */
    public static fromObject(object: { [k: string]: any }): DraftJsBlock;

    /**
     * Creates a plain object from a DraftJsBlock message. Also converts values to other types if specified.
     * @param message DraftJsBlock
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DraftJsBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DraftJsBlock to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DraftJsEntity. */
export interface IDraftJsEntity {

    /** DraftJsEntity type */
    type?: (string|null);

    /** DraftJsEntity data */
    data?: (string|null);
}

/** Represents a DraftJsEntity. */
export class DraftJsEntity implements IDraftJsEntity {

    /**
     * Constructs a new DraftJsEntity.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDraftJsEntity);

    /** DraftJsEntity type. */
    public type: string;

    /** DraftJsEntity data. */
    public data: string;

    /**
     * Creates a new DraftJsEntity instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DraftJsEntity instance
     */
    public static create(properties?: IDraftJsEntity): DraftJsEntity;

    /**
     * Encodes the specified DraftJsEntity message. Does not implicitly {@link DraftJsEntity.verify|verify} messages.
     * @param message DraftJsEntity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDraftJsEntity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DraftJsEntity message, length delimited. Does not implicitly {@link DraftJsEntity.verify|verify} messages.
     * @param message DraftJsEntity message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDraftJsEntity, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DraftJsEntity message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DraftJsEntity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DraftJsEntity;

    /**
     * Decodes a DraftJsEntity message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DraftJsEntity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DraftJsEntity;

    /**
     * Verifies a DraftJsEntity message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DraftJsEntity message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DraftJsEntity
     */
    public static fromObject(object: { [k: string]: any }): DraftJsEntity;

    /**
     * Creates a plain object from a DraftJsEntity message. Also converts values to other types if specified.
     * @param message DraftJsEntity
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DraftJsEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DraftJsEntity to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DraftJsRawContent. */
export interface IDraftJsRawContent {

    /** DraftJsRawContent blocks */
    blocks?: (IDraftJsBlock[]|null);
}

/** Represents a DraftJsRawContent. */
export class DraftJsRawContent implements IDraftJsRawContent {

    /**
     * Constructs a new DraftJsRawContent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDraftJsRawContent);

    /** DraftJsRawContent blocks. */
    public blocks: IDraftJsBlock[];

    /**
     * Creates a new DraftJsRawContent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DraftJsRawContent instance
     */
    public static create(properties?: IDraftJsRawContent): DraftJsRawContent;

    /**
     * Encodes the specified DraftJsRawContent message. Does not implicitly {@link DraftJsRawContent.verify|verify} messages.
     * @param message DraftJsRawContent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDraftJsRawContent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DraftJsRawContent message, length delimited. Does not implicitly {@link DraftJsRawContent.verify|verify} messages.
     * @param message DraftJsRawContent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDraftJsRawContent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DraftJsRawContent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DraftJsRawContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DraftJsRawContent;

    /**
     * Decodes a DraftJsRawContent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DraftJsRawContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DraftJsRawContent;

    /**
     * Verifies a DraftJsRawContent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DraftJsRawContent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DraftJsRawContent
     */
    public static fromObject(object: { [k: string]: any }): DraftJsRawContent;

    /**
     * Creates a plain object from a DraftJsRawContent message. Also converts values to other types if specified.
     * @param message DraftJsRawContent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DraftJsRawContent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DraftJsRawContent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Event. */
export interface IEvent {

    /** Event eventId */
    eventId?: (string|null);

    /** Event userId */
    userId?: (string|null);

    /** Event data */
    data?: (Uint8Array|null);

    /** Event createdAt */
    createdAt?: (number|null);
}

/** Represents an Event. */
export class Event implements IEvent {

    /**
     * Constructs a new Event.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEvent);

    /** Event eventId. */
    public eventId: string;

    /** Event userId. */
    public userId: string;

    /** Event data. */
    public data: Uint8Array;

    /** Event createdAt. */
    public createdAt: number;

    /**
     * Creates a new Event instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Event instance
     */
    public static create(properties?: IEvent): Event;

    /**
     * Encodes the specified Event message. Does not implicitly {@link Event.verify|verify} messages.
     * @param message Event message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Event message, length delimited. Does not implicitly {@link Event.verify|verify} messages.
     * @param message Event message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Event message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Event;

    /**
     * Decodes an Event message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Event;

    /**
     * Verifies an Event message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Event message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Event
     */
    public static fromObject(object: { [k: string]: any }): Event;

    /**
     * Creates a plain object from an Event message. Also converts values to other types if specified.
     * @param message Event
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Event to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CommentReplyEvent. */
export interface ICommentReplyEvent {

    /** CommentReplyEvent userId */
    userId?: (string|null);

    /** CommentReplyEvent comment */
    comment?: (IComment|null);

    /** CommentReplyEvent createdAt */
    createdAt?: (number|null);
}

/** Represents a CommentReplyEvent. */
export class CommentReplyEvent implements ICommentReplyEvent {

    /**
     * Constructs a new CommentReplyEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommentReplyEvent);

    /** CommentReplyEvent userId. */
    public userId: string;

    /** CommentReplyEvent comment. */
    public comment?: (IComment|null);

    /** CommentReplyEvent createdAt. */
    public createdAt: number;

    /**
     * Creates a new CommentReplyEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommentReplyEvent instance
     */
    public static create(properties?: ICommentReplyEvent): CommentReplyEvent;

    /**
     * Encodes the specified CommentReplyEvent message. Does not implicitly {@link CommentReplyEvent.verify|verify} messages.
     * @param message CommentReplyEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommentReplyEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommentReplyEvent message, length delimited. Does not implicitly {@link CommentReplyEvent.verify|verify} messages.
     * @param message CommentReplyEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommentReplyEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommentReplyEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommentReplyEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommentReplyEvent;

    /**
     * Decodes a CommentReplyEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommentReplyEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommentReplyEvent;

    /**
     * Verifies a CommentReplyEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommentReplyEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommentReplyEvent
     */
    public static fromObject(object: { [k: string]: any }): CommentReplyEvent;

    /**
     * Creates a plain object from a CommentReplyEvent message. Also converts values to other types if specified.
     * @param message CommentReplyEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommentReplyEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommentReplyEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CommentCreateEvent. */
export interface ICommentCreateEvent {

    /** CommentCreateEvent threadId */
    threadId?: (string|null);

    /** CommentCreateEvent comment */
    comment?: (IComment|null);

    /** CommentCreateEvent createdAt */
    createdAt?: (number|null);
}

/** Represents a CommentCreateEvent. */
export class CommentCreateEvent implements ICommentCreateEvent {

    /**
     * Constructs a new CommentCreateEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommentCreateEvent);

    /** CommentCreateEvent threadId. */
    public threadId: string;

    /** CommentCreateEvent comment. */
    public comment?: (IComment|null);

    /** CommentCreateEvent createdAt. */
    public createdAt: number;

    /**
     * Creates a new CommentCreateEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommentCreateEvent instance
     */
    public static create(properties?: ICommentCreateEvent): CommentCreateEvent;

    /**
     * Encodes the specified CommentCreateEvent message. Does not implicitly {@link CommentCreateEvent.verify|verify} messages.
     * @param message CommentCreateEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommentCreateEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommentCreateEvent message, length delimited. Does not implicitly {@link CommentCreateEvent.verify|verify} messages.
     * @param message CommentCreateEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommentCreateEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommentCreateEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommentCreateEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommentCreateEvent;

    /**
     * Decodes a CommentCreateEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommentCreateEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommentCreateEvent;

    /**
     * Verifies a CommentCreateEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommentCreateEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommentCreateEvent
     */
    public static fromObject(object: { [k: string]: any }): CommentCreateEvent;

    /**
     * Creates a plain object from a CommentCreateEvent message. Also converts values to other types if specified.
     * @param message CommentCreateEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommentCreateEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommentCreateEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserMentionEvent. */
export interface IUserMentionEvent {

    /** UserMentionEvent userId */
    userId?: (string|null);

    /** UserMentionEvent location */
    location?: (string|null);

    /** UserMentionEvent createdAt */
    createdAt?: (number|null);

    /** UserMentionEvent board */
    board?: (string|null);

    /** UserMentionEvent title */
    title?: (string|null);

    /** UserMentionEvent comment */
    comment?: (string|null);
}

/** Represents a UserMentionEvent. */
export class UserMentionEvent implements IUserMentionEvent {

    /**
     * Constructs a new UserMentionEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserMentionEvent);

    /** UserMentionEvent userId. */
    public userId: string;

    /** UserMentionEvent location. */
    public location: string;

    /** UserMentionEvent createdAt. */
    public createdAt: number;

    /** UserMentionEvent board. */
    public board: string;

    /** UserMentionEvent title. */
    public title: string;

    /** UserMentionEvent comment. */
    public comment: string;

    /**
     * Creates a new UserMentionEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserMentionEvent instance
     */
    public static create(properties?: IUserMentionEvent): UserMentionEvent;

    /**
     * Encodes the specified UserMentionEvent message. Does not implicitly {@link UserMentionEvent.verify|verify} messages.
     * @param message UserMentionEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserMentionEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserMentionEvent message, length delimited. Does not implicitly {@link UserMentionEvent.verify|verify} messages.
     * @param message UserMentionEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserMentionEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserMentionEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserMentionEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserMentionEvent;

    /**
     * Decodes a UserMentionEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserMentionEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserMentionEvent;

    /**
     * Verifies a UserMentionEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserMentionEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserMentionEvent
     */
    public static fromObject(object: { [k: string]: any }): UserMentionEvent;

    /**
     * Creates a plain object from a UserMentionEvent message. Also converts values to other types if specified.
     * @param message UserMentionEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserMentionEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserMentionEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ThreadVoteEvent. */
export interface IThreadVoteEvent {

    /** ThreadVoteEvent userId */
    userId?: (string|null);

    /** ThreadVoteEvent createdAt */
    createdAt?: (number|null);

    /** ThreadVoteEvent threadId */
    threadId?: (string|null);

    /** ThreadVoteEvent totalVotes */
    totalVotes?: (number|null);

    /** ThreadVoteEvent votes */
    votes?: ({ [k: string]: number }|null);
}

/** Represents a ThreadVoteEvent. */
export class ThreadVoteEvent implements IThreadVoteEvent {

    /**
     * Constructs a new ThreadVoteEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadVoteEvent);

    /** ThreadVoteEvent userId. */
    public userId: string;

    /** ThreadVoteEvent createdAt. */
    public createdAt: number;

    /** ThreadVoteEvent threadId. */
    public threadId: string;

    /** ThreadVoteEvent totalVotes. */
    public totalVotes: number;

    /** ThreadVoteEvent votes. */
    public votes: { [k: string]: number };

    /**
     * Creates a new ThreadVoteEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadVoteEvent instance
     */
    public static create(properties?: IThreadVoteEvent): ThreadVoteEvent;

    /**
     * Encodes the specified ThreadVoteEvent message. Does not implicitly {@link ThreadVoteEvent.verify|verify} messages.
     * @param message ThreadVoteEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadVoteEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadVoteEvent message, length delimited. Does not implicitly {@link ThreadVoteEvent.verify|verify} messages.
     * @param message ThreadVoteEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadVoteEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadVoteEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadVoteEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadVoteEvent;

    /**
     * Decodes a ThreadVoteEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadVoteEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadVoteEvent;

    /**
     * Verifies a ThreadVoteEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadVoteEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadVoteEvent
     */
    public static fromObject(object: { [k: string]: any }): ThreadVoteEvent;

    /**
     * Creates a plain object from a ThreadVoteEvent message. Also converts values to other types if specified.
     * @param message ThreadVoteEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadVoteEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadVoteEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EventContextUpdate. */
export interface IEventContextUpdate {

    /** EventContextUpdate createdAt */
    createdAt?: (number|null);

    /** EventContextUpdate threadViewportRange */
    threadViewportRange?: (string[]|null);

    /** EventContextUpdate commentViewportRange */
    commentViewportRange?: (string[]|null);
}

/** Represents an EventContextUpdate. */
export class EventContextUpdate implements IEventContextUpdate {

    /**
     * Constructs a new EventContextUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEventContextUpdate);

    /** EventContextUpdate createdAt. */
    public createdAt: number;

    /** EventContextUpdate threadViewportRange. */
    public threadViewportRange: string[];

    /** EventContextUpdate commentViewportRange. */
    public commentViewportRange: string[];

    /**
     * Creates a new EventContextUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EventContextUpdate instance
     */
    public static create(properties?: IEventContextUpdate): EventContextUpdate;

    /**
     * Encodes the specified EventContextUpdate message. Does not implicitly {@link EventContextUpdate.verify|verify} messages.
     * @param message EventContextUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEventContextUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EventContextUpdate message, length delimited. Does not implicitly {@link EventContextUpdate.verify|verify} messages.
     * @param message EventContextUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEventContextUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EventContextUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EventContextUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EventContextUpdate;

    /**
     * Decodes an EventContextUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EventContextUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EventContextUpdate;

    /**
     * Verifies an EventContextUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EventContextUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EventContextUpdate
     */
    public static fromObject(object: { [k: string]: any }): EventContextUpdate;

    /**
     * Creates a plain object from an EventContextUpdate message. Also converts values to other types if specified.
     * @param message EventContextUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EventContextUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EventContextUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Error. */
export interface IError {

    /** Error message */
    message?: (string|null);

    /** Error code */
    code?: (number|null);
}

/** Represents an Error. */
export class Error implements IError {

    /**
     * Constructs a new Error.
     * @param [properties] Properties to set
     */
    constructor(properties?: IError);

    /** Error message. */
    public message: string;

    /** Error code. */
    public code: number;

    /**
     * Creates a new Error instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Error instance
     */
    public static create(properties?: IError): Error;

    /**
     * Encodes the specified Error message. Does not implicitly {@link Error.verify|verify} messages.
     * @param message Error message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Error message, length delimited. Does not implicitly {@link Error.verify|verify} messages.
     * @param message Error message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Error message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Error;

    /**
     * Decodes an Error message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Error;

    /**
     * Verifies an Error message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Error message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Error
     */
    public static fromObject(object: { [k: string]: any }): Error;

    /**
     * Creates a plain object from an Error message. Also converts values to other types if specified.
     * @param message Error
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Error to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
