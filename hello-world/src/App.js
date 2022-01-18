import logo from './logo.svg';
import './App.css';
import Component1 from './components/Greet'
import Component2 from './components/Welcome'
import Component3 from './components/Hello'
import Component4 from './components/Message'
import Component5 from './components/Counter'
import Component6 from './components/FunctionClick'
import Component7 from './components/ClassClick'
import Component8 from './components/EventBind'
import Component9 from './components/Parent'
import Component10 from './components/UserGreeting'
import Component11 from './components/NameList'
import Component12 from './components/Stylesheet'
import Component13 from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Component14 from './components/Form'
import Component15 from './components/LifecycleA'
import Component16 from './components/Fragment'
import Component17 from './components/Table'
import Component18 from './components/ParentComp'
import Component19 from './components/Refs'
import Component20 from './components/FocusInp'
import Component21 from './components/FRParentInput'
import Component22 from './components/Portal'
import Component23 from './components/Hero'
import ErrorBound from './components/ErrorBound';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './User';
import RenderCounter from './components/RenderCounter';

function App() {
  return (
    <div className="App">
      {/* <Component1 name="Test1" last="Hello1">
        <p>This is a child tag</p>
      </Component1>
      <Component1 name="Test2" last="Hello2">
        <button>Click here!</button>
      </Component1>
      <Component1 name="Test3" last="Hello3"></Component1>
      <Component2 name="Harry" last="Potter"></Component2>
      <Component2 name="Hermione" last="Granger"></Component2>
      <Component2 name="Ron" last="Weasley"></Component2>
      <Component3></Component3>
      <Component4></Component4> 
      <Component5></Component5>  
      <Component6></Component6>
      <Component7></Component7>
      <Component8></Component8> 
      <Component9></Component9> 
      <Component10></Component10> 
      <Component11></Component11>
      <Component12 primary={true}></Component12>
      <Component13></Component13>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> 
      <Component14></Component14> 
      <Component15></Component15> 
      <Component16></Component16> 
      <Component17></Component17> 
      <Component18></Component18> 
      <Component19></Component19> 
      <Component20></Component20> 
      <Component21></Component21> 
      <Component22></Component22> */}
      
      {/* <ErrorBound>
        <Component23 heroName = "Spiderman"></Component23>
      </ErrorBound>
      <ErrorBound>
        <Component23 heroName = "IronMan"></Component23>
      </ErrorBound>
      <ErrorBound>
        <Component23 heroName = "Thanos"></Component23>
      </ErrorBound> */}

      {/* <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter> */}

      {/* <ClickCounter2></ClickCounter2>
      <HoverCounter2></HoverCounter2>
      <User render={ (isLoggedIn) => isLoggedIn ? 'Ena Kohli' : 'Guest'}></User> */}

      <RenderCounter render={(count, incrementCount) => 
      <ClickCounter2 count={count} incrementCount={incrementCount}></ClickCounter2>}></RenderCounter>
      <RenderCounter render={(count, incrementCount) => 
      <HoverCounter2 count={count} incrementCount={incrementCount}></HoverCounter2>}></RenderCounter>
      
    </div>
  );
}

export default App;
