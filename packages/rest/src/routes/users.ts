import type { DataUriScheme, Integer, Snowflake } from "@nyxjs/core";
import type { RESTMakeRequestOptions } from "../globals/rest";
import type { ChannelStructure } from "../structures/channels";
import type {
	GuildMemberStructure,
	GuildStructure,
} from "../structures/guilds";
import type {
	ApplicationRoleConnectionStructure,
	ConnectionStructure,
	UserStructure,
} from "../structures/users";

/**
 * @see {@link https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection-json-params}
 */
export type UpdateCurrentUserApplicationRoleConnectionParams =
	ApplicationRoleConnectionStructure & {};

/**
 * @see {@link https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection}
 */
export function updateCurrentUserApplicationRoleConnection(
	applicationId: Snowflake,
	params: UpdateCurrentUserApplicationRoleConnectionParams,
): RESTMakeRequestOptions<ApplicationRoleConnectionStructure> {
	return {
		method: "PUT",
		path: `/users/@me/applications/${applicationId}/role-connection`,
		body: JSON.stringify(params),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-application-role-connection}
 */
export function getCurrentUserApplicationRoleConnection(
	applicationId: Snowflake,
): RESTMakeRequestOptions<ApplicationRoleConnectionStructure> {
	return {
		method: "GET",
		path: `/users/@me/applications/${applicationId}/role-connection`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-connections}
 */
export function getCurrentUserConnections(): RESTMakeRequestOptions<
	ConnectionStructure[]
> {
	return {
		method: "GET",
		path: "/users/@me/connections",
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#create-group-dm-json-params}
 */
export type CreateGroupDMParams = {
	/**
	 * Access tokens of users that have granted your app the gdm.join scope
	 */
	access_tokens: string[];
	/**
	 * A dictionary of user ids to their respective nicknames
	 */
	nicks: Record<Snowflake, string>;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/user#create-dm-json-params}
 */
export type CreateDMParams = {
	/**
	 * The recipient to open a DM channel with
	 */
	recipient_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/user#create-group-dm}
 * @see {@link https://discord.com/developers/docs/resources/user#create-dm}
 */
export function createGroupDM<T extends boolean>(
	_isDm: T,
	params: T extends true ? CreateGroupDMParams : CreateDMParams,
): RESTMakeRequestOptions<ChannelStructure> {
	return {
		method: "POST",
		path: "/users/@me/channels",
		body: JSON.stringify(params),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#leave-guild}
 */
export function leaveGuild(guildId: Snowflake): RESTMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/users/@me/guilds/${guildId}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-guild-member}
 */
export function getCurrentUserGuildMember(
	guildId: Snowflake,
): RESTMakeRequestOptions<GuildMemberStructure> {
	return {
		method: "GET",
		path: `/users/@me/guilds/${guildId}/member`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-guilds-query-string-params}
 */
export type GetCurrentUserGuildsQueryStringParams = {
	/**
	 * Get guilds after this guild ID
	 */
	after?: Snowflake;
	/**
	 * Get guilds before this guild ID
	 */
	before?: Snowflake;
	/**
	 * Max number of guilds to return (1-200)
	 */
	limit?: Integer;
	/**
	 * Include approximate member and presence counts in response
	 */
	with_counts?: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-guilds}
 */
export function getCurrentUserGuilds(
	query?: GetCurrentUserGuildsQueryStringParams,
): RESTMakeRequestOptions<
	Pick<
		GuildStructure,
		| "approximate_member_count"
		| "approximate_presence_count"
		| "banner"
		| "features"
		| "icon"
		| "id"
		| "name"
		| "owner"
		| "permissions"
	>[]
> {
	return {
		method: "GET",
		path: "/users/@me/guilds",
		query,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#modify-current-user-json-params}
 */
export type ModifyCurrentUserParams = {
	/**
	 * If passed, modifies the user's avatar
	 */
	avatar?: DataUriScheme | null;
	/**
	 * If passed, modifies the user's banner
	 */
	banner?: DataUriScheme | null;
	/**
	 * User's username, if changed may cause the user's discriminator to be randomized
	 */
	username?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/user#modify-current-user}
 */
export function modifyCurrentUser(
	params: ModifyCurrentUserParams,
): RESTMakeRequestOptions<UserStructure> {
	return {
		method: "PATCH",
		path: "/users/@me",
		body: JSON.stringify(params),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-user}
 */
export function getUser(
	userId: Snowflake,
): RESTMakeRequestOptions<UserStructure> {
	return {
		method: "GET",
		path: `/users/${userId}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user}
 */
export function getCurrentUser(): RESTMakeRequestOptions<UserStructure> {
	return {
		method: "GET",
		path: "/users/@me",
	};
}
