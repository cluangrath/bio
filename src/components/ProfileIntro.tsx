import { MoveUpRight } from 'lucide-react';
import { profile, profileLinks } from '../data/profile';

export function ProfileIntro() {
  return (
    <section className="intro" aria-label="Personal bio">
      <div className="portrait-wrap">
        <img
          className="portrait"
          src="/chad-luangrath.jpg"
          alt="Chad Luangrath smiling in a kitchen."
          width="280"
          height="340"
        />
      </div>

      <p className="eyebrow">{profile.role}</p>
      <h1 id="page-title">{profile.name}</h1>
      <p className="bio">{profile.headline}</p>
      <p className="bio-secondary">{profile.bio}</p>

      <nav className="profile-links" aria-label="Profile links">
        {profileLinks.map(({ label, href, icon: Icon }) => (
          <a key={label} className="profile-link" href={href} target="_blank" rel="noreferrer">
            <span className="link-label">
              <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
              {label}
            </span>
            <MoveUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
          </a>
        ))}
      </nav>
    </section>
  );
}
