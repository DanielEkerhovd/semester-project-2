export default async function login(email, password) {
  const response = await fetch('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    throw new Error('Invalid email or password')
  }

  console.log(response.json())

  return response.json()
}
