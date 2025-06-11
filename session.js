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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0l2Uk8zc01hOEtKMHpydW5rNDgxazR0dWFxS2VPbFpWT0dyWVI3eS9GVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVRUbFNqaUs4VEc1RWo2SzdlOVZpV0VtWDRhWG9GaEpGWGoxUTFScFdVTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RU9XM3E2MzJyVXVDMzZqY0J0NEYzQldQU21sUzFoMG5ZelRHQVFVWEdVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMNmdhMFB0MHUwV2NqWTVOOU8vbnRoOEJiWHV1VU1UUzVTb213MGxwcnlRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtJdHFWVEM0M01aZlJIN2pRdytsVmxJd3YvS0dJR3FhTzU1K09JQ0hVbkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im85THczbVNVYnVlaE5BVjRTN0NZdFk2dEM2Z1pYdWJQNjFWbkFZYzRDd2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0pHS1dCU2lrMkhScmxleFRTU0VMbGFndFVjYXpFVjZkZVBhSmp1UkZIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3pOZG5hdEhRaU9jeDVSM2ZIU2dFY0djTmlQd1lXbm5HcnZPQnhSVXIxST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZWWkxVSVoyUGJ2aVpQKzExdUZEQmIvTEE4b2tMRHhlNm9tYnNsdXpmcVN3ckQrMjVnUEp2ODk1TW1iaFVrTEJmZ242UURjOXg4QTlpRUN5aS95VERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEsImFkdlNlY3JldEtleSI6IndkWXdqbHZ1cXIvSmkvRTJhTEd3aVFBZGxpY1k5cmFFeXJ0K2FiSW41Wms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjRoVmFLRlVKU0xLR2VobVNKejRFeVEiLCJwaG9uZUlkIjoiMWRmOTJmOTEtOTkzZC00ZTE0LTgzMmQtZTdlYWM2MjUxNjI2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhsN2RqNUdwMFBQZS9qeDlMUk1LczBVeG96dz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJESGdMdFN4SUV0SkRzOTVnd0R1dXFqbGVtMFk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQTZRNUgzNVQiLCJtZSI6eyJpZCI6Ijk0Nzg0MzQwNjE0OjUyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNhbnV0aCIsImxpZCI6IjU2NDg3OTk3MTMzMDE3OjUyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnpOaE1RQkVPck5wY0lHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV3JSSmc5NVA4UDJscDJqa2tzKy8yb2dqcFF2Z1hEQXQyS01UTW5iM0Ftdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM3FaRmZ6MDY0dUxoOFNFM1NhRjlLVXpLUHA0SEtCK2FrUko4L0VFR1pGTkJVdlBTNGZsOUY2WjdKV25XM1JJL0drVzRGTkdzZXp5WmtMVktlWmpXQWc9PSIsImRldmljZVNpZ25hdHVyZSI6Ill0bXBSNG9iM011alpDZTdmQm4vcHFMZTRDV0IwSDhiVTN4YTV0SU5OMmhmaXdqMFRxRzh1K0hXU21FdERyWkJVYjdKNi9WdGlUZ1Y3UlgwcXdHc0NnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODQzNDA2MTQ6NTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVnEwU1lQZVQvRDlwYWRvNUpMUHY5cUlJNlVMNEZ3d0xkaWpFekoyOXdKcyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5NjQwOTUyLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQifQ==",
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
