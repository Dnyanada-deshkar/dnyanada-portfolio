import { useEffect, useRef, useState } from 'react'
import { P, nav, jobs, projects, skills, edu, certs } from './data.js'

const id = (s) => s.toLowerCase()
const RESUME = { href: '/Resume-Dnyanada.pdf', download: 'Dnyanada_Deshkar_Resume.pdf' }
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); o.disconnect() } }, { threshold: 0.1 })
    o.observe(el); return () => o.disconnect()
  }, [])
  return ref
}
const R = ({ children, className = '' }) => { const ref = useReveal(); return <div ref={ref} className={`rv ${className}`}>{children}</div> }

function Navbar() {
  const [active, setActive] = useState('home'), [scrolled, setScrolled] = useState(false), [open, setOpen] = useState(false), [pct, setPct] = useState(0)
  useEffect(() => {
    const f = () => {
      setScrolled(scrollY > 20)
      setPct(scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight) * 100)
      let cur = 'home'; nav.forEach((n) => { const e = document.getElementById(id(n)); if (e && e.getBoundingClientRect().top < innerHeight * 0.4) cur = id(n) }); setActive(cur)
    }
    f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f)
  }, [])
  return (<>
    <div className="progress" style={{ width: pct + '%' }} />
    <header className={`nav ${scrolled ? 'solid' : ''}`}>
      <a href="#home" className="brand">DNYANADA</a>
      <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
      <nav className={open ? 'open' : ''} aria-label="Primary">
        {nav.map((n) => <a key={n} href={'#' + id(n)} className={active === id(n) ? 'on' : ''} onClick={() => setOpen(false)}>{n}</a>)}
        <a className="btn dark sm" {...RESUME}>Download Resume</a>
      </nav>
    </header></>)
}

function Hero() {
  return (<section id="home" className="hero">
    <div className="hero-t">
      <p className="eyebrow"><span />Software Developer · {P.city}</p>
      <h1>Dnyanada<br />Deshkar</h1>
      <p className="lead">I build backend systems and full-stack applications in Java and .NET: REST APIs, approval workflows and SQL-backed modules. I care about code that is tested, readable and easy to maintain.</p>
      <div className="row"><a className="btn dark" href="#projects">View Projects</a><a className="btn ghost" {...RESUME}>Download Resume</a></div>
      <p className="avail"><i />Open to Software Developer opportunities</p>
    </div>
    <figure className="portrait">
      <div className="pf"><img src="/profile.jpg" alt="Portrait of Dnyanada Deshkar" width="900" height="1233" fetchPriority="high" /></div>
      <figcaption><span>Backend · Full-stack</span><span>{P.city}</span></figcaption>
    </figure>
  </section>)
}

function About() {
  return (<section id="about" className="sec split">
    <R><p className="kicker">About</p><h2>A little about me.</h2></R>
    <R className="txt">
      <p>I'm a Computer Science graduate from KDK College of Engineering, Nagpur (B.Tech, 2022–2026), and I've spent my early career writing production code in both Java and .NET.</p>
      <p>I like the parts of software people rarely see: clean API design, well-structured databases, and workflows that make a manual process dependable. My interests are backend development, REST APIs, database design, full-stack development and scalable application architecture.</p>
    </R></section>)
}

function Experience() {
  return (<section id="experience" className="sec alt"><R><p className="kicker">Experience</p><h2>Where I've worked.</h2></R>
    <ol className="tl">{jobs.map((j, i) => <li key={j.co} className={i === 0 ? 'now' : ''}><R className="card">
      <div className="meta"><p className="when">{j.when}</p><p>{j.where}</p>{i === 0 && <span className="badge">Current</span>}</div>
      <div className="body"><h3>{j.role}</h3><p className="co">{j.co}</p>
        <ul className="stats">{j.stats.map(([v, l]) => <li key={l}><b>{v}</b>{l}</li>)}</ul>
        <ul className="pts">{j.pts.map((p) => <li key={p}>{p}</li>)}</ul>
        <div className="chips">{j.tech.map((t) => <span key={t}>{t}</span>)}</div></div></R></li>)}</ol></section>)
}

function Shots({ p }) {
  const n = p.shots.length, [i, setI] = useState(0), go = (d) => setI((i + d + n) % n)
  return (<div className="browser" role="group" aria-roledescription="carousel" aria-label={`${p.title} screenshots`}>
    <div className="bar"><i /><i /><i /><span>{p.title}{p.shotLabel ? ` · ${p.shotLabel}` : ''}</span></div>
    <div className="screen" style={p.ratio ? { aspectRatio: p.ratio } : undefined}>
      {n ? <img key={i} src={p.shots[i]} alt={`${p.title} screenshot ${i + 1} of ${n}`} loading="lazy" />
        : <div className="ph"><div className="sk"><i /><i /><i /></div><b>Screenshots coming soon</b><span>Add images to public/projects/{p.slug}/ and list them in data.js</span></div>}
      {n > 1 && <><button className="nb prev" aria-label="Previous screenshot" onClick={() => go(-1)}>‹</button><button className="nb next" aria-label="Next screenshot" onClick={() => go(1)}>›</button></>}
    </div>
    {n > 1 && <div className="dots">{p.shots.map((_, k) => <button key={k} aria-label={`Screenshot ${k + 1}`} aria-current={k === i} onClick={() => setI(k)} />)}</div>}
  </div>)
}

function Projects() {
  return (<section id="projects" className="sec"><R><p className="kicker">Projects</p><h2>Selected work.</h2><p className="sub">A collection of things I've built and problems I've solved.</p></R>
    {projects.map((p, i) => (<R key={p.slug} className={`proj ${i % 2 ? 'flip' : ''}`}>
      <Shots p={p} />
      <div className="pi"><p className="idx">Project {String(i + 1).padStart(2, '0')} · {p.sub}</p><h3>{p.title}</h3><p>{p.about}</p>
        <ul className="pts">{p.pts.map((x) => <li key={x}>{x}</li>)}</ul>
        <div className="chips">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
        {(p.github || p.demo) && <div className="row sm">{p.github && <a className="btn dark sm" href={p.github} target="_blank" rel="noreferrer">GitHub</a>}{p.demo && <a className="btn ghost sm" href={p.demo} target="_blank" rel="noreferrer">Live demo</a>}</div>}
      </div></R>))}
    <p className="note">More code on <a href={P.github} target="_blank" rel="noreferrer">GitHub</a>.</p></section>)
}

function Skills() {
  const cats = Object.keys(skills), [c, setC] = useState('All'), shown = c === 'All' ? cats : [c]
  return (<section id="skills" className="sec toolkit"><R><p className="kicker">Skills</p><h2>My technical toolkit.</h2></R>
    <div className="tk">
      <div className="tabs" role="tablist" aria-label="Skill categories">{['All', ...cats].map((k) => <button key={k} role="tab" aria-selected={c === k} className={c === k ? 'on' : ''} onClick={() => setC(k)}>{k}<small>{k === 'All' ? cats.reduce((a, x) => a + skills[x].length, 0) : skills[k].length}</small></button>)}</div>
      <div className="panels" key={c}>{shown.map((k) => <div key={k} className="panel"><h3>{k}</h3><ul>{skills[k].map((s) => <li key={s}>{s}</li>)}</ul></div>)}</div>
    </div></section>)
}

function Education() {
  return (<section id="education" className="sec alt"><R><p className="kicker">Education</p><h2>Education &amp; training.</h2></R>
    <ol className="tl small"><li><R className="card"><div className="meta"><p className="when">{edu.when}</p><p>{edu.extra}</p></div><div className="body"><h3>{edu.deg}</h3><p className="co">{edu.school}</p></div></R></li>
      <li><R className="card"><div className="meta"><p className="when">Certifications</p><p>and training</p></div><div className="body"><ul className="pts">{certs.map((x) => <li key={x}>{x}</li>)}</ul></div></R></li></ol></section>)
}

function Contact({ toast }) {
  const empty = { name: '', email: '', subject: '', message: '' }
  const [f, setF] = useState(empty), [err, setErr] = useState({}), [state, setState] = useState(''), [busy, setBusy] = useState(false), [fail, setFail] = useState(false)
  const copy = async () => { try { await navigator.clipboard.writeText(P.email); toast('Email copied to clipboard') } catch { toast('Copy failed. Email: ' + P.email) } }
  const submit = async (e) => {
    e.preventDefault(); const x = {}
    if (!f.name.trim()) x.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(f.email)) x.email = 'Enter a valid email address.'
    if (!f.subject.trim()) x.subject = 'Enter a subject.'
    if (f.message.trim().length < 10) x.message = 'Write at least 10 characters.'
    setErr(x); if (Object.keys(x).length) { setState(''); return }
    const KEY = import.meta.env.VITE_WEB3FORMS_KEY
    if (!KEY) { // fallback when no form service key is configured
      location.href = `mailto:${P.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(`${f.message}\n\n— ${f.name} (${f.email})`)}`
      setFail(false); setState('Your email app should open with the message ready. Press send there to deliver it.'); return
    }
    setBusy(true); setState(''); setFail(false)
    try {
      const r = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: KEY, name: f.name, email: f.email, subject: `Portfolio: ${f.subject}`, message: f.message, from_name: 'Portfolio contact form' }) })
      const d = await r.json()
      if (!r.ok || !d.success) throw new Error('send failed')
      setState('Thanks, your message was sent. I will get back to you soon.'); setF(empty)
    } catch { setFail(true); setState(`The message could not be sent. Please email me directly at ${P.email}.`) }
    setBusy(false)
  }
  const fld = (k, label, tag = 'input') => { const T = tag; return <label>{label}<T value={f[k]} rows={5} aria-invalid={!!err[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} />{err[k] && <small role="alert">{err[k]}</small>}</label> }
  return (<section id="contact" className="sec contact">
    <R><p className="kicker">Contact</p><h2>Let's connect.</h2>
      <p className="sub">I'm a software developer looking for my next role in backend or full-stack development. If you're hiring, or would like to talk about engineering, I'd be glad to hear from you.</p>
      <ul className="cl"><li>{P.location}</li><li><a href={`mailto:${P.email}`}>{P.email}</a></li><li><a href={`tel:${P.phone.replace(/\s/g, '')}`}>{P.phone}</a></li></ul>
      <div className="row"><a className="btn gold" href={`mailto:${P.email}`}>Email me</a><button className="btn ghost light" onClick={copy}>Copy email</button><a className="btn ghost light" href={P.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a className="btn ghost light" href={P.github} target="_blank" rel="noreferrer">GitHub</a><a className="btn ghost light" {...RESUME}>Resume</a></div></R>
    <R><form onSubmit={submit} noValidate>{fld('name', 'Name')}{fld('email', 'Email')}{fld('subject', 'Subject')}{fld('message', 'Message', 'textarea')}
      <button className="btn gold" type="submit" disabled={busy}>{busy ? 'Sending…' : 'Send message'}</button>{state && <p className={`ok ${fail ? 'fail' : ''}`} role={fail ? 'alert' : 'status'}>{state}</p>}</form></R></section>)
}

function Footer() {
  return (<footer><div><b>DNYANADA DESHKAR</b><p>Designed with intention. Built with code.</p></div>
    <nav aria-label="Footer">{nav.map((n) => <a key={n} href={'#' + id(n)}>{n}</a>)}</nav>
    <div className="soc"><a href={P.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={P.github} target="_blank" rel="noreferrer">GitHub</a><span>© {new Date().getFullYear()}</span></div></footer>)
}

function Cursor() {
  const ref = useRef(null)
  useEffect(() => {
    if (!matchMedia('(pointer:fine)').matches) return
    document.body.classList.add('cur')
    const m = (e) => { if (ref.current) { ref.current.style.transform = `translate(${e.clientX}px,${e.clientY}px)`; ref.current.classList.toggle('big', !!e.target.closest('a,button,input,textarea')) } }
    addEventListener('mousemove', m); return () => { removeEventListener('mousemove', m); document.body.classList.remove('cur') }
  }, [])
  return <div ref={ref} className="cursor" aria-hidden="true"><i /></div>
}

function NotFound() {
  return (<main className="nf"><p className="big404">404</p><h1>This page isn't in the build.</h1><p>The address you opened doesn't exist on this site.</p><a className="btn gold" href="/">Back to home</a></main>)
}

export default function App() {
  const [t, setT] = useState(''), [top, setTop] = useState(false)
  useEffect(() => { const f = () => setTop(scrollY > 600); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  const toast = (m) => { setT(m); setTimeout(() => setT(''), 2400) }
  if (location.pathname !== '/' && location.pathname !== '/index.html') return <NotFound />
  return (<><Cursor /><Navbar /><main><Hero /><About /><Experience /><Projects /><Skills /><Education /><Contact toast={toast} /></main><Footer />
    {t && <div className="toast" role="status">{t}</div>}
    <button className={`top ${top ? 'show' : ''}`} aria-label="Back to top" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>↑</button></>)
}