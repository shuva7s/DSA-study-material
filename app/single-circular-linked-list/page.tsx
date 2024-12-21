import CodeBox from "@/components/shared/CodeBox";
import Header from "@/components/shared/Header";
import Note from "@/components/shared/Note";
import Text_section from "@/components/shared/Text_section";
import React from "react";

const SCll_page = () => {
  const code = `
#include <iostream>
using namespace std;

struct Block {
    int data;
    Block* next;
};
typedef Block Node;

void append(Node** pthead, Node** ptrear, int val) {
    Node* t = new Node();
    t->data = val;

    // For the first node
    if (*ptrear == nullptr) {
        t->next = t;
        *pthead = t;
        *ptrear = t;
    } else { 
        // For more than one node
        t->next = *pthead;
        (*ptrear)->next = t;
        *ptrear = t;
    }
}

void display(Node* h) {
    if (h == nullptr) {
        cout << "No element is present in the linked list" << endl;
        return;
    }

    Node* t = h;
    do {
        cout << t->data << endl;
        t = t->next;
    } while (t != h);
}

int main() {
    Node* head = nullptr;
    Node* rear = nullptr;

    append(&head, &rear, 10);
    append(&head, &rear, 12);
    append(&head, &rear, 14);
    append(&head, &rear, 19);

    display(head);

    return 0;
}`;

  const additional_operations = `
void delbeg(Node** pthead, Node** ptrear) {
    if (*ptrear == nullptr)
        return;

    Node* t = *pthead;

    // If there's only one node
    if ((*pthead)->next == *pthead) {
        *pthead = nullptr;
        *ptrear = nullptr;
    } else { 
        // For more than one node
        *pthead = (*pthead)->next;
        (*ptrear)->next = *pthead;
    }

    delete t;
}`;
  return (
    <>
      <Header head_text="Single Circular Linked List" />
      <main className="wrapper my-4 flex flex-col gap-4">
        <p>
          A single circular linked list is a sequence of connected nodes where
          each node contains data and a pointer to the next node in the list.
          Unlike a linear linked list, the last node points back to the first
          node, forming a circle.
        </p>
        <Note
          note={
            <div>
              Note that when we are <b>changing the head pointer</b>, <b>or</b>{" "}
              there is a <b>possibility of changing the head pointer</b>,{" "}
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

export default SCll_page;
