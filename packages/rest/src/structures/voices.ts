import type { Iso8601, Snowflake } from "@nyxjs/core";
import type { GuildMemberStructure } from "./guilds";

/**
 * @see {@link https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure}
 */
export type VoiceRegionStructure = {
	/**
	 * Whether this is a custom voice region (used for events/etc)
	 */
	custom: boolean;
	/**
	 * Whether this is a deprecated voice region (avoid switching to these)
	 */
	deprecated: boolean;
	/**
	 * Unique ID for the region
	 */
	id: string;
	/**
	 * Name of the region
	 */
	name: string;
	/**
	 * True for a single server that is closest to the current user's client
	 */
	optimal: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure}
 */
export type VoiceStateStructure = {
	/**
	 * The channel id this user is connected to
	 */
	channel_id: Snowflake | null;
	/**
	 * Whether this user is deafened by the server
	 */
	deaf: boolean;
	/**
	 * The guild id this voice state is for
	 */
	guild_id?: Snowflake;
	/**
	 * The guild member this voice state is for
	 */
	member?: GuildMemberStructure;
	/**
	 * Whether this user is muted by the server
	 */
	mute: boolean;
	/**
	 * The time at which the user requested to speak
	 */
	request_to_speak_timestamp: Iso8601 | null;
	/**
	 * Whether this user is locally deafened
	 */
	self_deaf: boolean;
	/**
	 * Whether this user is locally muted
	 */
	self_mute: boolean;
	/**
	 * Whether this user is streaming using "Go Live"
	 */
	self_stream?: boolean;
	/**
	 * Whether this user's camera is enabled
	 */
	self_video: boolean;
	/**
	 * The session id for this voice state
	 */
	session_id: string;
	/**
	 * Whether this user's permission to speak is denied
	 */
	suppress: boolean;
	/**
	 * The user id this voice state is for
	 */
	user_id: Snowflake;
};
