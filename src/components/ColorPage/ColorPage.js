import { useParams } from 'react-router-dom';
import { COLORS } from '../../data/Colors';
import Header from '../Header/Header';
import './ColorPage.css';
import HomeFooter from '../HomeFooter/HomeFooter';

const ColorPage = () => {
  const { hex } = useParams();

  const color = COLORS.find(
    c => c.hex.replace('#', '').toLowerCase() === hex.toLowerCase()
  );

  if (!color) {
    return (
      <>
        <Header />
        <h2 style={{ padding: 40 }}>Color not found</h2>
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="color-page">
        {/* HEADER */}
        <div className="color-header">
          <span className="breadcrumb">
            Colors <span>›</span> {color.name}
          </span>

          <h1>{color.name}</h1>
          <p>{color.desc}</p>
        </div>
        <div
          className="color-preview"
          style={{ backgroundColor: color.hex }}
        >
          <span className="hex">
            {color.hex.replace('#', '')}
          </span>
        </div>
        <div className="conversion">
            <h2>Conversion</h2>
            <div className="conversion-row">
                <span>HEX</span>
                <span>{color.hex}</span>
                </div>
                <div className="conversion-row">
                    <span>RGB</span>
                    <span>48, 25, 52</span>
                    </div>
                    <div className="conversion-row">
                        <span>HSL</span>
                        <span>288°, 35%, 15%</span>
                        </div>
                    <div className="conversion-row">
                        <span>CMYK</span>
                        <span>8%, 52%, 0%, 80%</span>
                        </div>
                    </div>
                    <HomeFooter />
                </div>
            
                </>
);
};

export default ColorPage;

