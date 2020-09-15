import "../styles/globals.scss";
import Head from "next/head";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>AmpliFit</title>
      </Head>
      <Header />
      <div className="page-wrapper">
        <Component {...pageProps} />
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            ©2020 Amplitude, Inc. All rights reserved. Amplitude is a registered
            trademark of Amplitude, Inc. &nbsp;&nbsp;&nbsp;
            <a>Terms of Service</a>
            &nbsp;&nbsp;&nbsp;
            <a>Privacy</a>
            &nbsp;&nbsp;&nbsp;
            <a>Cookie Settings</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default MyApp;
