import { prepareWithSegments, layoutNextLine } from '@chenglou/pretext'
import './style.css'

// ── Content ───────────────────────────────────────────────────

const experiences = [
  {
    title: 'Workday',
    location: 'Boulder, CO',
    positions: [
      {
        role: 'Software Engineer',
        date: 'Sep 2025 – Present',
        desc: 'Building integrations between VNDLY and HCM',
      },
      {
        role: 'Software Engineer Intern',
        date: 'May – Aug 2024',
        desc: 'Built public APIs for large enterprise VNDLY integrations',
      },
    ],
    skills: ['Django', 'React', 'PostgreSQL'],
    href: 'https://www.workday.com/',
  },
  {
    title: 'Infleqtion',
    role: 'Software Engineer Intern',
    date: 'Jun – Aug 2023',
    location: 'Boulder, CO',
    desc: 'Simulating quantum matter in Python, to be used by researchers and educators',
    skills: ['Python', 'NumPy', 'Matplotlib'],
    href: 'https://www.infleqtion.com/',
  },
  {
    title: "Stanford Children's Health",
    role: 'Data Science Intern',
    date: 'May – Aug 2022',
    location: 'Palo Alto, CA',
    desc: 'Developed and tested ML models on real pediatric data for cardiology',
    skills: ['TensorFlow', 'Scikit-learn', 'Matplotlib'],
    href: 'https://www.stanfordchildrens.org/',
  },
]

const projects = [
  {
    title: 'Orchard Odyssey',
    date: 'April 2024',
    desc: 'A 2D side scrolling game built in Java using Swing',
    skills: ['Java', 'Swing', 'OOP', 'Design Patterns'],
  },
  {
    title: 'BuffHeard',
    date: 'May 2023',
    desc: 'An accessible web platform for CU students to socialize, find events, and connect',
    skills: ['JavaScript', 'Node', 'PostgreSQL', 'Mapbox', 'Azure', 'Docker'],
  },
  {
    title: 'NBA Draft Decoded',
    date: 'July 2023',
    desc: 'Predicting NBA career success based on draft position',
    skills: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
  },
]

const BIO_TEXT =
  'I like building software that bridges complex systems. ' +
  'I studied Computer Science at The University of Colorado Boulder. ' +
  'I have experience working in machine learning, simulation, and full-stack web development. ' +
  "I'm drawn to problems with real usefulness. " +
  "I'm currently working as a software engineer at Workday in Boulder."

// ── Binary Particle Name ──────────────────────────────────────

function initBinaryName(container) {
  const canvas = document.createElement('canvas')
  container.appendChild(canvas)

  const ctx = canvas.getContext('2d')
  const dpr = window.devicePixelRatio || 1

  const NAME = 'Ben Lipman'
  const PARTICLE_FONT_SIZE = 4
  const REPULSE_RADIUS = 55
  const SPRING = 0.08
  const DAMPING = 0.75
  const REPULSE_FORCE = 5

  let particles = []
  let mouseX = -1000, mouseY = -1000
  let targetX = -1000, targetY = -1000
  let animFrame = null
  let canvasW = 0, canvasH = 0

  function sampleText() {
    particles = []
    const rect = container.getBoundingClientRect()
    canvasW = rect.width

    const tempCanvas = document.createElement('canvas')
    const tempCtx = tempCanvas.getContext('2d')
    let fontSize = 72
    while (fontSize > 16) {
      tempCtx.font = `bold ${fontSize}px 'JetBrains Mono', monospace`
      const w = tempCtx.measureText(NAME).width
      if (w <= canvasW - 32) break
      fontSize -= 2
    }

    canvasH = fontSize * 1.4
    canvas.width = canvasW * dpr
    canvas.height = canvasH * dpr
    canvas.style.width = canvasW + 'px'
    canvas.style.height = canvasH + 'px'

    const offscreen = document.createElement('canvas')
    offscreen.width = canvasW
    offscreen.height = canvasH
    const offCtx = offscreen.getContext('2d')
    offCtx.font = `bold ${fontSize}px 'JetBrains Mono', monospace`
    offCtx.fillStyle = '#fff'
    offCtx.textBaseline = 'top'
    const metrics = offCtx.measureText(NAME)
    offCtx.fillText(NAME, (canvasW - metrics.width) / 2, (canvasH - fontSize) / 2)

    const imgData = offCtx.getImageData(0, 0, canvasW, canvasH)
    const data = imgData.data
    const step = Math.max(Math.round(fontSize / 24), 3)

    for (let y = 0; y < canvasH; y += step) {
      for (let x = 0; x < canvasW; x += step) {
        const i = (y * canvasW + x) * 4
        if (data[i + 3] > 128) {
          particles.push({
            x, y, originX: x, originY: y, vx: 0, vy: 0,
            char: Math.random() > 0.5 ? '1' : '0',
          })
        }
      }
    }
  }

  function draw() {
    mouseX += (targetX - mouseX) * 0.2
    mouseY += (targetY - mouseY) * 0.2
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, canvasW, canvasH)
    ctx.font = `${PARTICLE_FONT_SIZE}px 'JetBrains Mono', monospace`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    for (const p of particles) {
      const dx = p.x - mouseX, dy = p.y - mouseY
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < REPULSE_RADIUS && dist > 0) {
        const force = (1 - dist / REPULSE_RADIUS) * REPULSE_FORCE
        p.vx += (dx / dist) * force
        p.vy += (dy / dist) * force
      }
      p.vx += (p.originX - p.x) * SPRING
      p.vy += (p.originY - p.y) * SPRING
      p.vx *= DAMPING; p.vy *= DAMPING
      p.x += p.vx; p.y += p.vy
      const disp = Math.sqrt((p.x - p.originX) ** 2 + (p.y - p.originY) ** 2)
      if (disp > 2) {
        const t = Math.min(disp / 25, 1)
        ctx.fillStyle = `rgba(${Math.round(110 + t * 145)}, ${Math.round(160 + t * 95)}, 255, ${0.8 + t * 0.2})`
      } else {
        ctx.fillStyle = 'rgba(120, 140, 220, 0.75)'
      }
      ctx.fillText(p.char, p.x, p.y)
    }
    animFrame = requestAnimationFrame(draw)
  }

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect()
    targetX = e.clientX - rect.left; targetY = e.clientY - rect.top
  })
  canvas.addEventListener('mouseleave', () => { targetX = -1000; targetY = -1000 })
  canvas.addEventListener('touchmove', (e) => {
    e.preventDefault()
    const rect = canvas.getBoundingClientRect()
    targetX = e.touches[0].clientX - rect.left; targetY = e.touches[0].clientY - rect.top
  }, { passive: false })
  canvas.addEventListener('touchend', () => { targetX = -1000; targetY = -1000 })

  sampleText(); draw()

  // One-time sweep animation on load — simulates cursor striking through the name
  setTimeout(() => {
    const sweepY = canvasH * 0.5
    const duration = 1800
    const startTime = performance.now()
    function sweep(now) {
      const t = Math.min((now - startTime) / duration, 1)
      // ease in-out cubic
      const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      targetX = -40 + (canvasW + 80) * e
      targetY = sweepY
      if (t < 1) {
        requestAnimationFrame(sweep)
      } else {
        targetX = -1000; targetY = -1000
      }
    }
    requestAnimationFrame(sweep)
  }, 250)

  let resizeTimer
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => { cancelAnimationFrame(animFrame); sampleText(); draw() }, 150)
  })
}

// ── Bio: hover glow ───────────────────────────────────────────
//
// Text lays out at full width at all times.
// While the cursor moves over the text, characters near the cursor
// glow blue-purple. Moving away fades them back to normal.

const BIO_FONT    = "13px 'JetBrains Mono', monospace"
const BIO_LINE_H  = 21
const GLOW_R      = 52   // radius for purple glow effect

function initBioSection(container) {
  const canvas = document.createElement('canvas')
  canvas.style.width = '100%'
  container.appendChild(canvas)

  const dpr      = window.devicePixelRatio || 1
  const prepared = prepareWithSegments(BIO_TEXT, BIO_FONT)
  const measureCtx = document.createElement('canvas').getContext('2d')
  measureCtx.font = BIO_FONT

  let width = 0, canvasH = 0
  let curX = -1000, curY = -1000
  let activeR = 0, targetR = 0

  function countLines() {
    let n = 0, cur = { segmentIndex: 0, graphemeIndex: 0 }
    while (true) {
      const line = layoutNextLine(prepared, cur, width)
      if (!line) break; n++; cur = line.end
    }
    return n
  }

  function setup() {
    width   = container.getBoundingClientRect().width
    canvasH = (countLines() + 1) * BIO_LINE_H + 8
    canvas.width        = width   * dpr
    canvas.height       = canvasH * dpr
    canvas.style.height = canvasH + 'px'
  }

  function collectLines() {
    const lines = []
    let cursor = { segmentIndex: 0, graphemeIndex: 0 }
    let lineTopY = 0
    while (true) {
      const line = layoutNextLine(prepared, cursor, width)
      if (!line) break
      lines.push({ line, lineTopY })
      cursor = line.end
      lineTopY += BIO_LINE_H
    }
    return lines
  }

  function frame() {
    activeR += (targetR - activeR) * 0.11
    if (Math.abs(activeR - targetR) < 0.3) activeR = targetR

    const lines = collectLines()
    const ctx = canvas.getContext('2d')
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, width, canvasH)
    ctx.font = BIO_FONT
    ctx.textAlign = 'left'
    ctx.textBaseline = 'alphabetic'

    for (const { line, lineTopY } of lines) {
      const baseline = lineTopY + BIO_LINE_H * 0.82
      let charX = 0

      for (const char of line.text) {
        const cw = measureCtx.measureText(char).width
        if (char !== ' ') {
          const midX = charX + cw * 0.5
          const dist = Math.sqrt((midX - curX) ** 2 + (baseline - curY) ** 2)
          const glow = activeR > 2 ? Math.max(0, 1 - dist / activeR) : 0

          if (glow > 0) {
            const r = Math.round(148 + glow * 64)
            const g = Math.round(125 + glow * 52)
            ctx.fillStyle = `rgba(${r}, ${g}, 255, ${0.36 + glow * 0.64})`
          } else {
            ctx.fillStyle = 'rgba(195, 198, 212, 0.48)'
          }
          ctx.fillText(char, charX, baseline)
        }
        charX += cw
      }
    }

    requestAnimationFrame(frame)
  }

  canvas.addEventListener('mousemove', (e) => {
    const r = canvas.getBoundingClientRect()
    curX = e.clientX - r.left; curY = e.clientY - r.top
    targetR = GLOW_R
  })
  canvas.addEventListener('mouseleave', () => { targetR = 0 })
  canvas.addEventListener('touchmove', (e) => {
    e.preventDefault()
    const r = canvas.getBoundingClientRect()
    curX = e.touches[0].clientX - r.left; curY = e.touches[0].clientY - r.top
    targetR = GLOW_R
  }, { passive: false })
  canvas.addEventListener('touchend', () => { targetR = 0 })

  setup(); frame()
  let resizeTimer
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(setup, 150)
  })
}

// ── Stacked list rendering ────────────────────────────────────

function createStackedItem(item, isLast) {
  const el = document.createElement('div')
  el.className = 'stacked-item' + (isLast ? '' : ' stacked-item--bordered')

  // For multi-position items, derive collapsed date range from positions array
  // (oldest start → newest end, positions are newest-first)
  let collapsedDate = item.date
  if (item.positions && item.positions.length > 1) {
    const oldestDate = item.positions[item.positions.length - 1].date
    const startMonth = oldestDate.split(/[-–]/)[0].trim()
    const yearMatch = oldestDate.match(/\d{4}/)
    const oldest = yearMatch ? `${startMonth} ${yearMatch[0]}` : startMonth
    const newestEnd = item.positions[0].date.split(/[-–]/).pop().trim()
    collapsedDate = `${oldest} – ${newestEnd}`
  } else if (item.positions && item.positions.length === 1) {
    collapsedDate = item.positions[0].date
  }

  // ── Header row (always visible) ──
  const top = document.createElement('div')
  top.className = 'stacked-top'

  const left = document.createElement('div')
  left.className = 'stacked-left'

  const chevron = document.createElement('span')
  chevron.className = 'stacked-chevron'
  chevron.textContent = '▸'
  left.appendChild(chevron)

  const titleEl = document.createElement('div')
  titleEl.className = 'stacked-title'
  if (item.href) {
    titleEl.innerHTML = `<a href="${item.href}" target="_blank" rel="noopener noreferrer">${item.title}</a>`
  } else {
    titleEl.textContent = item.title
  }
  left.appendChild(titleEl)

  const displayRole = item.role || (item.positions && item.positions[0]?.role)
  if (displayRole) {
    const roleEl = document.createElement('div')
    roleEl.className = 'stacked-role'
    roleEl.textContent = displayRole
    left.appendChild(roleEl)
  }

  top.appendChild(left)

  const metaEl = document.createElement('div')
  metaEl.className = 'stacked-meta'
  metaEl.textContent = [collapsedDate, item.location].filter(Boolean).join(' · ')
  top.appendChild(metaEl)

  el.appendChild(top)

  // ── Collapsible body ──
  const body = document.createElement('div')
  body.className = 'stacked-body'
  const inner = document.createElement('div')
  inner.className = 'stacked-body-inner'

  if (item.positions && item.positions.length) {
    const positionsEl = document.createElement('div')
    positionsEl.className = 'stacked-positions'
    for (const position of item.positions) {
      const posEl = document.createElement('div')
      posEl.className = 'stacked-position'

      const posTop = document.createElement('div')
      posTop.className = 'stacked-position-top'

      const posRole = document.createElement('div')
      posRole.className = 'stacked-position-role'
      posRole.textContent = position.role
      posTop.appendChild(posRole)

      const posDate = document.createElement('div')
      posDate.className = 'stacked-position-date'
      posDate.textContent = position.date
      posTop.appendChild(posDate)

      posEl.appendChild(posTop)
      if (position.desc) {
        const posDesc = document.createElement('div')
        posDesc.className = 'stacked-position-desc'
        posDesc.textContent = position.desc
        posEl.appendChild(posDesc)
      }
      positionsEl.appendChild(posEl)
    }
    inner.appendChild(positionsEl)
  } else if (item.desc) {
    const descEl = document.createElement('div')
    descEl.className = 'stacked-desc'
    descEl.textContent = item.desc
    inner.appendChild(descEl)
  }

  if (item.skills && item.skills.length) {
    const skillsEl = document.createElement('div')
    skillsEl.className = 'stacked-skills'
    for (const skill of item.skills) {
      const tag = document.createElement('span')
      tag.className = 'skill-tag'
      tag.textContent = skill
      skillsEl.appendChild(tag)
    }
    inner.appendChild(skillsEl)
  }

  body.appendChild(inner)
  el.appendChild(body)

  // ── Toggle on click ──
  el.addEventListener('click', (e) => {
    // Allow external links inside the title to open normally
    if (e.target.tagName === 'A') return
    el.classList.toggle('stacked-item--expanded')
  })

  return el
}

// ── DOM Rendering ─────────────────────────────────────────────

function render() {
  const app = document.getElementById('app')
  app.innerHTML = ''

  // Particle name
  const nameSection = document.createElement('div')
  nameSection.className = 'name-section'
  app.appendChild(nameSection)
  initBinaryName(nameSection)

  // Meta under name
  const header = document.createElement('div')
  header.className = 'header'
  const info = document.createElement('div')
  info.className = 'header-info'
  const roleLine = document.createElement('div')
  roleLine.className = 'header-role'
  roleLine.textContent = 'Software Engineer @ Workday · Boulder, CO'
  const links = document.createElement('div')
  links.className = 'header-links'
  links.innerHTML = `
    <a href="mailto:benlipman35@gmail.com">Email</a>
    <a href="https://github.com/blipman35" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="https://www.linkedin.com/in/blipman" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  `
  info.appendChild(roleLine)
  info.appendChild(links)
  header.appendChild(info)
  app.appendChild(header)

  // Bio + stick figure
  const bioSection = document.createElement('div')
  bioSection.className = 'canvas-section'
  app.appendChild(bioSection)
  initBioSection(bioSection)

  // Experience
  const expLabel = document.createElement('div')
  expLabel.className = 'section-label'
  expLabel.textContent = 'Experience'
  app.appendChild(expLabel)
  const expList = document.createElement('div')
  expList.className = 'stacked-list'
  experiences.forEach((exp, i) => expList.appendChild(createStackedItem(exp, i === experiences.length - 1)))
  app.appendChild(expList)

  // Projects
  const projLabel = document.createElement('div')
  projLabel.className = 'section-label'
  projLabel.textContent = 'Projects'
  app.appendChild(projLabel)
  const projList = document.createElement('div')
  projList.className = 'stacked-list'
  projects.forEach((proj, i) => projList.appendChild(createStackedItem(proj, i === projects.length - 1)))
  app.appendChild(projList)

  // Footer — no Pretext, just a hover gradient text effect via CSS
  const footer = document.createElement('div')
  footer.className = 'footer'
  footer.innerHTML = '<span class="footer-text">Nothing below this line :/</span>'
  app.appendChild(footer)
}

// ── Init ──────────────────────────────────────────────────────

async function init() {
  await document.fonts.ready
  render()
}

init()
