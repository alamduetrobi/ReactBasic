import "./App.css";

import { Greet } from "./components/Greet";
import { Message } from "./components/Message";
import { ClickHandler } from "./components/ClickHandler";
import { ParentComponent } from "./components/ParentComponent";
// import { UserGreeting } from "./components/UserGreeting";
import { NameList } from "./components/NameList";
import { Form } from "./components/Form";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import NAMES from "./components/data.json";
import { useState, useTransition } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isPending, startTransition] = useTransition();
  const changeHandler = (event) => {
    setInputValue(event.target.value);
    startTransition(() => setQuery(event.target.value));
  };

  const filernames = NAMES.filter((item) => {
    return item.first_name.includes(query) || item.last_name.includes(query);
  });

  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Batman" />
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman">
        <p>This is children props</p>
      </Greet> */}

      {/* <Message /> */}
      {/* <ClickHandler></ClickHandler> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <NameList></NameList> */}
      {/* <Form></Form> */}
      {/* <PostList></PostList> */}
      {/* <PostForm></PostForm> */}
      <input type="text" value={inputValue} onChange={changeHandler} />
      {isPending && <p>Updating list ..</p>}
      {filernames.map((item) => (
        <p key={item.id}>
          {item.first_name}
          {item.last_name}
        </p>
      ))}
    </div>
  );
}

export default App;
