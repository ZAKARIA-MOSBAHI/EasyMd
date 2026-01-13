import "./App.css";
import Editor from "./components/Editor/Editor";
import { Links } from "./constants/Links";
 function App() {
 
  return (
    <div className="app">
      <header className="app_header">
              <h1>Markdown, Without Writing Markdown.</h1>
      <h2>EasyMd lets you create README files and markdown documents in a rich text editor—no syntax, no learning curve. Just write, and we handle the markdown.</h2>
      <div className="app_links">
          {Links.map((l)=>{
            const Icon = l.icon; 
            return(
              <a  href={l.path} key={l.name} target="_blank" rel="noopener noreferrer"
  aria-label={`${l.name} (opens in a new tab)`}>
                <Icon width={l.iconWidth} height={l.iconHeight} aria-hidden="true"
    focusable="false"/> 
                {l.name}
              </a>
            )
      })}
            
      </div>

      </header>
      
 
     <Editor/>
      <header style={{
        maxWidth : 1200 ,
        margin : '0 auto', 
        width : '100%', 
        display : 'flex'
        , flexDirection : 'column'
        , gap : '0.5rem',
        marginBlock : 32
      }}>
              <h1 style={{lineHeight : '70px',textAlign : 'center' , fontSize : 64 , margin : '0 auto' , maxWidth : '95%'}}>Features</h1>
      <h2 style={{fontSize : 20 , fontWeight : 'lighter' , maxWidth : '700px' , margin: '0 auto'}}>EasyMd lets you create README files and markdown documents in a rich text editor—no syntax, no learning curve. Just write, and we handle the markdown.</h2>

      </header>
     </div>
  );
}

export default App;
