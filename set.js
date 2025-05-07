/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZkakk3VzNkSWlqNVpIMFVXZkRBYWt2czNnaGhXTlFJK3NaK1JON3YzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1lheGp3cDE2bzBxdVE4TkdUeXhoenZtcUpkQmhsMW5iUStHVnJ6cVN5az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVR0FCSHBqRmNUS1BXb3haTlFhdXlCZmZueDJqekdFRmZIUzVTVVFha0ZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTGhleDcwZWkrWmhsdjNjb2NLbUZTNXpkN3I3MlF3RVA3RWdqeGZQM1F3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVHL09NYmdkS3RQRnFVUFFVdXlreVBSTkQ2dG1aeFZvZjZicFVpSFhrM0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1iUFhrNmRnWWgrdmZFVnFEQ21VRUNlRlVWTi84WjZ0Y25aOTAwRzJlV0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1BFMUJkM3NnS2hMaW5BckRIVXdJWmJhRGQ1R2txRmxWcjJPMTJyRVcxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVEpaQkdPWDdhQUtVWW1hVDQ4VHM3N1pNQ1MwaXVXQzI2c3k4ZTRjMmd5MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllLNUVjUW5KWDZvTEIrQWxIWk10dXpLdkRZb2JZWHlIMzRRSE9JL0hJcW1GOWpUY2RXcmZZV2c0U3hyRHlRVzNTU1ZuRzJZSkxiNkJ3TWYvUW9Xd2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY5LCJhZHZTZWNyZXRLZXkiOiJHSW5NazM4Mm1RWFh6THZ1NFBhREEyVytyeGdraWNTaGo4eXZTSVE1RXd3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc4OTA4NTUzM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGOUJGRDQ3NDRFQ0FCQjhDMUY3MzJFQURFRTMxOTY1NSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ1NjE0MTU3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3ODkwODU1MzNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzhFQUJFMzk4RURCRjk5QTg3MTg0QTMxNjc3MTMzODEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NTYxNDE1OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoia1E1ejhJNm9UZXlVN0J4anFzV3FFZyIsInBob25lSWQiOiI5YTYzOWU1Mi04YzllLTRlMGYtODhmZS1iOTE2MWE4MjVhZWUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidG52UExyS29iOVFTbDNETXJ2UXlJeENVRldrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJScEdvNjg3QUJCWGhSUlIyVHlybytSWnpURT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJGRkJHWTI5OCIsIm1lIjp7ImlkIjoiMjYzNzg5MDg1NTMzOjc1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkLfwnZC44oSV8J2QtfCdmYrwnZGM4piGIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJV0xqWk1DRUxucXI4QUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI1V1NQU2RqQ2wwcmk0TlJuWWxaUkZjait3bnFwR1doN3FTam9KSHNXRXlBPSIsImFjY291bnRTaWduYXR1cmUiOiJOVnhEL2Rqa1Q5b0Z4Rk5Id3hqVWRobUtBKytXdWkvNGZiNkx2b2VrRkxRZ0JmaytKT01pY1RwTCtuN1NKVjk4blJlVTVEejdGZUdNczZDZXBBOEZCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieEx6WmZ3ZWNwalVRZWlNUlAyTDEzN3BIRXd2UGUzZ2tqNWZFcXhpS2lxRE10b3pGWW9Zc2c2R3ZjeUtsb1hEbVg5bVl1dko1c3RKaWMwQWlrOTY4aEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3ODkwODU1MzM6NzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZVZrajBuWXdwZEs0dURVWjJKV1VSWEkvc0o2cVJsb2U2a282Q1I3RmhNZyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NTYxNDE1MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFETnIifQ==';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PUBLIC';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || '𝐷𝐸ℕ𝐵𝙊𝑌☆';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝐁𝐋𝐀𝐂𝐊𝐌𝐀𝐂𝐇𝐀𝐍𝐓 𝐁𝐎𝐓';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '263789085533';
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/jxxwms.jpeg';
const menu = process.env.MENU_TYPE || 'VIDEO';
const DevRaven = dev.split(",");
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '263';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 10000;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, DevRaven, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
