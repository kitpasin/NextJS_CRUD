"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

function DeleteTopic({ id }) {
    const router = useRouter();

    async function deleteTopic() {
        const confirmed = confirm("Are you sure?");
        if (confirmed) {
            const response = await axios.delete(`http://localhost:3000/api/topics?id=${id}`)
            if (response.status === 200) {
                router.refresh();
            }
        }
    }

  return (
    <button onClick={deleteTopic} className="text-red-600">
      <HiOutlineTrash size={24} />
    </button>
  );
}

export default DeleteTopic;
