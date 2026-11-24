import "./App.css";
import AddMenu from "./components/AddMenu";
import Header from "./components/Header";
import MenuCard from "./components/MenuCard";
import { initialMenus } from "./data";
import { useState } from "react";

function App() {
  const [menus, setMenus] = useState(initialMenus);

  const totalVotes = menus.reduce((sum, m) => sum + m.votes, 0);
  const maxVotes = Math.max(0, ...menus.map((m) => m.votes));

  const addMenu = (name) => {
    setMenus((prev) => [
      ...prev,
      { id: Date.now(), emoji: "☕", name, votes: 0 },
    ]);
  };

  const vote = (id) => {
    setMenus((prev) =>
      prev.map((m) => (m.id === id ? { ...m, votes: m.votes + 1 } : m)),
    );
  };

  const resetVotes = () => {
    setMenus((prev) => prev.map((m) => ({ ...m, votes: 0 })));
  };

  return (
    <div className="app">
      <Header title={"☕ 오늘 커피 뭐 마시지?"} totalVotes={totalVotes} />
      <AddMenu onAdd={addMenu} />
      <ul className="menus">
        {menus.map((m) => (
          <MenuCard
            key={m.id}
            {...m}
            isTop={maxVotes > 0 && m.votes === maxVotes}
            onVote={vote}
          />
        ))}
      </ul>
      <footer className="footer">
        <button type="button" className="reset" onClick={resetVotes}>
          투표 초기화
        </button>
      </footer>
    </div>
  );
}

export default App;
