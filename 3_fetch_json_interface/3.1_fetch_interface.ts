// 1. ez a fájl használja a globalis fetch-et, ezért kell a Node 18-as verzió
// TODO telepítsd a Node Version Manager-rel:
// nvm install 18

// 2. ez a fájl top-level await-et használ, ezért a tsconfig.json-ben kell a
// "module": "es2020" beállítás és a package.json-ben a "type": "module" beállítás

export {}
const bkkApi = 'https://futar.bkk.hu/api/query/v1/ws/otp/api/where'
const params = new URLSearchParams({
  minutesBefore: '2',
  minutesAfter: '30',
  stopId: 'BKK_F01004',
  includeRouteId: 'BKK_VP06,BKK_0090',
  key: process.env.BKK_API_KEY ?? '',
})
const url = `${bkkApi}/arrivals-and-departures-for-stop?${params.toString()}`
console.log(url)
const response = await fetch(url)
const result = await response.json()
console.log(result.data.entry.stopTimes)

// TODO Írd ki szépen formázva az indulási időt és a célállomást. (A járat számát most nem kell.)

// TODO A függvény paraméterében a típus `any` volt. Definiáld a result típusát `interface`-ekkel.
