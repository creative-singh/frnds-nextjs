export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()

  const paths = data.map(frnd => {
    return {
      params: { id: frnd.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  return {
    props: { frnd: data }
  }
}

const FrndsDetails = ({ frnd }) => {
  return (
    <>
      <h1>"{frnd.name}" Details</h1>
      <p>Email: {frnd.email}</p>
      <p>Username: {frnd.username}</p>
      <p>Website: {frnd.website}</p>
      <p>Working In: {frnd.company.name}</p>
      <p>Living In: {frnd.address.city}</p>
    </>
  );
}

export default FrndsDetails;