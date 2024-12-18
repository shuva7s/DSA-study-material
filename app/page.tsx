import CodeBox from "@/components/shared/CodeBox";
import Header from "@/components/shared/Header";
import Text_section from "@/components/shared/Text_section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const cppCode = `
  #include <iostream>
  using namespace std;
  
  int main() {
      cout << "Hello, World!" << endl;
      return 0;
  }
    `;
  return (
    <>
      <Header head_text="Introduction" />
      <main className="wrapper my-4 flex flex-col gap-4">
        <Text_section
          head_text="Why?"
          body_text={
            <p>
              Learning Data Structures and Algorithms (DSA) helps you{" "}
              <b>solve problems efficiently</b>, write better code, and{" "}
              <b>crack coding interviews</b>. It’s the foundation of programming
              and makes you a smarter, more confident developer!
            </p>
          }
        />

        <Text_section
          head_text="What?"
          body_text={
            <>
              <p>
                <b>DS (Data Structures):</b> A data structure is a{" "}
                <b>way of organizing and storing data</b> to make it easier to
                access and use. Examples include arrays, linked lists, stacks,
                queues, and trees.
              </p>
              <p>
                <b>A (Algorithms):</b> An algorithm is a step-by-step method or
                <b> set of rules to solve a problem or complete a task</b>, like
                sorting numbers or finding the shortest path.
              </p>
            </>
          }
        />

        {/* <CodeBox code={cppCode} /> */}

        <Text_section
          head_text="Roadmap"
          body_text={
            <>
              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <h3>Data structures (DS)</h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-4 mt-2">
                      <h4>Arrays</h4>
                      <ul className="pl-4 list-disc">
                        <li>Basics</li>
                        <li>Operations</li>
                        <li>Applications</li>
                      </ul>
                    </div>
                    <div className="pl-4 mt-2">
                      <h4>Strings</h4>
                      <ul className="pl-4 list-disc">
                        <li>Basics</li>
                        <li>Manipulations</li>
                        <li>Common Problems</li>
                      </ul>
                    </div>

                    <div className="pl-4 mt-2">
                      <h4>Linked Lists</h4>
                      <ul className="pl-4 list-disc">
                        <li>Single Linear Linked List</li>
                        <li>Single Circular Linked List</li>
                        <li>Double Linear Linked List</li>
                        <li>Double Circular Linked List</li>
                      </ul>
                    </div>
                    <div className="pl-4 mt-2">
                      <h4>Stacks</h4>
                      <ul className="pl-4 list-disc">
                        <li>Implementations</li>
                        <li>Applications</li>
                      </ul>
                    </div>
                    <div className="pl-4 mt-2">
                      <h4>Queues</h4>
                      <ul className="pl-4 list-disc">
                        <li>Implementations</li>
                        <li>Applications</li>
                      </ul>
                    </div>
                    <div className="pl-4 mt-2">
                      <h4>Trees</h4>
                      <ul className="pl-4 list-disc">
                        <li>Binary tree</li>
                        <li>Tree traversals DFS, BFS, Pre-In-Post order</li>
                        <li>Binary search tree</li>
                        <li>AVL trees</li>
                        <li>Red black trees</li>
                        <li>Heap tree</li>
                      </ul>
                    </div>
                    <div className="pl-4 mt-2">
                      <h4>Graphs</h4>
                      <ul className="pl-4 list-disc">
                        <li>Representations</li>
                        <li>Traversals BFS and DFS</li>
                      </ul>
                    </div>
                    <div className="pl-4 mt-2">
                      <h4>Hashing</h4>
                      <ul className="pl-4 list-disc">
                        <li>Hash tables</li>
                        <li>Hash maps</li>
                        <li>Applications</li>
                      </ul>
                    </div>
                    <div className="pl-4 mt-2">
                      <h4>Advance Data Structures</h4>
                      <ul className="pl-4 list-disc">
                        <li>Tries: Autocomplete</li>
                        <li>Segment trees</li>
                        <li>Fenwick trees</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible defaultValue="item-2">
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <h3>Algorithm (A)</h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-4 mt-2">
                      <h4>Basics</h4>
                      <ul className="pl-4 list-disc">
                        <li>Time and space complexity</li>
                        <li>Recursion: Factorial, fibonacci</li>
                      </ul>
                    </div>
                    <div className="pl-4 mt-2">
                      <h4>Sorting</h4>
                      <ul className="pl-4 list-disc">
                        <li>Bubble sort</li>
                        <li>Insertion sort</li>
                        <li>Selection sort</li>
                        <li>Merge sort</li>
                        <li>Quick sort</li>
                      </ul>
                    </div>

                    <div className="pl-4 mt-2">
                      <h4>Searching</h4>
                      <ul className="pl-4 list-disc">
                        <li>Linear search</li>
                        <li>Binary search</li>
                      </ul>
                    </div>
                    <div className="pl-4 mt-2">
                      <h4>Divide and Conquer</h4>
                      <ul className="pl-4 list-disc">
                        <li>Applications</li>
                      </ul>
                    </div>
                    <div className="pl-4 mt-2">
                      <h4>Greedy</h4>
                      <ul className="pl-4 list-disc">
                        <li>Coin change</li>
                        <li>Activity selection</li>
                        <li>Fractional Knapsack</li>
                        <li>Job scheduling</li>
                      </ul>
                    </div>
                    <div className="pl-4 mt-2">
                      <h4>Dynamic Programming</h4>
                      <ul className="pl-4 list-disc">
                        <li>Basics: Memoization and tabulation</li>
                        <li>0-1 Knapsack</li>
                        <li>Longest Common Subsequence</li>
                      </ul>
                    </div>
                    <div className="pl-4 mt-2">
                      <h4>Graph algorithms</h4>
                      <ul className="pl-4 list-disc">
                        <li>
                          Shortest path: Dijkstra, Bellman-Ford, Floyd Warshall
                        </li>
                        <li>Minimum spanning tree: Prim, Kruskal</li>
                        <li>Topological sort</li>
                      </ul>
                    </div>
                    <div className="pl-4 mt-2">
                      <h4>Backtracking</h4>
                      <ul className="pl-4 list-disc">
                        <li>N Queens</li>
                        <li>Sudoku solver</li>
                        <li>Permutations</li>
                      </ul>
                    </div>
                    <div className="pl-4 mt-2">
                      <h4>Advance algorithms</h4>
                      <ul className="pl-4 list-disc">
                        <li>Sliding window: Sub array problems</li>
                        <li>Two pointers: Pair sum, triplets</li>
                        <li>Bit manipulations</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </>
          }
        />
      </main>
    </>
  );
}
