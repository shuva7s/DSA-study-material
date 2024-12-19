import CodeBox from "@/components/shared/CodeBox";
import Header from "@/components/shared/Header";
import Text_section from "@/components/shared/Text_section";
import React from "react";

const StringsPage = () => {
  const stringDeclarationExample = `
#include <iostream>
#include <string>
using namespace std;

int main()
{
    char str[] = "hello";
    char str2[6] = "Hello";

    string st = "hello world!";
    return 0;
}`;
  const stringOperations = `
#include <iostream>
#include <string>
using namespace std;

int main()
{
    string str = "hello";

    str.assign("Wssup"); // assign

    // append
    str += " Bro";
    str.append("..!");

    size_t len = str.length(); // length

    // Using empty() to check if a string is empty or not
    cout << str.empty() << endl;

    str.clear(); // Clears the string

    // Inserts " Inserted" at position 5
    str.insert(5, " Inserted ");

    // Erases 9 characters starting from position 5
    str.erase(5, 9);

    // searching operations
    size_t pos = str.find("World");          // Finds the first occurrence of "World"
    
    size_t pos = str.find("World", 10);      // Starts searching from position 10
    
    size_t pos = str.find_first_of("aeiou"); // Finds the first occurrence of any character in "aeiou"

    size_t pos = str.rfind("World"); // Finds the last occurrence of "World"

    return 0;
}`;
  return (
    <>
      <Header head_text="Strings" />
      <main className="wrapper my-4 flex flex-col gap-4">
        <Text_section
          head_text="What?"
          body_text={
            <p>
              A string is a sequence of characters. It is a collection of
              characters that are put together to form a word or a sentence.
            </p>
          }
        />
        <Text_section
          head_text="Why?"
          body_text={
            <p>
              Strings are used to represent text, such as names, addresses, and
              phone numbers. They are also used to store text in computer
              programs.
            </p>
          }
        />
        <Text_section
          head_text="How to define?"
          body_text={<CodeBox code={stringDeclarationExample} />}
        />
        <Text_section
          head_text="Operations"
          body_text={<CodeBox code={stringOperations} />}
        />
      </main>
    </>
  );
};

export default StringsPage;
