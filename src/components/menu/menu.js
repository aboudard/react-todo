import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputSwitch } from "primereact/inputswitch";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";

const Menu = () => {
  const toast = useRef(null);
  const categories = [
    { name: "Angular", code: "angular" },
    { name: "React", code: "react" },
    { name: "Vue", code: "vue" },
    { name: "Devops", code: "devops" },
  ];
  const API_URL = process.env.REACT_APP_API_URL;
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    active: false,
    category: "",
  });

  const successValidate = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Todo was saved with success",
    });
  };

  const validate = (event) => {
    event.preventDefault();
    console.log("validate", todo);
    fetch(API_URL + "/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        successValidate();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h3>Menu</h3>
      <form onSubmit={validate}>
        <div className="field">
          <label htmlFor="title">Title</label>
          <InputText
            type="text"
            name="title"
            value={todo.title}
            onChange={handleChange}
            className="p-inputtext-sm"
            placeholder="Title"
          />
        </div>
        <div className="field">
          <label htmlFor="description">Description</label>
          <InputText
            type="text"
            name="description"
            value={todo.description}
            onChange={handleChange}
            className="p-inputtext-sm"
            placeholder="Description"
          />
        </div>
        <div className="field">
          <label htmlFor="category">Category</label>
          <Dropdown
            name="category"
            value={todo.category}
            onChange={handleChange}
            options={categories}
            optionLabel="name"
            optionValue="code"
            editable
            placeholder="Select a Category"
            className="w-full"
          />
        </div>
        <div className="field">
          <label htmlFor="active">Active</label>
          <div>
            <InputSwitch
              name="active"
              checked={todo.active}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <Button label="Send" type="submit" icon="pi pi-check" size="small" />
        </div>
      </form>
      <Toast ref={toast} />
    </>
  );
};

export default Menu;
