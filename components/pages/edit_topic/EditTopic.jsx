"use client";

import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

function EditTopic() {
  const params = useParams();
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const router = useRouter();

  async function updateTopic(event) {
    event.preventDefault();
    const data = {
      newTitle: newTitle,
      newDescription: newDescription,
    };
    const response = await axios.put(
      `http://localhost:3000/api/topics/${params.id}`,
      data
    );
    if (response.status === 200) {
      console.log("Topic has been updated.");
      router.refresh();
      router.push("/");
    } else {
      console.log("Failed to updated topic.");
    }
  }

  return (
    <form className="flex flex-col gap-4">
      <input
        className="border border-slate-600 rounded-md px-4 py-2"
        type="text"
        placeholder="Topic Title"
        value={newTitle}
        onChange={(event) => setNewTitle(event.target.value)}
      />
      <input
        className="border border-slate-600 rounded-md px-4 py-2"
        type="text"
        placeholder="Topic Description"
        value={newDescription}
        onChange={(event) => setNewDescription(event.target.value)}
      />
      <button
        onClick={updateTopic}
        className="bg-green-600 text-white font-bold p-2 w-fit rounded-md"
      >
        Update Topic
      </button>
    </form>
  );
}

export default EditTopic;
