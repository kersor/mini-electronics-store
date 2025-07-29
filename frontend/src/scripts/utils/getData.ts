export async function getUser(id: number) {
  const res = await fetch(`/api/users/${id}`);
  const data = await res.json();
  console.log('User loaded');
  return data;
}