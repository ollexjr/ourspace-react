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
    subscriptions?: (IUserSubscription[]|null);

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
    public subscriptions: IUserSubscription[];

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

/** Properties of a ThreadCreate. */
export interface IThreadCreate {

    /** ThreadCreate title */
    title?: (string|null);

    /** ThreadCreate link */
    link?: (string|null);

    /** ThreadCreate content */
    content?: (string|null);

    /** ThreadCreate createdAtHint */
    createdAtHint?: (number|null);
}

/** Represents a ThreadCreate. */
export class ThreadCreate implements IThreadCreate {

    /**
     * Constructs a new ThreadCreate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadCreate);

    /** ThreadCreate title. */
    public title: string;

    /** ThreadCreate link. */
    public link: string;

    /** ThreadCreate content. */
    public content: string;

    /** ThreadCreate createdAtHint. */
    public createdAtHint: number;

    /**
     * Creates a new ThreadCreate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadCreate instance
     */
    public static create(properties?: IThreadCreate): ThreadCreate;

    /**
     * Encodes the specified ThreadCreate message. Does not implicitly {@link ThreadCreate.verify|verify} messages.
     * @param message ThreadCreate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadCreate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadCreate message, length delimited. Does not implicitly {@link ThreadCreate.verify|verify} messages.
     * @param message ThreadCreate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadCreate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadCreate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadCreate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadCreate;

    /**
     * Decodes a ThreadCreate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadCreate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadCreate;

    /**
     * Verifies a ThreadCreate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadCreate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadCreate
     */
    public static fromObject(object: { [k: string]: any }): ThreadCreate;

    /**
     * Creates a plain object from a ThreadCreate message. Also converts values to other types if specified.
     * @param message ThreadCreate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadCreate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadCreate to JSON.
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

    /** BanInfo reportId */
    reportId?: (string|null);
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

    /** BanInfo reportId. */
    public reportId: string;

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
    user?: (IUserRef|null);

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
    public user?: (IUserRef|null);

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

/** Properties of a Board. */
export interface IBoard {

    /** Board members */
    members?: (number|null);

    /** Board moderators */
    moderators?: (number|null);

    /** Board rules */
    rules?: (string|null);

    /** Board description */
    description?: (string|null);

    /** Board createdAt */
    createdAt?: (number|null);

    /** Board preview */
    preview?: (IUserRef[]|null);

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

    /** Board members. */
    public members: number;

    /** Board moderators. */
    public moderators: number;

    /** Board rules. */
    public rules: string;

    /** Board description. */
    public description: string;

    /** Board createdAt. */
    public createdAt: number;

    /** Board preview. */
    public preview: IUserRef[];

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

/** Properties of a Thread. */
export interface IThread {

    /** Thread url */
    url?: (string|null);

    /** Thread uId */
    uId?: (string|null);

    /** Thread type */
    type?: (number|null);

    /** Thread title */
    title?: (string|null);

    /** Thread link */
    link?: (string|null);

    /** Thread content */
    content?: (string|null);

    /** Thread user */
    user?: (IUserRef|null);

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

    /** Thread up */
    up?: (number|null);

    /** Thread down */
    down?: (number|null);

    /** Thread votes */
    votes?: (IVote[]|null);

    /** Thread acceptedVotes */
    acceptedVotes?: (string[]|null);

    /** Thread acceptedCommentVotes */
    acceptedCommentVotes?: (string[]|null);

    /** Thread mod */
    mod?: (IBanInfo[]|null);

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

    /** Thread url. */
    public url: string;

    /** Thread uId. */
    public uId: string;

    /** Thread type. */
    public type: number;

    /** Thread title. */
    public title: string;

    /** Thread link. */
    public link: string;

    /** Thread content. */
    public content: string;

    /** Thread user. */
    public user?: (IUserRef|null);

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

    /** Thread up. */
    public up: number;

    /** Thread down. */
    public down: number;

    /** Thread votes. */
    public votes: IVote[];

    /** Thread acceptedVotes. */
    public acceptedVotes: string[];

    /** Thread acceptedCommentVotes. */
    public acceptedCommentVotes: string[];

    /** Thread mod. */
    public mod: IBanInfo[];

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

/** Properties of a ThreadSelectFilters. */
export interface IThreadSelectFilters {

    /** ThreadSelectFilters rankMethod */
    rankMethod?: (string|null);

    /** ThreadSelectFilters createdStart */
    createdStart?: (number|null);

    /** ThreadSelectFilters createdEnd */
    createdEnd?: (number|null);

    /** ThreadSelectFilters sortDirection */
    sortDirection?: (string|null);

    /** ThreadSelectFilters token */
    token?: (string|null);
}

/** Represents a ThreadSelectFilters. */
export class ThreadSelectFilters implements IThreadSelectFilters {

    /**
     * Constructs a new ThreadSelectFilters.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadSelectFilters);

    /** ThreadSelectFilters rankMethod. */
    public rankMethod: string;

    /** ThreadSelectFilters createdStart. */
    public createdStart: number;

    /** ThreadSelectFilters createdEnd. */
    public createdEnd: number;

    /** ThreadSelectFilters sortDirection. */
    public sortDirection: string;

    /** ThreadSelectFilters token. */
    public token: string;

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

/** Properties of a ThreadsSelectResponse. */
export interface IThreadsSelectResponse {

    /** ThreadsSelectResponse data */
    data?: (IThread[]|null);

    /** ThreadsSelectResponse token */
    token?: (string|null);
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

/** Properties of a UserSubscription. */
export interface IUserSubscription {

    /** UserSubscription boardId */
    boardId?: (string|null);

    /** UserSubscription createdAt */
    createdAt?: (number|null);

    /** UserSubscription isMod */
    isMod?: (boolean|null);

    /** UserSubscription isOwner */
    isOwner?: (boolean|null);
}

/** Represents a UserSubscription. */
export class UserSubscription implements IUserSubscription {

    /**
     * Constructs a new UserSubscription.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserSubscription);

    /** UserSubscription boardId. */
    public boardId: string;

    /** UserSubscription createdAt. */
    public createdAt: number;

    /** UserSubscription isMod. */
    public isMod: boolean;

    /** UserSubscription isOwner. */
    public isOwner: boolean;

    /**
     * Creates a new UserSubscription instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserSubscription instance
     */
    public static create(properties?: IUserSubscription): UserSubscription;

    /**
     * Encodes the specified UserSubscription message. Does not implicitly {@link UserSubscription.verify|verify} messages.
     * @param message UserSubscription message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserSubscription, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserSubscription message, length delimited. Does not implicitly {@link UserSubscription.verify|verify} messages.
     * @param message UserSubscription message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserSubscription, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserSubscription message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserSubscription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserSubscription;

    /**
     * Decodes a UserSubscription message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserSubscription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserSubscription;

    /**
     * Verifies a UserSubscription message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserSubscription message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserSubscription
     */
    public static fromObject(object: { [k: string]: any }): UserSubscription;

    /**
     * Creates a plain object from a UserSubscription message. Also converts values to other types if specified.
     * @param message UserSubscription
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserSubscription, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserSubscription to JSON.
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

/** Properties of an AllSort. */
export interface IAllSort {

    /** AllSort sort */
    sort?: (string|null);

    /** AllSort createdAt */
    createdAt?: (string|null);

    /** AllSort createdEnd */
    createdEnd?: (string|null);

    /** AllSort token */
    token?: (string|null);
}

/** Represents an AllSort. */
export class AllSort implements IAllSort {

    /**
     * Constructs a new AllSort.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAllSort);

    /** AllSort sort. */
    public sort: string;

    /** AllSort createdAt. */
    public createdAt: string;

    /** AllSort createdEnd. */
    public createdEnd: string;

    /** AllSort token. */
    public token: string;

    /**
     * Creates a new AllSort instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AllSort instance
     */
    public static create(properties?: IAllSort): AllSort;

    /**
     * Encodes the specified AllSort message. Does not implicitly {@link AllSort.verify|verify} messages.
     * @param message AllSort message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAllSort, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AllSort message, length delimited. Does not implicitly {@link AllSort.verify|verify} messages.
     * @param message AllSort message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAllSort, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AllSort message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AllSort
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AllSort;

    /**
     * Decodes an AllSort message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AllSort
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AllSort;

    /**
     * Verifies an AllSort message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AllSort message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AllSort
     */
    public static fromObject(object: { [k: string]: any }): AllSort;

    /**
     * Creates a plain object from an AllSort message. Also converts values to other types if specified.
     * @param message AllSort
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AllSort, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AllSort to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a UserInBoardContext. */
export interface IUserInBoardContext {

    /** UserInBoardContext user */
    user?: (IUserRef|null);

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
    public user?: (IUserRef|null);

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
