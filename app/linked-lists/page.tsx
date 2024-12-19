import Header from "@/components/shared/Header";
import Note from "@/components/shared/Note";
import Text_section from "@/components/shared/Text_section";
import Image from "next/image";
import React from "react";

const LinkedListPage = () => {
  return (
    <>
      <Header head_text="Linked list" />
      <main className="wrapper my-4 flex flex-col gap-4">
        <Text_section
          head_text="What?"
          body_text={
            <div>
              <p>
                A linked list is a linear data structure in which elements,
                called nodes, are <b>connected by pointers</b>. Each node
                contains two parts:
              </p>
              <ul className="list-disc pl-4">
                <li>
                  <b>Data:</b> The actual value stored in the node.
                </li>
                <li>
                  <b>Pointer/Reference:</b>A link to the next node in the
                  sequence.
                </li>
              </ul>

              <p>
                Unlike arrays, each{" "}
                <b> node can be located anywhere in memory</b>, and the pointer
                ensures the connection between nodes.
              </p>
            </div>
          }
        />
        <Note
          note={
            <p>In double linked list, each node has two pointers and data.</p>
          }
        />
        <Text_section
          head_text="Why?"
          body_text={
            <div>
              <p>Reasons why linked lists are used: </p>
              <ul className="list-disc pl-4">
                <li>
                  <b>Dynamic Memory:</b> Size can grow or shrink as needed,
                  unlike fixed-size arrays.
                </li>
                <li>
                  <b>Efficient Insertions/Deletions:</b> No need to shift
                  elements, making operations faster.
                </li>
                <li>
                  <b>No Contiguous Memory Needed:</b> Suitable for systems with
                  fragmented memory.
                </li>
                <li>
                  <b>Flexible Structure:</b> Can easily represent stacks,
                  queues, and graphs.
                </li>
                <li>
                  <b>Collision Handling:</b> Used in hash tables for chaining.
                </li>
                <li>
                  <b>Undo/Redo Features:</b> Ideal for managing history in text
                  editors or applications.
                </li>
                <li>
                  <b>Real-Time Usage:</b> Perfect for tasks like memory
                  management and navigation systems.
                </li>
              </ul>
            </div>
          }
        />
        <Text_section
          head_text="Where?"
          body_text={
            <div>
              <p>Linked lists are used whenever: </p>
              <ul className="list-disc pl-4">
                <li>The size of data changes dynamically.</li>
                <li>Frequent insertions or deletions are needed.</li>
                <li>Memory allocation needs to be efficient.</li>
                <li>Sequential traversal is sufficient.</li>
              </ul>
            </div>
          }
        />
        <Text_section
          head_text="Types?"
          body_text={
            <>
              <div className="mt-6">
                <h3>1. Single linear linked list</h3>
                <Image
                  src="/SLll.png"
                  alt="Single linear linked list"
                  width={400}
                  height={400}
                  className="w-full max-w-[600px] rounded-md my-2"
                  priority={true}
                />
              </div>
              <div>
                <h3>2. Single circular linked list</h3>
                <Image
                  src="/SCll.jpg"
                  alt="Single circular linked list"
                  width={500}
                  height={500}
                  className="w-full max-w-[600px] rounded-md my-2"
                  priority={true}
                />
              </div>
              <div>
                <h3>3. Double linear linked list</h3>
                <Image
                  src="/DLll.jpg"
                  alt="Single linear linked list"
                  width={400}
                  height={400}
                  className="w-full max-w-[600px] rounded-md my-2"
                  priority={true}
                />
              </div>
              <div>
                <h3>4. Double circular linked list</h3>
                <Image
                  src="/DCll.jpg"
                  alt="Single circular linked list"
                  width={500}
                  height={500}
                  className="w-full max-w-[600px] rounded-md my-2"
                  priority={true}
                />
              </div>
            </>
          }
        />
      </main>
    </>
  );
};

export default LinkedListPage;
