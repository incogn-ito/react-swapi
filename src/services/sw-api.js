const baseUrl = 'https://swapi.dev/api/'

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/starships/`)
  return res.json()
}

// export async function getMonsterList() {
//   const res = await fetch(`${baseUrl}/api/monsters`)
//   return res.json()
// }

// export async function getMonster(monsterId) {
//   const res = await fetch(`${baseUrl}/api/monsters/${monsterId}`)
//   return res.json()
// }

// export async function getSpells() {
//   const res = await fetch(`${baseUrl}/api/spells`)
//   return res.json()
// }