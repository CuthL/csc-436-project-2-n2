export default function Preview({ profile }) {
  const skills = profile.skills
    .split(",")
    .map(s => s.trim())
    .filter(Boolean);

  return (
    <div className="card preview">
      <h2>Live Preview</h2>
      <div className="resume">
        <header>
          <h1>{profile.name || "Your Name"}</h1>
          <div className="subtle">
            {profile.email && <span>{profile.email}</span>}
            {profile.phone && <span> · {profile.phone}</span>}
          </div>
        </header>

        {profile.summary && (
          <>
            <h3>Summary</h3>
            <p>{profile.summary}</p>
          </>
        )}

        {profile.experience.length > 0 && (
          <>
            <h3>Experience</h3>
            {profile.experience.map((i) => (
              <div key={i.id} className="xp">
                <div className="row spread">
                  <strong>{i.role}</strong>
                  <span className="subtle">{i.start} — {i.end}</span>
                </div>
                <div className="subtle">{i.company}</div>
                <p>{i.desc}</p>
              </div>
            ))}
          </>
        )}

        {profile.education && (
          <>
            <h3>Education</h3>
            <p>{profile.education}</p>
          </>
        )}

        {skills.length > 0 && (
          <>
            <h3>Skills</h3>
            <div className="tags">
              {skills.map((s, idx) => <span key={idx} className="tag">{s}</span>)}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
