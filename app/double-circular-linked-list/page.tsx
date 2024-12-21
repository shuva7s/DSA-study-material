import CodeBox from "@/components/shared/CodeBox";
import Header from "@/components/shared/Header";
import Note from "@/components/shared/Note";
import Text_section from "@/components/shared/Text_section";
import React from "react";

const DCll_page = () => {
  const code = `
#include <iostream>
using namespace std;

struct node {
    int data;
    node *prev, *next;
};

// Function to append a node at the end of the double circular linked list
void append(node **head, node **tail, int val) {
    node *t = new node;
    t->data = val;

    // If the list is empty, both head and tail will point to this node
    if (*head == nullptr) {
        t->prev = t;
        t->next = t;
        *head = *tail = t;
    }
    // If the list is not empty, append at the end and update links
    else {
        t->prev = *tail;
        t->next = *head;
        (*tail)->next = t;
        (*head)->prev = t;
        *tail = t;
    }
}

void normaldisplay(node *head) {
    if (head == nullptr) {
        cout << "List is empty" << endl;
        return;
    }
    node *t = head;
    do {
        cout << t->data << " ";
        t = t->next;
    } while (t != head);
    cout << endl;
}

void reversedisplay(node *tail) {
    if (tail == nullptr) {
        cout << "List is empty" << endl;
        return;
    }
    node *t = tail;
    do {
        cout << t->data << " ";
        t = t->prev;
    } while (t != tail);
    cout << endl;
}

int main() {
    node *head = nullptr;
    node *tail = nullptr;

    append(&head, &tail, 10);
    append(&head, &tail, 11);
    append(&head, &tail, 12);
    append(&head, &tail, 13);

    cout << "Normal display (head to tail): ";
    normaldisplay(head);

    cout << "Reverse display (tail to head): ";
    reversedisplay(tail);

    return 0;
}`;
  const additional_operations = `
void delbeg(node **head, node **tail) {
    if (*head == nullptr) return; // List is empty

    // If there is only one node
    if (*head == *tail) {
        delete *head;
        *head = *tail = nullptr;
    }
    // If there are more than one nodes
    else {
        node *t = *head;
        *head = (*head)->next;
        (*head)->prev = *tail;
        (*tail)->next = *head;
        delete t;
    }
}

void delend(node **head, node **tail) {
    if (*tail == nullptr) return; // List is empty

    // If there is only one node
    if (*head == *tail) {
        delete *tail;
        *head = *tail = nullptr;
    }
    // If there are more than one nodes
    else {
        node *t = *tail;
        *tail = (*tail)->prev;
        (*tail)->next = *head;
        (*head)->prev = *tail;
        delete t;
    }
}
`;
  return (
    <>
      <Header head_text="Double Circular Linked List" />
      <main className="wrapper my-4 flex flex-col gap-4">
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

export default DCll_page;
