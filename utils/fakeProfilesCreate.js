const first_names = [
  'Liam',
  'Emma',
  'Noah',
  'Olivia',
  'William',
  'Ava',
  'James',
  'Isabella',
  'Logan',
  'Sophia',
  'Benjamin',
  'Mia',
  'Mason',
  'Charlotte',
  'Elijah',
  'Amelia',
  'Oliver',
  'Evelyn',
  'Jacob',
  'Abigail',
  'Lucas',
  'Harper',
  'Michael',
  'Emily',
  'Alexander',
  'Elizabeth',
  'Ethan',
  'Avery',
  'Daniel',
  'Sofia',
  'Matthew',
  'Ella',
  'Henry',
  'Madison',
  'Joseph',
  'Scarlett',
  'Jackson',
  'Victoria',
  'Samuel',
  'Aria',
  'Sebastian',
  'Grace',
  'David',
  'Chloe',
  'Carter',
  'Camila',
  'Aiden',
  'Penelope',
  'Wyatt',
  'Riley',
  'Owen',
  'Layla',
]

const last_names = [
  'Smith',
  'Johnson',
  'Williams',
  'Jones',
  'Brown',
  'Garcia',
  'Miller',
  'Davis',
  'Rodriguez',
  'Martinez',
  'Hernandez',
  'Lopez',
  'Gonzalez',
  'Perez',
  'Taylor',
  'Anderson',
  'Wilson',
  'Moore',
  'Jackson',
  'Martin',
  'Lee',
  'Parker',
  'Lewis',
  'Wright',
  'Hall',
  'Young',
  'Allen',
  'King',
  'Scott',
  'Green',
  'Baker',
  'Adams',
  'Nelson',
  'Carter',
  'Mitchell',
  'Perez',
  'Roberts',
  'Turner',
  'Phillips',
  'Campbell',
  'Parker',
  'Evans',
  'Edwards',
  'Collins',
  'Stewart',
  'Sanchez',
  'Morris',
  'Rogers',
  'Reed',
  'Cook',
  'Morgan',
  'Bell',
  'Murphy',
  'Bailey',
  'Rivera',
  'Cooper',
  'Richardson',
  'Cox',
  'Howard',
  'Ward',
  'Torres',
  'Peterson',
  'Gray',
  'Ramirez',
  'James',
  'Watson',
  'Brooks',
  'Kelly',
  'Sanders',
  'Price',
  'Bennett',
  'Wood',
  'Barnes',
  'Ross',
  'Henderson',
  'Coleman',
  'Jenkins',
  'Perry',
  'Powell',
  'Long',
  'Patterson',
  'Hughes',
  'Flores',
  'Washington',
  'Butler',
  'Simmons',
  'Foster',
  'Gonzales',
  'Bryant',
  'Alexander',
  'Russell',
  'Griffin',
  'Diaz',
  'Hayes',
]

function generateName() {
  return `${first_names[Math.floor(Math.random() * first_names.length)]} ${
    last_names[Math.floor(Math.random() * last_names.length)]
  }`
}

async function sendRequest(name, email) {
  const req = await fetch('http://localhost:3000/api/v1/profiles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password: 'password',
      name,
    }),
  })
  return await req.json()
}

let used_names = []
async function createProfile() {
  let name = generateName()
  while (used_names.includes(name)) {
    name = generateName()
  }
  used_names.push(name)

  const email = `${name.replace(' ', '.')}@example.com`
  return await sendRequest(name, email)
}

async function loop(n_times) {
  for (let i = 0; i < n_times; i++) {
    const result = await createProfile()
    console.log(result)
  }
}
