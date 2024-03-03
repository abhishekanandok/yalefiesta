export default function Page({ params }) {
  return <div className=" text-center text-5xl text-blue-800">
    <h1>Dashboard</h1>
    <h2>Username:- {params.userID}</h2>
  </div>
}