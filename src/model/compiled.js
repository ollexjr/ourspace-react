/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.User = (function() {

    /**
     * Properties of a User.
     * @exports IUser
     * @interface IUser
     * @property {number|null} [rId] User rId
     * @property {string|null} [username] User username
     * @property {string|null} [email] User email
     * @property {string|null} [avatar] User avatar
     */

    /**
     * Constructs a new User.
     * @exports User
     * @classdesc Internal user reference *
     * @implements IUser
     * @constructor
     * @param {IUser=} [properties] Properties to set
     */
    function User(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * User rId.
     * @member {number} rId
     * @memberof User
     * @instance
     */
    User.prototype.rId = 0;

    /**
     * User username.
     * @member {string} username
     * @memberof User
     * @instance
     */
    User.prototype.username = "";

    /**
     * User email.
     * @member {string} email
     * @memberof User
     * @instance
     */
    User.prototype.email = "";

    /**
     * User avatar.
     * @member {string} avatar
     * @memberof User
     * @instance
     */
    User.prototype.avatar = "";

    /**
     * Creates a new User instance using the specified properties.
     * @function create
     * @memberof User
     * @static
     * @param {IUser=} [properties] Properties to set
     * @returns {User} User instance
     */
    User.create = function create(properties) {
        return new User(properties);
    };

    /**
     * Encodes the specified User message. Does not implicitly {@link User.verify|verify} messages.
     * @function encode
     * @memberof User
     * @static
     * @param {IUser} message User message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    User.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.rId != null && Object.hasOwnProperty.call(message, "rId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.rId);
        if (message.username != null && Object.hasOwnProperty.call(message, "username"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
        if (message.email != null && Object.hasOwnProperty.call(message, "email"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
        if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.avatar);
        return writer;
    };

    /**
     * Encodes the specified User message, length delimited. Does not implicitly {@link User.verify|verify} messages.
     * @function encodeDelimited
     * @memberof User
     * @static
     * @param {IUser} message User message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    User.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a User message from the specified reader or buffer.
     * @function decode
     * @memberof User
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {User} User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    User.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.User();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.rId = reader.uint32();
                break;
            case 2:
                message.username = reader.string();
                break;
            case 3:
                message.email = reader.string();
                break;
            case 6:
                message.avatar = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a User message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof User
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {User} User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    User.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a User message.
     * @function verify
     * @memberof User
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    User.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.rId != null && message.hasOwnProperty("rId"))
            if (!$util.isInteger(message.rId))
                return "rId: integer expected";
        if (message.username != null && message.hasOwnProperty("username"))
            if (!$util.isString(message.username))
                return "username: string expected";
        if (message.email != null && message.hasOwnProperty("email"))
            if (!$util.isString(message.email))
                return "email: string expected";
        if (message.avatar != null && message.hasOwnProperty("avatar"))
            if (!$util.isString(message.avatar))
                return "avatar: string expected";
        return null;
    };

    /**
     * Creates a User message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof User
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {User} User
     */
    User.fromObject = function fromObject(object) {
        if (object instanceof $root.User)
            return object;
        var message = new $root.User();
        if (object.rId != null)
            message.rId = object.rId >>> 0;
        if (object.username != null)
            message.username = String(object.username);
        if (object.email != null)
            message.email = String(object.email);
        if (object.avatar != null)
            message.avatar = String(object.avatar);
        return message;
    };

    /**
     * Creates a plain object from a User message. Also converts values to other types if specified.
     * @function toObject
     * @memberof User
     * @static
     * @param {User} message User
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    User.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.rId = 0;
            object.username = "";
            object.email = "";
            object.avatar = "";
        }
        if (message.rId != null && message.hasOwnProperty("rId"))
            object.rId = message.rId;
        if (message.username != null && message.hasOwnProperty("username"))
            object.username = message.username;
        if (message.email != null && message.hasOwnProperty("email"))
            object.email = message.email;
        if (message.avatar != null && message.hasOwnProperty("avatar"))
            object.avatar = message.avatar;
        return object;
    };

    /**
     * Converts this User to JSON.
     * @function toJSON
     * @memberof User
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    User.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return User;
})();

$root.UserRef = (function() {

    /**
     * Properties of a UserRef.
     * @exports IUserRef
     * @interface IUserRef
     * @property {string|null} [username] UserRef username
     * @property {string|null} [avatar] UserRef avatar
     */

    /**
     * Constructs a new UserRef.
     * @exports UserRef
     * @classdesc Represents a UserRef.
     * @implements IUserRef
     * @constructor
     * @param {IUserRef=} [properties] Properties to set
     */
    function UserRef(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserRef username.
     * @member {string} username
     * @memberof UserRef
     * @instance
     */
    UserRef.prototype.username = "";

    /**
     * UserRef avatar.
     * @member {string} avatar
     * @memberof UserRef
     * @instance
     */
    UserRef.prototype.avatar = "";

    /**
     * Creates a new UserRef instance using the specified properties.
     * @function create
     * @memberof UserRef
     * @static
     * @param {IUserRef=} [properties] Properties to set
     * @returns {UserRef} UserRef instance
     */
    UserRef.create = function create(properties) {
        return new UserRef(properties);
    };

    /**
     * Encodes the specified UserRef message. Does not implicitly {@link UserRef.verify|verify} messages.
     * @function encode
     * @memberof UserRef
     * @static
     * @param {IUserRef} message UserRef message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserRef.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.username != null && Object.hasOwnProperty.call(message, "username"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
        if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.avatar);
        return writer;
    };

    /**
     * Encodes the specified UserRef message, length delimited. Does not implicitly {@link UserRef.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserRef
     * @static
     * @param {IUserRef} message UserRef message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserRef.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserRef message from the specified reader or buffer.
     * @function decode
     * @memberof UserRef
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserRef} UserRef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserRef.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserRef();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                message.username = reader.string();
                break;
            case 6:
                message.avatar = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserRef message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserRef
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserRef} UserRef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserRef.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserRef message.
     * @function verify
     * @memberof UserRef
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserRef.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.username != null && message.hasOwnProperty("username"))
            if (!$util.isString(message.username))
                return "username: string expected";
        if (message.avatar != null && message.hasOwnProperty("avatar"))
            if (!$util.isString(message.avatar))
                return "avatar: string expected";
        return null;
    };

    /**
     * Creates a UserRef message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserRef
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserRef} UserRef
     */
    UserRef.fromObject = function fromObject(object) {
        if (object instanceof $root.UserRef)
            return object;
        var message = new $root.UserRef();
        if (object.username != null)
            message.username = String(object.username);
        if (object.avatar != null)
            message.avatar = String(object.avatar);
        return message;
    };

    /**
     * Creates a plain object from a UserRef message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserRef
     * @static
     * @param {UserRef} message UserRef
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserRef.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.username = "";
            object.avatar = "";
        }
        if (message.username != null && message.hasOwnProperty("username"))
            object.username = message.username;
        if (message.avatar != null && message.hasOwnProperty("avatar"))
            object.avatar = message.avatar;
        return object;
    };

    /**
     * Converts this UserRef to JSON.
     * @function toJSON
     * @memberof UserRef
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserRef.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserRef;
})();

$root.AccountState = (function() {

    /**
     * Properties of an AccountState.
     * @exports IAccountState
     * @interface IAccountState
     * @property {Array.<IBoardSubscription>|null} [subscriptions] AccountState subscriptions
     * @property {number|null} [karma] AccountState karma
     * @property {number|null} [upvotes] AccountState upvotes
     * @property {number|null} [downvotes] AccountState downvotes
     */

    /**
     * Constructs a new AccountState.
     * @exports AccountState
     * @classdesc Represents an AccountState.
     * @implements IAccountState
     * @constructor
     * @param {IAccountState=} [properties] Properties to set
     */
    function AccountState(properties) {
        this.subscriptions = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AccountState subscriptions.
     * @member {Array.<IBoardSubscription>} subscriptions
     * @memberof AccountState
     * @instance
     */
    AccountState.prototype.subscriptions = $util.emptyArray;

    /**
     * AccountState karma.
     * @member {number} karma
     * @memberof AccountState
     * @instance
     */
    AccountState.prototype.karma = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * AccountState upvotes.
     * @member {number} upvotes
     * @memberof AccountState
     * @instance
     */
    AccountState.prototype.upvotes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * AccountState downvotes.
     * @member {number} downvotes
     * @memberof AccountState
     * @instance
     */
    AccountState.prototype.downvotes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new AccountState instance using the specified properties.
     * @function create
     * @memberof AccountState
     * @static
     * @param {IAccountState=} [properties] Properties to set
     * @returns {AccountState} AccountState instance
     */
    AccountState.create = function create(properties) {
        return new AccountState(properties);
    };

    /**
     * Encodes the specified AccountState message. Does not implicitly {@link AccountState.verify|verify} messages.
     * @function encode
     * @memberof AccountState
     * @static
     * @param {IAccountState} message AccountState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AccountState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.subscriptions != null && message.subscriptions.length)
            for (var i = 0; i < message.subscriptions.length; ++i)
                $root.BoardSubscription.encode(message.subscriptions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.karma != null && Object.hasOwnProperty.call(message, "karma"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.karma);
        if (message.upvotes != null && Object.hasOwnProperty.call(message, "upvotes"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.upvotes);
        if (message.downvotes != null && Object.hasOwnProperty.call(message, "downvotes"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.downvotes);
        return writer;
    };

    /**
     * Encodes the specified AccountState message, length delimited. Does not implicitly {@link AccountState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AccountState
     * @static
     * @param {IAccountState} message AccountState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AccountState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AccountState message from the specified reader or buffer.
     * @function decode
     * @memberof AccountState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AccountState} AccountState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AccountState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AccountState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                if (!(message.subscriptions && message.subscriptions.length))
                    message.subscriptions = [];
                message.subscriptions.push($root.BoardSubscription.decode(reader, reader.uint32()));
                break;
            case 4:
                message.karma = reader.int64();
                break;
            case 5:
                message.upvotes = reader.int64();
                break;
            case 6:
                message.downvotes = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AccountState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AccountState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AccountState} AccountState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AccountState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AccountState message.
     * @function verify
     * @memberof AccountState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AccountState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.subscriptions != null && message.hasOwnProperty("subscriptions")) {
            if (!Array.isArray(message.subscriptions))
                return "subscriptions: array expected";
            for (var i = 0; i < message.subscriptions.length; ++i) {
                var error = $root.BoardSubscription.verify(message.subscriptions[i]);
                if (error)
                    return "subscriptions." + error;
            }
        }
        if (message.karma != null && message.hasOwnProperty("karma"))
            if (!$util.isInteger(message.karma) && !(message.karma && $util.isInteger(message.karma.low) && $util.isInteger(message.karma.high)))
                return "karma: integer|Long expected";
        if (message.upvotes != null && message.hasOwnProperty("upvotes"))
            if (!$util.isInteger(message.upvotes) && !(message.upvotes && $util.isInteger(message.upvotes.low) && $util.isInteger(message.upvotes.high)))
                return "upvotes: integer|Long expected";
        if (message.downvotes != null && message.hasOwnProperty("downvotes"))
            if (!$util.isInteger(message.downvotes) && !(message.downvotes && $util.isInteger(message.downvotes.low) && $util.isInteger(message.downvotes.high)))
                return "downvotes: integer|Long expected";
        return null;
    };

    /**
     * Creates an AccountState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AccountState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AccountState} AccountState
     */
    AccountState.fromObject = function fromObject(object) {
        if (object instanceof $root.AccountState)
            return object;
        var message = new $root.AccountState();
        if (object.subscriptions) {
            if (!Array.isArray(object.subscriptions))
                throw TypeError(".AccountState.subscriptions: array expected");
            message.subscriptions = [];
            for (var i = 0; i < object.subscriptions.length; ++i) {
                if (typeof object.subscriptions[i] !== "object")
                    throw TypeError(".AccountState.subscriptions: object expected");
                message.subscriptions[i] = $root.BoardSubscription.fromObject(object.subscriptions[i]);
            }
        }
        if (object.karma != null)
            if ($util.Long)
                (message.karma = $util.Long.fromValue(object.karma)).unsigned = false;
            else if (typeof object.karma === "string")
                message.karma = parseInt(object.karma, 10);
            else if (typeof object.karma === "number")
                message.karma = object.karma;
            else if (typeof object.karma === "object")
                message.karma = new $util.LongBits(object.karma.low >>> 0, object.karma.high >>> 0).toNumber();
        if (object.upvotes != null)
            if ($util.Long)
                (message.upvotes = $util.Long.fromValue(object.upvotes)).unsigned = false;
            else if (typeof object.upvotes === "string")
                message.upvotes = parseInt(object.upvotes, 10);
            else if (typeof object.upvotes === "number")
                message.upvotes = object.upvotes;
            else if (typeof object.upvotes === "object")
                message.upvotes = new $util.LongBits(object.upvotes.low >>> 0, object.upvotes.high >>> 0).toNumber();
        if (object.downvotes != null)
            if ($util.Long)
                (message.downvotes = $util.Long.fromValue(object.downvotes)).unsigned = false;
            else if (typeof object.downvotes === "string")
                message.downvotes = parseInt(object.downvotes, 10);
            else if (typeof object.downvotes === "number")
                message.downvotes = object.downvotes;
            else if (typeof object.downvotes === "object")
                message.downvotes = new $util.LongBits(object.downvotes.low >>> 0, object.downvotes.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from an AccountState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AccountState
     * @static
     * @param {AccountState} message AccountState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AccountState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.subscriptions = [];
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.karma = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.karma = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.upvotes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.upvotes = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.downvotes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.downvotes = options.longs === String ? "0" : 0;
        }
        if (message.subscriptions && message.subscriptions.length) {
            object.subscriptions = [];
            for (var j = 0; j < message.subscriptions.length; ++j)
                object.subscriptions[j] = $root.BoardSubscription.toObject(message.subscriptions[j], options);
        }
        if (message.karma != null && message.hasOwnProperty("karma"))
            if (typeof message.karma === "number")
                object.karma = options.longs === String ? String(message.karma) : message.karma;
            else
                object.karma = options.longs === String ? $util.Long.prototype.toString.call(message.karma) : options.longs === Number ? new $util.LongBits(message.karma.low >>> 0, message.karma.high >>> 0).toNumber() : message.karma;
        if (message.upvotes != null && message.hasOwnProperty("upvotes"))
            if (typeof message.upvotes === "number")
                object.upvotes = options.longs === String ? String(message.upvotes) : message.upvotes;
            else
                object.upvotes = options.longs === String ? $util.Long.prototype.toString.call(message.upvotes) : options.longs === Number ? new $util.LongBits(message.upvotes.low >>> 0, message.upvotes.high >>> 0).toNumber() : message.upvotes;
        if (message.downvotes != null && message.hasOwnProperty("downvotes"))
            if (typeof message.downvotes === "number")
                object.downvotes = options.longs === String ? String(message.downvotes) : message.downvotes;
            else
                object.downvotes = options.longs === String ? $util.Long.prototype.toString.call(message.downvotes) : options.longs === Number ? new $util.LongBits(message.downvotes.low >>> 0, message.downvotes.high >>> 0).toNumber() : message.downvotes;
        return object;
    };

    /**
     * Converts this AccountState to JSON.
     * @function toJSON
     * @memberof AccountState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AccountState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AccountState;
})();

$root.LoginRequest = (function() {

    /**
     * Properties of a LoginRequest.
     * @exports ILoginRequest
     * @interface ILoginRequest
     * @property {string|null} [username] LoginRequest username
     * @property {string|null} [password] LoginRequest password
     */

    /**
     * Constructs a new LoginRequest.
     * @exports LoginRequest
     * @classdesc Represents a LoginRequest.
     * @implements ILoginRequest
     * @constructor
     * @param {ILoginRequest=} [properties] Properties to set
     */
    function LoginRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LoginRequest username.
     * @member {string} username
     * @memberof LoginRequest
     * @instance
     */
    LoginRequest.prototype.username = "";

    /**
     * LoginRequest password.
     * @member {string} password
     * @memberof LoginRequest
     * @instance
     */
    LoginRequest.prototype.password = "";

    /**
     * Creates a new LoginRequest instance using the specified properties.
     * @function create
     * @memberof LoginRequest
     * @static
     * @param {ILoginRequest=} [properties] Properties to set
     * @returns {LoginRequest} LoginRequest instance
     */
    LoginRequest.create = function create(properties) {
        return new LoginRequest(properties);
    };

    /**
     * Encodes the specified LoginRequest message. Does not implicitly {@link LoginRequest.verify|verify} messages.
     * @function encode
     * @memberof LoginRequest
     * @static
     * @param {ILoginRequest} message LoginRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.username != null && Object.hasOwnProperty.call(message, "username"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
        if (message.password != null && Object.hasOwnProperty.call(message, "password"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
        return writer;
    };

    /**
     * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link LoginRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LoginRequest
     * @static
     * @param {ILoginRequest} message LoginRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LoginRequest message from the specified reader or buffer.
     * @function decode
     * @memberof LoginRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LoginRequest} LoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.username = reader.string();
                break;
            case 2:
                message.password = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LoginRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LoginRequest} LoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LoginRequest message.
     * @function verify
     * @memberof LoginRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LoginRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.username != null && message.hasOwnProperty("username"))
            if (!$util.isString(message.username))
                return "username: string expected";
        if (message.password != null && message.hasOwnProperty("password"))
            if (!$util.isString(message.password))
                return "password: string expected";
        return null;
    };

    /**
     * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LoginRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LoginRequest} LoginRequest
     */
    LoginRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.LoginRequest)
            return object;
        var message = new $root.LoginRequest();
        if (object.username != null)
            message.username = String(object.username);
        if (object.password != null)
            message.password = String(object.password);
        return message;
    };

    /**
     * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LoginRequest
     * @static
     * @param {LoginRequest} message LoginRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LoginRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.username = "";
            object.password = "";
        }
        if (message.username != null && message.hasOwnProperty("username"))
            object.username = message.username;
        if (message.password != null && message.hasOwnProperty("password"))
            object.password = message.password;
        return object;
    };

    /**
     * Converts this LoginRequest to JSON.
     * @function toJSON
     * @memberof LoginRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LoginRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LoginRequest;
})();

$root.TokenPair = (function() {

    /**
     * Properties of a TokenPair.
     * @exports ITokenPair
     * @interface ITokenPair
     * @property {string|null} [accessToken] TokenPair accessToken
     * @property {string|null} [refreshToken] TokenPair refreshToken
     */

    /**
     * Constructs a new TokenPair.
     * @exports TokenPair
     * @classdesc Represents a TokenPair.
     * @implements ITokenPair
     * @constructor
     * @param {ITokenPair=} [properties] Properties to set
     */
    function TokenPair(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TokenPair accessToken.
     * @member {string} accessToken
     * @memberof TokenPair
     * @instance
     */
    TokenPair.prototype.accessToken = "";

    /**
     * TokenPair refreshToken.
     * @member {string} refreshToken
     * @memberof TokenPair
     * @instance
     */
    TokenPair.prototype.refreshToken = "";

    /**
     * Creates a new TokenPair instance using the specified properties.
     * @function create
     * @memberof TokenPair
     * @static
     * @param {ITokenPair=} [properties] Properties to set
     * @returns {TokenPair} TokenPair instance
     */
    TokenPair.create = function create(properties) {
        return new TokenPair(properties);
    };

    /**
     * Encodes the specified TokenPair message. Does not implicitly {@link TokenPair.verify|verify} messages.
     * @function encode
     * @memberof TokenPair
     * @static
     * @param {ITokenPair} message TokenPair message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TokenPair.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.accessToken != null && Object.hasOwnProperty.call(message, "accessToken"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.accessToken);
        if (message.refreshToken != null && Object.hasOwnProperty.call(message, "refreshToken"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.refreshToken);
        return writer;
    };

    /**
     * Encodes the specified TokenPair message, length delimited. Does not implicitly {@link TokenPair.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TokenPair
     * @static
     * @param {ITokenPair} message TokenPair message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TokenPair.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TokenPair message from the specified reader or buffer.
     * @function decode
     * @memberof TokenPair
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TokenPair} TokenPair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TokenPair.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TokenPair();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.accessToken = reader.string();
                break;
            case 2:
                message.refreshToken = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TokenPair message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TokenPair
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TokenPair} TokenPair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TokenPair.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TokenPair message.
     * @function verify
     * @memberof TokenPair
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TokenPair.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.accessToken != null && message.hasOwnProperty("accessToken"))
            if (!$util.isString(message.accessToken))
                return "accessToken: string expected";
        if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
            if (!$util.isString(message.refreshToken))
                return "refreshToken: string expected";
        return null;
    };

    /**
     * Creates a TokenPair message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TokenPair
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TokenPair} TokenPair
     */
    TokenPair.fromObject = function fromObject(object) {
        if (object instanceof $root.TokenPair)
            return object;
        var message = new $root.TokenPair();
        if (object.accessToken != null)
            message.accessToken = String(object.accessToken);
        if (object.refreshToken != null)
            message.refreshToken = String(object.refreshToken);
        return message;
    };

    /**
     * Creates a plain object from a TokenPair message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TokenPair
     * @static
     * @param {TokenPair} message TokenPair
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TokenPair.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.accessToken = "";
            object.refreshToken = "";
        }
        if (message.accessToken != null && message.hasOwnProperty("accessToken"))
            object.accessToken = message.accessToken;
        if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
            object.refreshToken = message.refreshToken;
        return object;
    };

    /**
     * Converts this TokenPair to JSON.
     * @function toJSON
     * @memberof TokenPair
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TokenPair.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TokenPair;
})();

$root.JwtTokenPair = (function() {

    /**
     * Properties of a JwtTokenPair.
     * @exports IJwtTokenPair
     * @interface IJwtTokenPair
     * @property {string|null} [accessToken] JwtTokenPair accessToken
     * @property {string|null} [refreshToken] JwtTokenPair refreshToken
     */

    /**
     * Constructs a new JwtTokenPair.
     * @exports JwtTokenPair
     * @classdesc Represents a JwtTokenPair.
     * @implements IJwtTokenPair
     * @constructor
     * @param {IJwtTokenPair=} [properties] Properties to set
     */
    function JwtTokenPair(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * JwtTokenPair accessToken.
     * @member {string} accessToken
     * @memberof JwtTokenPair
     * @instance
     */
    JwtTokenPair.prototype.accessToken = "";

    /**
     * JwtTokenPair refreshToken.
     * @member {string} refreshToken
     * @memberof JwtTokenPair
     * @instance
     */
    JwtTokenPair.prototype.refreshToken = "";

    /**
     * Creates a new JwtTokenPair instance using the specified properties.
     * @function create
     * @memberof JwtTokenPair
     * @static
     * @param {IJwtTokenPair=} [properties] Properties to set
     * @returns {JwtTokenPair} JwtTokenPair instance
     */
    JwtTokenPair.create = function create(properties) {
        return new JwtTokenPair(properties);
    };

    /**
     * Encodes the specified JwtTokenPair message. Does not implicitly {@link JwtTokenPair.verify|verify} messages.
     * @function encode
     * @memberof JwtTokenPair
     * @static
     * @param {IJwtTokenPair} message JwtTokenPair message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JwtTokenPair.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.accessToken != null && Object.hasOwnProperty.call(message, "accessToken"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.accessToken);
        if (message.refreshToken != null && Object.hasOwnProperty.call(message, "refreshToken"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.refreshToken);
        return writer;
    };

    /**
     * Encodes the specified JwtTokenPair message, length delimited. Does not implicitly {@link JwtTokenPair.verify|verify} messages.
     * @function encodeDelimited
     * @memberof JwtTokenPair
     * @static
     * @param {IJwtTokenPair} message JwtTokenPair message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JwtTokenPair.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a JwtTokenPair message from the specified reader or buffer.
     * @function decode
     * @memberof JwtTokenPair
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {JwtTokenPair} JwtTokenPair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JwtTokenPair.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.JwtTokenPair();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.accessToken = reader.string();
                break;
            case 2:
                message.refreshToken = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a JwtTokenPair message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof JwtTokenPair
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {JwtTokenPair} JwtTokenPair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JwtTokenPair.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a JwtTokenPair message.
     * @function verify
     * @memberof JwtTokenPair
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    JwtTokenPair.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.accessToken != null && message.hasOwnProperty("accessToken"))
            if (!$util.isString(message.accessToken))
                return "accessToken: string expected";
        if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
            if (!$util.isString(message.refreshToken))
                return "refreshToken: string expected";
        return null;
    };

    /**
     * Creates a JwtTokenPair message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof JwtTokenPair
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {JwtTokenPair} JwtTokenPair
     */
    JwtTokenPair.fromObject = function fromObject(object) {
        if (object instanceof $root.JwtTokenPair)
            return object;
        var message = new $root.JwtTokenPair();
        if (object.accessToken != null)
            message.accessToken = String(object.accessToken);
        if (object.refreshToken != null)
            message.refreshToken = String(object.refreshToken);
        return message;
    };

    /**
     * Creates a plain object from a JwtTokenPair message. Also converts values to other types if specified.
     * @function toObject
     * @memberof JwtTokenPair
     * @static
     * @param {JwtTokenPair} message JwtTokenPair
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    JwtTokenPair.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.accessToken = "";
            object.refreshToken = "";
        }
        if (message.accessToken != null && message.hasOwnProperty("accessToken"))
            object.accessToken = message.accessToken;
        if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
            object.refreshToken = message.refreshToken;
        return object;
    };

    /**
     * Converts this JwtTokenPair to JSON.
     * @function toJSON
     * @memberof JwtTokenPair
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    JwtTokenPair.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return JwtTokenPair;
})();

$root.LoginResponse = (function() {

    /**
     * Properties of a LoginResponse.
     * @exports ILoginResponse
     * @interface ILoginResponse
     * @property {string|null} [userId] LoginResponse userId
     * @property {IJwtTokenPair|null} [tokens] LoginResponse tokens
     * @property {IAccountState|null} [state] LoginResponse state
     */

    /**
     * Constructs a new LoginResponse.
     * @exports LoginResponse
     * @classdesc Represents a LoginResponse.
     * @implements ILoginResponse
     * @constructor
     * @param {ILoginResponse=} [properties] Properties to set
     */
    function LoginResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LoginResponse userId.
     * @member {string} userId
     * @memberof LoginResponse
     * @instance
     */
    LoginResponse.prototype.userId = "";

    /**
     * LoginResponse tokens.
     * @member {IJwtTokenPair|null|undefined} tokens
     * @memberof LoginResponse
     * @instance
     */
    LoginResponse.prototype.tokens = null;

    /**
     * LoginResponse state.
     * @member {IAccountState|null|undefined} state
     * @memberof LoginResponse
     * @instance
     */
    LoginResponse.prototype.state = null;

    /**
     * Creates a new LoginResponse instance using the specified properties.
     * @function create
     * @memberof LoginResponse
     * @static
     * @param {ILoginResponse=} [properties] Properties to set
     * @returns {LoginResponse} LoginResponse instance
     */
    LoginResponse.create = function create(properties) {
        return new LoginResponse(properties);
    };

    /**
     * Encodes the specified LoginResponse message. Does not implicitly {@link LoginResponse.verify|verify} messages.
     * @function encode
     * @memberof LoginResponse
     * @static
     * @param {ILoginResponse} message LoginResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
        if (message.tokens != null && Object.hasOwnProperty.call(message, "tokens"))
            $root.JwtTokenPair.encode(message.tokens, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            $root.AccountState.encode(message.state, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link LoginResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LoginResponse
     * @static
     * @param {ILoginResponse} message LoginResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LoginResponse message from the specified reader or buffer.
     * @function decode
     * @memberof LoginResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LoginResponse} LoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.string();
                break;
            case 2:
                message.tokens = $root.JwtTokenPair.decode(reader, reader.uint32());
                break;
            case 3:
                message.state = $root.AccountState.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LoginResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LoginResponse} LoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LoginResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LoginResponse message.
     * @function verify
     * @memberof LoginResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LoginResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        if (message.tokens != null && message.hasOwnProperty("tokens")) {
            var error = $root.JwtTokenPair.verify(message.tokens);
            if (error)
                return "tokens." + error;
        }
        if (message.state != null && message.hasOwnProperty("state")) {
            var error = $root.AccountState.verify(message.state);
            if (error)
                return "state." + error;
        }
        return null;
    };

    /**
     * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LoginResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LoginResponse} LoginResponse
     */
    LoginResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.LoginResponse)
            return object;
        var message = new $root.LoginResponse();
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.tokens != null) {
            if (typeof object.tokens !== "object")
                throw TypeError(".LoginResponse.tokens: object expected");
            message.tokens = $root.JwtTokenPair.fromObject(object.tokens);
        }
        if (object.state != null) {
            if (typeof object.state !== "object")
                throw TypeError(".LoginResponse.state: object expected");
            message.state = $root.AccountState.fromObject(object.state);
        }
        return message;
    };

    /**
     * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LoginResponse
     * @static
     * @param {LoginResponse} message LoginResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LoginResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.userId = "";
            object.tokens = null;
            object.state = null;
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.tokens != null && message.hasOwnProperty("tokens"))
            object.tokens = $root.JwtTokenPair.toObject(message.tokens, options);
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = $root.AccountState.toObject(message.state, options);
        return object;
    };

    /**
     * Converts this LoginResponse to JSON.
     * @function toJSON
     * @memberof LoginResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LoginResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return LoginResponse;
})();

$root.ThreadCreateRequest = (function() {

    /**
     * Properties of a ThreadCreateRequest.
     * @exports IThreadCreateRequest
     * @interface IThreadCreateRequest
     * @property {string|null} [boardId] ThreadCreateRequest boardId
     * @property {string|null} [title] ThreadCreateRequest title
     * @property {string|null} [link] ThreadCreateRequest link
     * @property {string|null} [content] ThreadCreateRequest content
     * @property {number|null} [createdAtHint] ThreadCreateRequest createdAtHint
     */

    /**
     * Constructs a new ThreadCreateRequest.
     * @exports ThreadCreateRequest
     * @classdesc Represents a ThreadCreateRequest.
     * @implements IThreadCreateRequest
     * @constructor
     * @param {IThreadCreateRequest=} [properties] Properties to set
     */
    function ThreadCreateRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ThreadCreateRequest boardId.
     * @member {string} boardId
     * @memberof ThreadCreateRequest
     * @instance
     */
    ThreadCreateRequest.prototype.boardId = "";

    /**
     * ThreadCreateRequest title.
     * @member {string} title
     * @memberof ThreadCreateRequest
     * @instance
     */
    ThreadCreateRequest.prototype.title = "";

    /**
     * ThreadCreateRequest link.
     * @member {string} link
     * @memberof ThreadCreateRequest
     * @instance
     */
    ThreadCreateRequest.prototype.link = "";

    /**
     * ThreadCreateRequest content.
     * @member {string} content
     * @memberof ThreadCreateRequest
     * @instance
     */
    ThreadCreateRequest.prototype.content = "";

    /**
     * ThreadCreateRequest createdAtHint.
     * @member {number} createdAtHint
     * @memberof ThreadCreateRequest
     * @instance
     */
    ThreadCreateRequest.prototype.createdAtHint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ThreadCreateRequest instance using the specified properties.
     * @function create
     * @memberof ThreadCreateRequest
     * @static
     * @param {IThreadCreateRequest=} [properties] Properties to set
     * @returns {ThreadCreateRequest} ThreadCreateRequest instance
     */
    ThreadCreateRequest.create = function create(properties) {
        return new ThreadCreateRequest(properties);
    };

    /**
     * Encodes the specified ThreadCreateRequest message. Does not implicitly {@link ThreadCreateRequest.verify|verify} messages.
     * @function encode
     * @memberof ThreadCreateRequest
     * @static
     * @param {IThreadCreateRequest} message ThreadCreateRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThreadCreateRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.title != null && Object.hasOwnProperty.call(message, "title"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
        if (message.link != null && Object.hasOwnProperty.call(message, "link"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.link);
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
        if (message.createdAtHint != null && Object.hasOwnProperty.call(message, "createdAtHint"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.createdAtHint);
        if (message.boardId != null && Object.hasOwnProperty.call(message, "boardId"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.boardId);
        return writer;
    };

    /**
     * Encodes the specified ThreadCreateRequest message, length delimited. Does not implicitly {@link ThreadCreateRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ThreadCreateRequest
     * @static
     * @param {IThreadCreateRequest} message ThreadCreateRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThreadCreateRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ThreadCreateRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ThreadCreateRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ThreadCreateRequest} ThreadCreateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThreadCreateRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ThreadCreateRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 5:
                message.boardId = reader.string();
                break;
            case 1:
                message.title = reader.string();
                break;
            case 2:
                message.link = reader.string();
                break;
            case 3:
                message.content = reader.string();
                break;
            case 4:
                message.createdAtHint = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ThreadCreateRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ThreadCreateRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ThreadCreateRequest} ThreadCreateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThreadCreateRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ThreadCreateRequest message.
     * @function verify
     * @memberof ThreadCreateRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ThreadCreateRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.boardId != null && message.hasOwnProperty("boardId"))
            if (!$util.isString(message.boardId))
                return "boardId: string expected";
        if (message.title != null && message.hasOwnProperty("title"))
            if (!$util.isString(message.title))
                return "title: string expected";
        if (message.link != null && message.hasOwnProperty("link"))
            if (!$util.isString(message.link))
                return "link: string expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.createdAtHint != null && message.hasOwnProperty("createdAtHint"))
            if (!$util.isInteger(message.createdAtHint) && !(message.createdAtHint && $util.isInteger(message.createdAtHint.low) && $util.isInteger(message.createdAtHint.high)))
                return "createdAtHint: integer|Long expected";
        return null;
    };

    /**
     * Creates a ThreadCreateRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ThreadCreateRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ThreadCreateRequest} ThreadCreateRequest
     */
    ThreadCreateRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ThreadCreateRequest)
            return object;
        var message = new $root.ThreadCreateRequest();
        if (object.boardId != null)
            message.boardId = String(object.boardId);
        if (object.title != null)
            message.title = String(object.title);
        if (object.link != null)
            message.link = String(object.link);
        if (object.content != null)
            message.content = String(object.content);
        if (object.createdAtHint != null)
            if ($util.Long)
                (message.createdAtHint = $util.Long.fromValue(object.createdAtHint)).unsigned = false;
            else if (typeof object.createdAtHint === "string")
                message.createdAtHint = parseInt(object.createdAtHint, 10);
            else if (typeof object.createdAtHint === "number")
                message.createdAtHint = object.createdAtHint;
            else if (typeof object.createdAtHint === "object")
                message.createdAtHint = new $util.LongBits(object.createdAtHint.low >>> 0, object.createdAtHint.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a ThreadCreateRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ThreadCreateRequest
     * @static
     * @param {ThreadCreateRequest} message ThreadCreateRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ThreadCreateRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.title = "";
            object.link = "";
            object.content = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdAtHint = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdAtHint = options.longs === String ? "0" : 0;
            object.boardId = "";
        }
        if (message.title != null && message.hasOwnProperty("title"))
            object.title = message.title;
        if (message.link != null && message.hasOwnProperty("link"))
            object.link = message.link;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.createdAtHint != null && message.hasOwnProperty("createdAtHint"))
            if (typeof message.createdAtHint === "number")
                object.createdAtHint = options.longs === String ? String(message.createdAtHint) : message.createdAtHint;
            else
                object.createdAtHint = options.longs === String ? $util.Long.prototype.toString.call(message.createdAtHint) : options.longs === Number ? new $util.LongBits(message.createdAtHint.low >>> 0, message.createdAtHint.high >>> 0).toNumber() : message.createdAtHint;
        if (message.boardId != null && message.hasOwnProperty("boardId"))
            object.boardId = message.boardId;
        return object;
    };

    /**
     * Converts this ThreadCreateRequest to JSON.
     * @function toJSON
     * @memberof ThreadCreateRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ThreadCreateRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ThreadCreateRequest;
})();

$root.ThreadCreateResponse = (function() {

    /**
     * Properties of a ThreadCreateResponse.
     * @exports IThreadCreateResponse
     * @interface IThreadCreateResponse
     * @property {string|null} [threadId] ThreadCreateResponse threadId
     */

    /**
     * Constructs a new ThreadCreateResponse.
     * @exports ThreadCreateResponse
     * @classdesc Represents a ThreadCreateResponse.
     * @implements IThreadCreateResponse
     * @constructor
     * @param {IThreadCreateResponse=} [properties] Properties to set
     */
    function ThreadCreateResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ThreadCreateResponse threadId.
     * @member {string} threadId
     * @memberof ThreadCreateResponse
     * @instance
     */
    ThreadCreateResponse.prototype.threadId = "";

    /**
     * Creates a new ThreadCreateResponse instance using the specified properties.
     * @function create
     * @memberof ThreadCreateResponse
     * @static
     * @param {IThreadCreateResponse=} [properties] Properties to set
     * @returns {ThreadCreateResponse} ThreadCreateResponse instance
     */
    ThreadCreateResponse.create = function create(properties) {
        return new ThreadCreateResponse(properties);
    };

    /**
     * Encodes the specified ThreadCreateResponse message. Does not implicitly {@link ThreadCreateResponse.verify|verify} messages.
     * @function encode
     * @memberof ThreadCreateResponse
     * @static
     * @param {IThreadCreateResponse} message ThreadCreateResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThreadCreateResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.threadId != null && Object.hasOwnProperty.call(message, "threadId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.threadId);
        return writer;
    };

    /**
     * Encodes the specified ThreadCreateResponse message, length delimited. Does not implicitly {@link ThreadCreateResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ThreadCreateResponse
     * @static
     * @param {IThreadCreateResponse} message ThreadCreateResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThreadCreateResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ThreadCreateResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ThreadCreateResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ThreadCreateResponse} ThreadCreateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThreadCreateResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ThreadCreateResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.threadId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ThreadCreateResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ThreadCreateResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ThreadCreateResponse} ThreadCreateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThreadCreateResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ThreadCreateResponse message.
     * @function verify
     * @memberof ThreadCreateResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ThreadCreateResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.threadId != null && message.hasOwnProperty("threadId"))
            if (!$util.isString(message.threadId))
                return "threadId: string expected";
        return null;
    };

    /**
     * Creates a ThreadCreateResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ThreadCreateResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ThreadCreateResponse} ThreadCreateResponse
     */
    ThreadCreateResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ThreadCreateResponse)
            return object;
        var message = new $root.ThreadCreateResponse();
        if (object.threadId != null)
            message.threadId = String(object.threadId);
        return message;
    };

    /**
     * Creates a plain object from a ThreadCreateResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ThreadCreateResponse
     * @static
     * @param {ThreadCreateResponse} message ThreadCreateResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ThreadCreateResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.threadId = "";
        if (message.threadId != null && message.hasOwnProperty("threadId"))
            object.threadId = message.threadId;
        return object;
    };

    /**
     * Converts this ThreadCreateResponse to JSON.
     * @function toJSON
     * @memberof ThreadCreateResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ThreadCreateResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ThreadCreateResponse;
})();

$root.ThreadWithBoardContext = (function() {

    /**
     * Properties of a ThreadWithBoardContext.
     * @exports IThreadWithBoardContext
     * @interface IThreadWithBoardContext
     * @property {IThread|null} [thread] ThreadWithBoardContext thread
     * @property {ICommentSelectResponse|null} [comments] ThreadWithBoardContext comments
     * @property {ICommentSelectGraphResponse|null} [commentsGraph] ThreadWithBoardContext commentsGraph
     * @property {IBoard|null} [board] ThreadWithBoardContext board
     */

    /**
     * Constructs a new ThreadWithBoardContext.
     * @exports ThreadWithBoardContext
     * @classdesc Represents a ThreadWithBoardContext.
     * @implements IThreadWithBoardContext
     * @constructor
     * @param {IThreadWithBoardContext=} [properties] Properties to set
     */
    function ThreadWithBoardContext(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ThreadWithBoardContext thread.
     * @member {IThread|null|undefined} thread
     * @memberof ThreadWithBoardContext
     * @instance
     */
    ThreadWithBoardContext.prototype.thread = null;

    /**
     * ThreadWithBoardContext comments.
     * @member {ICommentSelectResponse|null|undefined} comments
     * @memberof ThreadWithBoardContext
     * @instance
     */
    ThreadWithBoardContext.prototype.comments = null;

    /**
     * ThreadWithBoardContext commentsGraph.
     * @member {ICommentSelectGraphResponse|null|undefined} commentsGraph
     * @memberof ThreadWithBoardContext
     * @instance
     */
    ThreadWithBoardContext.prototype.commentsGraph = null;

    /**
     * ThreadWithBoardContext board.
     * @member {IBoard|null|undefined} board
     * @memberof ThreadWithBoardContext
     * @instance
     */
    ThreadWithBoardContext.prototype.board = null;

    /**
     * Creates a new ThreadWithBoardContext instance using the specified properties.
     * @function create
     * @memberof ThreadWithBoardContext
     * @static
     * @param {IThreadWithBoardContext=} [properties] Properties to set
     * @returns {ThreadWithBoardContext} ThreadWithBoardContext instance
     */
    ThreadWithBoardContext.create = function create(properties) {
        return new ThreadWithBoardContext(properties);
    };

    /**
     * Encodes the specified ThreadWithBoardContext message. Does not implicitly {@link ThreadWithBoardContext.verify|verify} messages.
     * @function encode
     * @memberof ThreadWithBoardContext
     * @static
     * @param {IThreadWithBoardContext} message ThreadWithBoardContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThreadWithBoardContext.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.thread != null && Object.hasOwnProperty.call(message, "thread"))
            $root.Thread.encode(message.thread, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.board != null && Object.hasOwnProperty.call(message, "board"))
            $root.Board.encode(message.board, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.comments != null && Object.hasOwnProperty.call(message, "comments"))
            $root.CommentSelectResponse.encode(message.comments, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.commentsGraph != null && Object.hasOwnProperty.call(message, "commentsGraph"))
            $root.CommentSelectGraphResponse.encode(message.commentsGraph, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ThreadWithBoardContext message, length delimited. Does not implicitly {@link ThreadWithBoardContext.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ThreadWithBoardContext
     * @static
     * @param {IThreadWithBoardContext} message ThreadWithBoardContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThreadWithBoardContext.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ThreadWithBoardContext message from the specified reader or buffer.
     * @function decode
     * @memberof ThreadWithBoardContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ThreadWithBoardContext} ThreadWithBoardContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThreadWithBoardContext.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ThreadWithBoardContext();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.thread = $root.Thread.decode(reader, reader.uint32());
                break;
            case 3:
                message.comments = $root.CommentSelectResponse.decode(reader, reader.uint32());
                break;
            case 4:
                message.commentsGraph = $root.CommentSelectGraphResponse.decode(reader, reader.uint32());
                break;
            case 2:
                message.board = $root.Board.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ThreadWithBoardContext message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ThreadWithBoardContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ThreadWithBoardContext} ThreadWithBoardContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThreadWithBoardContext.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ThreadWithBoardContext message.
     * @function verify
     * @memberof ThreadWithBoardContext
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ThreadWithBoardContext.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.thread != null && message.hasOwnProperty("thread")) {
            var error = $root.Thread.verify(message.thread);
            if (error)
                return "thread." + error;
        }
        if (message.comments != null && message.hasOwnProperty("comments")) {
            var error = $root.CommentSelectResponse.verify(message.comments);
            if (error)
                return "comments." + error;
        }
        if (message.commentsGraph != null && message.hasOwnProperty("commentsGraph")) {
            var error = $root.CommentSelectGraphResponse.verify(message.commentsGraph);
            if (error)
                return "commentsGraph." + error;
        }
        if (message.board != null && message.hasOwnProperty("board")) {
            var error = $root.Board.verify(message.board);
            if (error)
                return "board." + error;
        }
        return null;
    };

    /**
     * Creates a ThreadWithBoardContext message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ThreadWithBoardContext
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ThreadWithBoardContext} ThreadWithBoardContext
     */
    ThreadWithBoardContext.fromObject = function fromObject(object) {
        if (object instanceof $root.ThreadWithBoardContext)
            return object;
        var message = new $root.ThreadWithBoardContext();
        if (object.thread != null) {
            if (typeof object.thread !== "object")
                throw TypeError(".ThreadWithBoardContext.thread: object expected");
            message.thread = $root.Thread.fromObject(object.thread);
        }
        if (object.comments != null) {
            if (typeof object.comments !== "object")
                throw TypeError(".ThreadWithBoardContext.comments: object expected");
            message.comments = $root.CommentSelectResponse.fromObject(object.comments);
        }
        if (object.commentsGraph != null) {
            if (typeof object.commentsGraph !== "object")
                throw TypeError(".ThreadWithBoardContext.commentsGraph: object expected");
            message.commentsGraph = $root.CommentSelectGraphResponse.fromObject(object.commentsGraph);
        }
        if (object.board != null) {
            if (typeof object.board !== "object")
                throw TypeError(".ThreadWithBoardContext.board: object expected");
            message.board = $root.Board.fromObject(object.board);
        }
        return message;
    };

    /**
     * Creates a plain object from a ThreadWithBoardContext message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ThreadWithBoardContext
     * @static
     * @param {ThreadWithBoardContext} message ThreadWithBoardContext
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ThreadWithBoardContext.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.thread = null;
            object.board = null;
            object.comments = null;
            object.commentsGraph = null;
        }
        if (message.thread != null && message.hasOwnProperty("thread"))
            object.thread = $root.Thread.toObject(message.thread, options);
        if (message.board != null && message.hasOwnProperty("board"))
            object.board = $root.Board.toObject(message.board, options);
        if (message.comments != null && message.hasOwnProperty("comments"))
            object.comments = $root.CommentSelectResponse.toObject(message.comments, options);
        if (message.commentsGraph != null && message.hasOwnProperty("commentsGraph"))
            object.commentsGraph = $root.CommentSelectGraphResponse.toObject(message.commentsGraph, options);
        return object;
    };

    /**
     * Converts this ThreadWithBoardContext to JSON.
     * @function toJSON
     * @memberof ThreadWithBoardContext
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ThreadWithBoardContext.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ThreadWithBoardContext;
})();

$root.BanInfo = (function() {

    /**
     * Properties of a BanInfo.
     * @exports IBanInfo
     * @interface IBanInfo
     * @property {string|null} [bannedBy] BanInfo bannedBy
     * @property {string|null} [banReason] BanInfo banReason
     * @property {string|null} [approvedBy] BanInfo approvedBy
     * @property {string|null} [createdAt] BanInfo createdAt
     * @property {string|null} [reason] BanInfo reason
     */

    /**
     * Constructs a new BanInfo.
     * @exports BanInfo
     * @classdesc Represents a BanInfo.
     * @implements IBanInfo
     * @constructor
     * @param {IBanInfo=} [properties] Properties to set
     */
    function BanInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BanInfo bannedBy.
     * @member {string} bannedBy
     * @memberof BanInfo
     * @instance
     */
    BanInfo.prototype.bannedBy = "";

    /**
     * BanInfo banReason.
     * @member {string} banReason
     * @memberof BanInfo
     * @instance
     */
    BanInfo.prototype.banReason = "";

    /**
     * BanInfo approvedBy.
     * @member {string} approvedBy
     * @memberof BanInfo
     * @instance
     */
    BanInfo.prototype.approvedBy = "";

    /**
     * BanInfo createdAt.
     * @member {string} createdAt
     * @memberof BanInfo
     * @instance
     */
    BanInfo.prototype.createdAt = "";

    /**
     * BanInfo reason.
     * @member {string} reason
     * @memberof BanInfo
     * @instance
     */
    BanInfo.prototype.reason = "";

    /**
     * Creates a new BanInfo instance using the specified properties.
     * @function create
     * @memberof BanInfo
     * @static
     * @param {IBanInfo=} [properties] Properties to set
     * @returns {BanInfo} BanInfo instance
     */
    BanInfo.create = function create(properties) {
        return new BanInfo(properties);
    };

    /**
     * Encodes the specified BanInfo message. Does not implicitly {@link BanInfo.verify|verify} messages.
     * @function encode
     * @memberof BanInfo
     * @static
     * @param {IBanInfo} message BanInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BanInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.bannedBy != null && Object.hasOwnProperty.call(message, "bannedBy"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.bannedBy);
        if (message.approvedBy != null && Object.hasOwnProperty.call(message, "approvedBy"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.approvedBy);
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.createdAt);
        if (message.banReason != null && Object.hasOwnProperty.call(message, "banReason"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.banReason);
        if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.reason);
        return writer;
    };

    /**
     * Encodes the specified BanInfo message, length delimited. Does not implicitly {@link BanInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BanInfo
     * @static
     * @param {IBanInfo} message BanInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BanInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BanInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BanInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BanInfo} BanInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BanInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BanInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.bannedBy = reader.string();
                break;
            case 4:
                message.banReason = reader.string();
                break;
            case 2:
                message.approvedBy = reader.string();
                break;
            case 3:
                message.createdAt = reader.string();
                break;
            case 5:
                message.reason = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BanInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BanInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BanInfo} BanInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BanInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BanInfo message.
     * @function verify
     * @memberof BanInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BanInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.bannedBy != null && message.hasOwnProperty("bannedBy"))
            if (!$util.isString(message.bannedBy))
                return "bannedBy: string expected";
        if (message.banReason != null && message.hasOwnProperty("banReason"))
            if (!$util.isString(message.banReason))
                return "banReason: string expected";
        if (message.approvedBy != null && message.hasOwnProperty("approvedBy"))
            if (!$util.isString(message.approvedBy))
                return "approvedBy: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isString(message.createdAt))
                return "createdAt: string expected";
        if (message.reason != null && message.hasOwnProperty("reason"))
            if (!$util.isString(message.reason))
                return "reason: string expected";
        return null;
    };

    /**
     * Creates a BanInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BanInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BanInfo} BanInfo
     */
    BanInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.BanInfo)
            return object;
        var message = new $root.BanInfo();
        if (object.bannedBy != null)
            message.bannedBy = String(object.bannedBy);
        if (object.banReason != null)
            message.banReason = String(object.banReason);
        if (object.approvedBy != null)
            message.approvedBy = String(object.approvedBy);
        if (object.createdAt != null)
            message.createdAt = String(object.createdAt);
        if (object.reason != null)
            message.reason = String(object.reason);
        return message;
    };

    /**
     * Creates a plain object from a BanInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BanInfo
     * @static
     * @param {BanInfo} message BanInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BanInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.bannedBy = "";
            object.approvedBy = "";
            object.createdAt = "";
            object.banReason = "";
            object.reason = "";
        }
        if (message.bannedBy != null && message.hasOwnProperty("bannedBy"))
            object.bannedBy = message.bannedBy;
        if (message.approvedBy != null && message.hasOwnProperty("approvedBy"))
            object.approvedBy = message.approvedBy;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            object.createdAt = message.createdAt;
        if (message.banReason != null && message.hasOwnProperty("banReason"))
            object.banReason = message.banReason;
        if (message.reason != null && message.hasOwnProperty("reason"))
            object.reason = message.reason;
        return object;
    };

    /**
     * Converts this BanInfo to JSON.
     * @function toJSON
     * @memberof BanInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BanInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BanInfo;
})();

$root.ReportInfo = (function() {

    /**
     * Properties of a ReportInfo.
     * @exports IReportInfo
     * @interface IReportInfo
     * @property {string|null} [report] ReportInfo report
     * @property {IUserRef|null} [user] ReportInfo user
     * @property {number|null} [createdAt] ReportInfo createdAt
     */

    /**
     * Constructs a new ReportInfo.
     * @exports ReportInfo
     * @classdesc Represents a ReportInfo.
     * @implements IReportInfo
     * @constructor
     * @param {IReportInfo=} [properties] Properties to set
     */
    function ReportInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReportInfo report.
     * @member {string} report
     * @memberof ReportInfo
     * @instance
     */
    ReportInfo.prototype.report = "";

    /**
     * ReportInfo user.
     * @member {IUserRef|null|undefined} user
     * @memberof ReportInfo
     * @instance
     */
    ReportInfo.prototype.user = null;

    /**
     * ReportInfo createdAt.
     * @member {number} createdAt
     * @memberof ReportInfo
     * @instance
     */
    ReportInfo.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ReportInfo instance using the specified properties.
     * @function create
     * @memberof ReportInfo
     * @static
     * @param {IReportInfo=} [properties] Properties to set
     * @returns {ReportInfo} ReportInfo instance
     */
    ReportInfo.create = function create(properties) {
        return new ReportInfo(properties);
    };

    /**
     * Encodes the specified ReportInfo message. Does not implicitly {@link ReportInfo.verify|verify} messages.
     * @function encode
     * @memberof ReportInfo
     * @static
     * @param {IReportInfo} message ReportInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReportInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.report != null && Object.hasOwnProperty.call(message, "report"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.report);
        if (message.user != null && Object.hasOwnProperty.call(message, "user"))
            $root.UserRef.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.createdAt);
        return writer;
    };

    /**
     * Encodes the specified ReportInfo message, length delimited. Does not implicitly {@link ReportInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReportInfo
     * @static
     * @param {IReportInfo} message ReportInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReportInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReportInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ReportInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReportInfo} ReportInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReportInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReportInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.report = reader.string();
                break;
            case 2:
                message.user = $root.UserRef.decode(reader, reader.uint32());
                break;
            case 3:
                message.createdAt = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReportInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReportInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReportInfo} ReportInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReportInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReportInfo message.
     * @function verify
     * @memberof ReportInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReportInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.report != null && message.hasOwnProperty("report"))
            if (!$util.isString(message.report))
                return "report: string expected";
        if (message.user != null && message.hasOwnProperty("user")) {
            var error = $root.UserRef.verify(message.user);
            if (error)
                return "user." + error;
        }
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                return "createdAt: integer|Long expected";
        return null;
    };

    /**
     * Creates a ReportInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReportInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReportInfo} ReportInfo
     */
    ReportInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.ReportInfo)
            return object;
        var message = new $root.ReportInfo();
        if (object.report != null)
            message.report = String(object.report);
        if (object.user != null) {
            if (typeof object.user !== "object")
                throw TypeError(".ReportInfo.user: object expected");
            message.user = $root.UserRef.fromObject(object.user);
        }
        if (object.createdAt != null)
            if ($util.Long)
                (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
            else if (typeof object.createdAt === "string")
                message.createdAt = parseInt(object.createdAt, 10);
            else if (typeof object.createdAt === "number")
                message.createdAt = object.createdAt;
            else if (typeof object.createdAt === "object")
                message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a ReportInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReportInfo
     * @static
     * @param {ReportInfo} message ReportInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReportInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.report = "";
            object.user = null;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdAt = options.longs === String ? "0" : 0;
        }
        if (message.report != null && message.hasOwnProperty("report"))
            object.report = message.report;
        if (message.user != null && message.hasOwnProperty("user"))
            object.user = $root.UserRef.toObject(message.user, options);
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (typeof message.createdAt === "number")
                object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
            else
                object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
        return object;
    };

    /**
     * Converts this ReportInfo to JSON.
     * @function toJSON
     * @memberof ReportInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReportInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReportInfo;
})();

$root.Vote = (function() {

    /**
     * Properties of a Vote.
     * @exports IVote
     * @interface IVote
     * @property {number|null} [type] Vote type
     * @property {string|null} [typeCode] Vote typeCode
     * @property {number|null} [amount] Vote amount
     * @property {number|null} [createdAt] Vote createdAt
     */

    /**
     * Constructs a new Vote.
     * @exports Vote
     * @classdesc Represents a Vote.
     * @implements IVote
     * @constructor
     * @param {IVote=} [properties] Properties to set
     */
    function Vote(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Vote type.
     * @member {number} type
     * @memberof Vote
     * @instance
     */
    Vote.prototype.type = 0;

    /**
     * Vote typeCode.
     * @member {string} typeCode
     * @memberof Vote
     * @instance
     */
    Vote.prototype.typeCode = "";

    /**
     * Vote amount.
     * @member {number} amount
     * @memberof Vote
     * @instance
     */
    Vote.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Vote createdAt.
     * @member {number} createdAt
     * @memberof Vote
     * @instance
     */
    Vote.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new Vote instance using the specified properties.
     * @function create
     * @memberof Vote
     * @static
     * @param {IVote=} [properties] Properties to set
     * @returns {Vote} Vote instance
     */
    Vote.create = function create(properties) {
        return new Vote(properties);
    };

    /**
     * Encodes the specified Vote message. Does not implicitly {@link Vote.verify|verify} messages.
     * @function encode
     * @memberof Vote
     * @static
     * @param {IVote} message Vote message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Vote.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.typeCode != null && Object.hasOwnProperty.call(message, "typeCode"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.typeCode);
        if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.amount);
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.createdAt);
        return writer;
    };

    /**
     * Encodes the specified Vote message, length delimited. Does not implicitly {@link Vote.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Vote
     * @static
     * @param {IVote} message Vote message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Vote.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Vote message from the specified reader or buffer.
     * @function decode
     * @memberof Vote
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Vote} Vote
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Vote.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Vote();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 3:
                message.typeCode = reader.string();
                break;
            case 4:
                message.amount = reader.int64();
                break;
            case 5:
                message.createdAt = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Vote message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Vote
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Vote} Vote
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Vote.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Vote message.
     * @function verify
     * @memberof Vote
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Vote.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.typeCode != null && message.hasOwnProperty("typeCode"))
            if (!$util.isString(message.typeCode))
                return "typeCode: string expected";
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                return "amount: integer|Long expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                return "createdAt: integer|Long expected";
        return null;
    };

    /**
     * Creates a Vote message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Vote
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Vote} Vote
     */
    Vote.fromObject = function fromObject(object) {
        if (object instanceof $root.Vote)
            return object;
        var message = new $root.Vote();
        if (object.type != null)
            message.type = object.type | 0;
        if (object.typeCode != null)
            message.typeCode = String(object.typeCode);
        if (object.amount != null)
            if ($util.Long)
                (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
            else if (typeof object.amount === "string")
                message.amount = parseInt(object.amount, 10);
            else if (typeof object.amount === "number")
                message.amount = object.amount;
            else if (typeof object.amount === "object")
                message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
        if (object.createdAt != null)
            if ($util.Long)
                (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
            else if (typeof object.createdAt === "string")
                message.createdAt = parseInt(object.createdAt, 10);
            else if (typeof object.createdAt === "number")
                message.createdAt = object.createdAt;
            else if (typeof object.createdAt === "object")
                message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a Vote message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Vote
     * @static
     * @param {Vote} message Vote
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Vote.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = 0;
            object.typeCode = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.amount = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdAt = options.longs === String ? "0" : 0;
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.typeCode != null && message.hasOwnProperty("typeCode"))
            object.typeCode = message.typeCode;
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (typeof message.amount === "number")
                object.amount = options.longs === String ? String(message.amount) : message.amount;
            else
                object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (typeof message.createdAt === "number")
                object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
            else
                object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
        return object;
    };

    /**
     * Converts this Vote to JSON.
     * @function toJSON
     * @memberof Vote
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Vote.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Vote;
})();

$root.CommentActionedContext = (function() {

    /**
     * Properties of a CommentActionedContext.
     * @exports ICommentActionedContext
     * @interface ICommentActionedContext
     * @property {boolean|null} [isModerator] CommentActionedContext isModerator
     * @property {string|null} [vote] CommentActionedContext vote
     */

    /**
     * Constructs a new CommentActionedContext.
     * @exports CommentActionedContext
     * @classdesc Represents a CommentActionedContext.
     * @implements ICommentActionedContext
     * @constructor
     * @param {ICommentActionedContext=} [properties] Properties to set
     */
    function CommentActionedContext(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CommentActionedContext isModerator.
     * @member {boolean} isModerator
     * @memberof CommentActionedContext
     * @instance
     */
    CommentActionedContext.prototype.isModerator = false;

    /**
     * CommentActionedContext vote.
     * @member {string} vote
     * @memberof CommentActionedContext
     * @instance
     */
    CommentActionedContext.prototype.vote = "";

    /**
     * Creates a new CommentActionedContext instance using the specified properties.
     * @function create
     * @memberof CommentActionedContext
     * @static
     * @param {ICommentActionedContext=} [properties] Properties to set
     * @returns {CommentActionedContext} CommentActionedContext instance
     */
    CommentActionedContext.create = function create(properties) {
        return new CommentActionedContext(properties);
    };

    /**
     * Encodes the specified CommentActionedContext message. Does not implicitly {@link CommentActionedContext.verify|verify} messages.
     * @function encode
     * @memberof CommentActionedContext
     * @static
     * @param {ICommentActionedContext} message CommentActionedContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentActionedContext.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.vote != null && Object.hasOwnProperty.call(message, "vote"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.vote);
        if (message.isModerator != null && Object.hasOwnProperty.call(message, "isModerator"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isModerator);
        return writer;
    };

    /**
     * Encodes the specified CommentActionedContext message, length delimited. Does not implicitly {@link CommentActionedContext.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CommentActionedContext
     * @static
     * @param {ICommentActionedContext} message CommentActionedContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentActionedContext.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CommentActionedContext message from the specified reader or buffer.
     * @function decode
     * @memberof CommentActionedContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommentActionedContext} CommentActionedContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentActionedContext.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommentActionedContext();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                message.isModerator = reader.bool();
                break;
            case 1:
                message.vote = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CommentActionedContext message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CommentActionedContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommentActionedContext} CommentActionedContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentActionedContext.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CommentActionedContext message.
     * @function verify
     * @memberof CommentActionedContext
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CommentActionedContext.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.isModerator != null && message.hasOwnProperty("isModerator"))
            if (typeof message.isModerator !== "boolean")
                return "isModerator: boolean expected";
        if (message.vote != null && message.hasOwnProperty("vote"))
            if (!$util.isString(message.vote))
                return "vote: string expected";
        return null;
    };

    /**
     * Creates a CommentActionedContext message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CommentActionedContext
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CommentActionedContext} CommentActionedContext
     */
    CommentActionedContext.fromObject = function fromObject(object) {
        if (object instanceof $root.CommentActionedContext)
            return object;
        var message = new $root.CommentActionedContext();
        if (object.isModerator != null)
            message.isModerator = Boolean(object.isModerator);
        if (object.vote != null)
            message.vote = String(object.vote);
        return message;
    };

    /**
     * Creates a plain object from a CommentActionedContext message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CommentActionedContext
     * @static
     * @param {CommentActionedContext} message CommentActionedContext
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CommentActionedContext.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.vote = "";
            object.isModerator = false;
        }
        if (message.vote != null && message.hasOwnProperty("vote"))
            object.vote = message.vote;
        if (message.isModerator != null && message.hasOwnProperty("isModerator"))
            object.isModerator = message.isModerator;
        return object;
    };

    /**
     * Converts this CommentActionedContext to JSON.
     * @function toJSON
     * @memberof CommentActionedContext
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommentActionedContext.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CommentActionedContext;
})();

$root.ThreadActionedContext = (function() {

    /**
     * Properties of a ThreadActionedContext.
     * @exports IThreadActionedContext
     * @interface IThreadActionedContext
     * @property {boolean|null} [isModerator] ThreadActionedContext isModerator
     * @property {string|null} [vote] ThreadActionedContext vote
     */

    /**
     * Constructs a new ThreadActionedContext.
     * @exports ThreadActionedContext
     * @classdesc Represents a ThreadActionedContext.
     * @implements IThreadActionedContext
     * @constructor
     * @param {IThreadActionedContext=} [properties] Properties to set
     */
    function ThreadActionedContext(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ThreadActionedContext isModerator.
     * @member {boolean} isModerator
     * @memberof ThreadActionedContext
     * @instance
     */
    ThreadActionedContext.prototype.isModerator = false;

    /**
     * ThreadActionedContext vote.
     * @member {string} vote
     * @memberof ThreadActionedContext
     * @instance
     */
    ThreadActionedContext.prototype.vote = "";

    /**
     * Creates a new ThreadActionedContext instance using the specified properties.
     * @function create
     * @memberof ThreadActionedContext
     * @static
     * @param {IThreadActionedContext=} [properties] Properties to set
     * @returns {ThreadActionedContext} ThreadActionedContext instance
     */
    ThreadActionedContext.create = function create(properties) {
        return new ThreadActionedContext(properties);
    };

    /**
     * Encodes the specified ThreadActionedContext message. Does not implicitly {@link ThreadActionedContext.verify|verify} messages.
     * @function encode
     * @memberof ThreadActionedContext
     * @static
     * @param {IThreadActionedContext} message ThreadActionedContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThreadActionedContext.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.vote != null && Object.hasOwnProperty.call(message, "vote"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.vote);
        if (message.isModerator != null && Object.hasOwnProperty.call(message, "isModerator"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isModerator);
        return writer;
    };

    /**
     * Encodes the specified ThreadActionedContext message, length delimited. Does not implicitly {@link ThreadActionedContext.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ThreadActionedContext
     * @static
     * @param {IThreadActionedContext} message ThreadActionedContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThreadActionedContext.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ThreadActionedContext message from the specified reader or buffer.
     * @function decode
     * @memberof ThreadActionedContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ThreadActionedContext} ThreadActionedContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThreadActionedContext.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ThreadActionedContext();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                message.isModerator = reader.bool();
                break;
            case 1:
                message.vote = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ThreadActionedContext message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ThreadActionedContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ThreadActionedContext} ThreadActionedContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThreadActionedContext.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ThreadActionedContext message.
     * @function verify
     * @memberof ThreadActionedContext
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ThreadActionedContext.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.isModerator != null && message.hasOwnProperty("isModerator"))
            if (typeof message.isModerator !== "boolean")
                return "isModerator: boolean expected";
        if (message.vote != null && message.hasOwnProperty("vote"))
            if (!$util.isString(message.vote))
                return "vote: string expected";
        return null;
    };

    /**
     * Creates a ThreadActionedContext message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ThreadActionedContext
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ThreadActionedContext} ThreadActionedContext
     */
    ThreadActionedContext.fromObject = function fromObject(object) {
        if (object instanceof $root.ThreadActionedContext)
            return object;
        var message = new $root.ThreadActionedContext();
        if (object.isModerator != null)
            message.isModerator = Boolean(object.isModerator);
        if (object.vote != null)
            message.vote = String(object.vote);
        return message;
    };

    /**
     * Creates a plain object from a ThreadActionedContext message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ThreadActionedContext
     * @static
     * @param {ThreadActionedContext} message ThreadActionedContext
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ThreadActionedContext.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.vote = "";
            object.isModerator = false;
        }
        if (message.vote != null && message.hasOwnProperty("vote"))
            object.vote = message.vote;
        if (message.isModerator != null && message.hasOwnProperty("isModerator"))
            object.isModerator = message.isModerator;
        return object;
    };

    /**
     * Converts this ThreadActionedContext to JSON.
     * @function toJSON
     * @memberof ThreadActionedContext
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ThreadActionedContext.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ThreadActionedContext;
})();

$root.CommentEditRequest = (function() {

    /**
     * Properties of a CommentEditRequest.
     * @exports ICommentEditRequest
     * @interface ICommentEditRequest
     * @property {string|null} [commentId] CommentEditRequest commentId
     * @property {string|null} [content] CommentEditRequest content
     * @property {IComment|null} [comment] CommentEditRequest comment
     */

    /**
     * Constructs a new CommentEditRequest.
     * @exports CommentEditRequest
     * @classdesc Represents a CommentEditRequest.
     * @implements ICommentEditRequest
     * @constructor
     * @param {ICommentEditRequest=} [properties] Properties to set
     */
    function CommentEditRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CommentEditRequest commentId.
     * @member {string} commentId
     * @memberof CommentEditRequest
     * @instance
     */
    CommentEditRequest.prototype.commentId = "";

    /**
     * CommentEditRequest content.
     * @member {string} content
     * @memberof CommentEditRequest
     * @instance
     */
    CommentEditRequest.prototype.content = "";

    /**
     * CommentEditRequest comment.
     * @member {IComment|null|undefined} comment
     * @memberof CommentEditRequest
     * @instance
     */
    CommentEditRequest.prototype.comment = null;

    /**
     * Creates a new CommentEditRequest instance using the specified properties.
     * @function create
     * @memberof CommentEditRequest
     * @static
     * @param {ICommentEditRequest=} [properties] Properties to set
     * @returns {CommentEditRequest} CommentEditRequest instance
     */
    CommentEditRequest.create = function create(properties) {
        return new CommentEditRequest(properties);
    };

    /**
     * Encodes the specified CommentEditRequest message. Does not implicitly {@link CommentEditRequest.verify|verify} messages.
     * @function encode
     * @memberof CommentEditRequest
     * @static
     * @param {ICommentEditRequest} message CommentEditRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentEditRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.commentId != null && Object.hasOwnProperty.call(message, "commentId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.commentId);
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
        if (message.comment != null && Object.hasOwnProperty.call(message, "comment"))
            $root.Comment.encode(message.comment, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CommentEditRequest message, length delimited. Does not implicitly {@link CommentEditRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CommentEditRequest
     * @static
     * @param {ICommentEditRequest} message CommentEditRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentEditRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CommentEditRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CommentEditRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommentEditRequest} CommentEditRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentEditRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommentEditRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.commentId = reader.string();
                break;
            case 2:
                message.content = reader.string();
                break;
            case 3:
                message.comment = $root.Comment.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CommentEditRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CommentEditRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommentEditRequest} CommentEditRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentEditRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CommentEditRequest message.
     * @function verify
     * @memberof CommentEditRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CommentEditRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.commentId != null && message.hasOwnProperty("commentId"))
            if (!$util.isString(message.commentId))
                return "commentId: string expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.comment != null && message.hasOwnProperty("comment")) {
            var error = $root.Comment.verify(message.comment);
            if (error)
                return "comment." + error;
        }
        return null;
    };

    /**
     * Creates a CommentEditRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CommentEditRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CommentEditRequest} CommentEditRequest
     */
    CommentEditRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.CommentEditRequest)
            return object;
        var message = new $root.CommentEditRequest();
        if (object.commentId != null)
            message.commentId = String(object.commentId);
        if (object.content != null)
            message.content = String(object.content);
        if (object.comment != null) {
            if (typeof object.comment !== "object")
                throw TypeError(".CommentEditRequest.comment: object expected");
            message.comment = $root.Comment.fromObject(object.comment);
        }
        return message;
    };

    /**
     * Creates a plain object from a CommentEditRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CommentEditRequest
     * @static
     * @param {CommentEditRequest} message CommentEditRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CommentEditRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.commentId = "";
            object.content = "";
            object.comment = null;
        }
        if (message.commentId != null && message.hasOwnProperty("commentId"))
            object.commentId = message.commentId;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.comment != null && message.hasOwnProperty("comment"))
            object.comment = $root.Comment.toObject(message.comment, options);
        return object;
    };

    /**
     * Converts this CommentEditRequest to JSON.
     * @function toJSON
     * @memberof CommentEditRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommentEditRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CommentEditRequest;
})();

$root.CommentCreateResponse = (function() {

    /**
     * Properties of a CommentCreateResponse.
     * @exports ICommentCreateResponse
     * @interface ICommentCreateResponse
     * @property {number|null} [commentId] CommentCreateResponse commentId
     * @property {string|null} [commentuId] CommentCreateResponse commentuId
     */

    /**
     * Constructs a new CommentCreateResponse.
     * @exports CommentCreateResponse
     * @classdesc Represents a CommentCreateResponse.
     * @implements ICommentCreateResponse
     * @constructor
     * @param {ICommentCreateResponse=} [properties] Properties to set
     */
    function CommentCreateResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CommentCreateResponse commentId.
     * @member {number} commentId
     * @memberof CommentCreateResponse
     * @instance
     */
    CommentCreateResponse.prototype.commentId = 0;

    /**
     * CommentCreateResponse commentuId.
     * @member {string} commentuId
     * @memberof CommentCreateResponse
     * @instance
     */
    CommentCreateResponse.prototype.commentuId = "";

    /**
     * Creates a new CommentCreateResponse instance using the specified properties.
     * @function create
     * @memberof CommentCreateResponse
     * @static
     * @param {ICommentCreateResponse=} [properties] Properties to set
     * @returns {CommentCreateResponse} CommentCreateResponse instance
     */
    CommentCreateResponse.create = function create(properties) {
        return new CommentCreateResponse(properties);
    };

    /**
     * Encodes the specified CommentCreateResponse message. Does not implicitly {@link CommentCreateResponse.verify|verify} messages.
     * @function encode
     * @memberof CommentCreateResponse
     * @static
     * @param {ICommentCreateResponse} message CommentCreateResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentCreateResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.commentId != null && Object.hasOwnProperty.call(message, "commentId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.commentId);
        if (message.commentuId != null && Object.hasOwnProperty.call(message, "commentuId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.commentuId);
        return writer;
    };

    /**
     * Encodes the specified CommentCreateResponse message, length delimited. Does not implicitly {@link CommentCreateResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CommentCreateResponse
     * @static
     * @param {ICommentCreateResponse} message CommentCreateResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentCreateResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CommentCreateResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CommentCreateResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommentCreateResponse} CommentCreateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentCreateResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommentCreateResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.commentId = reader.uint32();
                break;
            case 2:
                message.commentuId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CommentCreateResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CommentCreateResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommentCreateResponse} CommentCreateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentCreateResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CommentCreateResponse message.
     * @function verify
     * @memberof CommentCreateResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CommentCreateResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.commentId != null && message.hasOwnProperty("commentId"))
            if (!$util.isInteger(message.commentId))
                return "commentId: integer expected";
        if (message.commentuId != null && message.hasOwnProperty("commentuId"))
            if (!$util.isString(message.commentuId))
                return "commentuId: string expected";
        return null;
    };

    /**
     * Creates a CommentCreateResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CommentCreateResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CommentCreateResponse} CommentCreateResponse
     */
    CommentCreateResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.CommentCreateResponse)
            return object;
        var message = new $root.CommentCreateResponse();
        if (object.commentId != null)
            message.commentId = object.commentId >>> 0;
        if (object.commentuId != null)
            message.commentuId = String(object.commentuId);
        return message;
    };

    /**
     * Creates a plain object from a CommentCreateResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CommentCreateResponse
     * @static
     * @param {CommentCreateResponse} message CommentCreateResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CommentCreateResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.commentId = 0;
            object.commentuId = "";
        }
        if (message.commentId != null && message.hasOwnProperty("commentId"))
            object.commentId = message.commentId;
        if (message.commentuId != null && message.hasOwnProperty("commentuId"))
            object.commentuId = message.commentuId;
        return object;
    };

    /**
     * Converts this CommentCreateResponse to JSON.
     * @function toJSON
     * @memberof CommentCreateResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommentCreateResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CommentCreateResponse;
})();

$root.CommentCreateRequest = (function() {

    /**
     * Properties of a CommentCreateRequest.
     * @exports ICommentCreateRequest
     * @interface ICommentCreateRequest
     * @property {string|null} [threadId] CommentCreateRequest threadId
     * @property {IComment|null} [comment] CommentCreateRequest comment
     */

    /**
     * Constructs a new CommentCreateRequest.
     * @exports CommentCreateRequest
     * @classdesc Represents a CommentCreateRequest.
     * @implements ICommentCreateRequest
     * @constructor
     * @param {ICommentCreateRequest=} [properties] Properties to set
     */
    function CommentCreateRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CommentCreateRequest threadId.
     * @member {string} threadId
     * @memberof CommentCreateRequest
     * @instance
     */
    CommentCreateRequest.prototype.threadId = "";

    /**
     * CommentCreateRequest comment.
     * @member {IComment|null|undefined} comment
     * @memberof CommentCreateRequest
     * @instance
     */
    CommentCreateRequest.prototype.comment = null;

    /**
     * Creates a new CommentCreateRequest instance using the specified properties.
     * @function create
     * @memberof CommentCreateRequest
     * @static
     * @param {ICommentCreateRequest=} [properties] Properties to set
     * @returns {CommentCreateRequest} CommentCreateRequest instance
     */
    CommentCreateRequest.create = function create(properties) {
        return new CommentCreateRequest(properties);
    };

    /**
     * Encodes the specified CommentCreateRequest message. Does not implicitly {@link CommentCreateRequest.verify|verify} messages.
     * @function encode
     * @memberof CommentCreateRequest
     * @static
     * @param {ICommentCreateRequest} message CommentCreateRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentCreateRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.threadId != null && Object.hasOwnProperty.call(message, "threadId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.threadId);
        if (message.comment != null && Object.hasOwnProperty.call(message, "comment"))
            $root.Comment.encode(message.comment, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CommentCreateRequest message, length delimited. Does not implicitly {@link CommentCreateRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CommentCreateRequest
     * @static
     * @param {ICommentCreateRequest} message CommentCreateRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentCreateRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CommentCreateRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CommentCreateRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommentCreateRequest} CommentCreateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentCreateRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommentCreateRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.threadId = reader.string();
                break;
            case 3:
                message.comment = $root.Comment.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CommentCreateRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CommentCreateRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommentCreateRequest} CommentCreateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentCreateRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CommentCreateRequest message.
     * @function verify
     * @memberof CommentCreateRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CommentCreateRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.threadId != null && message.hasOwnProperty("threadId"))
            if (!$util.isString(message.threadId))
                return "threadId: string expected";
        if (message.comment != null && message.hasOwnProperty("comment")) {
            var error = $root.Comment.verify(message.comment);
            if (error)
                return "comment." + error;
        }
        return null;
    };

    /**
     * Creates a CommentCreateRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CommentCreateRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CommentCreateRequest} CommentCreateRequest
     */
    CommentCreateRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.CommentCreateRequest)
            return object;
        var message = new $root.CommentCreateRequest();
        if (object.threadId != null)
            message.threadId = String(object.threadId);
        if (object.comment != null) {
            if (typeof object.comment !== "object")
                throw TypeError(".CommentCreateRequest.comment: object expected");
            message.comment = $root.Comment.fromObject(object.comment);
        }
        return message;
    };

    /**
     * Creates a plain object from a CommentCreateRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CommentCreateRequest
     * @static
     * @param {CommentCreateRequest} message CommentCreateRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CommentCreateRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.threadId = "";
            object.comment = null;
        }
        if (message.threadId != null && message.hasOwnProperty("threadId"))
            object.threadId = message.threadId;
        if (message.comment != null && message.hasOwnProperty("comment"))
            object.comment = $root.Comment.toObject(message.comment, options);
        return object;
    };

    /**
     * Converts this CommentCreateRequest to JSON.
     * @function toJSON
     * @memberof CommentCreateRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommentCreateRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CommentCreateRequest;
})();

$root.CommentNode = (function() {

    /**
     * Properties of a CommentNode.
     * @exports ICommentNode
     * @interface ICommentNode
     * @property {IComment|null} [comment] CommentNode comment
     * @property {boolean|null} [clipped] CommentNode clipped
     * @property {Object.<string,ICommentNode>|null} [children] CommentNode children
     */

    /**
     * Constructs a new CommentNode.
     * @exports CommentNode
     * @classdesc Represents a CommentNode.
     * @implements ICommentNode
     * @constructor
     * @param {ICommentNode=} [properties] Properties to set
     */
    function CommentNode(properties) {
        this.children = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CommentNode comment.
     * @member {IComment|null|undefined} comment
     * @memberof CommentNode
     * @instance
     */
    CommentNode.prototype.comment = null;

    /**
     * CommentNode clipped.
     * @member {boolean} clipped
     * @memberof CommentNode
     * @instance
     */
    CommentNode.prototype.clipped = false;

    /**
     * CommentNode children.
     * @member {Object.<string,ICommentNode>} children
     * @memberof CommentNode
     * @instance
     */
    CommentNode.prototype.children = $util.emptyObject;

    /**
     * Creates a new CommentNode instance using the specified properties.
     * @function create
     * @memberof CommentNode
     * @static
     * @param {ICommentNode=} [properties] Properties to set
     * @returns {CommentNode} CommentNode instance
     */
    CommentNode.create = function create(properties) {
        return new CommentNode(properties);
    };

    /**
     * Encodes the specified CommentNode message. Does not implicitly {@link CommentNode.verify|verify} messages.
     * @function encode
     * @memberof CommentNode
     * @static
     * @param {ICommentNode} message CommentNode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentNode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.comment != null && Object.hasOwnProperty.call(message, "comment"))
            $root.Comment.encode(message.comment, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.children != null && Object.hasOwnProperty.call(message, "children"))
            for (var keys = Object.keys(message.children), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.CommentNode.encode(message.children[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.clipped != null && Object.hasOwnProperty.call(message, "clipped"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.clipped);
        return writer;
    };

    /**
     * Encodes the specified CommentNode message, length delimited. Does not implicitly {@link CommentNode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CommentNode
     * @static
     * @param {ICommentNode} message CommentNode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentNode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CommentNode message from the specified reader or buffer.
     * @function decode
     * @memberof CommentNode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommentNode} CommentNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentNode.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommentNode(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.comment = $root.Comment.decode(reader, reader.uint32());
                break;
            case 3:
                message.clipped = reader.bool();
                break;
            case 2:
                if (message.children === $util.emptyObject)
                    message.children = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = null;
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = $root.CommentNode.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.children[key] = value;
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CommentNode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CommentNode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommentNode} CommentNode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentNode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CommentNode message.
     * @function verify
     * @memberof CommentNode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CommentNode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.comment != null && message.hasOwnProperty("comment")) {
            var error = $root.Comment.verify(message.comment);
            if (error)
                return "comment." + error;
        }
        if (message.clipped != null && message.hasOwnProperty("clipped"))
            if (typeof message.clipped !== "boolean")
                return "clipped: boolean expected";
        if (message.children != null && message.hasOwnProperty("children")) {
            if (!$util.isObject(message.children))
                return "children: object expected";
            var key = Object.keys(message.children);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.CommentNode.verify(message.children[key[i]]);
                if (error)
                    return "children." + error;
            }
        }
        return null;
    };

    /**
     * Creates a CommentNode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CommentNode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CommentNode} CommentNode
     */
    CommentNode.fromObject = function fromObject(object) {
        if (object instanceof $root.CommentNode)
            return object;
        var message = new $root.CommentNode();
        if (object.comment != null) {
            if (typeof object.comment !== "object")
                throw TypeError(".CommentNode.comment: object expected");
            message.comment = $root.Comment.fromObject(object.comment);
        }
        if (object.clipped != null)
            message.clipped = Boolean(object.clipped);
        if (object.children) {
            if (typeof object.children !== "object")
                throw TypeError(".CommentNode.children: object expected");
            message.children = {};
            for (var keys = Object.keys(object.children), i = 0; i < keys.length; ++i) {
                if (typeof object.children[keys[i]] !== "object")
                    throw TypeError(".CommentNode.children: object expected");
                message.children[keys[i]] = $root.CommentNode.fromObject(object.children[keys[i]]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a CommentNode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CommentNode
     * @static
     * @param {CommentNode} message CommentNode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CommentNode.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.children = {};
        if (options.defaults) {
            object.comment = null;
            object.clipped = false;
        }
        if (message.comment != null && message.hasOwnProperty("comment"))
            object.comment = $root.Comment.toObject(message.comment, options);
        var keys2;
        if (message.children && (keys2 = Object.keys(message.children)).length) {
            object.children = {};
            for (var j = 0; j < keys2.length; ++j)
                object.children[keys2[j]] = $root.CommentNode.toObject(message.children[keys2[j]], options);
        }
        if (message.clipped != null && message.hasOwnProperty("clipped"))
            object.clipped = message.clipped;
        return object;
    };

    /**
     * Converts this CommentNode to JSON.
     * @function toJSON
     * @memberof CommentNode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommentNode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CommentNode;
})();

$root.CommentSelectResponse = (function() {

    /**
     * Properties of a CommentSelectResponse.
     * @exports ICommentSelectResponse
     * @interface ICommentSelectResponse
     * @property {Array.<IComment>|null} [data] CommentSelectResponse data
     * @property {string|null} [token] CommentSelectResponse token
     */

    /**
     * Constructs a new CommentSelectResponse.
     * @exports CommentSelectResponse
     * @classdesc Represents a CommentSelectResponse.
     * @implements ICommentSelectResponse
     * @constructor
     * @param {ICommentSelectResponse=} [properties] Properties to set
     */
    function CommentSelectResponse(properties) {
        this.data = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CommentSelectResponse data.
     * @member {Array.<IComment>} data
     * @memberof CommentSelectResponse
     * @instance
     */
    CommentSelectResponse.prototype.data = $util.emptyArray;

    /**
     * CommentSelectResponse token.
     * @member {string} token
     * @memberof CommentSelectResponse
     * @instance
     */
    CommentSelectResponse.prototype.token = "";

    /**
     * Creates a new CommentSelectResponse instance using the specified properties.
     * @function create
     * @memberof CommentSelectResponse
     * @static
     * @param {ICommentSelectResponse=} [properties] Properties to set
     * @returns {CommentSelectResponse} CommentSelectResponse instance
     */
    CommentSelectResponse.create = function create(properties) {
        return new CommentSelectResponse(properties);
    };

    /**
     * Encodes the specified CommentSelectResponse message. Does not implicitly {@link CommentSelectResponse.verify|verify} messages.
     * @function encode
     * @memberof CommentSelectResponse
     * @static
     * @param {ICommentSelectResponse} message CommentSelectResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentSelectResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.data != null && message.data.length)
            for (var i = 0; i < message.data.length; ++i)
                $root.Comment.encode(message.data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
        return writer;
    };

    /**
     * Encodes the specified CommentSelectResponse message, length delimited. Does not implicitly {@link CommentSelectResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CommentSelectResponse
     * @static
     * @param {ICommentSelectResponse} message CommentSelectResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentSelectResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CommentSelectResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CommentSelectResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommentSelectResponse} CommentSelectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentSelectResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommentSelectResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.data && message.data.length))
                    message.data = [];
                message.data.push($root.Comment.decode(reader, reader.uint32()));
                break;
            case 2:
                message.token = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CommentSelectResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CommentSelectResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommentSelectResponse} CommentSelectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentSelectResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CommentSelectResponse message.
     * @function verify
     * @memberof CommentSelectResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CommentSelectResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.data != null && message.hasOwnProperty("data")) {
            if (!Array.isArray(message.data))
                return "data: array expected";
            for (var i = 0; i < message.data.length; ++i) {
                var error = $root.Comment.verify(message.data[i]);
                if (error)
                    return "data." + error;
            }
        }
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
        return null;
    };

    /**
     * Creates a CommentSelectResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CommentSelectResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CommentSelectResponse} CommentSelectResponse
     */
    CommentSelectResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.CommentSelectResponse)
            return object;
        var message = new $root.CommentSelectResponse();
        if (object.data) {
            if (!Array.isArray(object.data))
                throw TypeError(".CommentSelectResponse.data: array expected");
            message.data = [];
            for (var i = 0; i < object.data.length; ++i) {
                if (typeof object.data[i] !== "object")
                    throw TypeError(".CommentSelectResponse.data: object expected");
                message.data[i] = $root.Comment.fromObject(object.data[i]);
            }
        }
        if (object.token != null)
            message.token = String(object.token);
        return message;
    };

    /**
     * Creates a plain object from a CommentSelectResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CommentSelectResponse
     * @static
     * @param {CommentSelectResponse} message CommentSelectResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CommentSelectResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.data = [];
        if (options.defaults)
            object.token = "";
        if (message.data && message.data.length) {
            object.data = [];
            for (var j = 0; j < message.data.length; ++j)
                object.data[j] = $root.Comment.toObject(message.data[j], options);
        }
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        return object;
    };

    /**
     * Converts this CommentSelectResponse to JSON.
     * @function toJSON
     * @memberof CommentSelectResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommentSelectResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CommentSelectResponse;
})();

$root.CommentSelectGraphResponse = (function() {

    /**
     * Properties of a CommentSelectGraphResponse.
     * @exports ICommentSelectGraphResponse
     * @interface ICommentSelectGraphResponse
     * @property {Object.<string,ICommentNode>|null} [data] CommentSelectGraphResponse data
     * @property {string|null} [token] CommentSelectGraphResponse token
     */

    /**
     * Constructs a new CommentSelectGraphResponse.
     * @exports CommentSelectGraphResponse
     * @classdesc Represents a CommentSelectGraphResponse.
     * @implements ICommentSelectGraphResponse
     * @constructor
     * @param {ICommentSelectGraphResponse=} [properties] Properties to set
     */
    function CommentSelectGraphResponse(properties) {
        this.data = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CommentSelectGraphResponse data.
     * @member {Object.<string,ICommentNode>} data
     * @memberof CommentSelectGraphResponse
     * @instance
     */
    CommentSelectGraphResponse.prototype.data = $util.emptyObject;

    /**
     * CommentSelectGraphResponse token.
     * @member {string} token
     * @memberof CommentSelectGraphResponse
     * @instance
     */
    CommentSelectGraphResponse.prototype.token = "";

    /**
     * Creates a new CommentSelectGraphResponse instance using the specified properties.
     * @function create
     * @memberof CommentSelectGraphResponse
     * @static
     * @param {ICommentSelectGraphResponse=} [properties] Properties to set
     * @returns {CommentSelectGraphResponse} CommentSelectGraphResponse instance
     */
    CommentSelectGraphResponse.create = function create(properties) {
        return new CommentSelectGraphResponse(properties);
    };

    /**
     * Encodes the specified CommentSelectGraphResponse message. Does not implicitly {@link CommentSelectGraphResponse.verify|verify} messages.
     * @function encode
     * @memberof CommentSelectGraphResponse
     * @static
     * @param {ICommentSelectGraphResponse} message CommentSelectGraphResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentSelectGraphResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            for (var keys = Object.keys(message.data), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.CommentNode.encode(message.data[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
        return writer;
    };

    /**
     * Encodes the specified CommentSelectGraphResponse message, length delimited. Does not implicitly {@link CommentSelectGraphResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CommentSelectGraphResponse
     * @static
     * @param {ICommentSelectGraphResponse} message CommentSelectGraphResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentSelectGraphResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CommentSelectGraphResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CommentSelectGraphResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommentSelectGraphResponse} CommentSelectGraphResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentSelectGraphResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommentSelectGraphResponse(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (message.data === $util.emptyObject)
                    message.data = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = null;
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = $root.CommentNode.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.data[key] = value;
                break;
            case 2:
                message.token = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CommentSelectGraphResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CommentSelectGraphResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommentSelectGraphResponse} CommentSelectGraphResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentSelectGraphResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CommentSelectGraphResponse message.
     * @function verify
     * @memberof CommentSelectGraphResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CommentSelectGraphResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.data != null && message.hasOwnProperty("data")) {
            if (!$util.isObject(message.data))
                return "data: object expected";
            var key = Object.keys(message.data);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.CommentNode.verify(message.data[key[i]]);
                if (error)
                    return "data." + error;
            }
        }
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
        return null;
    };

    /**
     * Creates a CommentSelectGraphResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CommentSelectGraphResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CommentSelectGraphResponse} CommentSelectGraphResponse
     */
    CommentSelectGraphResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.CommentSelectGraphResponse)
            return object;
        var message = new $root.CommentSelectGraphResponse();
        if (object.data) {
            if (typeof object.data !== "object")
                throw TypeError(".CommentSelectGraphResponse.data: object expected");
            message.data = {};
            for (var keys = Object.keys(object.data), i = 0; i < keys.length; ++i) {
                if (typeof object.data[keys[i]] !== "object")
                    throw TypeError(".CommentSelectGraphResponse.data: object expected");
                message.data[keys[i]] = $root.CommentNode.fromObject(object.data[keys[i]]);
            }
        }
        if (object.token != null)
            message.token = String(object.token);
        return message;
    };

    /**
     * Creates a plain object from a CommentSelectGraphResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CommentSelectGraphResponse
     * @static
     * @param {CommentSelectGraphResponse} message CommentSelectGraphResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CommentSelectGraphResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.data = {};
        if (options.defaults)
            object.token = "";
        var keys2;
        if (message.data && (keys2 = Object.keys(message.data)).length) {
            object.data = {};
            for (var j = 0; j < keys2.length; ++j)
                object.data[keys2[j]] = $root.CommentNode.toObject(message.data[keys2[j]], options);
        }
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        return object;
    };

    /**
     * Converts this CommentSelectGraphResponse to JSON.
     * @function toJSON
     * @memberof CommentSelectGraphResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommentSelectGraphResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CommentSelectGraphResponse;
})();

$root.CommentSelectHistoryResponse = (function() {

    /**
     * Properties of a CommentSelectHistoryResponse.
     * @exports ICommentSelectHistoryResponse
     * @interface ICommentSelectHistoryResponse
     * @property {Array.<IComment>|null} [data] CommentSelectHistoryResponse data
     * @property {string|null} [token] CommentSelectHistoryResponse token
     */

    /**
     * Constructs a new CommentSelectHistoryResponse.
     * @exports CommentSelectHistoryResponse
     * @classdesc Represents a CommentSelectHistoryResponse.
     * @implements ICommentSelectHistoryResponse
     * @constructor
     * @param {ICommentSelectHistoryResponse=} [properties] Properties to set
     */
    function CommentSelectHistoryResponse(properties) {
        this.data = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CommentSelectHistoryResponse data.
     * @member {Array.<IComment>} data
     * @memberof CommentSelectHistoryResponse
     * @instance
     */
    CommentSelectHistoryResponse.prototype.data = $util.emptyArray;

    /**
     * CommentSelectHistoryResponse token.
     * @member {string} token
     * @memberof CommentSelectHistoryResponse
     * @instance
     */
    CommentSelectHistoryResponse.prototype.token = "";

    /**
     * Creates a new CommentSelectHistoryResponse instance using the specified properties.
     * @function create
     * @memberof CommentSelectHistoryResponse
     * @static
     * @param {ICommentSelectHistoryResponse=} [properties] Properties to set
     * @returns {CommentSelectHistoryResponse} CommentSelectHistoryResponse instance
     */
    CommentSelectHistoryResponse.create = function create(properties) {
        return new CommentSelectHistoryResponse(properties);
    };

    /**
     * Encodes the specified CommentSelectHistoryResponse message. Does not implicitly {@link CommentSelectHistoryResponse.verify|verify} messages.
     * @function encode
     * @memberof CommentSelectHistoryResponse
     * @static
     * @param {ICommentSelectHistoryResponse} message CommentSelectHistoryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentSelectHistoryResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.data != null && message.data.length)
            for (var i = 0; i < message.data.length; ++i)
                $root.Comment.encode(message.data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
        return writer;
    };

    /**
     * Encodes the specified CommentSelectHistoryResponse message, length delimited. Does not implicitly {@link CommentSelectHistoryResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CommentSelectHistoryResponse
     * @static
     * @param {ICommentSelectHistoryResponse} message CommentSelectHistoryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentSelectHistoryResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CommentSelectHistoryResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CommentSelectHistoryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommentSelectHistoryResponse} CommentSelectHistoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentSelectHistoryResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommentSelectHistoryResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.data && message.data.length))
                    message.data = [];
                message.data.push($root.Comment.decode(reader, reader.uint32()));
                break;
            case 2:
                message.token = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CommentSelectHistoryResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CommentSelectHistoryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommentSelectHistoryResponse} CommentSelectHistoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentSelectHistoryResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CommentSelectHistoryResponse message.
     * @function verify
     * @memberof CommentSelectHistoryResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CommentSelectHistoryResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.data != null && message.hasOwnProperty("data")) {
            if (!Array.isArray(message.data))
                return "data: array expected";
            for (var i = 0; i < message.data.length; ++i) {
                var error = $root.Comment.verify(message.data[i]);
                if (error)
                    return "data." + error;
            }
        }
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
        return null;
    };

    /**
     * Creates a CommentSelectHistoryResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CommentSelectHistoryResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CommentSelectHistoryResponse} CommentSelectHistoryResponse
     */
    CommentSelectHistoryResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.CommentSelectHistoryResponse)
            return object;
        var message = new $root.CommentSelectHistoryResponse();
        if (object.data) {
            if (!Array.isArray(object.data))
                throw TypeError(".CommentSelectHistoryResponse.data: array expected");
            message.data = [];
            for (var i = 0; i < object.data.length; ++i) {
                if (typeof object.data[i] !== "object")
                    throw TypeError(".CommentSelectHistoryResponse.data: object expected");
                message.data[i] = $root.Comment.fromObject(object.data[i]);
            }
        }
        if (object.token != null)
            message.token = String(object.token);
        return message;
    };

    /**
     * Creates a plain object from a CommentSelectHistoryResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CommentSelectHistoryResponse
     * @static
     * @param {CommentSelectHistoryResponse} message CommentSelectHistoryResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CommentSelectHistoryResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.data = [];
        if (options.defaults)
            object.token = "";
        if (message.data && message.data.length) {
            object.data = [];
            for (var j = 0; j < message.data.length; ++j)
                object.data[j] = $root.Comment.toObject(message.data[j], options);
        }
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        return object;
    };

    /**
     * Converts this CommentSelectHistoryResponse to JSON.
     * @function toJSON
     * @memberof CommentSelectHistoryResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommentSelectHistoryResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CommentSelectHistoryResponse;
})();

$root.Comment = (function() {

    /**
     * Properties of a Comment.
     * @exports IComment
     * @interface IComment
     * @property {string|null} [uId] Comment uId
     * @property {string|null} [parentId] Comment parentId
     * @property {ICommunityUserRef|null} [user] Comment user
     * @property {string|null} [content] Comment content
     * @property {number|null} [createdAt] Comment createdAt
     * @property {Array.<IComment>|null} [commentEdits] Comment commentEdits
     * @property {Array.<IBanInfo>|null} [mod] Comment mod
     * @property {Object.<string,number>|null} [votes] Comment votes
     * @property {ICommentActionedContext|null} [me] Comment me
     * @property {number|null} [unhandledReports] Comment unhandledReports
     * @property {number|null} [reports] Comment reports
     * @property {number|null} [depth] Comment depth
     * @property {number|null} [children] Comment children
     */

    /**
     * Constructs a new Comment.
     * @exports Comment
     * @classdesc Represents a Comment.
     * @implements IComment
     * @constructor
     * @param {IComment=} [properties] Properties to set
     */
    function Comment(properties) {
        this.commentEdits = [];
        this.mod = [];
        this.votes = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Comment uId.
     * @member {string} uId
     * @memberof Comment
     * @instance
     */
    Comment.prototype.uId = "";

    /**
     * Comment parentId.
     * @member {string} parentId
     * @memberof Comment
     * @instance
     */
    Comment.prototype.parentId = "";

    /**
     * Comment user.
     * @member {ICommunityUserRef|null|undefined} user
     * @memberof Comment
     * @instance
     */
    Comment.prototype.user = null;

    /**
     * Comment content.
     * @member {string} content
     * @memberof Comment
     * @instance
     */
    Comment.prototype.content = "";

    /**
     * Comment createdAt.
     * @member {number} createdAt
     * @memberof Comment
     * @instance
     */
    Comment.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Comment commentEdits.
     * @member {Array.<IComment>} commentEdits
     * @memberof Comment
     * @instance
     */
    Comment.prototype.commentEdits = $util.emptyArray;

    /**
     * Comment mod.
     * @member {Array.<IBanInfo>} mod
     * @memberof Comment
     * @instance
     */
    Comment.prototype.mod = $util.emptyArray;

    /**
     * Comment votes.
     * @member {Object.<string,number>} votes
     * @memberof Comment
     * @instance
     */
    Comment.prototype.votes = $util.emptyObject;

    /**
     * Comment me.
     * @member {ICommentActionedContext|null|undefined} me
     * @memberof Comment
     * @instance
     */
    Comment.prototype.me = null;

    /**
     * Comment unhandledReports.
     * @member {number} unhandledReports
     * @memberof Comment
     * @instance
     */
    Comment.prototype.unhandledReports = 0;

    /**
     * Comment reports.
     * @member {number} reports
     * @memberof Comment
     * @instance
     */
    Comment.prototype.reports = 0;

    /**
     * Comment depth.
     * @member {number} depth
     * @memberof Comment
     * @instance
     */
    Comment.prototype.depth = 0;

    /**
     * Comment children.
     * @member {number} children
     * @memberof Comment
     * @instance
     */
    Comment.prototype.children = 0;

    /**
     * Creates a new Comment instance using the specified properties.
     * @function create
     * @memberof Comment
     * @static
     * @param {IComment=} [properties] Properties to set
     * @returns {Comment} Comment instance
     */
    Comment.create = function create(properties) {
        return new Comment(properties);
    };

    /**
     * Encodes the specified Comment message. Does not implicitly {@link Comment.verify|verify} messages.
     * @function encode
     * @memberof Comment
     * @static
     * @param {IComment} message Comment message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Comment.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uId != null && Object.hasOwnProperty.call(message, "uId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uId);
        if (message.parentId != null && Object.hasOwnProperty.call(message, "parentId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.parentId);
        if (message.user != null && Object.hasOwnProperty.call(message, "user"))
            $root.CommunityUserRef.encode(message.user, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.createdAt);
        if (message.commentEdits != null && message.commentEdits.length)
            for (var i = 0; i < message.commentEdits.length; ++i)
                $root.Comment.encode(message.commentEdits[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.mod != null && message.mod.length)
            for (var i = 0; i < message.mod.length; ++i)
                $root.BanInfo.encode(message.mod[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.votes != null && Object.hasOwnProperty.call(message, "votes"))
            for (var keys = Object.keys(message.votes), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 8, wireType 2 =*/66).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.votes[keys[i]]).ldelim();
        if (message.me != null && Object.hasOwnProperty.call(message, "me"))
            $root.CommentActionedContext.encode(message.me, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.unhandledReports != null && Object.hasOwnProperty.call(message, "unhandledReports"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.unhandledReports);
        if (message.reports != null && Object.hasOwnProperty.call(message, "reports"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.reports);
        if (message.depth != null && Object.hasOwnProperty.call(message, "depth"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.depth);
        if (message.children != null && Object.hasOwnProperty.call(message, "children"))
            writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.children);
        return writer;
    };

    /**
     * Encodes the specified Comment message, length delimited. Does not implicitly {@link Comment.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Comment
     * @static
     * @param {IComment} message Comment message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Comment.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Comment message from the specified reader or buffer.
     * @function decode
     * @memberof Comment
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Comment} Comment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Comment.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Comment(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uId = reader.string();
                break;
            case 2:
                message.parentId = reader.string();
                break;
            case 3:
                message.user = $root.CommunityUserRef.decode(reader, reader.uint32());
                break;
            case 4:
                message.content = reader.string();
                break;
            case 5:
                message.createdAt = reader.int64();
                break;
            case 6:
                if (!(message.commentEdits && message.commentEdits.length))
                    message.commentEdits = [];
                message.commentEdits.push($root.Comment.decode(reader, reader.uint32()));
                break;
            case 7:
                if (!(message.mod && message.mod.length))
                    message.mod = [];
                message.mod.push($root.BanInfo.decode(reader, reader.uint32()));
                break;
            case 8:
                if (message.votes === $util.emptyObject)
                    message.votes = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = 0;
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = reader.int32();
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.votes[key] = value;
                break;
            case 9:
                message.me = $root.CommentActionedContext.decode(reader, reader.uint32());
                break;
            case 10:
                message.unhandledReports = reader.int32();
                break;
            case 11:
                message.reports = reader.int32();
                break;
            case 12:
                message.depth = reader.int32();
                break;
            case 13:
                message.children = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Comment message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Comment
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Comment} Comment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Comment.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Comment message.
     * @function verify
     * @memberof Comment
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Comment.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uId != null && message.hasOwnProperty("uId"))
            if (!$util.isString(message.uId))
                return "uId: string expected";
        if (message.parentId != null && message.hasOwnProperty("parentId"))
            if (!$util.isString(message.parentId))
                return "parentId: string expected";
        if (message.user != null && message.hasOwnProperty("user")) {
            var error = $root.CommunityUserRef.verify(message.user);
            if (error)
                return "user." + error;
        }
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                return "createdAt: integer|Long expected";
        if (message.commentEdits != null && message.hasOwnProperty("commentEdits")) {
            if (!Array.isArray(message.commentEdits))
                return "commentEdits: array expected";
            for (var i = 0; i < message.commentEdits.length; ++i) {
                var error = $root.Comment.verify(message.commentEdits[i]);
                if (error)
                    return "commentEdits." + error;
            }
        }
        if (message.mod != null && message.hasOwnProperty("mod")) {
            if (!Array.isArray(message.mod))
                return "mod: array expected";
            for (var i = 0; i < message.mod.length; ++i) {
                var error = $root.BanInfo.verify(message.mod[i]);
                if (error)
                    return "mod." + error;
            }
        }
        if (message.votes != null && message.hasOwnProperty("votes")) {
            if (!$util.isObject(message.votes))
                return "votes: object expected";
            var key = Object.keys(message.votes);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isInteger(message.votes[key[i]]))
                    return "votes: integer{k:string} expected";
        }
        if (message.me != null && message.hasOwnProperty("me")) {
            var error = $root.CommentActionedContext.verify(message.me);
            if (error)
                return "me." + error;
        }
        if (message.unhandledReports != null && message.hasOwnProperty("unhandledReports"))
            if (!$util.isInteger(message.unhandledReports))
                return "unhandledReports: integer expected";
        if (message.reports != null && message.hasOwnProperty("reports"))
            if (!$util.isInteger(message.reports))
                return "reports: integer expected";
        if (message.depth != null && message.hasOwnProperty("depth"))
            if (!$util.isInteger(message.depth))
                return "depth: integer expected";
        if (message.children != null && message.hasOwnProperty("children"))
            if (!$util.isInteger(message.children))
                return "children: integer expected";
        return null;
    };

    /**
     * Creates a Comment message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Comment
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Comment} Comment
     */
    Comment.fromObject = function fromObject(object) {
        if (object instanceof $root.Comment)
            return object;
        var message = new $root.Comment();
        if (object.uId != null)
            message.uId = String(object.uId);
        if (object.parentId != null)
            message.parentId = String(object.parentId);
        if (object.user != null) {
            if (typeof object.user !== "object")
                throw TypeError(".Comment.user: object expected");
            message.user = $root.CommunityUserRef.fromObject(object.user);
        }
        if (object.content != null)
            message.content = String(object.content);
        if (object.createdAt != null)
            if ($util.Long)
                (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
            else if (typeof object.createdAt === "string")
                message.createdAt = parseInt(object.createdAt, 10);
            else if (typeof object.createdAt === "number")
                message.createdAt = object.createdAt;
            else if (typeof object.createdAt === "object")
                message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
        if (object.commentEdits) {
            if (!Array.isArray(object.commentEdits))
                throw TypeError(".Comment.commentEdits: array expected");
            message.commentEdits = [];
            for (var i = 0; i < object.commentEdits.length; ++i) {
                if (typeof object.commentEdits[i] !== "object")
                    throw TypeError(".Comment.commentEdits: object expected");
                message.commentEdits[i] = $root.Comment.fromObject(object.commentEdits[i]);
            }
        }
        if (object.mod) {
            if (!Array.isArray(object.mod))
                throw TypeError(".Comment.mod: array expected");
            message.mod = [];
            for (var i = 0; i < object.mod.length; ++i) {
                if (typeof object.mod[i] !== "object")
                    throw TypeError(".Comment.mod: object expected");
                message.mod[i] = $root.BanInfo.fromObject(object.mod[i]);
            }
        }
        if (object.votes) {
            if (typeof object.votes !== "object")
                throw TypeError(".Comment.votes: object expected");
            message.votes = {};
            for (var keys = Object.keys(object.votes), i = 0; i < keys.length; ++i)
                message.votes[keys[i]] = object.votes[keys[i]] | 0;
        }
        if (object.me != null) {
            if (typeof object.me !== "object")
                throw TypeError(".Comment.me: object expected");
            message.me = $root.CommentActionedContext.fromObject(object.me);
        }
        if (object.unhandledReports != null)
            message.unhandledReports = object.unhandledReports | 0;
        if (object.reports != null)
            message.reports = object.reports | 0;
        if (object.depth != null)
            message.depth = object.depth | 0;
        if (object.children != null)
            message.children = object.children >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a Comment message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Comment
     * @static
     * @param {Comment} message Comment
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Comment.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.commentEdits = [];
            object.mod = [];
        }
        if (options.objects || options.defaults)
            object.votes = {};
        if (options.defaults) {
            object.uId = "";
            object.parentId = "";
            object.user = null;
            object.content = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdAt = options.longs === String ? "0" : 0;
            object.me = null;
            object.unhandledReports = 0;
            object.reports = 0;
            object.depth = 0;
            object.children = 0;
        }
        if (message.uId != null && message.hasOwnProperty("uId"))
            object.uId = message.uId;
        if (message.parentId != null && message.hasOwnProperty("parentId"))
            object.parentId = message.parentId;
        if (message.user != null && message.hasOwnProperty("user"))
            object.user = $root.CommunityUserRef.toObject(message.user, options);
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (typeof message.createdAt === "number")
                object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
            else
                object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
        if (message.commentEdits && message.commentEdits.length) {
            object.commentEdits = [];
            for (var j = 0; j < message.commentEdits.length; ++j)
                object.commentEdits[j] = $root.Comment.toObject(message.commentEdits[j], options);
        }
        if (message.mod && message.mod.length) {
            object.mod = [];
            for (var j = 0; j < message.mod.length; ++j)
                object.mod[j] = $root.BanInfo.toObject(message.mod[j], options);
        }
        var keys2;
        if (message.votes && (keys2 = Object.keys(message.votes)).length) {
            object.votes = {};
            for (var j = 0; j < keys2.length; ++j)
                object.votes[keys2[j]] = message.votes[keys2[j]];
        }
        if (message.me != null && message.hasOwnProperty("me"))
            object.me = $root.CommentActionedContext.toObject(message.me, options);
        if (message.unhandledReports != null && message.hasOwnProperty("unhandledReports"))
            object.unhandledReports = message.unhandledReports;
        if (message.reports != null && message.hasOwnProperty("reports"))
            object.reports = message.reports;
        if (message.depth != null && message.hasOwnProperty("depth"))
            object.depth = message.depth;
        if (message.children != null && message.hasOwnProperty("children"))
            object.children = message.children;
        return object;
    };

    /**
     * Converts this Comment to JSON.
     * @function toJSON
     * @memberof Comment
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Comment.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Comment;
})();

$root.CommentSelectFilters = (function() {

    /**
     * Properties of a CommentSelectFilters.
     * @exports ICommentSelectFilters
     * @interface ICommentSelectFilters
     * @property {CommentSelectFilters.Method|null} [rankMethod] CommentSelectFilters rankMethod
     * @property {CommentSelectFilters.SortDirection|null} [sortDirection] CommentSelectFilters sortDirection
     * @property {string|null} [parentId] CommentSelectFilters parentId
     * @property {string|null} [token] CommentSelectFilters token
     */

    /**
     * Constructs a new CommentSelectFilters.
     * @exports CommentSelectFilters
     * @classdesc Represents a CommentSelectFilters.
     * @implements ICommentSelectFilters
     * @constructor
     * @param {ICommentSelectFilters=} [properties] Properties to set
     */
    function CommentSelectFilters(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CommentSelectFilters rankMethod.
     * @member {CommentSelectFilters.Method} rankMethod
     * @memberof CommentSelectFilters
     * @instance
     */
    CommentSelectFilters.prototype.rankMethod = 0;

    /**
     * CommentSelectFilters sortDirection.
     * @member {CommentSelectFilters.SortDirection} sortDirection
     * @memberof CommentSelectFilters
     * @instance
     */
    CommentSelectFilters.prototype.sortDirection = 0;

    /**
     * CommentSelectFilters parentId.
     * @member {string} parentId
     * @memberof CommentSelectFilters
     * @instance
     */
    CommentSelectFilters.prototype.parentId = "";

    /**
     * CommentSelectFilters token.
     * @member {string} token
     * @memberof CommentSelectFilters
     * @instance
     */
    CommentSelectFilters.prototype.token = "";

    /**
     * Creates a new CommentSelectFilters instance using the specified properties.
     * @function create
     * @memberof CommentSelectFilters
     * @static
     * @param {ICommentSelectFilters=} [properties] Properties to set
     * @returns {CommentSelectFilters} CommentSelectFilters instance
     */
    CommentSelectFilters.create = function create(properties) {
        return new CommentSelectFilters(properties);
    };

    /**
     * Encodes the specified CommentSelectFilters message. Does not implicitly {@link CommentSelectFilters.verify|verify} messages.
     * @function encode
     * @memberof CommentSelectFilters
     * @static
     * @param {ICommentSelectFilters} message CommentSelectFilters message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentSelectFilters.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.rankMethod != null && Object.hasOwnProperty.call(message, "rankMethod"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.rankMethod);
        if (message.sortDirection != null && Object.hasOwnProperty.call(message, "sortDirection"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sortDirection);
        if (message.parentId != null && Object.hasOwnProperty.call(message, "parentId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.parentId);
        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.token);
        return writer;
    };

    /**
     * Encodes the specified CommentSelectFilters message, length delimited. Does not implicitly {@link CommentSelectFilters.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CommentSelectFilters
     * @static
     * @param {ICommentSelectFilters} message CommentSelectFilters message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentSelectFilters.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CommentSelectFilters message from the specified reader or buffer.
     * @function decode
     * @memberof CommentSelectFilters
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommentSelectFilters} CommentSelectFilters
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentSelectFilters.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommentSelectFilters();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.rankMethod = reader.int32();
                break;
            case 2:
                message.sortDirection = reader.int32();
                break;
            case 3:
                message.parentId = reader.string();
                break;
            case 4:
                message.token = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CommentSelectFilters message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CommentSelectFilters
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommentSelectFilters} CommentSelectFilters
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentSelectFilters.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CommentSelectFilters message.
     * @function verify
     * @memberof CommentSelectFilters
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CommentSelectFilters.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.rankMethod != null && message.hasOwnProperty("rankMethod"))
            switch (message.rankMethod) {
            default:
                return "rankMethod: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.sortDirection != null && message.hasOwnProperty("sortDirection"))
            switch (message.sortDirection) {
            default:
                return "sortDirection: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.parentId != null && message.hasOwnProperty("parentId"))
            if (!$util.isString(message.parentId))
                return "parentId: string expected";
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
        return null;
    };

    /**
     * Creates a CommentSelectFilters message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CommentSelectFilters
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CommentSelectFilters} CommentSelectFilters
     */
    CommentSelectFilters.fromObject = function fromObject(object) {
        if (object instanceof $root.CommentSelectFilters)
            return object;
        var message = new $root.CommentSelectFilters();
        switch (object.rankMethod) {
        case "BEST":
        case 0:
            message.rankMethod = 0;
            break;
        case "CONTROVERSIAL":
        case 1:
            message.rankMethod = 1;
            break;
        case "DATE":
        case 2:
            message.rankMethod = 2;
            break;
        }
        switch (object.sortDirection) {
        case "DESC":
        case 0:
            message.sortDirection = 0;
            break;
        case "ASC":
        case 1:
            message.sortDirection = 1;
            break;
        }
        if (object.parentId != null)
            message.parentId = String(object.parentId);
        if (object.token != null)
            message.token = String(object.token);
        return message;
    };

    /**
     * Creates a plain object from a CommentSelectFilters message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CommentSelectFilters
     * @static
     * @param {CommentSelectFilters} message CommentSelectFilters
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CommentSelectFilters.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.rankMethod = options.enums === String ? "BEST" : 0;
            object.sortDirection = options.enums === String ? "DESC" : 0;
            object.parentId = "";
            object.token = "";
        }
        if (message.rankMethod != null && message.hasOwnProperty("rankMethod"))
            object.rankMethod = options.enums === String ? $root.CommentSelectFilters.Method[message.rankMethod] : message.rankMethod;
        if (message.sortDirection != null && message.hasOwnProperty("sortDirection"))
            object.sortDirection = options.enums === String ? $root.CommentSelectFilters.SortDirection[message.sortDirection] : message.sortDirection;
        if (message.parentId != null && message.hasOwnProperty("parentId"))
            object.parentId = message.parentId;
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        return object;
    };

    /**
     * Converts this CommentSelectFilters to JSON.
     * @function toJSON
     * @memberof CommentSelectFilters
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommentSelectFilters.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Method enum.
     * @name CommentSelectFilters.Method
     * @enum {number}
     * @property {number} BEST=0 BEST value
     * @property {number} CONTROVERSIAL=1 CONTROVERSIAL value
     * @property {number} DATE=2 DATE value
     */
    CommentSelectFilters.Method = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BEST"] = 0;
        values[valuesById[1] = "CONTROVERSIAL"] = 1;
        values[valuesById[2] = "DATE"] = 2;
        return values;
    })();

    /**
     * SortDirection enum.
     * @name CommentSelectFilters.SortDirection
     * @enum {number}
     * @property {number} DESC=0 DESC value
     * @property {number} ASC=1 ASC value
     */
    CommentSelectFilters.SortDirection = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DESC"] = 0;
        values[valuesById[1] = "ASC"] = 1;
        return values;
    })();

    return CommentSelectFilters;
})();

$root.ReportsSelectResponse = (function() {

    /**
     * Properties of a ReportsSelectResponse.
     * @exports IReportsSelectResponse
     * @interface IReportsSelectResponse
     * @property {Array.<IReportInfo>|null} [reports] ReportsSelectResponse reports
     * @property {string|null} [token] ReportsSelectResponse token
     */

    /**
     * Constructs a new ReportsSelectResponse.
     * @exports ReportsSelectResponse
     * @classdesc Represents a ReportsSelectResponse.
     * @implements IReportsSelectResponse
     * @constructor
     * @param {IReportsSelectResponse=} [properties] Properties to set
     */
    function ReportsSelectResponse(properties) {
        this.reports = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReportsSelectResponse reports.
     * @member {Array.<IReportInfo>} reports
     * @memberof ReportsSelectResponse
     * @instance
     */
    ReportsSelectResponse.prototype.reports = $util.emptyArray;

    /**
     * ReportsSelectResponse token.
     * @member {string} token
     * @memberof ReportsSelectResponse
     * @instance
     */
    ReportsSelectResponse.prototype.token = "";

    /**
     * Creates a new ReportsSelectResponse instance using the specified properties.
     * @function create
     * @memberof ReportsSelectResponse
     * @static
     * @param {IReportsSelectResponse=} [properties] Properties to set
     * @returns {ReportsSelectResponse} ReportsSelectResponse instance
     */
    ReportsSelectResponse.create = function create(properties) {
        return new ReportsSelectResponse(properties);
    };

    /**
     * Encodes the specified ReportsSelectResponse message. Does not implicitly {@link ReportsSelectResponse.verify|verify} messages.
     * @function encode
     * @memberof ReportsSelectResponse
     * @static
     * @param {IReportsSelectResponse} message ReportsSelectResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReportsSelectResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.reports != null && message.reports.length)
            for (var i = 0; i < message.reports.length; ++i)
                $root.ReportInfo.encode(message.reports[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
        return writer;
    };

    /**
     * Encodes the specified ReportsSelectResponse message, length delimited. Does not implicitly {@link ReportsSelectResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReportsSelectResponse
     * @static
     * @param {IReportsSelectResponse} message ReportsSelectResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReportsSelectResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReportsSelectResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ReportsSelectResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReportsSelectResponse} ReportsSelectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReportsSelectResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReportsSelectResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.reports && message.reports.length))
                    message.reports = [];
                message.reports.push($root.ReportInfo.decode(reader, reader.uint32()));
                break;
            case 2:
                message.token = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReportsSelectResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReportsSelectResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReportsSelectResponse} ReportsSelectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReportsSelectResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReportsSelectResponse message.
     * @function verify
     * @memberof ReportsSelectResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReportsSelectResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.reports != null && message.hasOwnProperty("reports")) {
            if (!Array.isArray(message.reports))
                return "reports: array expected";
            for (var i = 0; i < message.reports.length; ++i) {
                var error = $root.ReportInfo.verify(message.reports[i]);
                if (error)
                    return "reports." + error;
            }
        }
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
        return null;
    };

    /**
     * Creates a ReportsSelectResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReportsSelectResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReportsSelectResponse} ReportsSelectResponse
     */
    ReportsSelectResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ReportsSelectResponse)
            return object;
        var message = new $root.ReportsSelectResponse();
        if (object.reports) {
            if (!Array.isArray(object.reports))
                throw TypeError(".ReportsSelectResponse.reports: array expected");
            message.reports = [];
            for (var i = 0; i < object.reports.length; ++i) {
                if (typeof object.reports[i] !== "object")
                    throw TypeError(".ReportsSelectResponse.reports: object expected");
                message.reports[i] = $root.ReportInfo.fromObject(object.reports[i]);
            }
        }
        if (object.token != null)
            message.token = String(object.token);
        return message;
    };

    /**
     * Creates a plain object from a ReportsSelectResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReportsSelectResponse
     * @static
     * @param {ReportsSelectResponse} message ReportsSelectResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReportsSelectResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.reports = [];
        if (options.defaults)
            object.token = "";
        if (message.reports && message.reports.length) {
            object.reports = [];
            for (var j = 0; j < message.reports.length; ++j)
                object.reports[j] = $root.ReportInfo.toObject(message.reports[j], options);
        }
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        return object;
    };

    /**
     * Converts this ReportsSelectResponse to JSON.
     * @function toJSON
     * @memberof ReportsSelectResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReportsSelectResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReportsSelectResponse;
})();

$root.CommunitySelectRequest = (function() {

    /**
     * Properties of a CommunitySelectRequest.
     * @exports ICommunitySelectRequest
     * @interface ICommunitySelectRequest
     * @property {string|null} [query] CommunitySelectRequest query
     * @property {number|null} [limit] CommunitySelectRequest limit
     */

    /**
     * Constructs a new CommunitySelectRequest.
     * @exports CommunitySelectRequest
     * @classdesc Represents a CommunitySelectRequest.
     * @implements ICommunitySelectRequest
     * @constructor
     * @param {ICommunitySelectRequest=} [properties] Properties to set
     */
    function CommunitySelectRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CommunitySelectRequest query.
     * @member {string} query
     * @memberof CommunitySelectRequest
     * @instance
     */
    CommunitySelectRequest.prototype.query = "";

    /**
     * CommunitySelectRequest limit.
     * @member {number} limit
     * @memberof CommunitySelectRequest
     * @instance
     */
    CommunitySelectRequest.prototype.limit = 0;

    /**
     * Creates a new CommunitySelectRequest instance using the specified properties.
     * @function create
     * @memberof CommunitySelectRequest
     * @static
     * @param {ICommunitySelectRequest=} [properties] Properties to set
     * @returns {CommunitySelectRequest} CommunitySelectRequest instance
     */
    CommunitySelectRequest.create = function create(properties) {
        return new CommunitySelectRequest(properties);
    };

    /**
     * Encodes the specified CommunitySelectRequest message. Does not implicitly {@link CommunitySelectRequest.verify|verify} messages.
     * @function encode
     * @memberof CommunitySelectRequest
     * @static
     * @param {ICommunitySelectRequest} message CommunitySelectRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommunitySelectRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.query != null && Object.hasOwnProperty.call(message, "query"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.query);
        if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.limit);
        return writer;
    };

    /**
     * Encodes the specified CommunitySelectRequest message, length delimited. Does not implicitly {@link CommunitySelectRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CommunitySelectRequest
     * @static
     * @param {ICommunitySelectRequest} message CommunitySelectRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommunitySelectRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CommunitySelectRequest message from the specified reader or buffer.
     * @function decode
     * @memberof CommunitySelectRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommunitySelectRequest} CommunitySelectRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommunitySelectRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommunitySelectRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.query = reader.string();
                break;
            case 2:
                message.limit = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CommunitySelectRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CommunitySelectRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommunitySelectRequest} CommunitySelectRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommunitySelectRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CommunitySelectRequest message.
     * @function verify
     * @memberof CommunitySelectRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CommunitySelectRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.query != null && message.hasOwnProperty("query"))
            if (!$util.isString(message.query))
                return "query: string expected";
        if (message.limit != null && message.hasOwnProperty("limit"))
            if (!$util.isInteger(message.limit))
                return "limit: integer expected";
        return null;
    };

    /**
     * Creates a CommunitySelectRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CommunitySelectRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CommunitySelectRequest} CommunitySelectRequest
     */
    CommunitySelectRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.CommunitySelectRequest)
            return object;
        var message = new $root.CommunitySelectRequest();
        if (object.query != null)
            message.query = String(object.query);
        if (object.limit != null)
            message.limit = object.limit >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a CommunitySelectRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CommunitySelectRequest
     * @static
     * @param {CommunitySelectRequest} message CommunitySelectRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CommunitySelectRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.query = "";
            object.limit = 0;
        }
        if (message.query != null && message.hasOwnProperty("query"))
            object.query = message.query;
        if (message.limit != null && message.hasOwnProperty("limit"))
            object.limit = message.limit;
        return object;
    };

    /**
     * Converts this CommunitySelectRequest to JSON.
     * @function toJSON
     * @memberof CommunitySelectRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommunitySelectRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CommunitySelectRequest;
})();

$root.CommunitySelectResponse = (function() {

    /**
     * Properties of a CommunitySelectResponse.
     * @exports ICommunitySelectResponse
     * @interface ICommunitySelectResponse
     * @property {Array.<IBoard>|null} [data] CommunitySelectResponse data
     * @property {string|null} [token] CommunitySelectResponse token
     */

    /**
     * Constructs a new CommunitySelectResponse.
     * @exports CommunitySelectResponse
     * @classdesc Represents a CommunitySelectResponse.
     * @implements ICommunitySelectResponse
     * @constructor
     * @param {ICommunitySelectResponse=} [properties] Properties to set
     */
    function CommunitySelectResponse(properties) {
        this.data = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CommunitySelectResponse data.
     * @member {Array.<IBoard>} data
     * @memberof CommunitySelectResponse
     * @instance
     */
    CommunitySelectResponse.prototype.data = $util.emptyArray;

    /**
     * CommunitySelectResponse token.
     * @member {string} token
     * @memberof CommunitySelectResponse
     * @instance
     */
    CommunitySelectResponse.prototype.token = "";

    /**
     * Creates a new CommunitySelectResponse instance using the specified properties.
     * @function create
     * @memberof CommunitySelectResponse
     * @static
     * @param {ICommunitySelectResponse=} [properties] Properties to set
     * @returns {CommunitySelectResponse} CommunitySelectResponse instance
     */
    CommunitySelectResponse.create = function create(properties) {
        return new CommunitySelectResponse(properties);
    };

    /**
     * Encodes the specified CommunitySelectResponse message. Does not implicitly {@link CommunitySelectResponse.verify|verify} messages.
     * @function encode
     * @memberof CommunitySelectResponse
     * @static
     * @param {ICommunitySelectResponse} message CommunitySelectResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommunitySelectResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.data != null && message.data.length)
            for (var i = 0; i < message.data.length; ++i)
                $root.Board.encode(message.data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
        return writer;
    };

    /**
     * Encodes the specified CommunitySelectResponse message, length delimited. Does not implicitly {@link CommunitySelectResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CommunitySelectResponse
     * @static
     * @param {ICommunitySelectResponse} message CommunitySelectResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommunitySelectResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CommunitySelectResponse message from the specified reader or buffer.
     * @function decode
     * @memberof CommunitySelectResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommunitySelectResponse} CommunitySelectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommunitySelectResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommunitySelectResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.data && message.data.length))
                    message.data = [];
                message.data.push($root.Board.decode(reader, reader.uint32()));
                break;
            case 2:
                message.token = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CommunitySelectResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CommunitySelectResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommunitySelectResponse} CommunitySelectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommunitySelectResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CommunitySelectResponse message.
     * @function verify
     * @memberof CommunitySelectResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CommunitySelectResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.data != null && message.hasOwnProperty("data")) {
            if (!Array.isArray(message.data))
                return "data: array expected";
            for (var i = 0; i < message.data.length; ++i) {
                var error = $root.Board.verify(message.data[i]);
                if (error)
                    return "data." + error;
            }
        }
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
        return null;
    };

    /**
     * Creates a CommunitySelectResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CommunitySelectResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CommunitySelectResponse} CommunitySelectResponse
     */
    CommunitySelectResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.CommunitySelectResponse)
            return object;
        var message = new $root.CommunitySelectResponse();
        if (object.data) {
            if (!Array.isArray(object.data))
                throw TypeError(".CommunitySelectResponse.data: array expected");
            message.data = [];
            for (var i = 0; i < object.data.length; ++i) {
                if (typeof object.data[i] !== "object")
                    throw TypeError(".CommunitySelectResponse.data: object expected");
                message.data[i] = $root.Board.fromObject(object.data[i]);
            }
        }
        if (object.token != null)
            message.token = String(object.token);
        return message;
    };

    /**
     * Creates a plain object from a CommunitySelectResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CommunitySelectResponse
     * @static
     * @param {CommunitySelectResponse} message CommunitySelectResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CommunitySelectResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.data = [];
        if (options.defaults)
            object.token = "";
        if (message.data && message.data.length) {
            object.data = [];
            for (var j = 0; j < message.data.length; ++j)
                object.data[j] = $root.Board.toObject(message.data[j], options);
        }
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        return object;
    };

    /**
     * Converts this CommunitySelectResponse to JSON.
     * @function toJSON
     * @memberof CommunitySelectResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommunitySelectResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CommunitySelectResponse;
})();

$root.BoardSubscription = (function() {

    /**
     * Properties of a BoardSubscription.
     * @exports IBoardSubscription
     * @interface IBoardSubscription
     * @property {string|null} [boardId] BoardSubscription boardId
     * @property {boolean|null} [isMod] BoardSubscription isMod
     * @property {boolean|null} [isOwner] BoardSubscription isOwner
     * @property {string|null} [isBanned] BoardSubscription isBanned
     * @property {number|null} [members] BoardSubscription members
     * @property {string|null} [icon] BoardSubscription icon
     * @property {number|null} [createdAt] BoardSubscription createdAt
     */

    /**
     * Constructs a new BoardSubscription.
     * @exports BoardSubscription
     * @classdesc Represents a BoardSubscription.
     * @implements IBoardSubscription
     * @constructor
     * @param {IBoardSubscription=} [properties] Properties to set
     */
    function BoardSubscription(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BoardSubscription boardId.
     * @member {string} boardId
     * @memberof BoardSubscription
     * @instance
     */
    BoardSubscription.prototype.boardId = "";

    /**
     * BoardSubscription isMod.
     * @member {boolean} isMod
     * @memberof BoardSubscription
     * @instance
     */
    BoardSubscription.prototype.isMod = false;

    /**
     * BoardSubscription isOwner.
     * @member {boolean} isOwner
     * @memberof BoardSubscription
     * @instance
     */
    BoardSubscription.prototype.isOwner = false;

    /**
     * BoardSubscription isBanned.
     * @member {string} isBanned
     * @memberof BoardSubscription
     * @instance
     */
    BoardSubscription.prototype.isBanned = "";

    /**
     * BoardSubscription members.
     * @member {number} members
     * @memberof BoardSubscription
     * @instance
     */
    BoardSubscription.prototype.members = 0;

    /**
     * BoardSubscription icon.
     * @member {string} icon
     * @memberof BoardSubscription
     * @instance
     */
    BoardSubscription.prototype.icon = "";

    /**
     * BoardSubscription createdAt.
     * @member {number} createdAt
     * @memberof BoardSubscription
     * @instance
     */
    BoardSubscription.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new BoardSubscription instance using the specified properties.
     * @function create
     * @memberof BoardSubscription
     * @static
     * @param {IBoardSubscription=} [properties] Properties to set
     * @returns {BoardSubscription} BoardSubscription instance
     */
    BoardSubscription.create = function create(properties) {
        return new BoardSubscription(properties);
    };

    /**
     * Encodes the specified BoardSubscription message. Does not implicitly {@link BoardSubscription.verify|verify} messages.
     * @function encode
     * @memberof BoardSubscription
     * @static
     * @param {IBoardSubscription} message BoardSubscription message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BoardSubscription.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.boardId != null && Object.hasOwnProperty.call(message, "boardId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.boardId);
        if (message.isMod != null && Object.hasOwnProperty.call(message, "isMod"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isMod);
        if (message.isBanned != null && Object.hasOwnProperty.call(message, "isBanned"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.isBanned);
        if (message.members != null && Object.hasOwnProperty.call(message, "members"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.members);
        if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.icon);
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.createdAt);
        if (message.isOwner != null && Object.hasOwnProperty.call(message, "isOwner"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.isOwner);
        return writer;
    };

    /**
     * Encodes the specified BoardSubscription message, length delimited. Does not implicitly {@link BoardSubscription.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BoardSubscription
     * @static
     * @param {IBoardSubscription} message BoardSubscription message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BoardSubscription.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BoardSubscription message from the specified reader or buffer.
     * @function decode
     * @memberof BoardSubscription
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BoardSubscription} BoardSubscription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BoardSubscription.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BoardSubscription();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.boardId = reader.string();
                break;
            case 2:
                message.isMod = reader.bool();
                break;
            case 7:
                message.isOwner = reader.bool();
                break;
            case 3:
                message.isBanned = reader.string();
                break;
            case 4:
                message.members = reader.uint32();
                break;
            case 5:
                message.icon = reader.string();
                break;
            case 6:
                message.createdAt = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BoardSubscription message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BoardSubscription
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BoardSubscription} BoardSubscription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BoardSubscription.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BoardSubscription message.
     * @function verify
     * @memberof BoardSubscription
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BoardSubscription.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.boardId != null && message.hasOwnProperty("boardId"))
            if (!$util.isString(message.boardId))
                return "boardId: string expected";
        if (message.isMod != null && message.hasOwnProperty("isMod"))
            if (typeof message.isMod !== "boolean")
                return "isMod: boolean expected";
        if (message.isOwner != null && message.hasOwnProperty("isOwner"))
            if (typeof message.isOwner !== "boolean")
                return "isOwner: boolean expected";
        if (message.isBanned != null && message.hasOwnProperty("isBanned"))
            if (!$util.isString(message.isBanned))
                return "isBanned: string expected";
        if (message.members != null && message.hasOwnProperty("members"))
            if (!$util.isInteger(message.members))
                return "members: integer expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isString(message.icon))
                return "icon: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                return "createdAt: integer|Long expected";
        return null;
    };

    /**
     * Creates a BoardSubscription message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BoardSubscription
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BoardSubscription} BoardSubscription
     */
    BoardSubscription.fromObject = function fromObject(object) {
        if (object instanceof $root.BoardSubscription)
            return object;
        var message = new $root.BoardSubscription();
        if (object.boardId != null)
            message.boardId = String(object.boardId);
        if (object.isMod != null)
            message.isMod = Boolean(object.isMod);
        if (object.isOwner != null)
            message.isOwner = Boolean(object.isOwner);
        if (object.isBanned != null)
            message.isBanned = String(object.isBanned);
        if (object.members != null)
            message.members = object.members >>> 0;
        if (object.icon != null)
            message.icon = String(object.icon);
        if (object.createdAt != null)
            if ($util.Long)
                (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
            else if (typeof object.createdAt === "string")
                message.createdAt = parseInt(object.createdAt, 10);
            else if (typeof object.createdAt === "number")
                message.createdAt = object.createdAt;
            else if (typeof object.createdAt === "object")
                message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a BoardSubscription message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BoardSubscription
     * @static
     * @param {BoardSubscription} message BoardSubscription
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BoardSubscription.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.boardId = "";
            object.isMod = false;
            object.isBanned = "";
            object.members = 0;
            object.icon = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdAt = options.longs === String ? "0" : 0;
            object.isOwner = false;
        }
        if (message.boardId != null && message.hasOwnProperty("boardId"))
            object.boardId = message.boardId;
        if (message.isMod != null && message.hasOwnProperty("isMod"))
            object.isMod = message.isMod;
        if (message.isBanned != null && message.hasOwnProperty("isBanned"))
            object.isBanned = message.isBanned;
        if (message.members != null && message.hasOwnProperty("members"))
            object.members = message.members;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (typeof message.createdAt === "number")
                object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
            else
                object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
        if (message.isOwner != null && message.hasOwnProperty("isOwner"))
            object.isOwner = message.isOwner;
        return object;
    };

    /**
     * Converts this BoardSubscription to JSON.
     * @function toJSON
     * @memberof BoardSubscription
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BoardSubscription.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BoardSubscription;
})();

$root.Board = (function() {

    /**
     * Properties of a Board.
     * @exports IBoard
     * @interface IBoard
     * @property {string|null} [uId] Board uId
     * @property {string|null} [title] Board title
     * @property {string|null} [description] Board description
     * @property {string|null} [icon] Board icon
     * @property {string|null} [banner] Board banner
     * @property {number|null} [members] Board members
     * @property {number|null} [posts] Board posts
     * @property {number|null} [moderators] Board moderators
     * @property {Array.<ICommunityUserRef>|null} [preview] Board preview
     * @property {number|null} [votes] Board votes
     * @property {string|null} [rules] Board rules
     * @property {number|null} [createdAt] Board createdAt
     * @property {boolean|null} [isModerator] Board isModerator
     * @property {boolean|null} [isMember] Board isMember
     * @property {number|null} [lockType] Board lockType
     */

    /**
     * Constructs a new Board.
     * @exports Board
     * @classdesc Represents a Board.
     * @implements IBoard
     * @constructor
     * @param {IBoard=} [properties] Properties to set
     */
    function Board(properties) {
        this.preview = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Board uId.
     * @member {string} uId
     * @memberof Board
     * @instance
     */
    Board.prototype.uId = "";

    /**
     * Board title.
     * @member {string} title
     * @memberof Board
     * @instance
     */
    Board.prototype.title = "";

    /**
     * Board description.
     * @member {string} description
     * @memberof Board
     * @instance
     */
    Board.prototype.description = "";

    /**
     * Board icon.
     * @member {string} icon
     * @memberof Board
     * @instance
     */
    Board.prototype.icon = "";

    /**
     * Board banner.
     * @member {string} banner
     * @memberof Board
     * @instance
     */
    Board.prototype.banner = "";

    /**
     * Board members.
     * @member {number} members
     * @memberof Board
     * @instance
     */
    Board.prototype.members = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Board posts.
     * @member {number} posts
     * @memberof Board
     * @instance
     */
    Board.prototype.posts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Board moderators.
     * @member {number} moderators
     * @memberof Board
     * @instance
     */
    Board.prototype.moderators = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Board preview.
     * @member {Array.<ICommunityUserRef>} preview
     * @memberof Board
     * @instance
     */
    Board.prototype.preview = $util.emptyArray;

    /**
     * Board votes.
     * @member {number} votes
     * @memberof Board
     * @instance
     */
    Board.prototype.votes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Board rules.
     * @member {string} rules
     * @memberof Board
     * @instance
     */
    Board.prototype.rules = "";

    /**
     * Board createdAt.
     * @member {number} createdAt
     * @memberof Board
     * @instance
     */
    Board.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Board isModerator.
     * @member {boolean} isModerator
     * @memberof Board
     * @instance
     */
    Board.prototype.isModerator = false;

    /**
     * Board isMember.
     * @member {boolean} isMember
     * @memberof Board
     * @instance
     */
    Board.prototype.isMember = false;

    /**
     * Board lockType.
     * @member {number} lockType
     * @memberof Board
     * @instance
     */
    Board.prototype.lockType = 0;

    /**
     * Creates a new Board instance using the specified properties.
     * @function create
     * @memberof Board
     * @static
     * @param {IBoard=} [properties] Properties to set
     * @returns {Board} Board instance
     */
    Board.create = function create(properties) {
        return new Board(properties);
    };

    /**
     * Encodes the specified Board message. Does not implicitly {@link Board.verify|verify} messages.
     * @function encode
     * @memberof Board
     * @static
     * @param {IBoard} message Board message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Board.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uId != null && Object.hasOwnProperty.call(message, "uId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uId);
        if (message.title != null && Object.hasOwnProperty.call(message, "title"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
        if (message.description != null && Object.hasOwnProperty.call(message, "description"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
        if (message.members != null && Object.hasOwnProperty.call(message, "members"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.members);
        if (message.posts != null && Object.hasOwnProperty.call(message, "posts"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.posts);
        if (message.moderators != null && Object.hasOwnProperty.call(message, "moderators"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.moderators);
        if (message.preview != null && message.preview.length)
            for (var i = 0; i < message.preview.length; ++i)
                $root.CommunityUserRef.encode(message.preview[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.votes != null && Object.hasOwnProperty.call(message, "votes"))
            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.votes);
        if (message.rules != null && Object.hasOwnProperty.call(message, "rules"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.rules);
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 10, wireType 0 =*/80).int64(message.createdAt);
        if (message.isModerator != null && Object.hasOwnProperty.call(message, "isModerator"))
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.isModerator);
        if (message.isMember != null && Object.hasOwnProperty.call(message, "isMember"))
            writer.uint32(/* id 12, wireType 0 =*/96).bool(message.isMember);
        if (message.lockType != null && Object.hasOwnProperty.call(message, "lockType"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.lockType);
        if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
            writer.uint32(/* id 99, wireType 2 =*/794).string(message.icon);
        if (message.banner != null && Object.hasOwnProperty.call(message, "banner"))
            writer.uint32(/* id 100, wireType 2 =*/802).string(message.banner);
        return writer;
    };

    /**
     * Encodes the specified Board message, length delimited. Does not implicitly {@link Board.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Board
     * @static
     * @param {IBoard} message Board message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Board.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Board message from the specified reader or buffer.
     * @function decode
     * @memberof Board
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Board} Board
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Board.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Board();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uId = reader.string();
                break;
            case 2:
                message.title = reader.string();
                break;
            case 3:
                message.description = reader.string();
                break;
            case 99:
                message.icon = reader.string();
                break;
            case 100:
                message.banner = reader.string();
                break;
            case 4:
                message.members = reader.int64();
                break;
            case 5:
                message.posts = reader.int64();
                break;
            case 6:
                message.moderators = reader.int64();
                break;
            case 7:
                if (!(message.preview && message.preview.length))
                    message.preview = [];
                message.preview.push($root.CommunityUserRef.decode(reader, reader.uint32()));
                break;
            case 8:
                message.votes = reader.int64();
                break;
            case 9:
                message.rules = reader.string();
                break;
            case 10:
                message.createdAt = reader.int64();
                break;
            case 11:
                message.isModerator = reader.bool();
                break;
            case 12:
                message.isMember = reader.bool();
                break;
            case 13:
                message.lockType = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Board message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Board
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Board} Board
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Board.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Board message.
     * @function verify
     * @memberof Board
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Board.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uId != null && message.hasOwnProperty("uId"))
            if (!$util.isString(message.uId))
                return "uId: string expected";
        if (message.title != null && message.hasOwnProperty("title"))
            if (!$util.isString(message.title))
                return "title: string expected";
        if (message.description != null && message.hasOwnProperty("description"))
            if (!$util.isString(message.description))
                return "description: string expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isString(message.icon))
                return "icon: string expected";
        if (message.banner != null && message.hasOwnProperty("banner"))
            if (!$util.isString(message.banner))
                return "banner: string expected";
        if (message.members != null && message.hasOwnProperty("members"))
            if (!$util.isInteger(message.members) && !(message.members && $util.isInteger(message.members.low) && $util.isInteger(message.members.high)))
                return "members: integer|Long expected";
        if (message.posts != null && message.hasOwnProperty("posts"))
            if (!$util.isInteger(message.posts) && !(message.posts && $util.isInteger(message.posts.low) && $util.isInteger(message.posts.high)))
                return "posts: integer|Long expected";
        if (message.moderators != null && message.hasOwnProperty("moderators"))
            if (!$util.isInteger(message.moderators) && !(message.moderators && $util.isInteger(message.moderators.low) && $util.isInteger(message.moderators.high)))
                return "moderators: integer|Long expected";
        if (message.preview != null && message.hasOwnProperty("preview")) {
            if (!Array.isArray(message.preview))
                return "preview: array expected";
            for (var i = 0; i < message.preview.length; ++i) {
                var error = $root.CommunityUserRef.verify(message.preview[i]);
                if (error)
                    return "preview." + error;
            }
        }
        if (message.votes != null && message.hasOwnProperty("votes"))
            if (!$util.isInteger(message.votes) && !(message.votes && $util.isInteger(message.votes.low) && $util.isInteger(message.votes.high)))
                return "votes: integer|Long expected";
        if (message.rules != null && message.hasOwnProperty("rules"))
            if (!$util.isString(message.rules))
                return "rules: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                return "createdAt: integer|Long expected";
        if (message.isModerator != null && message.hasOwnProperty("isModerator"))
            if (typeof message.isModerator !== "boolean")
                return "isModerator: boolean expected";
        if (message.isMember != null && message.hasOwnProperty("isMember"))
            if (typeof message.isMember !== "boolean")
                return "isMember: boolean expected";
        if (message.lockType != null && message.hasOwnProperty("lockType"))
            if (!$util.isInteger(message.lockType))
                return "lockType: integer expected";
        return null;
    };

    /**
     * Creates a Board message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Board
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Board} Board
     */
    Board.fromObject = function fromObject(object) {
        if (object instanceof $root.Board)
            return object;
        var message = new $root.Board();
        if (object.uId != null)
            message.uId = String(object.uId);
        if (object.title != null)
            message.title = String(object.title);
        if (object.description != null)
            message.description = String(object.description);
        if (object.icon != null)
            message.icon = String(object.icon);
        if (object.banner != null)
            message.banner = String(object.banner);
        if (object.members != null)
            if ($util.Long)
                (message.members = $util.Long.fromValue(object.members)).unsigned = false;
            else if (typeof object.members === "string")
                message.members = parseInt(object.members, 10);
            else if (typeof object.members === "number")
                message.members = object.members;
            else if (typeof object.members === "object")
                message.members = new $util.LongBits(object.members.low >>> 0, object.members.high >>> 0).toNumber();
        if (object.posts != null)
            if ($util.Long)
                (message.posts = $util.Long.fromValue(object.posts)).unsigned = false;
            else if (typeof object.posts === "string")
                message.posts = parseInt(object.posts, 10);
            else if (typeof object.posts === "number")
                message.posts = object.posts;
            else if (typeof object.posts === "object")
                message.posts = new $util.LongBits(object.posts.low >>> 0, object.posts.high >>> 0).toNumber();
        if (object.moderators != null)
            if ($util.Long)
                (message.moderators = $util.Long.fromValue(object.moderators)).unsigned = false;
            else if (typeof object.moderators === "string")
                message.moderators = parseInt(object.moderators, 10);
            else if (typeof object.moderators === "number")
                message.moderators = object.moderators;
            else if (typeof object.moderators === "object")
                message.moderators = new $util.LongBits(object.moderators.low >>> 0, object.moderators.high >>> 0).toNumber();
        if (object.preview) {
            if (!Array.isArray(object.preview))
                throw TypeError(".Board.preview: array expected");
            message.preview = [];
            for (var i = 0; i < object.preview.length; ++i) {
                if (typeof object.preview[i] !== "object")
                    throw TypeError(".Board.preview: object expected");
                message.preview[i] = $root.CommunityUserRef.fromObject(object.preview[i]);
            }
        }
        if (object.votes != null)
            if ($util.Long)
                (message.votes = $util.Long.fromValue(object.votes)).unsigned = false;
            else if (typeof object.votes === "string")
                message.votes = parseInt(object.votes, 10);
            else if (typeof object.votes === "number")
                message.votes = object.votes;
            else if (typeof object.votes === "object")
                message.votes = new $util.LongBits(object.votes.low >>> 0, object.votes.high >>> 0).toNumber();
        if (object.rules != null)
            message.rules = String(object.rules);
        if (object.createdAt != null)
            if ($util.Long)
                (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
            else if (typeof object.createdAt === "string")
                message.createdAt = parseInt(object.createdAt, 10);
            else if (typeof object.createdAt === "number")
                message.createdAt = object.createdAt;
            else if (typeof object.createdAt === "object")
                message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
        if (object.isModerator != null)
            message.isModerator = Boolean(object.isModerator);
        if (object.isMember != null)
            message.isMember = Boolean(object.isMember);
        if (object.lockType != null)
            message.lockType = object.lockType | 0;
        return message;
    };

    /**
     * Creates a plain object from a Board message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Board
     * @static
     * @param {Board} message Board
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Board.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.preview = [];
        if (options.defaults) {
            object.uId = "";
            object.title = "";
            object.description = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.members = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.members = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.posts = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.posts = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.moderators = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.moderators = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.votes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.votes = options.longs === String ? "0" : 0;
            object.rules = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdAt = options.longs === String ? "0" : 0;
            object.isModerator = false;
            object.isMember = false;
            object.lockType = 0;
            object.icon = "";
            object.banner = "";
        }
        if (message.uId != null && message.hasOwnProperty("uId"))
            object.uId = message.uId;
        if (message.title != null && message.hasOwnProperty("title"))
            object.title = message.title;
        if (message.description != null && message.hasOwnProperty("description"))
            object.description = message.description;
        if (message.members != null && message.hasOwnProperty("members"))
            if (typeof message.members === "number")
                object.members = options.longs === String ? String(message.members) : message.members;
            else
                object.members = options.longs === String ? $util.Long.prototype.toString.call(message.members) : options.longs === Number ? new $util.LongBits(message.members.low >>> 0, message.members.high >>> 0).toNumber() : message.members;
        if (message.posts != null && message.hasOwnProperty("posts"))
            if (typeof message.posts === "number")
                object.posts = options.longs === String ? String(message.posts) : message.posts;
            else
                object.posts = options.longs === String ? $util.Long.prototype.toString.call(message.posts) : options.longs === Number ? new $util.LongBits(message.posts.low >>> 0, message.posts.high >>> 0).toNumber() : message.posts;
        if (message.moderators != null && message.hasOwnProperty("moderators"))
            if (typeof message.moderators === "number")
                object.moderators = options.longs === String ? String(message.moderators) : message.moderators;
            else
                object.moderators = options.longs === String ? $util.Long.prototype.toString.call(message.moderators) : options.longs === Number ? new $util.LongBits(message.moderators.low >>> 0, message.moderators.high >>> 0).toNumber() : message.moderators;
        if (message.preview && message.preview.length) {
            object.preview = [];
            for (var j = 0; j < message.preview.length; ++j)
                object.preview[j] = $root.CommunityUserRef.toObject(message.preview[j], options);
        }
        if (message.votes != null && message.hasOwnProperty("votes"))
            if (typeof message.votes === "number")
                object.votes = options.longs === String ? String(message.votes) : message.votes;
            else
                object.votes = options.longs === String ? $util.Long.prototype.toString.call(message.votes) : options.longs === Number ? new $util.LongBits(message.votes.low >>> 0, message.votes.high >>> 0).toNumber() : message.votes;
        if (message.rules != null && message.hasOwnProperty("rules"))
            object.rules = message.rules;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (typeof message.createdAt === "number")
                object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
            else
                object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
        if (message.isModerator != null && message.hasOwnProperty("isModerator"))
            object.isModerator = message.isModerator;
        if (message.isMember != null && message.hasOwnProperty("isMember"))
            object.isMember = message.isMember;
        if (message.lockType != null && message.hasOwnProperty("lockType"))
            object.lockType = message.lockType;
        if (message.icon != null && message.hasOwnProperty("icon"))
            object.icon = message.icon;
        if (message.banner != null && message.hasOwnProperty("banner"))
            object.banner = message.banner;
        return object;
    };

    /**
     * Converts this Board to JSON.
     * @function toJSON
     * @memberof Board
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Board.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Board;
})();

$root.CommunityUserRef = (function() {

    /**
     * Properties of a CommunityUserRef.
     * @exports ICommunityUserRef
     * @interface ICommunityUserRef
     * @property {string|null} [username] CommunityUserRef username
     * @property {string|null} [avatar] CommunityUserRef avatar
     * @property {boolean|null} [isAdmin] CommunityUserRef isAdmin
     * @property {boolean|null} [isMod] CommunityUserRef isMod
     * @property {string|null} [flair] CommunityUserRef flair
     * @property {Object.<string,number>|null} [awards] CommunityUserRef awards
     */

    /**
     * Constructs a new CommunityUserRef.
     * @exports CommunityUserRef
     * @classdesc Represents a CommunityUserRef.
     * @implements ICommunityUserRef
     * @constructor
     * @param {ICommunityUserRef=} [properties] Properties to set
     */
    function CommunityUserRef(properties) {
        this.awards = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CommunityUserRef username.
     * @member {string} username
     * @memberof CommunityUserRef
     * @instance
     */
    CommunityUserRef.prototype.username = "";

    /**
     * CommunityUserRef avatar.
     * @member {string} avatar
     * @memberof CommunityUserRef
     * @instance
     */
    CommunityUserRef.prototype.avatar = "";

    /**
     * CommunityUserRef isAdmin.
     * @member {boolean} isAdmin
     * @memberof CommunityUserRef
     * @instance
     */
    CommunityUserRef.prototype.isAdmin = false;

    /**
     * CommunityUserRef isMod.
     * @member {boolean} isMod
     * @memberof CommunityUserRef
     * @instance
     */
    CommunityUserRef.prototype.isMod = false;

    /**
     * CommunityUserRef flair.
     * @member {string} flair
     * @memberof CommunityUserRef
     * @instance
     */
    CommunityUserRef.prototype.flair = "";

    /**
     * CommunityUserRef awards.
     * @member {Object.<string,number>} awards
     * @memberof CommunityUserRef
     * @instance
     */
    CommunityUserRef.prototype.awards = $util.emptyObject;

    /**
     * Creates a new CommunityUserRef instance using the specified properties.
     * @function create
     * @memberof CommunityUserRef
     * @static
     * @param {ICommunityUserRef=} [properties] Properties to set
     * @returns {CommunityUserRef} CommunityUserRef instance
     */
    CommunityUserRef.create = function create(properties) {
        return new CommunityUserRef(properties);
    };

    /**
     * Encodes the specified CommunityUserRef message. Does not implicitly {@link CommunityUserRef.verify|verify} messages.
     * @function encode
     * @memberof CommunityUserRef
     * @static
     * @param {ICommunityUserRef} message CommunityUserRef message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommunityUserRef.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.username != null && Object.hasOwnProperty.call(message, "username"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
        if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.avatar);
        if (message.isAdmin != null && Object.hasOwnProperty.call(message, "isAdmin"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.isAdmin);
        if (message.isMod != null && Object.hasOwnProperty.call(message, "isMod"))
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.isMod);
        if (message.flair != null && Object.hasOwnProperty.call(message, "flair"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.flair);
        if (message.awards != null && Object.hasOwnProperty.call(message, "awards"))
            for (var keys = Object.keys(message.awards), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 10, wireType 2 =*/82).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.awards[keys[i]]).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CommunityUserRef message, length delimited. Does not implicitly {@link CommunityUserRef.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CommunityUserRef
     * @static
     * @param {ICommunityUserRef} message CommunityUserRef message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommunityUserRef.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CommunityUserRef message from the specified reader or buffer.
     * @function decode
     * @memberof CommunityUserRef
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommunityUserRef} CommunityUserRef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommunityUserRef.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommunityUserRef(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                message.username = reader.string();
                break;
            case 6:
                message.avatar = reader.string();
                break;
            case 7:
                message.isAdmin = reader.bool();
                break;
            case 8:
                message.isMod = reader.bool();
                break;
            case 9:
                message.flair = reader.string();
                break;
            case 10:
                if (message.awards === $util.emptyObject)
                    message.awards = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = 0;
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.awards[key] = value;
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CommunityUserRef message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CommunityUserRef
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommunityUserRef} CommunityUserRef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommunityUserRef.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CommunityUserRef message.
     * @function verify
     * @memberof CommunityUserRef
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CommunityUserRef.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.username != null && message.hasOwnProperty("username"))
            if (!$util.isString(message.username))
                return "username: string expected";
        if (message.avatar != null && message.hasOwnProperty("avatar"))
            if (!$util.isString(message.avatar))
                return "avatar: string expected";
        if (message.isAdmin != null && message.hasOwnProperty("isAdmin"))
            if (typeof message.isAdmin !== "boolean")
                return "isAdmin: boolean expected";
        if (message.isMod != null && message.hasOwnProperty("isMod"))
            if (typeof message.isMod !== "boolean")
                return "isMod: boolean expected";
        if (message.flair != null && message.hasOwnProperty("flair"))
            if (!$util.isString(message.flair))
                return "flair: string expected";
        if (message.awards != null && message.hasOwnProperty("awards")) {
            if (!$util.isObject(message.awards))
                return "awards: object expected";
            var key = Object.keys(message.awards);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isInteger(message.awards[key[i]]))
                    return "awards: integer{k:string} expected";
        }
        return null;
    };

    /**
     * Creates a CommunityUserRef message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CommunityUserRef
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CommunityUserRef} CommunityUserRef
     */
    CommunityUserRef.fromObject = function fromObject(object) {
        if (object instanceof $root.CommunityUserRef)
            return object;
        var message = new $root.CommunityUserRef();
        if (object.username != null)
            message.username = String(object.username);
        if (object.avatar != null)
            message.avatar = String(object.avatar);
        if (object.isAdmin != null)
            message.isAdmin = Boolean(object.isAdmin);
        if (object.isMod != null)
            message.isMod = Boolean(object.isMod);
        if (object.flair != null)
            message.flair = String(object.flair);
        if (object.awards) {
            if (typeof object.awards !== "object")
                throw TypeError(".CommunityUserRef.awards: object expected");
            message.awards = {};
            for (var keys = Object.keys(object.awards), i = 0; i < keys.length; ++i)
                message.awards[keys[i]] = object.awards[keys[i]] >>> 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a CommunityUserRef message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CommunityUserRef
     * @static
     * @param {CommunityUserRef} message CommunityUserRef
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CommunityUserRef.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.awards = {};
        if (options.defaults) {
            object.username = "";
            object.avatar = "";
            object.isAdmin = false;
            object.isMod = false;
            object.flair = "";
        }
        if (message.username != null && message.hasOwnProperty("username"))
            object.username = message.username;
        if (message.avatar != null && message.hasOwnProperty("avatar"))
            object.avatar = message.avatar;
        if (message.isAdmin != null && message.hasOwnProperty("isAdmin"))
            object.isAdmin = message.isAdmin;
        if (message.isMod != null && message.hasOwnProperty("isMod"))
            object.isMod = message.isMod;
        if (message.flair != null && message.hasOwnProperty("flair"))
            object.flair = message.flair;
        var keys2;
        if (message.awards && (keys2 = Object.keys(message.awards)).length) {
            object.awards = {};
            for (var j = 0; j < keys2.length; ++j)
                object.awards[keys2[j]] = message.awards[keys2[j]];
        }
        return object;
    };

    /**
     * Converts this CommunityUserRef to JSON.
     * @function toJSON
     * @memberof CommunityUserRef
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommunityUserRef.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CommunityUserRef;
})();

$root.Thread = (function() {

    /**
     * Properties of a Thread.
     * @exports IThread
     * @interface IThread
     * @property {string|null} [uId] Thread uId
     * @property {string|null} [url] Thread url
     * @property {number|null} [type] Thread type
     * @property {string|null} [title] Thread title
     * @property {string|null} [link] Thread link
     * @property {string|null} [linkType] Thread linkType
     * @property {string|null} [content] Thread content
     * @property {string|null} [thumb] Thread thumb
     * @property {ICommunityUserRef|null} [user] Thread user
     * @property {number|null} [createdAt] Thread createdAt
     * @property {string|null} [boardId] Thread boardId
     * @property {boolean|null} [isKicked] Thread isKicked
     * @property {boolean|null} [isLocked] Thread isLocked
     * @property {boolean|null} [isArchived] Thread isArchived
     * @property {number|null} [thumbAspectRatio] Thread thumbAspectRatio
     * @property {string|null} [location] Thread location
     * @property {number|null} [numComments] Thread numComments
     * @property {number|null} [lastCommentAt] Thread lastCommentAt
     * @property {Object.<string,number>|null} [votes] Thread votes
     * @property {Array.<string>|null} [acceptedVotes] Thread acceptedVotes
     * @property {Array.<string>|null} [acceptedCommentVotes] Thread acceptedCommentVotes
     * @property {Array.<IBanInfo>|null} [mod] Thread mod
     * @property {number|null} [unhandledReports] Thread unhandledReports
     * @property {number|null} [reports] Thread reports
     * @property {IThreadActionedContext|null} [me] Thread me
     */

    /**
     * Constructs a new Thread.
     * @exports Thread
     * @classdesc Represents a Thread.
     * @implements IThread
     * @constructor
     * @param {IThread=} [properties] Properties to set
     */
    function Thread(properties) {
        this.votes = {};
        this.acceptedVotes = [];
        this.acceptedCommentVotes = [];
        this.mod = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Thread uId.
     * @member {string} uId
     * @memberof Thread
     * @instance
     */
    Thread.prototype.uId = "";

    /**
     * Thread url.
     * @member {string} url
     * @memberof Thread
     * @instance
     */
    Thread.prototype.url = "";

    /**
     * Thread type.
     * @member {number} type
     * @memberof Thread
     * @instance
     */
    Thread.prototype.type = 0;

    /**
     * Thread title.
     * @member {string} title
     * @memberof Thread
     * @instance
     */
    Thread.prototype.title = "";

    /**
     * Thread link.
     * @member {string} link
     * @memberof Thread
     * @instance
     */
    Thread.prototype.link = "";

    /**
     * Thread linkType.
     * @member {string} linkType
     * @memberof Thread
     * @instance
     */
    Thread.prototype.linkType = "";

    /**
     * Thread content.
     * @member {string} content
     * @memberof Thread
     * @instance
     */
    Thread.prototype.content = "";

    /**
     * Thread thumb.
     * @member {string} thumb
     * @memberof Thread
     * @instance
     */
    Thread.prototype.thumb = "";

    /**
     * Thread user.
     * @member {ICommunityUserRef|null|undefined} user
     * @memberof Thread
     * @instance
     */
    Thread.prototype.user = null;

    /**
     * Thread createdAt.
     * @member {number} createdAt
     * @memberof Thread
     * @instance
     */
    Thread.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Thread boardId.
     * @member {string} boardId
     * @memberof Thread
     * @instance
     */
    Thread.prototype.boardId = "";

    /**
     * Thread isKicked.
     * @member {boolean} isKicked
     * @memberof Thread
     * @instance
     */
    Thread.prototype.isKicked = false;

    /**
     * Thread isLocked.
     * @member {boolean} isLocked
     * @memberof Thread
     * @instance
     */
    Thread.prototype.isLocked = false;

    /**
     * Thread isArchived.
     * @member {boolean} isArchived
     * @memberof Thread
     * @instance
     */
    Thread.prototype.isArchived = false;

    /**
     * Thread thumbAspectRatio.
     * @member {number} thumbAspectRatio
     * @memberof Thread
     * @instance
     */
    Thread.prototype.thumbAspectRatio = 0;

    /**
     * Thread location.
     * @member {string} location
     * @memberof Thread
     * @instance
     */
    Thread.prototype.location = "";

    /**
     * Thread numComments.
     * @member {number} numComments
     * @memberof Thread
     * @instance
     */
    Thread.prototype.numComments = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Thread lastCommentAt.
     * @member {number} lastCommentAt
     * @memberof Thread
     * @instance
     */
    Thread.prototype.lastCommentAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Thread votes.
     * @member {Object.<string,number>} votes
     * @memberof Thread
     * @instance
     */
    Thread.prototype.votes = $util.emptyObject;

    /**
     * Thread acceptedVotes.
     * @member {Array.<string>} acceptedVotes
     * @memberof Thread
     * @instance
     */
    Thread.prototype.acceptedVotes = $util.emptyArray;

    /**
     * Thread acceptedCommentVotes.
     * @member {Array.<string>} acceptedCommentVotes
     * @memberof Thread
     * @instance
     */
    Thread.prototype.acceptedCommentVotes = $util.emptyArray;

    /**
     * Thread mod.
     * @member {Array.<IBanInfo>} mod
     * @memberof Thread
     * @instance
     */
    Thread.prototype.mod = $util.emptyArray;

    /**
     * Thread unhandledReports.
     * @member {number} unhandledReports
     * @memberof Thread
     * @instance
     */
    Thread.prototype.unhandledReports = 0;

    /**
     * Thread reports.
     * @member {number} reports
     * @memberof Thread
     * @instance
     */
    Thread.prototype.reports = 0;

    /**
     * Thread me.
     * @member {IThreadActionedContext|null|undefined} me
     * @memberof Thread
     * @instance
     */
    Thread.prototype.me = null;

    /**
     * Creates a new Thread instance using the specified properties.
     * @function create
     * @memberof Thread
     * @static
     * @param {IThread=} [properties] Properties to set
     * @returns {Thread} Thread instance
     */
    Thread.create = function create(properties) {
        return new Thread(properties);
    };

    /**
     * Encodes the specified Thread message. Does not implicitly {@link Thread.verify|verify} messages.
     * @function encode
     * @memberof Thread
     * @static
     * @param {IThread} message Thread message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Thread.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uId != null && Object.hasOwnProperty.call(message, "uId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uId);
        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.type);
        if (message.title != null && Object.hasOwnProperty.call(message, "title"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.title);
        if (message.link != null && Object.hasOwnProperty.call(message, "link"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.link);
        if (message.linkType != null && Object.hasOwnProperty.call(message, "linkType"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.linkType);
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.content);
        if (message.user != null && Object.hasOwnProperty.call(message, "user"))
            $root.CommunityUserRef.encode(message.user, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.createdAt);
        if (message.boardId != null && Object.hasOwnProperty.call(message, "boardId"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.boardId);
        if (message.isKicked != null && Object.hasOwnProperty.call(message, "isKicked"))
            writer.uint32(/* id 11, wireType 0 =*/88).bool(message.isKicked);
        if (message.isLocked != null && Object.hasOwnProperty.call(message, "isLocked"))
            writer.uint32(/* id 12, wireType 0 =*/96).bool(message.isLocked);
        if (message.isArchived != null && Object.hasOwnProperty.call(message, "isArchived"))
            writer.uint32(/* id 13, wireType 0 =*/104).bool(message.isArchived);
        if (message.thumbAspectRatio != null && Object.hasOwnProperty.call(message, "thumbAspectRatio"))
            writer.uint32(/* id 14, wireType 5 =*/117).float(message.thumbAspectRatio);
        if (message.location != null && Object.hasOwnProperty.call(message, "location"))
            writer.uint32(/* id 15, wireType 2 =*/122).string(message.location);
        if (message.numComments != null && Object.hasOwnProperty.call(message, "numComments"))
            writer.uint32(/* id 16, wireType 0 =*/128).int64(message.numComments);
        if (message.lastCommentAt != null && Object.hasOwnProperty.call(message, "lastCommentAt"))
            writer.uint32(/* id 17, wireType 0 =*/136).int64(message.lastCommentAt);
        if (message.votes != null && Object.hasOwnProperty.call(message, "votes"))
            for (var keys = Object.keys(message.votes), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 18, wireType 2 =*/146).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.votes[keys[i]]).ldelim();
        if (message.acceptedVotes != null && message.acceptedVotes.length)
            for (var i = 0; i < message.acceptedVotes.length; ++i)
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.acceptedVotes[i]);
        if (message.acceptedCommentVotes != null && message.acceptedCommentVotes.length)
            for (var i = 0; i < message.acceptedCommentVotes.length; ++i)
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.acceptedCommentVotes[i]);
        if (message.mod != null && message.mod.length)
            for (var i = 0; i < message.mod.length; ++i)
                $root.BanInfo.encode(message.mod[i], writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
        if (message.me != null && Object.hasOwnProperty.call(message, "me"))
            $root.ThreadActionedContext.encode(message.me, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
        if (message.unhandledReports != null && Object.hasOwnProperty.call(message, "unhandledReports"))
            writer.uint32(/* id 24, wireType 0 =*/192).int32(message.unhandledReports);
        if (message.reports != null && Object.hasOwnProperty.call(message, "reports"))
            writer.uint32(/* id 25, wireType 0 =*/200).int32(message.reports);
        if (message.thumb != null && Object.hasOwnProperty.call(message, "thumb"))
            writer.uint32(/* id 30, wireType 2 =*/242).string(message.thumb);
        return writer;
    };

    /**
     * Encodes the specified Thread message, length delimited. Does not implicitly {@link Thread.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Thread
     * @static
     * @param {IThread} message Thread message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Thread.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Thread message from the specified reader or buffer.
     * @function decode
     * @memberof Thread
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Thread} Thread
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Thread.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Thread(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uId = reader.string();
                break;
            case 2:
                message.url = reader.string();
                break;
            case 3:
                message.type = reader.uint32();
                break;
            case 4:
                message.title = reader.string();
                break;
            case 5:
                message.link = reader.string();
                break;
            case 6:
                message.linkType = reader.string();
                break;
            case 7:
                message.content = reader.string();
                break;
            case 30:
                message.thumb = reader.string();
                break;
            case 8:
                message.user = $root.CommunityUserRef.decode(reader, reader.uint32());
                break;
            case 9:
                message.createdAt = reader.int64();
                break;
            case 10:
                message.boardId = reader.string();
                break;
            case 11:
                message.isKicked = reader.bool();
                break;
            case 12:
                message.isLocked = reader.bool();
                break;
            case 13:
                message.isArchived = reader.bool();
                break;
            case 14:
                message.thumbAspectRatio = reader.float();
                break;
            case 15:
                message.location = reader.string();
                break;
            case 16:
                message.numComments = reader.int64();
                break;
            case 17:
                message.lastCommentAt = reader.int64();
                break;
            case 18:
                if (message.votes === $util.emptyObject)
                    message.votes = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = 0;
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = reader.int32();
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.votes[key] = value;
                break;
            case 19:
                if (!(message.acceptedVotes && message.acceptedVotes.length))
                    message.acceptedVotes = [];
                message.acceptedVotes.push(reader.string());
                break;
            case 20:
                if (!(message.acceptedCommentVotes && message.acceptedCommentVotes.length))
                    message.acceptedCommentVotes = [];
                message.acceptedCommentVotes.push(reader.string());
                break;
            case 21:
                if (!(message.mod && message.mod.length))
                    message.mod = [];
                message.mod.push($root.BanInfo.decode(reader, reader.uint32()));
                break;
            case 24:
                message.unhandledReports = reader.int32();
                break;
            case 25:
                message.reports = reader.int32();
                break;
            case 23:
                message.me = $root.ThreadActionedContext.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Thread message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Thread
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Thread} Thread
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Thread.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Thread message.
     * @function verify
     * @memberof Thread
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Thread.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uId != null && message.hasOwnProperty("uId"))
            if (!$util.isString(message.uId))
                return "uId: string expected";
        if (message.url != null && message.hasOwnProperty("url"))
            if (!$util.isString(message.url))
                return "url: string expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.title != null && message.hasOwnProperty("title"))
            if (!$util.isString(message.title))
                return "title: string expected";
        if (message.link != null && message.hasOwnProperty("link"))
            if (!$util.isString(message.link))
                return "link: string expected";
        if (message.linkType != null && message.hasOwnProperty("linkType"))
            if (!$util.isString(message.linkType))
                return "linkType: string expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.thumb != null && message.hasOwnProperty("thumb"))
            if (!$util.isString(message.thumb))
                return "thumb: string expected";
        if (message.user != null && message.hasOwnProperty("user")) {
            var error = $root.CommunityUserRef.verify(message.user);
            if (error)
                return "user." + error;
        }
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                return "createdAt: integer|Long expected";
        if (message.boardId != null && message.hasOwnProperty("boardId"))
            if (!$util.isString(message.boardId))
                return "boardId: string expected";
        if (message.isKicked != null && message.hasOwnProperty("isKicked"))
            if (typeof message.isKicked !== "boolean")
                return "isKicked: boolean expected";
        if (message.isLocked != null && message.hasOwnProperty("isLocked"))
            if (typeof message.isLocked !== "boolean")
                return "isLocked: boolean expected";
        if (message.isArchived != null && message.hasOwnProperty("isArchived"))
            if (typeof message.isArchived !== "boolean")
                return "isArchived: boolean expected";
        if (message.thumbAspectRatio != null && message.hasOwnProperty("thumbAspectRatio"))
            if (typeof message.thumbAspectRatio !== "number")
                return "thumbAspectRatio: number expected";
        if (message.location != null && message.hasOwnProperty("location"))
            if (!$util.isString(message.location))
                return "location: string expected";
        if (message.numComments != null && message.hasOwnProperty("numComments"))
            if (!$util.isInteger(message.numComments) && !(message.numComments && $util.isInteger(message.numComments.low) && $util.isInteger(message.numComments.high)))
                return "numComments: integer|Long expected";
        if (message.lastCommentAt != null && message.hasOwnProperty("lastCommentAt"))
            if (!$util.isInteger(message.lastCommentAt) && !(message.lastCommentAt && $util.isInteger(message.lastCommentAt.low) && $util.isInteger(message.lastCommentAt.high)))
                return "lastCommentAt: integer|Long expected";
        if (message.votes != null && message.hasOwnProperty("votes")) {
            if (!$util.isObject(message.votes))
                return "votes: object expected";
            var key = Object.keys(message.votes);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isInteger(message.votes[key[i]]))
                    return "votes: integer{k:string} expected";
        }
        if (message.acceptedVotes != null && message.hasOwnProperty("acceptedVotes")) {
            if (!Array.isArray(message.acceptedVotes))
                return "acceptedVotes: array expected";
            for (var i = 0; i < message.acceptedVotes.length; ++i)
                if (!$util.isString(message.acceptedVotes[i]))
                    return "acceptedVotes: string[] expected";
        }
        if (message.acceptedCommentVotes != null && message.hasOwnProperty("acceptedCommentVotes")) {
            if (!Array.isArray(message.acceptedCommentVotes))
                return "acceptedCommentVotes: array expected";
            for (var i = 0; i < message.acceptedCommentVotes.length; ++i)
                if (!$util.isString(message.acceptedCommentVotes[i]))
                    return "acceptedCommentVotes: string[] expected";
        }
        if (message.mod != null && message.hasOwnProperty("mod")) {
            if (!Array.isArray(message.mod))
                return "mod: array expected";
            for (var i = 0; i < message.mod.length; ++i) {
                var error = $root.BanInfo.verify(message.mod[i]);
                if (error)
                    return "mod." + error;
            }
        }
        if (message.unhandledReports != null && message.hasOwnProperty("unhandledReports"))
            if (!$util.isInteger(message.unhandledReports))
                return "unhandledReports: integer expected";
        if (message.reports != null && message.hasOwnProperty("reports"))
            if (!$util.isInteger(message.reports))
                return "reports: integer expected";
        if (message.me != null && message.hasOwnProperty("me")) {
            var error = $root.ThreadActionedContext.verify(message.me);
            if (error)
                return "me." + error;
        }
        return null;
    };

    /**
     * Creates a Thread message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Thread
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Thread} Thread
     */
    Thread.fromObject = function fromObject(object) {
        if (object instanceof $root.Thread)
            return object;
        var message = new $root.Thread();
        if (object.uId != null)
            message.uId = String(object.uId);
        if (object.url != null)
            message.url = String(object.url);
        if (object.type != null)
            message.type = object.type >>> 0;
        if (object.title != null)
            message.title = String(object.title);
        if (object.link != null)
            message.link = String(object.link);
        if (object.linkType != null)
            message.linkType = String(object.linkType);
        if (object.content != null)
            message.content = String(object.content);
        if (object.thumb != null)
            message.thumb = String(object.thumb);
        if (object.user != null) {
            if (typeof object.user !== "object")
                throw TypeError(".Thread.user: object expected");
            message.user = $root.CommunityUserRef.fromObject(object.user);
        }
        if (object.createdAt != null)
            if ($util.Long)
                (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
            else if (typeof object.createdAt === "string")
                message.createdAt = parseInt(object.createdAt, 10);
            else if (typeof object.createdAt === "number")
                message.createdAt = object.createdAt;
            else if (typeof object.createdAt === "object")
                message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
        if (object.boardId != null)
            message.boardId = String(object.boardId);
        if (object.isKicked != null)
            message.isKicked = Boolean(object.isKicked);
        if (object.isLocked != null)
            message.isLocked = Boolean(object.isLocked);
        if (object.isArchived != null)
            message.isArchived = Boolean(object.isArchived);
        if (object.thumbAspectRatio != null)
            message.thumbAspectRatio = Number(object.thumbAspectRatio);
        if (object.location != null)
            message.location = String(object.location);
        if (object.numComments != null)
            if ($util.Long)
                (message.numComments = $util.Long.fromValue(object.numComments)).unsigned = false;
            else if (typeof object.numComments === "string")
                message.numComments = parseInt(object.numComments, 10);
            else if (typeof object.numComments === "number")
                message.numComments = object.numComments;
            else if (typeof object.numComments === "object")
                message.numComments = new $util.LongBits(object.numComments.low >>> 0, object.numComments.high >>> 0).toNumber();
        if (object.lastCommentAt != null)
            if ($util.Long)
                (message.lastCommentAt = $util.Long.fromValue(object.lastCommentAt)).unsigned = false;
            else if (typeof object.lastCommentAt === "string")
                message.lastCommentAt = parseInt(object.lastCommentAt, 10);
            else if (typeof object.lastCommentAt === "number")
                message.lastCommentAt = object.lastCommentAt;
            else if (typeof object.lastCommentAt === "object")
                message.lastCommentAt = new $util.LongBits(object.lastCommentAt.low >>> 0, object.lastCommentAt.high >>> 0).toNumber();
        if (object.votes) {
            if (typeof object.votes !== "object")
                throw TypeError(".Thread.votes: object expected");
            message.votes = {};
            for (var keys = Object.keys(object.votes), i = 0; i < keys.length; ++i)
                message.votes[keys[i]] = object.votes[keys[i]] | 0;
        }
        if (object.acceptedVotes) {
            if (!Array.isArray(object.acceptedVotes))
                throw TypeError(".Thread.acceptedVotes: array expected");
            message.acceptedVotes = [];
            for (var i = 0; i < object.acceptedVotes.length; ++i)
                message.acceptedVotes[i] = String(object.acceptedVotes[i]);
        }
        if (object.acceptedCommentVotes) {
            if (!Array.isArray(object.acceptedCommentVotes))
                throw TypeError(".Thread.acceptedCommentVotes: array expected");
            message.acceptedCommentVotes = [];
            for (var i = 0; i < object.acceptedCommentVotes.length; ++i)
                message.acceptedCommentVotes[i] = String(object.acceptedCommentVotes[i]);
        }
        if (object.mod) {
            if (!Array.isArray(object.mod))
                throw TypeError(".Thread.mod: array expected");
            message.mod = [];
            for (var i = 0; i < object.mod.length; ++i) {
                if (typeof object.mod[i] !== "object")
                    throw TypeError(".Thread.mod: object expected");
                message.mod[i] = $root.BanInfo.fromObject(object.mod[i]);
            }
        }
        if (object.unhandledReports != null)
            message.unhandledReports = object.unhandledReports | 0;
        if (object.reports != null)
            message.reports = object.reports | 0;
        if (object.me != null) {
            if (typeof object.me !== "object")
                throw TypeError(".Thread.me: object expected");
            message.me = $root.ThreadActionedContext.fromObject(object.me);
        }
        return message;
    };

    /**
     * Creates a plain object from a Thread message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Thread
     * @static
     * @param {Thread} message Thread
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Thread.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.acceptedVotes = [];
            object.acceptedCommentVotes = [];
            object.mod = [];
        }
        if (options.objects || options.defaults)
            object.votes = {};
        if (options.defaults) {
            object.uId = "";
            object.url = "";
            object.type = 0;
            object.title = "";
            object.link = "";
            object.linkType = "";
            object.content = "";
            object.user = null;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdAt = options.longs === String ? "0" : 0;
            object.boardId = "";
            object.isKicked = false;
            object.isLocked = false;
            object.isArchived = false;
            object.thumbAspectRatio = 0;
            object.location = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.numComments = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.numComments = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.lastCommentAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.lastCommentAt = options.longs === String ? "0" : 0;
            object.me = null;
            object.unhandledReports = 0;
            object.reports = 0;
            object.thumb = "";
        }
        if (message.uId != null && message.hasOwnProperty("uId"))
            object.uId = message.uId;
        if (message.url != null && message.hasOwnProperty("url"))
            object.url = message.url;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.title != null && message.hasOwnProperty("title"))
            object.title = message.title;
        if (message.link != null && message.hasOwnProperty("link"))
            object.link = message.link;
        if (message.linkType != null && message.hasOwnProperty("linkType"))
            object.linkType = message.linkType;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.user != null && message.hasOwnProperty("user"))
            object.user = $root.CommunityUserRef.toObject(message.user, options);
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (typeof message.createdAt === "number")
                object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
            else
                object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
        if (message.boardId != null && message.hasOwnProperty("boardId"))
            object.boardId = message.boardId;
        if (message.isKicked != null && message.hasOwnProperty("isKicked"))
            object.isKicked = message.isKicked;
        if (message.isLocked != null && message.hasOwnProperty("isLocked"))
            object.isLocked = message.isLocked;
        if (message.isArchived != null && message.hasOwnProperty("isArchived"))
            object.isArchived = message.isArchived;
        if (message.thumbAspectRatio != null && message.hasOwnProperty("thumbAspectRatio"))
            object.thumbAspectRatio = options.json && !isFinite(message.thumbAspectRatio) ? String(message.thumbAspectRatio) : message.thumbAspectRatio;
        if (message.location != null && message.hasOwnProperty("location"))
            object.location = message.location;
        if (message.numComments != null && message.hasOwnProperty("numComments"))
            if (typeof message.numComments === "number")
                object.numComments = options.longs === String ? String(message.numComments) : message.numComments;
            else
                object.numComments = options.longs === String ? $util.Long.prototype.toString.call(message.numComments) : options.longs === Number ? new $util.LongBits(message.numComments.low >>> 0, message.numComments.high >>> 0).toNumber() : message.numComments;
        if (message.lastCommentAt != null && message.hasOwnProperty("lastCommentAt"))
            if (typeof message.lastCommentAt === "number")
                object.lastCommentAt = options.longs === String ? String(message.lastCommentAt) : message.lastCommentAt;
            else
                object.lastCommentAt = options.longs === String ? $util.Long.prototype.toString.call(message.lastCommentAt) : options.longs === Number ? new $util.LongBits(message.lastCommentAt.low >>> 0, message.lastCommentAt.high >>> 0).toNumber() : message.lastCommentAt;
        var keys2;
        if (message.votes && (keys2 = Object.keys(message.votes)).length) {
            object.votes = {};
            for (var j = 0; j < keys2.length; ++j)
                object.votes[keys2[j]] = message.votes[keys2[j]];
        }
        if (message.acceptedVotes && message.acceptedVotes.length) {
            object.acceptedVotes = [];
            for (var j = 0; j < message.acceptedVotes.length; ++j)
                object.acceptedVotes[j] = message.acceptedVotes[j];
        }
        if (message.acceptedCommentVotes && message.acceptedCommentVotes.length) {
            object.acceptedCommentVotes = [];
            for (var j = 0; j < message.acceptedCommentVotes.length; ++j)
                object.acceptedCommentVotes[j] = message.acceptedCommentVotes[j];
        }
        if (message.mod && message.mod.length) {
            object.mod = [];
            for (var j = 0; j < message.mod.length; ++j)
                object.mod[j] = $root.BanInfo.toObject(message.mod[j], options);
        }
        if (message.me != null && message.hasOwnProperty("me"))
            object.me = $root.ThreadActionedContext.toObject(message.me, options);
        if (message.unhandledReports != null && message.hasOwnProperty("unhandledReports"))
            object.unhandledReports = message.unhandledReports;
        if (message.reports != null && message.hasOwnProperty("reports"))
            object.reports = message.reports;
        if (message.thumb != null && message.hasOwnProperty("thumb"))
            object.thumb = message.thumb;
        return object;
    };

    /**
     * Converts this Thread to JSON.
     * @function toJSON
     * @memberof Thread
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Thread.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Thread;
})();

$root.EntityVoteRequest = (function() {

    /**
     * Properties of an EntityVoteRequest.
     * @exports IEntityVoteRequest
     * @interface IEntityVoteRequest
     * @property {string|null} [type] EntityVoteRequest type
     * @property {string|null} [entityId] EntityVoteRequest entityId
     * @property {IVote|null} [vote] EntityVoteRequest vote
     */

    /**
     * Constructs a new EntityVoteRequest.
     * @exports EntityVoteRequest
     * @classdesc Represents an EntityVoteRequest.
     * @implements IEntityVoteRequest
     * @constructor
     * @param {IEntityVoteRequest=} [properties] Properties to set
     */
    function EntityVoteRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EntityVoteRequest type.
     * @member {string} type
     * @memberof EntityVoteRequest
     * @instance
     */
    EntityVoteRequest.prototype.type = "";

    /**
     * EntityVoteRequest entityId.
     * @member {string} entityId
     * @memberof EntityVoteRequest
     * @instance
     */
    EntityVoteRequest.prototype.entityId = "";

    /**
     * EntityVoteRequest vote.
     * @member {IVote|null|undefined} vote
     * @memberof EntityVoteRequest
     * @instance
     */
    EntityVoteRequest.prototype.vote = null;

    /**
     * Creates a new EntityVoteRequest instance using the specified properties.
     * @function create
     * @memberof EntityVoteRequest
     * @static
     * @param {IEntityVoteRequest=} [properties] Properties to set
     * @returns {EntityVoteRequest} EntityVoteRequest instance
     */
    EntityVoteRequest.create = function create(properties) {
        return new EntityVoteRequest(properties);
    };

    /**
     * Encodes the specified EntityVoteRequest message. Does not implicitly {@link EntityVoteRequest.verify|verify} messages.
     * @function encode
     * @memberof EntityVoteRequest
     * @static
     * @param {IEntityVoteRequest} message EntityVoteRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EntityVoteRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
        if (message.entityId != null && Object.hasOwnProperty.call(message, "entityId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.entityId);
        if (message.vote != null && Object.hasOwnProperty.call(message, "vote"))
            $root.Vote.encode(message.vote, writer.uint32(/* id 99, wireType 2 =*/794).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EntityVoteRequest message, length delimited. Does not implicitly {@link EntityVoteRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EntityVoteRequest
     * @static
     * @param {IEntityVoteRequest} message EntityVoteRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EntityVoteRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EntityVoteRequest message from the specified reader or buffer.
     * @function decode
     * @memberof EntityVoteRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EntityVoteRequest} EntityVoteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EntityVoteRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EntityVoteRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.string();
                break;
            case 2:
                message.entityId = reader.string();
                break;
            case 99:
                message.vote = $root.Vote.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EntityVoteRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EntityVoteRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EntityVoteRequest} EntityVoteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EntityVoteRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EntityVoteRequest message.
     * @function verify
     * @memberof EntityVoteRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EntityVoteRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.entityId != null && message.hasOwnProperty("entityId"))
            if (!$util.isString(message.entityId))
                return "entityId: string expected";
        if (message.vote != null && message.hasOwnProperty("vote")) {
            var error = $root.Vote.verify(message.vote);
            if (error)
                return "vote." + error;
        }
        return null;
    };

    /**
     * Creates an EntityVoteRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EntityVoteRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EntityVoteRequest} EntityVoteRequest
     */
    EntityVoteRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.EntityVoteRequest)
            return object;
        var message = new $root.EntityVoteRequest();
        if (object.type != null)
            message.type = String(object.type);
        if (object.entityId != null)
            message.entityId = String(object.entityId);
        if (object.vote != null) {
            if (typeof object.vote !== "object")
                throw TypeError(".EntityVoteRequest.vote: object expected");
            message.vote = $root.Vote.fromObject(object.vote);
        }
        return message;
    };

    /**
     * Creates a plain object from an EntityVoteRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EntityVoteRequest
     * @static
     * @param {EntityVoteRequest} message EntityVoteRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EntityVoteRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = "";
            object.entityId = "";
            object.vote = null;
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.entityId != null && message.hasOwnProperty("entityId"))
            object.entityId = message.entityId;
        if (message.vote != null && message.hasOwnProperty("vote"))
            object.vote = $root.Vote.toObject(message.vote, options);
        return object;
    };

    /**
     * Converts this EntityVoteRequest to JSON.
     * @function toJSON
     * @memberof EntityVoteRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EntityVoteRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EntityVoteRequest;
})();

$root.ThreadSelectFilters = (function() {

    /**
     * Properties of a ThreadSelectFilters.
     * @exports IThreadSelectFilters
     * @interface IThreadSelectFilters
     * @property {ThreadSelectFilters.Method|null} [rankMethod] ThreadSelectFilters rankMethod
     * @property {ThreadSelectFilters.SortDirection|null} [sortDirection] ThreadSelectFilters sortDirection
     * @property {number|null} [limit] ThreadSelectFilters limit
     * @property {string|null} [query] ThreadSelectFilters query
     * @property {number|null} [page] ThreadSelectFilters page
     * @property {boolean|null} [useBoolean] ThreadSelectFilters useBoolean
     * @property {number|null} [createdStart] ThreadSelectFilters createdStart
     * @property {number|null} [createdEnd] ThreadSelectFilters createdEnd
     */

    /**
     * Constructs a new ThreadSelectFilters.
     * @exports ThreadSelectFilters
     * @classdesc Represents a ThreadSelectFilters.
     * @implements IThreadSelectFilters
     * @constructor
     * @param {IThreadSelectFilters=} [properties] Properties to set
     */
    function ThreadSelectFilters(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ThreadSelectFilters rankMethod.
     * @member {ThreadSelectFilters.Method} rankMethod
     * @memberof ThreadSelectFilters
     * @instance
     */
    ThreadSelectFilters.prototype.rankMethod = 0;

    /**
     * ThreadSelectFilters sortDirection.
     * @member {ThreadSelectFilters.SortDirection} sortDirection
     * @memberof ThreadSelectFilters
     * @instance
     */
    ThreadSelectFilters.prototype.sortDirection = 0;

    /**
     * ThreadSelectFilters limit.
     * @member {number} limit
     * @memberof ThreadSelectFilters
     * @instance
     */
    ThreadSelectFilters.prototype.limit = 0;

    /**
     * ThreadSelectFilters query.
     * @member {string} query
     * @memberof ThreadSelectFilters
     * @instance
     */
    ThreadSelectFilters.prototype.query = "";

    /**
     * ThreadSelectFilters page.
     * @member {number} page
     * @memberof ThreadSelectFilters
     * @instance
     */
    ThreadSelectFilters.prototype.page = 0;

    /**
     * ThreadSelectFilters useBoolean.
     * @member {boolean} useBoolean
     * @memberof ThreadSelectFilters
     * @instance
     */
    ThreadSelectFilters.prototype.useBoolean = false;

    /**
     * ThreadSelectFilters createdStart.
     * @member {number} createdStart
     * @memberof ThreadSelectFilters
     * @instance
     */
    ThreadSelectFilters.prototype.createdStart = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ThreadSelectFilters createdEnd.
     * @member {number} createdEnd
     * @memberof ThreadSelectFilters
     * @instance
     */
    ThreadSelectFilters.prototype.createdEnd = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ThreadSelectFilters instance using the specified properties.
     * @function create
     * @memberof ThreadSelectFilters
     * @static
     * @param {IThreadSelectFilters=} [properties] Properties to set
     * @returns {ThreadSelectFilters} ThreadSelectFilters instance
     */
    ThreadSelectFilters.create = function create(properties) {
        return new ThreadSelectFilters(properties);
    };

    /**
     * Encodes the specified ThreadSelectFilters message. Does not implicitly {@link ThreadSelectFilters.verify|verify} messages.
     * @function encode
     * @memberof ThreadSelectFilters
     * @static
     * @param {IThreadSelectFilters} message ThreadSelectFilters message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThreadSelectFilters.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.rankMethod != null && Object.hasOwnProperty.call(message, "rankMethod"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.rankMethod);
        if (message.sortDirection != null && Object.hasOwnProperty.call(message, "sortDirection"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sortDirection);
        if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.limit);
        if (message.query != null && Object.hasOwnProperty.call(message, "query"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.query);
        if (message.createdStart != null && Object.hasOwnProperty.call(message, "createdStart"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.createdStart);
        if (message.createdEnd != null && Object.hasOwnProperty.call(message, "createdEnd"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.createdEnd);
        if (message.page != null && Object.hasOwnProperty.call(message, "page"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.page);
        if (message.useBoolean != null && Object.hasOwnProperty.call(message, "useBoolean"))
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.useBoolean);
        return writer;
    };

    /**
     * Encodes the specified ThreadSelectFilters message, length delimited. Does not implicitly {@link ThreadSelectFilters.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ThreadSelectFilters
     * @static
     * @param {IThreadSelectFilters} message ThreadSelectFilters message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThreadSelectFilters.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ThreadSelectFilters message from the specified reader or buffer.
     * @function decode
     * @memberof ThreadSelectFilters
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ThreadSelectFilters} ThreadSelectFilters
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThreadSelectFilters.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ThreadSelectFilters();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.rankMethod = reader.int32();
                break;
            case 2:
                message.sortDirection = reader.int32();
                break;
            case 3:
                message.limit = reader.uint32();
                break;
            case 4:
                message.query = reader.string();
                break;
            case 7:
                message.page = reader.uint32();
                break;
            case 8:
                message.useBoolean = reader.bool();
                break;
            case 5:
                message.createdStart = reader.int64();
                break;
            case 6:
                message.createdEnd = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ThreadSelectFilters message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ThreadSelectFilters
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ThreadSelectFilters} ThreadSelectFilters
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThreadSelectFilters.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ThreadSelectFilters message.
     * @function verify
     * @memberof ThreadSelectFilters
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ThreadSelectFilters.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.rankMethod != null && message.hasOwnProperty("rankMethod"))
            switch (message.rankMethod) {
            default:
                return "rankMethod: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.sortDirection != null && message.hasOwnProperty("sortDirection"))
            switch (message.sortDirection) {
            default:
                return "sortDirection: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.limit != null && message.hasOwnProperty("limit"))
            if (!$util.isInteger(message.limit))
                return "limit: integer expected";
        if (message.query != null && message.hasOwnProperty("query"))
            if (!$util.isString(message.query))
                return "query: string expected";
        if (message.page != null && message.hasOwnProperty("page"))
            if (!$util.isInteger(message.page))
                return "page: integer expected";
        if (message.useBoolean != null && message.hasOwnProperty("useBoolean"))
            if (typeof message.useBoolean !== "boolean")
                return "useBoolean: boolean expected";
        if (message.createdStart != null && message.hasOwnProperty("createdStart"))
            if (!$util.isInteger(message.createdStart) && !(message.createdStart && $util.isInteger(message.createdStart.low) && $util.isInteger(message.createdStart.high)))
                return "createdStart: integer|Long expected";
        if (message.createdEnd != null && message.hasOwnProperty("createdEnd"))
            if (!$util.isInteger(message.createdEnd) && !(message.createdEnd && $util.isInteger(message.createdEnd.low) && $util.isInteger(message.createdEnd.high)))
                return "createdEnd: integer|Long expected";
        return null;
    };

    /**
     * Creates a ThreadSelectFilters message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ThreadSelectFilters
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ThreadSelectFilters} ThreadSelectFilters
     */
    ThreadSelectFilters.fromObject = function fromObject(object) {
        if (object instanceof $root.ThreadSelectFilters)
            return object;
        var message = new $root.ThreadSelectFilters();
        switch (object.rankMethod) {
        case "HOT":
        case 0:
            message.rankMethod = 0;
            break;
        case "TOP":
        case 1:
            message.rankMethod = 1;
            break;
        case "CONTROVERSIAL":
        case 2:
            message.rankMethod = 2;
            break;
        }
        switch (object.sortDirection) {
        case "DESC":
        case 0:
            message.sortDirection = 0;
            break;
        case "ASC":
        case 1:
            message.sortDirection = 1;
            break;
        }
        if (object.limit != null)
            message.limit = object.limit >>> 0;
        if (object.query != null)
            message.query = String(object.query);
        if (object.page != null)
            message.page = object.page >>> 0;
        if (object.useBoolean != null)
            message.useBoolean = Boolean(object.useBoolean);
        if (object.createdStart != null)
            if ($util.Long)
                (message.createdStart = $util.Long.fromValue(object.createdStart)).unsigned = false;
            else if (typeof object.createdStart === "string")
                message.createdStart = parseInt(object.createdStart, 10);
            else if (typeof object.createdStart === "number")
                message.createdStart = object.createdStart;
            else if (typeof object.createdStart === "object")
                message.createdStart = new $util.LongBits(object.createdStart.low >>> 0, object.createdStart.high >>> 0).toNumber();
        if (object.createdEnd != null)
            if ($util.Long)
                (message.createdEnd = $util.Long.fromValue(object.createdEnd)).unsigned = false;
            else if (typeof object.createdEnd === "string")
                message.createdEnd = parseInt(object.createdEnd, 10);
            else if (typeof object.createdEnd === "number")
                message.createdEnd = object.createdEnd;
            else if (typeof object.createdEnd === "object")
                message.createdEnd = new $util.LongBits(object.createdEnd.low >>> 0, object.createdEnd.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a ThreadSelectFilters message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ThreadSelectFilters
     * @static
     * @param {ThreadSelectFilters} message ThreadSelectFilters
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ThreadSelectFilters.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.rankMethod = options.enums === String ? "HOT" : 0;
            object.sortDirection = options.enums === String ? "DESC" : 0;
            object.limit = 0;
            object.query = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdStart = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdStart = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdEnd = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdEnd = options.longs === String ? "0" : 0;
            object.page = 0;
            object.useBoolean = false;
        }
        if (message.rankMethod != null && message.hasOwnProperty("rankMethod"))
            object.rankMethod = options.enums === String ? $root.ThreadSelectFilters.Method[message.rankMethod] : message.rankMethod;
        if (message.sortDirection != null && message.hasOwnProperty("sortDirection"))
            object.sortDirection = options.enums === String ? $root.ThreadSelectFilters.SortDirection[message.sortDirection] : message.sortDirection;
        if (message.limit != null && message.hasOwnProperty("limit"))
            object.limit = message.limit;
        if (message.query != null && message.hasOwnProperty("query"))
            object.query = message.query;
        if (message.createdStart != null && message.hasOwnProperty("createdStart"))
            if (typeof message.createdStart === "number")
                object.createdStart = options.longs === String ? String(message.createdStart) : message.createdStart;
            else
                object.createdStart = options.longs === String ? $util.Long.prototype.toString.call(message.createdStart) : options.longs === Number ? new $util.LongBits(message.createdStart.low >>> 0, message.createdStart.high >>> 0).toNumber() : message.createdStart;
        if (message.createdEnd != null && message.hasOwnProperty("createdEnd"))
            if (typeof message.createdEnd === "number")
                object.createdEnd = options.longs === String ? String(message.createdEnd) : message.createdEnd;
            else
                object.createdEnd = options.longs === String ? $util.Long.prototype.toString.call(message.createdEnd) : options.longs === Number ? new $util.LongBits(message.createdEnd.low >>> 0, message.createdEnd.high >>> 0).toNumber() : message.createdEnd;
        if (message.page != null && message.hasOwnProperty("page"))
            object.page = message.page;
        if (message.useBoolean != null && message.hasOwnProperty("useBoolean"))
            object.useBoolean = message.useBoolean;
        return object;
    };

    /**
     * Converts this ThreadSelectFilters to JSON.
     * @function toJSON
     * @memberof ThreadSelectFilters
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ThreadSelectFilters.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * ThreadContentFilter enum.
     * @name ThreadSelectFilters.ThreadContentFilter
     * @enum {number}
     * @property {number} TITLE=0 TITLE value
     * @property {number} CONTENT=1 CONTENT value
     * @property {number} FLAIR=2 FLAIR value
     */
    ThreadSelectFilters.ThreadContentFilter = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TITLE"] = 0;
        values[valuesById[1] = "CONTENT"] = 1;
        values[valuesById[2] = "FLAIR"] = 2;
        return values;
    })();

    /**
     * SortDirection enum.
     * @name ThreadSelectFilters.SortDirection
     * @enum {number}
     * @property {number} DESC=0 DESC value
     * @property {number} ASC=1 ASC value
     */
    ThreadSelectFilters.SortDirection = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DESC"] = 0;
        values[valuesById[1] = "ASC"] = 1;
        return values;
    })();

    /**
     * ContentWarning enum.
     * @name ThreadSelectFilters.ContentWarning
     * @enum {number}
     * @property {number} NORMAL=0 NORMAL value
     * @property {number} NSFW=1 NSFW value
     * @property {number} NSFL=2 NSFL value
     */
    ThreadSelectFilters.ContentWarning = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NORMAL"] = 0;
        values[valuesById[1] = "NSFW"] = 1;
        values[valuesById[2] = "NSFL"] = 2;
        return values;
    })();

    /**
     * Method enum.
     * @name ThreadSelectFilters.Method
     * @enum {number}
     * @property {number} HOT=0 HOT value
     * @property {number} TOP=1 TOP value
     * @property {number} CONTROVERSIAL=2 CONTROVERSIAL value
     */
    ThreadSelectFilters.Method = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "HOT"] = 0;
        values[valuesById[1] = "TOP"] = 1;
        values[valuesById[2] = "CONTROVERSIAL"] = 2;
        return values;
    })();

    return ThreadSelectFilters;
})();

$root.ThreadSelectRequest = (function() {

    /**
     * Properties of a ThreadSelectRequest.
     * @exports IThreadSelectRequest
     * @interface IThreadSelectRequest
     * @property {IThreadSelectFilters|null} [filters] ThreadSelectRequest filters
     * @property {string|null} [boardId] ThreadSelectRequest boardId
     * @property {string|null} [token] ThreadSelectRequest token
     * @property {boolean|null} [withContext] ThreadSelectRequest withContext
     */

    /**
     * Constructs a new ThreadSelectRequest.
     * @exports ThreadSelectRequest
     * @classdesc Represents a ThreadSelectRequest.
     * @implements IThreadSelectRequest
     * @constructor
     * @param {IThreadSelectRequest=} [properties] Properties to set
     */
    function ThreadSelectRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ThreadSelectRequest filters.
     * @member {IThreadSelectFilters|null|undefined} filters
     * @memberof ThreadSelectRequest
     * @instance
     */
    ThreadSelectRequest.prototype.filters = null;

    /**
     * ThreadSelectRequest boardId.
     * @member {string} boardId
     * @memberof ThreadSelectRequest
     * @instance
     */
    ThreadSelectRequest.prototype.boardId = "";

    /**
     * ThreadSelectRequest token.
     * @member {string} token
     * @memberof ThreadSelectRequest
     * @instance
     */
    ThreadSelectRequest.prototype.token = "";

    /**
     * ThreadSelectRequest withContext.
     * @member {boolean} withContext
     * @memberof ThreadSelectRequest
     * @instance
     */
    ThreadSelectRequest.prototype.withContext = false;

    /**
     * Creates a new ThreadSelectRequest instance using the specified properties.
     * @function create
     * @memberof ThreadSelectRequest
     * @static
     * @param {IThreadSelectRequest=} [properties] Properties to set
     * @returns {ThreadSelectRequest} ThreadSelectRequest instance
     */
    ThreadSelectRequest.create = function create(properties) {
        return new ThreadSelectRequest(properties);
    };

    /**
     * Encodes the specified ThreadSelectRequest message. Does not implicitly {@link ThreadSelectRequest.verify|verify} messages.
     * @function encode
     * @memberof ThreadSelectRequest
     * @static
     * @param {IThreadSelectRequest} message ThreadSelectRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThreadSelectRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.filters != null && Object.hasOwnProperty.call(message, "filters"))
            $root.ThreadSelectFilters.encode(message.filters, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.boardId != null && Object.hasOwnProperty.call(message, "boardId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.boardId);
        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
        if (message.withContext != null && Object.hasOwnProperty.call(message, "withContext"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.withContext);
        return writer;
    };

    /**
     * Encodes the specified ThreadSelectRequest message, length delimited. Does not implicitly {@link ThreadSelectRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ThreadSelectRequest
     * @static
     * @param {IThreadSelectRequest} message ThreadSelectRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThreadSelectRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ThreadSelectRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ThreadSelectRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ThreadSelectRequest} ThreadSelectRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThreadSelectRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ThreadSelectRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.filters = $root.ThreadSelectFilters.decode(reader, reader.uint32());
                break;
            case 2:
                message.boardId = reader.string();
                break;
            case 3:
                message.token = reader.string();
                break;
            case 4:
                message.withContext = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ThreadSelectRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ThreadSelectRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ThreadSelectRequest} ThreadSelectRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThreadSelectRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ThreadSelectRequest message.
     * @function verify
     * @memberof ThreadSelectRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ThreadSelectRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.filters != null && message.hasOwnProperty("filters")) {
            var error = $root.ThreadSelectFilters.verify(message.filters);
            if (error)
                return "filters." + error;
        }
        if (message.boardId != null && message.hasOwnProperty("boardId"))
            if (!$util.isString(message.boardId))
                return "boardId: string expected";
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
        if (message.withContext != null && message.hasOwnProperty("withContext"))
            if (typeof message.withContext !== "boolean")
                return "withContext: boolean expected";
        return null;
    };

    /**
     * Creates a ThreadSelectRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ThreadSelectRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ThreadSelectRequest} ThreadSelectRequest
     */
    ThreadSelectRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ThreadSelectRequest)
            return object;
        var message = new $root.ThreadSelectRequest();
        if (object.filters != null) {
            if (typeof object.filters !== "object")
                throw TypeError(".ThreadSelectRequest.filters: object expected");
            message.filters = $root.ThreadSelectFilters.fromObject(object.filters);
        }
        if (object.boardId != null)
            message.boardId = String(object.boardId);
        if (object.token != null)
            message.token = String(object.token);
        if (object.withContext != null)
            message.withContext = Boolean(object.withContext);
        return message;
    };

    /**
     * Creates a plain object from a ThreadSelectRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ThreadSelectRequest
     * @static
     * @param {ThreadSelectRequest} message ThreadSelectRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ThreadSelectRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.filters = null;
            object.boardId = "";
            object.token = "";
            object.withContext = false;
        }
        if (message.filters != null && message.hasOwnProperty("filters"))
            object.filters = $root.ThreadSelectFilters.toObject(message.filters, options);
        if (message.boardId != null && message.hasOwnProperty("boardId"))
            object.boardId = message.boardId;
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        if (message.withContext != null && message.hasOwnProperty("withContext"))
            object.withContext = message.withContext;
        return object;
    };

    /**
     * Converts this ThreadSelectRequest to JSON.
     * @function toJSON
     * @memberof ThreadSelectRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ThreadSelectRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ThreadSelectRequest;
})();

$root.ThreadsSelectResponse = (function() {

    /**
     * Properties of a ThreadsSelectResponse.
     * @exports IThreadsSelectResponse
     * @interface IThreadsSelectResponse
     * @property {Array.<IThread>|null} [data] ThreadsSelectResponse data
     * @property {string|null} [token] ThreadsSelectResponse token
     * @property {Object.<string,ICommunityUserRef>|null} [users] ThreadsSelectResponse users
     */

    /**
     * Constructs a new ThreadsSelectResponse.
     * @exports ThreadsSelectResponse
     * @classdesc Represents a ThreadsSelectResponse.
     * @implements IThreadsSelectResponse
     * @constructor
     * @param {IThreadsSelectResponse=} [properties] Properties to set
     */
    function ThreadsSelectResponse(properties) {
        this.data = [];
        this.users = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ThreadsSelectResponse data.
     * @member {Array.<IThread>} data
     * @memberof ThreadsSelectResponse
     * @instance
     */
    ThreadsSelectResponse.prototype.data = $util.emptyArray;

    /**
     * ThreadsSelectResponse token.
     * @member {string} token
     * @memberof ThreadsSelectResponse
     * @instance
     */
    ThreadsSelectResponse.prototype.token = "";

    /**
     * ThreadsSelectResponse users.
     * @member {Object.<string,ICommunityUserRef>} users
     * @memberof ThreadsSelectResponse
     * @instance
     */
    ThreadsSelectResponse.prototype.users = $util.emptyObject;

    /**
     * Creates a new ThreadsSelectResponse instance using the specified properties.
     * @function create
     * @memberof ThreadsSelectResponse
     * @static
     * @param {IThreadsSelectResponse=} [properties] Properties to set
     * @returns {ThreadsSelectResponse} ThreadsSelectResponse instance
     */
    ThreadsSelectResponse.create = function create(properties) {
        return new ThreadsSelectResponse(properties);
    };

    /**
     * Encodes the specified ThreadsSelectResponse message. Does not implicitly {@link ThreadsSelectResponse.verify|verify} messages.
     * @function encode
     * @memberof ThreadsSelectResponse
     * @static
     * @param {IThreadsSelectResponse} message ThreadsSelectResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThreadsSelectResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.data != null && message.data.length)
            for (var i = 0; i < message.data.length; ++i)
                $root.Thread.encode(message.data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
        if (message.users != null && Object.hasOwnProperty.call(message, "users"))
            for (var keys = Object.keys(message.users), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.CommunityUserRef.encode(message.users[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        return writer;
    };

    /**
     * Encodes the specified ThreadsSelectResponse message, length delimited. Does not implicitly {@link ThreadsSelectResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ThreadsSelectResponse
     * @static
     * @param {IThreadsSelectResponse} message ThreadsSelectResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThreadsSelectResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ThreadsSelectResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ThreadsSelectResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ThreadsSelectResponse} ThreadsSelectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThreadsSelectResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ThreadsSelectResponse(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.data && message.data.length))
                    message.data = [];
                message.data.push($root.Thread.decode(reader, reader.uint32()));
                break;
            case 2:
                message.token = reader.string();
                break;
            case 3:
                if (message.users === $util.emptyObject)
                    message.users = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = null;
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = $root.CommunityUserRef.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.users[key] = value;
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ThreadsSelectResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ThreadsSelectResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ThreadsSelectResponse} ThreadsSelectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThreadsSelectResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ThreadsSelectResponse message.
     * @function verify
     * @memberof ThreadsSelectResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ThreadsSelectResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.data != null && message.hasOwnProperty("data")) {
            if (!Array.isArray(message.data))
                return "data: array expected";
            for (var i = 0; i < message.data.length; ++i) {
                var error = $root.Thread.verify(message.data[i]);
                if (error)
                    return "data." + error;
            }
        }
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
        if (message.users != null && message.hasOwnProperty("users")) {
            if (!$util.isObject(message.users))
                return "users: object expected";
            var key = Object.keys(message.users);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.CommunityUserRef.verify(message.users[key[i]]);
                if (error)
                    return "users." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ThreadsSelectResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ThreadsSelectResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ThreadsSelectResponse} ThreadsSelectResponse
     */
    ThreadsSelectResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ThreadsSelectResponse)
            return object;
        var message = new $root.ThreadsSelectResponse();
        if (object.data) {
            if (!Array.isArray(object.data))
                throw TypeError(".ThreadsSelectResponse.data: array expected");
            message.data = [];
            for (var i = 0; i < object.data.length; ++i) {
                if (typeof object.data[i] !== "object")
                    throw TypeError(".ThreadsSelectResponse.data: object expected");
                message.data[i] = $root.Thread.fromObject(object.data[i]);
            }
        }
        if (object.token != null)
            message.token = String(object.token);
        if (object.users) {
            if (typeof object.users !== "object")
                throw TypeError(".ThreadsSelectResponse.users: object expected");
            message.users = {};
            for (var keys = Object.keys(object.users), i = 0; i < keys.length; ++i) {
                if (typeof object.users[keys[i]] !== "object")
                    throw TypeError(".ThreadsSelectResponse.users: object expected");
                message.users[keys[i]] = $root.CommunityUserRef.fromObject(object.users[keys[i]]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ThreadsSelectResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ThreadsSelectResponse
     * @static
     * @param {ThreadsSelectResponse} message ThreadsSelectResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ThreadsSelectResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.data = [];
        if (options.objects || options.defaults)
            object.users = {};
        if (options.defaults)
            object.token = "";
        if (message.data && message.data.length) {
            object.data = [];
            for (var j = 0; j < message.data.length; ++j)
                object.data[j] = $root.Thread.toObject(message.data[j], options);
        }
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        var keys2;
        if (message.users && (keys2 = Object.keys(message.users)).length) {
            object.users = {};
            for (var j = 0; j < keys2.length; ++j)
                object.users[keys2[j]] = $root.CommunityUserRef.toObject(message.users[keys2[j]], options);
        }
        return object;
    };

    /**
     * Converts this ThreadsSelectResponse to JSON.
     * @function toJSON
     * @memberof ThreadsSelectResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ThreadsSelectResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ThreadsSelectResponse;
})();

$root.ThreadsSelectResponseWithBoardContext = (function() {

    /**
     * Properties of a ThreadsSelectResponseWithBoardContext.
     * @exports IThreadsSelectResponseWithBoardContext
     * @interface IThreadsSelectResponseWithBoardContext
     * @property {IThreadsSelectResponse|null} [threads] ThreadsSelectResponseWithBoardContext threads
     * @property {IBoard|null} [board] ThreadsSelectResponseWithBoardContext board
     */

    /**
     * Constructs a new ThreadsSelectResponseWithBoardContext.
     * @exports ThreadsSelectResponseWithBoardContext
     * @classdesc Represents a ThreadsSelectResponseWithBoardContext.
     * @implements IThreadsSelectResponseWithBoardContext
     * @constructor
     * @param {IThreadsSelectResponseWithBoardContext=} [properties] Properties to set
     */
    function ThreadsSelectResponseWithBoardContext(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ThreadsSelectResponseWithBoardContext threads.
     * @member {IThreadsSelectResponse|null|undefined} threads
     * @memberof ThreadsSelectResponseWithBoardContext
     * @instance
     */
    ThreadsSelectResponseWithBoardContext.prototype.threads = null;

    /**
     * ThreadsSelectResponseWithBoardContext board.
     * @member {IBoard|null|undefined} board
     * @memberof ThreadsSelectResponseWithBoardContext
     * @instance
     */
    ThreadsSelectResponseWithBoardContext.prototype.board = null;

    /**
     * Creates a new ThreadsSelectResponseWithBoardContext instance using the specified properties.
     * @function create
     * @memberof ThreadsSelectResponseWithBoardContext
     * @static
     * @param {IThreadsSelectResponseWithBoardContext=} [properties] Properties to set
     * @returns {ThreadsSelectResponseWithBoardContext} ThreadsSelectResponseWithBoardContext instance
     */
    ThreadsSelectResponseWithBoardContext.create = function create(properties) {
        return new ThreadsSelectResponseWithBoardContext(properties);
    };

    /**
     * Encodes the specified ThreadsSelectResponseWithBoardContext message. Does not implicitly {@link ThreadsSelectResponseWithBoardContext.verify|verify} messages.
     * @function encode
     * @memberof ThreadsSelectResponseWithBoardContext
     * @static
     * @param {IThreadsSelectResponseWithBoardContext} message ThreadsSelectResponseWithBoardContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThreadsSelectResponseWithBoardContext.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.threads != null && Object.hasOwnProperty.call(message, "threads"))
            $root.ThreadsSelectResponse.encode(message.threads, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.board != null && Object.hasOwnProperty.call(message, "board"))
            $root.Board.encode(message.board, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ThreadsSelectResponseWithBoardContext message, length delimited. Does not implicitly {@link ThreadsSelectResponseWithBoardContext.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ThreadsSelectResponseWithBoardContext
     * @static
     * @param {IThreadsSelectResponseWithBoardContext} message ThreadsSelectResponseWithBoardContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThreadsSelectResponseWithBoardContext.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ThreadsSelectResponseWithBoardContext message from the specified reader or buffer.
     * @function decode
     * @memberof ThreadsSelectResponseWithBoardContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ThreadsSelectResponseWithBoardContext} ThreadsSelectResponseWithBoardContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThreadsSelectResponseWithBoardContext.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ThreadsSelectResponseWithBoardContext();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.threads = $root.ThreadsSelectResponse.decode(reader, reader.uint32());
                break;
            case 2:
                message.board = $root.Board.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ThreadsSelectResponseWithBoardContext message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ThreadsSelectResponseWithBoardContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ThreadsSelectResponseWithBoardContext} ThreadsSelectResponseWithBoardContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThreadsSelectResponseWithBoardContext.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ThreadsSelectResponseWithBoardContext message.
     * @function verify
     * @memberof ThreadsSelectResponseWithBoardContext
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ThreadsSelectResponseWithBoardContext.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.threads != null && message.hasOwnProperty("threads")) {
            var error = $root.ThreadsSelectResponse.verify(message.threads);
            if (error)
                return "threads." + error;
        }
        if (message.board != null && message.hasOwnProperty("board")) {
            var error = $root.Board.verify(message.board);
            if (error)
                return "board." + error;
        }
        return null;
    };

    /**
     * Creates a ThreadsSelectResponseWithBoardContext message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ThreadsSelectResponseWithBoardContext
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ThreadsSelectResponseWithBoardContext} ThreadsSelectResponseWithBoardContext
     */
    ThreadsSelectResponseWithBoardContext.fromObject = function fromObject(object) {
        if (object instanceof $root.ThreadsSelectResponseWithBoardContext)
            return object;
        var message = new $root.ThreadsSelectResponseWithBoardContext();
        if (object.threads != null) {
            if (typeof object.threads !== "object")
                throw TypeError(".ThreadsSelectResponseWithBoardContext.threads: object expected");
            message.threads = $root.ThreadsSelectResponse.fromObject(object.threads);
        }
        if (object.board != null) {
            if (typeof object.board !== "object")
                throw TypeError(".ThreadsSelectResponseWithBoardContext.board: object expected");
            message.board = $root.Board.fromObject(object.board);
        }
        return message;
    };

    /**
     * Creates a plain object from a ThreadsSelectResponseWithBoardContext message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ThreadsSelectResponseWithBoardContext
     * @static
     * @param {ThreadsSelectResponseWithBoardContext} message ThreadsSelectResponseWithBoardContext
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ThreadsSelectResponseWithBoardContext.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.threads = null;
            object.board = null;
        }
        if (message.threads != null && message.hasOwnProperty("threads"))
            object.threads = $root.ThreadsSelectResponse.toObject(message.threads, options);
        if (message.board != null && message.hasOwnProperty("board"))
            object.board = $root.Board.toObject(message.board, options);
        return object;
    };

    /**
     * Converts this ThreadsSelectResponseWithBoardContext to JSON.
     * @function toJSON
     * @memberof ThreadsSelectResponseWithBoardContext
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ThreadsSelectResponseWithBoardContext.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ThreadsSelectResponseWithBoardContext;
})();

$root.UserCreate = (function() {

    /**
     * Properties of a UserCreate.
     * @exports IUserCreate
     * @interface IUserCreate
     * @property {string|null} [username] UserCreate username
     * @property {string|null} [email] UserCreate email
     * @property {string|null} [key] UserCreate key
     * @property {boolean|null} [acceptEmail] UserCreate acceptEmail
     * @property {boolean|null} [subscribeNewsletter] UserCreate subscribeNewsletter
     */

    /**
     * Constructs a new UserCreate.
     * @exports UserCreate
     * @classdesc Represents a UserCreate.
     * @implements IUserCreate
     * @constructor
     * @param {IUserCreate=} [properties] Properties to set
     */
    function UserCreate(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserCreate username.
     * @member {string} username
     * @memberof UserCreate
     * @instance
     */
    UserCreate.prototype.username = "";

    /**
     * UserCreate email.
     * @member {string} email
     * @memberof UserCreate
     * @instance
     */
    UserCreate.prototype.email = "";

    /**
     * UserCreate key.
     * @member {string} key
     * @memberof UserCreate
     * @instance
     */
    UserCreate.prototype.key = "";

    /**
     * UserCreate acceptEmail.
     * @member {boolean} acceptEmail
     * @memberof UserCreate
     * @instance
     */
    UserCreate.prototype.acceptEmail = false;

    /**
     * UserCreate subscribeNewsletter.
     * @member {boolean} subscribeNewsletter
     * @memberof UserCreate
     * @instance
     */
    UserCreate.prototype.subscribeNewsletter = false;

    /**
     * Creates a new UserCreate instance using the specified properties.
     * @function create
     * @memberof UserCreate
     * @static
     * @param {IUserCreate=} [properties] Properties to set
     * @returns {UserCreate} UserCreate instance
     */
    UserCreate.create = function create(properties) {
        return new UserCreate(properties);
    };

    /**
     * Encodes the specified UserCreate message. Does not implicitly {@link UserCreate.verify|verify} messages.
     * @function encode
     * @memberof UserCreate
     * @static
     * @param {IUserCreate} message UserCreate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserCreate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.username != null && Object.hasOwnProperty.call(message, "username"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
        if (message.email != null && Object.hasOwnProperty.call(message, "email"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.email);
        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.key);
        if (message.acceptEmail != null && Object.hasOwnProperty.call(message, "acceptEmail"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.acceptEmail);
        if (message.subscribeNewsletter != null && Object.hasOwnProperty.call(message, "subscribeNewsletter"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.subscribeNewsletter);
        return writer;
    };

    /**
     * Encodes the specified UserCreate message, length delimited. Does not implicitly {@link UserCreate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserCreate
     * @static
     * @param {IUserCreate} message UserCreate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserCreate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserCreate message from the specified reader or buffer.
     * @function decode
     * @memberof UserCreate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserCreate} UserCreate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserCreate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserCreate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.username = reader.string();
                break;
            case 2:
                message.email = reader.string();
                break;
            case 3:
                message.key = reader.string();
                break;
            case 4:
                message.acceptEmail = reader.bool();
                break;
            case 5:
                message.subscribeNewsletter = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserCreate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserCreate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserCreate} UserCreate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserCreate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserCreate message.
     * @function verify
     * @memberof UserCreate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserCreate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.username != null && message.hasOwnProperty("username"))
            if (!$util.isString(message.username))
                return "username: string expected";
        if (message.email != null && message.hasOwnProperty("email"))
            if (!$util.isString(message.email))
                return "email: string expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isString(message.key))
                return "key: string expected";
        if (message.acceptEmail != null && message.hasOwnProperty("acceptEmail"))
            if (typeof message.acceptEmail !== "boolean")
                return "acceptEmail: boolean expected";
        if (message.subscribeNewsletter != null && message.hasOwnProperty("subscribeNewsletter"))
            if (typeof message.subscribeNewsletter !== "boolean")
                return "subscribeNewsletter: boolean expected";
        return null;
    };

    /**
     * Creates a UserCreate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserCreate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserCreate} UserCreate
     */
    UserCreate.fromObject = function fromObject(object) {
        if (object instanceof $root.UserCreate)
            return object;
        var message = new $root.UserCreate();
        if (object.username != null)
            message.username = String(object.username);
        if (object.email != null)
            message.email = String(object.email);
        if (object.key != null)
            message.key = String(object.key);
        if (object.acceptEmail != null)
            message.acceptEmail = Boolean(object.acceptEmail);
        if (object.subscribeNewsletter != null)
            message.subscribeNewsletter = Boolean(object.subscribeNewsletter);
        return message;
    };

    /**
     * Creates a plain object from a UserCreate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserCreate
     * @static
     * @param {UserCreate} message UserCreate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserCreate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.username = "";
            object.email = "";
            object.key = "";
            object.acceptEmail = false;
            object.subscribeNewsletter = false;
        }
        if (message.username != null && message.hasOwnProperty("username"))
            object.username = message.username;
        if (message.email != null && message.hasOwnProperty("email"))
            object.email = message.email;
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        if (message.acceptEmail != null && message.hasOwnProperty("acceptEmail"))
            object.acceptEmail = message.acceptEmail;
        if (message.subscribeNewsletter != null && message.hasOwnProperty("subscribeNewsletter"))
            object.subscribeNewsletter = message.subscribeNewsletter;
        return object;
    };

    /**
     * Converts this UserCreate to JSON.
     * @function toJSON
     * @memberof UserCreate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserCreate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserCreate;
})();

$root.UserSubscribedRequest = (function() {

    /**
     * Properties of a UserSubscribedRequest.
     * @exports IUserSubscribedRequest
     * @interface IUserSubscribedRequest
     */

    /**
     * Constructs a new UserSubscribedRequest.
     * @exports UserSubscribedRequest
     * @classdesc Represents a UserSubscribedRequest.
     * @implements IUserSubscribedRequest
     * @constructor
     * @param {IUserSubscribedRequest=} [properties] Properties to set
     */
    function UserSubscribedRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new UserSubscribedRequest instance using the specified properties.
     * @function create
     * @memberof UserSubscribedRequest
     * @static
     * @param {IUserSubscribedRequest=} [properties] Properties to set
     * @returns {UserSubscribedRequest} UserSubscribedRequest instance
     */
    UserSubscribedRequest.create = function create(properties) {
        return new UserSubscribedRequest(properties);
    };

    /**
     * Encodes the specified UserSubscribedRequest message. Does not implicitly {@link UserSubscribedRequest.verify|verify} messages.
     * @function encode
     * @memberof UserSubscribedRequest
     * @static
     * @param {IUserSubscribedRequest} message UserSubscribedRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserSubscribedRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified UserSubscribedRequest message, length delimited. Does not implicitly {@link UserSubscribedRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserSubscribedRequest
     * @static
     * @param {IUserSubscribedRequest} message UserSubscribedRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserSubscribedRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserSubscribedRequest message from the specified reader or buffer.
     * @function decode
     * @memberof UserSubscribedRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserSubscribedRequest} UserSubscribedRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserSubscribedRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserSubscribedRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserSubscribedRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserSubscribedRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserSubscribedRequest} UserSubscribedRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserSubscribedRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserSubscribedRequest message.
     * @function verify
     * @memberof UserSubscribedRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserSubscribedRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a UserSubscribedRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserSubscribedRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserSubscribedRequest} UserSubscribedRequest
     */
    UserSubscribedRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.UserSubscribedRequest)
            return object;
        return new $root.UserSubscribedRequest();
    };

    /**
     * Creates a plain object from a UserSubscribedRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserSubscribedRequest
     * @static
     * @param {UserSubscribedRequest} message UserSubscribedRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserSubscribedRequest.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this UserSubscribedRequest to JSON.
     * @function toJSON
     * @memberof UserSubscribedRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserSubscribedRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserSubscribedRequest;
})();

$root.BlogSubscription = (function() {

    /**
     * Properties of a BlogSubscription.
     * @exports IBlogSubscription
     * @interface IBlogSubscription
     */

    /**
     * Constructs a new BlogSubscription.
     * @exports BlogSubscription
     * @classdesc Represents a BlogSubscription.
     * @implements IBlogSubscription
     * @constructor
     * @param {IBlogSubscription=} [properties] Properties to set
     */
    function BlogSubscription(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new BlogSubscription instance using the specified properties.
     * @function create
     * @memberof BlogSubscription
     * @static
     * @param {IBlogSubscription=} [properties] Properties to set
     * @returns {BlogSubscription} BlogSubscription instance
     */
    BlogSubscription.create = function create(properties) {
        return new BlogSubscription(properties);
    };

    /**
     * Encodes the specified BlogSubscription message. Does not implicitly {@link BlogSubscription.verify|verify} messages.
     * @function encode
     * @memberof BlogSubscription
     * @static
     * @param {IBlogSubscription} message BlogSubscription message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BlogSubscription.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified BlogSubscription message, length delimited. Does not implicitly {@link BlogSubscription.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BlogSubscription
     * @static
     * @param {IBlogSubscription} message BlogSubscription message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BlogSubscription.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BlogSubscription message from the specified reader or buffer.
     * @function decode
     * @memberof BlogSubscription
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BlogSubscription} BlogSubscription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BlogSubscription.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BlogSubscription();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BlogSubscription message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BlogSubscription
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BlogSubscription} BlogSubscription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BlogSubscription.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BlogSubscription message.
     * @function verify
     * @memberof BlogSubscription
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BlogSubscription.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a BlogSubscription message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BlogSubscription
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BlogSubscription} BlogSubscription
     */
    BlogSubscription.fromObject = function fromObject(object) {
        if (object instanceof $root.BlogSubscription)
            return object;
        return new $root.BlogSubscription();
    };

    /**
     * Creates a plain object from a BlogSubscription message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BlogSubscription
     * @static
     * @param {BlogSubscription} message BlogSubscription
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BlogSubscription.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this BlogSubscription to JSON.
     * @function toJSON
     * @memberof BlogSubscription
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BlogSubscription.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BlogSubscription;
})();

$root.UserMod = (function() {

    /**
     * Properties of a UserMod.
     * @exports IUserMod
     * @interface IUserMod
     * @property {string|null} [boardId] UserMod boardId
     * @property {number|null} [createdAt] UserMod createdAt
     */

    /**
     * Constructs a new UserMod.
     * @exports UserMod
     * @classdesc Represents a UserMod.
     * @implements IUserMod
     * @constructor
     * @param {IUserMod=} [properties] Properties to set
     */
    function UserMod(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserMod boardId.
     * @member {string} boardId
     * @memberof UserMod
     * @instance
     */
    UserMod.prototype.boardId = "";

    /**
     * UserMod createdAt.
     * @member {number} createdAt
     * @memberof UserMod
     * @instance
     */
    UserMod.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new UserMod instance using the specified properties.
     * @function create
     * @memberof UserMod
     * @static
     * @param {IUserMod=} [properties] Properties to set
     * @returns {UserMod} UserMod instance
     */
    UserMod.create = function create(properties) {
        return new UserMod(properties);
    };

    /**
     * Encodes the specified UserMod message. Does not implicitly {@link UserMod.verify|verify} messages.
     * @function encode
     * @memberof UserMod
     * @static
     * @param {IUserMod} message UserMod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserMod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.boardId != null && Object.hasOwnProperty.call(message, "boardId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.boardId);
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.createdAt);
        return writer;
    };

    /**
     * Encodes the specified UserMod message, length delimited. Does not implicitly {@link UserMod.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserMod
     * @static
     * @param {IUserMod} message UserMod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserMod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserMod message from the specified reader or buffer.
     * @function decode
     * @memberof UserMod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserMod} UserMod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserMod.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserMod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.boardId = reader.string();
                break;
            case 2:
                message.createdAt = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserMod message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserMod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserMod} UserMod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserMod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserMod message.
     * @function verify
     * @memberof UserMod
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserMod.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.boardId != null && message.hasOwnProperty("boardId"))
            if (!$util.isString(message.boardId))
                return "boardId: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                return "createdAt: integer|Long expected";
        return null;
    };

    /**
     * Creates a UserMod message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserMod
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserMod} UserMod
     */
    UserMod.fromObject = function fromObject(object) {
        if (object instanceof $root.UserMod)
            return object;
        var message = new $root.UserMod();
        if (object.boardId != null)
            message.boardId = String(object.boardId);
        if (object.createdAt != null)
            if ($util.Long)
                (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
            else if (typeof object.createdAt === "string")
                message.createdAt = parseInt(object.createdAt, 10);
            else if (typeof object.createdAt === "number")
                message.createdAt = object.createdAt;
            else if (typeof object.createdAt === "object")
                message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a UserMod message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserMod
     * @static
     * @param {UserMod} message UserMod
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserMod.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.boardId = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdAt = options.longs === String ? "0" : 0;
        }
        if (message.boardId != null && message.hasOwnProperty("boardId"))
            object.boardId = message.boardId;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (typeof message.createdAt === "number")
                object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
            else
                object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
        return object;
    };

    /**
     * Converts this UserMod to JSON.
     * @function toJSON
     * @memberof UserMod
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserMod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserMod;
})();

$root.BoardMod = (function() {

    /**
     * Properties of a BoardMod.
     * @exports IBoardMod
     * @interface IBoardMod
     * @property {string|null} [userId] BoardMod userId
     * @property {number|null} [createdAt] BoardMod createdAt
     */

    /**
     * Constructs a new BoardMod.
     * @exports BoardMod
     * @classdesc Represents a BoardMod.
     * @implements IBoardMod
     * @constructor
     * @param {IBoardMod=} [properties] Properties to set
     */
    function BoardMod(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BoardMod userId.
     * @member {string} userId
     * @memberof BoardMod
     * @instance
     */
    BoardMod.prototype.userId = "";

    /**
     * BoardMod createdAt.
     * @member {number} createdAt
     * @memberof BoardMod
     * @instance
     */
    BoardMod.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new BoardMod instance using the specified properties.
     * @function create
     * @memberof BoardMod
     * @static
     * @param {IBoardMod=} [properties] Properties to set
     * @returns {BoardMod} BoardMod instance
     */
    BoardMod.create = function create(properties) {
        return new BoardMod(properties);
    };

    /**
     * Encodes the specified BoardMod message. Does not implicitly {@link BoardMod.verify|verify} messages.
     * @function encode
     * @memberof BoardMod
     * @static
     * @param {IBoardMod} message BoardMod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BoardMod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.createdAt);
        return writer;
    };

    /**
     * Encodes the specified BoardMod message, length delimited. Does not implicitly {@link BoardMod.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BoardMod
     * @static
     * @param {IBoardMod} message BoardMod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BoardMod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BoardMod message from the specified reader or buffer.
     * @function decode
     * @memberof BoardMod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BoardMod} BoardMod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BoardMod.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BoardMod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.string();
                break;
            case 2:
                message.createdAt = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BoardMod message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BoardMod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BoardMod} BoardMod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BoardMod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BoardMod message.
     * @function verify
     * @memberof BoardMod
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BoardMod.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                return "createdAt: integer|Long expected";
        return null;
    };

    /**
     * Creates a BoardMod message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BoardMod
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BoardMod} BoardMod
     */
    BoardMod.fromObject = function fromObject(object) {
        if (object instanceof $root.BoardMod)
            return object;
        var message = new $root.BoardMod();
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.createdAt != null)
            if ($util.Long)
                (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
            else if (typeof object.createdAt === "string")
                message.createdAt = parseInt(object.createdAt, 10);
            else if (typeof object.createdAt === "number")
                message.createdAt = object.createdAt;
            else if (typeof object.createdAt === "object")
                message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a BoardMod message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BoardMod
     * @static
     * @param {BoardMod} message BoardMod
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BoardMod.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.userId = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdAt = options.longs === String ? "0" : 0;
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (typeof message.createdAt === "number")
                object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
            else
                object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
        return object;
    };

    /**
     * Converts this BoardMod to JSON.
     * @function toJSON
     * @memberof BoardMod
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BoardMod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BoardMod;
})();

$root.BoardCreate = (function() {

    /**
     * Properties of a BoardCreate.
     * @exports IBoardCreate
     * @interface IBoardCreate
     * @property {string|null} [name] BoardCreate name
     */

    /**
     * Constructs a new BoardCreate.
     * @exports BoardCreate
     * @classdesc Represents a BoardCreate.
     * @implements IBoardCreate
     * @constructor
     * @param {IBoardCreate=} [properties] Properties to set
     */
    function BoardCreate(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BoardCreate name.
     * @member {string} name
     * @memberof BoardCreate
     * @instance
     */
    BoardCreate.prototype.name = "";

    /**
     * Creates a new BoardCreate instance using the specified properties.
     * @function create
     * @memberof BoardCreate
     * @static
     * @param {IBoardCreate=} [properties] Properties to set
     * @returns {BoardCreate} BoardCreate instance
     */
    BoardCreate.create = function create(properties) {
        return new BoardCreate(properties);
    };

    /**
     * Encodes the specified BoardCreate message. Does not implicitly {@link BoardCreate.verify|verify} messages.
     * @function encode
     * @memberof BoardCreate
     * @static
     * @param {IBoardCreate} message BoardCreate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BoardCreate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        return writer;
    };

    /**
     * Encodes the specified BoardCreate message, length delimited. Does not implicitly {@link BoardCreate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BoardCreate
     * @static
     * @param {IBoardCreate} message BoardCreate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BoardCreate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BoardCreate message from the specified reader or buffer.
     * @function decode
     * @memberof BoardCreate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BoardCreate} BoardCreate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BoardCreate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BoardCreate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BoardCreate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BoardCreate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BoardCreate} BoardCreate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BoardCreate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BoardCreate message.
     * @function verify
     * @memberof BoardCreate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BoardCreate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        return null;
    };

    /**
     * Creates a BoardCreate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BoardCreate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BoardCreate} BoardCreate
     */
    BoardCreate.fromObject = function fromObject(object) {
        if (object instanceof $root.BoardCreate)
            return object;
        var message = new $root.BoardCreate();
        if (object.name != null)
            message.name = String(object.name);
        return message;
    };

    /**
     * Creates a plain object from a BoardCreate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BoardCreate
     * @static
     * @param {BoardCreate} message BoardCreate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BoardCreate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.name = "";
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        return object;
    };

    /**
     * Converts this BoardCreate to JSON.
     * @function toJSON
     * @memberof BoardCreate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BoardCreate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BoardCreate;
})();

$root.UserModerationAction = (function() {

    /**
     * Properties of a UserModerationAction.
     * @exports IUserModerationAction
     * @interface IUserModerationAction
     * @property {number|null} [endsAt] UserModerationAction endsAt
     */

    /**
     * Constructs a new UserModerationAction.
     * @exports UserModerationAction
     * @classdesc Represents a UserModerationAction.
     * @implements IUserModerationAction
     * @constructor
     * @param {IUserModerationAction=} [properties] Properties to set
     */
    function UserModerationAction(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserModerationAction endsAt.
     * @member {number} endsAt
     * @memberof UserModerationAction
     * @instance
     */
    UserModerationAction.prototype.endsAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new UserModerationAction instance using the specified properties.
     * @function create
     * @memberof UserModerationAction
     * @static
     * @param {IUserModerationAction=} [properties] Properties to set
     * @returns {UserModerationAction} UserModerationAction instance
     */
    UserModerationAction.create = function create(properties) {
        return new UserModerationAction(properties);
    };

    /**
     * Encodes the specified UserModerationAction message. Does not implicitly {@link UserModerationAction.verify|verify} messages.
     * @function encode
     * @memberof UserModerationAction
     * @static
     * @param {IUserModerationAction} message UserModerationAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserModerationAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.endsAt != null && Object.hasOwnProperty.call(message, "endsAt"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.endsAt);
        return writer;
    };

    /**
     * Encodes the specified UserModerationAction message, length delimited. Does not implicitly {@link UserModerationAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserModerationAction
     * @static
     * @param {IUserModerationAction} message UserModerationAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserModerationAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserModerationAction message from the specified reader or buffer.
     * @function decode
     * @memberof UserModerationAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserModerationAction} UserModerationAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserModerationAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserModerationAction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.endsAt = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserModerationAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserModerationAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserModerationAction} UserModerationAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserModerationAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserModerationAction message.
     * @function verify
     * @memberof UserModerationAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserModerationAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.endsAt != null && message.hasOwnProperty("endsAt"))
            if (!$util.isInteger(message.endsAt) && !(message.endsAt && $util.isInteger(message.endsAt.low) && $util.isInteger(message.endsAt.high)))
                return "endsAt: integer|Long expected";
        return null;
    };

    /**
     * Creates a UserModerationAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserModerationAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserModerationAction} UserModerationAction
     */
    UserModerationAction.fromObject = function fromObject(object) {
        if (object instanceof $root.UserModerationAction)
            return object;
        var message = new $root.UserModerationAction();
        if (object.endsAt != null)
            if ($util.Long)
                (message.endsAt = $util.Long.fromValue(object.endsAt)).unsigned = false;
            else if (typeof object.endsAt === "string")
                message.endsAt = parseInt(object.endsAt, 10);
            else if (typeof object.endsAt === "number")
                message.endsAt = object.endsAt;
            else if (typeof object.endsAt === "object")
                message.endsAt = new $util.LongBits(object.endsAt.low >>> 0, object.endsAt.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a UserModerationAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserModerationAction
     * @static
     * @param {UserModerationAction} message UserModerationAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserModerationAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.endsAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.endsAt = options.longs === String ? "0" : 0;
        if (message.endsAt != null && message.hasOwnProperty("endsAt"))
            if (typeof message.endsAt === "number")
                object.endsAt = options.longs === String ? String(message.endsAt) : message.endsAt;
            else
                object.endsAt = options.longs === String ? $util.Long.prototype.toString.call(message.endsAt) : options.longs === Number ? new $util.LongBits(message.endsAt.low >>> 0, message.endsAt.high >>> 0).toNumber() : message.endsAt;
        return object;
    };

    /**
     * Converts this UserModerationAction to JSON.
     * @function toJSON
     * @memberof UserModerationAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserModerationAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserModerationAction;
})();

$root.ModerationAction = (function() {

    /**
     * Properties of a ModerationAction.
     * @exports IModerationAction
     * @interface IModerationAction
     * @property {string|null} [action] ModerationAction action
     * @property {number|null} [category] ModerationAction category
     * @property {string|null} [reason] ModerationAction reason
     * @property {IUserModerationAction|null} [user] ModerationAction user
     * @property {number|null} [endsAt] ModerationAction endsAt
     */

    /**
     * Constructs a new ModerationAction.
     * @exports ModerationAction
     * @classdesc Represents a ModerationAction.
     * @implements IModerationAction
     * @constructor
     * @param {IModerationAction=} [properties] Properties to set
     */
    function ModerationAction(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ModerationAction action.
     * @member {string} action
     * @memberof ModerationAction
     * @instance
     */
    ModerationAction.prototype.action = "";

    /**
     * ModerationAction category.
     * @member {number} category
     * @memberof ModerationAction
     * @instance
     */
    ModerationAction.prototype.category = 0;

    /**
     * ModerationAction reason.
     * @member {string} reason
     * @memberof ModerationAction
     * @instance
     */
    ModerationAction.prototype.reason = "";

    /**
     * ModerationAction user.
     * @member {IUserModerationAction|null|undefined} user
     * @memberof ModerationAction
     * @instance
     */
    ModerationAction.prototype.user = null;

    /**
     * ModerationAction endsAt.
     * @member {number} endsAt
     * @memberof ModerationAction
     * @instance
     */
    ModerationAction.prototype.endsAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ModerationAction instance using the specified properties.
     * @function create
     * @memberof ModerationAction
     * @static
     * @param {IModerationAction=} [properties] Properties to set
     * @returns {ModerationAction} ModerationAction instance
     */
    ModerationAction.create = function create(properties) {
        return new ModerationAction(properties);
    };

    /**
     * Encodes the specified ModerationAction message. Does not implicitly {@link ModerationAction.verify|verify} messages.
     * @function encode
     * @memberof ModerationAction
     * @static
     * @param {IModerationAction} message ModerationAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ModerationAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.action);
        if (message.category != null && Object.hasOwnProperty.call(message, "category"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.category);
        if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.reason);
        if (message.user != null && Object.hasOwnProperty.call(message, "user"))
            $root.UserModerationAction.encode(message.user, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.endsAt != null && Object.hasOwnProperty.call(message, "endsAt"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.endsAt);
        return writer;
    };

    /**
     * Encodes the specified ModerationAction message, length delimited. Does not implicitly {@link ModerationAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ModerationAction
     * @static
     * @param {IModerationAction} message ModerationAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ModerationAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ModerationAction message from the specified reader or buffer.
     * @function decode
     * @memberof ModerationAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ModerationAction} ModerationAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ModerationAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ModerationAction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.action = reader.string();
                break;
            case 2:
                message.category = reader.int32();
                break;
            case 3:
                message.reason = reader.string();
                break;
            case 4:
                message.user = $root.UserModerationAction.decode(reader, reader.uint32());
                break;
            case 5:
                message.endsAt = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ModerationAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ModerationAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ModerationAction} ModerationAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ModerationAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ModerationAction message.
     * @function verify
     * @memberof ModerationAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ModerationAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.action != null && message.hasOwnProperty("action"))
            if (!$util.isString(message.action))
                return "action: string expected";
        if (message.category != null && message.hasOwnProperty("category"))
            if (!$util.isInteger(message.category))
                return "category: integer expected";
        if (message.reason != null && message.hasOwnProperty("reason"))
            if (!$util.isString(message.reason))
                return "reason: string expected";
        if (message.user != null && message.hasOwnProperty("user")) {
            var error = $root.UserModerationAction.verify(message.user);
            if (error)
                return "user." + error;
        }
        if (message.endsAt != null && message.hasOwnProperty("endsAt"))
            if (!$util.isInteger(message.endsAt) && !(message.endsAt && $util.isInteger(message.endsAt.low) && $util.isInteger(message.endsAt.high)))
                return "endsAt: integer|Long expected";
        return null;
    };

    /**
     * Creates a ModerationAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ModerationAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ModerationAction} ModerationAction
     */
    ModerationAction.fromObject = function fromObject(object) {
        if (object instanceof $root.ModerationAction)
            return object;
        var message = new $root.ModerationAction();
        if (object.action != null)
            message.action = String(object.action);
        if (object.category != null)
            message.category = object.category | 0;
        if (object.reason != null)
            message.reason = String(object.reason);
        if (object.user != null) {
            if (typeof object.user !== "object")
                throw TypeError(".ModerationAction.user: object expected");
            message.user = $root.UserModerationAction.fromObject(object.user);
        }
        if (object.endsAt != null)
            if ($util.Long)
                (message.endsAt = $util.Long.fromValue(object.endsAt)).unsigned = false;
            else if (typeof object.endsAt === "string")
                message.endsAt = parseInt(object.endsAt, 10);
            else if (typeof object.endsAt === "number")
                message.endsAt = object.endsAt;
            else if (typeof object.endsAt === "object")
                message.endsAt = new $util.LongBits(object.endsAt.low >>> 0, object.endsAt.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a ModerationAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ModerationAction
     * @static
     * @param {ModerationAction} message ModerationAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ModerationAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.action = "";
            object.category = 0;
            object.reason = "";
            object.user = null;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.endsAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.endsAt = options.longs === String ? "0" : 0;
        }
        if (message.action != null && message.hasOwnProperty("action"))
            object.action = message.action;
        if (message.category != null && message.hasOwnProperty("category"))
            object.category = message.category;
        if (message.reason != null && message.hasOwnProperty("reason"))
            object.reason = message.reason;
        if (message.user != null && message.hasOwnProperty("user"))
            object.user = $root.UserModerationAction.toObject(message.user, options);
        if (message.endsAt != null && message.hasOwnProperty("endsAt"))
            if (typeof message.endsAt === "number")
                object.endsAt = options.longs === String ? String(message.endsAt) : message.endsAt;
            else
                object.endsAt = options.longs === String ? $util.Long.prototype.toString.call(message.endsAt) : options.longs === Number ? new $util.LongBits(message.endsAt.low >>> 0, message.endsAt.high >>> 0).toNumber() : message.endsAt;
        return object;
    };

    /**
     * Converts this ModerationAction to JSON.
     * @function toJSON
     * @memberof ModerationAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ModerationAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ModerationAction;
})();

$root.ThreadModerationAction = (function() {

    /**
     * Properties of a ThreadModerationAction.
     * @exports IThreadModerationAction
     * @interface IThreadModerationAction
     * @property {IModerationAction|null} [action] ThreadModerationAction action
     * @property {string|null} [threadId] ThreadModerationAction threadId
     */

    /**
     * Constructs a new ThreadModerationAction.
     * @exports ThreadModerationAction
     * @classdesc Represents a ThreadModerationAction.
     * @implements IThreadModerationAction
     * @constructor
     * @param {IThreadModerationAction=} [properties] Properties to set
     */
    function ThreadModerationAction(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ThreadModerationAction action.
     * @member {IModerationAction|null|undefined} action
     * @memberof ThreadModerationAction
     * @instance
     */
    ThreadModerationAction.prototype.action = null;

    /**
     * ThreadModerationAction threadId.
     * @member {string} threadId
     * @memberof ThreadModerationAction
     * @instance
     */
    ThreadModerationAction.prototype.threadId = "";

    /**
     * Creates a new ThreadModerationAction instance using the specified properties.
     * @function create
     * @memberof ThreadModerationAction
     * @static
     * @param {IThreadModerationAction=} [properties] Properties to set
     * @returns {ThreadModerationAction} ThreadModerationAction instance
     */
    ThreadModerationAction.create = function create(properties) {
        return new ThreadModerationAction(properties);
    };

    /**
     * Encodes the specified ThreadModerationAction message. Does not implicitly {@link ThreadModerationAction.verify|verify} messages.
     * @function encode
     * @memberof ThreadModerationAction
     * @static
     * @param {IThreadModerationAction} message ThreadModerationAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThreadModerationAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
            $root.ModerationAction.encode(message.action, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.threadId != null && Object.hasOwnProperty.call(message, "threadId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.threadId);
        return writer;
    };

    /**
     * Encodes the specified ThreadModerationAction message, length delimited. Does not implicitly {@link ThreadModerationAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ThreadModerationAction
     * @static
     * @param {IThreadModerationAction} message ThreadModerationAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThreadModerationAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ThreadModerationAction message from the specified reader or buffer.
     * @function decode
     * @memberof ThreadModerationAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ThreadModerationAction} ThreadModerationAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThreadModerationAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ThreadModerationAction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.action = $root.ModerationAction.decode(reader, reader.uint32());
                break;
            case 2:
                message.threadId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ThreadModerationAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ThreadModerationAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ThreadModerationAction} ThreadModerationAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThreadModerationAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ThreadModerationAction message.
     * @function verify
     * @memberof ThreadModerationAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ThreadModerationAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.action != null && message.hasOwnProperty("action")) {
            var error = $root.ModerationAction.verify(message.action);
            if (error)
                return "action." + error;
        }
        if (message.threadId != null && message.hasOwnProperty("threadId"))
            if (!$util.isString(message.threadId))
                return "threadId: string expected";
        return null;
    };

    /**
     * Creates a ThreadModerationAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ThreadModerationAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ThreadModerationAction} ThreadModerationAction
     */
    ThreadModerationAction.fromObject = function fromObject(object) {
        if (object instanceof $root.ThreadModerationAction)
            return object;
        var message = new $root.ThreadModerationAction();
        if (object.action != null) {
            if (typeof object.action !== "object")
                throw TypeError(".ThreadModerationAction.action: object expected");
            message.action = $root.ModerationAction.fromObject(object.action);
        }
        if (object.threadId != null)
            message.threadId = String(object.threadId);
        return message;
    };

    /**
     * Creates a plain object from a ThreadModerationAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ThreadModerationAction
     * @static
     * @param {ThreadModerationAction} message ThreadModerationAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ThreadModerationAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.action = null;
            object.threadId = "";
        }
        if (message.action != null && message.hasOwnProperty("action"))
            object.action = $root.ModerationAction.toObject(message.action, options);
        if (message.threadId != null && message.hasOwnProperty("threadId"))
            object.threadId = message.threadId;
        return object;
    };

    /**
     * Converts this ThreadModerationAction to JSON.
     * @function toJSON
     * @memberof ThreadModerationAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ThreadModerationAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ThreadModerationAction;
})();

$root.CommentModerationAction = (function() {

    /**
     * Properties of a CommentModerationAction.
     * @exports ICommentModerationAction
     * @interface ICommentModerationAction
     * @property {IModerationAction|null} [action] CommentModerationAction action
     * @property {string|null} [commentId] CommentModerationAction commentId
     */

    /**
     * Constructs a new CommentModerationAction.
     * @exports CommentModerationAction
     * @classdesc Represents a CommentModerationAction.
     * @implements ICommentModerationAction
     * @constructor
     * @param {ICommentModerationAction=} [properties] Properties to set
     */
    function CommentModerationAction(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CommentModerationAction action.
     * @member {IModerationAction|null|undefined} action
     * @memberof CommentModerationAction
     * @instance
     */
    CommentModerationAction.prototype.action = null;

    /**
     * CommentModerationAction commentId.
     * @member {string} commentId
     * @memberof CommentModerationAction
     * @instance
     */
    CommentModerationAction.prototype.commentId = "";

    /**
     * Creates a new CommentModerationAction instance using the specified properties.
     * @function create
     * @memberof CommentModerationAction
     * @static
     * @param {ICommentModerationAction=} [properties] Properties to set
     * @returns {CommentModerationAction} CommentModerationAction instance
     */
    CommentModerationAction.create = function create(properties) {
        return new CommentModerationAction(properties);
    };

    /**
     * Encodes the specified CommentModerationAction message. Does not implicitly {@link CommentModerationAction.verify|verify} messages.
     * @function encode
     * @memberof CommentModerationAction
     * @static
     * @param {ICommentModerationAction} message CommentModerationAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentModerationAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
            $root.ModerationAction.encode(message.action, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.commentId != null && Object.hasOwnProperty.call(message, "commentId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.commentId);
        return writer;
    };

    /**
     * Encodes the specified CommentModerationAction message, length delimited. Does not implicitly {@link CommentModerationAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CommentModerationAction
     * @static
     * @param {ICommentModerationAction} message CommentModerationAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentModerationAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CommentModerationAction message from the specified reader or buffer.
     * @function decode
     * @memberof CommentModerationAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommentModerationAction} CommentModerationAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentModerationAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommentModerationAction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.action = $root.ModerationAction.decode(reader, reader.uint32());
                break;
            case 2:
                message.commentId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CommentModerationAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CommentModerationAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommentModerationAction} CommentModerationAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentModerationAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CommentModerationAction message.
     * @function verify
     * @memberof CommentModerationAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CommentModerationAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.action != null && message.hasOwnProperty("action")) {
            var error = $root.ModerationAction.verify(message.action);
            if (error)
                return "action." + error;
        }
        if (message.commentId != null && message.hasOwnProperty("commentId"))
            if (!$util.isString(message.commentId))
                return "commentId: string expected";
        return null;
    };

    /**
     * Creates a CommentModerationAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CommentModerationAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CommentModerationAction} CommentModerationAction
     */
    CommentModerationAction.fromObject = function fromObject(object) {
        if (object instanceof $root.CommentModerationAction)
            return object;
        var message = new $root.CommentModerationAction();
        if (object.action != null) {
            if (typeof object.action !== "object")
                throw TypeError(".CommentModerationAction.action: object expected");
            message.action = $root.ModerationAction.fromObject(object.action);
        }
        if (object.commentId != null)
            message.commentId = String(object.commentId);
        return message;
    };

    /**
     * Creates a plain object from a CommentModerationAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CommentModerationAction
     * @static
     * @param {CommentModerationAction} message CommentModerationAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CommentModerationAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.action = null;
            object.commentId = "";
        }
        if (message.action != null && message.hasOwnProperty("action"))
            object.action = $root.ModerationAction.toObject(message.action, options);
        if (message.commentId != null && message.hasOwnProperty("commentId"))
            object.commentId = message.commentId;
        return object;
    };

    /**
     * Converts this CommentModerationAction to JSON.
     * @function toJSON
     * @memberof CommentModerationAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommentModerationAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CommentModerationAction;
})();

$root.BoardModerationAction = (function() {

    /**
     * Properties of a BoardModerationAction.
     * @exports IBoardModerationAction
     * @interface IBoardModerationAction
     * @property {IModerationAction|null} [action] BoardModerationAction action
     * @property {string|null} [boardId] BoardModerationAction boardId
     */

    /**
     * Constructs a new BoardModerationAction.
     * @exports BoardModerationAction
     * @classdesc Represents a BoardModerationAction.
     * @implements IBoardModerationAction
     * @constructor
     * @param {IBoardModerationAction=} [properties] Properties to set
     */
    function BoardModerationAction(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BoardModerationAction action.
     * @member {IModerationAction|null|undefined} action
     * @memberof BoardModerationAction
     * @instance
     */
    BoardModerationAction.prototype.action = null;

    /**
     * BoardModerationAction boardId.
     * @member {string} boardId
     * @memberof BoardModerationAction
     * @instance
     */
    BoardModerationAction.prototype.boardId = "";

    /**
     * Creates a new BoardModerationAction instance using the specified properties.
     * @function create
     * @memberof BoardModerationAction
     * @static
     * @param {IBoardModerationAction=} [properties] Properties to set
     * @returns {BoardModerationAction} BoardModerationAction instance
     */
    BoardModerationAction.create = function create(properties) {
        return new BoardModerationAction(properties);
    };

    /**
     * Encodes the specified BoardModerationAction message. Does not implicitly {@link BoardModerationAction.verify|verify} messages.
     * @function encode
     * @memberof BoardModerationAction
     * @static
     * @param {IBoardModerationAction} message BoardModerationAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BoardModerationAction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
            $root.ModerationAction.encode(message.action, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.boardId != null && Object.hasOwnProperty.call(message, "boardId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.boardId);
        return writer;
    };

    /**
     * Encodes the specified BoardModerationAction message, length delimited. Does not implicitly {@link BoardModerationAction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BoardModerationAction
     * @static
     * @param {IBoardModerationAction} message BoardModerationAction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BoardModerationAction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BoardModerationAction message from the specified reader or buffer.
     * @function decode
     * @memberof BoardModerationAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BoardModerationAction} BoardModerationAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BoardModerationAction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BoardModerationAction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.action = $root.ModerationAction.decode(reader, reader.uint32());
                break;
            case 2:
                message.boardId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BoardModerationAction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BoardModerationAction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BoardModerationAction} BoardModerationAction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BoardModerationAction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BoardModerationAction message.
     * @function verify
     * @memberof BoardModerationAction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BoardModerationAction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.action != null && message.hasOwnProperty("action")) {
            var error = $root.ModerationAction.verify(message.action);
            if (error)
                return "action." + error;
        }
        if (message.boardId != null && message.hasOwnProperty("boardId"))
            if (!$util.isString(message.boardId))
                return "boardId: string expected";
        return null;
    };

    /**
     * Creates a BoardModerationAction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BoardModerationAction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BoardModerationAction} BoardModerationAction
     */
    BoardModerationAction.fromObject = function fromObject(object) {
        if (object instanceof $root.BoardModerationAction)
            return object;
        var message = new $root.BoardModerationAction();
        if (object.action != null) {
            if (typeof object.action !== "object")
                throw TypeError(".BoardModerationAction.action: object expected");
            message.action = $root.ModerationAction.fromObject(object.action);
        }
        if (object.boardId != null)
            message.boardId = String(object.boardId);
        return message;
    };

    /**
     * Creates a plain object from a BoardModerationAction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BoardModerationAction
     * @static
     * @param {BoardModerationAction} message BoardModerationAction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BoardModerationAction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.action = null;
            object.boardId = "";
        }
        if (message.action != null && message.hasOwnProperty("action"))
            object.action = $root.ModerationAction.toObject(message.action, options);
        if (message.boardId != null && message.hasOwnProperty("boardId"))
            object.boardId = message.boardId;
        return object;
    };

    /**
     * Converts this BoardModerationAction to JSON.
     * @function toJSON
     * @memberof BoardModerationAction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BoardModerationAction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BoardModerationAction;
})();

$root.UserInBoardContext = (function() {

    /**
     * Properties of a UserInBoardContext.
     * @exports IUserInBoardContext
     * @interface IUserInBoardContext
     * @property {ICommunityUserRef|null} [user] UserInBoardContext user
     * @property {number|null} [communityOpinion] UserInBoardContext communityOpinion
     * @property {number|null} [theirUpvotes] UserInBoardContext theirUpvotes
     * @property {number|null} [theirDownvotes] UserInBoardContext theirDownvotes
     */

    /**
     * Constructs a new UserInBoardContext.
     * @exports UserInBoardContext
     * @classdesc Represents a UserInBoardContext.
     * @implements IUserInBoardContext
     * @constructor
     * @param {IUserInBoardContext=} [properties] Properties to set
     */
    function UserInBoardContext(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserInBoardContext user.
     * @member {ICommunityUserRef|null|undefined} user
     * @memberof UserInBoardContext
     * @instance
     */
    UserInBoardContext.prototype.user = null;

    /**
     * UserInBoardContext communityOpinion.
     * @member {number} communityOpinion
     * @memberof UserInBoardContext
     * @instance
     */
    UserInBoardContext.prototype.communityOpinion = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * UserInBoardContext theirUpvotes.
     * @member {number} theirUpvotes
     * @memberof UserInBoardContext
     * @instance
     */
    UserInBoardContext.prototype.theirUpvotes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * UserInBoardContext theirDownvotes.
     * @member {number} theirDownvotes
     * @memberof UserInBoardContext
     * @instance
     */
    UserInBoardContext.prototype.theirDownvotes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new UserInBoardContext instance using the specified properties.
     * @function create
     * @memberof UserInBoardContext
     * @static
     * @param {IUserInBoardContext=} [properties] Properties to set
     * @returns {UserInBoardContext} UserInBoardContext instance
     */
    UserInBoardContext.create = function create(properties) {
        return new UserInBoardContext(properties);
    };

    /**
     * Encodes the specified UserInBoardContext message. Does not implicitly {@link UserInBoardContext.verify|verify} messages.
     * @function encode
     * @memberof UserInBoardContext
     * @static
     * @param {IUserInBoardContext} message UserInBoardContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserInBoardContext.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.user != null && Object.hasOwnProperty.call(message, "user"))
            $root.CommunityUserRef.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.communityOpinion != null && Object.hasOwnProperty.call(message, "communityOpinion"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.communityOpinion);
        if (message.theirUpvotes != null && Object.hasOwnProperty.call(message, "theirUpvotes"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.theirUpvotes);
        if (message.theirDownvotes != null && Object.hasOwnProperty.call(message, "theirDownvotes"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.theirDownvotes);
        return writer;
    };

    /**
     * Encodes the specified UserInBoardContext message, length delimited. Does not implicitly {@link UserInBoardContext.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserInBoardContext
     * @static
     * @param {IUserInBoardContext} message UserInBoardContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserInBoardContext.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserInBoardContext message from the specified reader or buffer.
     * @function decode
     * @memberof UserInBoardContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserInBoardContext} UserInBoardContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserInBoardContext.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserInBoardContext();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.user = $root.CommunityUserRef.decode(reader, reader.uint32());
                break;
            case 2:
                message.communityOpinion = reader.int64();
                break;
            case 3:
                message.theirUpvotes = reader.int64();
                break;
            case 4:
                message.theirDownvotes = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserInBoardContext message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserInBoardContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserInBoardContext} UserInBoardContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserInBoardContext.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserInBoardContext message.
     * @function verify
     * @memberof UserInBoardContext
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserInBoardContext.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.user != null && message.hasOwnProperty("user")) {
            var error = $root.CommunityUserRef.verify(message.user);
            if (error)
                return "user." + error;
        }
        if (message.communityOpinion != null && message.hasOwnProperty("communityOpinion"))
            if (!$util.isInteger(message.communityOpinion) && !(message.communityOpinion && $util.isInteger(message.communityOpinion.low) && $util.isInteger(message.communityOpinion.high)))
                return "communityOpinion: integer|Long expected";
        if (message.theirUpvotes != null && message.hasOwnProperty("theirUpvotes"))
            if (!$util.isInteger(message.theirUpvotes) && !(message.theirUpvotes && $util.isInteger(message.theirUpvotes.low) && $util.isInteger(message.theirUpvotes.high)))
                return "theirUpvotes: integer|Long expected";
        if (message.theirDownvotes != null && message.hasOwnProperty("theirDownvotes"))
            if (!$util.isInteger(message.theirDownvotes) && !(message.theirDownvotes && $util.isInteger(message.theirDownvotes.low) && $util.isInteger(message.theirDownvotes.high)))
                return "theirDownvotes: integer|Long expected";
        return null;
    };

    /**
     * Creates a UserInBoardContext message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserInBoardContext
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserInBoardContext} UserInBoardContext
     */
    UserInBoardContext.fromObject = function fromObject(object) {
        if (object instanceof $root.UserInBoardContext)
            return object;
        var message = new $root.UserInBoardContext();
        if (object.user != null) {
            if (typeof object.user !== "object")
                throw TypeError(".UserInBoardContext.user: object expected");
            message.user = $root.CommunityUserRef.fromObject(object.user);
        }
        if (object.communityOpinion != null)
            if ($util.Long)
                (message.communityOpinion = $util.Long.fromValue(object.communityOpinion)).unsigned = false;
            else if (typeof object.communityOpinion === "string")
                message.communityOpinion = parseInt(object.communityOpinion, 10);
            else if (typeof object.communityOpinion === "number")
                message.communityOpinion = object.communityOpinion;
            else if (typeof object.communityOpinion === "object")
                message.communityOpinion = new $util.LongBits(object.communityOpinion.low >>> 0, object.communityOpinion.high >>> 0).toNumber();
        if (object.theirUpvotes != null)
            if ($util.Long)
                (message.theirUpvotes = $util.Long.fromValue(object.theirUpvotes)).unsigned = false;
            else if (typeof object.theirUpvotes === "string")
                message.theirUpvotes = parseInt(object.theirUpvotes, 10);
            else if (typeof object.theirUpvotes === "number")
                message.theirUpvotes = object.theirUpvotes;
            else if (typeof object.theirUpvotes === "object")
                message.theirUpvotes = new $util.LongBits(object.theirUpvotes.low >>> 0, object.theirUpvotes.high >>> 0).toNumber();
        if (object.theirDownvotes != null)
            if ($util.Long)
                (message.theirDownvotes = $util.Long.fromValue(object.theirDownvotes)).unsigned = false;
            else if (typeof object.theirDownvotes === "string")
                message.theirDownvotes = parseInt(object.theirDownvotes, 10);
            else if (typeof object.theirDownvotes === "number")
                message.theirDownvotes = object.theirDownvotes;
            else if (typeof object.theirDownvotes === "object")
                message.theirDownvotes = new $util.LongBits(object.theirDownvotes.low >>> 0, object.theirDownvotes.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a UserInBoardContext message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserInBoardContext
     * @static
     * @param {UserInBoardContext} message UserInBoardContext
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserInBoardContext.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.user = null;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.communityOpinion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.communityOpinion = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.theirUpvotes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.theirUpvotes = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.theirDownvotes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.theirDownvotes = options.longs === String ? "0" : 0;
        }
        if (message.user != null && message.hasOwnProperty("user"))
            object.user = $root.CommunityUserRef.toObject(message.user, options);
        if (message.communityOpinion != null && message.hasOwnProperty("communityOpinion"))
            if (typeof message.communityOpinion === "number")
                object.communityOpinion = options.longs === String ? String(message.communityOpinion) : message.communityOpinion;
            else
                object.communityOpinion = options.longs === String ? $util.Long.prototype.toString.call(message.communityOpinion) : options.longs === Number ? new $util.LongBits(message.communityOpinion.low >>> 0, message.communityOpinion.high >>> 0).toNumber() : message.communityOpinion;
        if (message.theirUpvotes != null && message.hasOwnProperty("theirUpvotes"))
            if (typeof message.theirUpvotes === "number")
                object.theirUpvotes = options.longs === String ? String(message.theirUpvotes) : message.theirUpvotes;
            else
                object.theirUpvotes = options.longs === String ? $util.Long.prototype.toString.call(message.theirUpvotes) : options.longs === Number ? new $util.LongBits(message.theirUpvotes.low >>> 0, message.theirUpvotes.high >>> 0).toNumber() : message.theirUpvotes;
        if (message.theirDownvotes != null && message.hasOwnProperty("theirDownvotes"))
            if (typeof message.theirDownvotes === "number")
                object.theirDownvotes = options.longs === String ? String(message.theirDownvotes) : message.theirDownvotes;
            else
                object.theirDownvotes = options.longs === String ? $util.Long.prototype.toString.call(message.theirDownvotes) : options.longs === Number ? new $util.LongBits(message.theirDownvotes.low >>> 0, message.theirDownvotes.high >>> 0).toNumber() : message.theirDownvotes;
        return object;
    };

    /**
     * Converts this UserInBoardContext to JSON.
     * @function toJSON
     * @memberof UserInBoardContext
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserInBoardContext.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserInBoardContext;
})();

$root.Image = (function() {

    /**
     * Properties of an Image.
     * @exports IImage
     * @interface IImage
     * @property {string|null} [userId] Image userId
     * @property {string|null} [uId] Image uId
     * @property {string|null} [format] Image format
     * @property {number|null} [height] Image height
     * @property {number|null} [width] Image width
     * @property {number|null} [size] Image size
     * @property {number|null} [length] Image length
     * @property {number|null} [createdAt] Image createdAt
     */

    /**
     * Constructs a new Image.
     * @exports Image
     * @classdesc Represents an Image.
     * @implements IImage
     * @constructor
     * @param {IImage=} [properties] Properties to set
     */
    function Image(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Image userId.
     * @member {string} userId
     * @memberof Image
     * @instance
     */
    Image.prototype.userId = "";

    /**
     * Image uId.
     * @member {string} uId
     * @memberof Image
     * @instance
     */
    Image.prototype.uId = "";

    /**
     * Image format.
     * @member {string} format
     * @memberof Image
     * @instance
     */
    Image.prototype.format = "";

    /**
     * Image height.
     * @member {number} height
     * @memberof Image
     * @instance
     */
    Image.prototype.height = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Image width.
     * @member {number} width
     * @memberof Image
     * @instance
     */
    Image.prototype.width = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Image size.
     * @member {number} size
     * @memberof Image
     * @instance
     */
    Image.prototype.size = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Image length.
     * @member {number} length
     * @memberof Image
     * @instance
     */
    Image.prototype.length = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Image createdAt.
     * @member {number} createdAt
     * @memberof Image
     * @instance
     */
    Image.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new Image instance using the specified properties.
     * @function create
     * @memberof Image
     * @static
     * @param {IImage=} [properties] Properties to set
     * @returns {Image} Image instance
     */
    Image.create = function create(properties) {
        return new Image(properties);
    };

    /**
     * Encodes the specified Image message. Does not implicitly {@link Image.verify|verify} messages.
     * @function encode
     * @memberof Image
     * @static
     * @param {IImage} message Image message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Image.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
        if (message.uId != null && Object.hasOwnProperty.call(message, "uId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.uId);
        if (message.format != null && Object.hasOwnProperty.call(message, "format"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.format);
        if (message.height != null && Object.hasOwnProperty.call(message, "height"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.height);
        if (message.width != null && Object.hasOwnProperty.call(message, "width"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.width);
        if (message.size != null && Object.hasOwnProperty.call(message, "size"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.size);
        if (message.length != null && Object.hasOwnProperty.call(message, "length"))
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.length);
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.createdAt);
        return writer;
    };

    /**
     * Encodes the specified Image message, length delimited. Does not implicitly {@link Image.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Image
     * @static
     * @param {IImage} message Image message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Image.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Image message from the specified reader or buffer.
     * @function decode
     * @memberof Image
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Image} Image
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Image.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Image();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.string();
                break;
            case 2:
                message.uId = reader.string();
                break;
            case 3:
                message.format = reader.string();
                break;
            case 4:
                message.height = reader.int64();
                break;
            case 5:
                message.width = reader.int64();
                break;
            case 6:
                message.size = reader.int64();
                break;
            case 7:
                message.length = reader.int64();
                break;
            case 8:
                message.createdAt = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Image message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Image
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Image} Image
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Image.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Image message.
     * @function verify
     * @memberof Image
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Image.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        if (message.uId != null && message.hasOwnProperty("uId"))
            if (!$util.isString(message.uId))
                return "uId: string expected";
        if (message.format != null && message.hasOwnProperty("format"))
            if (!$util.isString(message.format))
                return "format: string expected";
        if (message.height != null && message.hasOwnProperty("height"))
            if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                return "height: integer|Long expected";
        if (message.width != null && message.hasOwnProperty("width"))
            if (!$util.isInteger(message.width) && !(message.width && $util.isInteger(message.width.low) && $util.isInteger(message.width.high)))
                return "width: integer|Long expected";
        if (message.size != null && message.hasOwnProperty("size"))
            if (!$util.isInteger(message.size) && !(message.size && $util.isInteger(message.size.low) && $util.isInteger(message.size.high)))
                return "size: integer|Long expected";
        if (message.length != null && message.hasOwnProperty("length"))
            if (!$util.isInteger(message.length) && !(message.length && $util.isInteger(message.length.low) && $util.isInteger(message.length.high)))
                return "length: integer|Long expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                return "createdAt: integer|Long expected";
        return null;
    };

    /**
     * Creates an Image message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Image
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Image} Image
     */
    Image.fromObject = function fromObject(object) {
        if (object instanceof $root.Image)
            return object;
        var message = new $root.Image();
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.uId != null)
            message.uId = String(object.uId);
        if (object.format != null)
            message.format = String(object.format);
        if (object.height != null)
            if ($util.Long)
                (message.height = $util.Long.fromValue(object.height)).unsigned = false;
            else if (typeof object.height === "string")
                message.height = parseInt(object.height, 10);
            else if (typeof object.height === "number")
                message.height = object.height;
            else if (typeof object.height === "object")
                message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber();
        if (object.width != null)
            if ($util.Long)
                (message.width = $util.Long.fromValue(object.width)).unsigned = false;
            else if (typeof object.width === "string")
                message.width = parseInt(object.width, 10);
            else if (typeof object.width === "number")
                message.width = object.width;
            else if (typeof object.width === "object")
                message.width = new $util.LongBits(object.width.low >>> 0, object.width.high >>> 0).toNumber();
        if (object.size != null)
            if ($util.Long)
                (message.size = $util.Long.fromValue(object.size)).unsigned = false;
            else if (typeof object.size === "string")
                message.size = parseInt(object.size, 10);
            else if (typeof object.size === "number")
                message.size = object.size;
            else if (typeof object.size === "object")
                message.size = new $util.LongBits(object.size.low >>> 0, object.size.high >>> 0).toNumber();
        if (object.length != null)
            if ($util.Long)
                (message.length = $util.Long.fromValue(object.length)).unsigned = false;
            else if (typeof object.length === "string")
                message.length = parseInt(object.length, 10);
            else if (typeof object.length === "number")
                message.length = object.length;
            else if (typeof object.length === "object")
                message.length = new $util.LongBits(object.length.low >>> 0, object.length.high >>> 0).toNumber();
        if (object.createdAt != null)
            if ($util.Long)
                (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
            else if (typeof object.createdAt === "string")
                message.createdAt = parseInt(object.createdAt, 10);
            else if (typeof object.createdAt === "number")
                message.createdAt = object.createdAt;
            else if (typeof object.createdAt === "object")
                message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from an Image message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Image
     * @static
     * @param {Image} message Image
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Image.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.userId = "";
            object.uId = "";
            object.format = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.height = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.width = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.width = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.size = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.length = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.length = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdAt = options.longs === String ? "0" : 0;
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.uId != null && message.hasOwnProperty("uId"))
            object.uId = message.uId;
        if (message.format != null && message.hasOwnProperty("format"))
            object.format = message.format;
        if (message.height != null && message.hasOwnProperty("height"))
            if (typeof message.height === "number")
                object.height = options.longs === String ? String(message.height) : message.height;
            else
                object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber() : message.height;
        if (message.width != null && message.hasOwnProperty("width"))
            if (typeof message.width === "number")
                object.width = options.longs === String ? String(message.width) : message.width;
            else
                object.width = options.longs === String ? $util.Long.prototype.toString.call(message.width) : options.longs === Number ? new $util.LongBits(message.width.low >>> 0, message.width.high >>> 0).toNumber() : message.width;
        if (message.size != null && message.hasOwnProperty("size"))
            if (typeof message.size === "number")
                object.size = options.longs === String ? String(message.size) : message.size;
            else
                object.size = options.longs === String ? $util.Long.prototype.toString.call(message.size) : options.longs === Number ? new $util.LongBits(message.size.low >>> 0, message.size.high >>> 0).toNumber() : message.size;
        if (message.length != null && message.hasOwnProperty("length"))
            if (typeof message.length === "number")
                object.length = options.longs === String ? String(message.length) : message.length;
            else
                object.length = options.longs === String ? $util.Long.prototype.toString.call(message.length) : options.longs === Number ? new $util.LongBits(message.length.low >>> 0, message.length.high >>> 0).toNumber() : message.length;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (typeof message.createdAt === "number")
                object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
            else
                object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
        return object;
    };

    /**
     * Converts this Image to JSON.
     * @function toJSON
     * @memberof Image
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Image.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Image;
})();

$root.ImageModifyRequest = (function() {

    /**
     * Properties of an ImageModifyRequest.
     * @exports IImageModifyRequest
     * @interface IImageModifyRequest
     * @property {string|null} [item] ImageModifyRequest item
     * @property {string|null} [action] ImageModifyRequest action
     * @property {string|null} [file] ImageModifyRequest file
     */

    /**
     * Constructs a new ImageModifyRequest.
     * @exports ImageModifyRequest
     * @classdesc Represents an ImageModifyRequest.
     * @implements IImageModifyRequest
     * @constructor
     * @param {IImageModifyRequest=} [properties] Properties to set
     */
    function ImageModifyRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ImageModifyRequest item.
     * @member {string} item
     * @memberof ImageModifyRequest
     * @instance
     */
    ImageModifyRequest.prototype.item = "";

    /**
     * ImageModifyRequest action.
     * @member {string} action
     * @memberof ImageModifyRequest
     * @instance
     */
    ImageModifyRequest.prototype.action = "";

    /**
     * ImageModifyRequest file.
     * @member {string} file
     * @memberof ImageModifyRequest
     * @instance
     */
    ImageModifyRequest.prototype.file = "";

    /**
     * Creates a new ImageModifyRequest instance using the specified properties.
     * @function create
     * @memberof ImageModifyRequest
     * @static
     * @param {IImageModifyRequest=} [properties] Properties to set
     * @returns {ImageModifyRequest} ImageModifyRequest instance
     */
    ImageModifyRequest.create = function create(properties) {
        return new ImageModifyRequest(properties);
    };

    /**
     * Encodes the specified ImageModifyRequest message. Does not implicitly {@link ImageModifyRequest.verify|verify} messages.
     * @function encode
     * @memberof ImageModifyRequest
     * @static
     * @param {IImageModifyRequest} message ImageModifyRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ImageModifyRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.item != null && Object.hasOwnProperty.call(message, "item"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.item);
        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.action);
        if (message.file != null && Object.hasOwnProperty.call(message, "file"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.file);
        return writer;
    };

    /**
     * Encodes the specified ImageModifyRequest message, length delimited. Does not implicitly {@link ImageModifyRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ImageModifyRequest
     * @static
     * @param {IImageModifyRequest} message ImageModifyRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ImageModifyRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ImageModifyRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ImageModifyRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ImageModifyRequest} ImageModifyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ImageModifyRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ImageModifyRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.item = reader.string();
                break;
            case 2:
                message.action = reader.string();
                break;
            case 3:
                message.file = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ImageModifyRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ImageModifyRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ImageModifyRequest} ImageModifyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ImageModifyRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ImageModifyRequest message.
     * @function verify
     * @memberof ImageModifyRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ImageModifyRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.item != null && message.hasOwnProperty("item"))
            if (!$util.isString(message.item))
                return "item: string expected";
        if (message.action != null && message.hasOwnProperty("action"))
            if (!$util.isString(message.action))
                return "action: string expected";
        if (message.file != null && message.hasOwnProperty("file"))
            if (!$util.isString(message.file))
                return "file: string expected";
        return null;
    };

    /**
     * Creates an ImageModifyRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ImageModifyRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ImageModifyRequest} ImageModifyRequest
     */
    ImageModifyRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ImageModifyRequest)
            return object;
        var message = new $root.ImageModifyRequest();
        if (object.item != null)
            message.item = String(object.item);
        if (object.action != null)
            message.action = String(object.action);
        if (object.file != null)
            message.file = String(object.file);
        return message;
    };

    /**
     * Creates a plain object from an ImageModifyRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ImageModifyRequest
     * @static
     * @param {ImageModifyRequest} message ImageModifyRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ImageModifyRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.item = "";
            object.action = "";
            object.file = "";
        }
        if (message.item != null && message.hasOwnProperty("item"))
            object.item = message.item;
        if (message.action != null && message.hasOwnProperty("action"))
            object.action = message.action;
        if (message.file != null && message.hasOwnProperty("file"))
            object.file = message.file;
        return object;
    };

    /**
     * Converts this ImageModifyRequest to JSON.
     * @function toJSON
     * @memberof ImageModifyRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ImageModifyRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ImageModifyRequest;
})();

$root.DraftJsBlock = (function() {

    /**
     * Properties of a DraftJsBlock.
     * @exports IDraftJsBlock
     * @interface IDraftJsBlock
     * @property {string|null} [key] DraftJsBlock key
     * @property {string|null} [text] DraftJsBlock text
     * @property {string|null} [type] DraftJsBlock type
     * @property {number|null} [depth] DraftJsBlock depth
     * @property {Array.<number>|null} [inlineStyleRanges] DraftJsBlock inlineStyleRanges
     * @property {Array.<string>|null} [entityRanges] DraftJsBlock entityRanges
     */

    /**
     * Constructs a new DraftJsBlock.
     * @exports DraftJsBlock
     * @classdesc Represents a DraftJsBlock.
     * @implements IDraftJsBlock
     * @constructor
     * @param {IDraftJsBlock=} [properties] Properties to set
     */
    function DraftJsBlock(properties) {
        this.inlineStyleRanges = [];
        this.entityRanges = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DraftJsBlock key.
     * @member {string} key
     * @memberof DraftJsBlock
     * @instance
     */
    DraftJsBlock.prototype.key = "";

    /**
     * DraftJsBlock text.
     * @member {string} text
     * @memberof DraftJsBlock
     * @instance
     */
    DraftJsBlock.prototype.text = "";

    /**
     * DraftJsBlock type.
     * @member {string} type
     * @memberof DraftJsBlock
     * @instance
     */
    DraftJsBlock.prototype.type = "";

    /**
     * DraftJsBlock depth.
     * @member {number} depth
     * @memberof DraftJsBlock
     * @instance
     */
    DraftJsBlock.prototype.depth = 0;

    /**
     * DraftJsBlock inlineStyleRanges.
     * @member {Array.<number>} inlineStyleRanges
     * @memberof DraftJsBlock
     * @instance
     */
    DraftJsBlock.prototype.inlineStyleRanges = $util.emptyArray;

    /**
     * DraftJsBlock entityRanges.
     * @member {Array.<string>} entityRanges
     * @memberof DraftJsBlock
     * @instance
     */
    DraftJsBlock.prototype.entityRanges = $util.emptyArray;

    /**
     * Creates a new DraftJsBlock instance using the specified properties.
     * @function create
     * @memberof DraftJsBlock
     * @static
     * @param {IDraftJsBlock=} [properties] Properties to set
     * @returns {DraftJsBlock} DraftJsBlock instance
     */
    DraftJsBlock.create = function create(properties) {
        return new DraftJsBlock(properties);
    };

    /**
     * Encodes the specified DraftJsBlock message. Does not implicitly {@link DraftJsBlock.verify|verify} messages.
     * @function encode
     * @memberof DraftJsBlock
     * @static
     * @param {IDraftJsBlock} message DraftJsBlock message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DraftJsBlock.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
        if (message.text != null && Object.hasOwnProperty.call(message, "text"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.type);
        if (message.depth != null && Object.hasOwnProperty.call(message, "depth"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.depth);
        if (message.inlineStyleRanges != null && message.inlineStyleRanges.length) {
            writer.uint32(/* id 5, wireType 2 =*/42).fork();
            for (var i = 0; i < message.inlineStyleRanges.length; ++i)
                writer.int32(message.inlineStyleRanges[i]);
            writer.ldelim();
        }
        if (message.entityRanges != null && message.entityRanges.length)
            for (var i = 0; i < message.entityRanges.length; ++i)
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.entityRanges[i]);
        return writer;
    };

    /**
     * Encodes the specified DraftJsBlock message, length delimited. Does not implicitly {@link DraftJsBlock.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DraftJsBlock
     * @static
     * @param {IDraftJsBlock} message DraftJsBlock message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DraftJsBlock.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DraftJsBlock message from the specified reader or buffer.
     * @function decode
     * @memberof DraftJsBlock
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DraftJsBlock} DraftJsBlock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DraftJsBlock.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DraftJsBlock();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.key = reader.string();
                break;
            case 2:
                message.text = reader.string();
                break;
            case 3:
                message.type = reader.string();
                break;
            case 4:
                message.depth = reader.int32();
                break;
            case 5:
                if (!(message.inlineStyleRanges && message.inlineStyleRanges.length))
                    message.inlineStyleRanges = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.inlineStyleRanges.push(reader.int32());
                } else
                    message.inlineStyleRanges.push(reader.int32());
                break;
            case 6:
                if (!(message.entityRanges && message.entityRanges.length))
                    message.entityRanges = [];
                message.entityRanges.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DraftJsBlock message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DraftJsBlock
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DraftJsBlock} DraftJsBlock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DraftJsBlock.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DraftJsBlock message.
     * @function verify
     * @memberof DraftJsBlock
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DraftJsBlock.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isString(message.key))
                return "key: string expected";
        if (message.text != null && message.hasOwnProperty("text"))
            if (!$util.isString(message.text))
                return "text: string expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.depth != null && message.hasOwnProperty("depth"))
            if (!$util.isInteger(message.depth))
                return "depth: integer expected";
        if (message.inlineStyleRanges != null && message.hasOwnProperty("inlineStyleRanges")) {
            if (!Array.isArray(message.inlineStyleRanges))
                return "inlineStyleRanges: array expected";
            for (var i = 0; i < message.inlineStyleRanges.length; ++i)
                if (!$util.isInteger(message.inlineStyleRanges[i]))
                    return "inlineStyleRanges: integer[] expected";
        }
        if (message.entityRanges != null && message.hasOwnProperty("entityRanges")) {
            if (!Array.isArray(message.entityRanges))
                return "entityRanges: array expected";
            for (var i = 0; i < message.entityRanges.length; ++i)
                if (!$util.isString(message.entityRanges[i]))
                    return "entityRanges: string[] expected";
        }
        return null;
    };

    /**
     * Creates a DraftJsBlock message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DraftJsBlock
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DraftJsBlock} DraftJsBlock
     */
    DraftJsBlock.fromObject = function fromObject(object) {
        if (object instanceof $root.DraftJsBlock)
            return object;
        var message = new $root.DraftJsBlock();
        if (object.key != null)
            message.key = String(object.key);
        if (object.text != null)
            message.text = String(object.text);
        if (object.type != null)
            message.type = String(object.type);
        if (object.depth != null)
            message.depth = object.depth | 0;
        if (object.inlineStyleRanges) {
            if (!Array.isArray(object.inlineStyleRanges))
                throw TypeError(".DraftJsBlock.inlineStyleRanges: array expected");
            message.inlineStyleRanges = [];
            for (var i = 0; i < object.inlineStyleRanges.length; ++i)
                message.inlineStyleRanges[i] = object.inlineStyleRanges[i] | 0;
        }
        if (object.entityRanges) {
            if (!Array.isArray(object.entityRanges))
                throw TypeError(".DraftJsBlock.entityRanges: array expected");
            message.entityRanges = [];
            for (var i = 0; i < object.entityRanges.length; ++i)
                message.entityRanges[i] = String(object.entityRanges[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a DraftJsBlock message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DraftJsBlock
     * @static
     * @param {DraftJsBlock} message DraftJsBlock
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DraftJsBlock.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.inlineStyleRanges = [];
            object.entityRanges = [];
        }
        if (options.defaults) {
            object.key = "";
            object.text = "";
            object.type = "";
            object.depth = 0;
        }
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        if (message.text != null && message.hasOwnProperty("text"))
            object.text = message.text;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.depth != null && message.hasOwnProperty("depth"))
            object.depth = message.depth;
        if (message.inlineStyleRanges && message.inlineStyleRanges.length) {
            object.inlineStyleRanges = [];
            for (var j = 0; j < message.inlineStyleRanges.length; ++j)
                object.inlineStyleRanges[j] = message.inlineStyleRanges[j];
        }
        if (message.entityRanges && message.entityRanges.length) {
            object.entityRanges = [];
            for (var j = 0; j < message.entityRanges.length; ++j)
                object.entityRanges[j] = message.entityRanges[j];
        }
        return object;
    };

    /**
     * Converts this DraftJsBlock to JSON.
     * @function toJSON
     * @memberof DraftJsBlock
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DraftJsBlock.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DraftJsBlock;
})();

$root.DraftJsEntity = (function() {

    /**
     * Properties of a DraftJsEntity.
     * @exports IDraftJsEntity
     * @interface IDraftJsEntity
     * @property {string|null} [type] DraftJsEntity type
     * @property {string|null} [data] DraftJsEntity data
     */

    /**
     * Constructs a new DraftJsEntity.
     * @exports DraftJsEntity
     * @classdesc Represents a DraftJsEntity.
     * @implements IDraftJsEntity
     * @constructor
     * @param {IDraftJsEntity=} [properties] Properties to set
     */
    function DraftJsEntity(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DraftJsEntity type.
     * @member {string} type
     * @memberof DraftJsEntity
     * @instance
     */
    DraftJsEntity.prototype.type = "";

    /**
     * DraftJsEntity data.
     * @member {string} data
     * @memberof DraftJsEntity
     * @instance
     */
    DraftJsEntity.prototype.data = "";

    /**
     * Creates a new DraftJsEntity instance using the specified properties.
     * @function create
     * @memberof DraftJsEntity
     * @static
     * @param {IDraftJsEntity=} [properties] Properties to set
     * @returns {DraftJsEntity} DraftJsEntity instance
     */
    DraftJsEntity.create = function create(properties) {
        return new DraftJsEntity(properties);
    };

    /**
     * Encodes the specified DraftJsEntity message. Does not implicitly {@link DraftJsEntity.verify|verify} messages.
     * @function encode
     * @memberof DraftJsEntity
     * @static
     * @param {IDraftJsEntity} message DraftJsEntity message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DraftJsEntity.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.data);
        return writer;
    };

    /**
     * Encodes the specified DraftJsEntity message, length delimited. Does not implicitly {@link DraftJsEntity.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DraftJsEntity
     * @static
     * @param {IDraftJsEntity} message DraftJsEntity message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DraftJsEntity.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DraftJsEntity message from the specified reader or buffer.
     * @function decode
     * @memberof DraftJsEntity
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DraftJsEntity} DraftJsEntity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DraftJsEntity.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DraftJsEntity();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.string();
                break;
            case 2:
                message.data = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DraftJsEntity message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DraftJsEntity
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DraftJsEntity} DraftJsEntity
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DraftJsEntity.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DraftJsEntity message.
     * @function verify
     * @memberof DraftJsEntity
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DraftJsEntity.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!$util.isString(message.data))
                return "data: string expected";
        return null;
    };

    /**
     * Creates a DraftJsEntity message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DraftJsEntity
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DraftJsEntity} DraftJsEntity
     */
    DraftJsEntity.fromObject = function fromObject(object) {
        if (object instanceof $root.DraftJsEntity)
            return object;
        var message = new $root.DraftJsEntity();
        if (object.type != null)
            message.type = String(object.type);
        if (object.data != null)
            message.data = String(object.data);
        return message;
    };

    /**
     * Creates a plain object from a DraftJsEntity message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DraftJsEntity
     * @static
     * @param {DraftJsEntity} message DraftJsEntity
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DraftJsEntity.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = "";
            object.data = "";
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = message.data;
        return object;
    };

    /**
     * Converts this DraftJsEntity to JSON.
     * @function toJSON
     * @memberof DraftJsEntity
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DraftJsEntity.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DraftJsEntity;
})();

$root.DraftJsRawContent = (function() {

    /**
     * Properties of a DraftJsRawContent.
     * @exports IDraftJsRawContent
     * @interface IDraftJsRawContent
     * @property {Array.<IDraftJsBlock>|null} [blocks] DraftJsRawContent blocks
     */

    /**
     * Constructs a new DraftJsRawContent.
     * @exports DraftJsRawContent
     * @classdesc Represents a DraftJsRawContent.
     * @implements IDraftJsRawContent
     * @constructor
     * @param {IDraftJsRawContent=} [properties] Properties to set
     */
    function DraftJsRawContent(properties) {
        this.blocks = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DraftJsRawContent blocks.
     * @member {Array.<IDraftJsBlock>} blocks
     * @memberof DraftJsRawContent
     * @instance
     */
    DraftJsRawContent.prototype.blocks = $util.emptyArray;

    /**
     * Creates a new DraftJsRawContent instance using the specified properties.
     * @function create
     * @memberof DraftJsRawContent
     * @static
     * @param {IDraftJsRawContent=} [properties] Properties to set
     * @returns {DraftJsRawContent} DraftJsRawContent instance
     */
    DraftJsRawContent.create = function create(properties) {
        return new DraftJsRawContent(properties);
    };

    /**
     * Encodes the specified DraftJsRawContent message. Does not implicitly {@link DraftJsRawContent.verify|verify} messages.
     * @function encode
     * @memberof DraftJsRawContent
     * @static
     * @param {IDraftJsRawContent} message DraftJsRawContent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DraftJsRawContent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.blocks != null && message.blocks.length)
            for (var i = 0; i < message.blocks.length; ++i)
                $root.DraftJsBlock.encode(message.blocks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DraftJsRawContent message, length delimited. Does not implicitly {@link DraftJsRawContent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DraftJsRawContent
     * @static
     * @param {IDraftJsRawContent} message DraftJsRawContent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DraftJsRawContent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DraftJsRawContent message from the specified reader or buffer.
     * @function decode
     * @memberof DraftJsRawContent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DraftJsRawContent} DraftJsRawContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DraftJsRawContent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DraftJsRawContent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.blocks && message.blocks.length))
                    message.blocks = [];
                message.blocks.push($root.DraftJsBlock.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DraftJsRawContent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DraftJsRawContent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DraftJsRawContent} DraftJsRawContent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DraftJsRawContent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DraftJsRawContent message.
     * @function verify
     * @memberof DraftJsRawContent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DraftJsRawContent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.blocks != null && message.hasOwnProperty("blocks")) {
            if (!Array.isArray(message.blocks))
                return "blocks: array expected";
            for (var i = 0; i < message.blocks.length; ++i) {
                var error = $root.DraftJsBlock.verify(message.blocks[i]);
                if (error)
                    return "blocks." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DraftJsRawContent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DraftJsRawContent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DraftJsRawContent} DraftJsRawContent
     */
    DraftJsRawContent.fromObject = function fromObject(object) {
        if (object instanceof $root.DraftJsRawContent)
            return object;
        var message = new $root.DraftJsRawContent();
        if (object.blocks) {
            if (!Array.isArray(object.blocks))
                throw TypeError(".DraftJsRawContent.blocks: array expected");
            message.blocks = [];
            for (var i = 0; i < object.blocks.length; ++i) {
                if (typeof object.blocks[i] !== "object")
                    throw TypeError(".DraftJsRawContent.blocks: object expected");
                message.blocks[i] = $root.DraftJsBlock.fromObject(object.blocks[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a DraftJsRawContent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DraftJsRawContent
     * @static
     * @param {DraftJsRawContent} message DraftJsRawContent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DraftJsRawContent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.blocks = [];
        if (message.blocks && message.blocks.length) {
            object.blocks = [];
            for (var j = 0; j < message.blocks.length; ++j)
                object.blocks[j] = $root.DraftJsBlock.toObject(message.blocks[j], options);
        }
        return object;
    };

    /**
     * Converts this DraftJsRawContent to JSON.
     * @function toJSON
     * @memberof DraftJsRawContent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DraftJsRawContent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DraftJsRawContent;
})();

$root.Event = (function() {

    /**
     * Properties of an Event.
     * @exports IEvent
     * @interface IEvent
     * @property {string|null} [eventId] Event eventId
     * @property {string|null} [userId] Event userId
     * @property {Uint8Array|null} [data] Event data
     * @property {number|null} [createdAt] Event createdAt
     */

    /**
     * Constructs a new Event.
     * @exports Event
     * @classdesc Represents an Event.
     * @implements IEvent
     * @constructor
     * @param {IEvent=} [properties] Properties to set
     */
    function Event(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Event eventId.
     * @member {string} eventId
     * @memberof Event
     * @instance
     */
    Event.prototype.eventId = "";

    /**
     * Event userId.
     * @member {string} userId
     * @memberof Event
     * @instance
     */
    Event.prototype.userId = "";

    /**
     * Event data.
     * @member {Uint8Array} data
     * @memberof Event
     * @instance
     */
    Event.prototype.data = $util.newBuffer([]);

    /**
     * Event createdAt.
     * @member {number} createdAt
     * @memberof Event
     * @instance
     */
    Event.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new Event instance using the specified properties.
     * @function create
     * @memberof Event
     * @static
     * @param {IEvent=} [properties] Properties to set
     * @returns {Event} Event instance
     */
    Event.create = function create(properties) {
        return new Event(properties);
    };

    /**
     * Encodes the specified Event message. Does not implicitly {@link Event.verify|verify} messages.
     * @function encode
     * @memberof Event
     * @static
     * @param {IEvent} message Event message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Event.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventId);
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.userId);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.createdAt);
        return writer;
    };

    /**
     * Encodes the specified Event message, length delimited. Does not implicitly {@link Event.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Event
     * @static
     * @param {IEvent} message Event message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Event.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Event message from the specified reader or buffer.
     * @function decode
     * @memberof Event
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Event} Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Event.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Event();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.eventId = reader.string();
                break;
            case 2:
                message.userId = reader.string();
                break;
            case 3:
                message.data = reader.bytes();
                break;
            case 4:
                message.createdAt = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Event message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Event
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Event} Event
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Event.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Event message.
     * @function verify
     * @memberof Event
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Event.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.eventId != null && message.hasOwnProperty("eventId"))
            if (!$util.isString(message.eventId))
                return "eventId: string expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                return "createdAt: integer|Long expected";
        return null;
    };

    /**
     * Creates an Event message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Event
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Event} Event
     */
    Event.fromObject = function fromObject(object) {
        if (object instanceof $root.Event)
            return object;
        var message = new $root.Event();
        if (object.eventId != null)
            message.eventId = String(object.eventId);
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        if (object.createdAt != null)
            if ($util.Long)
                (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
            else if (typeof object.createdAt === "string")
                message.createdAt = parseInt(object.createdAt, 10);
            else if (typeof object.createdAt === "number")
                message.createdAt = object.createdAt;
            else if (typeof object.createdAt === "object")
                message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from an Event message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Event
     * @static
     * @param {Event} message Event
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Event.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.eventId = "";
            object.userId = "";
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdAt = options.longs === String ? "0" : 0;
        }
        if (message.eventId != null && message.hasOwnProperty("eventId"))
            object.eventId = message.eventId;
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (typeof message.createdAt === "number")
                object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
            else
                object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
        return object;
    };

    /**
     * Converts this Event to JSON.
     * @function toJSON
     * @memberof Event
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Event.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Event;
})();

$root.CommentReplyEvent = (function() {

    /**
     * Properties of a CommentReplyEvent.
     * @exports ICommentReplyEvent
     * @interface ICommentReplyEvent
     * @property {string|null} [userId] CommentReplyEvent userId
     * @property {IComment|null} [comment] CommentReplyEvent comment
     * @property {number|null} [createdAt] CommentReplyEvent createdAt
     */

    /**
     * Constructs a new CommentReplyEvent.
     * @exports CommentReplyEvent
     * @classdesc Represents a CommentReplyEvent.
     * @implements ICommentReplyEvent
     * @constructor
     * @param {ICommentReplyEvent=} [properties] Properties to set
     */
    function CommentReplyEvent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CommentReplyEvent userId.
     * @member {string} userId
     * @memberof CommentReplyEvent
     * @instance
     */
    CommentReplyEvent.prototype.userId = "";

    /**
     * CommentReplyEvent comment.
     * @member {IComment|null|undefined} comment
     * @memberof CommentReplyEvent
     * @instance
     */
    CommentReplyEvent.prototype.comment = null;

    /**
     * CommentReplyEvent createdAt.
     * @member {number} createdAt
     * @memberof CommentReplyEvent
     * @instance
     */
    CommentReplyEvent.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new CommentReplyEvent instance using the specified properties.
     * @function create
     * @memberof CommentReplyEvent
     * @static
     * @param {ICommentReplyEvent=} [properties] Properties to set
     * @returns {CommentReplyEvent} CommentReplyEvent instance
     */
    CommentReplyEvent.create = function create(properties) {
        return new CommentReplyEvent(properties);
    };

    /**
     * Encodes the specified CommentReplyEvent message. Does not implicitly {@link CommentReplyEvent.verify|verify} messages.
     * @function encode
     * @memberof CommentReplyEvent
     * @static
     * @param {ICommentReplyEvent} message CommentReplyEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentReplyEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
        if (message.comment != null && Object.hasOwnProperty.call(message, "comment"))
            $root.Comment.encode(message.comment, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.createdAt);
        return writer;
    };

    /**
     * Encodes the specified CommentReplyEvent message, length delimited. Does not implicitly {@link CommentReplyEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CommentReplyEvent
     * @static
     * @param {ICommentReplyEvent} message CommentReplyEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentReplyEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CommentReplyEvent message from the specified reader or buffer.
     * @function decode
     * @memberof CommentReplyEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommentReplyEvent} CommentReplyEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentReplyEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommentReplyEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.string();
                break;
            case 2:
                message.comment = $root.Comment.decode(reader, reader.uint32());
                break;
            case 4:
                message.createdAt = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CommentReplyEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CommentReplyEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommentReplyEvent} CommentReplyEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentReplyEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CommentReplyEvent message.
     * @function verify
     * @memberof CommentReplyEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CommentReplyEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        if (message.comment != null && message.hasOwnProperty("comment")) {
            var error = $root.Comment.verify(message.comment);
            if (error)
                return "comment." + error;
        }
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                return "createdAt: integer|Long expected";
        return null;
    };

    /**
     * Creates a CommentReplyEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CommentReplyEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CommentReplyEvent} CommentReplyEvent
     */
    CommentReplyEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.CommentReplyEvent)
            return object;
        var message = new $root.CommentReplyEvent();
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.comment != null) {
            if (typeof object.comment !== "object")
                throw TypeError(".CommentReplyEvent.comment: object expected");
            message.comment = $root.Comment.fromObject(object.comment);
        }
        if (object.createdAt != null)
            if ($util.Long)
                (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
            else if (typeof object.createdAt === "string")
                message.createdAt = parseInt(object.createdAt, 10);
            else if (typeof object.createdAt === "number")
                message.createdAt = object.createdAt;
            else if (typeof object.createdAt === "object")
                message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a CommentReplyEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CommentReplyEvent
     * @static
     * @param {CommentReplyEvent} message CommentReplyEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CommentReplyEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.userId = "";
            object.comment = null;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdAt = options.longs === String ? "0" : 0;
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.comment != null && message.hasOwnProperty("comment"))
            object.comment = $root.Comment.toObject(message.comment, options);
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (typeof message.createdAt === "number")
                object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
            else
                object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
        return object;
    };

    /**
     * Converts this CommentReplyEvent to JSON.
     * @function toJSON
     * @memberof CommentReplyEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommentReplyEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CommentReplyEvent;
})();

$root.CommentCreateEvent = (function() {

    /**
     * Properties of a CommentCreateEvent.
     * @exports ICommentCreateEvent
     * @interface ICommentCreateEvent
     * @property {string|null} [threadId] CommentCreateEvent threadId
     * @property {IComment|null} [comment] CommentCreateEvent comment
     * @property {number|null} [createdAt] CommentCreateEvent createdAt
     */

    /**
     * Constructs a new CommentCreateEvent.
     * @exports CommentCreateEvent
     * @classdesc Represents a CommentCreateEvent.
     * @implements ICommentCreateEvent
     * @constructor
     * @param {ICommentCreateEvent=} [properties] Properties to set
     */
    function CommentCreateEvent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CommentCreateEvent threadId.
     * @member {string} threadId
     * @memberof CommentCreateEvent
     * @instance
     */
    CommentCreateEvent.prototype.threadId = "";

    /**
     * CommentCreateEvent comment.
     * @member {IComment|null|undefined} comment
     * @memberof CommentCreateEvent
     * @instance
     */
    CommentCreateEvent.prototype.comment = null;

    /**
     * CommentCreateEvent createdAt.
     * @member {number} createdAt
     * @memberof CommentCreateEvent
     * @instance
     */
    CommentCreateEvent.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new CommentCreateEvent instance using the specified properties.
     * @function create
     * @memberof CommentCreateEvent
     * @static
     * @param {ICommentCreateEvent=} [properties] Properties to set
     * @returns {CommentCreateEvent} CommentCreateEvent instance
     */
    CommentCreateEvent.create = function create(properties) {
        return new CommentCreateEvent(properties);
    };

    /**
     * Encodes the specified CommentCreateEvent message. Does not implicitly {@link CommentCreateEvent.verify|verify} messages.
     * @function encode
     * @memberof CommentCreateEvent
     * @static
     * @param {ICommentCreateEvent} message CommentCreateEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentCreateEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.threadId != null && Object.hasOwnProperty.call(message, "threadId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.threadId);
        if (message.comment != null && Object.hasOwnProperty.call(message, "comment"))
            $root.Comment.encode(message.comment, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.createdAt);
        return writer;
    };

    /**
     * Encodes the specified CommentCreateEvent message, length delimited. Does not implicitly {@link CommentCreateEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CommentCreateEvent
     * @static
     * @param {ICommentCreateEvent} message CommentCreateEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommentCreateEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CommentCreateEvent message from the specified reader or buffer.
     * @function decode
     * @memberof CommentCreateEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommentCreateEvent} CommentCreateEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentCreateEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommentCreateEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.threadId = reader.string();
                break;
            case 2:
                message.comment = $root.Comment.decode(reader, reader.uint32());
                break;
            case 3:
                message.createdAt = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CommentCreateEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CommentCreateEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommentCreateEvent} CommentCreateEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommentCreateEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CommentCreateEvent message.
     * @function verify
     * @memberof CommentCreateEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CommentCreateEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.threadId != null && message.hasOwnProperty("threadId"))
            if (!$util.isString(message.threadId))
                return "threadId: string expected";
        if (message.comment != null && message.hasOwnProperty("comment")) {
            var error = $root.Comment.verify(message.comment);
            if (error)
                return "comment." + error;
        }
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                return "createdAt: integer|Long expected";
        return null;
    };

    /**
     * Creates a CommentCreateEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CommentCreateEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CommentCreateEvent} CommentCreateEvent
     */
    CommentCreateEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.CommentCreateEvent)
            return object;
        var message = new $root.CommentCreateEvent();
        if (object.threadId != null)
            message.threadId = String(object.threadId);
        if (object.comment != null) {
            if (typeof object.comment !== "object")
                throw TypeError(".CommentCreateEvent.comment: object expected");
            message.comment = $root.Comment.fromObject(object.comment);
        }
        if (object.createdAt != null)
            if ($util.Long)
                (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
            else if (typeof object.createdAt === "string")
                message.createdAt = parseInt(object.createdAt, 10);
            else if (typeof object.createdAt === "number")
                message.createdAt = object.createdAt;
            else if (typeof object.createdAt === "object")
                message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a CommentCreateEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CommentCreateEvent
     * @static
     * @param {CommentCreateEvent} message CommentCreateEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CommentCreateEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.threadId = "";
            object.comment = null;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdAt = options.longs === String ? "0" : 0;
        }
        if (message.threadId != null && message.hasOwnProperty("threadId"))
            object.threadId = message.threadId;
        if (message.comment != null && message.hasOwnProperty("comment"))
            object.comment = $root.Comment.toObject(message.comment, options);
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (typeof message.createdAt === "number")
                object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
            else
                object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
        return object;
    };

    /**
     * Converts this CommentCreateEvent to JSON.
     * @function toJSON
     * @memberof CommentCreateEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommentCreateEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CommentCreateEvent;
})();

$root.UserMentionEvent = (function() {

    /**
     * Properties of a UserMentionEvent.
     * @exports IUserMentionEvent
     * @interface IUserMentionEvent
     * @property {string|null} [userId] UserMentionEvent userId
     * @property {string|null} [location] UserMentionEvent location
     * @property {number|null} [createdAt] UserMentionEvent createdAt
     * @property {string|null} [board] UserMentionEvent board
     * @property {string|null} [title] UserMentionEvent title
     * @property {string|null} [comment] UserMentionEvent comment
     */

    /**
     * Constructs a new UserMentionEvent.
     * @exports UserMentionEvent
     * @classdesc Represents a UserMentionEvent.
     * @implements IUserMentionEvent
     * @constructor
     * @param {IUserMentionEvent=} [properties] Properties to set
     */
    function UserMentionEvent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserMentionEvent userId.
     * @member {string} userId
     * @memberof UserMentionEvent
     * @instance
     */
    UserMentionEvent.prototype.userId = "";

    /**
     * UserMentionEvent location.
     * @member {string} location
     * @memberof UserMentionEvent
     * @instance
     */
    UserMentionEvent.prototype.location = "";

    /**
     * UserMentionEvent createdAt.
     * @member {number} createdAt
     * @memberof UserMentionEvent
     * @instance
     */
    UserMentionEvent.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * UserMentionEvent board.
     * @member {string} board
     * @memberof UserMentionEvent
     * @instance
     */
    UserMentionEvent.prototype.board = "";

    /**
     * UserMentionEvent title.
     * @member {string} title
     * @memberof UserMentionEvent
     * @instance
     */
    UserMentionEvent.prototype.title = "";

    /**
     * UserMentionEvent comment.
     * @member {string} comment
     * @memberof UserMentionEvent
     * @instance
     */
    UserMentionEvent.prototype.comment = "";

    /**
     * Creates a new UserMentionEvent instance using the specified properties.
     * @function create
     * @memberof UserMentionEvent
     * @static
     * @param {IUserMentionEvent=} [properties] Properties to set
     * @returns {UserMentionEvent} UserMentionEvent instance
     */
    UserMentionEvent.create = function create(properties) {
        return new UserMentionEvent(properties);
    };

    /**
     * Encodes the specified UserMentionEvent message. Does not implicitly {@link UserMentionEvent.verify|verify} messages.
     * @function encode
     * @memberof UserMentionEvent
     * @static
     * @param {IUserMentionEvent} message UserMentionEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserMentionEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
        if (message.location != null && Object.hasOwnProperty.call(message, "location"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.location);
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.createdAt);
        if (message.board != null && Object.hasOwnProperty.call(message, "board"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.board);
        if (message.title != null && Object.hasOwnProperty.call(message, "title"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.title);
        if (message.comment != null && Object.hasOwnProperty.call(message, "comment"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.comment);
        return writer;
    };

    /**
     * Encodes the specified UserMentionEvent message, length delimited. Does not implicitly {@link UserMentionEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserMentionEvent
     * @static
     * @param {IUserMentionEvent} message UserMentionEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserMentionEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserMentionEvent message from the specified reader or buffer.
     * @function decode
     * @memberof UserMentionEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserMentionEvent} UserMentionEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserMentionEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserMentionEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.string();
                break;
            case 2:
                message.location = reader.string();
                break;
            case 3:
                message.createdAt = reader.int64();
                break;
            case 4:
                message.board = reader.string();
                break;
            case 5:
                message.title = reader.string();
                break;
            case 6:
                message.comment = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserMentionEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserMentionEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserMentionEvent} UserMentionEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserMentionEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserMentionEvent message.
     * @function verify
     * @memberof UserMentionEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserMentionEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        if (message.location != null && message.hasOwnProperty("location"))
            if (!$util.isString(message.location))
                return "location: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                return "createdAt: integer|Long expected";
        if (message.board != null && message.hasOwnProperty("board"))
            if (!$util.isString(message.board))
                return "board: string expected";
        if (message.title != null && message.hasOwnProperty("title"))
            if (!$util.isString(message.title))
                return "title: string expected";
        if (message.comment != null && message.hasOwnProperty("comment"))
            if (!$util.isString(message.comment))
                return "comment: string expected";
        return null;
    };

    /**
     * Creates a UserMentionEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserMentionEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserMentionEvent} UserMentionEvent
     */
    UserMentionEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.UserMentionEvent)
            return object;
        var message = new $root.UserMentionEvent();
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.location != null)
            message.location = String(object.location);
        if (object.createdAt != null)
            if ($util.Long)
                (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
            else if (typeof object.createdAt === "string")
                message.createdAt = parseInt(object.createdAt, 10);
            else if (typeof object.createdAt === "number")
                message.createdAt = object.createdAt;
            else if (typeof object.createdAt === "object")
                message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
        if (object.board != null)
            message.board = String(object.board);
        if (object.title != null)
            message.title = String(object.title);
        if (object.comment != null)
            message.comment = String(object.comment);
        return message;
    };

    /**
     * Creates a plain object from a UserMentionEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserMentionEvent
     * @static
     * @param {UserMentionEvent} message UserMentionEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserMentionEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.userId = "";
            object.location = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdAt = options.longs === String ? "0" : 0;
            object.board = "";
            object.title = "";
            object.comment = "";
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.location != null && message.hasOwnProperty("location"))
            object.location = message.location;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (typeof message.createdAt === "number")
                object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
            else
                object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
        if (message.board != null && message.hasOwnProperty("board"))
            object.board = message.board;
        if (message.title != null && message.hasOwnProperty("title"))
            object.title = message.title;
        if (message.comment != null && message.hasOwnProperty("comment"))
            object.comment = message.comment;
        return object;
    };

    /**
     * Converts this UserMentionEvent to JSON.
     * @function toJSON
     * @memberof UserMentionEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserMentionEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserMentionEvent;
})();

$root.CommunityEvent = (function() {

    /**
     * Properties of a CommunityEvent.
     * @exports ICommunityEvent
     * @interface ICommunityEvent
     * @property {string|null} [boardId] CommunityEvent boardId
     * @property {string|null} [userId] CommunityEvent userId
     * @property {string|null} [action] CommunityEvent action
     */

    /**
     * Constructs a new CommunityEvent.
     * @exports CommunityEvent
     * @classdesc Represents a CommunityEvent.
     * @implements ICommunityEvent
     * @constructor
     * @param {ICommunityEvent=} [properties] Properties to set
     */
    function CommunityEvent(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CommunityEvent boardId.
     * @member {string} boardId
     * @memberof CommunityEvent
     * @instance
     */
    CommunityEvent.prototype.boardId = "";

    /**
     * CommunityEvent userId.
     * @member {string} userId
     * @memberof CommunityEvent
     * @instance
     */
    CommunityEvent.prototype.userId = "";

    /**
     * CommunityEvent action.
     * @member {string} action
     * @memberof CommunityEvent
     * @instance
     */
    CommunityEvent.prototype.action = "";

    /**
     * Creates a new CommunityEvent instance using the specified properties.
     * @function create
     * @memberof CommunityEvent
     * @static
     * @param {ICommunityEvent=} [properties] Properties to set
     * @returns {CommunityEvent} CommunityEvent instance
     */
    CommunityEvent.create = function create(properties) {
        return new CommunityEvent(properties);
    };

    /**
     * Encodes the specified CommunityEvent message. Does not implicitly {@link CommunityEvent.verify|verify} messages.
     * @function encode
     * @memberof CommunityEvent
     * @static
     * @param {ICommunityEvent} message CommunityEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommunityEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.boardId != null && Object.hasOwnProperty.call(message, "boardId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.boardId);
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.userId);
        if (message.action != null && Object.hasOwnProperty.call(message, "action"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.action);
        return writer;
    };

    /**
     * Encodes the specified CommunityEvent message, length delimited. Does not implicitly {@link CommunityEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CommunityEvent
     * @static
     * @param {ICommunityEvent} message CommunityEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommunityEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CommunityEvent message from the specified reader or buffer.
     * @function decode
     * @memberof CommunityEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CommunityEvent} CommunityEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommunityEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommunityEvent();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.boardId = reader.string();
                break;
            case 2:
                message.userId = reader.string();
                break;
            case 3:
                message.action = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CommunityEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CommunityEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CommunityEvent} CommunityEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommunityEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CommunityEvent message.
     * @function verify
     * @memberof CommunityEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CommunityEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.boardId != null && message.hasOwnProperty("boardId"))
            if (!$util.isString(message.boardId))
                return "boardId: string expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        if (message.action != null && message.hasOwnProperty("action"))
            if (!$util.isString(message.action))
                return "action: string expected";
        return null;
    };

    /**
     * Creates a CommunityEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CommunityEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CommunityEvent} CommunityEvent
     */
    CommunityEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.CommunityEvent)
            return object;
        var message = new $root.CommunityEvent();
        if (object.boardId != null)
            message.boardId = String(object.boardId);
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.action != null)
            message.action = String(object.action);
        return message;
    };

    /**
     * Creates a plain object from a CommunityEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CommunityEvent
     * @static
     * @param {CommunityEvent} message CommunityEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CommunityEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.boardId = "";
            object.userId = "";
            object.action = "";
        }
        if (message.boardId != null && message.hasOwnProperty("boardId"))
            object.boardId = message.boardId;
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.action != null && message.hasOwnProperty("action"))
            object.action = message.action;
        return object;
    };

    /**
     * Converts this CommunityEvent to JSON.
     * @function toJSON
     * @memberof CommunityEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommunityEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CommunityEvent;
})();

$root.ThreadVoteEvent = (function() {

    /**
     * Properties of a ThreadVoteEvent.
     * @exports IThreadVoteEvent
     * @interface IThreadVoteEvent
     * @property {string|null} [userId] ThreadVoteEvent userId
     * @property {number|null} [createdAt] ThreadVoteEvent createdAt
     * @property {string|null} [threadId] ThreadVoteEvent threadId
     * @property {number|null} [totalVotes] ThreadVoteEvent totalVotes
     * @property {Object.<string,number>|null} [votes] ThreadVoteEvent votes
     */

    /**
     * Constructs a new ThreadVoteEvent.
     * @exports ThreadVoteEvent
     * @classdesc Represents a ThreadVoteEvent.
     * @implements IThreadVoteEvent
     * @constructor
     * @param {IThreadVoteEvent=} [properties] Properties to set
     */
    function ThreadVoteEvent(properties) {
        this.votes = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ThreadVoteEvent userId.
     * @member {string} userId
     * @memberof ThreadVoteEvent
     * @instance
     */
    ThreadVoteEvent.prototype.userId = "";

    /**
     * ThreadVoteEvent createdAt.
     * @member {number} createdAt
     * @memberof ThreadVoteEvent
     * @instance
     */
    ThreadVoteEvent.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ThreadVoteEvent threadId.
     * @member {string} threadId
     * @memberof ThreadVoteEvent
     * @instance
     */
    ThreadVoteEvent.prototype.threadId = "";

    /**
     * ThreadVoteEvent totalVotes.
     * @member {number} totalVotes
     * @memberof ThreadVoteEvent
     * @instance
     */
    ThreadVoteEvent.prototype.totalVotes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ThreadVoteEvent votes.
     * @member {Object.<string,number>} votes
     * @memberof ThreadVoteEvent
     * @instance
     */
    ThreadVoteEvent.prototype.votes = $util.emptyObject;

    /**
     * Creates a new ThreadVoteEvent instance using the specified properties.
     * @function create
     * @memberof ThreadVoteEvent
     * @static
     * @param {IThreadVoteEvent=} [properties] Properties to set
     * @returns {ThreadVoteEvent} ThreadVoteEvent instance
     */
    ThreadVoteEvent.create = function create(properties) {
        return new ThreadVoteEvent(properties);
    };

    /**
     * Encodes the specified ThreadVoteEvent message. Does not implicitly {@link ThreadVoteEvent.verify|verify} messages.
     * @function encode
     * @memberof ThreadVoteEvent
     * @static
     * @param {IThreadVoteEvent} message ThreadVoteEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThreadVoteEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.createdAt);
        if (message.threadId != null && Object.hasOwnProperty.call(message, "threadId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.threadId);
        if (message.totalVotes != null && Object.hasOwnProperty.call(message, "totalVotes"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.totalVotes);
        if (message.votes != null && Object.hasOwnProperty.call(message, "votes"))
            for (var keys = Object.keys(message.votes), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.votes[keys[i]]).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ThreadVoteEvent message, length delimited. Does not implicitly {@link ThreadVoteEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ThreadVoteEvent
     * @static
     * @param {IThreadVoteEvent} message ThreadVoteEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThreadVoteEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ThreadVoteEvent message from the specified reader or buffer.
     * @function decode
     * @memberof ThreadVoteEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ThreadVoteEvent} ThreadVoteEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThreadVoteEvent.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ThreadVoteEvent(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.string();
                break;
            case 2:
                message.createdAt = reader.int64();
                break;
            case 3:
                message.threadId = reader.string();
                break;
            case 4:
                message.totalVotes = reader.int64();
                break;
            case 5:
                if (message.votes === $util.emptyObject)
                    message.votes = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = 0;
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = reader.int64();
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.votes[key] = value;
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ThreadVoteEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ThreadVoteEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ThreadVoteEvent} ThreadVoteEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThreadVoteEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ThreadVoteEvent message.
     * @function verify
     * @memberof ThreadVoteEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ThreadVoteEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                return "createdAt: integer|Long expected";
        if (message.threadId != null && message.hasOwnProperty("threadId"))
            if (!$util.isString(message.threadId))
                return "threadId: string expected";
        if (message.totalVotes != null && message.hasOwnProperty("totalVotes"))
            if (!$util.isInteger(message.totalVotes) && !(message.totalVotes && $util.isInteger(message.totalVotes.low) && $util.isInteger(message.totalVotes.high)))
                return "totalVotes: integer|Long expected";
        if (message.votes != null && message.hasOwnProperty("votes")) {
            if (!$util.isObject(message.votes))
                return "votes: object expected";
            var key = Object.keys(message.votes);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isInteger(message.votes[key[i]]) && !(message.votes[key[i]] && $util.isInteger(message.votes[key[i]].low) && $util.isInteger(message.votes[key[i]].high)))
                    return "votes: integer|Long{k:string} expected";
        }
        return null;
    };

    /**
     * Creates a ThreadVoteEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ThreadVoteEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ThreadVoteEvent} ThreadVoteEvent
     */
    ThreadVoteEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.ThreadVoteEvent)
            return object;
        var message = new $root.ThreadVoteEvent();
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.createdAt != null)
            if ($util.Long)
                (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
            else if (typeof object.createdAt === "string")
                message.createdAt = parseInt(object.createdAt, 10);
            else if (typeof object.createdAt === "number")
                message.createdAt = object.createdAt;
            else if (typeof object.createdAt === "object")
                message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
        if (object.threadId != null)
            message.threadId = String(object.threadId);
        if (object.totalVotes != null)
            if ($util.Long)
                (message.totalVotes = $util.Long.fromValue(object.totalVotes)).unsigned = false;
            else if (typeof object.totalVotes === "string")
                message.totalVotes = parseInt(object.totalVotes, 10);
            else if (typeof object.totalVotes === "number")
                message.totalVotes = object.totalVotes;
            else if (typeof object.totalVotes === "object")
                message.totalVotes = new $util.LongBits(object.totalVotes.low >>> 0, object.totalVotes.high >>> 0).toNumber();
        if (object.votes) {
            if (typeof object.votes !== "object")
                throw TypeError(".ThreadVoteEvent.votes: object expected");
            message.votes = {};
            for (var keys = Object.keys(object.votes), i = 0; i < keys.length; ++i)
                if ($util.Long)
                    (message.votes[keys[i]] = $util.Long.fromValue(object.votes[keys[i]])).unsigned = false;
                else if (typeof object.votes[keys[i]] === "string")
                    message.votes[keys[i]] = parseInt(object.votes[keys[i]], 10);
                else if (typeof object.votes[keys[i]] === "number")
                    message.votes[keys[i]] = object.votes[keys[i]];
                else if (typeof object.votes[keys[i]] === "object")
                    message.votes[keys[i]] = new $util.LongBits(object.votes[keys[i]].low >>> 0, object.votes[keys[i]].high >>> 0).toNumber();
        }
        return message;
    };

    /**
     * Creates a plain object from a ThreadVoteEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ThreadVoteEvent
     * @static
     * @param {ThreadVoteEvent} message ThreadVoteEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ThreadVoteEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.votes = {};
        if (options.defaults) {
            object.userId = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdAt = options.longs === String ? "0" : 0;
            object.threadId = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.totalVotes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.totalVotes = options.longs === String ? "0" : 0;
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (typeof message.createdAt === "number")
                object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
            else
                object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
        if (message.threadId != null && message.hasOwnProperty("threadId"))
            object.threadId = message.threadId;
        if (message.totalVotes != null && message.hasOwnProperty("totalVotes"))
            if (typeof message.totalVotes === "number")
                object.totalVotes = options.longs === String ? String(message.totalVotes) : message.totalVotes;
            else
                object.totalVotes = options.longs === String ? $util.Long.prototype.toString.call(message.totalVotes) : options.longs === Number ? new $util.LongBits(message.totalVotes.low >>> 0, message.totalVotes.high >>> 0).toNumber() : message.totalVotes;
        var keys2;
        if (message.votes && (keys2 = Object.keys(message.votes)).length) {
            object.votes = {};
            for (var j = 0; j < keys2.length; ++j)
                if (typeof message.votes[keys2[j]] === "number")
                    object.votes[keys2[j]] = options.longs === String ? String(message.votes[keys2[j]]) : message.votes[keys2[j]];
                else
                    object.votes[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.votes[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.votes[keys2[j]].low >>> 0, message.votes[keys2[j]].high >>> 0).toNumber() : message.votes[keys2[j]];
        }
        return object;
    };

    /**
     * Converts this ThreadVoteEvent to JSON.
     * @function toJSON
     * @memberof ThreadVoteEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ThreadVoteEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ThreadVoteEvent;
})();

$root.EventContextUpdate = (function() {

    /**
     * Properties of an EventContextUpdate.
     * @exports IEventContextUpdate
     * @interface IEventContextUpdate
     * @property {number|null} [createdAt] EventContextUpdate createdAt
     * @property {Array.<string>|null} [threadViewportRange] EventContextUpdate threadViewportRange
     * @property {Array.<string>|null} [commentViewportRange] EventContextUpdate commentViewportRange
     */

    /**
     * Constructs a new EventContextUpdate.
     * @exports EventContextUpdate
     * @classdesc Represents an EventContextUpdate.
     * @implements IEventContextUpdate
     * @constructor
     * @param {IEventContextUpdate=} [properties] Properties to set
     */
    function EventContextUpdate(properties) {
        this.threadViewportRange = [];
        this.commentViewportRange = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EventContextUpdate createdAt.
     * @member {number} createdAt
     * @memberof EventContextUpdate
     * @instance
     */
    EventContextUpdate.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * EventContextUpdate threadViewportRange.
     * @member {Array.<string>} threadViewportRange
     * @memberof EventContextUpdate
     * @instance
     */
    EventContextUpdate.prototype.threadViewportRange = $util.emptyArray;

    /**
     * EventContextUpdate commentViewportRange.
     * @member {Array.<string>} commentViewportRange
     * @memberof EventContextUpdate
     * @instance
     */
    EventContextUpdate.prototype.commentViewportRange = $util.emptyArray;

    /**
     * Creates a new EventContextUpdate instance using the specified properties.
     * @function create
     * @memberof EventContextUpdate
     * @static
     * @param {IEventContextUpdate=} [properties] Properties to set
     * @returns {EventContextUpdate} EventContextUpdate instance
     */
    EventContextUpdate.create = function create(properties) {
        return new EventContextUpdate(properties);
    };

    /**
     * Encodes the specified EventContextUpdate message. Does not implicitly {@link EventContextUpdate.verify|verify} messages.
     * @function encode
     * @memberof EventContextUpdate
     * @static
     * @param {IEventContextUpdate} message EventContextUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventContextUpdate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.createdAt);
        if (message.threadViewportRange != null && message.threadViewportRange.length)
            for (var i = 0; i < message.threadViewportRange.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.threadViewportRange[i]);
        if (message.commentViewportRange != null && message.commentViewportRange.length)
            for (var i = 0; i < message.commentViewportRange.length; ++i)
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.commentViewportRange[i]);
        return writer;
    };

    /**
     * Encodes the specified EventContextUpdate message, length delimited. Does not implicitly {@link EventContextUpdate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EventContextUpdate
     * @static
     * @param {IEventContextUpdate} message EventContextUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EventContextUpdate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EventContextUpdate message from the specified reader or buffer.
     * @function decode
     * @memberof EventContextUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EventContextUpdate} EventContextUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventContextUpdate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.EventContextUpdate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.createdAt = reader.int64();
                break;
            case 2:
                if (!(message.threadViewportRange && message.threadViewportRange.length))
                    message.threadViewportRange = [];
                message.threadViewportRange.push(reader.string());
                break;
            case 3:
                if (!(message.commentViewportRange && message.commentViewportRange.length))
                    message.commentViewportRange = [];
                message.commentViewportRange.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EventContextUpdate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EventContextUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EventContextUpdate} EventContextUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EventContextUpdate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EventContextUpdate message.
     * @function verify
     * @memberof EventContextUpdate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EventContextUpdate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                return "createdAt: integer|Long expected";
        if (message.threadViewportRange != null && message.hasOwnProperty("threadViewportRange")) {
            if (!Array.isArray(message.threadViewportRange))
                return "threadViewportRange: array expected";
            for (var i = 0; i < message.threadViewportRange.length; ++i)
                if (!$util.isString(message.threadViewportRange[i]))
                    return "threadViewportRange: string[] expected";
        }
        if (message.commentViewportRange != null && message.hasOwnProperty("commentViewportRange")) {
            if (!Array.isArray(message.commentViewportRange))
                return "commentViewportRange: array expected";
            for (var i = 0; i < message.commentViewportRange.length; ++i)
                if (!$util.isString(message.commentViewportRange[i]))
                    return "commentViewportRange: string[] expected";
        }
        return null;
    };

    /**
     * Creates an EventContextUpdate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EventContextUpdate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EventContextUpdate} EventContextUpdate
     */
    EventContextUpdate.fromObject = function fromObject(object) {
        if (object instanceof $root.EventContextUpdate)
            return object;
        var message = new $root.EventContextUpdate();
        if (object.createdAt != null)
            if ($util.Long)
                (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
            else if (typeof object.createdAt === "string")
                message.createdAt = parseInt(object.createdAt, 10);
            else if (typeof object.createdAt === "number")
                message.createdAt = object.createdAt;
            else if (typeof object.createdAt === "object")
                message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
        if (object.threadViewportRange) {
            if (!Array.isArray(object.threadViewportRange))
                throw TypeError(".EventContextUpdate.threadViewportRange: array expected");
            message.threadViewportRange = [];
            for (var i = 0; i < object.threadViewportRange.length; ++i)
                message.threadViewportRange[i] = String(object.threadViewportRange[i]);
        }
        if (object.commentViewportRange) {
            if (!Array.isArray(object.commentViewportRange))
                throw TypeError(".EventContextUpdate.commentViewportRange: array expected");
            message.commentViewportRange = [];
            for (var i = 0; i < object.commentViewportRange.length; ++i)
                message.commentViewportRange[i] = String(object.commentViewportRange[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from an EventContextUpdate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EventContextUpdate
     * @static
     * @param {EventContextUpdate} message EventContextUpdate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EventContextUpdate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.threadViewportRange = [];
            object.commentViewportRange = [];
        }
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdAt = options.longs === String ? "0" : 0;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (typeof message.createdAt === "number")
                object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
            else
                object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
        if (message.threadViewportRange && message.threadViewportRange.length) {
            object.threadViewportRange = [];
            for (var j = 0; j < message.threadViewportRange.length; ++j)
                object.threadViewportRange[j] = message.threadViewportRange[j];
        }
        if (message.commentViewportRange && message.commentViewportRange.length) {
            object.commentViewportRange = [];
            for (var j = 0; j < message.commentViewportRange.length; ++j)
                object.commentViewportRange[j] = message.commentViewportRange[j];
        }
        return object;
    };

    /**
     * Converts this EventContextUpdate to JSON.
     * @function toJSON
     * @memberof EventContextUpdate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EventContextUpdate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EventContextUpdate;
})();

$root.Error = (function() {

    /**
     * Properties of an Error.
     * @exports IError
     * @interface IError
     * @property {string|null} [message] Error message
     * @property {number|null} [code] Error code
     */

    /**
     * Constructs a new Error.
     * @exports Error
     * @classdesc Represents an Error.
     * @implements IError
     * @constructor
     * @param {IError=} [properties] Properties to set
     */
    function Error(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Error message.
     * @member {string} message
     * @memberof Error
     * @instance
     */
    Error.prototype.message = "";

    /**
     * Error code.
     * @member {number} code
     * @memberof Error
     * @instance
     */
    Error.prototype.code = 0;

    /**
     * Creates a new Error instance using the specified properties.
     * @function create
     * @memberof Error
     * @static
     * @param {IError=} [properties] Properties to set
     * @returns {Error} Error instance
     */
    Error.create = function create(properties) {
        return new Error(properties);
    };

    /**
     * Encodes the specified Error message. Does not implicitly {@link Error.verify|verify} messages.
     * @function encode
     * @memberof Error
     * @static
     * @param {IError} message Error message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Error.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
        return writer;
    };

    /**
     * Encodes the specified Error message, length delimited. Does not implicitly {@link Error.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Error
     * @static
     * @param {IError} message Error message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Error.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Error message from the specified reader or buffer.
     * @function decode
     * @memberof Error
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Error} Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Error.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Error();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.message = reader.string();
                break;
            case 2:
                message.code = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Error message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Error
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Error} Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Error.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Error message.
     * @function verify
     * @memberof Error
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Error.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code))
                return "code: integer expected";
        return null;
    };

    /**
     * Creates an Error message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Error
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Error} Error
     */
    Error.fromObject = function fromObject(object) {
        if (object instanceof $root.Error)
            return object;
        var message = new $root.Error();
        if (object.message != null)
            message.message = String(object.message);
        if (object.code != null)
            message.code = object.code | 0;
        return message;
    };

    /**
     * Creates a plain object from an Error message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Error
     * @static
     * @param {Error} message Error
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Error.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.message = "";
            object.code = 0;
        }
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        return object;
    };

    /**
     * Converts this Error to JSON.
     * @function toJSON
     * @memberof Error
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Error.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Error;
})();

module.exports = $root;
