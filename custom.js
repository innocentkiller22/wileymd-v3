import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'


//Numbers
global.botnumber = '919711908216'
global.ownernumber = '919711908216'

//Names
global.ownername = 'Devs'
global.botname = 'chiku-MD'
global.bname = 'chiku-MD'

//watermark
global.stkpack = 'chiku-MD'
global.stkowner = 'DevS'

//Links
global.grouplink = 'https://instagram.com/error.mods'
global.instalink = 'https://instagram.com/error.mods'


//Apikeys 
global.shizokeys = 'shizo'

//Reactions
global.clock = '⏱️'

//Messages
global.piesmsg = 'Pies 🥵💦'
global.memesmsg = 'HEHE 😅😂'

//Messages Customs System
global.welcome = `Hey, @user\nWelcome to @group\nIntroduction please\nI'm ${botname} Made with ❤️ by ${ownername}\n\n@desc`
global.bye = `Good bye @user`
global.promote = `@user Is now admin`
global.demote = `sorry @user u was removed from admin`
global.gcdescription = `The description has been changed a \n@desc`
global.gcname = `The name of the group has been changed to \n@group`
global.gcicon = `The group icon has been changed`
global.gcrevoke = `The group link has been changed a \n@revoke`

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.greenBright('Customization is Update\n\n\nCustomized the Bot'))
  import(`${file}?update=${Date.now()}`)
})
