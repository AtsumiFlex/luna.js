import type { Snowflake } from "@nyxjs/core";

/**
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level}
 */
export enum StagePrivacyLevels {
	/**
	 * The Stage instance is visible publicly. (deprecated)
	 *
	 * @deprecated
	 */
	Public = 1,
	/**
	 * The Stage instance is visible to only guild members.
	 */
	GuildOnly = 2,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-stage-instance-structure}
 */
export type StageInstanceStructure = {
	/**
	 * The id of the associated Stage channel
	 */
	channel_id: Snowflake;
	/**
	 * Whether Stage Discovery is disabled (deprecated)
	 *
	 * @deprecated
	 */
	discoverable_disabled: boolean;
	/**
	 * The guild id of the associated Stage channel
	 */
	guild_id: Snowflake;
	/**
	 * The id of the scheduled event for this Stage instance
	 */
	guild_scheduled_event_id: Snowflake | null;
	/**
	 * The id of this Stage instance
	 */
	id: Snowflake;
	/**
	 * The privacy level of the Stage instance
	 */
	privacy_level: StagePrivacyLevels;
	/**
	 * The topic of the Stage instance (1-120 characters)
	 */
	topic: string;
};
