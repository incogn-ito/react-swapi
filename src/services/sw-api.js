const BASE_URL = 'https://swapi.dev/api/'

// Fetch all starships using async/await
export async function getAllStarships() {
  try {
    const response = await fetch(`${BASE_URL}starships/`)
    return handleResponse(response)
  } catch (error) {
    handleError(error)
  }
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