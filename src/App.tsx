import { useState } from "react";
import getGroups, { GroupType } from "./api/getGroup";
import "./App.css";
import Group from "./components/Group";

function App() {
  const [groups, setGroups] = useState<GroupType[]>(getGroups());
  console.log("running app");
  return (
    <main className="main">
      <h2>Drag & Drop Demo App</h2>
      <section className="group-container">
        {groups.map((group) => (
          <Group key={group.id} title={group.type.label} id={group.id} />
        ))}
      </section>
    </main>
  );
}

export default App;
