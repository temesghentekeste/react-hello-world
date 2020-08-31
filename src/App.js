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
import ParentPureReg from './components/ParentPureReg'
import RefsDemo from './components/RefsDemo'
import InputRefParent from './components/InputRefParent';
import RefForwardingParent from './components/RefForwardingParent';
import PortalsDemo from './components/PortalsDemo'
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary'
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  const heros = ['Batman', 'Superman', 'Jocker'];
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
  <Table/>
    <ParentPureReg/>
  <RefsDemo/>
  <InputRefParent/>
  <RefForwardingParent/>
  <PortalsDemo/>
  {
    heros.map( hero => <ErrorBoundary><Hero heroName={hero}/></ErrorBoundary>)
  }
  */}
    <ClickCounter name="Temesghen"/>
    <HoverCounter/>
    </div>
  );
}

export default App;
