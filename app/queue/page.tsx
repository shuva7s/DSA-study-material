import CodeBox from "@/components/shared/CodeBox";
import Header from "@/components/shared/Header";
import Text_section from "@/components/shared/Text_section";

const QueuePage = () => {
  const baseCode = `
#include <iostream>
#define MS 30

using namespace std;

struct Queue
{
    int arr[MS];
    int front, rear;
};

void init(Queue *ptq)
{
    ptq->front = ptq->rear = -1;
}

bool isEmpty(Queue *ptq)
{
    return ptq->front == -1;
}

bool isFull(Queue *ptq)
{
    return (ptq->front == 0 && ptq->rear == MS - 1) || (ptq->front == ptq->rear + 1);
}

void enqueue(Queue *ptq, int val)
{
    if (isFull(ptq))
        return;
    if (ptq->rear == -1)
        ptq->rear = ptq->front = 0;
    else if (ptq->rear == MS - 1)
        ptq->rear = 0;
    else
        ++ptq->rear;
    ptq->arr[ptq->rear] = val;
}

int dequeue(Queue *ptq)
{
    if (isEmpty(ptq))
        return 999;
    int temp = ptq->arr[ptq->front];
    if (ptq->rear == ptq->front)
        ptq->rear = ptq->front = -1;
    else if (ptq->front == MS - 1)
        ptq->front = 0;
    else
        ++ptq->front;
    return temp;
}

int dequeueRear(Queue *ptq)
{
    if (isEmpty(ptq))
        return -999;
    int temp = ptq->arr[ptq->rear];
    if (ptq->rear == ptq->front)
        ptq->rear = ptq->front = -1;
    else if (ptq->rear == 0)
        ptq->rear = MS - 1;
    else
        --ptq->rear;
    return temp;
}

void enqueueFront(Queue *ptq, int val)
{
    if (isFull(ptq))
        return;
    if (ptq->rear == -1)
        ptq->front = ptq->rear = MS - 1;
    else if (ptq->front == 0)
        ptq->front = MS - 1;
    else
        --ptq->front;
    ptq->arr[ptq->front] = val;
}

int main()
{
    Queue Q1;
    init(&Q1);

    enqueue(&Q1, 10);
    enqueue(&Q1, 11);
    enqueue(&Q1, 12);
    enqueue(&Q1, 13);
    enqueue(&Q1, 14);
    enqueue(&Q1, 15);
    enqueueFront(&Q1, 7);

    cout << "\\n" << dequeue(&Q1);
    cout << "\\n" << dequeue(&Q1);
    cout << "\\n\\n" << dequeueRear(&Q1);
    cout << "\\n" << dequeueRear(&Q1);
    
    return 0;
}
`;

const cppQueue = `
#include <iostream>
#include <queue>

using namespace std;

int main()
{
    queue<int> q;

    // Enqueue elements
    q.push(10);
    q.push(20);
    q.push(30);
    cout << "Front element after pushes: " << q.front() << endl;
    cout << "Rear element after pushes: " << q.back() << endl;

    // Dequeue an element
    q.pop();
    cout << "Front element after one pop: " << q.front() << endl;

    // Check if queue is empty
    if (q.empty())
        cout << "Queue is empty" << endl;
    else
        cout << "Queue is not empty" << endl;

    // Get queue size
    cout << "Queue size: " << q.size() << endl;

    return 0;
}
`
  return (
    <>
      <Header head_text="Queue" />
      <main className="wrapper my-4 flex flex-col gap-4">
        <p>
          A queue is a linear data structure that follows a{" "}
          <b>
            FIFO {"("}first in, first out{")"}
          </b>{" "}
          principle. In other words,{" "}
          <b>
            the first element that is added to the queue is the first one to be
            removed.
          </b>
        </p>
        <Text_section
          head_text="Components of a queue"
          body_text={
            <div>
              <p>There are 7 main funcntions.</p>
              <ul className="list-disc pl-4">
                <li>
                  <b>Init</b>: Initialize the queue
                </li>
                <li>
                  <b>Is_full</b>: Check if the queue is full
                </li>
                <li>
                  <b>Is_empty</b>: Check if the queue is empty
                </li>
                <li>
                  <b>Enque</b>: Add an element to the queue
                </li>
                <li>
                  <b>Enque_front</b>: Add an element to the front of the queue
                </li>
                <li>
                  <b>Dequeue</b>: Deletes the first element of the queue
                </li>
                <li>
                  <b>Dequeue_rear</b>: Deletes the last element of the queue
                </li>
              </ul>
            </div>
          }
        />
        <Text_section
          head_text="How to make?"
          body_text={<CodeBox code={baseCode} />}
        />
        <Text_section
          head_text="Inbuilt queue in C++"
          body_text={<CodeBox code={cppQueue} />}
        />
      </main>
    </>
  );
};

export default QueuePage;
