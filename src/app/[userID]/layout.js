import Sidebar from "./components/sidebar";


export default function DashboardLayout({
    children,params, // will be a page or nested layout
  }) {
    return (
      <section className=" flex">
        <Sidebar userID={params.userID}/>
   
        {children}

      </section>
    )
  }