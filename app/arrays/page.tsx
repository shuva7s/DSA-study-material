import CodeBox from "@/components/shared/CodeBox";
import Header from "@/components/shared/Header";
import Text_section from "@/components/shared/Text_section";

const ArrayPage = () => {
  const basicArrayExample = `
#include <iostream>
using namespace std;
int main()
{
    int arr1[10];
    int arr2[] = {1, 2, 3, 4, 5};
    int matrix[4][5];
    
    int matrix[][3] = {
        {1, 2, 3},
        {1, 2, 3},
        {1, 2, 3},
    };

    return 0;
}`;

const dynamicArrayExample = `
#include <iostream>
#include <vector>
using namespace std;
int main()
{
    vector<int> vec;
    vector<int> array = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    vector<int> array2(10, 0); // size 10 and all values are 0

    int size = array.size();
    array.push_back(10); // pushing a new element at the end of the vector

    for (auto i : array2)
        cout << i << " ";

    for (auto i : array2)
        cout << i << " ";

    // for only printing purpose we use const so that value does not change by accedent
    for (const int &val : array)
        cout << val << " ";

    // But if wanted to change then we should not use const
    for (int &val : array)
        val *= 2;

    for (auto val : array)
        val += 1; // Attempt to modify without & // this wont actually change the numbers because we are not using the reference.

    return 0;
}`
  return (
    <>
      <Header head_text="Arrays" />
      <main className="wrapper my-4 flex flex-col gap-4">
        <Text_section
          head_text="What?"
          body_text={
            <p>
              Arrays are a fundamental data structure in programming. They allow
              you to store a{" "}
              <b>
                collection of elements of the same type in a contiguous block of
                memory
              </b>
              , making it easy to access and modify elements by their index.
            </p>
          }
        />

        <Text_section
          head_text="How to define?"
          body_text={
            <>
              <div>
                <h3>Basic</h3>
                <CodeBox code={basicArrayExample} />
              </div>

              <div>
                <h3>Dynamic (Vector)</h3>
                <CodeBox code={dynamicArrayExample} />
              </div>
            </>
          }
        />
      </main>
    </>
  );
};

export default ArrayPage;
