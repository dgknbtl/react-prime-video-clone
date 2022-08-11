import IconArrowLeft from "assets/svg/arrow-left.svg";
import IconArrowRight from "assets/svg/arrow-right.svg";
import { useState } from "react";

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const sliders = [
    "https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_Goliath_S4_NoLocaleOnly/ce20aeee-3399-4a4c-b64c-80b0dbab79cf._UR3000,600_SX1500_FMwebp_.jpeg",
    "https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_TheSummerITurnedPretty_S1_NoLocaleOnly/c8403481-5ce5-48ac-84b2-016e1f1c3362._UR3000,600_SX1500_FMwebp_.jpeg",
    "https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_PaperGirls_S1_NoLocaleOnly/3be4b5aa-f3ea-4402-9af3-f46ade8c0beb._UR3000,600_SX1500_FMwebp_.jpeg",
    "https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_ThirteenLives/c1c16cda-9905-4d98-ba29-19f5763f8aaa._UR3000,600_SX1500_FMwebp_.jpeg",
    "https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_AllOrNothing_Arsenal_S1/02fe2947-085f-415d-bb2e-c9a0f4efc71a._UR3000,600_SX1500_FMwebp_.jpeg",
    "https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_SH_TheMarvelousMrsMaisel_S4_NoLocale/d2780498-5e63-4ada-9a0e-25b4812cd6e0._UR3000,600_SX1500_FMwebp_.jpeg",
  ];

  return (
    <div className="relative">
      {sliderIndex !== 0 && (
        <div
          onClick={() => setSliderIndex(sliderIndex - 1)}
          className="top-1/2 -translate-y-1/2 p-4 absolute cursor-pointer"
        >
          <img src={IconArrowLeft} alt="arrow" />
        </div>
      )}
      <div className="flex items-center justify-center">
        <img src={sliders[sliderIndex]} className="w-100 h-auto" alt="slider" />
      </div>
      {sliders[sliderIndex] !== sliders.at(-1) && (
        <div
          onClick={() => setSliderIndex(sliderIndex + 1)}
          className="top-1/2 -translate-y-1/2 p-4 right-0 absolute cursor-pointer"
        >
          <img src={IconArrowRight} alt="arrow" />
        </div>
      )}
    </div>
  );
};

export default Slider;
