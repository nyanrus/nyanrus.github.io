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
  </section>
  <p>Thank you for visiting.</p>



  <style jsx dynamic aria-hidden="true">
  {`
    @font-face {
      font-family: "NotoSansJP";
      src:
        url("NotoSansJP-VariableFont_wght.ttf") format('truetype');
    }
    body {
      font-family: NotoSansJP;
      font-variation-settings: 'wght' 300;
      background: #F2F2F2;
    }
    h1, h2 {
      font-family: NotoSansJP;
      font-variation-settings: 'wght' 500;
    }
    h2 {
      font-size: 1.3em;
    }
    h3 {
      font-family: NotoSansJP;
      font-variation-settings: 'wght' 400;
    }
    body > div {
      margin: 90px 160px;
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
  `}
</style></>
}

export default Home;