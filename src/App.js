import React from 'react';
import './App.css';
import Hello from './components/Hello';
// import {Hello} from './components/Hello'
import Welcome from './components/Welcome';
import JSX from './components/JSX';
import Message from './components/Message';
import Counter from './components/Counter';
import EventBinding from './components/EventBinding';
import Parent from './components/Parent';
import ConditionalRendering from './components/ConditionalRendering';
import ListRendering from './components/ListRendering';
import IndexAsAKey from './components/IndexAsAKey';
import Stylesheets from './components/Stylesheets'
import Inline from './components/Inline';
import CssModules from './components/CssModules';
import Form from './components/Form'
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
     {/* 
    
     <Welcome name='Temesghen'/>
     <JSX/> 
     <Message/>
    <Hello name='Biniam' title='Electrical Engineer' />
    <Hello name='Temesghen' title='Software Engineer'>
       Computer science
     </Hello>
     <Welcome name='Biniam'>
       Electrical engineer
     </Welcome>
     <Counter/>
    <EventBinding/>
    <Parent/>
    <ConditionalRendering/>
    <ListRendering/>
  <IndexAsAKey/>
   <Stylesheets primary={true}/>
   <Stylesheets primary={false}/>
   <Inline/>
   <CssModules/>
    <Form/>
  <LifeCycleA/>
  <FragmentDemo/>
  */}
  <Table/>
    </div>
  );
}

export default App;
