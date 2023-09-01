import video from "../../videos/video.mp4";
import "./Hero.styles.scss";

export function Hero() {
  return (
    <div className="hero" id="onama">
      <div className="hero__text">
        <h2 className="hero__text-head">JJ UNIVERSUM</h2>
        <h3 className="hero__text-content">
          Brazilski džiju-džicu naglašava tehnike borbe na tlu i predajnog hvata
          (engl. submission hold) uključujući zglobne koštce i gušenja već
          prisutna u mnogim drugim borilačkim vještinama s ili bez naglaska na
          borbi na tlu. Premisa je da većina prednosti većeg i snažnijeg
          protivnika dolazi od duljeg dohvata i snažnijih udaraca mogu biti
          negirana ako borba bude na tlu.
        </h3>
      </div>
      <div className="hero__video">
	  <iframe width="560" height="315" src="https://www.youtube.com/embed/C-Wo1qmlhpI?si=HjT9Ms120QlUmrgV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  );
}
