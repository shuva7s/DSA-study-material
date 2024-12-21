import CodeBox from "@/components/shared/CodeBox";
import Header from "@/components/shared/Header";
import Note from "@/components/shared/Note";
import Text_section from "@/components/shared/Text_section";
import React from "react";

const DLll_page = () => {
  const code = `
#include <iostream>
using namespace std;

struct Node
{
    int data;
    Node *prev, *next;
};

void append(Node **head, Node **tail, int val)
{
    Node *t = new Node();
    t->data = val;
    t->next = nullptr;

    if (*head == nullptr || *tail == nullptr)
    {
        t->prev = nullptr;
        *head = *tail = t;
    }
    else
    {
        (*tail)->next = t;
        t->prev = *tail;
        *tail = t;
    }
}

void addbeg(Node **head, Node **tail, int val)
{
    Node *t = new Node();
    t->data = val;
    t->prev = nullptr;

    if (*head == nullptr || *tail == nullptr)
    {
        t->next = nullptr;
        *head = *tail = t;
    }
    else
    {
        (*head)->prev = t;
        t->next = *head;
        *head = t;
    }
}

void normaldisplay(Node *h)
{
    if (h == nullptr)
    {
        cout << "Linked list is empty" << endl;
        return;
    }

    cout << endl;
    while (h != nullptr)
    {
        cout << h->data << "  ";
        h = h->next;
    }
    cout << endl;
}

void reversedisplay(Node *tl)
{
    if (tl == nullptr)
    {
        cout << "Linked list is empty" << endl;
        return;
    }

    cout << endl;
    while (tl != nullptr)
    {
        cout << tl->data << "  ";
        tl = tl->prev;
    }
    cout << endl;
}

int main()
{
    Node *head = nullptr;
    Node *tail = nullptr;

    append(&head, &tail, 10);
    append(&head, &tail, 11);
    append(&head, &tail, 12);
    append(&head, &tail, 13);

    normaldisplay(head);
    reversedisplay(tail);

    return 0;
}`;

  const additional_operations = `
void insertBefore(Node *p, int val)
{
    if (p == nullptr)
        return;

    Node *t = new Node();
    t->data = val;

    t->next = p;
    t->prev = p->prev;
    if (p->prev != nullptr)
    {
        p->prev->next = t;
    }
    p->prev = t;
}

void insertAfter(Node *p, int val)
{
    if (p == nullptr)
        return;

    Node *t = new Node();
    t->data = val;

    t->prev = p;
    t->next = p->next;
    if (p->next != nullptr)
        p->next->prev = t;
    p->next = t;
}

void delbeg(Node **head, Node **tail)
{
    if (*head == nullptr)
        return;

    if (*head == *tail)
    {
        delete *head;
        *head = *tail = nullptr;
    }
    else
    {
        Node *t = *head;
        *head = t->next;
        (*head)->prev = nullptr;
        delete t;
    }
}

void delend(Node **head, Node **tail)
{
    if (*tail == nullptr)
        return;

    if (*head == *tail)
    {
        delete *tail;
        *head = *tail = nullptr;
    }
    else
    {
        Node *t = *tail;
        *tail = t->prev;
        (*tail)->next = nullptr;
        delete t;
    }
}

void delany(Node *t)
{
    if (t == nullptr)
        return;

    if (t->prev != nullptr)
        t->prev->next = t->next;
    if (t->next != nullptr)
        t->next->prev = t->prev;
    delete t;
}`;
  return (
    <>
      <Header head_text="Double Linear Linked List" />
      <main className="wrapper my-4 flex flex-col gap-4">
        <p>
          A double linear linked list is a sequence of nodes where each node has
          data and two pointers, one pointing to the next node and the other to
          the previous node, allowing traversal in both directions.
        </p>
        <Note
          note={
            <div>
              Note that when we are <b>changing the head or tail pointer</b>,{" "}
              <b>or</b> there is a{" "}
              <b>possibility of changing the head or the tail pointer</b>,{" "}
              <b>we use **</b>. <b>Otherwise</b>, we use <b>*</b>
            </div>
          }
        />
        <Text_section
          head_text="How to make?"
          body_text={<CodeBox code={code} />}
        />
        <Text_section
          head_text="Additional Operations"
          body_text={<CodeBox code={additional_operations} />}
        />
      </main>
    </>
  );
};

export default DLll_page;
