const fs = require("fs");

let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
    x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isOwner, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}
•——————•°•✿•°•——————•
*BOT INFO*
: ̗̀➛Creator : ${ownerName}
: ̗̀➛Bot Name : ${botName}
: ̗̀➛Time : ${jam}
: ̗̀➛Date : ${tanggal}
: ̗̀➛Runtime :
 ${runtime(process.uptime())}
•——————•°•✿•°•——————•
    FOXZY BOTZ WA
•——————•°•✿•°•——————•
*USER INFO*
: ̗̀➛Name : ${pushname !== undefined ? pushname : '-'}
: ̗̀➛Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Gratisan'}
: ̗̀➛Limit : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
: ̗̀➛Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
: ̗̀➛Balance : $${toCommas(getBalance(sender, balance))}
•——————•°•✿•°•——————•
    FOXZY BOTZ WA
•——————•°•✿•°•——————•
Hitung Mundur Idul Adha
${mundur}

*STATISTICS*
: ̗̀➛Upload : ${upload}
: ̗̀➛Downloads : ${download}
•——————•°•✿•°•——————•


•❅──────✧❅✦❅✧──────❅•


.·:*¨¨* ≈MENU LANGKA≈ *¨¨*:·.

•❅──────✧❅✦❅✧──────❅•
*୨⎯ "ɢ𝖱סሀᑭ 𝑀𝜠ɴ𝕌" ⎯୧*
: ̗̀➛${prefix}afk
: ̗̀➛${prefix}welcome
: ̗̀➛${prefix}left
: ̗̀➛${prefix}setwelcome
: ̗̀➛${prefix}changewelcome
: ̗̀➛${prefix}delsetwelcome
: ̗̀➛${prefix}setleft
: ̗̀➛${prefix}changeleft
: ̗̀➛${prefix}delsetleft
: ̗̀➛${prefix}linkgc
: ̗̀➛${prefix}setppgc
: ̗̀➛${prefix}setnamegc
: ̗̀➛${prefix}setdesc
: ̗̀➛${prefix}antilink
: ̗̀➛${prefix}antiwame
: ̗̀➛${prefix}open
: ̗̀➛${prefix}close
: ̗̀➛${prefix}setopen
: ̗̀➛${prefix}changeopen
: ̗̀➛${prefix}delsetopen
: ̗̀➛${prefix}setclose
: ̗̀➛${prefix}changeclose
: ̗̀➛${prefix}delsetclose
: ̗̀➛${prefix}add
: ̗̀➛${prefix}kick
: ̗̀➛${prefix}promote
: ̗̀➛${prefix}demote
: ̗̀➛${prefix}revoke
: ̗̀➛${prefix}hidetag
: ̗̀➛${prefix}checksewa
•❅──────✧❅✦❅✧──────❅•

•❅──────✧❅✦❅✧──────❅•
*୨⎯ "𝘚τ𐊒𝘙ꭼ ℳ𝗘𝒩𝑈" ⎯୧*
: ̗̀➛${prefix}list
: ̗̀➛${prefix}addlist
: ̗̀➛${prefix}dellist
: ̗̀➛${prefix}update
: ̗̀➛${prefix}jeda
: ̗̀➛${prefix}tambah
: ̗̀➛${prefix}kurang
: ̗̀➛${prefix}kali
: ̗̀➛${prefix}bagi
•❅──────✧❅✦❅✧──────❅•

•❅──────✧❅✦❅✧──────❅•
*୨⎯ "𝓟𝓡𝓞𝓢𝓔𝓢/𝓓𝓞𝓝𝓔" ⎯୧*
: ̗̀➛proses < reply chat >
: ̗̀➛done < reply chat >
: ̗̀➛${prefix}setproses
: ̗̀➛${prefix}changeproses
: ̗̀➛${prefix}delsetproses
: ̗̀➛${prefix}setdone
: ̗̀➛${prefix}changedone
: ̗̀➛${prefix}delsetdone
•❅──────✧❅✦❅✧──────❅•

.·:*¨¨* ≈MENU LAINNYA≈ *¨¨*:·.

•❅──────✧❅✦❅✧──────❅•
*୨⎯ "𝕄𝝖Ɩ𝝢 𝜧𝜠𝚴𝙐" ⎯୧*
: ̗̀➛${prefix}menu
: ̗̀➛${prefix}infobot
: ̗̀➛${prefix}donate
: ̗̀➛${prefix}dashboard
: ̗̀➛${prefix}owner
: ̗̀➛${prefix}groupkaysa
: ̗̀➛${prefix}cekdrive
: ̗̀➛${prefix}cekbandwidth
: ̗̀➛${prefix}cekpremium
: ̗̀➛${prefix}sewabot
: ̗̀➛${prefix}listpremium
: ̗̀➛${prefix}listsewa
: ̗̀➛${prefix}speed
: ̗̀➛${prefix}runtime
: ̗̀➛${prefix}listbahasa
•❅──────✧❅✦❅✧──────❅•

•❅──────✧❅✦❅✧──────❅•
*୨⎯ "𝓒𝓞𝓝𝓥𝓔𝓡𝓣𝓔𝓡/𝓣𝓞𝓞𝓛𝓢" ⎯୧*
: ̗̀➛${prefix}sticker
: ̗̀➛${prefix}stickerwm
: ̗̀➛${prefix}smeme
: ̗̀➛${prefix}toimg
: ̗̀➛${prefix}tovideo
: ̗̀➛${prefix}tomp3
: ̗̀➛${prefix}ttp
: ̗̀➛${prefix}attp
: ̗̀➛${prefix}emojimix
: ̗̀➛${prefix}nulis
: ̗̀➛${prefix}spamcall
: ̗̀➛${prefix}say
: ̗̀➛${prefix}translate

*୨⎯ "𝑨𝑵𝑶𝑵𝒀𝑴𝑶𝑼𝑺 𝑪𝑯𝑨𝑻𝑺" ⎯୧*
: ̗̀➛${prefix}anonymous
: ̗̀➛${prefix}start
: ̗̀➛${prefix}next
: ̗̀➛${prefix}stop
: ̗̀➛${prefix}sendprofile
•❅──────✧❅✦❅✧──────❅•

•❅──────✧❅✦❅✧──────❅•
*୨⎯ "𝓓𝓞𝓦𝓝𝓛𝓞𝓐𝓓𝓢 𝓜𝓔𝓝𝓤" ⎯୧*
: ̗̀➛${prefix}play
: ̗̀➛${prefix}ytmp3
: ̗̀➛${prefix}ytmp4
: ̗̀➛${prefix}getmusic
: ̗̀➛${prefix}getvideo
: ̗̀➛${prefix}youtube
: ̗̀➛${prefix}instagram
: ̗̀➛${prefix}igstory
: ̗̀➛${prefix}tiktok
: ̗̀➛${prefix}facebook
: ̗̀➛${prefix}mediafire
: ̗̀➛${prefix}telesticker
: ̗̀➛${prefix}pinterestdl
•❅──────✧❅✦❅✧──────❅•

•❅──────✧❅✦❅✧──────❅•
*୨⎯ "𝓖𝓐𝓜𝓔 𝓜𝓔𝓝𝓤" ⎯୧*
: ̗̀➛${prefix}tictactoe
: ̗̀➛${prefix}delttt
: ̗̀➛${prefix}tebakgambar
: ̗̀➛${prefix}kuis
: ̗̀➛${prefix}tebaklagu
: ̗̀➛${prefix}family100
: ̗̀➛${prefix}nyerah
: ̗̀➛${prefix}casino
: ̗̀➛${prefix}delcasino
: ̗̀➛${prefix}akinator
: ̗̀➛${prefix}cancelakinator
•❅──────✧❅✦❅✧──────❅•

•❅──────✧❅✦❅✧──────❅•
*୨⎯ "𝓚𝓔𝓡𝓐𝓝𝓖 𝓜𝓔𝓝𝓤" ⎯୧*
: ̗̀➛${prefix}apakah
: ̗̀➛${prefix}bisakah
: ̗̀➛${prefix}kapankah
: ̗̀➛${prefix}bagaimanakah
: ̗̀➛${prefix}rate
: ̗̀➛${prefix}gantengcek
: ̗̀➛${prefix}cantikcek
: ̗̀➛${prefix}sangecek
: ̗̀➛${prefix}gaycek
: ̗̀➛${prefix}lesbicek
: ̗̀➛${prefix}cekbapak
•❅──────✧❅✦❅✧──────❅•

•❅──────✧❅✦❅✧──────❅•
*୨⎯ "𝓢𝓔𝓐𝓡𝓒𝓗 𝓜𝓔𝓝𝓤" ⎯୧*
: ̗̀➛${prefix}nickff
: ̗̀➛${prefix}nickml
: ̗̀➛${prefix}nickpubg
: ̗̀➛${prefix}nickdomino
: ̗̀➛${prefix}lirik
: ̗̀➛${prefix}grupwa
: ̗̀➛${prefix}pinterest
: ̗̀➛${prefix}ytsearch
: ̗̀➛${prefix}whatmusic
: ̗̀➛${prefix}igstalk
: ̗̀➛${prefix}searchbyimage
•❅──────✧❅✦❅✧──────❅•

•❅──────✧❅✦❅✧──────❅•
*୨⎯ "𝓡𝓐𝓝𝓓𝓞𝓜 𝓜𝓔𝓝𝓤" ⎯୧*
: ̗̀➛${prefix}quotes
: ̗̀➛${prefix}cecan
: ̗̀➛${prefix}cogan
: ̗̀➛${prefix}waifu
: ̗̀➛${prefix}meme
: ̗̀➛${prefix}darkjoke
: ̗̀➛${prefix}couple
•❅──────✧❅✦❅✧──────❅•

•❅──────✧❅✦❅✧──────❅•
*୨⎯ "𝓣𝓔𝓧𝓣𝓟𝓡𝓞 𝓜𝓔𝓝𝓤" ⎯୧*
: ̗̀➛${prefix}glitch
: ̗̀➛${prefix}pornhub
: ̗̀➛${prefix}harrypotter
: ̗̀➛${prefix}graffiti
: ̗̀➛${prefix}3dspace
: ̗̀➛${prefix}lionlogo
: ̗̀➛${prefix}bearlogo
: ̗̀➛${prefix}wolflogo
: ̗̀➛${prefix}candy
: ̗̀➛${prefix}christmas
: ̗̀➛${prefix}3dchristmas
: ̗̀➛${prefix}sparklechristmas
: ̗̀➛${prefix}deepsea
: ̗̀➛${prefix}scifi
: ̗̀➛${prefix}rainbow
: ̗̀➛${prefix}waterpipe
: ̗̀➛${prefix}spooky
: ̗̀➛${prefix}pencil
: ̗̀➛${prefix}circuit
: ̗̀➛${prefix}discovery
: ̗̀➛${prefix}metalic
: ̗̀➛${prefix}fiction
: ̗̀➛${prefix}demon
: ̗̀➛${prefix}transformer
: ̗̀➛${prefix}berry
: ̗̀➛${prefix}thunder
: ̗̀➛${prefix}magma
: ̗̀➛${prefix}neonlight
: ̗̀➛${prefix}brokenglass
: ̗̀➛${prefix}papercut
: ̗̀➛${prefix}watercolor
: ̗̀➛${prefix}multicolor
: ̗̀➛${prefix}neondevil
: ̗̀➛${prefix}underwater
: ̗̀➛${prefix}graffitibike
: ̗̀➛${prefix}snow
: ̗̀➛${prefix}cloud
: ̗̀➛${prefix}honey
: ̗̀➛${prefix}ice
: ̗̀➛${prefix}fruitjuice
: ̗̀➛${prefix}biscuit
: ̗̀➛${prefix}wood
: ̗̀➛${prefix}chocolate
: ̗̀➛${prefix}strawberry
: ̗̀➛${prefix}matrix
: ̗̀➛${prefix}blood
: ̗̀➛${prefix}droopwater
: ̗̀➛${prefix}toxic
: ̗̀➛${prefix}larva
: ̗̀➛${prefix}rock
: ̗̀➛${prefix}bloodglas
: ̗̀➛${prefix}hallowen
: ̗̀➛${prefix}darkgold
: ̗̀➛${prefix}joker
: ̗̀➛${prefix}wicker
: ̗̀➛${prefix}firework
: ̗̀➛${prefix}skeleton
: ̗̀➛${prefix}blackpink
: ̗̀➛${prefix}sand
: ̗̀➛${prefix}glue
: ̗̀➛${prefix}1917
: ̗̀➛${prefix}leaves
•❅──────✧❅✦❅✧──────❅•

•❅──────✧❅✦❅✧──────❅•
*୨⎯ "𝓑𝓐𝓛𝓐𝓝𝓒𝓔 𝓜𝓔𝓝𝓤" ⎯୧*
: ̗̀➛${prefix}topglobal
: ̗̀➛${prefix}toplocal
: ̗̀➛${prefix}buylimit
: ̗̀➛${prefix}buyglimit
: ̗̀➛${prefix}transfer
: ̗̀➛${prefix}limit
: ̗̀➛${prefix}balance
•❅──────✧❅✦❅✧──────❅•

•❅──────✧❅✦❅✧──────❅•
*୨⎯ "𝓑𝓐𝓘𝓛𝓔𝓨𝓢" ⎯୧*
: ̗̀➛${prefix}fitnah
: ̗̀➛${prefix}getquoted
: ̗̀➛${prefix}fakehidetag
: ̗̀➛${prefix}react
: ̗̀➛${prefix}setcmd
: ̗̀➛${prefix}delcmd
•❅──────✧❅✦❅✧──────❅•

•❅──────✧❅✦❅✧──────❅•
*୨⎯ "𝕄𝝖Ɩ𝝢 𝜧𝜠𝚴𝙐" ⎯୧*
: ̗̀➛> evalcode
: ̗̀➛x evalcode-2
: ̗̀➛$ executor
: ̗̀➛${prefix}exif
: ̗̀➛${prefix}join
: ̗̀➛${prefix}left
: ̗̀➛${prefix}self
: ̗̀➛${prefix}public
: ̗̀➛${prefix}setprefix
: ̗̀➛${prefix}setppbot
: ̗̀➛${prefix}broadcast
: ̗̀➛${prefix}bcsewa
: ̗̀➛${prefix}addpremium
: ̗̀➛${prefix}delpremium
: ̗̀➛${prefix}addsewa
: ̗̀➛${prefix}delsewa
•❅──────✧❅✦❅✧──────❅•`
}

exports.donate = (pushname, ownerNumber) => {
    return`\t\t\t\t*💰「 DONATE 」💰*

Hai ${pushname}👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
🏧 081386383559 (OVO/Dana/)

Berapapun donasi kalian akan sangat berarti 👍

Arigatou!

Contact person Owner:
wa.me/6281386383559 (Owner)`
}
