import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { HoverColorLetters } from '../hoverColorLetters/hoverColorLetters';
import ColorPalette from '../colorPalette/ColorPalette';
import HomeFooter from '../HomeFooter/HomeFooter';
import Header from '../Header/Header';
import Letters, { ColorLetters } from '../ColorLetters/ColorLetters';
import './Home.css';


const COLORS = [
  {
    name: 'Midnight Violet',
    hex: '#301934',
    desc: 'Intense violet-black depths fill any space with intrigue and boldness.'
  },
  {
    name: 'Ocean Blue',
    hex: '#1B4965',
    desc: 'A deep calming blue inspired by endless oceans.'
  },
  {
    name: 'Soft Mint',
    hex: '#A8E6CF',
    desc: 'Fresh and soothing minty green tones.'
  },
  {
    name: 'Warm Sand',
    hex: '#E6C79C',
    desc: 'Natural warmth inspired by desert sands.'
  },
  {
    name: 'Rose Dust',
    hex: '#C97C8A',
    desc: 'Muted rose with elegant softness.'
  },
  {
    name: 'Golden Hour',
    hex: '#e4a951ff',
    desc: 'Warm golden tones reminiscent of a sunset.'
  },
  {
    name: 'Vibrant Coral',
    hex: '#FF6B6B',
    desc: 'A lively coral hue that adds a pop of color.'
  }
];

const Home = () => {
  const navigate = useNavigate();


  const colorOfTheDay = useMemo(() => {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }, []);

  return (
    <div className="home">
  <Header />

  <main className="home-main">
    <div className="home-left">

      <HoverColorLetters
        text="The super fast color palettes generator!"
        defaultColor="black"
        colors={['#6369d1', '#60e1e0', '#d8d2e1', '#b88e8d', '#34435e']}
        className="hover-title"
      />

      <div className="title-stickers">
        <img
          src="/images/tittle.svg"
          alt="sticker"
          className="title-sticker"
        />
      </div>

      <p className="home-description">
        Create the perfect palette or get inspired by thousands of beautiful color schemes.
      </p>

      <div className="home-buttons">
        <button className="create-btn1" onClick={() =>
            navigate('/color-generator')
        }>Start the Generator</button>
        <button className="create-btn2">Explore 10M+ Palettes</button>
      </div>

    </div>


        <div className="home-right">
          <div className="palette-wrapper">
            <ColorPalette />
          </div>
        </div>
      </main>

      <section className="brands">
        <div className="brands-title">
          TRUSTED BY 8+ MILLION CREATIVE MINDS AND TOP COMPANIES
        </div>

        <div className="brands-logos">
          <img src="/images/ea.svg" />
          <img src="/images/airbnb.svg" />
          <img src="/images/dropbox.svg" />
          <img src="/images/microsoft.svg" />
          <img src="/images/netflix.svg" />
          <img src="/images/github.svg" />
          <img src="/images/slack.svg" />
          <img src="/images/dreamworks.svg" />
          <img src="/images/disney.svg" />
          <img src="/images/thenewyorktimes.svg" />
          <img src="/images/disney.svg" />
          <img src="/images/netflix.svg" />
        </div>
      </section>

      <section className="footer-wrapper">
        <div className="footer-text">
          Coolors is the lightning-fast, ultra-intuitive color palette generator for designers, creators, and anyone seeking visual harmony.
          Instantly generate beautiful palettes by hitting the spacebar, or explore millions of popular ones. Extract colors from images, check accessibility, and preview them on real designs. Organize your palettes into projects and export them in multiple formats— effortlessly across web, apps, and plugins. Now with AI!
        </div>

        <div
          className="color-of-the-day"
          onClick={() =>
            navigate(`/colors/${colorOfTheDay.hex.replace('#', '')}`)
          }
        >
          <div className="cotd-title">COLOR OF THE DAY</div>

          <div className="cotd-content">
            <div
              className="cotd-color"
              style={{ background: colorOfTheDay.hex }}
            />

            <div className="cotd-text">
              <h3>{colorOfTheDay.name}</h3>
              <p>{colorOfTheDay.desc}</p>
              <span>{colorOfTheDay.hex}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="tools">
        <p className="tools-header">OUR TOOLS, LOVED BY MILLIONS</p>
        <div className="tools-grid">
          <div className="tool-card blue">
            <h2>Palette Generator</h2>
            <p>Create beautiful color schemes in seconds with the worldwide loved palette tool. Just hit the spacebar!</p>
            <span>START THE GENERATOR →</span>
          </div>
          <div className="tool-card indigo">
            <h2>Explore Palettes</h2>
            <p>Get inspired by thousands of beautiful color schemes. Search by colors, styles, topics or hex values.</p>
            <span>EXPLORE 10M+ PALETTES →</span>
          </div>
          <div className="tool-card purple">
            <h2>Image Picker</h2>
            <p>Extract beautiful colors from your photos and turn them into palettes for your projects.</p>
            <span>LAUNCH THE IMAGE PICKER →</span>
          </div>
          <div className="tool-card pink">
            <h2>Contrast Checker</h2>
            <p>Calculate the contrast ratio of text and background colors to make your content more accessible.</p>
            <span>TRY THE CONTRAST CHECKER →</span>
          </div>
          <div className="tool-card red">
            <h2>Palette Visualizer</h2>
            <p>Preview your colors on real designs to see how they look in context before using them in your projects.</p>
            <span>OPEN THE VISUALIZER →</span>
          </div>
          <div className="tool-card orange">
            <h2>Color Picker</h2>
            <p>Get useful color information like meaning, usage, variations, accessibility and conversion.</p>
            <span>LAUNCH THE COLOR PICKER →</span>
          </div>
          <div className="tool-card yellow">
            <h2>Tailwind Colors</h2>
            <p>Preview Tailwind CSS colors on real designs to see how they look in context before using them in your projects.</p>
            <span>GET TAILWIND COLORS →</span>
          </div>
          <div className="tool-card green">
            <h2>Color Bot</h2>
            <p>Chat with our Al-powered Color Bot, ask questions and get color suggestions for your projects.</p>
            <span>CHAT WITH COLOR BOT →</span>
          </div>
  </div>
</section>
<section>
  <section className="Resources">
    <div className="resources-header">MORE USEFUL RESOURCES</div>
    <div className="resources-grid">
      <div className="resource-card">
        <h2>Color Names</h2>
        <p2>Discover the names behind thousands of colors and their meanings.</p2>
      </div>
      <div className="resource-card">
        <h2>Free Fonts</h2>
        <p2>Learn the basics of color theory and how to use it in your designs.</p2>
      </div>
      <div className="resource-card">
        <h2>Collage Maker</h2>
        <p2>Explore articles on design, color trends, and creative inspiration.</p2>
      </div>
      <div className="resource-card">
        <h2>Browse Gradients</h2>
        <p2>Understand how colors affect emotions and behaviors in design.</p2>
      </div>
      <div className="resource-card">
        <h2>Gradient Palettes</h2>
        <p2>Discover the names behind thousands of colors and their meanings.</p2>
      </div>
      <div className="resource-card">
        <h2>Image Converter</h2>
        <p2>Explore articles on design, color trends, and creative inspiration.</p2>
      </div>
    </div>
  </section>
</section>
<section className="plugins">
  <p className="plugins-header">PLUGINS AND APPS</p>

  <div className="plugins-buttons">
    <button>iOS App</button>
    <button>Figma Plugin</button>
    <button>Adobe Extension</button>
  </div>

<ColorLetters
  text="Make something colorful!"
  colors={['#6369d1', '#60e1e0', '#d8d2e1', '#b88e8d', '#34435e']}
  defaultColor="#ededed"
/>

</section>
<section>
  <HomeFooter />
</section>
</div>
  );
}

export default Home;

