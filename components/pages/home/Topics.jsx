import axios from "axios";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import DeleteTopic from "./DeleteTopic";

async function getTopics() {
  try {
    const response = await axios.get("http://localhost:3000/api/topics");
    return response.data;
  } catch (error) {
    console.log("Error loading topics : ", error);
  }
}

async function Topics() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((topic) => (
        <div
          key={topic._id}
          className="p-4 border border-slate-600 rounded-md mb-4 flex justify-between items-start gap-4"
        >
          <div>
            <p className="text-xl font-bold">{topic.title}</p>
            <p>{topic.description}</p>
          </div>
          <div className="flex gap-2">
            <Link className="text-yellow-600" href={`/edit_topic/${topic._id}`}>
              <HiPencilAlt size={24} />
            </Link>
            <DeleteTopic id={topic._id} />
          </div>
        </div>
      ))}
    </>
  );
}

export default Topics;
