import Column from "../Column/Column";

const columns = [
  { title: "Без статуса", cards: [
    { category: "Web Design", color: "orange" },
    { category: "Research", color: "green" },
    { category: "Web Design", color: "orange" },
    { category: "Copywriting", color: "purple" },
    { category: "Web Design", color: "orange" }
  ]},
  { title: "Нужно сделать", cards: [{ category: "Research", color: "green" }] },
  { title: "В работе", cards: [
    { category: "Research", color: "green" },
    { category: "Copywriting", color: "purple" },
    { category: "Web Design", color: "orange" }
  ]},
  { title: "Тестирование", cards: [{ category: "Research", color: "green" }] },
  { title: "Готово", cards: [{ category: "Research", color: "green" }] }
];

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columns.map((column) => <Column key={column.title} {...column} />)}
          </div>
        </div>
      </div>
    </main>
  );
}
export default Main;
