import ExperienceList from "./ExperienceList";

export default function ResumeForm({ profile, setProfile }) {
  const onChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div className="card">
      <h2>Edit Details</h2>

      <section>
        <h3>Contact</h3>
        <input name="name" placeholder="Full name" value={profile.name} onChange={onChange}/>
        <input name="email" placeholder="Email" value={profile.email} onChange={onChange}/>
        <input name="phone" placeholder="Phone" value={profile.phone} onChange={onChange}/>
      </section>

      <section>
        <h3>Summary</h3>
        <textarea name="summary" placeholder="Short professional summary"
                  value={profile.summary} onChange={onChange} rows={4}/>
      </section>

      <section>
        <h3>Experience</h3>
        <ExperienceList
          items={profile.experience}
          setItems={(experience) => setProfile({ ...profile, experience })}
        />
      </section>

      <section>
        <h3>Education</h3>
        <input
          name="education"
          placeholder="e.g., B.S. in CS, Borough College (2026)"
          value={profile.education}
          onChange={onChange}
        />
      </section>

      <section>
        <h3>Skills (comma-separated)</h3>
        <input
          name="skills"
          placeholder="React, JS, HTML, CSS"
          value={profile.skills}
          onChange={onChange}
        />
      </section>
    </div>
  );
}
