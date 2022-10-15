import { useState } from 'react';
import './styles/global.css';

export function App() {

  return (
    <>
      <h1 className="font-bold text-sm text-blue-300">Todo List</h1>

      <input className="bg-purple font-medium px-4 py-2 rounded text-white hover:bg-purple-300"
        placeholder="Insira um item na lista"      />
    </>
  )
}