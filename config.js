const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="admin@giftedtechnexus.co.ke"
global.location="KOLKATA,India."
global.mongodb= process.env.MONGODB_URI || ""

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "india/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/Giftedmaurice/gifted-mdV2";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/54efddccf41281ad7ec51.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "true";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919832307009";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254728782591,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "true,919832307009";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "919832307009";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://qr-scan.giftedtechnexus.co.ke";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU42NzFDQmo0cHovV2RHZ2xDUXBTdWRoUHhBNHphT2dOOHpQZlgrRVRITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjBaaCs3Y25hVzZlaW12cTJwQjJ6NHVadlZDUkMyMklFcURXN0F4cFNBYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTlpPUWtvZCtmTmNvdStwNDUvY1J1dVFrWVdqaGY4SFVuRkh0MFlWL0VnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1d1hjYWprYklETW9rTGNoSWFWdUNRVEJ5NzI2cVVBZ0tMd0t5ZTM0dncwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFKTlZmK09oa1REUERMN0p0UVpRbDNTZVlyNHZ1Rm1XL3cyV0pXV3BBMWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkF5Z3ZKVVNJNEpSYUUwTWs5Z1U3amI2dUtLejJZOHZiWDE5Y3ZuV1V3WGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUhHSUVnbmNpWThtdDhaY2ZiOGNpU1J3WjN6TmF6SE5lSlN3aDl6V1BIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZkFEUzJ0WGJHUHF2Z051UlV3TnlwOFA2eW9jUnNwOW5EckRydTRKQXQycz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRLZmZ5aTNJU05ULzNtT1oxYlR2a1dLVzNzSFZZQi9EVkwyRG5Lc2krWCtJdXVWcDlMekJMQWROaUI1Y0VEbGFCdXRTa0RvN3B0Um9mMXBWNUFicGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM0LCJhZHZTZWNyZXRLZXkiOiJuRVhPQmVCTmVEU0U1SmcvdTJESmhFVEFJZHNaakxrcDkrYTJrdDFHT0lFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxOTgzMjMwNzAwOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUE4NDRFRDYyRjgwOTcyODQ4QkY2NkNGRDIxNjk4OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzA5NzEyNzIyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTk4MzIzMDcwMDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNkQ4QzNCQjNEOTZBRDBFQTM5OEQzNTgwMzRFNzMyREEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwOTcxMjcyMn1dLCJuZXh0UHJlS2V5SWQiOjQzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NDMsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoia0dPMGlEMFdUMnlfSk9qS1FMd0tHdyIsInBob25lSWQiOiJlZjAzM2VjMy0xMTBhLTRjYzAtYWUzZS02YTBlOGViOGRjNDMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkQ0T2I4VjM2bzlET1Z4MUNqTGZVcGNpVmxRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFONGpIRkc2N1UwSUF5Z0VaWnVRREF3TmZvcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI2NUZHNDVOSyIsIm1lIjp7ImlkIjoiOTE5ODMyMzA3MDA5OjY0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlsgISEgRE9ETyAhISBdID4+MyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnY0L1QwUXZzcWdyd1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUzgxbDlqN0Z1WDhkMGlHc1NBeDNnT0xETWpCYjFjOXlZZ3RHYXByWlZsYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibkF5OWlOZlpuckh5T0p1bVd1RURaWCtzckcvU2dsRzFPUWUzUDBhODRGR1NWdi9kcENjRXVXQ056bkJqcG8wR2NyQTcyaVZSZVp1RlNaV0FHN0djREE9PSIsImRldmljZVNpZ25hdHVyZSI6IlRtKzh2NkxtUzNJNTVqZVVRcEJFY2ttUVNGOFhQaFdDOFhUR2JObWFkZVN4R1NMSFFaemF2RTlPd3ljTjRkSWw2UzFvZ2lJdkZLY1JWQWF0S2g4SGh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE5ODMyMzA3MDA5OjY0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlV2TlpmWSt4YmwvSGRJaHJFZ01kNERpd3pJd1c5WFBjbUlMUm1xYTJWWlgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDk3MTI5MDIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTzlHIn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Gifted-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.2.0.0",
  caption : process.env.CAPTION || "©²⁰²⁴ ɢɪғᴛᴇᴅ ʙᴏᴛ ᴍᴅᵛ²•⁰•⁰" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ʙᴏᴛ ᴍᴅᵛ²•⁰•⁰ - ²⁰²⁴ 』```", //*『sᴜʙsᴄʀɪʙᴇ • ɢɪғᴛᴇᴅ ᴛᴇᴄʜ』*\n youtube.com/@giftedtechnexus"),
 
  author : process.env.PACK_AUTHER|| "DODO-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "DODO-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It's DODO",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "GIFTED",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
