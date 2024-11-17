import { useState } from "react";

function CardForm({ addList }) {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = value;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const list = {
      id: Math.random(),
      name: formData.name,
      description: formData.description,
    };

    setFormData({
      name: "",
      description: "",
    });

    addList(list);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rounded-lg">
        <div className="flex flex-col">
          <label className="bg-blue-500">TODOLIST</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <button className="bg-zinc-950" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export default CardForm;
