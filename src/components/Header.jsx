import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Briefcase, Wrench, Rocket, ScrollText, GraduationCap } from 'lucide-react';
import { navItems } from '../lib/data';

const navIconMap = { Briefcase, Wrench, Rocket, ScrollText, GraduationCap };

// ── Variants ────────────────────────────────────────────────────────────────

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: { type: 'spring', stiffness: 20, restDelta: 2 },
  }),
  closed: {
    clipPath: 'circle(28px at calc(100% - 40px) 40px)',
    transition: { delay: 0.2, type: 'spring', stiffness: 400, damping: 40 },
  },
};

const listVariants = {
  open:   { transition: { delayChildren: 0.2, staggerChildren: 0.07 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const itemVariants = {
  open:   { y: 0,  opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
  closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } },
};

// ── Animated hamburger SVG ───────────────────────────────────────────────────

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="var(--accent)"
    strokeLinecap="round"
    {...props}
  />
);

function MenuToggle({ toggle, onHoverStart, onHoverEnd }) {
  return (
    <button
      onClick={toggle}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      aria-label="Toggle menu"
      style={{
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
        background: 'transparent',
        position: 'absolute',
        top: 18,
        right: 18,
        width: 44,
        height: 44,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 101,
        pointerEvents: 'auto',
      }}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open:   { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open:   { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open:   { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  );
}

// ── Animated sidebar ─────────────────────────────────────────────────────────

function AnimatedSidebar({ isOpen, setOpen, isHome }) {
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.offsetHeight);
    }
  }, []);

  const circleBackground = isOpen
    ? 'var(--surface-secondary)'
    : hovered
    ? 'rgba(168,85,247,0.25)'
    : 'var(--surface-secondary)';

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: '280px',
        zIndex: 100,
        pointerEvents: 'none',
      }}
    >
      {/* Clip-path animated background */}
      <motion.div
        variants={sidebarVariants}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '280px',
          background: circleBackground,
          transition: 'background 0.25s ease',
          borderLeft: isOpen ? '1px solid rgba(168,85,247,0.15)' : 'none',
        }}
      />

      {/* Nav items */}
      <motion.ul
        variants={listVariants}
        style={{
          listStyle: 'none',
          padding: '80px 20px 20px',
          margin: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      >
        {navItems.map((item) => {
          const Icon = navIconMap[item.icon];
          const linkStyle = {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: 'var(--fg-secondary)',
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            fontWeight: 500,
            padding: '10px 14px',
            borderRadius: '8px',
            border: '1px solid rgba(168,85,247,0.15)',
            background: 'rgba(168,85,247,0.04)',
            width: '100%',
          };
          return (
            <motion.li
              key={item.label}
              variants={itemVariants}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{ marginBottom: '12px' }}
            >
              {isHome ? (
                <a href={item.href} onClick={() => setOpen(false)} style={linkStyle}>
                  {Icon && <Icon size={16} color="var(--accent)" />}
                  {item.label}
                </a>
              ) : (
                <Link to={`/${item.href}`} onClick={() => setOpen(false)} style={linkStyle}>
                  {Icon && <Icon size={16} color="var(--accent)" />}
                  {item.label}
                </Link>
              )}
            </motion.li>
          );
        })}
      </motion.ul>

      {/* Toggle button — always clickable */}
      <MenuToggle
        toggle={() => { setOpen(!isOpen); setHovered(false); }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      />
    </motion.nav>
  );
}

// ── Main Header ──────────────────────────────────────────────────────────────

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Show logo only when the hero name has scrolled out of view
  useEffect(() => {
    const heroName = document.getElementById('hero-name');
    if (!heroName) {
      setLogoVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setLogoVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(heroName);
    return () => observer.disconnect();
  }, [location.pathname]);

  const logoMotion = {
    initial: { opacity: 0, y: -8 },
    animate: { opacity: logoVisible ? 1 : 0, y: logoVisible ? 0 : -8, pointerEvents: logoVisible ? 'auto' : 'none' },
    transition: { duration: 0.25, ease: 'easeOut' },
  };

  return (
    <>
      {/* Desktop */}
      <header className="header">
        <motion.div {...logoMotion}>
          <Link to="/" className="header-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><Code2 size={18} /> Dylan Ferreyra</Link>
        </motion.div>
        <nav className="header-nav">
          {isHome
            ? navItems.map((item) => {
                const Icon = navIconMap[item.icon];
                return <a key={item.label} href={item.href}>{Icon && <Icon size={14} />} {item.label}</a>;
              })
            : navItems.map((item) => {
                const Icon = navIconMap[item.icon];
                return <Link key={item.label} to={`/${item.href}`}>{Icon && <Icon size={14} />} {item.label}</Link>;
              })
          }
        </nav>
      </header>

      {/* Mobile top bar */}
      <header className="header-mobile">
        <span style={{ width: 44 }} />
        <motion.div {...logoMotion}>
          <Link
            to="/"
            className="header-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Code2 size={18} /> Dylan Ferreyra
          </Link>
        </motion.div>
        <span style={{ width: 44 }} />
      </header>

      {/* Animated sidebar (mobile only) */}
      <div className="mobile-sidebar-wrapper">
        <AnimatedSidebar isOpen={mobileOpen} setOpen={setMobileOpen} isHome={isHome} />
      </div>

      {/* Backdrop overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.5)',
              zIndex: 99,
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
