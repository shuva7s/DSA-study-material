import CodeBox from "@/components/shared/CodeBox";
import Header from "@/components/shared/Header";
import Note from "@/components/shared/Note";
import Text_section from "@/components/shared/Text_section";
import React from "react";

const StackPage = () => {
  const baseCode = `
#include <iostream>
#define MS 50

using namespace std;

struct Stack
{
    int arr[MS];
    int top;
};

void init(Stack *pts)
{
    pts->top = -1;
}

bool isFull(Stack *pts)
{
    return pts->top == MS - 1;
}

bool isEmpty(Stack *pts)
{
    return pts->top == -1;
}

void push(Stack *pts, int value)
{
    if (!isFull(pts))
        pts->arr[++pts->top] = value;
}

int pop(Stack *pts)
{
    return isEmpty(pts) ? 888 : pts->arr[pts->top--];
}

int peek(Stack *pts)
{
    return isEmpty(pts) ? -999 : pts->arr[pts->top];
}

int main()
{
    Stack st;
    init(&st);

    push(&st, 10);
    push(&st, 20);
    push(&st, 30);

    cout << peek(&st) << endl;

    cout << pop(&st) << endl;

    cout << "Stack empty? " << (isEmpty(&st) ? "Yes" : "No") << endl;

    push(&st, 40);

    cout << peek(&st) << endl;

    return 0;
}
`;
  const InfixToPostfix = `
  // All 6 basic functions

int precedence(char ch)
{
    if (ch == '*' || ch == '/')
        return 3;
    else if (ch == '+' || ch == '-')
        return 2;
    return 1;
}

void convert(const char inp[], char op[])
{
    Stack st;
    init(&st);
    int i, j;
    for (i = 0, j = 0; inp[i] != '\\0'; ++i)
    {
        if (isdigit(inp[i]))
            op[j++] = inp[i];
        else
        {
            if (inp[i] == '(')
                push(&st, inp[i]);
            else if (inp[i] == ')')
            {
                int temp;
                do
                {
                    temp = pop(&st);
                    if (temp != '(')
                        op[j++] = temp;
                } while (temp != '(');
            }
            else
            {
                while (!isEmpty(&st) && precedence(peek(&st)) >= precedence(inp[i]))
                    op[j++] = pop(&st);
                push(&st, inp[i]);
            }
        }
    }
    while (!isEmpty(&st))
        op[j++] = pop(&st);
    op[j] = '\\0';
}

int evaluate(const char post[])
{
    Stack st;
    init(&st);
    for (int i = 0; post[i] != '\\0'; ++i)
    {
        if (isdigit(post[i]))
            push(&st, post[i] - '0');
        else
        {
            int op2 = pop(&st);
            int op1 = pop(&st);
            int result;
            switch (post[i])
            {
            case '+':
                result = op1 + op2;
                break;
            case '-':
                result = op1 - op2;
                break;
            case '*':
                result = op1 * op2;
                break;
            case '/':
                result = op1 / op2;
                break;
            case '%':
                result = op1 % op2;
                break;
            }
            push(&st, result);
        }
    }
    return pop(&st);
}

int main()
{
    char a[MS], b[MS];
    cout << "Enter an infix expression: ";
    cin.getline(a, MS);
    convert(a, b);
    cout << "Postfix Expression: " << b;
    cout << "Evaluation Result: " << evaluate(b) << endl;
    return 0;
}`;

  const cppStack = `
#include <iostream>
#include <stack>

using namespace std;

int main()
{
    stack<int> st;

    // Push elements
    st.push(10);
    st.push(20);
    st.push(30);
    cout << "Top element after pushes: " << st.top() << endl;

    // Pop an element
    st.pop();
    cout << "Top element after one pop: " << st.top() << endl;

    // Check if stack is empty
    if (st.empty())
        cout << "Stack is empty" << endl;
    else
        cout << "Stack is not empty" << endl;

    // Get stack size
    cout << "Stack size: " << st.size() << endl;

    return 0;
}
`;
  return (
    <>
      <Header head_text="Stack" />
      <main className="wrapper my-4 flex flex-col gap-4">
        <p>
          A stack is a linear data structure that follows a{" "}
          <b>
            LIFO {"("}last in, first out{")"}
          </b>{" "}
          principle. In other words,{" "}
          <b>
            the last element added to the stack is the first one to be removed.
          </b>
        </p>
        <Text_section
          head_text="Components of a stack"
          body_text={
            <div>
              <p>There are 6 main funcntions.</p>
              <ul className="list-disc pl-4">
                <li>
                  <b>Init</b>: Initialize the stack
                </li>
                <li>
                  <b>Is_full</b>: Check if the stack is full
                </li>
                <li>
                  <b>Is_empty</b>: Check if the stack is empty
                </li>
                <li>
                  <b>Push</b>: Add an element to the stack
                </li>
                <li>
                  <b>Pop</b>: Remove an element from the stack
                </li>
                <li>
                  <b>Peek</b>: Access the top element of the stack
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
          head_text="Application: Infix to postfix conversion"
          body_text={<CodeBox code={InfixToPostfix} />}
        />
        <Text_section
          head_text="Inbuilt stack in C++"
          body_text={<CodeBox code={cppStack} />}
        />
      </main>
    </>
  );
};

export default StackPage;
