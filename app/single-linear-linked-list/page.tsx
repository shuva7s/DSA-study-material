import CodeBox from "@/components/shared/CodeBox";
import Header from "@/components/shared/Header";
import Note from "@/components/shared/Note";
import Text_section from "@/components/shared/Text_section";

const SLll_page = () => {
  const code = `
#include <iostream>
using namespace std;

struct node
{
    int data;
    node *next;
};

void insertIntoLinklist(node *&head, int val)
{
    node *newnode = new node();
    newnode->data = val;
    newnode->next = nullptr;

    if (head == nullptr)
        head = newnode;
    else
    {
        node *temp = head;
        while (temp->next != nullptr)
            temp = temp->next;
        temp->next = newnode;
    }
}

void displayLinklist(node *head)
{
    node *temp = head;
    while (temp != nullptr)
    {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
}

int main()
{
    node *head = nullptr;

    insertIntoLinklist(head, 10);
    insertIntoLinklist(head, 20);
    insertIntoLinklist(head, 30);
    insertIntoLinklist(head, 40);

    displayLinklist(head);
    return 0;
}
`;

  const additional_operations = `
void insertFront(node *&head, int val)
{
    node *newnode = new node();
    newnode->data = val;
    newnode->next = head;
    head = newnode;
}

void insertIntoNthIndex(node *&head, int val, int n)
{
    node *newNode = new node();
    newNode->data = val;
    newNode->next = nullptr;

    if (n == 0)
    {
        newNode->next = head;
        head = newNode;
        return;
    }

    node *t = head;
    int currentNode = 0;

    while (t != nullptr && currentNode < n - 1)
    {
        t = t->next;
        ++currentNode;
    }

    if (t == nullptr)
    {
        cout << "Position is out of bounds." << endl;
        delete newNode;
        return;
    }

    node *temp = t->next;
    t->next = newNode;
    newNode->next = temp;
}

void deleteFront(node *&head)
{
    if (head == nullptr)
        return;

    node *t = head;
    head = t->next;
    delete t;
}

void deleteBack(node *&head)
{
    if (head == nullptr)
        return;
    if (head->next == nullptr)
    {
        delete head;
        head = nullptr;
        return;
    }

    node *prev = nullptr;
    node *current = head;

    while (current->next != nullptr)
    {
        prev = current;
        current = current->next;
    }
    delete current;
    prev->next = nullptr;
}
`;
  return (
    <>
      <Header head_text="Single Linear Linked List" />
      <main className="wrapper my-4 flex flex-col gap-4">
        <Note
          note={
            <div>
              Note that when we are <b>changing the head pointer</b>, <b>or</b>{" "}
              there is a<b>possibility of changing the head pointer</b>,{" "}
              <b>we use *&</b>. <b>Otherwise</b>, we use <b>*</b>
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

export default SLll_page;
