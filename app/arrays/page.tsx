import CodeBox from "@/components/shared/CodeBox";
import Header from "@/components/shared/Header";
import Text_section from "@/components/shared/Text_section";

const ArrayPage = () => {
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
                <CodeBox code={`int arr[5] = {1, 2, 3, 4, 5};`} />
              </div>

              <div>
                <h3>Dynamic (Vector)</h3>
                <CodeBox code={`vector<int> arr = {1, 2, 3, 4, 5};`} />
              </div>
            </>
          }
        />
      </main>
    </>
  );
};

export default ArrayPage;
