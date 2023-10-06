"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  async function addTopic(event) {
    event.preventDefault();
    const data = {
      title: title,
      description: description,
    };
    const response = await axios.post("http://localhost:3000/api/topics", data);
    if (response.status === 201) {
      console.log("Topic has been created.");
      router.refresh();
      router.push("/");
    } else {
      console.log("Failed to create topic.");
    }
  }

  return (
    <form className="flex flex-col gap-4">
      <input
        className="border border-slate-600 rounded-md px-4 py-2"
        type="text"
        placeholder="Topic Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className="border border-slate-600 rounded-md px-4 py-2"
        type="text"
        placeholder="Topic Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={addTopic}
        className="bg-green-600 text-white font-bold p-2 w-fit rounded-md"
      >
        Add Topic
      </button>
    </form>
  );
}

export default AddTopic;
