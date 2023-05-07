import Feed from "@/components/Feed";
import Header from "@/components/Header";
import Modal from "@/components/Modal";

export default function Home() {
  return (
   <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
   <Header />
   <Feed />
   <Modal />
   </div>
  );
}
