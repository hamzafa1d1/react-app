import { useState } from 'react'
import './App.css';
import Hello from './components/features/Hello';
import { Button } from './components/ui/button';
import { NavigationMenu } from '@radix-ui/react-navigation-menu';
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './components/ui/navigation-menu';
import Navbar from './components/features/Navbar';

function App() {
  return (
    <><header className="fixed top-0 left-0 w-full bg-background shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Navbar>
        </Navbar>
      </div>
    </header><>
        <Hello /><Button /></></>
  )
}

export default App
