import apply from "@/components/apply/apply";


const createForm = async()=>{
    const res = await fetch("http://localhost:3000/api/event", { next: { revalidate: 0 } });
  
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  };
  