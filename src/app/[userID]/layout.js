import Sidebar from "./components/sidebar";


export default function DashboardLayout({ children, params }) {
  return (
    <section className=" flex">
      <Sidebar userID={params.userID} />

      {children}

    </section>
  )
}