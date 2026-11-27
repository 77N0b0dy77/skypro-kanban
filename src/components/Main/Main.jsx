
import { useState, useEffect } from "react";
import Column from "../Column/Column";
import cards from "../../../data";

const columns = [
  { title: "Без статуса" },
  { title: "Нужно сделать" },
  { title: "В работе" },
  { title: "Тестирование" },
  { title: "Готово" },
];

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          {isLoading ? (
            <div className="loading">
              Данные загружаются
            </div>
          ) : (
            <div className="main__content">
              {columns.map((column) => {
                const filteredCards = cards.filter(
                  (card) => card.status === column.title
                );

                return (
                  <Column
                    key={column.title}
                    title={column.title}
                    cards={filteredCards}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
