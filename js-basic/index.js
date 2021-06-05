//import clashApi from 'clash-of-clans-api';
const clashApi = require('clash-of-clans-api');

let client = clashApi({
  token: COC_API_TOKEN
});

async function showClanByTag(tag) {
  try {
    const ClanByTag = await client.clanByTag(tag)
    console.log("this is the player info:", ClanByTag)

  } catch (error) {
    console.error(error)
  }
}

showClanByTag('#YPY0G9LQ');