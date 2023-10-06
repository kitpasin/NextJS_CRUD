import connectToMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    await connectToMongoDB();
    const existingTopic = await Topic.findOne({ title });

    if (existingTopic) {
      return NextResponse.json(
        { message: "Topic already exists." },
        { status: 400 }
      );
    } else {
      await Topic.create({ title, description });
      return NextResponse.json({ message: "Topic Created." }, { status: 201 });
    }
  } catch (error) {
    console.error("Error creating topic:", error);
    return NextResponse.json(
      { message: "Failed to create topic." },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectToMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectToMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic Deleted." }, { status: 200 });
}
