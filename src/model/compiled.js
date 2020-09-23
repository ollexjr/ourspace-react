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
     * @property {Array.<IUserSubscription>|null} [subscriptions] AccountState subscriptions
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
     * @member {Array.<IUserSubscription>} subscriptions
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
                $root.UserSubscription.encode(message.subscriptions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                message.subscriptions.push($root.UserSubscription.decode(reader, reader.uint32()));
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
                var error = $root.UserSubscription.verify(message.subscriptions[i]);
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
                message.subscriptions[i] = $root.UserSubscription.fromObject(object.subscriptions[i]);
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
                object.subscriptions[j] = $root.UserSubscription.toObject(message.subscriptions[j], options);
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

$root.ThreadCreate = (function() {

    /**
     * Properties of a ThreadCreate.
     * @exports IThreadCreate
     * @interface IThreadCreate
     * @property {string|null} [title] ThreadCreate title
     * @property {string|null} [link] ThreadCreate link
     * @property {string|null} [content] ThreadCreate content
     * @property {number|null} [createdAtHint] ThreadCreate createdAtHint
     */

    /**
     * Constructs a new ThreadCreate.
     * @exports ThreadCreate
     * @classdesc Represents a ThreadCreate.
     * @implements IThreadCreate
     * @constructor
     * @param {IThreadCreate=} [properties] Properties to set
     */
    function ThreadCreate(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ThreadCreate title.
     * @member {string} title
     * @memberof ThreadCreate
     * @instance
     */
    ThreadCreate.prototype.title = "";

    /**
     * ThreadCreate link.
     * @member {string} link
     * @memberof ThreadCreate
     * @instance
     */
    ThreadCreate.prototype.link = "";

    /**
     * ThreadCreate content.
     * @member {string} content
     * @memberof ThreadCreate
     * @instance
     */
    ThreadCreate.prototype.content = "";

    /**
     * ThreadCreate createdAtHint.
     * @member {number} createdAtHint
     * @memberof ThreadCreate
     * @instance
     */
    ThreadCreate.prototype.createdAtHint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ThreadCreate instance using the specified properties.
     * @function create
     * @memberof ThreadCreate
     * @static
     * @param {IThreadCreate=} [properties] Properties to set
     * @returns {ThreadCreate} ThreadCreate instance
     */
    ThreadCreate.create = function create(properties) {
        return new ThreadCreate(properties);
    };

    /**
     * Encodes the specified ThreadCreate message. Does not implicitly {@link ThreadCreate.verify|verify} messages.
     * @function encode
     * @memberof ThreadCreate
     * @static
     * @param {IThreadCreate} message ThreadCreate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThreadCreate.encode = function encode(message, writer) {
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
        return writer;
    };

    /**
     * Encodes the specified ThreadCreate message, length delimited. Does not implicitly {@link ThreadCreate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ThreadCreate
     * @static
     * @param {IThreadCreate} message ThreadCreate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ThreadCreate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ThreadCreate message from the specified reader or buffer.
     * @function decode
     * @memberof ThreadCreate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ThreadCreate} ThreadCreate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThreadCreate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ThreadCreate();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
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
     * Decodes a ThreadCreate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ThreadCreate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ThreadCreate} ThreadCreate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ThreadCreate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ThreadCreate message.
     * @function verify
     * @memberof ThreadCreate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ThreadCreate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
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
     * Creates a ThreadCreate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ThreadCreate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ThreadCreate} ThreadCreate
     */
    ThreadCreate.fromObject = function fromObject(object) {
        if (object instanceof $root.ThreadCreate)
            return object;
        var message = new $root.ThreadCreate();
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
     * Creates a plain object from a ThreadCreate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ThreadCreate
     * @static
     * @param {ThreadCreate} message ThreadCreate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ThreadCreate.toObject = function toObject(message, options) {
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
        return object;
    };

    /**
     * Converts this ThreadCreate to JSON.
     * @function toJSON
     * @memberof ThreadCreate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ThreadCreate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ThreadCreate;
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

$root.BanInfo = (function() {

    /**
     * Properties of a BanInfo.
     * @exports IBanInfo
     * @interface IBanInfo
     * @property {string|null} [bannedBy] BanInfo bannedBy
     * @property {string|null} [banReason] BanInfo banReason
     * @property {string|null} [approvedBy] BanInfo approvedBy
     * @property {string|null} [createdAt] BanInfo createdAt
     * @property {string|null} [reportId] BanInfo reportId
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
     * BanInfo reportId.
     * @member {string} reportId
     * @memberof BanInfo
     * @instance
     */
    BanInfo.prototype.reportId = "";

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
        if (message.reportId != null && Object.hasOwnProperty.call(message, "reportId"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.reportId);
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
                message.reportId = reader.string();
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
        if (message.reportId != null && message.hasOwnProperty("reportId"))
            if (!$util.isString(message.reportId))
                return "reportId: string expected";
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
        if (object.reportId != null)
            message.reportId = String(object.reportId);
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
            object.reportId = "";
        }
        if (message.bannedBy != null && message.hasOwnProperty("bannedBy"))
            object.bannedBy = message.bannedBy;
        if (message.approvedBy != null && message.hasOwnProperty("approvedBy"))
            object.approvedBy = message.approvedBy;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            object.createdAt = message.createdAt;
        if (message.banReason != null && message.hasOwnProperty("banReason"))
            object.banReason = message.banReason;
        if (message.reportId != null && message.hasOwnProperty("reportId"))
            object.reportId = message.reportId;
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
        if (options.defaults)
            object.vote = "";
        if (message.vote != null && message.hasOwnProperty("vote"))
            object.vote = message.vote;
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
        if (options.defaults)
            object.vote = "";
        if (message.vote != null && message.hasOwnProperty("vote"))
            object.vote = message.vote;
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
     * @property {IUserRef|null} [user] Comment user
     * @property {string|null} [content] Comment content
     * @property {number|null} [createdAt] Comment createdAt
     * @property {Array.<IComment>|null} [commentEdits] Comment commentEdits
     * @property {Array.<IBanInfo>|null} [mod] Comment mod
     * @property {Object.<string,number>|null} [votes] Comment votes
     * @property {ICommentActionedContext|null} [me] Comment me
     * @property {number|null} [depth] Comment depth
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
     * @member {IUserRef|null|undefined} user
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
     * Comment depth.
     * @member {number} depth
     * @memberof Comment
     * @instance
     */
    Comment.prototype.depth = 0;

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
        if (message.user != null && Object.hasOwnProperty.call(message, "user"))
            $root.UserRef.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.createdAt);
        if (message.commentEdits != null && message.commentEdits.length)
            for (var i = 0; i < message.commentEdits.length; ++i)
                $root.Comment.encode(message.commentEdits[i], writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
        if (message.mod != null && message.mod.length)
            for (var i = 0; i < message.mod.length; ++i)
                $root.BanInfo.encode(message.mod[i], writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
        if (message.votes != null && Object.hasOwnProperty.call(message, "votes"))
            for (var keys = Object.keys(message.votes), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 21, wireType 2 =*/170).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.votes[keys[i]]).ldelim();
        if (message.me != null && Object.hasOwnProperty.call(message, "me"))
            $root.CommentActionedContext.encode(message.me, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
        if (message.depth != null && Object.hasOwnProperty.call(message, "depth"))
            writer.uint32(/* id 23, wireType 0 =*/184).int32(message.depth);
        if (message.parentId != null && Object.hasOwnProperty.call(message, "parentId"))
            writer.uint32(/* id 99, wireType 2 =*/794).string(message.parentId);
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
            case 99:
                message.parentId = reader.string();
                break;
            case 2:
                message.user = $root.UserRef.decode(reader, reader.uint32());
                break;
            case 3:
                message.content = reader.string();
                break;
            case 4:
                message.createdAt = reader.int64();
                break;
            case 19:
                if (!(message.commentEdits && message.commentEdits.length))
                    message.commentEdits = [];
                message.commentEdits.push($root.Comment.decode(reader, reader.uint32()));
                break;
            case 20:
                if (!(message.mod && message.mod.length))
                    message.mod = [];
                message.mod.push($root.BanInfo.decode(reader, reader.uint32()));
                break;
            case 21:
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
            case 22:
                message.me = $root.CommentActionedContext.decode(reader, reader.uint32());
                break;
            case 23:
                message.depth = reader.int32();
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
            var error = $root.UserRef.verify(message.user);
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
        if (message.depth != null && message.hasOwnProperty("depth"))
            if (!$util.isInteger(message.depth))
                return "depth: integer expected";
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
            message.user = $root.UserRef.fromObject(object.user);
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
        if (object.depth != null)
            message.depth = object.depth | 0;
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
            object.user = null;
            object.content = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdAt = options.longs === String ? "0" : 0;
            object.me = null;
            object.depth = 0;
            object.parentId = "";
        }
        if (message.uId != null && message.hasOwnProperty("uId"))
            object.uId = message.uId;
        if (message.user != null && message.hasOwnProperty("user"))
            object.user = $root.UserRef.toObject(message.user, options);
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
        if (message.depth != null && message.hasOwnProperty("depth"))
            object.depth = message.depth;
        if (message.parentId != null && message.hasOwnProperty("parentId"))
            object.parentId = message.parentId;
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

$root.Board = (function() {

    /**
     * Properties of a Board.
     * @exports IBoard
     * @interface IBoard
     * @property {number|null} [members] Board members
     * @property {number|null} [moderators] Board moderators
     * @property {string|null} [rules] Board rules
     * @property {string|null} [description] Board description
     * @property {number|null} [createdAt] Board createdAt
     * @property {Array.<IUserRef>|null} [preview] Board preview
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
     * Board members.
     * @member {number} members
     * @memberof Board
     * @instance
     */
    Board.prototype.members = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Board moderators.
     * @member {number} moderators
     * @memberof Board
     * @instance
     */
    Board.prototype.moderators = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Board rules.
     * @member {string} rules
     * @memberof Board
     * @instance
     */
    Board.prototype.rules = "";

    /**
     * Board description.
     * @member {string} description
     * @memberof Board
     * @instance
     */
    Board.prototype.description = "";

    /**
     * Board createdAt.
     * @member {number} createdAt
     * @memberof Board
     * @instance
     */
    Board.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Board preview.
     * @member {Array.<IUserRef>} preview
     * @memberof Board
     * @instance
     */
    Board.prototype.preview = $util.emptyArray;

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
        if (message.members != null && Object.hasOwnProperty.call(message, "members"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.members);
        if (message.moderators != null && Object.hasOwnProperty.call(message, "moderators"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.moderators);
        if (message.rules != null && Object.hasOwnProperty.call(message, "rules"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.rules);
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.createdAt);
        if (message.preview != null && message.preview.length)
            for (var i = 0; i < message.preview.length; ++i)
                $root.UserRef.encode(message.preview[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.isModerator != null && Object.hasOwnProperty.call(message, "isModerator"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isModerator);
        if (message.isMember != null && Object.hasOwnProperty.call(message, "isMember"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.isMember);
        if (message.lockType != null && Object.hasOwnProperty.call(message, "lockType"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.lockType);
        if (message.description != null && Object.hasOwnProperty.call(message, "description"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.description);
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
                message.members = reader.int64();
                break;
            case 2:
                message.moderators = reader.int64();
                break;
            case 3:
                message.rules = reader.string();
                break;
            case 9:
                message.description = reader.string();
                break;
            case 4:
                message.createdAt = reader.int64();
                break;
            case 5:
                if (!(message.preview && message.preview.length))
                    message.preview = [];
                message.preview.push($root.UserRef.decode(reader, reader.uint32()));
                break;
            case 6:
                message.isModerator = reader.bool();
                break;
            case 7:
                message.isMember = reader.bool();
                break;
            case 8:
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
        if (message.members != null && message.hasOwnProperty("members"))
            if (!$util.isInteger(message.members) && !(message.members && $util.isInteger(message.members.low) && $util.isInteger(message.members.high)))
                return "members: integer|Long expected";
        if (message.moderators != null && message.hasOwnProperty("moderators"))
            if (!$util.isInteger(message.moderators) && !(message.moderators && $util.isInteger(message.moderators.low) && $util.isInteger(message.moderators.high)))
                return "moderators: integer|Long expected";
        if (message.rules != null && message.hasOwnProperty("rules"))
            if (!$util.isString(message.rules))
                return "rules: string expected";
        if (message.description != null && message.hasOwnProperty("description"))
            if (!$util.isString(message.description))
                return "description: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                return "createdAt: integer|Long expected";
        if (message.preview != null && message.hasOwnProperty("preview")) {
            if (!Array.isArray(message.preview))
                return "preview: array expected";
            for (var i = 0; i < message.preview.length; ++i) {
                var error = $root.UserRef.verify(message.preview[i]);
                if (error)
                    return "preview." + error;
            }
        }
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
        if (object.members != null)
            if ($util.Long)
                (message.members = $util.Long.fromValue(object.members)).unsigned = false;
            else if (typeof object.members === "string")
                message.members = parseInt(object.members, 10);
            else if (typeof object.members === "number")
                message.members = object.members;
            else if (typeof object.members === "object")
                message.members = new $util.LongBits(object.members.low >>> 0, object.members.high >>> 0).toNumber();
        if (object.moderators != null)
            if ($util.Long)
                (message.moderators = $util.Long.fromValue(object.moderators)).unsigned = false;
            else if (typeof object.moderators === "string")
                message.moderators = parseInt(object.moderators, 10);
            else if (typeof object.moderators === "number")
                message.moderators = object.moderators;
            else if (typeof object.moderators === "object")
                message.moderators = new $util.LongBits(object.moderators.low >>> 0, object.moderators.high >>> 0).toNumber();
        if (object.rules != null)
            message.rules = String(object.rules);
        if (object.description != null)
            message.description = String(object.description);
        if (object.createdAt != null)
            if ($util.Long)
                (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
            else if (typeof object.createdAt === "string")
                message.createdAt = parseInt(object.createdAt, 10);
            else if (typeof object.createdAt === "number")
                message.createdAt = object.createdAt;
            else if (typeof object.createdAt === "object")
                message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
        if (object.preview) {
            if (!Array.isArray(object.preview))
                throw TypeError(".Board.preview: array expected");
            message.preview = [];
            for (var i = 0; i < object.preview.length; ++i) {
                if (typeof object.preview[i] !== "object")
                    throw TypeError(".Board.preview: object expected");
                message.preview[i] = $root.UserRef.fromObject(object.preview[i]);
            }
        }
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
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.members = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.members = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.moderators = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.moderators = options.longs === String ? "0" : 0;
            object.rules = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdAt = options.longs === String ? "0" : 0;
            object.isModerator = false;
            object.isMember = false;
            object.lockType = 0;
            object.description = "";
        }
        if (message.members != null && message.hasOwnProperty("members"))
            if (typeof message.members === "number")
                object.members = options.longs === String ? String(message.members) : message.members;
            else
                object.members = options.longs === String ? $util.Long.prototype.toString.call(message.members) : options.longs === Number ? new $util.LongBits(message.members.low >>> 0, message.members.high >>> 0).toNumber() : message.members;
        if (message.moderators != null && message.hasOwnProperty("moderators"))
            if (typeof message.moderators === "number")
                object.moderators = options.longs === String ? String(message.moderators) : message.moderators;
            else
                object.moderators = options.longs === String ? $util.Long.prototype.toString.call(message.moderators) : options.longs === Number ? new $util.LongBits(message.moderators.low >>> 0, message.moderators.high >>> 0).toNumber() : message.moderators;
        if (message.rules != null && message.hasOwnProperty("rules"))
            object.rules = message.rules;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (typeof message.createdAt === "number")
                object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
            else
                object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
        if (message.preview && message.preview.length) {
            object.preview = [];
            for (var j = 0; j < message.preview.length; ++j)
                object.preview[j] = $root.UserRef.toObject(message.preview[j], options);
        }
        if (message.isModerator != null && message.hasOwnProperty("isModerator"))
            object.isModerator = message.isModerator;
        if (message.isMember != null && message.hasOwnProperty("isMember"))
            object.isMember = message.isMember;
        if (message.lockType != null && message.hasOwnProperty("lockType"))
            object.lockType = message.lockType;
        if (message.description != null && message.hasOwnProperty("description"))
            object.description = message.description;
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

$root.Thread = (function() {

    /**
     * Properties of a Thread.
     * @exports IThread
     * @interface IThread
     * @property {string|null} [url] Thread url
     * @property {string|null} [uId] Thread uId
     * @property {number|null} [type] Thread type
     * @property {string|null} [title] Thread title
     * @property {string|null} [link] Thread link
     * @property {string|null} [content] Thread content
     * @property {IUserRef|null} [user] Thread user
     * @property {number|null} [createdAt] Thread createdAt
     * @property {string|null} [boardId] Thread boardId
     * @property {boolean|null} [isKicked] Thread isKicked
     * @property {boolean|null} [isLocked] Thread isLocked
     * @property {boolean|null} [isArchived] Thread isArchived
     * @property {number|null} [up] Thread up
     * @property {number|null} [down] Thread down
     * @property {Array.<IVote>|null} [votes] Thread votes
     * @property {Array.<string>|null} [acceptedVotes] Thread acceptedVotes
     * @property {Array.<string>|null} [acceptedCommentVotes] Thread acceptedCommentVotes
     * @property {Array.<IBanInfo>|null} [mod] Thread mod
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
        this.votes = [];
        this.acceptedVotes = [];
        this.acceptedCommentVotes = [];
        this.mod = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Thread url.
     * @member {string} url
     * @memberof Thread
     * @instance
     */
    Thread.prototype.url = "";

    /**
     * Thread uId.
     * @member {string} uId
     * @memberof Thread
     * @instance
     */
    Thread.prototype.uId = "";

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
     * Thread content.
     * @member {string} content
     * @memberof Thread
     * @instance
     */
    Thread.prototype.content = "";

    /**
     * Thread user.
     * @member {IUserRef|null|undefined} user
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
     * Thread up.
     * @member {number} up
     * @memberof Thread
     * @instance
     */
    Thread.prototype.up = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Thread down.
     * @member {number} down
     * @memberof Thread
     * @instance
     */
    Thread.prototype.down = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Thread votes.
     * @member {Array.<IVote>} votes
     * @memberof Thread
     * @instance
     */
    Thread.prototype.votes = $util.emptyArray;

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
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.type);
        if (message.title != null && Object.hasOwnProperty.call(message, "title"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
        if (message.link != null && Object.hasOwnProperty.call(message, "link"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.link);
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.content);
        if (message.user != null && Object.hasOwnProperty.call(message, "user"))
            $root.UserRef.encode(message.user, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.createdAt);
        if (message.boardId != null && Object.hasOwnProperty.call(message, "boardId"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.boardId);
        if (message.isLocked != null && Object.hasOwnProperty.call(message, "isLocked"))
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.isLocked);
        if (message.isArchived != null && Object.hasOwnProperty.call(message, "isArchived"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.isArchived);
        if (message.up != null && Object.hasOwnProperty.call(message, "up"))
            writer.uint32(/* id 11, wireType 0 =*/88).int64(message.up);
        if (message.down != null && Object.hasOwnProperty.call(message, "down"))
            writer.uint32(/* id 12, wireType 0 =*/96).int64(message.down);
        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.url);
        if (message.isKicked != null && Object.hasOwnProperty.call(message, "isKicked"))
            writer.uint32(/* id 14, wireType 0 =*/112).bool(message.isKicked);
        if (message.mod != null && message.mod.length)
            for (var i = 0; i < message.mod.length; ++i)
                $root.BanInfo.encode(message.mod[i], writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
        if (message.votes != null && message.votes.length)
            for (var i = 0; i < message.votes.length; ++i)
                $root.Vote.encode(message.votes[i], writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
        if (message.me != null && Object.hasOwnProperty.call(message, "me"))
            $root.ThreadActionedContext.encode(message.me, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
        if (message.acceptedVotes != null && message.acceptedVotes.length)
            for (var i = 0; i < message.acceptedVotes.length; ++i)
                writer.uint32(/* id 40, wireType 2 =*/322).string(message.acceptedVotes[i]);
        if (message.acceptedCommentVotes != null && message.acceptedCommentVotes.length)
            for (var i = 0; i < message.acceptedCommentVotes.length; ++i)
                writer.uint32(/* id 41, wireType 2 =*/330).string(message.acceptedCommentVotes[i]);
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Thread();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 13:
                message.url = reader.string();
                break;
            case 1:
                message.uId = reader.string();
                break;
            case 2:
                message.type = reader.uint32();
                break;
            case 3:
                message.title = reader.string();
                break;
            case 4:
                message.link = reader.string();
                break;
            case 5:
                message.content = reader.string();
                break;
            case 6:
                message.user = $root.UserRef.decode(reader, reader.uint32());
                break;
            case 7:
                message.createdAt = reader.int64();
                break;
            case 8:
                message.boardId = reader.string();
                break;
            case 14:
                message.isKicked = reader.bool();
                break;
            case 9:
                message.isLocked = reader.bool();
                break;
            case 10:
                message.isArchived = reader.bool();
                break;
            case 11:
                message.up = reader.int64();
                break;
            case 12:
                message.down = reader.int64();
                break;
            case 21:
                if (!(message.votes && message.votes.length))
                    message.votes = [];
                message.votes.push($root.Vote.decode(reader, reader.uint32()));
                break;
            case 40:
                if (!(message.acceptedVotes && message.acceptedVotes.length))
                    message.acceptedVotes = [];
                message.acceptedVotes.push(reader.string());
                break;
            case 41:
                if (!(message.acceptedCommentVotes && message.acceptedCommentVotes.length))
                    message.acceptedCommentVotes = [];
                message.acceptedCommentVotes.push(reader.string());
                break;
            case 20:
                if (!(message.mod && message.mod.length))
                    message.mod = [];
                message.mod.push($root.BanInfo.decode(reader, reader.uint32()));
                break;
            case 22:
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
        if (message.url != null && message.hasOwnProperty("url"))
            if (!$util.isString(message.url))
                return "url: string expected";
        if (message.uId != null && message.hasOwnProperty("uId"))
            if (!$util.isString(message.uId))
                return "uId: string expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isInteger(message.type))
                return "type: integer expected";
        if (message.title != null && message.hasOwnProperty("title"))
            if (!$util.isString(message.title))
                return "title: string expected";
        if (message.link != null && message.hasOwnProperty("link"))
            if (!$util.isString(message.link))
                return "link: string expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.user != null && message.hasOwnProperty("user")) {
            var error = $root.UserRef.verify(message.user);
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
        if (message.up != null && message.hasOwnProperty("up"))
            if (!$util.isInteger(message.up) && !(message.up && $util.isInteger(message.up.low) && $util.isInteger(message.up.high)))
                return "up: integer|Long expected";
        if (message.down != null && message.hasOwnProperty("down"))
            if (!$util.isInteger(message.down) && !(message.down && $util.isInteger(message.down.low) && $util.isInteger(message.down.high)))
                return "down: integer|Long expected";
        if (message.votes != null && message.hasOwnProperty("votes")) {
            if (!Array.isArray(message.votes))
                return "votes: array expected";
            for (var i = 0; i < message.votes.length; ++i) {
                var error = $root.Vote.verify(message.votes[i]);
                if (error)
                    return "votes." + error;
            }
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
        if (object.url != null)
            message.url = String(object.url);
        if (object.uId != null)
            message.uId = String(object.uId);
        if (object.type != null)
            message.type = object.type >>> 0;
        if (object.title != null)
            message.title = String(object.title);
        if (object.link != null)
            message.link = String(object.link);
        if (object.content != null)
            message.content = String(object.content);
        if (object.user != null) {
            if (typeof object.user !== "object")
                throw TypeError(".Thread.user: object expected");
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
        if (object.boardId != null)
            message.boardId = String(object.boardId);
        if (object.isKicked != null)
            message.isKicked = Boolean(object.isKicked);
        if (object.isLocked != null)
            message.isLocked = Boolean(object.isLocked);
        if (object.isArchived != null)
            message.isArchived = Boolean(object.isArchived);
        if (object.up != null)
            if ($util.Long)
                (message.up = $util.Long.fromValue(object.up)).unsigned = false;
            else if (typeof object.up === "string")
                message.up = parseInt(object.up, 10);
            else if (typeof object.up === "number")
                message.up = object.up;
            else if (typeof object.up === "object")
                message.up = new $util.LongBits(object.up.low >>> 0, object.up.high >>> 0).toNumber();
        if (object.down != null)
            if ($util.Long)
                (message.down = $util.Long.fromValue(object.down)).unsigned = false;
            else if (typeof object.down === "string")
                message.down = parseInt(object.down, 10);
            else if (typeof object.down === "number")
                message.down = object.down;
            else if (typeof object.down === "object")
                message.down = new $util.LongBits(object.down.low >>> 0, object.down.high >>> 0).toNumber();
        if (object.votes) {
            if (!Array.isArray(object.votes))
                throw TypeError(".Thread.votes: array expected");
            message.votes = [];
            for (var i = 0; i < object.votes.length; ++i) {
                if (typeof object.votes[i] !== "object")
                    throw TypeError(".Thread.votes: object expected");
                message.votes[i] = $root.Vote.fromObject(object.votes[i]);
            }
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
            object.mod = [];
            object.votes = [];
            object.acceptedVotes = [];
            object.acceptedCommentVotes = [];
        }
        if (options.defaults) {
            object.uId = "";
            object.type = 0;
            object.title = "";
            object.link = "";
            object.content = "";
            object.user = null;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.createdAt = options.longs === String ? "0" : 0;
            object.boardId = "";
            object.isLocked = false;
            object.isArchived = false;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.up = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.up = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.down = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.down = options.longs === String ? "0" : 0;
            object.url = "";
            object.isKicked = false;
            object.me = null;
        }
        if (message.uId != null && message.hasOwnProperty("uId"))
            object.uId = message.uId;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.title != null && message.hasOwnProperty("title"))
            object.title = message.title;
        if (message.link != null && message.hasOwnProperty("link"))
            object.link = message.link;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.user != null && message.hasOwnProperty("user"))
            object.user = $root.UserRef.toObject(message.user, options);
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (typeof message.createdAt === "number")
                object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
            else
                object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
        if (message.boardId != null && message.hasOwnProperty("boardId"))
            object.boardId = message.boardId;
        if (message.isLocked != null && message.hasOwnProperty("isLocked"))
            object.isLocked = message.isLocked;
        if (message.isArchived != null && message.hasOwnProperty("isArchived"))
            object.isArchived = message.isArchived;
        if (message.up != null && message.hasOwnProperty("up"))
            if (typeof message.up === "number")
                object.up = options.longs === String ? String(message.up) : message.up;
            else
                object.up = options.longs === String ? $util.Long.prototype.toString.call(message.up) : options.longs === Number ? new $util.LongBits(message.up.low >>> 0, message.up.high >>> 0).toNumber() : message.up;
        if (message.down != null && message.hasOwnProperty("down"))
            if (typeof message.down === "number")
                object.down = options.longs === String ? String(message.down) : message.down;
            else
                object.down = options.longs === String ? $util.Long.prototype.toString.call(message.down) : options.longs === Number ? new $util.LongBits(message.down.low >>> 0, message.down.high >>> 0).toNumber() : message.down;
        if (message.url != null && message.hasOwnProperty("url"))
            object.url = message.url;
        if (message.isKicked != null && message.hasOwnProperty("isKicked"))
            object.isKicked = message.isKicked;
        if (message.mod && message.mod.length) {
            object.mod = [];
            for (var j = 0; j < message.mod.length; ++j)
                object.mod[j] = $root.BanInfo.toObject(message.mod[j], options);
        }
        if (message.votes && message.votes.length) {
            object.votes = [];
            for (var j = 0; j < message.votes.length; ++j)
                object.votes[j] = $root.Vote.toObject(message.votes[j], options);
        }
        if (message.me != null && message.hasOwnProperty("me"))
            object.me = $root.ThreadActionedContext.toObject(message.me, options);
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

$root.ThreadSelectFilters = (function() {

    /**
     * Properties of a ThreadSelectFilters.
     * @exports IThreadSelectFilters
     * @interface IThreadSelectFilters
     * @property {string|null} [rankMethod] ThreadSelectFilters rankMethod
     * @property {number|null} [createdStart] ThreadSelectFilters createdStart
     * @property {number|null} [createdEnd] ThreadSelectFilters createdEnd
     * @property {string|null} [sortDirection] ThreadSelectFilters sortDirection
     * @property {string|null} [token] ThreadSelectFilters token
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
     * @member {string} rankMethod
     * @memberof ThreadSelectFilters
     * @instance
     */
    ThreadSelectFilters.prototype.rankMethod = "";

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
     * ThreadSelectFilters sortDirection.
     * @member {string} sortDirection
     * @memberof ThreadSelectFilters
     * @instance
     */
    ThreadSelectFilters.prototype.sortDirection = "";

    /**
     * ThreadSelectFilters token.
     * @member {string} token
     * @memberof ThreadSelectFilters
     * @instance
     */
    ThreadSelectFilters.prototype.token = "";

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
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.rankMethod);
        if (message.createdStart != null && Object.hasOwnProperty.call(message, "createdStart"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.createdStart);
        if (message.createdEnd != null && Object.hasOwnProperty.call(message, "createdEnd"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.createdEnd);
        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.token);
        if (message.sortDirection != null && Object.hasOwnProperty.call(message, "sortDirection"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.sortDirection);
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
                message.rankMethod = reader.string();
                break;
            case 2:
                message.createdStart = reader.int64();
                break;
            case 3:
                message.createdEnd = reader.int64();
                break;
            case 5:
                message.sortDirection = reader.string();
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
            if (!$util.isString(message.rankMethod))
                return "rankMethod: string expected";
        if (message.createdStart != null && message.hasOwnProperty("createdStart"))
            if (!$util.isInteger(message.createdStart) && !(message.createdStart && $util.isInteger(message.createdStart.low) && $util.isInteger(message.createdStart.high)))
                return "createdStart: integer|Long expected";
        if (message.createdEnd != null && message.hasOwnProperty("createdEnd"))
            if (!$util.isInteger(message.createdEnd) && !(message.createdEnd && $util.isInteger(message.createdEnd.low) && $util.isInteger(message.createdEnd.high)))
                return "createdEnd: integer|Long expected";
        if (message.sortDirection != null && message.hasOwnProperty("sortDirection"))
            if (!$util.isString(message.sortDirection))
                return "sortDirection: string expected";
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
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
        if (object.rankMethod != null)
            message.rankMethod = String(object.rankMethod);
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
        if (object.sortDirection != null)
            message.sortDirection = String(object.sortDirection);
        if (object.token != null)
            message.token = String(object.token);
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
            object.rankMethod = "";
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
            object.token = "";
            object.sortDirection = "";
        }
        if (message.rankMethod != null && message.hasOwnProperty("rankMethod"))
            object.rankMethod = message.rankMethod;
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
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        if (message.sortDirection != null && message.hasOwnProperty("sortDirection"))
            object.sortDirection = message.sortDirection;
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

    return ThreadSelectFilters;
})();

$root.ThreadsSelectResponse = (function() {

    /**
     * Properties of a ThreadsSelectResponse.
     * @exports IThreadsSelectResponse
     * @interface IThreadsSelectResponse
     * @property {Array.<IThread>|null} [data] ThreadsSelectResponse data
     * @property {string|null} [token] ThreadsSelectResponse token
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
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ThreadsSelectResponse();
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
        if (options.defaults)
            object.token = "";
        if (message.data && message.data.length) {
            object.data = [];
            for (var j = 0; j < message.data.length; ++j)
                object.data[j] = $root.Thread.toObject(message.data[j], options);
        }
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
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

$root.UserSubscription = (function() {

    /**
     * Properties of a UserSubscription.
     * @exports IUserSubscription
     * @interface IUserSubscription
     * @property {string|null} [boardId] UserSubscription boardId
     * @property {number|null} [createdAt] UserSubscription createdAt
     * @property {boolean|null} [isMod] UserSubscription isMod
     * @property {boolean|null} [isOwner] UserSubscription isOwner
     */

    /**
     * Constructs a new UserSubscription.
     * @exports UserSubscription
     * @classdesc Represents a UserSubscription.
     * @implements IUserSubscription
     * @constructor
     * @param {IUserSubscription=} [properties] Properties to set
     */
    function UserSubscription(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserSubscription boardId.
     * @member {string} boardId
     * @memberof UserSubscription
     * @instance
     */
    UserSubscription.prototype.boardId = "";

    /**
     * UserSubscription createdAt.
     * @member {number} createdAt
     * @memberof UserSubscription
     * @instance
     */
    UserSubscription.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * UserSubscription isMod.
     * @member {boolean} isMod
     * @memberof UserSubscription
     * @instance
     */
    UserSubscription.prototype.isMod = false;

    /**
     * UserSubscription isOwner.
     * @member {boolean} isOwner
     * @memberof UserSubscription
     * @instance
     */
    UserSubscription.prototype.isOwner = false;

    /**
     * Creates a new UserSubscription instance using the specified properties.
     * @function create
     * @memberof UserSubscription
     * @static
     * @param {IUserSubscription=} [properties] Properties to set
     * @returns {UserSubscription} UserSubscription instance
     */
    UserSubscription.create = function create(properties) {
        return new UserSubscription(properties);
    };

    /**
     * Encodes the specified UserSubscription message. Does not implicitly {@link UserSubscription.verify|verify} messages.
     * @function encode
     * @memberof UserSubscription
     * @static
     * @param {IUserSubscription} message UserSubscription message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserSubscription.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.boardId != null && Object.hasOwnProperty.call(message, "boardId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.boardId);
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.createdAt);
        if (message.isMod != null && Object.hasOwnProperty.call(message, "isMod"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isMod);
        if (message.isOwner != null && Object.hasOwnProperty.call(message, "isOwner"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isOwner);
        return writer;
    };

    /**
     * Encodes the specified UserSubscription message, length delimited. Does not implicitly {@link UserSubscription.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserSubscription
     * @static
     * @param {IUserSubscription} message UserSubscription message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserSubscription.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserSubscription message from the specified reader or buffer.
     * @function decode
     * @memberof UserSubscription
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserSubscription} UserSubscription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserSubscription.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserSubscription();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.boardId = reader.string();
                break;
            case 2:
                message.createdAt = reader.int64();
                break;
            case 3:
                message.isMod = reader.bool();
                break;
            case 4:
                message.isOwner = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserSubscription message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserSubscription
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserSubscription} UserSubscription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserSubscription.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserSubscription message.
     * @function verify
     * @memberof UserSubscription
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserSubscription.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.boardId != null && message.hasOwnProperty("boardId"))
            if (!$util.isString(message.boardId))
                return "boardId: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                return "createdAt: integer|Long expected";
        if (message.isMod != null && message.hasOwnProperty("isMod"))
            if (typeof message.isMod !== "boolean")
                return "isMod: boolean expected";
        if (message.isOwner != null && message.hasOwnProperty("isOwner"))
            if (typeof message.isOwner !== "boolean")
                return "isOwner: boolean expected";
        return null;
    };

    /**
     * Creates a UserSubscription message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserSubscription
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserSubscription} UserSubscription
     */
    UserSubscription.fromObject = function fromObject(object) {
        if (object instanceof $root.UserSubscription)
            return object;
        var message = new $root.UserSubscription();
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
        if (object.isMod != null)
            message.isMod = Boolean(object.isMod);
        if (object.isOwner != null)
            message.isOwner = Boolean(object.isOwner);
        return message;
    };

    /**
     * Creates a plain object from a UserSubscription message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserSubscription
     * @static
     * @param {UserSubscription} message UserSubscription
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserSubscription.toObject = function toObject(message, options) {
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
            object.isMod = false;
            object.isOwner = false;
        }
        if (message.boardId != null && message.hasOwnProperty("boardId"))
            object.boardId = message.boardId;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (typeof message.createdAt === "number")
                object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
            else
                object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
        if (message.isMod != null && message.hasOwnProperty("isMod"))
            object.isMod = message.isMod;
        if (message.isOwner != null && message.hasOwnProperty("isOwner"))
            object.isOwner = message.isOwner;
        return object;
    };

    /**
     * Converts this UserSubscription to JSON.
     * @function toJSON
     * @memberof UserSubscription
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserSubscription.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UserSubscription;
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

$root.AllSort = (function() {

    /**
     * Properties of an AllSort.
     * @exports IAllSort
     * @interface IAllSort
     * @property {string|null} [sort] AllSort sort
     * @property {string|null} [createdAt] AllSort createdAt
     * @property {string|null} [createdEnd] AllSort createdEnd
     * @property {string|null} [token] AllSort token
     */

    /**
     * Constructs a new AllSort.
     * @exports AllSort
     * @classdesc Represents an AllSort.
     * @implements IAllSort
     * @constructor
     * @param {IAllSort=} [properties] Properties to set
     */
    function AllSort(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AllSort sort.
     * @member {string} sort
     * @memberof AllSort
     * @instance
     */
    AllSort.prototype.sort = "";

    /**
     * AllSort createdAt.
     * @member {string} createdAt
     * @memberof AllSort
     * @instance
     */
    AllSort.prototype.createdAt = "";

    /**
     * AllSort createdEnd.
     * @member {string} createdEnd
     * @memberof AllSort
     * @instance
     */
    AllSort.prototype.createdEnd = "";

    /**
     * AllSort token.
     * @member {string} token
     * @memberof AllSort
     * @instance
     */
    AllSort.prototype.token = "";

    /**
     * Creates a new AllSort instance using the specified properties.
     * @function create
     * @memberof AllSort
     * @static
     * @param {IAllSort=} [properties] Properties to set
     * @returns {AllSort} AllSort instance
     */
    AllSort.create = function create(properties) {
        return new AllSort(properties);
    };

    /**
     * Encodes the specified AllSort message. Does not implicitly {@link AllSort.verify|verify} messages.
     * @function encode
     * @memberof AllSort
     * @static
     * @param {IAllSort} message AllSort message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AllSort.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sort != null && Object.hasOwnProperty.call(message, "sort"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.sort);
        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
        if (message.createdEnd != null && Object.hasOwnProperty.call(message, "createdEnd"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.createdEnd);
        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.token);
        return writer;
    };

    /**
     * Encodes the specified AllSort message, length delimited. Does not implicitly {@link AllSort.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AllSort
     * @static
     * @param {IAllSort} message AllSort message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AllSort.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AllSort message from the specified reader or buffer.
     * @function decode
     * @memberof AllSort
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AllSort} AllSort
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AllSort.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AllSort();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.sort = reader.string();
                break;
            case 2:
                message.createdAt = reader.string();
                break;
            case 3:
                message.createdEnd = reader.string();
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
     * Decodes an AllSort message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AllSort
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AllSort} AllSort
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AllSort.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AllSort message.
     * @function verify
     * @memberof AllSort
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AllSort.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sort != null && message.hasOwnProperty("sort"))
            if (!$util.isString(message.sort))
                return "sort: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isString(message.createdAt))
                return "createdAt: string expected";
        if (message.createdEnd != null && message.hasOwnProperty("createdEnd"))
            if (!$util.isString(message.createdEnd))
                return "createdEnd: string expected";
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
        return null;
    };

    /**
     * Creates an AllSort message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AllSort
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AllSort} AllSort
     */
    AllSort.fromObject = function fromObject(object) {
        if (object instanceof $root.AllSort)
            return object;
        var message = new $root.AllSort();
        if (object.sort != null)
            message.sort = String(object.sort);
        if (object.createdAt != null)
            message.createdAt = String(object.createdAt);
        if (object.createdEnd != null)
            message.createdEnd = String(object.createdEnd);
        if (object.token != null)
            message.token = String(object.token);
        return message;
    };

    /**
     * Creates a plain object from an AllSort message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AllSort
     * @static
     * @param {AllSort} message AllSort
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AllSort.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.sort = "";
            object.createdAt = "";
            object.createdEnd = "";
            object.token = "";
        }
        if (message.sort != null && message.hasOwnProperty("sort"))
            object.sort = message.sort;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            object.createdAt = message.createdAt;
        if (message.createdEnd != null && message.hasOwnProperty("createdEnd"))
            object.createdEnd = message.createdEnd;
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        return object;
    };

    /**
     * Converts this AllSort to JSON.
     * @function toJSON
     * @memberof AllSort
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AllSort.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AllSort;
})();

$root.UserInBoardContext = (function() {

    /**
     * Properties of a UserInBoardContext.
     * @exports IUserInBoardContext
     * @interface IUserInBoardContext
     * @property {IUserRef|null} [user] UserInBoardContext user
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
     * @member {IUserRef|null|undefined} user
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
            $root.UserRef.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                message.user = $root.UserRef.decode(reader, reader.uint32());
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
            var error = $root.UserRef.verify(message.user);
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
            message.user = $root.UserRef.fromObject(object.user);
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
            object.user = $root.UserRef.toObject(message.user, options);
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

module.exports = $root;
