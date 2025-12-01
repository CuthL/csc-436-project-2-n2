export default function ExperienceItemForm({ item, onChange, onAdd }) {
  return (
    <div className="stack">
      <input name="role" placeholder="Role e.g., Frontend Intern" value={item.role} onChange={onChange}/>
      <input name="company" placeholder="Company e.g., Acme Inc." value={item.company} onChange={onChange}/>
      <div className="row">
        <input name="start" placeholder="Start e.g., Jun 2024" value={item.start} onChange={onChange}/>
        <input name="end" placeholder="End e.g., Aug 2024 or Present" value={item.end} onChange={onChange}/>
      </div>
      <textarea name="desc" placeholder="What did you do?" value={item.desc} onChange={onChange} rows={3}/>
      <button onClick={onAdd}>Add Experience</button>
    </div>
  );
}
