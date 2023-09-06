import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";


export const metadata = {
  title: 'GPT Prompt',
  description: 'Get your GPT prompt and get better result.',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Provider>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
        </Provider>
      </body>
    </html>
  )
}
