import { useEffect, useState } from "react";
import { IoMdHappy } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
interface List {
  title: string;
  description: string;
  id: string;
}

const FirstProject = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [items, setItems] = useState<List[]>([]);
  const [completed, setCompleted] = useState<boolean>(false);

  useEffect(() => {
    // if (title && description) {
    //   alert("You have completed the assignment!!");
    // }
    const storedItems = JSON.parse(localStorage.getItem("items") || "[]");
    setItems(storedItems);
  }, []);
  //[title, description]

  const saveToLocalStorage = (newItems: List[]) => {
    localStorage.setItem("items", JSON.stringify(newItems));
    setItems(newItems);
  };

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title && !description) return;
    setCompleted(true);
    const newMe = {
      id: uuidv4(),
      title: title,
      description: description,
      //   completed: true,
    };

    const newItems = [...items, newMe];
    saveToLocalStorage(newItems);
    setTitle("");
    setDescription("");
    // setCompleted(false);
    setTimeout(() => setCompleted(false), 2000);
  };

  const deleteItems = (id: string) => {
    const newItems = items.filter((item) => item.id !== id);
    saveToLocalStorage(newItems);
  };

  return (
    <div>
      <div className="container ">
        <form onSubmit={addItem}>
          <label htmlFor="title">Title:</label>
          <input
            className="bg-white"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description">Description:</label>
          <input
            className="bg-white"
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {completed && (
            <div className="">
              Completed!!!! <IoMdHappy />
            </div>
          )}
          {/* <label htmlFor="completed"></label> */}

          <button type="submit" className="addBtn">
            Add Item
          </button>
        </form>

        <ul>
          {items.map((item) => (
            <li className="list-item" key={item.id}>
              {item.title}: "{item.description}"
              <button
                onClick={() => deleteItems(item.id)}
                className="delete-Btn"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FirstProject;
