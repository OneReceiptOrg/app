import DiscordOauth2 from "discord-oauth2";

const clientId = process.env.DISCORD_CLIENT_ID;
const clientSecret = process.env.DISCORD_CLIENT_SECRET;
const redirectUri = process.env.DISCORD_REDIRECT_URI;
const requiredGuildId = process.env.REQUIRED_GUILD_ID;
const requiredRoleId = process.env.REQUIRED_ROLE_ID; 

if (!clientId || !clientSecret || !redirectUri || !requiredGuildId) {
  throw new Error("Missing required Discord OAuth environment variables.");
}

export const discordOauth = new DiscordOauth2({
  clientId: clientId,
  clientSecret: clientSecret,
  redirectUri: redirectUri,
});

export const authConfig = {
  requiredGuildId,
  requiredRoleId, 
};

