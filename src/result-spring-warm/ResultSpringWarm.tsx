import Top1Img from './spring-warm-top-1.png';
import Top2Img from './spring-warm-top-2.png';
import Top3Img from './spring-warm-top-3.png';
import BottomImg from './spring-warm-bottom.png';
import Choice1Img from './spring-warm-choice-1.png';
import Choice2Img from './spring-warm-choice-2.png';
import LoadMoreImg from './spring-warm-load-more.png';
import { useEffect } from 'react';
import { useState } from 'react';

function ResultSpringWarm() {
  const [name, setName] = useState('김컬러');
  useEffect(() => {
    const _name = localStorage.getItem('personal-color-name');
    setName(_name ?? '김컬러');
    const $app = document.querySelector('#root');
    if (!$app) return;
    $app.classList.contains('h100') && $app.classList.remove('h100');
    return () => {
      !$app.classList.contains('h100') && $app.classList.add('h100');
    };
  }, []);
  return (
    <div className="result-page result-spring-warm">
      <div className="top">
        <div>
          <img src={Top3Img} />
        </div>
      </div>
      <div className="grid-2">
        <a
          href="https://bit.ly/3FPB4Vv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Choice1Img} alt="" />
        </a>
        <a
          href="https://bit.ly/3FV8wdo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Choice2Img} alt="" />
        </a>
      </div>
      <img src={BottomImg} alt="" />
      <a
        href="https://bit.ly/3FQLtQC"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={LoadMoreImg} alt="" />
      </a>
    </div>
  );
}

export default ResultSpringWarm;
