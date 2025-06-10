//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0dyM29LUndIQnhraUsySWpGbktmWFoyUGdzTlp5TVdTaW5oSDlwQ1ZuQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmU2eklHRXZKMFcvcUxpTC9yWW5tRGRSak9pMU1vNWxLNHhXYngybk9YUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTGJSNkNOYThrYmtzUEhoSEZINS9EWXVmcEM1UHBsWjE5ODhDdnlIOUdVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYUkFuRi9BNWNxZ3hjcDdNdjJ3NXNXSTZtMklBN1RKRmlWUUZZMXA4ekJnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllMY3BhSithRHNHdmJrWndYbVNpMDVZc3NkaUREYUVoUEUyNzNHZkFPMzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFEM3l3VVR0clhNbnJsL1ZRcCtmSktic05hSmRIY2NGVGNaeHZnc3cybGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU1oMXFRZHhYamFqdjBLbGNsazhGQS9TR0Q4OFBsMUpHVGFDZ2tjeXRGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidlZLQ3g3ZmQvZ2cwK0hiOFdwK0FBRXBTYWxPa0JlODEwdzJrdUJxcHlIcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9ZSkcrN3pTRFlKL09jVFVON3BzL1RMOUVIdWFUaWhLVElHTUhZZmdZOTEyOFNGKzc5SDRjQTllcjl6THBSK1JxMTVpbzA5NmZLY1F5YWxvditac2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE0LCJhZHZTZWNyZXRLZXkiOiJDbXVtSEZvcDZXcXltbVN0WVhEOEJqZUNFUFJNclBsNjN3NWVTaG11Z2s0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJiVkt3NFBNcVFkLVZuWmEwWXhNSlRnIiwicGhvbmVJZCI6ImZmN2I2MDk0LWZlYjMtNDY5MS04M2Q5LTAzYzg5OWY2Y2NhZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwankvVm85OXlZaXVZYUFuY1JxdzdpTjUvT1E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajIwOUlLMEVVdFFyUklJNFVYcjlVMTQzclh3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJNWUM0QUxCIiwibWUiOnsiaWQiOiI5NDc4NDM0MDYxNDo1MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTYW51dGgiLCJsaWQiOiI1NjQ4Nzk5NzEzMzAxNzo1MUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ056TmhNUUJFTWVUbjhJR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IldyUkpnOTVQOFAybHAyamtrcysvMm9nanBRdmdYREF0MktNVE1uYjNBbXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjFkS1lTSy9aNE55R0psbnYvUllUS3JrN0NxUEtyTmg3dE1QRGFydVhIT3VaQXFieHhYa1NnU25iQ3dsYVJXZ0ppTlpGbGpXYkNGSFpyTm5DSlkzSkJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlc1Jkd3U3OEQ2Q0FXL0FnUUNndnpmK25sSUFJT0FrenZKM1plRjJMb0xuaUVEdmtSWnRXY1UrRGlJK0w5MUQrY1BORnBTNGtXeFUwQmNrUmpJR0podz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg0MzQwNjE0OjUxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZxMFNZUGVUL0Q5cGFkbzVKTFB2OXFJSTZVTDRGd3dMZGlqRXpKMjl3SnMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0OTUzNTE4NywibGFzdFByb3BIYXNoIjoiMUs0aEg0In0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94784340614",
  PASSWORD: 
    process.env.PASSWORD || "dj123123",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
