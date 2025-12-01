import { useState } from "react";
import ExperienceItemForm from "./ExperienceItemForm";

export default function ExperienceList({ items, setItems }) {
  const blank = { id: Date.now(), role: "", company: "", start: "", end: "", desc: "" };
  const [draft, setDraft] = useState({ ...blank });

  const addItem = () => {
    if (!draft.role.trim() || !draft.company.trim()) return;
    setItems([...items, { ...draft, id: Date.now() }]);
    setDraft({ ...blank, id: Date.now() });
  };

  const removeItem = (id) => setItems(items.filter((i) => i.id !== id));

  const updateField = (e) => {
    const { name, value } = e.target;
    setDraft({ ...draft, [name]: value });
  };

  return (
    <>
      <ExperienceItemForm item={draft} onChange={updateField} onAdd={addItem} />
      <ul className="list">
        {items.map((i) => (
          <li key={i.id} className="list-row">
            <div>
              <strong>{i.role}</strong> — {i.company}
              <div className="subtle">{i.start} — {i.end}</div>
              <div>{i.desc}</div>
            </div>
            <button className="danger" onClick={() => removeItem(i.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
