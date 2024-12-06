import type {} from "solid-styled-jsx";
function Home() {
  return <>
  <h1>NyanRus's Page</h1>
  <section>
  <h2>Profile</h2>
  <div>
    <h3>Language</h3>
    <p>
    Korean and Japanese as native.
    English as well.
    </p>
  </div>
  <div><h3>Skills</h3><p>Typescript</p></div>
  </section>
  <section>
    <h2>
      Projects
    </h2>
    <div>
      <h3>Noraneko Browser</h3>
      <p>Artifact-based browser, motivated by Floorp Browser</p>
    </div>
  </section>
  <section>
    <h2>
      SNS
    </h2>
    <div>
      <label>Twitter:</label><a href="https://twitter.com/NyanRus">@NyanRus</a>
    </div>
    <div>
      Misskey:
      <ul>
        <li>
          <a href="https://misskey.io/@nyanrus">@nyanrus@misskey.io</a>
        </li>
        <li>
          <a href="https://k.lapy.link/@nyanrus">@nyanrus@k.lapy.link</a>
        </li>
      </ul>
    </div>
    <div>
      <label>Discord:</label>
      <a href="https://discord.com/users/285656419695460352">@nyanrus</a>
      <p>I am currently active on Discord Ablaze Community Server</p>
    </div>
    <div>
    <label>GitHub:</label>
    <a href="https://github.com/nyanrus">@nyanrus</a>
    </div>
  </section>
  <p>Thank you for visiting.</p>
  <a href={"https://github.com/nyanrus/nyanrus.github.io"}>Page Source</a>



  <style jsx dynamic aria-hidden="true">
  {`
    @font-face {
      font-family: "Lexend";
      src:
        url("Lexend-VariableFont_wght.woff2") format('woff2');
        url("Lexend-VariableFont_wght.woff") format('woff');
    }
    body {
      font-family: Lexend, 'sans-serif';
      font-variation-settings: 'wght' 300;
      background: #F2F2F2;
    }
    h1, h2 {
      font-variation-settings: 'wght' 500;
    }
    h2 {
      font-size: 1.3em;
    }
    h3 {
      font-variation-settings: 'wght' 400;
    }
    body > div {
      margin: calc(100vh/14) calc(100vw/12);
    }
    section > div {
      padding-left: 2em;
    }
    section > div > p {
      padding-left: 2em;
    }
    div > a {
      padding-left: 0.2em;
    }
    a {
    font-size:1.2em;
    }
    li {
      padding-bottom: 8px;
    }
  `}
</style></>
}

export default Home;
